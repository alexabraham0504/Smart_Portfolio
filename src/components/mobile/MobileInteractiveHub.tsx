"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { GraduationCap, Briefcase, Award, Code2, FolderGit2, Terminal, Globe, Database, Brain, Hexagon } from "lucide-react";
import MobileProjects from "./MobileProjects";

type TabId = "experience" | "education" | "arsenal" | "certifications" | "projects";

const TABS = [
  { id: "experience", label: "EXPERIENCE", icon: Briefcase },
  { id: "education", label: "EDUCATION", icon: GraduationCap },
  { id: "arsenal", label: "ARSENAL", icon: Code2 },
  { id: "certifications", label: "AWARDS", icon: Award },
  { id: "projects", label: "PROJECTS", icon: FolderGit2 }
];

export default function MobileInteractiveHub() {
  const [activeTab, setActiveTab] = useState<TabId>("experience");

  return (
    <section className="relative z-20 bg-[#0a0a0a] py-16 px-4" id="hub">
      <div className="max-w-7xl mx-auto relative z-10">
        
        <div className="mb-8 text-center">
          <h2 className="text-white text-3xl font-light tracking-tight uppercase">
            System <span className="font-bold text-blue-400">Database</span>
          </h2>
          <p className="text-white/40 font-mono text-[10px] mt-2 tracking-widest uppercase">Select a node to access data</p>
        </div>

        <div className="flex flex-col gap-6">
          
          {/* Scrollable Horizontal Tabs for Mobile */}
          <div className="w-full flex flex-row gap-3 overflow-x-auto pb-4 snap-x custom-scrollbar shrink-0">
            {TABS.map((tab) => {
              const Icon = tab.icon;
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id as TabId)}
                  className={`group relative shrink-0 snap-start px-4 py-3 rounded-xl border transition-all duration-300 text-left flex items-center gap-2 ${
                    isActive 
                      ? "bg-blue-600/20 border-blue-500/50" 
                      : "bg-white/5 border-white/10"
                  }`}
                >
                  <Icon className={`w-4 h-4 transition-colors ${isActive ? "text-blue-400" : "text-white/40"}`} />
                  <span className={`font-mono text-xs tracking-widest whitespace-nowrap ${isActive ? "text-blue-400 font-bold" : "text-white/60"}`}>
                    {tab.label}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Optimized Content Area (No massive 3D renders) */}
          <div className="w-full relative min-h-[400px] border border-white/10 bg-black/40 backdrop-blur-xl rounded-2xl p-5 shadow-lg">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="relative z-10 h-full"
              >
                {activeTab === "experience" && <MobileExperienceView />}
                {activeTab === "education" && <MobileEducationView />}
                {activeTab === "arsenal" && <MobileArsenalView />}
                {activeTab === "certifications" && <MobileCertificationsView />}
                {activeTab === "projects" && <MobileProjects />}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

      </div>
    </section>
  );
}

