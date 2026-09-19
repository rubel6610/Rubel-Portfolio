"use client";

import { ExternalLink, Code, Server, Database, CheckCircle2, Layers } from "lucide-react";
import { Github } from "./Icons";

interface ProjectData {
  title: string;
  description: string;
  tags: string[];
  features: string[];
  metrics: string;
  ClientSideRepo?: string;
  ServerRepo?: string;
  LiveLink?: string;
  type: "Full Stack" | "Economics & Data" | "DevOps & Core";
}

const mockProjects: ProjectData[] = [
  {
    title: "AGE-WEL-RI - Support Platform for Senior Citizens",
    description: "Age-wel-ri is a USA-based full-stack platform where senior citizens living alone get support for safety management for themselves and their residences. Clients can create safety plan agreements and admins manage platform subscriptions.",
    tags: ["Next.js", "Shadcn UI", "Node.js", "Express.js", "MongoDB", "Prisma", "JWT", "Bcrypt"],
    features: [
      "Client Side: Conditional agreement signup & billing, scheduling safety visits, starting and reactivating safety plans",
      "Client Dashboard: Manage all allocated safety visits and active subscription plans",
      "Admin Side: Platform-wide monitoring, managing plans, subscriptions, clients, and agreements",
      "Safety Reports: Admin report generation for safety visits with direct uploads to client portal"
    ],
    metrics: "USA Senior Safety Platform | Dual Role Dashboards (Client & Admin)",
    ClientSideRepo: "https://github.com/rubel6610/agewellri",
    ServerRepo: "https://github.com/rubel6610/agewellri-backend",
    LiveLink: "https://age-well-ri.vercel.app/",
    type: "Full Stack",
  },
  {
    title: "RideX - Smart Ride Sharing Platform",
    description: "RideX is an AI-powered ride-sharing platform with real-time tracking, face verification, secure authentication, and intuitive dashboards for users, riders, and admins.",
    tags: ["Next.js", "Shadcn UI", "Leaflet", "Node.js", "Express.js", "MongoDB", "Socket.IO", "JWT", "GSAP"],
    features: [
      "Led team of 6 members to complete the project",
      "Developed KYC-based secure authentication & authorization using JWT",
      "Built role-based dashboards for users, riders, and admins to book & track rides",
      "Integrated real-time ride booking and chatting features with Socket.IO",
      "Integrated AI for blog creation, chatbot, and weather forecast"
    ],
    metrics: "Team Lead (6 Members) | Socket.IO Real-Time Tracking",
    ClientSideRepo: "https://github.com/rubel6610/RideX-Frontend",
    ServerRepo: "https://github.com/rubel6610/ridex-backend",
    LiveLink: "https://ridex-ride-sharing.vercel.app/",
    type: "Full Stack",
  },
];

