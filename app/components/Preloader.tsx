"use client";

import React, { useState, useEffect } from "react";

export default function Preloader({ onComplete }: { onComplete?: () => void }) {
  const [progress, setProgress] = useState(0);
  const [isExiting, setIsExiting] = useState(false);
  const [statusText, setStatusText] = useState("Initializing Core Modules...");

  useEffect(() => {
    const statusMessages = [
      { threshold: 15, text: "Initializing Core Modules..." },
      { threshold: 40, text: "Configuring Full-Stack Architecture..." },
      { threshold: 70, text: "Compiling React & Next.js Engine..." },
      { threshold: 90, text: "Optimizing Visual Assets & State..." },
      { threshold: 100, text: "Welcome to Rubel's Portfolio" },
    ];

    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            setIsExiting(true);
            setTimeout(() => {
              if (onComplete) onComplete();
            }, 600);
          }, 300);
          return 100;
        }

        const increment = Math.floor(Math.random() * 8) + 4;
        const next = Math.min(prev + increment, 100);

        const currentStatus = statusMessages.find((s) => next <= s.threshold);
        if (currentStatus) {
          setStatusText(currentStatus.text);
        }

        return next;
      });
    }, 45);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <div
      className={`fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-slate-950 text-white transition-all duration-700 ease-out select-none ${
        isExiting ? "opacity-0 -translate-y-8 pointer-events-none" : "opacity-100 translate-y-0"
      }`}
    >
      {/* Background Cyber Ambient Lights */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:32px_32px] opacity-20 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#fb3602]/15 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 flex flex-col items-center max-w-sm w-full px-6">
        {/* Glowing Logo Badge */}
        <div className="relative mb-8">
          <div className="absolute inset-0 bg-[#fb3602] rounded-2xl blur-xl opacity-60 animate-pulse" />
          <div className="relative w-16 h-16 rounded-2xl bg-gradient-to-br from-slate-900 to-slate-950 border border-slate-700/80 flex items-center justify-center shadow-2xl">
            <span className="text-2xl font-bold text-white tracking-tight font-sans">
              R<span className="text-[#fb3602]">.</span>
            </span>
          </div>
        </div>

        {/* Brand Name & Role */}
        <h2 className="text-xl font-semibold tracking-wider text-white uppercase text-center mb-1">
          RUBEL HOSEN
        </h2>
        <span className="text-xs font-mono uppercase tracking-widest text-[#fb3602] mb-8">
          Full Stack Software Developer
        </span>

        {/* Progress Bar Container */}
        <div className="w-full bg-slate-800/80 rounded-full h-2 p-0.5 border border-slate-700/60 overflow-hidden mb-4 shadow-inner">
          <div
            className="h-full bg-gradient-to-r from-[#fb3602] via-orange-500 to-[#fb3602] rounded-full transition-all duration-75 ease-out shadow-[0_0_12px_#fb3602]"
            style={{ width: `${progress}%` }}
          />
        </div>

        {/* Status Metrics & Counter */}
        <div className="w-full flex items-center justify-between text-xs font-mono">
          <span className="text-slate-400 truncate max-w-[240px]">
            {statusText}
          </span>
          <span className="text-white font-semibold text-sm">
            {progress}%
          </span>
        </div>
      </div>
    </div>
  );
}
