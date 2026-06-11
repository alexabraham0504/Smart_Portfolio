"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { Layers, Brain, Cloud, Terminal } from "lucide-react";

const TITLES = [
  "Building intelligent systems.",
  "Crafting immersive experiences.",
  "Designing future-ready products."
];

export default function MobileOverlay() {
  const [titleIndex, setTitleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTitleIndex((prev) => (prev + 1) % TITLES.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative z-10 w-full min-h-screen pt-24 pb-16 px-6 flex flex-col justify-center gap-10 overflow-hidden">
      
      {/* 3D Radar Background */}
      <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none -z-10 opacity-30">
        <div className="absolute inset-0 flex items-center justify-center [perspective:1000px]">
          <motion.div
            animate={{ rotateX: [60, 60], rotateZ: [0, 360] }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="w-[150vw] h-[150vw] max-w-[600px] max-h-[600px] border-[0.5px] border-cyan-500/30 rounded-full"
            style={{ transformStyle: 'preserve-3d' }}
          />
          <motion.div
            animate={{ rotateX: [60, 60], rotateZ: [360, 0] }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            className="absolute w-[100vw] h-[100vw] max-w-[400px] max-h-[400px] border-[1px] border-blue-500/20 rounded-full border-dashed"
            style={{ transformStyle: 'preserve-3d' }}
          />
        </div>
      </div>

      {/* Top Header/Logo Alternative */}
      <div className="absolute top-0 left-0 w-full p-6 flex justify-between items-center z-50">
        <div className="flex items-center gap-1 text-2xl font-black tracking-tighter">
          <span className="text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.8)]">A</span>
          <span className="text-blue-500 drop-shadow-[0_0_10px_rgba(59,130,246,0.8)]">A</span>
        </div>
        <a 
          href="#contact"
          className="flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 text-[10px] font-mono tracking-widest text-white uppercase backdrop-blur-md active:bg-white/10"
        >
          CONNECT
          <div className="w-1.5 h-1.5 rounded-full bg-blue-500 shadow-[0_0_8px_rgba(59,130,246,1)]" />
        </a>
      </div>

      {/* Hero Header */}
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="flex flex-col items-center text-center mt-12"
      >
        <span className="text-blue-400 font-mono text-[10px] tracking-[0.2em] uppercase mb-4 drop-shadow-[0_0_8px_rgba(59,130,246,0.6)]">
          AI ENGINEER & FULL STACK DEV
        </span>
        
        <h1 className="text-6xl font-black text-white tracking-tighter uppercase leading-[0.9] mb-6">
          ALEX <br />
          <span className="font-light italic text-white/80 normal-case ml-4">Abraham</span>
        </h1>

        <div className="border border-white/10 bg-blue-900/20 px-5 py-3 rounded-full backdrop-blur-md shadow-[0_0_20px_rgba(59,130,246,0.1)] w-full max-w-[300px]">
          <AnimatePresence mode="wait">
            <motion.p
              key={titleIndex}
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -5 }}
              transition={{ duration: 0.3 }}
              className="text-[11px] sm:text-xs text-cyan-400 font-mono tracking-[0.1em]"
            >
              {TITLES[titleIndex]}
            </motion.p>
          </AnimatePresence>
        </div>
      </motion.div>

      {/* Condensed Expertise */}
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="flex flex-wrap justify-center gap-2"
      >
        <span className="px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-[10px] text-white/70 font-mono flex items-center gap-1.5">
          <Terminal className="w-3 h-3 text-blue-400" /> Full Stack
        </span>
        <span className="px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-[10px] text-white/70 font-mono flex items-center gap-1.5">
          <Brain className="w-3 h-3 text-blue-400" /> AI / ML
        </span>
        <span className="px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-[10px] text-white/70 font-mono flex items-center gap-1.5">
          <Cloud className="w-3 h-3 text-blue-400" /> Cloud
        </span>
        <span className="px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-[10px] text-white/70 font-mono flex items-center gap-1.5">
          <Layers className="w-3 h-3 text-blue-400" /> System Design
        </span>
      </motion.div>

      {/* Sections combined in a vertical flow for mobile */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="flex flex-col gap-6 mt-4"
      >
        <div className="bg-black/40 p-6 rounded-2xl border border-white/10 backdrop-blur-xl shadow-lg">
          <h2 className="text-2xl font-light tracking-tight text-white leading-tight">
            Building intelligent <br />
            <span className="font-bold text-white">systems.</span>
          </h2>
          <div className="mt-4 flex flex-col space-y-1.5 border-l border-cyan-500/50 pl-4">
            <p className="text-white/80 tracking-[0.1em] text-[10px] uppercase font-mono">Scalable AI Infrastructure</p>
            <p className="text-cyan-400/80 text-[10px] font-mono tracking-[0.1em]">sys.init({`{ mode: &apos;autonomous&apos; }`})</p>
          </div>
        </div>

        <div className="bg-black/40 p-6 rounded-2xl border border-white/10 backdrop-blur-xl text-right shadow-lg">
          <h2 className="text-2xl font-light tracking-tight text-white leading-tight">
            Bridging research <br />
            <span className="font-bold text-white">and production.</span>
          </h2>
          <div className="mt-4 flex flex-col items-end space-y-1.5 border-r border-cyan-500/50 pr-4">
            <p className="text-white/80 tracking-[0.1em] text-[10px] uppercase font-mono">High-performance APIs</p>
            <p className="text-cyan-400/80 text-[10px] font-mono tracking-[0.1em]">await deploy.model(&apos;v4-turbo&apos;)</p>
          </div>
        </div>
      </motion.div>

      {/* Fixed Play Video / Scroll Action Button for Mobile */}
      <div className="mt-6 flex justify-center pb-8 pointer-events-auto">
        <a 
          href="#hub" 
          onClick={(e) => {
            e.preventDefault();
            const el = document.querySelector('#hub');
            if (el) el.scrollIntoView({ behavior: 'smooth' });
          }}
          className="group flex flex-col items-center gap-3 focus:outline-none"
        >
          <div className="p-4 rounded-full border border-cyan-500/30 bg-black/60 backdrop-blur-md flex items-center justify-center shadow-[0_0_15px_rgba(34,211,238,0.2)] active:scale-95 active:bg-cyan-500/20 transition-all">
            <div className="relative w-7 h-7 flex items-center justify-center ml-1">
              {/* Play icon without crazy 3D rotations, just simple scaling for touch feedback */}
              <div className="w-0 h-0 border-t-[8px] border-t-transparent border-l-[12px] border-l-cyan-400 border-b-[8px] border-b-transparent drop-shadow-[0_0_8px_rgba(34,211,238,0.8)]" />
            </div>
          </div>
          <span className="text-[10px] text-cyan-400 font-mono tracking-widest uppercase">Explore System</span>
        </a>
      </div>
    </div>
  );
}
