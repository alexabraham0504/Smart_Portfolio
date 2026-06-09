"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { GraduationCap, Briefcase, Award, Code2, FolderGit2, Terminal, Globe, Server, Database, Brain, Hexagon, Wrench, Scan } from "lucide-react";
import Projects from "./Projects";

type TabId = "education" | "experience" | "certifications" | "arsenal" | "projects";

const TABS = [
  { id: "education", label: "EDUCATION", icon: GraduationCap },
  { id: "experience", label: "EXPERIENCE", icon: Briefcase },
  { id: "arsenal", label: "ARSENAL", icon: Code2 },
  { id: "certifications", label: "AWARDS & CERTS", icon: Award },
  { id: "projects", label: "PROJECTS", icon: FolderGit2 }
];

export default function InteractiveHub() {
  const [activeTab, setActiveTab] = useState<TabId>("experience");

  return (
    <section className="relative z-20 bg-[#0a0a0a] min-h-screen py-12 md:py-24 px-4 sm:px-8 md:px-16 overflow-hidden" id="hub">
      {/* 3D Grid Background */}
      <div className="absolute inset-0 pointer-events-none opacity-20"
           style={{
             backgroundImage: `linear-gradient(rgba(59, 130, 246, 0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(59, 130, 246, 0.2) 1px, transparent 1px)`,
             backgroundSize: '50px 50px',
             transform: 'perspective(1000px) rotateX(60deg) translateY(-100px) translateZ(-200px)',
           }}
      />
      
      <div className="max-w-7xl mx-auto relative z-10">
        
        <div className="mb-8 md:mb-16 text-center md:text-left">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-white text-4xl sm:text-5xl md:text-6xl font-light tracking-tight uppercase"
          >
            System <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-600">Database</span>
          </motion.h2>
          <p className="text-white/40 font-mono text-sm mt-4 tracking-widest uppercase">Select a node to access data records</p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12">
          
          {/* Navigation Hologram */}
          <div className="w-full lg:w-1/4 flex flex-row lg:flex-col gap-2 md:gap-4 overflow-x-auto pb-4 lg:pb-0 snap-x custom-scrollbar shrink-0">
            {TABS.map((tab) => {
              const Icon = tab.icon;
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id as TabId)}
                  className={`group relative shrink-0 snap-start px-4 md:px-6 py-3 md:py-4 rounded-xl md:rounded-2xl border transition-all duration-500 overflow-hidden text-left flex items-center gap-3 md:gap-4 ${
                    isActive 
                      ? "bg-blue-600/10 border-blue-500/50 shadow-[0_0_20px_rgba(59,130,246,0.2)]" 
                      : "bg-white/5 border-white/10 hover:bg-white/10 hover:border-white/20"
                  }`}
                >
                  {/* Glowing line indicator */}
                  {isActive && (
                    <motion.div 
                      layoutId="activeTabIndicator"
                      className="absolute left-0 bottom-0 lg:top-0 w-full lg:w-1 h-1 lg:h-full bg-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.8)]"
                    />
                  )}
                  <Icon className={`w-4 h-4 md:w-5 md:h-5 transition-colors ${isActive ? "text-blue-400" : "text-white/40 group-hover:text-white"}`} />
                  <span className={`font-mono text-xs md:text-sm tracking-widest transition-colors whitespace-nowrap ${isActive ? "text-blue-400" : "text-white/60 group-hover:text-white"}`}>
                    {tab.label}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Content Viewer */}
          <div className="w-full lg:w-3/4 relative min-h-[500px] md:min-h-[600px] border border-white/10 bg-black/40 backdrop-blur-2xl rounded-2xl md:rounded-3xl p-4 sm:p-8 md:p-12 shadow-[0_0_50px_rgba(0,0,0,0.5)] overflow-hidden">
            
            {/* Holographic scanning effect */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-500/5 to-transparent h-[200%] w-full animate-[scan_6s_linear_infinite] pointer-events-none" />

            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, scale: 0.95, rotateY: 10, filter: "blur(10px)" }}
                animate={{ opacity: 1, scale: 1, rotateY: 0, filter: "blur(0px)" }}
                exit={{ opacity: 0, scale: 1.05, rotateY: -10, filter: "blur(10px)" }}
                transition={{ duration: 0.4, type: "spring", bounce: 0.2 }}
                className="relative z-10 h-full"
              >
                {activeTab === "experience" && <ExperienceView />}
                {activeTab === "education" && <EducationView />}
                {activeTab === "arsenal" && <ArsenalView />}
                {activeTab === "certifications" && <CertificationsView />}
                {activeTab === "projects" && <div className="-m-4 -mt-16 sm:-m-8 sm:-mt-24 md:-m-12 md:-mt-32 overflow-hidden rounded-2xl md:rounded-3xl"><Projects /></div>}
              </motion.div>
            </AnimatePresence>
            
          </div>
        </div>

      </div>
    </section>
  );
}

