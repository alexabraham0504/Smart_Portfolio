"use client";

import { useRef } from "react";
import { useScroll } from "framer-motion";
import MobileScrollyCanvas from "./MobileScrollyCanvas";
import MobileOverlay from "./MobileOverlay";
import MobileProjects from "./MobileProjects";
import MobileInteractiveHub from "./MobileInteractiveHub";
import MobileContact from "./MobileContact";

export default function MobileHome() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  return (
    <main className="bg-[#121212] min-h-screen selection:bg-white/20 selection:text-white">
      {/* 
        Mobile Layout:
        We wrap the Canvas and Overlay in a scrolling container.
        We add pb-[50vh] to artificially increase the scroll length so the video has time to play.
      */}
      <div ref={containerRef} className="relative w-full pb-[50vh]">
        <MobileScrollyCanvas scrollYProgress={scrollYProgress} />
        <MobileOverlay />
      </div>
      
      <div className="relative z-10">
        <MobileProjects />
        <MobileInteractiveHub />
        <MobileContact />
      </div>

      {/* Footer */}
      <footer className="relative z-10 border-t border-white/10 py-8 bg-[#121212] text-center text-white/40 text-xs">
        <p>© {new Date().getFullYear()} Alex Abraham. All rights reserved.</p>
      </footer>
    </main>
  );
}
