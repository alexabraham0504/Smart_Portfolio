"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function AmbientBackground() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  if (!isClient) return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Thin Grid Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:3rem_3rem]" />
      
      {/* Soft Scan Line Effects */}
      <div className="absolute inset-0 bg-[linear-gradient(transparent_50%,rgba(0,0,0,0.1)_50%)] bg-[length:100%_4px] opacity-20" />

      {/* Mouse Reactive Lighting */}
      <motion.div 
        className="absolute w-[800px] h-[800px] rounded-full bg-blue-600/10 blur-[150px]"
        animate={{
          x: mousePosition.x - 400,
          y: mousePosition.y - 400,
        }}
        transition={{ type: "tween", ease: "backOut", duration: 0.8 }}
      />
      {/* Secondary Violet Glow */}
      <motion.div 
        className="absolute w-[600px] h-[600px] rounded-full bg-violet-600/10 blur-[150px]"
        animate={{
          x: mousePosition.x - 300,
          y: mousePosition.y - 300,
        }}
        transition={{ type: "tween", ease: "backOut", duration: 1.2 }}
      />
      
      {/* Floating Holographic Particles */}
      {[...Array(30)].map((_, i) => (
        <motion.div
          key={i}
          initial={{
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight,
            opacity: Math.random() * 0.5
          }}
          animate={{
            y: [null, Math.random() * -200 - 100],
            opacity: [null, Math.random() * 0.8, 0]
          }}
          transition={{
            duration: Math.random() * 15 + 10,
            repeat: Infinity,
            ease: "linear",
            delay: Math.random() * 5
          }}
          className="absolute w-[2px] h-[2px] bg-blue-400 rounded-full shadow-[0_0_10px_rgba(96,165,250,1)]"
        />
      ))}

      {/* Tiny floating data indicators */}
      <motion.div 
        animate={{ opacity: [0, 0.5, 0] }}
        transition={{ duration: 4, repeat: Infinity, delay: 1 }}
        className="absolute top-[20%] left-[10%] text-blue-400 font-mono text-[8px] tracking-[0.3em] uppercase opacity-0"
      >
        SYS.READY // 100%
      </motion.div>
      <motion.div 
        animate={{ opacity: [0, 0.5, 0] }}
        transition={{ duration: 5, repeat: Infinity, delay: 3 }}
        className="absolute bottom-[30%] right-[15%] text-violet-400 font-mono text-[8px] tracking-[0.3em] uppercase opacity-0"
      >
        DATA.SYNC // OK
      </motion.div>
      <motion.div 
        animate={{ opacity: [0, 0.4, 0] }}
        transition={{ duration: 6, repeat: Infinity, delay: 2 }}
        className="absolute top-[60%] left-[5%] text-cyan-400 font-mono text-[8px] tracking-[0.3em] uppercase opacity-0"
      >
        NET.SECURE //
      </motion.div>
    </div>
  );
}
