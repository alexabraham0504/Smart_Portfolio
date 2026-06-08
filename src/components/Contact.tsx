"use client";

import { motion } from "framer-motion";
import { Send, Mail } from "lucide-react";

export default function Contact() {
  return (
    <section className="relative z-20 bg-[#121212] py-24 px-4 md:px-16 overflow-hidden" id="contact">
      {/* 3D Animated Orbital Rings Background */}
      <div className="absolute inset-0 pointer-events-none [perspective:1200px] overflow-hidden flex items-center justify-center">
        <motion.div 
          animate={{ rotateX: 70, rotateZ: [0, 360] }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
          className="absolute w-[800px] h-[800px] border border-orange-500/20 rounded-full"
          style={{ transformStyle: 'preserve-3d' }}
        />
        <motion.div 
          animate={{ rotateX: 70, rotateZ: [360, 0] }}
          transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
          className="absolute w-[1000px] h-[1000px] border border-red-500/20 rounded-full border-dashed"
          style={{ transformStyle: 'preserve-3d' }}
        />
        <motion.div 
          animate={{ rotateX: 70, rotateZ: [0, 360] }}
          transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
          className="absolute w-[1200px] h-[1200px] border-[0.5px] border-white/10 rounded-full"
          style={{ transformStyle: 'preserve-3d' }}
        />
        {/* Deep Core Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-orange-600/10 blur-[150px] rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10 flex flex-col md:flex-row gap-16">
        
        {/* Left Side: Info */}
        <div className="w-full md:w-1/2">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-white text-5xl md:text-7xl font-light tracking-tight uppercase mb-8"
          >
            Let's <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-600">Connect</span>
          </motion.h2>
          
          <p className="text-white/60 text-lg mb-12 font-light leading-relaxed">
            Whether you have a visionary project in mind or just want to say hi, I'm always open to discussing new opportunities, collaborations, and the future of digital experiences.
          </p>

          <div className="flex flex-col gap-6 mb-12">
            <div className="flex items-center gap-4 text-white/80 hover:text-orange-400 transition-colors">
              <div className="p-3 bg-white/5 rounded-lg border border-white/10"><Mail className="w-5 h-5" /></div>
              <span className="font-mono text-sm tracking-widest">hello@alexabraham.dev</span>
            </div>
          </div>

          <div className="flex gap-4">
            <SocialIcon icon={<GithubIcon className="w-5 h-5" />} href="#" />
            <SocialIcon icon={<LinkedinIcon className="w-5 h-5" />} href="#" />
            <SocialIcon icon={<TwitterIcon className="w-5 h-5" />} href="#" />
          </div>
        </div>

        {/* Right Side: Form */}
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="w-full md:w-1/2"
        >
          <div className="p-8 rounded-3xl bg-black/40 backdrop-blur-xl border border-white/10 shadow-[0_0_40px_rgba(0,0,0,0.5)]">
            <form className="flex flex-col gap-6" onSubmit={(e) => e.preventDefault()}>
              
              <div className="group relative">
                <input 
                  type="text" 
                  required
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 text-white outline-none focus:border-orange-500/50 focus:bg-white/10 transition-all peer"
                  placeholder=" "
                />
                <label className="absolute left-4 top-4 text-white/40 font-mono text-xs tracking-widest transition-all peer-focus:-top-2 peer-focus:text-[10px] peer-focus:text-orange-400 peer-focus:bg-[#121212] peer-focus:px-2 peer-valid:-top-2 peer-valid:text-[10px] peer-valid:bg-[#121212] peer-valid:px-2 pointer-events-none">
                  NAME //
                </label>
              </div>

              <div className="group relative">
                <input 
                  type="email" 
                  required
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 text-white outline-none focus:border-orange-500/50 focus:bg-white/10 transition-all peer"
                  placeholder=" "
                />
                <label className="absolute left-4 top-4 text-white/40 font-mono text-xs tracking-widest transition-all peer-focus:-top-2 peer-focus:text-[10px] peer-focus:text-orange-400 peer-focus:bg-[#121212] peer-focus:px-2 peer-valid:-top-2 peer-valid:text-[10px] peer-valid:bg-[#121212] peer-valid:px-2 pointer-events-none">
                  EMAIL_ADDRESS //
                </label>
              </div>

              <div className="group relative">
                <textarea 
                  required
                  rows={4}
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 text-white outline-none focus:border-orange-500/50 focus:bg-white/10 transition-all peer resize-none"
                  placeholder=" "
                />
                <label className="absolute left-4 top-4 text-white/40 font-mono text-xs tracking-widest transition-all peer-focus:-top-2 peer-focus:text-[10px] peer-focus:text-orange-400 peer-focus:bg-[#121212] peer-focus:px-2 peer-valid:-top-2 peer-valid:text-[10px] peer-valid:bg-[#121212] peer-valid:px-2 pointer-events-none">
                  TRANSMISSION_DATA //
                </label>
              </div>

              <button className="relative group overflow-hidden rounded-xl p-[1px] mt-4">
                <span className="absolute inset-0 bg-gradient-to-r from-orange-500 to-red-500 rounded-xl opacity-70 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="relative flex items-center justify-center gap-3 px-8 py-4 bg-black rounded-xl group-hover:bg-black/50 transition-colors duration-300">
                  <span className="font-bold text-white tracking-widest uppercase text-sm">Initiate Transfer</span>
                  <Send className="w-4 h-4 text-orange-400 group-hover:translate-x-1 transition-transform" />
                </div>
              </button>

            </form>
          </div>
        </motion.div>

      </div>
    </section>
  );
}

function SocialIcon({ icon, href }: { icon: React.ReactNode, href: string }) {
  return (
    <motion.a 
      whileHover={{ y: -5 }}
      href={href}
      className="p-4 bg-white/5 border border-white/10 rounded-xl text-white/60 hover:text-white hover:border-orange-500/50 hover:bg-orange-500/10 transition-all duration-300 shadow-lg"
    >
      {icon}
    </motion.a>
  );
}

function GithubIcon(props: any) {
  return (
    <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
    </svg>
  );
}

function LinkedinIcon(props: any) {
  return (
    <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

function TwitterIcon(props: any) {
  return (
    <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
    </svg>
  );
}
