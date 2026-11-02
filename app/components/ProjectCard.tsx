"use client";

import React from "react";
import { ExternalLink, Code, Server, Database, CheckCircle2, ArrowRight, FileText } from "lucide-react";
import { Github } from "./Icons";

interface ProjectData {
  title: string;
  category: string;
  tagline: string;
  description: string;
  tags: string[];
  features: string[];
  metrics: string;
  ClientSideRepo?: string;
  ServerRepo?: string;
  LiveLink?: string;
  RecommendationLink?: string;
  bgGradient: string;
  statusBadge?: string;
}

const projects: ProjectData[] = [
  {
    title: "MentorLink - Education Platform",
    category: "Full Stack • 1-on-1 Tutoring Platform",
    tagline: "Premium 1-on-1 tutoring platform connecting passionate learners with expert mentors",
    description:
      "A premium 1-on-1 tutoring platform connecting passionate learners with expert mentors. Features dynamic schedule booking, dedicated dual-role dashboards for students and administrators, full platform governance, and automated payment workflows via Stripe.",
    tags: [
      "Next.js",
      "PostgreSQL",
      "Prisma",
      "Node.js",
      "Express.js",
      "Stripe",
      "Leaflet",
      "GSAP",
      "Shadcn UI",
      "JWT",
      "Bcrypt",
    ],
    features: [
      "Student Booking & Dashboard: Students can choose and book expert mentors with specific schedules and manage active bookings directly from their dashboard",
      "Admin Control Hub: Platform-wide monitoring allowing admins to create and manage platform plans, audit students and mentors, and take role-specific actions",
      "Stripe Payment Processing: Secure end-to-end payment workflow for tutoring session booking and platform plans",
      "Interactive Mentor Discovery: Location-aware mentor mapping powered by Leaflet, animated with GSAP, and styled with Shadcn UI components",
    ],
    metrics: "Dual Role Dashboards (Student & Admin) • Stripe & PostgreSQL",
    ClientSideRepo: "https://github.com/rubel6610/mentor-link-frontend",
    ServerRepo: "https://github.com/rubel6610/mentor-link",
    LiveLink: "https://mentor-link-frontend-gamma.vercel.app/",
    bgGradient: "from-amber-600/10 via-orange-600/5 to-transparent",
  },
  {
    title: "Slimza - Wellness E-Commerce Platform",
    category: "Full Stack • E-Commerce & Natural Health",
    tagline: "Modern UK natural wellness & nutrition e-commerce platform with custom bundle builder",
    description:
      "A high-performance UK-based natural wellness e-commerce platform engineered for organic superfoods, herbal teas, and nutritional supplements. Features an interactive 3-step 'Build Your Own Bundle' system with dynamic tiered discounts up to 25%, multi-faceted product filtering with dual-thumb price sliders, promotional coupon countdowns, and an animated shopping basket drawer. Advanced merchant dashboard and backend APIs are currently in active development.",
    tags: [
      "Next.js 15",
      "React 19",
      "TypeScript",
      "Tailwind CSS",
      "Bundle Builder",
      "Cart & Checkout",
      "Node.js",
      "Express.js",
      "REST API",
      "UI/UX Design",
    ],
    features: [
      "Custom 'Build Your Own Bundle': Interactive 3-step bundle customizer allowing customers to mix & match health products with automated volume savings (up to 25% off)",
      "Smart Catalog & Price Filtering: Multi-attribute catalog filtering featuring dual-thumb price range sliders, category checklists, brand filters, and instant sorting",
      "Conversion-Focused Shopping UX: Live promotional coupon countdown banner (e.g., SLIMZA09), star ratings, instant 'Add to Cart' feedback, and sliding basket drawer",
      "Dashboard & Backend Architecture (In Active Dev): Scalable backend microservices and admin management hub currently being developed for order fulfillment, inventory tracking, and Stripe checkout",
    ],
    metrics: "In Active Development • UK Wellness E-Commerce",
    LiveLink: "https://slimza.vercel.app/",
    statusBadge: "In Active Development",
    bgGradient: "from-emerald-700/10 via-green-600/5 to-transparent",
  },
  {
    title: "AGE-WEL-RI",
    category: "Full Stack • Senior Care Platform",
    tagline: "USA-based senior citizens support platform for safety management & agreements",
    description:
      "A comprehensive USA-based full-stack platform where senior citizens living alone receive dedicated support for safety management. Clients create safety agreements, schedule visits, and manage subscription billing, while admins manage compliance, client portals, and automated safety reports.",
    tags: ["Next.js 15", "TypeScript", "Node.js", "Express.js", "MongoDB", "Prisma", "JWT", "Tailwind CSS"],
    features: [
      "Client Agreement Onboarding: Conditional multi-step agreement signup & billing workflow",
      "Interactive Client Dashboard: Real-time safety visit scheduling & active plan management",
      "Admin Control Hub: Platform-wide monitoring, subscriber management, and agreement auditing",
      "Automated PDF Reports: Admin generation for safety visit assessments with client uploads",
    ],
    metrics: "Dual Role Dashboards (Client & Admin) • USA Senior Care",
    ClientSideRepo: "https://github.com/rubel6610/agewellri",
    ServerRepo: "https://github.com/rubel6610/agewellri-backend",
    LiveLink: "https://age-well-ri.vercel.app/",
    bgGradient: "from-blue-600/10 via-indigo-600/5 to-transparent",
  },
  {
    title: "RideX - Smart Ride Sharing",
    category: "Full Stack • Real-Time AI Transport",
    tagline: "AI-powered real-time ride-sharing platform with tracking, chat, and role dashboards",
    description:
      "An intelligent, real-time ride-sharing application equipped with live GPS tracking, KYC face verification, role-based dashboards (users, riders, admins), and instant live chat channels using WebSockets. Built with a team of 6 developers during the EndGame sprint.",
    tags: ["Next.js 15", "Socket.IO", "Leaflet Maps", "Node.js", "Express.js", "MongoDB", "JWT", "GSAP"],
    features: [
      "Led Team of 6: Orchestrated sprint backlogs, code merges, and architecture design",
      "Real-Time Socket.IO: Live ride dispatching, route updates, and in-app passenger-driver chat",
      "Role-Based Dashboards: Dedicated interfaces for booking rides, tracking earnings, and admin controls",
      "AI Smart Features: AI-assisted route suggestions, blog generation, and automated weather forecasts",
    ],
    metrics: "Team Lead (6 Members) • Real-Time Socket.IO Tracking",
    ClientSideRepo: "https://github.com/rubel6610/RideX-Frontend",
    ServerRepo: "https://github.com/rubel6610/ridex-backend",
    LiveLink: "https://ridex-ride-sharing.vercel.app/",
    RecommendationLink: "/Recommendation letter.png",
    bgGradient: "from-emerald-600/10 via-teal-600/5 to-transparent",
  },
];

