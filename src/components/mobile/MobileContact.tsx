"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, Mail } from "lucide-react";

export default function MobileContact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");

    const url = "https://docs.google.com/forms/u/0/d/e/1FAIpQLSer8i6fGmXEfJVdE102_hW08wtnMhgx8PL_EU6uP5KaZaFJew/formResponse";
    const data = new URLSearchParams();
    data.append("entry.514834242", formData.name);
    data.append("entry.1282065029", formData.email);
    data.append("entry.1035688519", formData.message);

    try {
      await fetch(url, {
        method: "POST",
        mode: "no-cors",
        body: data,
        headers: {
          "Content-Type": "application/x-www-form-urlencoded"
        }
      });
      setStatus("success");
      setFormData({ name: "", email: "", message: "" });
      setTimeout(() => setStatus("idle"), 5000);
    } catch (error) {
      console.error(error);
      setStatus("error");
      setTimeout(() => setStatus("idle"), 5000);
    }
  };

  return (
    <section className="relative z-20 bg-[#121212] py-16 px-4" id="contact">
      {/* Simplified Background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden flex items-center justify-center opacity-40">
        <div className="absolute w-[300px] h-[300px] bg-orange-600/10 blur-[80px] rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10 flex flex-col gap-10">
        
        {/* Top: Info */}
        <div className="w-full text-center">
          <h2 className="text-white text-4xl font-light tracking-tight uppercase mb-4">
            Let&apos;s <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-600">Connect</span>
          </h2>
          
          <p className="text-white/60 text-sm mb-8 font-light leading-relaxed">
            Whether you have a visionary project in mind or just want to say hi, I&apos;m always open to discussing new opportunities.
          </p>

          <div className="flex justify-center mb-8">
            <div className="flex items-center gap-3 text-white/80">
              <div className="p-2 bg-white/5 rounded-lg border border-white/10"><Mail className="w-4 h-4 text-orange-400" /></div>
              <span className="font-mono text-xs tracking-widest">hello@alexabraham.dev</span>
            </div>
          </div>

          <div className="flex justify-center gap-4">
            <SocialIcon icon={<GithubIcon className="w-5 h-5" />} href="https://github.com/alexabraham0504" />
            <SocialIcon icon={<LinkedinIcon className="w-5 h-5" />} href="https://www.linkedin.com/in/alex-abraham-28b266364/" />
            <SocialIcon icon={<TwitterIcon className="w-5 h-5" />} href="#" />
          </div>
        </div>

        {/* Bottom: Form */}
        <div className="w-full">
          <div className="p-5 rounded-2xl bg-black/40 backdrop-blur-xl border border-white/10 shadow-lg">
            <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
              
              <div className="group relative">
                <input 
                  type="text" 
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm outline-none focus:border-orange-500/50 focus:bg-white/10 transition-all peer"
                  placeholder=" "
                />
                <label className="absolute left-4 top-3.5 text-white/40 font-mono text-[10px] tracking-widest transition-all peer-focus:-top-2 peer-focus:text-[9px] peer-focus:text-orange-400 peer-focus:bg-[#121212] peer-focus:px-2 peer-valid:-top-2 peer-valid:text-[9px] peer-valid:bg-[#121212] peer-valid:px-2 pointer-events-none">
                  NAME //
                </label>
              </div>

              <div className="group relative mt-2">
                <input 
                  type="email" 
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm outline-none focus:border-orange-500/50 focus:bg-white/10 transition-all peer"
                  placeholder=" "
                />
                <label className="absolute left-4 top-3.5 text-white/40 font-mono text-[10px] tracking-widest transition-all peer-focus:-top-2 peer-focus:text-[9px] peer-focus:text-orange-400 peer-focus:bg-[#121212] peer-focus:px-2 peer-valid:-top-2 peer-valid:text-[9px] peer-valid:bg-[#121212] peer-valid:px-2 pointer-events-none">
                  EMAIL //
                </label>
              </div>

              <div className="group relative mt-2">
                <textarea 
                  required
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm outline-none focus:border-orange-500/50 focus:bg-white/10 transition-all peer resize-none"
                  placeholder=" "
                />
                <label className="absolute left-4 top-3.5 text-white/40 font-mono text-[10px] tracking-widest transition-all peer-focus:-top-2 peer-focus:text-[9px] peer-focus:text-orange-400 peer-focus:bg-[#121212] peer-focus:px-2 peer-valid:-top-2 peer-valid:text-[9px] peer-valid:bg-[#121212] peer-valid:px-2 pointer-events-none">
                  MESSAGE //
                </label>
              </div>

              <button disabled={status === "submitting"} type="submit" className="relative group overflow-hidden rounded-xl p-[1px] mt-2 disabled:opacity-50 active:scale-95 transition-transform">
                <span className="absolute inset-0 bg-gradient-to-r from-orange-500 to-red-500 rounded-xl opacity-70" />
                <div className="relative flex items-center justify-center gap-2 px-6 py-3 bg-black rounded-xl transition-colors">
                  <span className="font-bold text-white tracking-widest uppercase text-xs">
                    {status === "submitting" ? "Sending..." : "Send Message"}
                  </span>
                  <Send className="w-3.5 h-3.5 text-orange-400" />
                </div>
              </button>

              <AnimatePresence>
                {(status === "success" || status === "error") && (
                  <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-sm px-4">
                    <motion.div 
                      initial={{ opacity: 0, scale: 0.9, y: 20 }} 
                      animate={{ opacity: 1, scale: 1, y: 0 }} 
                      exit={{ opacity: 0, scale: 0.9, y: 20 }}
                      className={`p-6 rounded-2xl border shadow-2xl w-full text-center relative overflow-hidden ${
                        status === "success" 
                          ? "bg-[#111] border-green-500/50" 
                          : "bg-[#111] border-red-500/50"
                      }`}
                    >
                      {status === "success" ? (
                        <>
                          <div className="w-12 h-12 bg-green-500/20 text-green-400 rounded-full flex items-center justify-center mx-auto mb-4">
                            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                            </svg>
                          </div>
                          <h3 className="text-xl font-bold text-white mb-2 uppercase tracking-tight">Success</h3>
                          <p className="text-green-400/80 font-mono text-xs leading-relaxed">Message delivered. I will respond shortly.</p>
                        </>
                      ) : (
                        <>
                          <div className="w-12 h-12 bg-red-500/20 text-red-400 rounded-full flex items-center justify-center mx-auto mb-4">
                            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                          </div>
                          <h3 className="text-xl font-bold text-white mb-2 uppercase tracking-tight">Failed</h3>
                          <p className="text-red-400/80 font-mono text-xs leading-relaxed">Network error. Please try again or email directly.</p>
                        </>
                      )}
                      
                      <button 
                        onClick={() => setStatus("idle")}
                        className="mt-6 px-6 py-2 bg-white/5 border border-white/10 text-white rounded-xl font-bold tracking-widest uppercase text-[10px] w-full"
                      >
                        Close
                      </button>
                    </motion.div>
                  </div>
                )}
              </AnimatePresence>

            </form>
          </div>
        </div>

      </div>
    </section>
  );
}

function SocialIcon({ icon, href }: { icon: React.ReactNode, href: string }) {
  return (
    <a 
      href={href}
      className="p-3 bg-white/5 border border-white/10 rounded-xl text-white/60 active:bg-orange-500/10 active:border-orange-500/50 active:text-white transition-colors shadow-sm"
    >
      {icon}
    </a>
  );
}

function GithubIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
    </svg>
  );
}

function LinkedinIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

function TwitterIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
    </svg>
  );
}
