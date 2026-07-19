"use client";

import React from "react";
import { Cpu, Code, Database, Globe, CheckCircle2 } from "lucide-react";

interface Skill {
  name: string;
  level: string; // e.g. "Advanced", "Proficient", "Expert"
}

interface SkillCategory {
  id: string;
  title: string;
  icon: React.ReactNode;
  description: string;
  skills: Skill[];
}

const skillCategories: SkillCategory[] = [
  {
    id: "frontend",
    title: "Frontend Engineering",
    icon: <Code className="w-5 h-5 text-cyan-accent" />,
    description: "Creating highly responsive, semantic, and animated user interfaces.",
    skills: [
      { name: "React 19 & Next.js 16", level: "Expert" },
      { name: "TypeScript", level: "Expert" },
      { name: "Tailwind CSS v4", level: "Expert" },
      { name: "HTML5 / CSS3 / SEO", level: "Expert" },
    ],
  },
  {
    id: "backend",
    title: "Backend & Systems",
    icon: <Cpu className="w-5 h-5 text-purple-accent" />,
    description: "Designing robust server architectures, session handling, and real-time sockets.",
    skills: [
      { name: "Node.js & Express", level: "Expert" },
      { name: "RESTful APIs", level: "Expert" },
      { name: "Next.js Route Handlers", level: "Expert" },
      { name: "WebSockets (ws)", level: "Advanced" },
      { name: "System Architecture", level: "Advanced" },
    ],
  },
  {
    id: "databases",
    title: "Databases & Cache",
    icon: <Database className="w-5 h-5 text-emerald-accent" />,
    description: "Optimizing relational schemas, non-relational docs, and high-performance caches.",
    skills: [
      { name: "PostgreSQL", level: "Advanced" },
      { name: "MongoDB", level: "Expert" },
      { name: "Redis Caching", level: "Advanced" },
      { name: "Prisma ORM", level: "Expert" },
      { name: "Database Design", level: "Advanced" },
    ],
  },
  {
    id: "devops",
    title: "DevOps & Cloud Tools",
    icon: <Globe className="w-5 h-5 text-yellow-500" />,
    description: "Configuring containerized pipelines, reverse proxies, and continuous deployments.",
    skills: [
      { name: "Git & GitHub Actions", level: "Expert" },
      { name: "Docker Containers", level: "Advanced" },
      { name: "Vercel & AWS S3", level: "Advanced" },
      { name: "Linux / Bash Scripting", level: "Proficient" },
      { name: "Nginx / Reverse Proxy", level: "Proficient" },
    ],
  },
];

export default function SkillsSection() {
  return (
    <div className="w-full flex flex-col gap-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
        {skillCategories.map((category) => (
          <div
            key={category.id}
            className="group relative rounded-2xl glass-panel p-6 border border-white/5 hover:border-cyan-accent/20 transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,240,255,0.02)] flex flex-col justify-between overflow-hidden"
          >
            {/* Soft ambient background glow */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-cyan-accent/5 to-transparent blur-3xl group-hover:from-cyan-accent/10 transition-all pointer-events-none" />

            <div>
              {/* Category Header */}
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2.5 rounded-xl bg-white/5 border border-white/5 group-hover:border-cyan-accent/20 transition-colors">
                  {category.icon}
                </div>
                <div>
                  <h4 className="text-lg font-bold font-mono tracking-tight text-white group-hover:text-cyan-accent transition-colors">
                    {category.title}
                  </h4>
                  <span className="text-[10px] text-zinc-500 font-mono tracking-wide">
                    {category.id.toUpperCase()}_STACK_NODE
                  </span>
                </div>
              </div>

              {/* Description */}
              <p className="text-xs text-zinc-400 font-mono leading-5 mb-6">
                {category.description}
              </p>

              {/* Skills List */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {category.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="flex items-center justify-between p-2.5 rounded-xl bg-black/40 border border-white/5 hover:border-white/10 hover:bg-black/60 transition-all"
                  >
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-cyan-accent/80 shrink-0" />
                      <span className="text-xs font-mono text-zinc-200 font-light">{skill.name}</span>
                    </div>
                    <span className="text-[9px] font-mono uppercase tracking-widest text-zinc-500 font-semibold px-2 py-0.5 rounded bg-white/5">
                      {skill.level}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
