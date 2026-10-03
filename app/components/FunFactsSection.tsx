"use client";

import { Award, Users, CheckCircle2, Zap } from "lucide-react";

export default function FunFactsSection() {
  return (
    <div className="w-full">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        {/* Left Column (4 Cols) */}
        <div className="lg:col-span-4 flex flex-col gap-6">
          {/* Fact 1 */}
          <div className="box-border-gradiant p-6 bg-white flex flex-col gap-4">
            <div className="w-14 h-14 rounded-2xl bg-[#fff2ee] flex items-center justify-center icon-box-bg-circle">
              <Zap className="w-7 h-7 text-[#fb3602]" />
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-slate-900 tracking-tight flex items-baseline gap-1">
                <span>250</span>
                <span className="text-[#fb3602]">+</span>
                <span className="text-sm font-semibold text-slate-500 ml-1">Git Commits & Sprints</span>
              </h3>
              <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                Consistently architecting, testing, and shipping modular full-stack solutions across agile development cycles.
              </p>
            </div>
          </div>

          {/* Fact 2 */}
          <div className="box-border-gradiant p-6 bg-white flex flex-col gap-4">
            <div className="w-14 h-14 rounded-2xl bg-[#fff2ee] flex items-center justify-center icon-box-bg-circle">
              <Award className="w-7 h-7 text-[#fb3602]" />
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-slate-900 tracking-tight flex items-baseline gap-1">
                <span>Top 3</span>
                <span className="text-[#fb3602]">Rank</span>
                <span className="text-sm font-semibold text-slate-500 ml-1">Team Leader</span>
              </h3>
              <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                Led 6 developers to Top 3 ranking out of 40+ participating teams during the intensive Programming Hero EndGame phase.
              </p>
            </div>
          </div>
        </div>

        {/* Center Column: Core Highlights & Recognition Badge (4 Cols) */}
        <div className="lg:col-span-4 flex justify-center">
          <div className="relative w-full max-w-[340px] p-8 rounded-3xl overflow-hidden border-2 border-slate-200/90 shadow-xl bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 text-white flex flex-col justify-between gap-6 min-h-[360px] group">
            <div className="absolute top-0 right-0 w-36 h-36 bg-[#fb3602]/20 rounded-full blur-2xl pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-orange-500/10 rounded-full blur-xl pointer-events-none" />

            <div className="relative z-10 flex items-center justify-between">
              <span className="text-[11px] font-mono font-semibold tracking-widest text-[#fb3602] uppercase">
                Core Highlights
              </span>
              <div className="w-8 h-8 rounded-xl bg-[#fb3602] text-white flex items-center justify-center font-semibold text-xs shadow-md">
                ★
              </div>
            </div>

            <div className="relative z-10 text-center py-4">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 mb-4 shadow-inner">
                <Award className="w-8 h-8 text-[#fb3602]" />
              </div>
              <h4 className="text-2xl font-semibold text-white tracking-tight">
                Top 3 Ranked
              </h4>
              <p className="text-xs text-slate-300 font-medium mt-1">
                Team Leader • Programming Hero EndGame
              </p>
            </div>

            <div className="relative z-10 pt-4 border-t border-slate-800 flex items-center justify-between text-xs text-slate-300">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span className="font-semibold text-white">Frontend Dev</span>
              </div>
              <span className="text-slate-400">@ Ilmify Tech Agency</span>
            </div>
          </div>
        </div>

        {/* Right Column (4 Cols) */}
        <div className="lg:col-span-4 flex flex-col gap-6">
          {/* Fact 3 */}
          <div className="box-border-gradiant p-6 bg-white flex flex-col gap-4">
            <div className="w-14 h-14 rounded-2xl bg-[#fff2ee] flex items-center justify-center icon-box-bg-circle">
              <CheckCircle2 className="w-7 h-7 text-[#fb3602]" />
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-slate-900 tracking-tight flex items-baseline gap-1">
                <span>100</span>
                <span className="text-[#fb3602]">%</span>
                <span className="text-sm font-semibold text-slate-500 ml-1">On-Time Execution</span>
              </h3>
              <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                Clean software architectures, documented API route handlers, and robust test pipelines delivered reliably.
              </p>
            </div>
          </div>

          {/* Fact 4 */}
          <div className="box-border-gradiant p-6 bg-white flex flex-col gap-4">
            <div className="w-14 h-14 rounded-2xl bg-[#fff2ee] flex items-center justify-center icon-box-bg-circle">
              <Users className="w-7 h-7 text-[#fb3602]" />
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-slate-900 tracking-tight flex items-baseline gap-1">
                <span>25</span>
                <span className="text-[#fb3602]">+</span>
                <span className="text-sm font-semibold text-slate-500 ml-1">Technologies Mastered</span>
              </h3>
              <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                Full-stack proficiency across Next.js, Node.js, PostgreSQL, MongoDB, Prisma, Docker, and WebSocket environments.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
