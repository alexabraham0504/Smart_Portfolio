"use client";

import { useRef } from "react";
import { useScroll } from "framer-motion";
import ScrollyCanvas from "@/components/ScrollyCanvas";
import Overlay from "@/components/Overlay";
import InteractiveHub from "@/components/InteractiveHub";
import Contact from "@/components/Contact";

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  return (
    <main className="bg-[#121212] min-h-screen selection:bg-white/20 selection:text-white">
      {/* 
        The ScrollyCanvas is a 500vh container.
        We place the Overlay as an absolute sibling inside a relative wrapper 
        so that the overlay texts sit on top of the sticky canvas.
      */}
      <div ref={containerRef} className="relative w-full">
        <ScrollyCanvas scrollYProgress={scrollYProgress} />
        <Overlay scrollYProgress={scrollYProgress} />
      </div>

      <InteractiveHub />
      <Contact />
      
      {/* Footer */}
      <footer className="border-t border-white/10 py-12 text-center text-white/40 text-sm">
        <p>© {new Date().getFullYear()} Alex Abraham. All rights reserved.</p>
      </footer>
    </main>
  );
}
