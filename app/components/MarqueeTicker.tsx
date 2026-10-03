"use client";

import React from "react";

const tickerItems = [
  "Frontend Engineering",
  "React 19 & Next.js 16",
  "Full Stack Architecture",
  "Node.js & Express",
  "REST APIs & WebSockets",
  "PostgreSQL & MongoDB",
  "Full-Stack Web Development",
  "Prisma ORM & Redis",
  "Tailwind CSS & GSAP",
  "Agile Team Leadership",
];

export default function MarqueeTicker() {
  return (
    <div className="w-full overflow-hidden py-6 border-y border-slate-200/80 bg-slate-900 text-white select-none">
      {/* Track Left */}
      <div className="ticker-track-left flex items-center gap-8 text-sm md:text-base font-semibold uppercase tracking-widest">
        {[...tickerItems, ...tickerItems, ...tickerItems].map((item, idx) => (
          <div key={idx} className="flex items-center gap-6 shrink-0">
            <span className="text-[#fb3602] text-xl">✦</span>
            <span className="hover:text-[#fb3602] transition-colors">{item}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
