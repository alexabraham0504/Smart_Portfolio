"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FileText } from "lucide-react";

export default function FloatingMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { name: "Home", href: "#" },
    { name: "Database Hub", href: "#hub" },
    { name: "Contact", href: "#contact" },
    { name: "Resume", href: "https://drive.google.com/file/d/115vUSI0BmEI4sxL8EO8DEZVZL7iPpAEu/view?usp=drive_link" }
  ];

  return (
    <>
      {/* 3D Floating Menu Button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed top-[40%] right-4 md:right-10 z-50 w-10 h-10 md:w-12 md:h-12 bg-black/60 backdrop-blur-xl border border-white/10 rounded-full flex flex-col items-center justify-center gap-[3px] md:gap-[4px] cursor-pointer shadow-[0_0_30px_rgba(59,130,246,0.2)] hover:shadow-[0_0_40px_rgba(59,130,246,0.5)] hover:border-blue-500/50 transition-all group"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        {/* Animated Hamburger Lines */}
        <motion.div 
          animate={isOpen ? { rotate: 45, y: 5, backgroundColor: "#3b82f6" } : { rotate: 0, y: 0, backgroundColor: "#ffffff" }}
          className="w-4 md:w-5 h-[1.5px] shadow-[0_0_8px_rgba(255,255,255,0.8)] rounded-full"
        />
        <motion.div 
          animate={isOpen ? { opacity: 0, scale: 0 } : { opacity: 1, scale: 1, backgroundColor: "#ffffff" }}
          className="w-4 md:w-5 h-[1.5px] shadow-[0_0_8px_rgba(255,255,255,0.8)] rounded-full"
        />
        <motion.div 
          animate={isOpen ? { rotate: -45, y: -5, backgroundColor: "#3b82f6" } : { rotate: 0, y: 0, backgroundColor: "#ffffff" }}
          className="w-4 md:w-5 h-[1.5px] shadow-[0_0_8px_rgba(255,255,255,0.8)] rounded-full"
        />
        
        {/* 3D Spinning Ring around the button */}
        <motion.div 
          animate={{ rotate: 360, rotateX: 30, rotateY: 30 }}
          transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
          className="absolute inset-[-4px] rounded-full border border-blue-500/40 border-dashed pointer-events-none"
        />
      </motion.button>

      {/* Floating 3D Resume Icon */}
      <motion.a
        href="https://drive.google.com/file/d/115vUSI0BmEI4sxL8EO8DEZVZL7iPpAEu/view?usp=drive_link"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed top-[50%] right-4 md:right-10 z-50 w-10 h-10 md:w-12 md:h-12 bg-blue-600/20 backdrop-blur-xl border border-blue-400/30 rounded-full flex items-center justify-center cursor-pointer shadow-[0_0_20px_rgba(59,130,246,0.3)] hover:shadow-[0_0_40px_rgba(59,130,246,0.8)] hover:border-blue-400 hover:bg-blue-600/40 transition-all group [transform-style:preserve-3d]"
        whileHover={{ scale: 1.15, rotateY: 15, rotateX: -15 }}
        whileTap={{ scale: 0.9 }}
        animate={{ y: [0, -5, 0] }}
        transition={{ y: { duration: 2, repeat: Infinity, ease: "easeInOut" } }}
      >
        <motion.div
          animate={{ rotateY: 360 }}
          transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
          className="relative flex items-center justify-center [transform-style:preserve-3d]"
        >
          <FileText className="w-4 h-4 md:w-5 md:h-5 text-white drop-shadow-[0_0_8px_rgba(255,255,255,0.8)]" />
          
          {/* 3D Holographic Inner Ring */}
          <div className="absolute inset-[-8px] border border-cyan-400/50 rounded-full [transform:translateZ(10px)] pointer-events-none" />
          
          {/* Tooltip on hover */}
          <span className="absolute right-full mr-4 px-3 py-1.5 rounded-lg bg-black/80 backdrop-blur-md border border-blue-500/30 text-[10px] md:text-xs font-mono text-blue-100 opacity-0 group-hover:opacity-100 translate-x-4 group-hover:translate-x-0 transition-all duration-300 whitespace-nowrap pointer-events-none">
            VIEW RESUME
          </span>
        </motion.div>
      </motion.a>

      {/* Fullscreen Overlay Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-[#0a0a0a]/90 backdrop-blur-2xl flex flex-col items-center justify-center"
          >
            {/* 3D Background elements in menu */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none [perspective:1000px] flex items-center justify-center opacity-30">
              <motion.div 
                animate={{ rotateY: [0, 360], rotateX: [0, 360] }}
                transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                className="absolute w-[800px] h-[800px] border-[2px] border-blue-500/20 rounded-full border-dashed"
                style={{ transformStyle: 'preserve-3d' }}
              />
              <motion.div 
                animate={{ rotateY: [360, 0], rotateZ: [0, 360] }}
                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                className="absolute w-[600px] h-[600px] border-[2px] border-cyan-500/20 rounded-full border-dashed"
                style={{ transformStyle: 'preserve-3d' }}
              />
            </div>

            <nav className="flex flex-col items-center gap-10 relative z-10">
              {menuItems.map((item, i) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => {
                    // Smooth scroll logic
                    if (item.href.startsWith('#') && item.href !== '#') {
                      e.preventDefault();
                      setIsOpen(false);
                      const element = document.querySelector(item.href);
                      if (element) {
                        setTimeout(() => {
                          element.scrollIntoView({ behavior: 'smooth' });
                        }, 300); // Wait for menu to close before scrolling
                      }
                    } else if (item.href === '#') {
                      e.preventDefault();
                      setIsOpen(false);
                      setTimeout(() => {
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                      }, 300);
                    } else {
                      setIsOpen(false);
                    }
                  }}
                  target={item.href.startsWith('http') ? "_blank" : undefined}
                  rel={item.href.startsWith('http') ? "noopener noreferrer" : undefined}
                  initial={{ opacity: 0, y: 50, rotateX: -90 }}
                  animate={{ opacity: 1, y: 0, rotateX: 0 }}
                  exit={{ opacity: 0, y: -50, transition: { duration: 0.2 } }}
                  transition={{ duration: 0.5, delay: i * 0.1, type: "spring" }}
                  className="group relative text-4xl md:text-7xl font-light text-white/70 hover:text-white transition-colors duration-300 uppercase tracking-[0.2em] cursor-pointer"
                  style={{ transformStyle: 'preserve-3d' }}
                >
                  <span className="relative z-10">{item.name}</span>
                  {/* Hover glow text */}
                  <span className="absolute inset-0 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm pointer-events-none">
                    {item.name}
                  </span>
                  <span className="absolute inset-0 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                    {item.name}
                  </span>
                </motion.a>
              ))}
            </nav>
            
            <div className="absolute bottom-12 text-white/30 font-mono text-sm tracking-widest uppercase pointer-events-none">
              SYS.NAV.PROTOCOL // ACTIVE
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
