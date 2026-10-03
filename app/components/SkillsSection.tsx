"use client";

import React from "react";
import { Code, Database, Server, Cpu, Globe, Layers, Zap } from "lucide-react";

interface ToolItem {
  name: string;
  category: string;
  percentage: number;
  description: string;
  icon: React.ReactNode;
}

const toolkit: ToolItem[] = [
  {
    name: "React 19 & Next.js 16",
    category: "Frontend Framework",
    percentage: 95,
    description: "Server Components, App Router, SSR/SSG caching, and dynamic route rendering.",
    icon: <Code className="w-6 h-6 text-[#fb3602]" />,
  },
  {
    name: "TypeScript",
    category: "Core Language",
    percentage: 92,
    description: "Strict static typing, interface contracts, generics, and compile-time safety.",
    icon: <Zap className="w-6 h-6 text-[#fb3602]" />,
  },
  {
    name: "Node.js & Express",
    category: "Backend Engine",
    percentage: 90,
    description: "REST API endpoints, middleware pipelines, JWT auth, and async micro-services.",
    icon: <Server className="w-6 h-6 text-[#fb3602]" />,
  },
  {
    name: "PostgreSQL & Prisma",
    category: "Relational DB & ORM",
    percentage: 88,
    description: "ACID transactions, relational schemas, connection pooling, and Prisma type-safe queries.",
    icon: <Database className="w-6 h-6 text-[#fb3602]" />,
  },
  {
    name: "MongoDB & Mongoose",
    category: "NoSQL Database",
    percentage: 90,
    description: "Document storage, aggregation pipelines, indexed collections, and schema modeling.",
    icon: <Layers className="w-6 h-6 text-[#fb3602]" />,
  },
  {
    name: "Tailwind CSS & GSAP",
    category: "Styling & Motion",
    percentage: 95,
    description: "Utility design systems, responsive layouts, ScrollTrigger, and timeline animations.",
    icon: <Cpu className="w-6 h-6 text-[#fb3602]" />,
  },
  {
    name: "Socket.IO & Realtime",
    category: "WebSockets",
    percentage: 86,
    description: "Bidirectional live event streaming, real-time messaging, and interactive tracking.",
    icon: <Globe className="w-6 h-6 text-[#fb3602]" />,
  },
  {
    name: "Docker & Linux DevOps",
    category: "Deployment & CI/CD",
    percentage: 85,
    description: "Containerized environments, GitHub Actions, Nginx reverse proxy, and cloud hostings.",
    icon: <Cpu className="w-6 h-6 text-[#fb3602]" />,
  },
];

export default function SkillsSection() {
  return (
    <div className="w-full">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {toolkit.map((tool, idx) => (
          <div
            key={idx}
            className="box-border-gradiant p-6 bg-white flex flex-col justify-between group hover:shadow-lg transition-all"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 rounded-xl bg-slate-100 flex items-center justify-center icon-box-bg-circle group-hover:scale-105 transition-transform">
                  {tool.icon}
                </div>
                <div className="text-right">
                  <span className="text-xl font-semibold text-slate-900 tracking-tight">
                    {tool.percentage}%
                  </span>
                  <div className="w-16 h-1.5 bg-slate-100 rounded-full mt-1 overflow-hidden">
                    <div
                      className="h-full bg-[#fb3602] rounded-full transition-all duration-1000"
                      style={{ width: `${tool.percentage}%` }}
                    />
                  </div>
                </div>
              </div>

              <span className="text-[11px] font-semibold uppercase tracking-wider text-[#fb3602] block mb-1">
                {tool.category}
              </span>
              <h4 className="text-lg font-semibold text-slate-900 mb-2 group-hover:text-[#fb3602] transition-colors">
                {tool.name}
              </h4>
              <p className="text-xs text-slate-600 leading-relaxed font-normal">
                {tool.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Toolkit Footer List */}
      <div className="mt-10 p-6 rounded-2xl bg-white border border-slate-200 flex flex-wrap items-center justify-between gap-4">
        <div className="flex flex-wrap gap-2.5">
          {["Full-Stack Architecture", "Reactive UI/UX", "API Gateways", "System Scalability", "Full-Stack Development"].map((chip, idx) => (
            <span
              key={idx}
              className="text-xs font-semibold px-3 py-1.5 rounded-full bg-slate-100 text-slate-700 flex items-center gap-1.5"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#fb3602]" />
              {chip}
            </span>
          ))}
        </div>

        <a href="#contact" className="readmore-btn !text-sm">
          <span>Let&apos;s Build Together</span>
        </a>
      </div>
    </div>
  );
}