export default function ProjectCard() {
  return (
    <div className="w-full flex flex-col gap-8 md:gap-10 py-4">
      {mockProjects.map((project, idx) => (
        <div
          key={idx}
          className="w-full group relative rounded-2xl glass-panel border border-white/10 hover:border-cyan-accent/30 transition-all duration-300 hover:shadow-[0_0_40px_rgba(0,240,255,0.06)] flex flex-col justify-between overflow-hidden"
          style={{ transformStyle: "preserve-3d" }}
        >
          {/* Glowing gradient top bar */}
          <div className="h-1 w-full bg-gradient-to-r from-cyan-accent via-purple-accent to-emerald-accent opacity-80 group-hover:opacity-100 transition-opacity" />

          {/* Ambient background blur spot */}
          <div className="absolute -top-12 -right-12 w-48 h-48 bg-cyan-accent/10 rounded-full blur-3xl group-hover:bg-cyan-accent/20 transition-all pointer-events-none" />
          
          <div className="p-6 md:p-8 flex flex-col gap-5">
            {/* Header: Project Index & Category + Action Buttons */}
            <div className="flex items-center justify-between gap-3 flex-wrap">
              <div className="flex items-center gap-2">
                <span className="text-xs font-mono text-cyan-accent font-extrabold tracking-wider px-2.5 py-1 rounded bg-cyan-accent/10 border border-cyan-accent/20">
                  PROJECT_0{idx + 1}
                </span>
                <span className="text-[10px] uppercase font-mono tracking-widest px-2.5 py-1 rounded bg-white/5 border border-white/10 text-zinc-400 font-medium flex items-center gap-1.5">
                  {project.type === "Full Stack" && <Server className="w-3 h-3 text-cyan-accent" />}
                  {project.type === "Economics & Data" && <Database className="w-3 h-3 text-purple-accent" />}
                  {project.type === "DevOps & Core" && <Code className="w-3 h-3 text-emerald-accent" />}
                  {project.type}
                </span>
              </div>

              {/* Link Buttons */}
              <div className="flex items-center gap-2 flex-wrap">
                {project.ClientSideRepo && (
                  <a
                    href={project.ClientSideRepo}
                    target="_blank"
                    rel="noreferrer"
                    className="px-3 py-1.5 rounded-xl bg-black/40 border border-white/10 hover:bg-purple-accent/20 hover:border-purple-accent/40 text-zinc-300 hover:text-white transition-all text-xs font-mono flex items-center gap-1.5 shadow-sm"
                    title="Client Side Repository"
                  >
                    <Github className="w-3.5 h-3.5 text-cyan-accent" />
                    <span>Client Code</span>
                  </a>
                )}
                {project.ServerRepo && (
                  <a
                    href={project.ServerRepo}
                    target="_blank"
                    rel="noreferrer"
                    className="px-3 py-1.5 rounded-xl bg-black/40 border border-white/10 hover:bg-purple-accent/20 hover:border-purple-accent/40 text-zinc-300 hover:text-white transition-all text-xs font-mono flex items-center gap-1.5 shadow-sm"
                    title="Server Side Repository"
                  >
                    <Server className="w-3.5 h-3.5 text-purple-accent" />
                    <span>Server Code</span>
                  </a>
                )}
                {project.LiveLink && (
                  <a
                    href={project.LiveLink}
                    target="_blank"
                    rel="noreferrer"
                    className="px-3.5 py-1.5 rounded-xl bg-cyan-accent/15 border border-cyan-accent/30 hover:bg-cyan-accent/25 hover:border-cyan-accent/60 text-cyan-accent transition-all text-xs font-mono flex items-center gap-1.5 font-bold shadow-[0_0_15px_rgba(0,240,255,0.15)]"
                    title="Live Demo"
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                    <span>Live Link</span>
                  </a>
                )}
              </div>
            </div>

            {/* Title & Description */}
            <div>
              <h3 className="text-xl md:text-2xl font-extrabold font-mono tracking-tight text-white mb-3 group-hover:text-cyan-accent transition-colors">
                {project.title}
              </h3>

              <div className="p-4 rounded-xl bg-black/40 border border-white/5 text-zinc-300 font-light text-xs md:text-sm leading-relaxed">
                {project.description}
              </div>
            </div>

            {/* Key Features & Architecture Contributions */}
            <div>
              <div className="flex items-center gap-2 mb-3">
                <Layers className="w-3.5 h-3.5 text-cyan-accent" />
                <span className="text-[11px] uppercase tracking-wider font-mono text-zinc-400 font-semibold">
                  Key Features & Contribution Ledger:
                </span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {project.features.map((feat, fIdx) => (
                  <div
                    key={fIdx}
                    className="flex items-start gap-2.5 p-3 rounded-lg bg-white/[0.02] border border-white/5 hover:border-white/10 transition-colors"
                  >
                    <CheckCircle2 className="w-4 h-4 text-cyan-accent shrink-0 mt-0.5" />
                    <span className="text-xs font-mono text-zinc-200 leading-snug">{feat}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Footer: Tags & Telemetry */}
          <div className="px-6 pb-6 md:px-8 md:pb-8 pt-0">
            <div className="flex flex-wrap gap-2 mb-4">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-[10px] md:text-xs font-mono px-3 py-1 rounded-md bg-black/50 border border-white/10 text-zinc-300 hover:border-cyan-accent/30 transition-colors"
                >
                  {tag}
                </span>
              ))}
            </div>

            <div className="border-t border-white/10 pt-3.5 flex items-center justify-between text-[11px] md:text-xs font-mono text-zinc-400 flex-wrap gap-2">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-zinc-500 font-medium">SYSTEM_STATUS:</span>
                <span className="text-emerald-400 font-semibold">ONLINE</span>
              </div>
              <span className="text-cyan-accent/90 font-medium truncate">
                {project.metrics}
              </span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

