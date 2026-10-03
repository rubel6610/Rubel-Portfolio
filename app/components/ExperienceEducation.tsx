"use client";

import React, { useState } from "react";
import { Briefcase, GraduationCap, Award, CheckCircle2, Calendar, FileText, ArrowUpRight } from "lucide-react";

export default function ExperienceEducation() {
  const [activeTab, setActiveTab] = useState<"experience" | "education">("experience");

  return (
    <div className="w-full">
      {/* Tab Navigation */}
      <div className="flex justify-center mb-10 px-2">
        <div className="flex flex-col sm:flex-row p-1.5 rounded-2xl bg-slate-100 border border-slate-200 gap-2 w-full sm:w-auto">
          <button
            onClick={() => setActiveTab("experience")}
            className={`px-4 sm:px-6 py-2.5 sm:py-3 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer flex items-center justify-center gap-2 ${
              activeTab === "experience"
                ? "bg-[#fb3602] text-white shadow-md"
                : "text-slate-600 hover:text-slate-900"
            }`}
          >
            <Briefcase className="w-4 h-4" />
            My Work Experience
          </button>
          <button
            onClick={() => setActiveTab("education")}
            className={`px-4 sm:px-6 py-2.5 sm:py-3 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer flex items-center justify-center gap-2 ${
              activeTab === "education"
                ? "bg-[#fb3602] text-white shadow-md"
                : "text-slate-600 hover:text-slate-900"
            }`}
          >
            <GraduationCap className="w-4 h-4" />
            My Education &amp; Credentials
          </button>
        </div>
      </div>

      {/* Tab 1: Experience Items */}
      {activeTab === "experience" && (
        <div className="flex flex-col gap-6">
          {/* Card 1: Ilmify Tech Agency */}
          <div className="box-border-gradiant p-8 bg-white flex flex-col lg:flex-row justify-between gap-6 hover:shadow-xl transition-all">
            <div className="lg:w-1/3 flex items-start gap-4">
              <div className="w-14 h-14 rounded-2xl bg-[#fff2ee] flex items-center justify-center icon-box-bg-circle shrink-0">
                <Briefcase className="w-6 h-6 text-[#fb3602]" />
              </div>
              <div>
                <h4 className="text-xl font-semibold text-slate-900">Ilmify Tech Agency</h4>
                <div className="inline-flex items-center gap-1 text-xs font-semibold text-[#fb3602] mt-1 bg-[#fff2ee] px-2.5 py-0.5 rounded-md">
                  <Calendar className="w-3 h-3" /> [ Dec 2025 - Present ]
                </div>
              </div>
            </div>

            <div className="lg:w-2/3 lg:pl-6 lg:border-l lg:border-slate-100 flex flex-col justify-between">
              <div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2">
                  Frontend Developer
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed font-normal mb-4">
                  Engineering modern, responsive user interfaces, layout architectures, and reactive client state management. Collaborating on interactive components, ensuring seamless rendering flows with high visual fidelity, and optimizing component trees for performance.
                </p>
              </div>

              <div className="flex flex-wrap gap-2 pt-2">
                <span className="text-xs font-semibold px-2.5 py-1 rounded bg-slate-100 text-slate-700">Next.js</span>
                <span className="text-xs font-semibold px-2.5 py-1 rounded bg-slate-100 text-slate-700">React</span>
                <span className="text-xs font-semibold px-2.5 py-1 rounded bg-slate-100 text-slate-700">TypeScript</span>
                <span className="text-xs font-semibold px-2.5 py-1 rounded bg-slate-100 text-slate-700">Tailwind CSS</span>
              </div>
            </div>
          </div>

          {/* Card 2: Programming Hero EndGame Team Leader */}
          <div className="box-border-gradiant p-8 bg-white flex flex-col lg:flex-row justify-between gap-6 hover:shadow-xl transition-all">
            <div className="lg:w-1/3 flex items-start gap-4">
              <div className="w-14 h-14 rounded-2xl bg-[#fff2ee] flex items-center justify-center icon-box-bg-circle shrink-0">
                <Award className="w-6 h-6 text-[#fb3602]" />
              </div>
              <div>
                <h4 className="text-xl font-semibold text-slate-900">Programming Hero</h4>
                <div className="inline-flex items-center gap-1 text-xs font-semibold text-[#fb3602] mt-1 bg-[#fff2ee] px-2.5 py-0.5 rounded-md">
                  <Calendar className="w-3 h-3" /> [ 2025 • EndGame Phase ]
                </div>
              </div>
            </div>

            <div className="lg:w-2/3 lg:pl-6 lg:border-l lg:border-slate-100 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between gap-2 flex-wrap mb-2">
                  <h3 className="text-lg font-semibold text-slate-900">
                    Team Leader (Ranked Top 3 Team out of 40+ Teams)
                  </h3>
                  <span className="text-xs font-semibold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-md border border-emerald-200">
                    Award & Recommendation
                  </span>
                </div>
                <p className="text-sm text-slate-600 leading-relaxed font-normal mb-4">
                  Led a team of 6 developers in designing and delivering full-stack solutions during the intensive EndGame phase. Oversaw agile sprint planning, code review merges, and final deployment. Awarded formal Recommendation Letter &amp; Recognition (issued to <strong>Md Rubel Hosen</strong>).
                </p>
              </div>

              <div className="flex items-center justify-between flex-wrap gap-3 pt-2">
                <div className="flex flex-wrap gap-2">
                  <span className="text-xs font-semibold px-2.5 py-1 rounded bg-slate-100 text-slate-700">Team Leadership</span>
                  <span className="text-xs font-semibold px-2.5 py-1 rounded bg-slate-100 text-slate-700">Agile Workflows</span>
                  <span className="text-xs font-semibold px-2.5 py-1 rounded bg-slate-100 text-slate-700">Full Stack System</span>
                </div>

                <a
                  href="/Recommendation letter.png"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#fff2ee] hover:bg-[#ffe5dc] text-xs font-semibold text-[#fb3602] transition-colors border border-[#ffded6]"
                >
                  <FileText className="w-3.5 h-3.5" />
                  View Recommendation Letter
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Tab 2: Education Items */}
      {activeTab === "education" && (
        <div className="flex flex-col gap-6">
          {/* Card 1: Programming Hero Bootcamp */}
          <div className="box-border-gradiant p-8 bg-white flex flex-col lg:flex-row justify-between gap-6 hover:shadow-xl transition-all">
            <div className="lg:w-1/3 flex items-start gap-4">
              <div className="w-14 h-14 rounded-2xl bg-[#fff2ee] flex items-center justify-center icon-box-bg-circle shrink-0">
                <Award className="w-6 h-6 text-[#fb3602]" />
              </div>
              <div>
                <h4 className="text-xl font-semibold text-slate-900">Programming Hero</h4>
                <div className="inline-flex items-center gap-1 text-xs font-semibold text-[#fb3602] mt-1 bg-[#fff2ee] px-2.5 py-0.5 rounded-md">
                  <Calendar className="w-3 h-3" /> [ 2024 - 2025 ]
                </div>
              </div>
            </div>

            <div className="lg:w-2/3 lg:pl-6 lg:border-l lg:border-slate-100 flex flex-col justify-between">
              <div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2">
                  Complete Web Development Bootcamp (Level 1 &amp; Level 2)
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed font-normal mb-4">
                  Learned comprehensive full stack software development covering modern JavaScript, TypeScript, React, Next.js, Node.js, Express, MongoDB, PostgreSQL, Prisma ORM, Redis, REST APIs, and full application deployment. Completed with distinction.
                </p>
              </div>

              <div className="flex items-center justify-between flex-wrap gap-3 pt-2">
                <div className="flex flex-wrap gap-2">
                  <span className="text-xs font-semibold px-2.5 py-1 rounded bg-slate-100 text-slate-700">Full Stack Development</span>
                  <span className="text-xs font-semibold px-2.5 py-1 rounded bg-slate-100 text-slate-700">Level 1 &amp; Level 2</span>
                  <span className="text-xs font-semibold px-2.5 py-1 rounded bg-slate-100 text-slate-700">React &amp; Node.js</span>
                  <span className="text-xs font-semibold px-2.5 py-1 rounded bg-slate-100 text-slate-700">PostgreSQL</span>
                </div>

                <div className="flex items-center gap-2.5 flex-wrap">
                  <a
                    href="/level 1 certificate.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#fff2ee] hover:bg-[#ffe5dc] text-xs font-semibold text-[#fb3602] transition-colors border border-[#ffded6]"
                  >
                    <FileText className="w-3.5 h-3.5" />
                    Level 1 Certificate
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>

                  <a
                    href="/level 2 certificate.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#fff2ee] hover:bg-[#ffe5dc] text-xs font-semibold text-[#fb3602] transition-colors border border-[#ffded6]"
                  >
                    <FileText className="w-3.5 h-3.5" />
                    Level 2 Certificate
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Card 2: National University Economics */}
          <div className="box-border-gradiant p-8 bg-white flex flex-col lg:flex-row justify-between gap-6 hover:shadow-xl transition-all">
            <div className="lg:w-1/3 flex items-start gap-4">
              <div className="w-14 h-14 rounded-2xl bg-[#fff2ee] flex items-center justify-center icon-box-bg-circle shrink-0">
                <GraduationCap className="w-6 h-6 text-[#fb3602]" />
              </div>
              <div>
                <h4 className="text-xl font-semibold text-slate-900">National University</h4>
                <div className="inline-flex items-center gap-1 text-xs font-semibold text-[#fb3602] mt-1 bg-[#fff2ee] px-2.5 py-0.5 rounded-md">
                  <Calendar className="w-3 h-3" /> [ 2023 - Present ]
                </div>
              </div>
            </div>

            <div className="lg:w-2/3 lg:pl-6 lg:border-l lg:border-slate-100 flex flex-col justify-between">
              <div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2">
                  B.S.S. in Economics (3rd Year)
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed font-normal mb-4">
                  Bachelor of Social Science (B.S.S.) in Economics at National University, Bangladesh.
                </p>
              </div>

              <div className="flex flex-wrap gap-2 pt-2">
                <span className="text-xs font-semibold px-2.5 py-1 rounded bg-slate-100 text-slate-700">National University</span>
                <span className="text-xs font-semibold px-2.5 py-1 rounded bg-slate-100 text-slate-700">Economics Degree</span>
                <span className="text-xs font-semibold px-2.5 py-1 rounded bg-slate-100 text-slate-700">Higher Education</span>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Footer Experience Note */}
      <div className="mt-8 text-center">
        <p className="text-xs text-slate-500 font-medium">
          Ready to review full professional history?{" "}
          <a
            href="https://drive.google.com/file/d/1qoQWwNiDSKHdXK7sBPPWGlc4OEBquKRZ/view?usp=sharing"
            target="_blank"
            rel="noreferrer"
            className="text-[#fb3602] font-bold hover:underline"
          >
            Download Complete Resume (PDF)
          </a>
        </p>
      </div>
    </div>
  );
}
