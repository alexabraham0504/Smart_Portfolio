"use client";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

const projects = [
  {
    name: "AI CONTENT ENGINE",
    description: "Built an AI-powered platform that generates SEO-optimized marketing content using GPT-4 and custom fine-tuned models.",
    stack: ["Next.js", "OpenAI", "PostgreSQL"],
    url: "#",
    github: "#",
  },
  {
    name: "REAL-TIME WORKSPACE",
    description: "WebSocket-powered document editing system enabling seamless real-time collaboration for distributed teams.",
    stack: ["React", "Node.js", "Socket.io"],
    url: "#",
    github: "#",
  },
  {
    name: "ML ANALYTICS PLATFORM",
    description: "Unified analytics dashboard with predictive ML models and interactive data visualizations.",
    stack: ["React", "Python", "TensorFlow"],
    url: "#",
    github: "#",
  }
];

export default function Projects() {
  return (
    <section className="relative z-20 bg-[#121212] py-32 px-4 md:px-16 overflow-hidden" id="projects">
      {/* 3D Animated Intersecting Geometry Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none [perspective:1000px] flex items-center justify-center opacity-60">
        <motion.div 
          animate={{ rotateX: [0, 360], rotateY: [0, 360] }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          className="absolute w-[800px] h-[400px] border-[4px] border-cyan-500/30 rounded-[100px]"
          style={{ transformStyle: 'preserve-3d' }}
        />
        <motion.div 
          animate={{ rotateX: [360, 0], rotateZ: [0, 360] }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
          className="absolute w-[600px] h-[800px] border-[4px] border-blue-500/30 rounded-full border-dashed"
          style={{ transformStyle: 'preserve-3d' }}
        />
        {/* Massive Core Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-cyan-600/10 blur-[150px] rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-white text-5xl md:text-7xl font-light tracking-tight"
          >
            SELECTED <span className="font-bold">WORKS</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="group relative rounded-2xl bg-white/5 border border-white/10 p-8 backdrop-blur-md overflow-hidden hover:bg-white/10 hover:border-white/20 transition-all duration-500"
            >
              {/* Glassmorphism Glow on Hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative z-10 flex flex-col h-full">
                <span className="text-white/40 text-sm font-mono mb-6">
                  0{index + 1}
                </span>
                
                <h3 className="text-2xl font-bold text-white mb-4">
                  {project.name}
                </h3>
                
                <p className="text-white/60 mb-8 flex-grow leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-8">
                  {project.stack.map((tech) => (
                    <span 
                      key={tech}
                      className="px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-white/70 text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex items-center gap-4 pt-6 border-t border-white/10">
                  <a href={project.github} className="text-white/50 hover:text-white transition-colors p-2 bg-white/5 rounded-full hover:bg-white/10">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                    </svg>
                  </a>
                  <a href={project.url} className="text-white/50 hover:text-white transition-colors p-2 bg-white/5 rounded-full hover:bg-white/10">
                    <ExternalLink size={20} />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