export default function ProjectCard() {
  return (
    <div className="w-full flex flex-col gap-10">
      {projects.map((project, idx) => (
        <div
          key={idx}
          className="box-border-gradiant p-5 sm:p-8 md:p-10 bg-white flex flex-col justify-between overflow-hidden group hover:shadow-2xl transition-all"
        >
          {/* Top category & Action Header */}
          <div className="flex items-center justify-between gap-4 flex-wrap pb-6 border-b border-slate-100">
            <div className="flex items-center gap-3">
              <span className="w-9 h-9 rounded-xl bg-[#fff2ee] text-[#fb3602] flex items-center justify-center font-extrabold text-sm">
                0{idx + 1}
              </span>
              <div>
                <div className="flex items-center gap-2 flex-wrap">
                  <span className="text-xs font-semibold uppercase tracking-wider text-[#fb3602]">
                    {project.category}
                  </span>
                  {project.statusBadge && (
                    <span className="px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200 text-[10px] font-bold uppercase tracking-wider flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                      {project.statusBadge}
                    </span>
                  )}
                </div>
                <h3 className="text-2xl md:text-3xl font-semibold text-slate-900 tracking-tight">
                  {project.title}
                </h3>
              </div>
            </div>

            {/* Action Links */}
            <div className="flex items-center gap-2.5 flex-wrap">
              {project.statusBadge && !project.ClientSideRepo && (
                <div className="px-3.5 py-2 rounded-xl bg-amber-50 text-amber-800 border border-amber-200/80 text-xs font-semibold flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse" />
                  <span>Backend & Dashboard In Progress</span>
                </div>
              )}
              {project.RecommendationLink && (
                <a
                  href={project.RecommendationLink}
                  target="_blank"
                  rel="noreferrer"
                  className="px-3.5 py-2 rounded-xl bg-[#fff2ee] hover:bg-[#ffe5dc] text-[#fb3602] border border-[#ffded6] text-xs font-semibold transition-all flex items-center gap-1.5"
                >
                  <FileText className="w-4 h-4" />
                  <span>Recommendation Letter</span>
                </a>
              )}
              {project.ClientSideRepo && (
                <a
                  href={project.ClientSideRepo}
                  target="_blank"
                  rel="noreferrer"
                  className="px-3.5 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-semibold transition-all flex items-center gap-1.5"
                >
                  <Github className="w-4 h-4 text-[#fb3602]" />
                  <span>Client Code</span>
                </a>
              )}
              {project.ServerRepo && (
                <a
                  href={project.ServerRepo}
                  target="_blank"
                  rel="noreferrer"
                  className="px-3.5 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-semibold transition-all flex items-center gap-1.5"
                >
                  <Server className="w-4 h-4 text-[#fb3602]" />
                  <span>Server Code</span>
                </a>
              )}
              {project.LiveLink && (
                <a
                  href={project.LiveLink}
                  target="_blank"
                  rel="noreferrer"
                  className="px-4 py-2 rounded-xl bg-[#fb3602] hover:bg-[#e02f00] text-white text-xs font-semibold transition-all flex items-center gap-1.5 shadow-sm"
                >
                  <ExternalLink className="w-4 h-4" />
                  <span>Live Project Demo</span>
                </a>
              )}
            </div>
          </div>

          {/* Body Content */}
          <div className="py-6 flex flex-col gap-6">
            <p className="text-sm md:text-base text-slate-700 leading-relaxed font-normal">
              {project.description}
            </p>

            {/* Architecture Ledger Features Grid */}
            <div>
              <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-500 mb-3 flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#fb3602]" />
                Key Architectural Features:
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {project.features.map((feat, fIdx) => (
                  <div
                    key={fIdx}
                    className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/80 flex items-start gap-2.5 text-xs text-slate-800 font-medium leading-relaxed"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#fb3602] shrink-0 mt-1.5" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Footer Tags & Status */}
          <div className="pt-6 border-t border-slate-100 flex items-center justify-between flex-wrap gap-4">
            <div className="flex flex-wrap gap-2">
              {project.tags.map((t, tIdx) => (
                <span
                  key={tIdx}
                  className="text-xs font-semibold px-3 py-1 rounded-md bg-slate-100 text-slate-700"
                >
                  {t}
                </span>
              ))}
            </div>

            <div className="text-xs font-bold text-slate-500 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>{project.metrics}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
