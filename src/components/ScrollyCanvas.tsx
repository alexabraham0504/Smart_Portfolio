"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import { motion, useTransform, MotionValue } from "framer-motion";

const FRAME_COUNT_DESKTOP = 150;
const FRAME_COUNT_MOBILE = 60; // Fewer frames on mobile to save memory

interface ScrollyCanvasProps {
  scrollYProgress: MotionValue<number>;
}

const ScrollyCanvas: React.FC<ScrollyCanvasProps> = ({ scrollYProgress }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [images, setImages] = useState<HTMLImageElement[]>([]);
  const [isMobile, setIsMobile] = useState(false);

  // Detect mobile on mount
  useEffect(() => {
    const checkMobile = () => window.innerWidth < 768;
    setIsMobile(checkMobile());
    
    const handleResize = () => setIsMobile(checkMobile());
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const frameCount = isMobile ? FRAME_COUNT_MOBILE : FRAME_COUNT_DESKTOP;

  // Map 0-1 scroll progress to frame index
  const frameIndex = useTransform(scrollYProgress, [0, 0.8], [0, frameCount - 1]);
  const canvasOpacity = useTransform(scrollYProgress, [0, 0.1, 0.75, 0.85], [0, 1, 1, 0]);

  // Canvas drawing logic with object-fit: cover
  const drawFrame = useCallback((img: HTMLImageElement, canvas: HTMLCanvasElement) => {
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Handle high DPI displays — cap at 2x on mobile to save memory
    const maxDpr = isMobile ? 2 : (window.devicePixelRatio || 1);
    const dpr = Math.min(window.devicePixelRatio || 1, maxDpr);
    const rect = canvas.getBoundingClientRect();
    
    // Don't draw if canvas has no dimensions yet
    if (rect.width === 0 || rect.height === 0) return;

    if (canvas.width !== Math.round(rect.width * dpr) || canvas.height !== Math.round(rect.height * dpr)) {
      canvas.width = Math.round(rect.width * dpr);
      canvas.height = Math.round(rect.height * dpr);
    }

    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

    // If image hasn't loaded properly, draw a placeholder
    if (!img.complete || img.naturalWidth === 0) {
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
    
    // Reset transform
    ctx.setTransform(1, 0, 0, 1, 0, 0);
  }, [isMobile]);

  // Initialize canvas size on mount
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const initCanvas = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, isMobile ? 2 : 3);
      const rect = canvas.getBoundingClientRect();
      if (rect.width > 0 && rect.height > 0) {
        canvas.width = Math.round(rect.width * dpr);
        canvas.height = Math.round(rect.height * dpr);
      }
    };

    // Try immediately, then with a small delay for layout to settle
    initCanvas();
    const timer = setTimeout(initCanvas, 100);
    return () => clearTimeout(timer);
  }, [isMobile]);

  // Preload images — on mobile, sample every Nth frame from 150 to get 60
  useEffect(() => {
    const loadedImages: HTMLImageElement[] = [];
    let firstDrawn = false;

    for (let i = 0; i < frameCount; i++) {
      const img = new Image();
      // On mobile, map frame index to skip frames evenly across the 150 sequence
      let actualFrame: number;
      if (isMobile) {
        actualFrame = Math.round((i / (FRAME_COUNT_MOBILE - 1)) * (FRAME_COUNT_DESKTOP - 1));
      } else {
        actualFrame = i;
      }
      const num = actualFrame.toString().padStart(3, "0");
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
  }, [frameCount, isMobile, drawFrame]);

  // Update canvas on scroll
  useEffect(() => {
    return frameIndex.on("change", (latest) => {
      const currentFrame = Math.round(latest);
      const clampedFrame = Math.max(0, Math.min(currentFrame, images.length - 1));
      if (images[clampedFrame] && canvasRef.current) {
        drawFrame(images[clampedFrame], canvasRef.current);
      }
    });
  }, [frameIndex, images, drawFrame]);

  // Handle resize with ResizeObserver for better mobile support
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const observer = new ResizeObserver(() => {
      const currentFrame = Math.round(frameIndex.get());
      const clampedFrame = Math.max(0, Math.min(currentFrame, images.length - 1));
      if (images[clampedFrame]) {
        drawFrame(images[clampedFrame], canvas);
      }
    });

    observer.observe(canvas);
    return () => observer.disconnect();
  }, [images, frameIndex, drawFrame]);

  return (
    <div className="relative w-full h-[500vh] bg-[#121212]">
      <div className="sticky top-0 w-full h-screen overflow-hidden bg-[#121212]">
        
        {/* Animated Background Glowing Orbs — smaller on mobile */}
        <motion.div 
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }} 
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 left-1/4 w-48 h-48 md:w-96 md:h-96 bg-blue-600/30 rounded-full blur-[80px] md:blur-[128px]" 
        />
        <motion.div 
          animate={{ scale: [1, 1.5, 1], opacity: [0.2, 0.5, 0.2] }} 
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute bottom-1/4 right-1/4 w-60 h-60 md:w-[30rem] md:h-[30rem] bg-orange-600/20 rounded-full blur-[80px] md:blur-[128px]" 
        />

        <motion.canvas
          ref={canvasRef}
          style={{ opacity: canvasOpacity }}
          className="relative z-10 w-full h-full"
        />
      </div>
    </div>
  );
};

export default ScrollyCanvas;