function ExperienceView() {
  const experiences = [
    {
      role: "Junior Software Engineer",
      company: "Net SoftPro Solutions",
      date: "April 2026 - Present",
      type: "Full Time · Remote",
      desc: ".NET Full Stack Developer with Flutter Development, Frontend Developer, and Web Design."
    },
    {
      role: "Generative AI, ML Engineer & Full Stack Dev (Intern)",
      company: "Supe AI",
      date: "July 2025 - February 2026",
      type: "Internship",
      desc: "Worked on Generative AI and ML powered applications while developing full-stack web solutions."
    },
    {
      role: "Freelance Developer",
      company: "Independent",
      date: "Ongoing",
      type: "Freelance",
      desc: "Delivering solutions across multiple stacks and programming languages based on client needs."
    }
  ];

  return (
    <div className="space-y-8 relative z-10">
      {/* 3D Animated Background - Experience (Orange) */}
      <div className="absolute inset-0 pointer-events-none [perspective:1000px] overflow-hidden flex items-center justify-center -z-10 opacity-40">
        <motion.div animate={{ rotateX: [0, 360], rotateZ: [0, 360] }} transition={{ duration: 40, repeat: Infinity, ease: "linear" }} className="absolute w-[300px] h-[300px] md:w-[600px] md:h-[600px] border-[2px] border-orange-500/20" style={{ transformStyle: 'preserve-3d' }} />
        <motion.div animate={{ rotateX: [360, 0], rotateY: [0, 360] }} transition={{ duration: 50, repeat: Infinity, ease: "linear" }} className="absolute w-[350px] h-[350px] md:w-[700px] md:h-[700px] border-[2px] border-orange-400/20 rotate-45" style={{ transformStyle: 'preserve-3d' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-orange-600/10 blur-[120px] rounded-full" />
      </div>

      <div className="mb-8 border-b border-white/10 pb-4">
        <h3 className="text-3xl font-light text-white tracking-tight uppercase">Operational <span className="font-bold text-orange-500">History</span></h3>
      </div>
      <div className="relative border-l border-white/10 pl-6 md:pl-8 ml-2 md:ml-4 space-y-8 md:space-y-12">
        {experiences.map((exp, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.1 }}
            className="relative"
          >
            {/* Timeline Node */}
            <div className="absolute -left-[41px] top-1.5 w-4 h-4 rounded-full bg-[#0a0a0a] border-2 border-orange-500 shadow-[0_0_10px_rgba(249,115,22,0.8)]" />
            
            <span className="text-orange-400 font-mono text-sm tracking-widest">{exp.date}</span>
            <h4 className="text-2xl font-bold text-white mt-2">{exp.role}</h4>
            <div className="flex items-center gap-3 mt-2 text-white/60 text-sm font-mono uppercase tracking-widest">
              <span>{exp.company}</span>
              <span className="w-1 h-1 rounded-full bg-white/20" />
              <span>{exp.type}</span>
            </div>
            <p className="text-white/70 mt-4 leading-relaxed">{exp.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

function EducationView() {
  const education = [
    {
      degree: "Master's in Computer Applications (NBA, NAAC)",
      school: "Amal Jyothi College of Engineering (Autonomous), Kanjirapally",
      date: "2023 - 2025",
      score: "CGPA: 7.4/10"
    },
    {
      degree: "Bachelor's in Commerce with Computer Application",
      school: "St. Dominic's College, Kanjirapally",
      date: "2018 - 2021",
      score: "CGPA: 5.86/10"
    }
  ];

  return (
    <div className="space-y-8 relative z-10">
      {/* 3D Animated Background - Education (Emerald) */}
      <div className="absolute inset-0 pointer-events-none [perspective:1000px] overflow-hidden flex items-center justify-center -z-10 opacity-40">
        <motion.div animate={{ y: [-20, 20, -20], rotateX: [0, 180, 360], rotateY: [0, 180, 360] }} transition={{ duration: 20, repeat: Infinity, ease: "linear" }} className="absolute w-[300px] h-[300px] border-[4px] border-emerald-500/20 rounded-xl" style={{ transformStyle: 'preserve-3d' }} />
        <motion.div animate={{ y: [20, -20, 20], rotateX: [360, 180, 0], rotateY: [360, 180, 0] }} transition={{ duration: 25, repeat: Infinity, ease: "linear" }} className="absolute w-[400px] h-[400px] border-[2px] border-emerald-400/20 rounded-full border-dashed" style={{ transformStyle: 'preserve-3d' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-emerald-600/10 blur-[120px] rounded-full" />
      </div>

      <div className="mb-8 border-b border-white/10 pb-4">
        <h3 className="text-3xl font-light text-white tracking-tight uppercase">Knowledge <span className="font-bold text-emerald-500">Acquisition</span></h3>
      </div>
      <div className="grid gap-6">
        {education.map((edu, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className="p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-emerald-500/30 transition-colors group relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/0 via-emerald-500/5 to-emerald-500/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
            
            <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-4">
              <h4 className="text-2xl font-bold text-white max-w-lg">{edu.degree}</h4>
              <span className="text-emerald-400 font-mono text-sm tracking-widest bg-emerald-500/10 px-4 py-2 rounded-full border border-emerald-500/20 whitespace-nowrap">
                {edu.date}
              </span>
            </div>
            <p className="text-white/60 text-lg mb-6">{edu.school}</p>
            <div className="inline-block px-4 py-2 bg-black/40 border border-white/10 rounded-lg text-white font-mono">
              {edu.score}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

function ArsenalView() {
  const [hoveredSkill, setHoveredSkill] = useState<{name: string, title: string, Icon: React.ElementType, logoUrl: string | null} | null>(null);

  const getLogoUrl = (name: string) => {
    const map: Record<string, string> = {
      "Python": "python/python-original.svg",
      "C": "c/c-original.svg",
      "C++": "cplusplus/cplusplus-original.svg",
      "Java": "java/java-original.svg",
      "C#": "csharp/csharp-original.svg",
      "TypeScript": "typescript/typescript-original.svg",
      "HTML": "html5/html5-original.svg",
      "CSS": "css3/css3-original.svg",
      "Angular": "angular/angular-original.svg",
      "React": "react/react-original.svg",
      "ASP.NET Core 5": "dotnetcore/dotnetcore-original.svg",
      "Node.js": "nodejs/nodejs-original.svg",
      "Next.js": "nextjs/nextjs-original.svg",
      "SQL Server": "microsoftsqlserver/microsoftsqlserver-original.svg",
      "MySQL": "mysql/mysql-original.svg",
      "PostgreSQL": "postgresql/postgresql-original.svg",
      "MongoDB": "mongodb/mongodb-original.svg",
      "Firebase": "firebase/firebase-plain.svg",
      "Scikit-learn": "scikitlearn/scikitlearn-original.svg",
      "TensorFlow": "tensorflow/tensorflow-original.svg",
      "Pandas": "pandas/pandas-original.svg",
      "NumPy": "numpy/numpy-original.svg",
      "OpenCV": "opencv/opencv-original.svg",
      "Solidity": "solidity/solidity-original.svg",
      "Polygon (L2)": "polygon/polygon-original.svg",
      "Git": "git/git-original.svg",
      "GitHub": "github/github-original.svg",
      "Linux": "linux/linux-original.svg",
    };
    return map[name] ? `https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${map[name]}` : null;
  };

  const categories = [
    { title: "Languages", icon: Terminal, items: ["Python", "C", "C++", "Java", "C#", "TypeScript"] },
    { title: "Web Dev", icon: Globe, items: ["HTML", "CSS", "Angular", "React", "ASP.NET Core 5", "Node.js", "Next.js"] },
    { title: "Backend & APIs", icon: Server, items: ["RESTful APIs", "JWT", "RBAC", "Entity Framework", "Dependency Injection"] },
    { title: "Databases", icon: Database, items: ["SQL Server", "MySQL", "PostgreSQL", "MongoDB", "Firebase"] },
    { title: "AI / ML", icon: Brain, items: ["Scikit-learn", "TensorFlow", "Pandas", "NumPy", "OpenCV", "MobileNetV2", "Inception", "BART"] },
    { title: "Blockchain", icon: Hexagon, items: ["Solidity", "Hardhat", "Ethers.js", "Polygon (L2)", "Smart Contracts", "Hybrid Arch"] },
    { title: "Tools", icon: Wrench, items: ["Git", "GitHub", "Postman", "Linux", "OS"] }
  ];

  return (
    <div className="space-y-6 relative z-10 h-full flex flex-col">
      <div className="mb-2 border-b border-white/10 pb-4 shrink-0">
        <h3 className="text-3xl font-light text-white tracking-tight uppercase">Technical <span className="font-bold text-purple-500">Arsenal</span></h3>
      </div>

      <div className="flex flex-col lg:flex-row gap-8 flex-grow">
        
        {/* Left: Skills Grid */}
        <div className="w-full lg:w-3/5 grid grid-cols-1 sm:grid-cols-2 gap-4 overflow-y-auto pr-2 md:pr-4 pb-12 custom-scrollbar">
          {categories.map((cat, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.05 }}
              className="p-4 md:p-5 rounded-xl md:rounded-2xl bg-gradient-to-br from-white/5 to-transparent border border-white/10 hover:border-purple-500/30 transition-colors"
            >
              <div className="flex items-center gap-2 mb-4">
                <cat.icon className="w-4 h-4 text-purple-400" />
                <h4 className="text-purple-400 font-mono text-sm tracking-widest uppercase">{cat.title}</h4>
              </div>
              <div className="flex flex-wrap gap-2">
                {cat.items.map((item, j) => {
                  const logoUrl = getLogoUrl(item);
                  return (
                    <span 
                      key={j} 
                      onMouseEnter={() => setHoveredSkill({ name: item, title: cat.title, Icon: cat.icon, logoUrl })}
                      onMouseLeave={() => setHoveredSkill(null)}
                      className="px-3 py-1.5 bg-black/40 border border-white/10 rounded-md text-white/80 text-xs font-medium hover:text-white hover:border-purple-500 hover:bg-purple-500/20 hover:shadow-[0_0_15px_rgba(168,85,247,0.5)] transition-all cursor-crosshair flex items-center gap-2"
                    >
                      {logoUrl && <img src={logoUrl} alt={item} className="w-3.5 h-3.5 object-contain" />}
                      {item}
                    </span>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Right: Holographic Inspector */}
        <div className="w-full lg:w-2/5 hidden lg:flex flex-col items-center justify-center p-8 rounded-3xl bg-black/60 border border-white/10 backdrop-blur-xl relative overflow-hidden group">
          <div className="absolute inset-0 bg-gradient-to-b from-purple-500/0 via-purple-500/5 to-purple-500/0 h-[200%] w-full animate-[scan_4s_linear_infinite] pointer-events-none" />
          
          <AnimatePresence mode="wait">
            {hoveredSkill ? (
              <motion.div
                key={hoveredSkill.name}
                initial={{ opacity: 0, scale: 0.5, rotateY: -90 }}
                animate={{ opacity: 1, scale: 1, rotateY: 0 }}
                exit={{ opacity: 0, scale: 1.5, filter: "blur(10px)" }}
                transition={{ type: "spring", bounce: 0.4, duration: 0.6 }}
                className="flex flex-col items-center text-center"
              >
                <motion.div 
                  animate={{ y: [-10, 10, -10] }} 
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="relative mb-8 flex justify-center items-center h-32"
                >
                  <div className="absolute inset-0 bg-purple-500 blur-[50px] opacity-40 rounded-full" />
                  {hoveredSkill.logoUrl ? (
                    <img src={hoveredSkill.logoUrl} alt={hoveredSkill.name} className="w-32 h-32 object-contain relative z-10 drop-shadow-[0_0_15px_rgba(255,255,255,0.2)]" />
                  ) : (
                    <hoveredSkill.Icon className="w-32 h-32 text-purple-400 relative z-10 drop-shadow-[0_0_15px_rgba(168,85,247,0.8)]" strokeWidth={1} />
                  )}
                </motion.div>
                
                <h2 className="text-4xl font-bold text-white tracking-tight mb-2 uppercase drop-shadow-[0_0_10px_rgba(255,255,255,0.5)]">
                  {hoveredSkill.name}
                </h2>
                <p className="text-purple-400/80 font-mono text-sm tracking-widest uppercase border border-purple-500/30 px-4 py-1 rounded-full bg-purple-500/10">
                  {hoveredSkill.title} Node
                </p>
              </motion.div>
            ) : (
              <motion.div
                key="empty"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="flex flex-col items-center text-center opacity-30"
              >
                <Scan className="w-24 h-24 text-white/20 mb-6" strokeWidth={1} />
                <p className="font-mono tracking-widest text-sm text-white/40 uppercase">
                  Awaiting Selection
                </p>
                <p className="text-xs text-white/20 mt-2">Hover over a node to inspect</p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}

function CertificationsView() {
  const certs = [
    { title: "Certificate of Completion ML Deployment Course", date: "Nov 2024" },
    { title: "Introduction to Internet of Things – NPTEL", date: "Oct 2024" },
    { title: "Certificate of Completion Machine learning Modeling", date: "Oct 2024" },
    { title: "Volunteer during the NASA Space Apps Challenge", date: "Oct 2024" },
    { title: "Participation in Wikipedia Technical Workshop", date: "Dec 2024" },
    { title: "Azure Coordinator, Cultural Fest – Amal Jyothi College", date: "2023 & 2024" }
  ];

  return (
    <div className="space-y-8 relative z-10">
      {/* 3D Animated Background - Certifications (Yellow) */}
      <div className="absolute inset-0 pointer-events-none [perspective:1000px] overflow-hidden flex items-center justify-center -z-10 opacity-30">
        <motion.div animate={{ rotateY: [0, 360], rotateZ: [0, 360] }} transition={{ duration: 30, repeat: Infinity, ease: "linear" }} className="absolute w-[200px] h-[200px] md:w-[400px] md:h-[400px] border-[4px] border-yellow-500/40 rotate-45" style={{ transformStyle: 'preserve-3d' }} />
        <motion.div animate={{ rotateY: [360, 0], rotateX: [0, 360] }} transition={{ duration: 35, repeat: Infinity, ease: "linear" }} className="absolute w-[300px] h-[300px] md:w-[600px] md:h-[600px] border-[2px] border-amber-500/20 rotate-45" style={{ transformStyle: 'preserve-3d' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200px] h-[200px] md:w-[400px] md:h-[400px] bg-yellow-600/10 blur-[120px] rounded-full" />
      </div>

      <div className="mb-8 border-b border-white/10 pb-4">
        <h3 className="text-3xl font-light text-white tracking-tight uppercase">Awards & <span className="font-bold text-yellow-500">Certs</span></h3>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {certs.map((cert, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.1 }}
            className="flex items-start gap-4 p-5 rounded-2xl bg-white/5 border border-white/10 hover:bg-yellow-500/10 hover:border-yellow-500/30 transition-colors"
          >
            <div className="mt-1 p-2 rounded-full bg-yellow-500/10 border border-yellow-500/20 text-yellow-400">
              <Award className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-white font-medium mb-1 leading-snug">{cert.title}</h4>
              <span className="text-yellow-400/60 font-mono text-xs">{cert.date}</span>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
