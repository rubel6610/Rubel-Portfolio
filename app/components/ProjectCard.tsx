"use client";

import { ExternalLink, Code, Server, Database } from "lucide-react";
import { Github } from "./Icons";

interface ProjectData {
  title: string;
  description: string;
  tags: string[];
  features: string[];
  metrics: string;
  github?: string;
  demo?: string;
  type: "Full Stack" | "Economics & Data" | "DevOps & Core";
}

const mockProjects: ProjectData[] = [
  {
    title: "EcoMetric Predictor (FinTech AI)",
    description: "An analytics application mapping macroeconomic indexes to portfolio investments. Built using economics mathematical formulas, regressions, and predictive AI models.",
    tags: ["Next.js 16", "TypeScript", "PostgreSQL", "Redis Cache", "Python/Pandas"],
    features: [
      "Simulated Linear regression engine for market forecasting",
      "Redis cached DB queries for index queries under 8ms",
      "Interactive data visualizations with Recharts"
    ],
    metrics: "Query latency: 8ms | DB size: 2.1GB",
    github: "#",
    demo: "#",
    type: "Economics & Data",
  },
  {
    title: "CollabSync Realtime Canvas",
    description: "A collaborative multi-user whiteboarding SaaS platform. Features real-time state syncing, room channels, and binary message packing over WebSocket connections.",
    tags: ["Node.js Server", "Fastify", "WebSockets (ws)", "React 19", "Tailwind CSS"],
    features: [
      "Custom cursor coordinate syncing under 15ms latency",
      "Rooms isolation and binary payload formatting",
      "Redis adapter for scaling WebSocket instances"
    ],
    metrics: "Active WS Channels: 42 | WebSocket latency: 12ms",
    github: "#",
    demo: "#",
    type: "Full Stack",
  },
  {
    title: "DevNode Gateway Router",
    description: "A developer-focused serverless edge gateway and reverse proxy. Handles routing rules, IP rate limiting, JWT token verification, and payload logging.",
    tags: ["TypeScript", "Express", "Docker Engine", "MongoDB", "Jest Testing"],
    features: [
      "Token bucket rate-limiting algorithms with Redis key expiry",
      "Structured log output to central logging hub",
      "Dockerized microservice deployment config with compose"
    ],
    metrics: "Throughput: 8500 req/sec | Error Rate: 0.01%",
    github: "#",
    demo: "#",
    type: "DevOps & Core",
  },
];

