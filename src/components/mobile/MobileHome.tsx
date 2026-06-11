"use client";

import MobileScrollyCanvas from "./MobileScrollyCanvas";
import MobileOverlay from "./MobileOverlay";
import MobileInteractiveHub from "./MobileInteractiveHub";
import MobileContact from "./MobileContact";

export default function MobileHome() {
  return (
    <main className="bg-[#121212] min-h-screen selection:bg-white/20 selection:text-white">
      {/* 
        Mobile Layout:
        Instead of a complex 500vh container, we just use standard vertical stacking.
        The MobileScrollyCanvas provides a fixed background.
      */}
      <MobileScrollyCanvas />
      
      <div className="relative z-10">
        <MobileOverlay />
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
