"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useTransform, MotionValue } from "framer-motion";

const FRAME_COUNT = 150;
const SKIP_FRAMES = 2; // Load every 2nd frame to save RAM on mobile

interface MobileScrollyCanvasProps {
  scrollYProgress: MotionValue<number>;
}

export default function MobileScrollyCanvas({ scrollYProgress }: MobileScrollyCanvasProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [images, setImages] = useState<HTMLImageElement[]>([]);
  
  // Total images loaded will be 75
  const loadedFrameCount = Math.floor(FRAME_COUNT / SKIP_FRAMES);
  
  // Map scroll to 0 - 74
  const frameIndex = useTransform(scrollYProgress, [0, 1], [0, loadedFrameCount - 1]);
  const canvasOpacity = useTransform(scrollYProgress, [0, 0.8, 1], [1, 1, 0]);

  // Preload images
  useEffect(() => {
    const loadedImages: HTMLImageElement[] = [];
    let firstDrawn = false;

    for (let i = 0; i < FRAME_COUNT; i += SKIP_FRAMES) {
      const img = new Image();
      const num = i.toString().padStart(3, "0");
      img.src = `/sequence/frame_${num}_delay-0.066s.png`;
      
      img.onload = () => {
        if (!firstDrawn && canvasRef.current) {
          firstDrawn = true;
          drawFrame(img, canvasRef.current);
        }
      };
      
      loadedImages.push(img);
    }
    setImages(loadedImages);
  }, []);

  // Update canvas on scroll
  useEffect(() => {
    return frameIndex.on("change", (latest) => {
      const currentFrame = Math.round(latest);
      const clampedFrame = Math.max(0, Math.min(currentFrame, images.length - 1));
      if (images[clampedFrame] && canvasRef.current) {
        drawFrame(images[clampedFrame], canvasRef.current);
      }
    });
  }, [frameIndex, images]);

  // Canvas drawing logic
  const drawFrame = (img: HTMLImageElement, canvas: HTMLCanvasElement) => {
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const dpr = window.devicePixelRatio || 1;
    const rect = canvas.getBoundingClientRect();
    
    if (canvas.width !== rect.width * dpr || canvas.height !== rect.height * dpr) {
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
    }

    ctx.scale(dpr, dpr);

    if (!img.complete || img.naturalWidth === 0) {
      ctx.fillStyle = "transparent";
      ctx.clearRect(0, 0, rect.width, rect.height);
      return;
    }

    const canvasRatio = rect.width / rect.height;
    const imgRatio = img.naturalWidth / img.naturalHeight;
    let drawWidth = rect.width;
    let drawHeight = rect.height;
    let offsetX = 0;
    let offsetY = 0;

    const scaleFactor = 1.25;

    if (canvasRatio > imgRatio) {
      drawHeight = (drawWidth / imgRatio) * scaleFactor;
      drawWidth = drawWidth * scaleFactor;
      offsetY = ((rect.height - drawHeight) / 2) + 50;
      offsetX = (rect.width - drawWidth) / 2;
    } else {
      drawWidth = (drawHeight * imgRatio) * scaleFactor;
      drawHeight = drawHeight * scaleFactor;
      offsetX = (rect.width - drawWidth) / 2;
      offsetY = ((rect.height - drawHeight) / 2) + 50;
    }

    ctx.clearRect(0, 0, rect.width, rect.height);
    ctx.drawImage(img, offsetX, offsetY, drawWidth, drawHeight);
    ctx.setTransform(1, 0, 0, 1, 0, 0);
  };

  // Handle resize
  useEffect(() => {
    const handleResize = () => {
      const currentFrame = Math.round(frameIndex.get());
      const clampedFrame = Math.max(0, Math.min(currentFrame, images.length - 1));
      if (images[clampedFrame] && canvasRef.current) {
        drawFrame(images[clampedFrame], canvasRef.current);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [images, frameIndex]);

  return (
    <div className="absolute inset-0 w-full h-full z-0 pointer-events-none">
      <div className="sticky top-0 w-full h-[100vh] overflow-hidden bg-[#121212]">
        
        {/* 3D Animated Background - Optimized for Mobile */}
        <div className="absolute inset-0 pointer-events-none [perspective:800px] flex items-center justify-center opacity-40">
          <motion.div 
            animate={{ rotateX: [0, 360], rotateY: [0, 360] }}
            transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
            className="absolute w-[300px] h-[300px] border-[2px] border-cyan-500/20 rounded-[40px]"
            style={{ transformStyle: 'preserve-3d' }}
          />
          <motion.div 
            animate={{ rotateX: [360, 0], rotateZ: [0, 360] }}
            transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
            className="absolute w-[400px] h-[400px] border-[1px] border-blue-500/30 rounded-full border-dashed"
            style={{ transformStyle: 'preserve-3d' }}
          />
        </div>

        {/* Optimized Background Glowing Orbs for Mobile */}
        <motion.div 
          animate={{ opacity: [0.2, 0.4, 0.2] }} 
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[20%] left-[10%] w-32 h-32 bg-blue-600/30 rounded-full blur-[40px]" 
        />
        <motion.div 
          animate={{ opacity: [0.1, 0.3, 0.1] }} 
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute bottom-[30%] right-[10%] w-40 h-40 bg-orange-600/20 rounded-full blur-[40px]" 
        />

        <motion.canvas
          ref={canvasRef}
          style={{ opacity: canvasOpacity }}
          className="relative z-10 w-full h-full object-cover"
        />
        
        {/* Dark overlay to ensure text readability */}
        <div className="absolute inset-0 z-20 bg-gradient-to-b from-[#121212]/90 via-[#121212]/70 to-[#121212]"/>
      </div>
    </div>
  );
}