export default function ProjectCard() {
  return (
    <div className="projects-slider-container w-full overflow-hidden">
      <div className="projects-slider flex gap-8 py-6 w-[max-content]">
        {mockProjects.map((project, idx) => (
          <div
            key={idx}
            className="project-slide shrink-0 w-[300px] sm:w-[380px] md:w-[420px] group relative rounded-2xl glass-panel p-6 border border-black/10 dark:border-white/5 hover:border-cyan-accent/20 transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,240,255,0.04)] flex flex-col justify-between overflow-hidden"
            style={{ transformStyle: "preserve-3d" }}
          >
            {/* Card subtle lighting */}
            <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-cyan-accent/10 to-transparent blur-2xl group-hover:from-cyan-accent/20 transition-all pointer-events-none" />
            
            <div>
              {/* Header */}
              <div className="flex items-start justify-between mb-4">
                <span className="text-[10px] uppercase font-mono tracking-widest px-2.5 py-1 rounded bg-black/5 dark:bg-white/5 border border-black/5 dark:border-white/5 text-zinc-600 dark:text-zinc-400 font-medium flex items-center gap-1.5">
                  {project.type === "Full Stack" && <Server className="w-3 h-3 text-cyan-accent" />}
                  {project.type === "Economics & Data" && <Database className="w-3 h-3 text-purple-accent" />}
                  {project.type === "DevOps & Core" && <Code className="w-3 h-3 text-emerald-accent" />}
                  {project.type}
                </span>
                <div className="flex items-center gap-2">
                  <a
                    href={project.github}
                    className="p-1.5 rounded-lg bg-black/5 dark:bg-white/5 border border-black/5 dark:border-white/5 hover:bg-purple-accent/20 hover:border-purple-accent/40 text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-all"
                    title="Source Code"
                  >
                    <Github className="w-4 h-4" />
                  </a>
                  <a
                    href={project.demo}
                    className="p-1.5 rounded-lg bg-black/5 dark:bg-white/5 border border-black/5 dark:border-white/5 hover:bg-cyan-accent/20 hover:border-cyan-accent/40 text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-all"
                    title="Live Demo"
                  >
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold font-mono tracking-tight text-zinc-900 dark:text-white mb-2 group-hover:text-cyan-accent transition-colors">
                {project.title}
              </h3>

              {/* Description */}
              <p className="text-sm text-zinc-600 dark:text-zinc-400 font-light leading-6 mb-4">
                {project.description}
              </p>

              {/* Architecture Highlights */}
              <div className="mb-4">
                <span className="text-[10px] uppercase tracking-wider font-mono text-zinc-500 block mb-2 font-semibold">
                  Architecture Highlights:
                </span>
                <ul className="text-xs text-zinc-700 dark:text-zinc-300 font-mono space-y-1.5">
                  {project.features.map((feat, fIdx) => (
                    <li key={fIdx} className="flex items-center gap-2">
                      <span className="text-cyan-accent font-bold">&bull;</span>
                      {feat}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Tags & Telemetry Footer */}
            <div>
              <div className="flex flex-wrap gap-1.5 mb-4">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[10px] font-mono px-2 py-0.5 rounded bg-black/[0.03] dark:bg-black/40 border border-black/5 dark:border-white/5 text-zinc-600 dark:text-zinc-400"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <div className="border-t border-black/10 dark:border-white/5 pt-3 flex items-center justify-between text-[10px] font-mono text-zinc-500">
                <span>STATS:</span>
                <span className="text-emerald-accent/80 font-semibold">{project.metrics}</span>
              </div>
            </div>
          </div>
        ))}

        {/* The Placeholder Cards for the user to add future projects */}
        <div 
          className="project-slide shrink-0 w-[300px] sm:w-[380px] md:w-[420px] group relative rounded-2xl p-6 border border-dashed border-zinc-300 dark:border-zinc-800 hover:border-purple-accent/30 bg-purple-accent/[0.01] hover:bg-purple-accent/[0.02] transition-all duration-300 flex flex-col justify-between items-center text-center py-12 min-h-[300px]"
          style={{ transformStyle: "preserve-3d" }}
        >
          <div className="m-auto flex flex-col items-center gap-4">
            <div className="w-12 h-12 rounded-full border border-dashed border-zinc-300 dark:border-zinc-700 group-hover:border-purple-accent/40 flex items-center justify-center text-zinc-400 dark:text-zinc-600 group-hover:text-purple-accent/60 transition-colors">
              <Code className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-base font-bold font-mono text-zinc-700 dark:text-zinc-400 group-hover:text-zinc-900 dark:group-hover:text-zinc-200 transition-colors">
                [NEW_PROJECT_NODE]
              </h3>
              <p className="text-xs text-zinc-500 dark:text-zinc-600 group-hover:text-zinc-700 dark:group-hover:text-zinc-500 font-mono mt-1.5 max-w-[220px] mx-auto">
                Empty slot reserved for future deployments. Configured for automatic server bundle logs.
              </p>
            </div>
          </div>
          <div className="text-[10px] font-mono text-zinc-500 dark:text-zinc-600 uppercase tracking-widest border border-dashed border-zinc-300 dark:border-zinc-800 px-3 py-1 rounded bg-zinc-100 dark:bg-black/10 select-none">
            Awaiting Git Push
          </div>
        </div>
      </div>
    </div>
  );
}
