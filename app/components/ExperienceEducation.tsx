"use client";

import React from "react";
import { Briefcase, GraduationCap, Award, Users, CheckCircle, Calendar, FileText } from "lucide-react";

export default function ExperienceEducation() {
  return (
    <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-8">
      {/* Experience Column (7 Cols) */}
      <div className="lg:col-span-7 flex flex-col gap-6">
        <div className="flex items-center gap-2 mb-2">
          <Briefcase className="w-5 h-5 text-purple-accent" />
          <h4 className="text-lg font-bold font-mono text-white uppercase tracking-wider">
            Professional Experience & Projects
          </h4>
        </div>

        <div className="flex flex-col gap-6 relative pl-4 border-l border-zinc-800">
          {/* Card 1: Ilmify Tech Agency */}
          <div className="relative group">
            {/* Timeline node */}
            <div className="absolute -left-[21px] top-1.5 w-3 h-3 rounded-full bg-purple-accent ring-4 ring-black/40 group-hover:bg-cyan-accent transition-colors" />

            <div className="rounded-2xl glass-panel p-6 border border-white/5 hover:border-purple-accent/20 transition-all duration-300">
              <div className="flex flex-wrap items-start justify-between gap-2 mb-3">
                <div>
                  <h5 className="text-base font-bold font-mono text-white">Frontend Developer</h5>
                  <span className="text-xs text-zinc-400 font-mono">Ilmify Tech Agency</span>
                </div>
                <span className="text-[10px] font-mono px-2.5 py-1 rounded bg-purple-accent/15 border border-purple-accent/30 text-purple-accent font-semibold flex items-center gap-1.5">
                  <Calendar className="w-3 h-3" /> Dec 2025 - Present
                </span>
              </div>
              <ul className="text-xs text-zinc-400 font-mono space-y-2 leading-relaxed">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-3.5 h-3.5 text-cyan-accent/80 shrink-0 mt-0.5" />
                  <span>Designing modern responsive user-facing architectures, layout layouts, and state management layers.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-3.5 h-3.5 text-cyan-accent/80 shrink-0 mt-0.5" />
                  <span>Collaborating on interactive animated assets, ensuring seamless rendering flows with high visual fidelity.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-3.5 h-3.5 text-cyan-accent/80 shrink-0 mt-0.5" />
                  <span>Refactoring component trees to improve modularity, loading times, and runtime performance.</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Card 2: Programming Hero Team Leader */}
          <div className="relative group">
            {/* Timeline node */}
            <div className="absolute -left-[21px] top-1.5 w-3 h-3 rounded-full bg-purple-accent ring-4 ring-black/40 group-hover:bg-cyan-accent transition-colors" />

            {/* Glowing active highlight */}
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-accent/[0.01] to-purple-accent/[0.01] opacity-0 group-hover:opacity-100 rounded-2xl pointer-events-none transition-opacity" />

            <div className="rounded-2xl glass-panel p-6 border border-white/5 hover:border-cyan-accent/20 transition-all duration-300 relative overflow-hidden">
              {/* Highlight ribbon / tag */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-cyan-accent/10 to-transparent blur-xl pointer-events-none" />

              <div className="flex flex-wrap items-start justify-between gap-2 mb-3">
                <div>
                  <h5 className="text-base font-bold font-mono text-white flex items-center gap-2">
                    Team Leader (EndGame Phase)
                  </h5>
                  <span className="text-xs text-zinc-400 font-mono">Programming Hero</span>
                </div>
                <span className="text-[10px] font-mono px-2.5 py-1 rounded bg-cyan-accent/15 border border-cyan-accent/30 text-cyan-accent font-semibold flex items-center gap-1.5">
                  <Award className="w-3 h-3" /> Top 3 Rank Team
                </span>
              </div>

              <div className="mb-4 flex flex-wrap gap-2">
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-zinc-900 border border-white/5 text-zinc-400 flex items-center gap-1">
                  <Users className="w-3 h-3 text-cyan-accent" /> 6 Team Members Led
                </span>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-zinc-900 border border-white/5 text-zinc-400">
                  Agile Workflow & Sprints
                </span>
              </div>

              <ul className="text-xs text-zinc-400 font-mono space-y-2 leading-relaxed">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-3.5 h-3.5 text-cyan-accent/80 shrink-0 mt-0.5" />
                  <span>Led a team of 6 developers in designing and delivering full-stack solutions during the intensive EndGame phase.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-3.5 h-3.5 text-cyan-accent/80 shrink-0 mt-0.5" />
                  <span className="text-white font-semibold">Ranked Top 3 Team out of 40+ participating teams, demonstrating exceptional logic architecture and collaboration.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-3.5 h-3.5 text-cyan-accent/80 shrink-0 mt-0.5" />
                  <span>Awarded formal Certificate of Appreciation and high-quality recommendation letter for leadership qualities.</span>
                </li>
              </ul>
              
              <div className="mt-4 pt-3.5 border-t border-white/5 flex gap-4">
                <a
                  href="#"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 text-[10px] font-mono text-cyan-accent hover:text-white transition-colors cursor-pointer"
                >
                  <Award className="w-3.5 h-3.5" /> View Certificate
                </a>
                <a
                  href="#"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 text-[10px] font-mono text-purple-accent hover:text-white transition-colors cursor-pointer"
                >
                  <FileText className="w-3.5 h-3.5" /> View Recommendation
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Education Column (5 Cols) */}
      <div className="lg:col-span-5 flex flex-col gap-6">
        <div className="flex items-center gap-2 mb-2">
          <GraduationCap className="w-5 h-5 text-cyan-accent" />
          <h4 className="text-lg font-bold font-mono text-white uppercase tracking-wider">
            Education & Certifications
          </h4>
        </div>

        <div className="flex flex-col gap-6 relative pl-4 border-l border-zinc-800">
          {/* Bootcamp L1 & L2 */}
          <div className="relative group">
            <div className="absolute -left-[21px] top-1.5 w-3 h-3 rounded-full bg-cyan-accent ring-4 ring-black/40 group-hover:bg-purple-accent transition-colors" />

            <div className="rounded-2xl glass-panel p-5 border border-white/5 hover:border-cyan-accent/20 transition-all duration-300">
              <span className="text-[9px] uppercase tracking-wider font-mono text-cyan-accent font-semibold block mb-1">
                Professional Credentials
              </span>
              <h5 className="text-sm font-bold font-mono text-white">
                Web Development Bootcamp (L1 & L2)
              </h5>
              <p className="text-xs text-zinc-400 font-mono mt-1">Programming Hero</p>
              
              <div className="mt-3 pt-3 border-t border-white/5 font-mono text-[10px] text-zinc-500 flex flex-col gap-2">
                <div className="flex items-center gap-1.5 text-zinc-400">
                  <Award className="w-3.5 h-3.5 text-yellow-500 shrink-0" />
                  <span>Completed with high recommendation & Certificate</span>
                </div>
                
                <div className="flex gap-4 mt-1">
                  <a
                    href="#"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 text-[9px] text-cyan-accent hover:text-white transition-colors cursor-pointer"
                  >
                    <Award className="w-3 h-3" /> Certificate Link
                  </a>
                  <a
                    href="#"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 text-[9px] text-purple-accent hover:text-white transition-colors cursor-pointer"
                  >
                    <FileText className="w-3 h-3" /> Recommendation Link
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Academic Education */}
          <div className="relative group">
            <div className="absolute -left-[21px] top-1.5 w-3 h-3 rounded-full bg-zinc-700 ring-4 ring-black/40 transition-colors" />

            <div className="rounded-2xl glass-panel p-5 border border-white/5 text-zinc-500 font-mono">
              <span className="text-[9px] uppercase tracking-wider block mb-1">
                General Education (Background)
              </span>
              <h5 className="text-sm font-bold text-zinc-400">
                B.S.S. in Economics (3rd Year)
              </h5>
              <p className="text-xs text-zinc-500 mt-1">National University</p>
              <div className="mt-2 text-[9px] flex items-center gap-1">
                <Calendar className="w-3 h-3" /> 2023 - Present
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
