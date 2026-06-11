"use client";

import { motion } from "framer-motion";

export default function MobileScrollyCanvas() {
  return (
    <div className="fixed inset-0 w-full h-[100vh] bg-[#121212] z-0 pointer-events-none overflow-hidden">
      
      {/* Reintroduced 3D Animated Background - Optimized for Mobile */}
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

      {/* Optimized Background Glowing Orbs for Mobile - Reduced blur and scale animation for performance */}
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

      {/* Static image fallback to simulate the canvas look without preloading 60 images */}
      <div 
        className="absolute inset-0 bg-center bg-cover bg-no-repeat opacity-30"
        style={{ 
          backgroundImage: "url('/sequence/frame_000_delay-0.066s.png')",
          backgroundPosition: "center 20%" 
        }}
      />
      
      {/* Dark overlay to ensure text readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#121212]/90 via-[#121212]/70 to-[#121212]"/>
    </div>
  );
}
