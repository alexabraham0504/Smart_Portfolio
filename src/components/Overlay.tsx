"use client";

import { motion, useTransform, AnimatePresence, MotionValue, useMotionValueEvent } from "framer-motion";
import { useState, useEffect } from "react";
import { Layers, Brain, Cloud, Terminal } from "lucide-react";

const TITLES = [
  "Building intelligent\nsystems.",
  "Crafting immersive\nexperiences.",
  "Designing future-ready\nproducts."
];

interface OverlayProps {
  scrollYProgress: MotionValue<number>;
}

export default function Overlay({ scrollYProgress }: OverlayProps) {
  const [titleIndex, setTitleIndex] = useState(0);
  const [isSection1Visible, setIsSection1Visible] = useState(true);

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    if (latest > 0.25) {
      setIsSection1Visible(false);
    } else {
      setIsSection1Visible(true);
    }
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setTitleIndex((prev) => (prev + 1) % TITLES.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  // Header Opacity
  const headerOpacity = useTransform(scrollYProgress, [0, 0.1, 0.85, 0.95], [1, 0, 0, 1]);

  // Section 1: Introduction (0% to 15%)
  const opacity1 = useTransform(scrollYProgress, [0, 0.05, 0.15], [1, 1, 0]);
  const y1 = useTransform(scrollYProgress, [0, 0.15], [0, -100]);

  // Section 2: Left Side (15% to 40%)
  const opacity2 = useTransform(scrollYProgress, [0.15, 0.2, 0.35, 0.4], [0, 1, 1, 0]);
  const y2 = useTransform(scrollYProgress, [0.15, 0.4], [50, -50]);

  // Cinematic 1: Bottom Right (25% to 55%)
  const opacityCinematic1 = useTransform(scrollYProgress, [0.25, 0.3, 0.5, 0.55], [0, 1, 1, 0]);
  const yCinematic1 = useTransform(scrollYProgress, [0.25, 0.55], [20, -20]);

  // Section 3: Right Side (45% to 70%)
  const opacity3 = useTransform(scrollYProgress, [0.45, 0.5, 0.65, 0.7], [0, 1, 1, 0]);
  const y3 = useTransform(scrollYProgress, [0.45, 0.7], [50, -50]);

  // Cinematic 2: Bottom Left (55% to 80%)
  const opacityCinematic2 = useTransform(scrollYProgress, [0.55, 0.6, 0.75, 0.8], [0, 1, 1, 0]);
  const yCinematic2 = useTransform(scrollYProgress, [0.55, 0.8], [20, -20]);

  // Section 4: Outro - Fades in at the end (80% to 90%)
  const opacity4 = useTransform(scrollYProgress, [0.8, 0.9], [0, 1]);
  const y4 = useTransform(scrollYProgress, [0.8, 0.95], [50, 0]);

  return (
    <div className="absolute inset-0 pointer-events-none z-10">
      <div className="sticky top-0 w-full h-screen overflow-hidden">
        
        {/* Futuristic Dashboard Navigation (Visible at 0% and 100%) */}
        <motion.div
          style={{ opacity: headerOpacity }}
          className="absolute top-0 left-0 w-full p-4 md:p-8 flex justify-between items-center z-50"
        >
          {/* Logo */}
          <div className="flex items-center gap-1 text-2xl md:text-3xl font-black tracking-tighter">
            <span className="text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.8)]">A</span>
            <span className="text-blue-500 drop-shadow-[0_0_10px_rgba(59,130,246,0.8)]">A</span>
          </div>


          {/* Right Connect Button */}
          <a 
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              const el = document.querySelector('#contact');
              if (el) el.scrollIntoView({ behavior: 'smooth' });
            }}
            className="flex items-center gap-2 md:gap-3 px-4 md:px-6 py-2 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 transition-colors text-[10px] md:text-xs font-mono tracking-widest text-white uppercase backdrop-blur-md cursor-pointer pointer-events-auto"
          >
            <span className="hidden sm:inline">LET&apos;S CONNECT</span>
            <span className="sm:hidden">CONNECT</span>
            <div className="w-1.5 h-1.5 rounded-full bg-blue-500 shadow-[0_0_8px_rgba(59,130,246,1)]" />
          </a>
        </motion.div>

        {/* Global Dashboard Elements (Visible at 0% and 100%) */}
        <motion.div style={{ opacity: headerOpacity }} className="absolute inset-0 pointer-events-none z-40">
          {/* Status Indicator (Top Left) */}
          <div className="hidden sm:flex absolute top-28 left-8 flex-col gap-1">
            <span className="text-[8px] text-white/40 font-mono tracking-widest uppercase">STATUS</span>
            <div className="flex items-center gap-2">
              <span className="text-xs text-blue-400 font-mono tracking-widest uppercase drop-shadow-[0_0_8px_rgba(59,130,246,0.8)]">ONLINE</span>
            </div>
          </div>

          {/* Location Indicator (Top Right) */}
          <div className="hidden sm:flex absolute top-28 right-8 flex-col gap-1 items-end pr-10">
            <span className="text-[8px] text-white/40 font-mono tracking-widest uppercase">LOCATION</span>
            <span className="text-xs text-blue-400 font-mono tracking-widest uppercase drop-shadow-[0_0_8px_rgba(59,130,246,0.8)]">INDIA</span>
          </div>

          {/* Left Scroll Tracker */}
          <div className="hidden sm:flex absolute left-8 top-1/2 -translate-y-1/2 flex-col items-center gap-4">
            <span className="text-[10px] text-white/40 font-mono tracking-[0.3em] uppercase [writing-mode:vertical-lr] rotate-180">
              SCROLL TO EXPLORE
            </span>
            <div className="w-[1px] h-20 bg-gradient-to-b from-blue-500/50 to-transparent" />
            <div className="w-1.5 h-1.5 rounded-full bg-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.8)]" />
          </div>

          {/* Right Pagination Tracker */}
          <div className="hidden sm:flex absolute right-8 top-1/2 -translate-y-1/2 flex-col items-center gap-2">
            <div className="w-[1px] h-3 bg-white/40" />
            <div className="w-[1px] h-3 bg-white/20" />
            <div className="w-1.5 h-1.5 rounded-sm bg-blue-500 shadow-[0_0_8px_rgba(59,130,246,0.8)]" />
            <span className="text-[10px] text-blue-400 font-mono my-2 font-bold drop-shadow-[0_0_5px_rgba(59,130,246,0.8)]">02</span>
            <div className="w-[1px] h-3 bg-white/20" />
            <div className="w-[1px] h-3 bg-white/20" />
            <div className="w-[1px] h-3 bg-white/20" />
          </div>

          {/* Bottom Footer Area */}
          <div className="absolute bottom-8 left-4 right-4 md:left-8 md:right-8 flex justify-between items-end">
            <span className="text-[8px] md:text-[10px] text-white/40 font-mono tracking-widest hidden sm:inline-block">© 2026 Alex Abraham</span>
            
            <div className="hidden md:flex gap-4 text-[10px] text-white/40 font-mono tracking-[0.2em] uppercase items-center">
              <span>AI BUILDER</span>
              <div className="w-1 h-1 rounded-full bg-blue-500" />
              <span>PROBLEM SOLVER</span>
              <div className="w-1 h-1 rounded-full bg-blue-500" />
              <span>TECH ENTHUSIAST</span>
            </div>

            <div className="hidden sm:flex flex-col items-end gap-2 pr-4 md:pr-10 ml-auto">
              <span className="text-[8px] text-white/40 font-mono tracking-widest uppercase">SYSTEM UPTIME</span>
              <div className="flex items-center gap-3">
                <span className="text-xs text-blue-400 font-mono drop-shadow-[0_0_5px_rgba(59,130,246,0.8)]">99.9%</span>
                {/* Fake mini chart */}
                <div className="flex items-end gap-[2px] h-4 opacity-50">
                  <div className="w-1 h-2 bg-blue-500/50" />
                  <div className="w-1 h-3 bg-blue-500/50" />
                  <div className="w-1 h-1 bg-blue-500/50" />
                  <div className="w-1 h-4 bg-blue-400 drop-shadow-[0_0_5px_rgba(59,130,246,1)]" />
                  <div className="w-1 h-2 bg-blue-500/50" />
                </div>
              </div>
            </div>
          </div>
        </motion.div>

      {/* Section 1: Dashboard Core Center & Side Panels */}
      <AnimatePresence>
        {isSection1Visible && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="absolute inset-0 z-10"
          >
            <motion.div
              style={{ opacity: opacity1, y: y1 }}
              className="absolute inset-0 flex flex-col items-center justify-center px-4"
            >
              {/* Massive Radar Background */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none -z-10 opacity-60">
                <div className="w-[80vw] h-[80vw] max-w-[1200px] max-h-[1200px] border-[0.5px] border-white/10 rounded-full absolute" />
                <div className="w-[60vw] h-[60vw] max-w-[900px] max-h-[900px] border-[0.5px] border-white/10 rounded-full absolute" />
                <div className="w-[40vw] h-[40vw] max-w-[600px] max-h-[600px] border-[0.5px] border-white/10 rounded-full absolute" style={{ borderStyle: 'dashed' }} />
                <div className="absolute w-full h-[1px] bg-white/5" />
                <div className="absolute h-full w-[1px] bg-white/5" />
                {/* Deep Center Nebula */}
                <div className="w-[80vw] max-w-[600px] h-[80vw] max-h-[400px] bg-blue-600/30 blur-[80px] md:blur-[120px] rounded-[100%] absolute" />
              </div>

              {/* EXPERTISE Left Panel — desktop only */}
              <div className="hidden lg:block absolute left-[5%] top-[60%] -translate-y-1/2 w-[280px] p-6 rounded-2xl bg-black/40 backdrop-blur-xl border border-white/10 shadow-[0_0_40px_rgba(0,0,0,0.8)]">
                <span className="text-[10px] text-white/40 font-mono tracking-[0.2em] uppercase mb-6 block">EXPERTISE</span>
                <div className="flex flex-col gap-6">
                  <div className="flex items-center gap-4 text-white/80 hover:text-white transition-colors cursor-pointer group">
                    <Terminal className="w-5 h-5 text-blue-400 group-hover:drop-shadow-[0_0_8px_rgba(59,130,246,0.8)]" />
                    <span className="text-[11px] font-mono tracking-wider">Full Stack Development</span>
                  </div>
                  <div className="flex items-center gap-4 text-white/80 hover:text-white transition-colors cursor-pointer group">
                    <Brain className="w-5 h-5 text-blue-400 group-hover:drop-shadow-[0_0_8px_rgba(59,130,246,0.8)]" />
                    <span className="text-[11px] font-mono tracking-wider">AI & Machine Learning</span>
                  </div>
                  <div className="flex items-center gap-4 text-white/80 hover:text-white transition-colors cursor-pointer group">
                    <Cloud className="w-5 h-5 text-blue-400 group-hover:drop-shadow-[0_0_8px_rgba(59,130,246,0.8)]" />
                    <span className="text-[11px] font-mono tracking-wider">Cloud Architecture</span>
                  </div>
                  <div className="flex items-center gap-4 text-white/80 hover:text-white transition-colors cursor-pointer group">
                    <Layers className="w-5 h-5 text-blue-400 group-hover:drop-shadow-[0_0_8px_rgba(59,130,246,0.8)]" />
                    <span className="text-[11px] font-mono tracking-wider">System Design</span>
                  </div>
                </div>
              </div>

              {/* TECH STACK Right Panel — desktop only */}
              <div className="hidden lg:block absolute right-[5%] top-[60%] -translate-y-1/2 w-[300px] p-6 rounded-2xl bg-black/40 backdrop-blur-xl border border-white/10 shadow-[0_0_40px_rgba(0,0,0,0.8)]">
                <span className="text-[10px] text-white/40 font-mono tracking-[0.2em] uppercase mb-6 block">TECH STACK</span>
                <div className="grid grid-cols-3 gap-y-8 gap-x-4">
                  {/* React */}
                  <div className="flex flex-col items-center gap-3 group cursor-pointer">
                    <div className="w-12 h-12 rounded-xl border border-white/5 bg-white/5 flex items-center justify-center group-hover:border-blue-500/50 transition-colors">
                      <svg viewBox="0 0 24 24" className="w-6 h-6 text-white/80 group-hover:text-blue-400 transition-colors" fill="currentColor"><path d="M11.95 18.22c-3.15 0-5.97-.48-7.95-1.34-1.99-.86-3-2.02-3-3.23s1-2.37 3-3.23c1.98-.86 4.8-1.34 7.95-1.34s5.97.48 7.95 1.34c1.99.86 3 2.02 3 3.23s-1 2.37-3 3.23c-1.98.86-4.8 1.34-7.95 1.34zm0-8.24c-2.88 0-5.38.41-7.11 1.15-1.6.69-2.29 1.48-2.29 2.08s.69 1.39 2.29 2.08c1.73.74 4.23 1.15 7.11 1.15s5.38-.41 7.11-1.15c1.6-.69 2.29-1.48 2.29-2.08s-.69-1.39-2.29-2.08c-1.73-.74-4.23-1.15-7.11-1.15z"/></svg>
                    </div>
                    <span className="text-[10px] text-white/60 font-mono group-hover:text-white">React</span>
                  </div>
                  {/* Next.js */}
                  <div className="flex flex-col items-center gap-3 group cursor-pointer">
                    <div className="w-12 h-12 rounded-xl border border-white/5 bg-white/5 flex items-center justify-center font-bold text-white/80 text-sm group-hover:border-blue-500/50 group-hover:text-blue-400 transition-colors">
                      NX
                    </div>
                    <span className="text-[10px] text-white/60 font-mono group-hover:text-white">Next.js</span>
                  </div>
                  {/* Node.js */}
                  <div className="flex flex-col items-center gap-3 group cursor-pointer">
                    <div className="w-12 h-12 rounded-xl border border-white/5 bg-white/5 flex items-center justify-center font-bold text-white/80 text-sm group-hover:border-blue-500/50 group-hover:text-blue-400 transition-colors">
                      JS
                    </div>
                    <span className="text-[10px] text-white/60 font-mono group-hover:text-white">Node.js</span>
                  </div>
                  {/* TypeScript */}
                  <div className="flex flex-col items-center gap-3 group cursor-pointer">
                    <div className="w-12 h-12 rounded-xl border border-white/5 bg-white/5 flex items-center justify-center font-bold text-white/80 text-sm group-hover:border-blue-500/50 group-hover:text-blue-400 transition-colors">
                      TS
                    </div>
                    <span className="text-[10px] text-white/60 font-mono group-hover:text-white">TypeScript</span>
                  </div>
                  {/* Python */}
                  <div className="flex flex-col items-center gap-3 group cursor-pointer">
                    <div className="w-12 h-12 rounded-xl border border-white/5 bg-white/5 flex items-center justify-center font-bold text-white/80 text-sm group-hover:border-blue-500/50 group-hover:text-blue-400 transition-colors">
                      PY
                    </div>
                    <span className="text-[10px] text-white/60 font-mono group-hover:text-white">Python</span>
                  </div>
                  {/* AWS */}
                  <div className="flex flex-col items-center gap-3 group cursor-pointer">
                    <div className="w-12 h-12 rounded-xl border border-white/5 bg-white/5 flex items-center justify-center font-bold text-white/80 text-sm group-hover:border-blue-500/50 group-hover:text-blue-400 transition-colors">
                      AW
                    </div>
                    <span className="text-[10px] text-white/60 font-mono group-hover:text-white">AWS</span>
                  </div>
                </div>
              </div>

              {/* MOBILE: Compact expertise & tech badges below hero */}
              <div className="lg:hidden absolute bottom-36 left-0 right-0 px-6 flex flex-col items-center gap-3">
                <div className="flex flex-wrap justify-center gap-2">
                  <span className="px-3 py-1.5 rounded-full bg-black/50 backdrop-blur-md border border-white/10 text-[10px] text-white/70 font-mono flex items-center gap-1.5">
                    <Terminal className="w-3 h-3 text-blue-400" /> Full Stack
                  </span>
                  <span className="px-3 py-1.5 rounded-full bg-black/50 backdrop-blur-md border border-white/10 text-[10px] text-white/70 font-mono flex items-center gap-1.5">
                    <Brain className="w-3 h-3 text-blue-400" /> AI / ML
                  </span>
                  <span className="px-3 py-1.5 rounded-full bg-black/50 backdrop-blur-md border border-white/10 text-[10px] text-white/70 font-mono flex items-center gap-1.5">
                    <Cloud className="w-3 h-3 text-blue-400" /> Cloud
                  </span>
                  <span className="px-3 py-1.5 rounded-full bg-black/50 backdrop-blur-md border border-white/10 text-[10px] text-white/70 font-mono flex items-center gap-1.5">
                    <Layers className="w-3 h-3 text-blue-400" /> System Design
                  </span>
                </div>
                <div className="flex flex-wrap justify-center gap-1.5">
                  {["React", "Next.js", "Node.js", "TS", "Python", "AWS"].map((t) => (
                    <span key={t} className="px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-[9px] text-white/50 font-mono">
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Center Hero Typography */}
              <motion.div
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 1.5, ease: "easeOut" }}
                className="text-center flex flex-col items-center z-20 mt-[-5%]"
              >
                <span className="text-blue-400 font-mono text-[10px] md:text-xs tracking-[0.4em] uppercase mb-12 drop-shadow-[0_0_10px_rgba(59,130,246,0.8)]">
                  AI ENGINEER & FULL STACK DEVELOPER
                </span>
                
                <h2 className="flex flex-col items-center gap-0 text-[3.5rem] sm:text-[5rem] md:text-[11rem] leading-[0.85] mb-12 md:mb-16 text-white tracking-tighter drop-shadow-[0_0_40px_rgba(255,255,255,0.2)]">
                  <span className="font-black uppercase tracking-tight">ALEX</span>
                  <span className="font-light italic text-white/80 tracking-normal ml-4 md:ml-16">Abraham</span>
                </h2>

                <div className="flex flex-col md:flex-row items-center gap-4 md:gap-6 border border-white/10 bg-blue-900/10 px-5 md:px-8 py-3 md:py-4 rounded-full backdrop-blur-xl shadow-[0_0_30px_rgba(59,130,246,0.15)] pointer-events-auto">
                  <AnimatePresence mode="wait">
                    <motion.p
                      key={titleIndex}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="text-sm md:text-base text-cyan-400 font-mono tracking-[0.1em]"
                    >
                      {TITLES[titleIndex].split('\n').join(' ')}
                    </motion.p>
                  </AnimatePresence>
                  <div 
                    onClick={() => {
                      const targetScroll = window.innerHeight * 3.6;
                      const duration = 20000;
                      const startScroll = window.scrollY;
                      const startTime = performance.now();
                      document.documentElement.style.scrollBehavior = 'auto';
                      const animateScroll = (currentTime: number) => {
                        const elapsed = currentTime - startTime;
                        const progress = Math.min(elapsed / duration, 1);
                        window.scrollTo({
                          top: startScroll + (targetScroll - startScroll) * progress,
                          behavior: 'auto'
                        });
                        if (progress < 1) requestAnimationFrame(animateScroll);
                        else document.documentElement.style.scrollBehavior = '';
                      };
                      requestAnimationFrame(animateScroll);
                    }}
                    className="flex items-center gap-3 md:pl-6 md:border-l border-white/10 cursor-pointer group"
                  >
                    <span className="text-[10px] text-white/50 tracking-widest uppercase group-hover:text-white transition-colors">NEXT</span>
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-500 shadow-[0_0_8px_rgba(59,130,246,1)] group-hover:scale-150 transition-transform" />
                  </div>
                </div>
              </motion.div>

              {/* Bottom Explore Mouse Indicator */}
              <div className="absolute bottom-24 flex flex-col items-center gap-4">
                <span className="text-[8px] text-white/40 font-mono tracking-[0.3em] uppercase">
                  EXPLORE MY WORLD
                </span>
                <div className="w-8 h-[1px] bg-blue-500/50" />
                <div className="w-[20px] h-[32px] border border-white/20 rounded-full flex justify-center p-1 mt-2">
                  <motion.div 
                    animate={{ y: [0, 10, 0], opacity: [1, 0, 1] }}
                    transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                    className="w-[2px] h-[4px] bg-blue-400 rounded-full shadow-[0_0_8px_rgba(59,130,246,0.8)]"
                  />
                </div>
              </div>

              {/* Play Cinematic Button (Bottom Right) */}
              <div className="absolute bottom-12 right-6 md:right-12 pointer-events-auto">
                <button 
                  onClick={() => {
                    const targetScroll = window.innerHeight * 3.6;
                    const duration = 20000;
                    const startScroll = window.scrollY;
                    const startTime = performance.now();
                    document.documentElement.style.scrollBehavior = 'auto';
                    const animateScroll = (currentTime: number) => {
                      const elapsed = currentTime - startTime;
                      const progress = Math.min(elapsed / duration, 1);
                      window.scrollTo({
                        top: startScroll + (targetScroll - startScroll) * progress,
                        behavior: 'auto'
                      });
                      if (progress < 1) requestAnimationFrame(animateScroll);
                      else document.documentElement.style.scrollBehavior = '';
                    };
                    requestAnimationFrame(animateScroll);
                  }}
                  className="group flex flex-row items-center focus:outline-none"
                >
                  <motion.div 
                    animate={{ opacity: [0.8, 1, 0.8] }}
                    transition={{ duration: 3, repeat: Infinity }}
                    className="p-3 md:p-4 rounded-full border border-cyan-500/30 bg-black/60 backdrop-blur-md group-hover:bg-cyan-500/10 group-hover:border-cyan-500/80 transition-all duration-300 flex items-center justify-center cursor-pointer shadow-[0_0_15px_rgba(34,211,238,0.1)] group-hover:shadow-[0_0_25px_rgba(34,211,238,0.3)]"
                  >
                    <div className="relative w-6 h-6 flex items-center justify-center ml-0.5">
                      {/* Outer spinning ring */}
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                        className="absolute inset-[-4px] border-[1px] border-cyan-500/20 rounded-full border-t-cyan-400 border-b-cyan-400"
                      />
                      {/* Central pulsing play pulse */}
                      <motion.div
                        animate={{ opacity: [0.5, 1, 0.5], scale: [0.9, 1.1, 0.9] }}
                        transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                        className="relative ml-0.5 w-0 h-0 border-t-[5px] border-t-transparent border-l-[8px] border-l-cyan-400 border-b-[5px] border-b-transparent drop-shadow-[0_0_8px_rgba(34,211,238,0.8)]"
                      />
                    </div>
                  </motion.div>
                </button>
              </div>

            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Section 2: Middle Left Side */}
      <motion.div
        style={{ opacity: opacity2, y: y2 }}
        className="absolute top-1/2 -translate-y-1/2 left-0 md:left-[10%] w-[85%] md:w-[45%] lg:w-[35%] px-4 ml-[5%] md:ml-0"
      >
        <div className="backdrop-blur-xl bg-black/40 p-5 md:p-8 rounded-2xl border border-white/5 shadow-[0_0_30px_rgba(0,0,0,0.8)]">
          <h2 className="text-3xl md:text-5xl font-light tracking-tight text-white leading-tight">
            Building intelligent <br />
            <span className="font-bold text-white">
              systems.
            </span>
          </h2>
          <div className="mt-8 flex flex-col space-y-2 border-l border-cyan-500/50 pl-4 opacity-80">
            <p className="text-white/80 tracking-[0.2em] text-xs md:text-sm uppercase font-mono">Scalable AI Infrastructure</p>
            <p className="text-cyan-400/80 text-[10px] md:text-xs font-mono tracking-[0.2em]">sys.init({`{ mode: 'autonomous' }`})</p>
          </div>
        </div>
      </motion.div>

      {/* Cinematic 1: Bottom Right */}
      <motion.div
        style={{ opacity: opacityCinematic1, y: yCinematic1 }}
        className="absolute bottom-[15%] right-0 md:right-[10%] w-[85%] md:w-[40%] px-4 mr-[5%] md:mr-0 flex justify-end"
      >
        <div className="backdrop-blur-xl bg-black/40 p-6 rounded-xl border border-white/5 shadow-[0_0_30px_rgba(0,0,0,0.8)] inline-block text-right">
          <p className="text-cyan-400/80 font-mono text-[10px] md:text-xs tracking-[0.4em] mb-2 uppercase">Neural Networks</p>
          <h3 className="text-xl md:text-2xl font-light tracking-widest text-white uppercase border-b border-white/10 pb-3 inline-block">
            Data into <span className="font-bold text-white">Logic</span>
          </h3>
        </div>
      </motion.div>

      {/* Section 3: Middle Right Side */}
      <motion.div
        style={{ opacity: opacity3, y: y3 }}
        className="absolute top-1/2 -translate-y-1/2 right-0 md:right-[10%] w-[85%] md:w-[45%] lg:w-[35%] px-4 mr-[5%] md:mr-0 flex justify-end"
      >
        <div className="backdrop-blur-xl bg-black/40 p-5 md:p-8 rounded-2xl border border-white/5 shadow-[0_0_30px_rgba(0,0,0,0.8)] text-right">
          <h2 className="text-3xl md:text-5xl font-light tracking-tight text-white leading-tight">
            Bridging research <br />
            <span className="font-bold text-white">
              and production.
            </span>
          </h2>
          <div className="mt-8 flex flex-col space-y-2 border-r border-cyan-500/50 pr-4 items-end opacity-80">
            <p className="text-white/80 tracking-[0.2em] text-xs md:text-sm uppercase font-mono">High-performance APIs</p>
            <p className="text-cyan-400/80 text-[10px] md:text-xs font-mono tracking-[0.2em]">await deploy.model(&apos;v4-turbo&apos;)</p>
          </div>
        </div>
      </motion.div>

      {/* Cinematic 2: Bottom Left */}
      <motion.div
        style={{ opacity: opacityCinematic2, y: yCinematic2 }}
        className="absolute bottom-[15%] left-0 md:left-[10%] w-[85%] md:w-[40%] px-4 ml-[5%] md:ml-0"
      >
        <div className="backdrop-blur-xl bg-black/40 p-6 rounded-xl border border-white/5 shadow-[0_0_30px_rgba(0,0,0,0.8)] inline-block">
          <p className="text-cyan-400/80 font-mono text-[10px] md:text-xs tracking-[0.4em] mb-2 uppercase">System Architecture</p>
          <h3 className="text-xl md:text-2xl font-light tracking-widest text-white uppercase border-b border-white/10 pb-3 inline-block">
            Code as <span className="font-bold text-white">Impact</span>
          </h3>
        </div>
      </motion.div>

      {/* Sections 2 and 3 duplicate removed */}

      {/* Section 4: Outro (End of Scroll) */}
      <motion.div
        style={{ opacity: opacity4 }}
        className="absolute inset-0 overflow-hidden flex flex-col items-center justify-center text-center px-4"
      >
        {/* Minimal 3D Holographic Sphere */}
        <div className="absolute inset-0 flex items-center justify-center [perspective:1000px] -z-10 opacity-30">
          <motion.div
            animate={{ rotateX: [0, 360], rotateY: [0, 360] }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            className="w-[300px] h-[300px] md:w-[600px] md:h-[600px] [transform-style:preserve-3d]"
          >
            {[...Array(4)].map((_, i) => (
              <div
                key={`cyan-${i}`}
                className="absolute inset-0 border-[0.5px] border-cyan-500/30 rounded-full"
                style={{ transform: `rotateX(${i * 45}deg) rotateY(${i * 45}deg)` }}
              />
            ))}
            {[...Array(4)].map((_, i) => (
              <div
                key={`white-${i}`}
                className="absolute inset-8 border-[0.5px] border-white/10 rounded-full"
                style={{ transform: `rotateX(${i * 45 + 22.5}deg) rotateY(${i * 45 + 22.5}deg)` }}
              />
            ))}
          </motion.div>
        </div>

        <motion.div style={{ y: y4 }} className="flex flex-col items-center">
          <h2 className="text-4xl md:text-6xl font-light tracking-tight text-white mb-6">
            Ready to <span className="font-bold">build?</span>
          </h2>
          <div className="border border-white/10 bg-white/5 px-6 py-2 rounded-full backdrop-blur-sm">
            <p className="text-xs text-cyan-400/80 font-mono tracking-[0.2em] uppercase">
              Explore my recent projects
            </p>
          </div>
        </motion.div>
      </motion.div>

      {/* The Outro is now simply the global header (Name & Title) fading back in. */}

      </div>
    </div>
  );
}
