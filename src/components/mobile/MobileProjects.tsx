"use client";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

const projects = [
  {
    name: "LexNet",
    description: "A specialized network or system application built with JavaScript.",
    stack: ["JavaScript"],
    url: "https://github.com/alexabraham0504/LexNet",
    github: "https://github.com/alexabraham0504/LexNet",
  },
  {
    name: "AI Question Answering System",
    description: "An artificial intelligence system designed to process and answer complex queries.",
    stack: ["Python", "AI/ML"],
    url: "https://github.com/alexabraham0504/ai_question_answering_system",
    github: "https://github.com/alexabraham0504/ai_question_answering_system",
  },
  {
    name: "Semantic Response Generator",
    description: "A system that leverages semantic analysis to generate context-aware responses.",
    stack: ["JavaScript", "NLP"],
    url: "https://github.com/alexabraham0504/semantic_response_generator",
    github: "https://github.com/alexabraham0504/semantic_response_generator",
  },
  {
    name: "Event Management",
    description: "A comprehensive event management platform with booking and scheduling features.",
    stack: ["PHP"],
    url: "https://github.com/alexabraham0504/event_management",
    github: "https://github.com/alexabraham0504/event_management",
  },
  {
    name: "Logistics Pro",
    description: "A logistics and supply chain management dashboard.",
    stack: ["HTML", "CSS"],
    url: "https://logistics-pro-nu.vercel.app/",
    github: "https://github.com/alexabraham0504/logistics_pro",
  }
];

export default function MobileProjects() {
  return (
    <div className="w-full pb-8">
      {/* Optimized Header */}
      <div className="mb-8">
        <h2 className="text-white text-3xl font-light tracking-tight">
          SELECTED <span className="font-bold">WORKS</span>
        </h2>
      </div>

      <div className="flex flex-col gap-6">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.4 }}
            className="rounded-2xl bg-white/5 border border-white/10 p-6 backdrop-blur-sm overflow-hidden"
          >
            <div className="flex flex-col h-full">
              <span className="text-white/40 text-xs font-mono mb-4">
                0{index + 1}
              </span>
              
              <h3 className="text-xl font-bold text-white mb-2">
                {project.name}
              </h3>
              
              <p className="text-white/60 text-sm mb-6 flex-grow leading-relaxed">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-2 mb-6">
                {project.stack.map((tech) => (
                  <span 
                    key={tech}
                    className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-white/70 text-[10px] font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              
              <div className="flex items-center gap-4 pt-4 border-t border-white/10">
                <a href={project.github} className="text-white/50 hover:text-white transition-colors p-2 bg-white/5 rounded-full active:bg-white/10">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                  </svg>
                </a>
                <a href={project.url} className="text-white/50 hover:text-white transition-colors p-2 bg-white/5 rounded-full active:bg-white/10">
                  <ExternalLink size={18} />
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
