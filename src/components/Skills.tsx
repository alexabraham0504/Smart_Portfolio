"use client";

import { motion } from "framer-motion";

const skills = [
  {
    category: "Frontend Development",
    items: ["React", "Next.js", "JavaScript", "TypeScript", "HTML", "Tailwind CSS"],
    color: "from-orange-500/20 to-red-500/20",
    border: "border-orange-500/30",
  },
  {
    category: "Backend & Systems",
    items: ["Node.js", "Python", "PHP", "PostgreSQL", "AWS"],
    color: "from-blue-500/20 to-cyan-500/20",
    border: "border-blue-500/30",
  },
  {
    category: "Design & Concepts",
    items: ["System Architecture", "Machine Learning", "Semantic AI", "UI/UX Design"],
    color: "from-purple-500/20 to-pink-500/20",
    border: "border-purple-500/30",
  }
];

export default function Skills() {
  return (
    <section className="relative z-20 bg-[#121212] py-24 px-4 md:px-16 overflow-hidden" id="skills">
      {/* 3D Cyber-Tunnel Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none [perspective:1000px] flex items-center justify-center opacity-60">
        {[...Array(6)].map((_, i) => (
          <motion.div 
            key={i}
            initial={{ z: -1500, opacity: 0 }}
            animate={{ z: 800, opacity: [0, 0.8, 0.8, 0] }}
            transition={{ 
              duration: 12, 
              repeat: Infinity, 
              ease: "linear", 
              delay: i * 2 
            }}
            className="absolute w-[800px] h-[800px] border-[3px] border-orange-500/40 rounded-[100px]"
            style={{ transformStyle: 'preserve-3d' }}
          />
        ))}
        {/* Core Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-orange-600/10 blur-[150px] rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-white text-4xl sm:text-5xl md:text-7xl font-light tracking-tight uppercase"
          >
            Technical <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-600">Arsenal</span>
          </motion.h2>
          <motion.div 
            initial={{ opacity: 0, width: 0 }}
            whileInView={{ opacity: 1, width: "100px" }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="h-1 bg-gradient-to-r from-orange-500 to-transparent mt-4"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skills.map((skillGroup, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ y: -10 }}
              className={`relative rounded-3xl bg-gradient-to-br ${skillGroup.color} border ${skillGroup.border} p-8 backdrop-blur-md overflow-hidden group shadow-[0_0_30px_rgba(0,0,0,0.5)]`}
            >
              {/* Animated Background Glow */}
              <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative z-10">
                <span className="text-white/40 text-xs font-mono mb-4 block tracking-[0.2em]">
                  SYS.SKILLSET.0{index + 1}
                </span>
                
                <h3 className="text-2xl font-bold text-white mb-8 border-b border-white/10 pb-4">
                  {skillGroup.category}
                </h3>
                
                <div className="flex flex-wrap gap-3">
                  {skillGroup.items.map((item) => (
                    <span 
                      key={item}
                      className="px-4 py-2 rounded-full bg-black/40 border border-white/10 text-white/80 text-sm font-medium hover:bg-white/10 hover:text-white transition-all cursor-default shadow-inner"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
