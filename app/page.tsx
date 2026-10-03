"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Mail, ArrowRight, FileText } from "lucide-react";
import { Github, Linkedin, Facebook } from "./components/Icons";
import Navbar from "./components/Navbar";
import ServicesSection from "./components/ServicesSection";
import SkillsSection from "./components/SkillsSection";
import FunFactsSection from "./components/FunFactsSection";
import ExperienceEducation from "./components/ExperienceEducation";
import ProjectCard from "./components/ProjectCard";
import TestimonialsFaqs from "./components/TestimonialsFaqs";
import ContactForm from "./components/ContactForm";
import MarqueeTicker from "./components/MarqueeTicker";
import Preloader from "./components/Preloader";

export default function Home() {
  const [activeSection, setActiveSection] = useState("home");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Section Observer
    const observerOptions = {
      root: null,
      rootMargin: "-20% 0px -50% 0px",
      threshold: 0,
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    const sections = [
      "home",
      "about",
      "services",
      "skills",
      "experience",
      "projects",
      "faqs",
      "contact",
    ];
    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <>
      {isLoading && <Preloader onComplete={() => setIsLoading(false)} />}
      <div className="min-h-screen bg-[#f8fafc] text-slate-700 font-sans selection:bg-[#fb3602] selection:text-white">
        <Navbar activeSection={activeSection} />

      {/* Hero Section Container - Minimalist Full Width Banner */}
      <section
        id="home"
        className="relative w-full bg-white border-b border-slate-200/80 pt-28 md:pt-36 pb-16 md:pb-20 overflow-hidden"
      >
        {/* Subtle Cyber Grid & Ambient Warm Glows Spanning Edge-to-Edge */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#f1f5f9_1px,transparent_1px),linear-gradient(to_bottom,#f1f5f9_1px,transparent_1px)] bg-[size:40px_40px] opacity-70 pointer-events-none" />
        <div className="absolute -top-20 -right-20 w-[600px] h-[600px] bg-gradient-to-br from-[#fb3602]/12 via-[#fb3602]/4 to-transparent rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-24 -left-20 w-[500px] h-[500px] bg-gradient-to-tr from-orange-400/10 via-slate-200/40 to-transparent rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
          {/* Hero Main Body Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Left Body: Description, Tech Tags & Action Buttons (7 Cols) */}
            <div className="lg:col-span-7 flex flex-col justify-between space-y-6">
              <div>
                <span className="section-sub-title">
                  ✦ Full Stack Software Developer
                </span>

                <h1 className="text-4xl sm:text-6xl lg:text-7xl font-semibold text-slate-900 tracking-tight leading-[1.08] mt-2 mb-4">
                  Hello! I&apos;m{" "}
                  <span className="text-[#fb3602] relative inline-block">
                    Rubel Hosen
                    <span className="absolute -bottom-1 left-0 w-full h-1.5 bg-[#fb3602]/25 rounded-full" />
                  </span>
                </h1>

                <p className="text-xl sm:text-2xl font-semibold text-slate-800 leading-snug">
                  Building fast, responsive web applications and scalable backends.
                </p>

                <p className="text-sm sm:text-base text-slate-600 font-normal leading-relaxed mt-2.5 max-w-2xl">
                  Transforming complex ideas into sleek, high-impact web products with clean code, modern architecture, and a focus on exceptional user experiences.
                </p>

                {/* Tech Pills */}
                <div className="flex flex-wrap gap-2 pt-4">
                  {["Next.js 15", "React", "TypeScript", "Node.js", "Express", "PostgreSQL", "MongoDB", "Tailwind CSS"].map((tech) => (
                    <span
                      key={tech}
                      className="text-xs font-semibold px-3 py-1 rounded-lg bg-slate-100 border border-slate-200 text-slate-700 shadow-2xs"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons & Socials */}
              <div className="pt-4 border-t border-slate-100 flex flex-col gap-6">
                <div className="flex flex-wrap items-center gap-3">
                  <a href="#projects" className="btn-default">
                    Explore Projects
                  </a>

                  <a
                    href="https://drive.google.com/file/d/1qoQWwNiDSKHdXK7sBPPWGlc4OEBquKRZ/view?usp=sharing"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-secondary-custom"
                  >
                    <FileText className="w-4 h-4 text-[#fb3602]" />
                    <span>View Resume</span>
                  </a>

                  <a
                    href="#contact"
                    className="btn-secondary-custom"
                  >
                    <Mail className="w-4 h-4 text-[#fb3602]" />
                    <span>Hire Me</span>
                  </a>
                </div>

                {/* Social Connect Icons & Trust Badges */}
                <div className="flex flex-wrap items-center justify-between gap-4 pt-1">
                  <div className="flex items-center gap-2.5">
                    <span className="text-xs font-bold text-slate-400 uppercase tracking-wider mr-1">Connect:</span>
                    <a
                      href="https://github.com/rubel6610"
                      target="_blank"
                      rel="noreferrer"
                      className="w-9 h-9 rounded-xl border border-slate-200 bg-white text-slate-700 hover:bg-[#fb3602] hover:text-white hover:border-[#fb3602] flex items-center justify-center transition-all shadow-xs"
                      title="GitHub"
                    >
                      <Github className="w-4 h-4" />
                    </a>
                    <a
                      href="https://www.linkedin.com/in/rubelhosen13/"
                      target="_blank"
                      rel="noreferrer"
                      className="w-9 h-9 rounded-xl border border-slate-200 bg-white text-slate-700 hover:bg-[#fb3602] hover:text-white hover:border-[#fb3602] flex items-center justify-center transition-all shadow-xs"
                      title="LinkedIn"
                    >
                      <Linkedin className="w-4 h-4" />
                    </a>
                    <a
                      href="https://www.facebook.com/arfanahmedrubel10"
                      target="_blank"
                      rel="noreferrer"
                      className="w-9 h-9 rounded-xl border border-slate-200 bg-white text-slate-700 hover:bg-[#fb3602] hover:text-white hover:border-[#fb3602] flex items-center justify-center transition-all shadow-xs"
                      title="Facebook"
                    >
                      <Facebook className="w-4 h-4" />
                    </a>
                    <a
                      href="mailto:rubelhosen1310@gmail.com"
                      className="w-9 h-9 rounded-xl border border-slate-200 bg-white text-slate-700 hover:bg-[#fb3602] hover:text-white hover:border-[#fb3602] flex items-center justify-center transition-all shadow-xs"
                      title="Email"
                    >
                      <Mail className="w-4 h-4" />
                    </a>
                  </div>

                  <div className="flex items-center gap-2 text-xs font-semibold text-emerald-600 bg-emerald-50 border border-emerald-200 px-3 py-1 rounded-full">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                    <span>Open to Full-Stack Opportunities</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Body: Single Showcase Photo Card (5 Cols) */}
            <div className="lg:col-span-5 flex flex-col gap-4">
              <div className="relative rounded-3xl overflow-hidden bg-gradient-to-b from-slate-100 to-slate-200 border-4 border-white shadow-2xl group max-w-[420px] mx-auto w-full">
                <div className="relative aspect-[4/4.8] w-full">
                  <Image
                    src="/Rubel%20image.jpeg"
                    alt="Rubel Hosen - Full Stack Software Developer"
                    fill
                    sizes="(max-width: 768px) 100vw, 420px"
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                    priority
                  />
                  {/* Subtle Gradient Vignette */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-transparent to-black/10" />

                  {/* Floating Glass Badge Top Left: Recognition */}
                  <div className="absolute top-4 left-4 p-2.5 rounded-2xl bg-white/90 backdrop-blur-md border border-white/60 shadow-lg text-slate-900 flex items-center gap-2.5 animate-bounce-slow">
                    <div className="w-8 h-8 rounded-xl bg-[#fb3602] text-white flex items-center justify-center font-bold text-xs shadow-xs">
                      ★
                    </div>
                    <div>
                      <span className="text-[10px] font-extrabold uppercase text-[#fb3602] block leading-none">
                        Recognition
                      </span>
                      <span className="text-xs font-bold text-slate-900 block mt-0.5">
                        Top 3 Team Leader
                      </span>
                    </div>
                  </div>

                  {/* Floating Glass Badge Top Right: Experience */}
                  <div className="absolute top-4 right-4 p-2.5 rounded-2xl bg-white/90 backdrop-blur-md border border-white/60 shadow-lg text-slate-900 flex items-center gap-2">
                    <div className="w-8 h-8 rounded-xl bg-slate-900 text-white flex items-center justify-center font-bold text-xs shadow-xs">
                      2+
                    </div>
                    <div className="text-right">
                      <span className="text-[10px] font-extrabold uppercase text-slate-500 block leading-none">
                        Experience
                      </span>
                      <span className="text-xs font-bold text-slate-900 block mt-0.5">
                        Years Active
                      </span>
                    </div>
                  </div>

                  {/* Bottom Identity Card Banner */}
                  <div className="absolute bottom-4 left-4 right-4 p-4 rounded-2xl bg-white/95 backdrop-blur-md border border-slate-200/80 shadow-xl flex items-center justify-between">
                    <div>
                      <div className="flex items-center gap-1.5 text-[11px] text-[#fb3602] font-mono font-bold uppercase tracking-wider">
                        <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                        <span>Full Stack Developer</span>
                      </div>
                      <h4 className="text-base font-semibold text-slate-900 mt-0.5 font-sans">
                        Rubel Hosen
                      </h4>
                    </div>

                    <a
                      href="#contact"
                      className="w-10 h-10 rounded-xl bg-[#fb3602] text-white hover:bg-slate-900 flex items-center justify-center transition-all shadow-md group/btn"
                      title="Contact Rubel"
                    >
                      <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-0.5 transition-transform" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Sections */}
      <main className="space-y-24">
        {/* Section 1 & 2 Container */}
        <div className="max-w-7xl mx-auto px-4 md:px-8 pt-20 space-y-28">
          {/* Section 1: About Us */}
          <section id="about" className="scroll-mt-28">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              {/* Left Column: Code Terminal Showcase (Replaces duplicate photo) */}
              <div className="lg:col-span-5 flex justify-center">
                <div className="w-full max-w-[440px] rounded-3xl overflow-hidden border border-slate-800 bg-slate-950 shadow-2xl text-slate-200 font-mono text-xs">
                  {/* Terminal Header */}
                  <div className="px-4 py-3 bg-slate-900/90 border-b border-slate-800 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-rose-500/80" />
                      <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                      <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                    </div>
                    <span className="text-[11px] text-slate-400 font-medium">developer.ts</span>
                    <span className="text-[10px] text-emerald-400 font-bold bg-emerald-950/60 px-2 py-0.5 rounded border border-emerald-800/60">TS 5.x</span>
                  </div>

                  {/* Terminal Body */}
                  <div className="p-5 space-y-3 leading-relaxed text-[12px]">
                    <p className="text-slate-500">// Full-Stack Software Engineer Profile</p>
                    <p>
                      <span className="text-purple-400">const</span>{" "}
                      <span className="text-amber-300">developer</span> = &#123;
                    </p>
                    <div className="pl-4 space-y-1 text-slate-300">
                      <p>
                        <span className="text-sky-300">name</span>: <span className="text-emerald-300">&quot;Rubel Hosen&quot;</span>,
                      </p>
                      <p>
                        <span className="text-sky-300">role</span>: <span className="text-emerald-300">&quot;Full Stack Software Developer&quot;</span>,
                      </p>
                      <p>
                        <span className="text-sky-300">training</span>: <span className="text-amber-200">&quot;Programming Hero (L1 &amp; L2)&quot;</span>,
                      </p>
                      <p>
                        <span className="text-sky-300">experience</span>: <span className="text-emerald-300">&quot;Frontend Dev @ Ilmify&quot;</span>,
                      </p>
                      <p>
                        <span className="text-sky-300">stack</span>: [
                        <span className="text-orange-300">&quot;Next.js&quot;</span>,{" "}
                        <span className="text-orange-300">&quot;React&quot;</span>,{" "}
                        <span className="text-orange-300">&quot;Node.js&quot;</span>,{" "}
                        <span className="text-orange-300">&quot;PostgreSQL&quot;</span>
                        ],
                      </p>
                      <p>
                        <span className="text-sky-300">status</span>: <span className="text-emerald-400">&quot;Ready for Impact&quot;</span>
                      </p>
                    </div>
                    <p>&#125;;</p>

                    <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between text-[11px] text-slate-400">
                      <span className="flex items-center gap-1 text-emerald-400 font-semibold">
                        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                        Compiled with 0 errors
                      </span>
                      <span className="text-slate-500">2026 Edition</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Description & Stats (7 Cols) */}
              <div className="lg:col-span-7 flex flex-col gap-6">
                <div>
                  <span className="section-sub-title">About Me</span>
                  <h2 className="text-3xl md:text-5xl font-semibold text-slate-900 tracking-tight leading-tight">
                    Building scalable, low-latency & high-impact web applications
                  </h2>
                  <p className="text-sm md:text-base text-slate-600 mt-4 leading-relaxed font-normal">
                    I am a <strong>Full Stack Software Developer</strong> passionate about engineering performant user interfaces and reliable backend systems. I learned full stack web development through <strong>Programming Hero (completed Level 1 & Level 2 Bootcamps)</strong>, mastering modern web architecture, JavaScript, TypeScript, React, Next.js, Node.js, Express, PostgreSQL, and MongoDB.
                  </p>
                  <p className="text-sm md:text-base text-slate-600 mt-3 leading-relaxed font-normal">
                    In my professional work experience, I serve as a <strong>Frontend Developer at Ilmify Tech Agency</strong>, implementing responsive design layouts and reactive client states. Additionally, leading a developer team to a <strong>Top 3 ranking</strong> in Programming Hero&apos;s EndGame challenge has sharpened my ability to deliver complete, production-ready full-stack applications.
                  </p>
                </div>

                {/* Stats & More About Me Button */}
                <div className="pt-6 border-t border-slate-200 grid grid-cols-1 sm:grid-cols-2 gap-6 items-center">
                  <div className="flex items-center gap-4">
                    <div className="text-5xl font-semibold text-[#fb3602] tracking-tight">
                      2+
                    </div>
                    <div className="text-xs font-semibold text-slate-700 uppercase tracking-wider leading-tight">
                      Years of Software <br /> Development Focus
                    </div>
                  </div>

                  <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 flex items-center gap-3.5">
                    <div className="w-10 h-10 rounded-xl bg-[#fff2ee] text-[#fb3602] flex items-center justify-center font-semibold">
                      ★
                    </div>
                    <div>
                      <h5 className="text-sm font-semibold text-slate-900">15+ Projects & Repos</h5>
                      <p className="text-xs text-slate-500 m-0">Delivered with clean code</p>
                    </div>
                  </div>
                </div>

                <div className="pt-2">
                  <a
                    href="https://drive.google.com/file/d/1qoQWwNiDSKHdXK7sBPPWGlc4OEBquKRZ/view?usp=sharing"
                    target="_blank"
                    rel="noreferrer"
                    className="btn-default"
                  >
                    Download Complete Resume
                  </a>
                </div>
              </div>
            </div>
          </section>

          {/* Section 2: Services */}
          <section id="services" className="scroll-mt-28">
            <div className="text-center max-w-2xl mx-auto mb-14">
              <span className="section-sub-title">Our Services</span>
              <h2 className="text-3xl md:text-5xl font-semibold text-slate-900 tracking-tight">
                Professional Services I Offer
              </h2>
              <p className="text-sm text-slate-600 mt-3 font-normal">
                A comprehensive range of software engineering capabilities designed to build, scale, and optimize modern web platforms.
              </p>
            </div>

            <ServicesSection />
          </section>
        </div>

        {/* Infinite Marquee Ticker */}
        <MarqueeTicker />

        {/* Additional Main Sections */}
        <div className="max-w-7xl mx-auto px-4 md:px-8 pb-20 space-y-28">
        {/* Section 3: Creative Toolkit */}
        <section id="skills" className="scroll-mt-28">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="section-sub-title">My Creative Toolkit</span>
            <h2 className="text-3xl md:text-5xl font-semibold text-slate-900 tracking-tight">
              Tools & Technologies I Use
            </h2>
            <p className="text-sm text-slate-600 mt-3 font-normal">
              A curated set of modern frameworks, databases, and DevOps tools utilized to engineer resilient web products.
            </p>
          </div>

          <SkillsSection />
        </section>

        {/* Section 4: Key Fun Facts */}
        <section className="scroll-mt-28">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="section-sub-title">My Fun Facts</span>
            <h2 className="text-3xl md:text-5xl font-semibold text-slate-900 tracking-tight">
              Key Facts That Reflect My Work
            </h2>
            <p className="text-sm text-slate-600 mt-3 font-normal">
              A snapshot of milestones, sprint executions, and teamwork metrics.
            </p>
          </div>

          <FunFactsSection />
        </section>

        {/* Section 5: Professional Journey */}
        <section id="experience" className="scroll-mt-28">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="section-sub-title">Professional Experience</span>
            <h2 className="text-3xl md:text-5xl font-semibold text-slate-900 tracking-tight">
              Key Experiences That Define My Growth
            </h2>
            <p className="text-sm text-slate-600 mt-3 font-normal">
              Highlighting my professional experience at Ilmify, bootcamp credentials from Programming Hero, and academic education.
            </p>
          </div>

          <ExperienceEducation />
        </section>

        {/* Section 6: Featured Projects */}
        <section id="projects" className="scroll-mt-28">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="section-sub-title">Our Projects</span>
            <h2 className="text-3xl md:text-5xl font-semibold text-slate-900 tracking-tight">
              Featured Full Stack Showcase
            </h2>
            <p className="text-sm text-slate-600 mt-3 font-normal">
              Explore complete applications engineered with production architectures, secure auth, and real-time state.
            </p>
          </div>

          <ProjectCard />
        </section>

        {/* Section 7: Testimonials & FAQs */}
        <TestimonialsFaqs />

        {/* Section 8: Contact Now */}
        <section id="contact" className="scroll-mt-28">
          <ContactForm />
        </section>
      </div>
    </main>

      {/* Main Footer in Weblance Style */}
      <footer className="w-full bg-slate-900 text-white pt-20 pb-12 border-t border-slate-800 mt-20">
        <div className="max-w-7xl mx-auto px-4 md:px-8 flex flex-col gap-16">
          {/* Big Let's Work Banner */}
          <div className="pb-16 border-b border-slate-800 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
            <div>
              <span className="text-xs uppercase font-mono font-semibold tracking-widest text-[#fb3602] block mb-2">
                Get Started With A Project?
              </span>
              <h2 className="text-5xl md:text-8xl font-semibold tracking-tight text-white">
                Let&apos;s Work<span className="text-[#fb3602]">.</span>
              </h2>
            </div>

            <a
              href="#contact"
              className="btn-default shrink-0"
            >
              Start Conversation
            </a>
          </div>

          {/* Footer Links & Contact Info */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
            <div className="md:col-span-5 flex flex-col gap-4">
              <div className="flex items-center gap-2">
                <div className="w-9 h-9 rounded-xl bg-[#fb3602] text-white flex items-center justify-center font-semibold text-base">
                  R.
                </div>
                <h4 className="text-xl font-semibold text-white tracking-tight">
                  RUBEL HOSEN
                </h4>
              </div>

              {/* Winning Career Objective */}
              <div className="flex flex-col gap-2.5">
                <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-md bg-white/5 border border-white/10 w-fit text-[11px] font-semibold text-[#fb3602]">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#fb3602] animate-pulse" />
                  Full Stack Software Developer
                </div>
                <p className="text-xs text-slate-400 leading-relaxed max-w-md">
                  Dedicated Full Stack Software Developer aiming to engineer high-performance web applications, scalable API backends, and low-latency architectures. Focused on writing clean, modular code, solving complex business problems, and driving measurable impact for visionary teams and clients worldwide.
                </p>
                <div className="flex items-center gap-3 pt-1 text-[11px] text-slate-400">
                  <span className="flex items-center gap-1.5 text-emerald-400 font-mono">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" /> AVAILABLE FOR GLOBAL ROLES &amp; CONTRACTS
                  </span>
                </div>
              </div>
            </div>

            <div className="md:col-span-3">
              <h5 className="text-sm font-semibold uppercase tracking-wider text-slate-300 mb-4">
                Quick Navigation
              </h5>
              <div className="grid grid-cols-2 gap-2 text-xs text-slate-400 font-medium">
                <a href="#home" className="hover:text-[#fb3602] transition-colors">Home</a>
                <a href="#about" className="hover:text-[#fb3602] transition-colors">About Me</a>
                <a href="#services" className="hover:text-[#fb3602] transition-colors">Services</a>
                <a href="#skills" className="hover:text-[#fb3602] transition-colors">Toolkit</a>
                <a href="#experience" className="hover:text-[#fb3602] transition-colors">Experience</a>
                <a href="#projects" className="hover:text-[#fb3602] transition-colors">Projects</a>
                <a href="#faqs" className="hover:text-[#fb3602] transition-colors">FAQs</a>
                <a href="#contact" className="hover:text-[#fb3602] transition-colors">Contact</a>
              </div>
            </div>

            <div className="md:col-span-4 flex flex-col gap-2.5">
              <h5 className="text-sm font-semibold uppercase tracking-wider text-slate-300 mb-2">
                Direct Contact
              </h5>
              <p className="text-xs text-slate-400 m-0">
                Email: <a href="mailto:rubelhosen1310@gmail.com" className="text-white hover:text-[#fb3602] transition-colors">rubelhosen1310@gmail.com</a>
              </p>
              <p className="text-xs text-slate-400 m-0">
                Location: Dhaka, Bangladesh • Global Remote
              </p>
              <p className="text-xs text-slate-400 m-0">
                Response Time: Within 24 hours
              </p>
            </div>
          </div>

          {/* Copyright Bottom Bar */}
          <div className="pt-8 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-center gap-4 text-xs text-slate-500">
            <p className="m-0">
              © {new Date().getFullYear()} Md Rubel Hosen. All rights reserved.
            </p>
           
          </div>
        </div>
      </footer>
      </div>
    </>
  );
}
