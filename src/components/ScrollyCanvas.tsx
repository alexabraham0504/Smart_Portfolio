"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useTransform, MotionValue } from "framer-motion";

const FRAME_COUNT = 150; // 0 to 149

interface ScrollyCanvasProps {
  scrollYProgress: MotionValue<number>;
}

const ScrollyCanvas: React.FC<ScrollyCanvasProps> = ({ scrollYProgress }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [images, setImages] = useState<HTMLImageElement[]>([]);
  
  // Map 0-1 scroll progress to 0-149 frame index
  const frameIndex = useTransform(scrollYProgress, [0, 0.8], [0, FRAME_COUNT - 1]);
  const canvasOpacity = useTransform(scrollYProgress, [0, 0.1, 0.75, 0.85], [0, 1, 1, 0]);

  // Preload images
  useEffect(() => {
    const loadedImages: HTMLImageElement[] = [];
    let loadedCount = 0;

    for (let i = 0; i < FRAME_COUNT; i++) {
      const img = new Image();
      // Format number to 3 digits (e.g., 000, 001, ..., 149)
      const num = i.toString().padStart(3, "0");
      img.src = `/sequence/frame_${num}_delay-0.066s.png`;
      
      img.onload = () => {
        loadedCount++;
        // If it's the very first image, draw it immediately
        if (i === 0 && canvasRef.current) {
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
      if (images[currentFrame] && canvasRef.current) {
        drawFrame(images[currentFrame], canvasRef.current);
      }
    });
  }, [frameIndex, images]);

  // Canvas drawing logic with object-fit: cover
  const drawFrame = (img: HTMLImageElement, canvas: HTMLCanvasElement) => {
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Handle high DPI displays
    const dpr = window.devicePixelRatio || 1;
    const rect = canvas.getBoundingClientRect();
    
    if (canvas.width !== rect.width * dpr || canvas.height !== rect.height * dpr) {
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
    }

    ctx.scale(dpr, dpr);

    // If image hasn't loaded properly, draw a placeholder
    if (!img.complete || img.naturalWidth === 0) {
      ctx.fillStyle = "transparent";
      ctx.clearRect(0, 0, rect.width, rect.height);
      return;
    }

    // Object-fit cover logic
    const canvasRatio = rect.width / rect.height;
    const imgRatio = img.naturalWidth / img.naturalHeight;
    let drawWidth = rect.width;
    let drawHeight = rect.height;
    let offsetX = 0;
    let offsetY = 0;

    const scaleFactor = 1.25; // Scale up 25% to completely hide the AI watermark

    if (canvasRatio > imgRatio) {
      // Canvas is wider than image
      drawHeight = (drawWidth / imgRatio) * scaleFactor;
      drawWidth = drawWidth * scaleFactor;
      offsetY = ((rect.height - drawHeight) / 2) + 50; // Shift down slightly
      offsetX = (rect.width - drawWidth) / 2;
    } else {
      // Image is wider than canvas
      drawWidth = (drawHeight * imgRatio) * scaleFactor;
      drawHeight = drawHeight * scaleFactor;
      offsetX = (rect.width - drawWidth) / 2;
      offsetY = ((rect.height - drawHeight) / 2) + 50; // Shift down slightly
    }

    ctx.clearRect(0, 0, rect.width, rect.height);
    ctx.drawImage(img, offsetX, offsetY, drawWidth, drawHeight);
    
    // Reset scale for next draw
    ctx.setTransform(1, 0, 0, 1, 0, 0);
  };

  // Handle resize
  useEffect(() => {
    const handleResize = () => {
      const currentFrame = Math.round(frameIndex.get());
      if (images[currentFrame] && canvasRef.current) {
        drawFrame(images[currentFrame], canvasRef.current);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [images, frameIndex]);

  return (
    <div className="relative w-full h-[500vh] bg-[#121212]">
      <div className="sticky top-0 w-full h-screen overflow-hidden bg-[#121212]">
        
        {/* Animated Background Glowing Orbs */}
        <motion.div 
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }} 
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-600/30 rounded-full blur-[128px]" 
        />
        <motion.div 
          animate={{ scale: [1, 1.5, 1], opacity: [0.2, 0.5, 0.2] }} 
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute bottom-1/4 right-1/4 w-[30rem] h-[30rem] bg-orange-600/20 rounded-full blur-[128px]" 
        />

        <motion.canvas
          ref={canvasRef}
          style={{ opacity: canvasOpacity }}
          className="relative z-10 w-full h-full object-cover"
        />
      </div>
    </div>
  );
};

export default ScrollyCanvas;