function MobileExperienceView() {
  const experiences = [
    {
      role: "Junior Software Engineer",
      company: "Net SoftPro Solutions",
      date: "April 2026 - Present",
      type: "Full Time · Remote",
      desc: ".NET Full Stack Developer with Flutter Development, Frontend Developer, and Web Design."
    },
    {
      role: "Gen AI, ML Engineer & Full Stack",
      company: "Supe AI",
      date: "July 2025 - Feb 2026",
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
    <div className="space-y-6 relative z-10">
      <div className="mb-4 border-b border-white/10 pb-3">
        <h3 className="text-xl font-light text-white tracking-tight uppercase">Operational <span className="font-bold text-orange-500">History</span></h3>
      </div>
      <div className="relative border-l border-white/10 pl-6 space-y-8">
        {experiences.map((exp, i) => (
          <div key={i} className="relative">
            <div className="absolute -left-[30px] top-1.5 w-3 h-3 rounded-full bg-[#0a0a0a] border-2 border-orange-500 shadow-[0_0_8px_rgba(249,115,22,0.6)]" />
            
            <span className="text-orange-400 font-mono text-[10px] tracking-widest">{exp.date}</span>
            <h4 className="text-lg font-bold text-white mt-1 leading-snug">{exp.role}</h4>
            <div className="flex flex-wrap items-center gap-2 mt-1.5 text-white/60 text-[10px] font-mono uppercase tracking-widest">
              <span>{exp.company}</span>
              <span className="w-1 h-1 rounded-full bg-white/20" />
              <span>{exp.type}</span>
            </div>
            <p className="text-white/70 mt-3 text-sm leading-relaxed">{exp.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function MobileEducationView() {
  const education = [
    {
      degree: "Master's in Computer Applications",
      school: "Amal Jyothi College of Engineering",
      date: "2023 - 2025",
      score: "CGPA: 7.4"
    },
    {
      degree: "Bachelor's in Commerce with Computer Application",
      school: "St. Dominic's College",
      date: "2018 - 2021",
      score: "CGPA: 5.86"
    }
  ];

  return (
    <div className="space-y-6 relative z-10">
      <div className="mb-4 border-b border-white/10 pb-3">
        <h3 className="text-xl font-light text-white tracking-tight uppercase">Knowledge <span className="font-bold text-emerald-500">Acquisition</span></h3>
      </div>
      <div className="grid gap-4">
        {education.map((edu, i) => (
          <div key={i} className="p-5 rounded-xl bg-white/5 border border-white/10">
            <span className="text-emerald-400 font-mono text-[10px] tracking-widest mb-2 block">{edu.date}</span>
            <h4 className="text-base font-bold text-white mb-2 leading-snug">{edu.degree}</h4>
            <p className="text-white/60 text-xs mb-4">{edu.school}</p>
            <div className="inline-block px-3 py-1 bg-black/40 border border-white/10 rounded-md text-white/80 font-mono text-[10px]">
              {edu.score}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function MobileArsenalView() {
  const categories = [
    { title: "Languages", icon: Terminal, items: ["Python", "C++", "Java", "C#", "TS"] },
    { title: "Web Dev", icon: Globe, items: ["React", "Angular", ".NET Core", "Next.js"] },
    { title: "Databases", icon: Database, items: ["SQL Server", "MySQL", "Postgres", "Mongo"] },
    { title: "AI / ML", icon: Brain, items: ["TensorFlow", "Pandas", "Scikit-learn", "OpenCV"] },
    { title: "Blockchain", icon: Hexagon, items: ["Solidity", "Hardhat", "Polygon"] },
  ];

  return (
    <div className="space-y-6 relative z-10 h-full flex flex-col">
      <div className="mb-2 border-b border-white/10 pb-3 shrink-0">
        <h3 className="text-xl font-light text-white tracking-tight uppercase">Technical <span className="font-bold text-purple-500">Arsenal</span></h3>
      </div>
      <div className="grid grid-cols-1 gap-4 overflow-y-auto custom-scrollbar">
        {categories.map((cat, i) => (
          <div key={i} className="p-4 rounded-xl bg-white/5 border border-white/10">
            <div className="flex items-center gap-2 mb-3">
              <cat.icon className="w-3.5 h-3.5 text-purple-400" />
              <h4 className="text-purple-400 font-mono text-[10px] tracking-widest uppercase">{cat.title}</h4>
            </div>
            <div className="flex flex-wrap gap-1.5">
              {cat.items.map((item, j) => (
                <span key={j} className="px-2 py-1 bg-black/40 border border-white/10 rounded text-white/80 text-[10px] font-medium">
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function MobileCertificationsView() {
  const certs = [
    { title: "ML Deployment Course", date: "Nov 2024" },
    { title: "Intro to Internet of Things", date: "Oct 2024" },
    { title: "Machine learning Modeling", date: "Oct 2024" },
    { title: "NASA Space Apps Challenge", date: "Oct 2024" },
    { title: "Wikipedia Tech Workshop", date: "Dec 2024" }
  ];

  return (
    <div className="space-y-6 relative z-10">
      <div className="mb-4 border-b border-white/10 pb-3">
        <h3 className="text-xl font-light text-white tracking-tight uppercase">Awards & <span className="font-bold text-yellow-500">Certs</span></h3>
      </div>
      <div className="grid grid-cols-1 gap-3">
        {certs.map((cert, i) => (
          <div key={i} className="flex items-center gap-3 p-4 rounded-xl bg-white/5 border border-white/10">
            <div className="p-1.5 rounded-full bg-yellow-500/10 border border-yellow-500/20 text-yellow-400 shrink-0">
              <Award className="w-4 h-4" />
            </div>
            <div>
              <h4 className="text-white/90 text-sm font-medium mb-0.5 leading-snug">{cert.title}</h4>
              <span className="text-yellow-400/60 font-mono text-[10px]">{cert.date}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
