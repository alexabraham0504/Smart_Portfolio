"use client";

import { motion } from "framer-motion";
import { Code2, PenTool, Layout, Layers, Cpu, Globe } from "lucide-react";

const services = [
  {
    title: "Digital Experiences",
    description: "Building immersive, interactive web experiences combining 3D graphics, animations, and high-performance frameworks.",
    icon: <Globe className="w-8 h-8 text-orange-400" />,
  },
  {
    title: "Full-Stack Development",
    description: "End-to-end architecture and development. From scalable cloud backends to perfectly responsive frontends.",
    icon: <Code2 className="w-8 h-8 text-blue-400" />,
  },
  {
    title: "UI/UX Design",
    description: "Crafting intuitive, aesthetic, and user-centric interfaces with a focus on modern glassmorphism and cyberpunk styles.",
    icon: <PenTool className="w-8 h-8 text-purple-400" />,
  },
  {
    title: "AI Integration",
    description: "Implementing cutting-edge LLMs and machine learning models directly into consumer-facing web applications.",
    icon: <Cpu className="w-8 h-8 text-red-400" />,
  },
  {
    title: "System Architecture",
    description: "Designing robust, highly available database schemas and microservices for complex web platforms.",
    icon: <Layers className="w-8 h-8 text-cyan-400" />,
  },
  {
    title: "Web3 & Blockchain",
    description: "Developing smart contracts and decentralized applications (dApps) with modern web integrations.",
    icon: <Layout className="w-8 h-8 text-green-400" />,
  }
];

export default function Services() {
  return (
    <section className="relative z-20 bg-[#121212] py-24 px-4 md:px-16 overflow-hidden" id="services">
      {/* 3D Animated Flying Cyber Grid */}
      <div className="absolute inset-0 pointer-events-none [perspective:1000px] overflow-hidden flex items-center justify-center">
        <motion.div 
          animate={{ backgroundPosition: ["0px 0px", "0px 64px"] }}
          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
          className="absolute w-[200%] h-[200%] bg-[linear-gradient(rgba(59,130,246,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.1)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]"
          style={{ 
            transformStyle: 'preserve-3d',
            rotateX: 60,
            translateY: '20%'
          }}
        />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-lg h-[400px] bg-blue-600/10 blur-[120px] rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-white text-5xl md:text-7xl font-light tracking-tight uppercase"
          >
            Core <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-600">Services</span>
          </motion.h2>
          <motion.div 
            initial={{ opacity: 0, width: 0 }}
            whileInView={{ opacity: 1, width: "100px" }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="h-1 bg-gradient-to-r from-blue-500 to-transparent mt-4"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative p-8 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-blue-500/30 transition-colors duration-500 overflow-hidden backdrop-blur-sm"
            >
              {/* Hover Glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative z-10">
                <div className="mb-6 p-4 rounded-xl bg-black/40 border border-white/10 inline-block group-hover:scale-110 transition-transform duration-500 shadow-[0_0_15px_rgba(0,0,0,0.5)]">
                  {service.icon}
                </div>
                
                <h3 className="text-xl font-bold text-white mb-4 tracking-wide">
                  {service.title}
                </h3>
                
                <p className="text-white/50 leading-relaxed font-light">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
