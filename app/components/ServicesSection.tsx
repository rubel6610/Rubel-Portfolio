"use client";

import React from "react";
import { Layout, Server, Database, TrendingUp, Cpu, Globe } from "lucide-react";

interface ServiceItem {
  id: string;
  icon: React.ReactNode;
  title: string;
  description: string;
  tags: string[];
}

const services: ServiceItem[] = [
  {
    id: "frontend",
    icon: <Layout className="w-8 h-8 text-[#fb3602]" />,
    title: "Frontend Engineering & Next.js",
    description:
      "Architecting responsive, low-latency client applications using React 19, Next.js 16, TypeScript, and modern animation engines like GSAP.",
    tags: ["React / Next.js", "TypeScript", "Tailwind CSS", "GSAP Animations"],
  },
  {
    id: "backend",
    icon: <Server className="w-8 h-8 text-[#fb3602]" />,
    title: "Backend & Systems API Design",
    description:
      "Developing scalable server backends, secure JWT/Bcrypt authentication, RESTful APIs, and real-time bidirectional Socket.IO channels.",
    tags: ["Node.js / Express", "RESTful APIs", "Socket.IO", "Auth & Security"],
  },
  {
    id: "database",
    icon: <Database className="w-8 h-8 text-[#fb3602]" />,
    title: "Database Architecture & Caching",
    description:
      "Designing relational & non-relational schemas, data normalization, Prisma ORM queries, PostgreSQL indexing, and Redis caching layers.",
    tags: ["PostgreSQL", "MongoDB", "Redis Cache", "Prisma ORM"],
  },
  {
    id: "architecture",
    icon: <TrendingUp className="w-8 h-8 text-[#fb3602]" />,
    title: "Full-Stack Architecture & Performance",
    description:
      "Engineering resilient end-to-end architectures, optimizing page loading speeds, server query response times, and state synchronization.",
    tags: ["Full-Stack Systems", "Performance Tuning", "REST & WebSockets", "Clean Architecture"],
  },
  {
    id: "devops",
    icon: <Cpu className="w-8 h-8 text-[#fb3602]" />,
    title: "DevOps & Cloud Deployments",
    description:
      "Containerizing applications with Docker, managing CI/CD automation pipelines, configuring reverse proxies, and deploying to Vercel/AWS.",
    tags: ["Docker", "GitHub Actions", "Nginx", "Vercel / AWS"],
  },
  {
    id: "leadership",
    icon: <Globe className="w-8 h-8 text-[#fb3602]" />,
    title: "Full-Stack Project Leadership",
    description:
      "Leading cross-functional developer teams through agile sprint planning, code reviews, architectural decisions, and on-time milestone delivery.",
    tags: ["Agile Sprints", "Code Reviews", "Team Mentorship", "EndGame Ranked"],
  },
];

export default function ServicesSection() {
  return (
    <div className="w-full">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((srv) => (
          <div
            key={srv.id}
            className="box-border-gradiant p-8 flex flex-col justify-between min-h-[360px] bg-white group hover:shadow-xl transition-all"
          >
            <div>
              {/* Icon Box with Weblance accent circle behind */}
              <div className="mb-6">
                <div className="w-16 h-16 rounded-2xl bg-slate-100 flex items-center justify-center icon-box-bg-circle group-hover:scale-105 transition-transform">
                  {srv.icon}
                </div>
              </div>

              <h3 className="text-xl font-semibold text-slate-900 mb-3 group-hover:text-[#fb3602] transition-colors leading-snug">
                {srv.title}
              </h3>

              <p className="text-sm text-slate-600 leading-relaxed mb-6 font-normal">
                {srv.description}
              </p>
            </div>

            <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
              <div className="flex flex-wrap gap-1.5">
                {srv.tags.slice(0, 2).map((t, idx) => (
                  <span
                    key={idx}
                    className="text-[11px] font-semibold px-2.5 py-1 rounded-md bg-slate-100 text-slate-600"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <a href="#contact" className="readmore-btn">
                <span>Learn More</span>
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* Weblance Section Footer Satisfy Banner */}
      <div className="mt-12 p-6 rounded-2xl bg-[#fff7f4] border border-[#ffded6] flex flex-wrap items-center justify-between gap-4 text-center sm:text-left">
        <div className="flex items-center gap-4 mx-auto sm:mx-0">
          <div className="w-12 h-12 rounded-full bg-[#fb3602] text-white flex items-center justify-center font-semibold text-lg shadow-sm">
            ★
          </div>
          <div>
            <h4 className="text-base font-semibold text-slate-900">
              Need a custom engineering solution?
            </h4>
            <p className="text-xs text-slate-600 m-0">
              Let&apos;s build an end-to-end production web application tailored for your business.
            </p>
          </div>
        </div>

        <a
          href="#contact"
          className="btn-default mx-auto sm:mx-0"
        >
          Discuss Your Project
        </a>
      </div>
    </div>
  );
}
