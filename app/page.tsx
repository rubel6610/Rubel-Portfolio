"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Mail, ExternalLink, FileCode } from "lucide-react";
import { Github, Linkedin } from "./components/Icons";
import ThreeCanvas from "./components/ThreeCanvas";
import SkillsSection from "./components/SkillsSection";
import ExperienceEducation from "./components/ExperienceEducation";
import ProjectCard from "./components/ProjectCard";
import ContactForm from "./components/ContactForm";

export default function Home() {
  const [activeSection, setActiveSection] = useState("home");
  
  // Custom Cursor state
  const [cursorPos, setCursorPos] = useState({ x: -100, y: -100 });
  const [cursorDotPos, setCursorDotPos] = useState({ x: -100, y: -100 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    // Custom cursor movement logic
    const handleMouseMove = (e: MouseEvent) => {
      setCursorDotPos({ x: e.clientX, y: e.clientY });
      
      // Delay cursor ring slightly for a smooth lag effect
      setTimeout(() => {
        setCursorPos({ x: e.clientX, y: e.clientY });
      }, 50);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName === "BUTTON" || 
        target.tagName === "A" || 
        target.closest("button") || 
        target.closest("a") ||
        target.classList.contains("cursor-pointer")
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseover", handleMouseOver);

    // Section Observer
    const sections = ["home", "about", "skills", "experience", "projects", "contact"];
    const handleScroll = () => {
      const scrollPos = window.scrollY + 200;
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(section);
          }
        }
      }
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseover", handleMouseOver);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    // Dynamic import to prevent Node SSR errors
    const { gsap } = require("gsap");
    const { ScrollTrigger } = require("gsap/ScrollTrigger");
    gsap.registerPlugin(ScrollTrigger);

    // 1. Initial Page Load Animation for Hero section (Futuristic 3D text and staggered loading)
    const heroTitle = document.querySelector("#home h2");
    const heroText = document.querySelector("#home p");
    const heroButtons = document.querySelectorAll("#home .flex-wrap a, #home .flex a, #home .border-t a");
    
    if (heroTitle) {
      gsap.fromTo(
        heroTitle,
        { opacity: 0, y: 60, rotateX: -45, transformOrigin: "50% 0%" },
        { opacity: 1, y: 0, rotateX: 0, duration: 1.2, ease: "power4.out" }
      );
    }
    
    if (heroText) {
      gsap.fromTo(
        heroText,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 1.0, ease: "power3.out" }
      );
    }
    
    if (heroButtons.length > 0) {
      gsap.fromTo(
        heroButtons,
        { opacity: 0, scale: 0.9, y: 15 },
        { opacity: 1, scale: 1, y: 0, duration: 0.8, ease: "back.out(1.5)", stagger: 0.1 }
      );
    }

    // 2. Animate Section Headers and trigger staggered card reveals for each section
    const sectionsList = document.querySelectorAll("section");
    sectionsList.forEach((sec) => {
      if (sec.id === "home") return;

      const headingBadge = sec.querySelector("span.uppercase");
      const headingTitle = sec.querySelector("h3");
      const subText = sec.querySelector("p");

      // Animate Heading Badge (Slide in from left with glow)
      if (headingBadge) {
        gsap.fromTo(
          headingBadge,
          { opacity: 0, x: -30 },
          {
            opacity: 1,
            x: 0,
            duration: 0.8,
            ease: "power3.out",
            scrollTrigger: {
              trigger: sec,
              start: "top 85%",
              toggleActions: "play none none none",
            },
          }
        );
      }

      // Animate Section Title (3D rotate & fade)
      if (headingTitle) {
        gsap.fromTo(
          headingTitle,
          { opacity: 0, y: 20, rotateX: -20 },
          {
            opacity: 1,
            y: 0,
            rotateX: 0,
            duration: 0.8,
            ease: "power3.out",
            scrollTrigger: {
              trigger: sec,
              start: "top 85%",
              toggleActions: "play none none none",
            },
          }
        );
      }

      if (subText) {
        gsap.fromTo(
          subText,
          { opacity: 0 },
          {
            opacity: 1,
            duration: 1,
            ease: "power2.out",
            scrollTrigger: {
              trigger: sec,
              start: "top 85%",
              toggleActions: "play none none none",
            },
          }
        );
      }

      // 3. Staggered 3D reveal of cards inside this specific section (Futuristic Hologram Drop)
      const sectionCards = sec.querySelectorAll(".glass-panel, .border-dashed");
      if (sectionCards.length > 0) {
        gsap.fromTo(
          sectionCards,
          { opacity: 0, y: 120, rotateX: -80, rotateY: 15, scale: 0.8 },
          {
            opacity: 1,
            y: 0,
            rotateX: 0,
            rotateY: 0,
            scale: 1,
            duration: 1.1,
            ease: "back.out(1.3)",
            stagger: 0.18,
            scrollTrigger: {
              trigger: sec,
              start: "top 75%",
              toggleActions: "play none none none",
            },
            onComplete: () => {
              // Trigger inner-content reveal once card animation starts completing
              sectionCards.forEach((card) => {
                const listItems = card.querySelectorAll("li, span.font-mono, .flex-wrap span");
                if (listItems.length > 0) {
                  gsap.fromTo(
                    listItems,
                    { opacity: 0, x: -10 },
                    { opacity: 1, x: 0, duration: 0.4, stagger: 0.05, ease: "power2.out" }
                  );
                }
              });
            }
          }
        );
      }
    });

    // 4. Interactive 3D Parallax Card Tilt Effect on Mouse Hover (Hard level, attracts people)
    const hoverCards = document.querySelectorAll("main .glass-panel, main .border-dashed");
    const cleanupFns: Array<() => void> = [];

    hoverCards.forEach((card) => {
      const htmlCard = card as HTMLElement;
      
      // Setup default transformation states
      gsap.set(htmlCard, { transformStyle: "preserve-3d", transformPerspective: 1000 });

      const handleMouseMove = (e: MouseEvent) => {
        const rect = htmlCard.getBoundingClientRect();
        const x = e.clientX - rect.left; 
        const y = e.clientY - rect.top;  
        
        const xc = rect.width / 2;
        const yc = rect.height / 2;
        
        // Tilt range max 10 degrees
        const angleX = -(y - yc) / yc * 10;
        const angleY = (x - xc) / xc * 10;

        gsap.to(htmlCard, {
          rotateX: angleX,
          rotateY: angleY,
          scale: 1.02,
          duration: 0.35,
          ease: "power2.out",
          overwrite: "auto"
        });

        // Layered Parallax depth shifting inside the card
        const icon = htmlCard.querySelector("svg, span.uppercase");
        const title = htmlCard.querySelector("h3, h5");
        
        if (icon) {
          gsap.to(icon, {
            x: (x - xc) / xc * 6,
            y: (y - yc) / yc * 6,
            z: 15,
            duration: 0.35,
            ease: "power2.out",
            overwrite: "auto"
          });
        }
        if (title) {
          gsap.to(title, {
            x: (x - xc) / xc * 4,
            y: (y - yc) / yc * 4,
            z: 10,
            duration: 0.35,
            ease: "power2.out",
            overwrite: "auto"
          });
        }
      };

      const handleMouseLeave = () => {
        gsap.to(htmlCard, {
          rotateX: 0,
          rotateY: 0,
          scale: 1,
          duration: 0.5,
          ease: "power2.out",
          overwrite: "auto"
        });

        const icon = htmlCard.querySelector("svg, span.uppercase");
        const title = htmlCard.querySelector("h3, h5");
        if (icon) gsap.to(icon, { x: 0, y: 0, z: 0, duration: 0.5, ease: "power2.out", overwrite: "auto" });
        if (title) gsap.to(title, { x: 0, y: 0, z: 0, duration: 0.5, ease: "power2.out", overwrite: "auto" });
      };

      htmlCard.addEventListener("mousemove", handleMouseMove);
      htmlCard.addEventListener("mouseleave", handleMouseLeave);

      cleanupFns.push(() => {
        htmlCard.removeEventListener("mousemove", handleMouseMove);
        htmlCard.removeEventListener("mouseleave", handleMouseLeave);
      });
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger: any) => trigger.kill());
      cleanupFns.forEach((fn) => fn());
    };
  }, []);

  return (
    <div className="relative min-h-screen z-10 scanline">
      {/* 3D Canvas Background */}
      <ThreeCanvas />

      {/* Custom Cursor Elements */}
      <div
        className="hidden md:block custom-cursor"
        style={{
          left: `${cursorPos.x}px`,
          top: `${cursorPos.y}px`,
          transform: `translate(-50%, -50%) scale(${isHovering ? 1.6 : 1})`,
          borderColor: isHovering ? "#bd00ff" : "#00f0ff",
        }}
      />
      <div
        className="hidden md:block custom-cursor-dot"
        style={{
          left: `${cursorDotPos.x}px`,
          top: `${cursorDotPos.y}px`,
          backgroundColor: isHovering ? "#00f0ff" : "#bd00ff",
        }}
      />

      {/* Sticky Floating Glassmorphic Header */}
      <header className="sticky top-4 z-50 mx-auto max-w-5xl w-[calc(100%-2rem)] glass-panel border border-black/5 dark:border-white/5 py-3 px-6 md:px-8 rounded-2xl flex items-center justify-between shadow-[0_10px_30px_-10px_rgba(0,0,0,0.3)] dark:shadow-[0_10px_30px_-10px_rgba(0,0,0,0.7)] transition-all duration-300">
        <div className="flex items-center gap-3">
          <div className="relative w-8 h-8 rounded-lg overflow-hidden border border-purple-accent/30 bg-black flex items-center justify-center font-mono font-bold text-cyan-accent text-sm shadow-glow-cyan">
            R_
          </div>
          <div>
            <h1 className="text-sm font-bold font-mono tracking-wider text-zinc-900 dark:text-white">RUBEL</h1>
            <span className="text-[9px] font-mono text-zinc-500 block -mt-0.5 tracking-widest">PORTFOLIO v2.0.26</span>
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {[
            { id: "home", label: "01. //HOME" },
            { id: "about", label: "02. //ABOUT" },
            { id: "skills", label: "03. //SKILLS" },
            { id: "experience", label: "04. //EXPERIENCE" },
            { id: "projects", label: "05. //PROJECTS" },
            { id: "contact", label: "06. //CONTACT" },
          ].map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={`text-xs font-mono tracking-widest transition-all ${
                activeSection === item.id
                  ? "text-cyan-accent text-glow-cyan font-semibold"
                  : "text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white"
              }`}
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Global Developer Status Badge */}
        <div className="flex items-center gap-3">
          <span className="hidden sm:inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-[10px] font-mono text-emerald-400">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            HIRE_OK
          </span>

          <a
            href="#contact"
            className="px-4 py-1.5 rounded-lg bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 hover:border-purple-accent/40 text-[10px] font-mono tracking-widest text-zinc-600 dark:text-zinc-300 hover:text-zinc-900 dark:hover:text-white transition-all cursor-pointer"
          >
            PING_SERVER
          </a>
        </div>
      </header>

      {/* Main Content Layout */}
      <main className="max-w-6xl mx-auto px-6 md:px-12 py-12 flex flex-col gap-32">
        {/* Section 1: Hero Section */}
        <section
          id="home"
          className="min-h-[80vh] flex flex-col justify-center items-start pt-12 relative"
        >
          <div className="flex flex-col gap-4 max-w-3xl relative z-10">
            <div className="font-mono text-xs text-purple-accent uppercase tracking-widest flex items-center gap-2">
              <span className="w-1 h-3 bg-purple-accent inline-block" />
              SYSTEMS ANALYST & FULL STACK DEVELOPER
            </div>
            
            <h2 className="text-4xl md:text-7xl font-extrabold tracking-tight text-zinc-950 dark:text-white leading-none">
              Engineering <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-accent to-purple-accent text-glow-cyan">
                Scalable Architectures
              </span>
            </h2>

            <p className="text-zinc-600 dark:text-zinc-400 font-light text-base md:text-lg leading-relaxed mt-4 max-w-2xl">
              I engineer high-performance full-stack web applications with low-latency APIs and responsive interfaces. Applying an analytical economics framework, I optimize state management, rendering pipelines, and data storage.
            </p>

            <div className="flex flex-wrap gap-4 mt-8">
              <a
                href="#projects"
                className="py-3 px-6 rounded-xl bg-purple-accent hover:bg-purple-600 text-white font-mono text-xs tracking-wider uppercase transition-all shadow-glow-purple flex items-center gap-2 cursor-pointer"
              >
                <FileCode className="w-4 h-4" />
                EXPLORE PROJECTS
              </a>
              <a
                href="#contact"
                className="py-3 px-6 rounded-xl bg-white/40 dark:bg-black/40 border border-black/10 dark:border-white/15 hover:border-cyan-accent/30 text-zinc-800 dark:text-white font-mono text-xs tracking-wider uppercase transition-all flex items-center gap-2 cursor-pointer"
              >
                <Mail className="w-4 h-4" />
                INITIATE CONTACT
              </a>
            </div>
          </div>

          {/* Social Links on Hero */}
          <div className="flex gap-4 mt-16 md:mt-24 relative z-10 border-t border-white/5 pt-6 w-full">
            <a
              href="https://github.com"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 text-xs font-mono text-zinc-500 hover:text-cyan-accent transition-colors"
            >
              <Github className="w-4 h-4" /> /github
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 text-xs font-mono text-zinc-500 hover:text-cyan-accent transition-colors"
            >
              <Linkedin className="w-4 h-4" /> /linkedin
            </a>
            <a
              href="mailto:contact@rubel.dev"
              className="flex items-center gap-2 text-xs font-mono text-zinc-500 hover:text-cyan-accent transition-colors"
            >
              <Mail className="w-4 h-4" /> /email
            </a>
          </div>
        </section>

        {/* Section 2: About / Professional Profile */}
        <section id="about" className="scroll-mt-24">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
            {/* About text (7 Cols) */}
            <div className="md:col-span-7 flex flex-col gap-6">
              <div>
                <span className="text-xs font-mono text-cyan-accent uppercase tracking-widest block mb-2">
                  02. // PROFILE_OVERVIEW
                </span>
                <h3 className="text-3xl font-extrabold tracking-tight text-white">
                  Bridging Economics with Systems Engineering
                </h3>
              </div>

              <div className="text-zinc-400 font-light text-sm leading-6 flex flex-col gap-4">
                <p>
                  I am a passionate Full Stack Developer dedicated to engineering clean frontend interfaces and robust backend architectures. With a strong commitment to logic and structured design, I translate ideas into low-latency, scalable web experiences.
                </p>
                <p>
                  During my role at <strong className="text-white">Ilmify Tech Agency</strong>, I contributed to front-facing layouts, design implementation, and reactive states. My core training through the level 1 & level 2 web development bootcamps at <strong className="text-white">Programming Hero</strong>, combined with leadership roles in team challenges, has built my capacity to deliver complete, optimized systems.
                </p>
                <p>
                  Additionally, my B.S.S. studies in Economics at National University provide me with a distinct analytical framework—allowing me to treat data indexing, client-server concurrency, and memory caching as systems optimization opportunities.
                </p>
              </div>
            </div>

            {/* Profile Avatar & Interactive Spec Sheet (5 Cols) */}
            <div className="md:col-span-5 flex flex-col items-center justify-center">
              <div className="relative group p-3 rounded-2xl glass-panel border border-white/5 hover:border-cyan-accent/20 transition-all max-w-[280px] w-full">
                {/* Glowing borders */}
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-accent/10 to-purple-accent/10 opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl pointer-events-none" />

                {/* Avatar Frame */}
                <div className="relative aspect-square w-full rounded-xl overflow-hidden bg-zinc-900 border border-white/5">
                  <Image
                    src="/Rubel%20image.jpeg"
                    alt="Rubel - Full Stack Developer"
                    fill
                    sizes="(max-width: 768px) 100vw, 280px"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    priority
                  />
                  {/* Cyber Grid Scanning overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#040408]/90 via-transparent to-transparent pointer-events-none" />
                </div>

                {/* Cyber metrics annotation */}
                <div className="mt-4 font-mono text-[10px] text-zinc-500 flex flex-col gap-1.5 border-t border-white/5 pt-3">
                  <div className="flex justify-between">
                    <span>NODE_ID:</span>
                    <span className="text-white font-semibold">RUBEL_NU_03</span>
                  </div>
                  <div className="flex justify-between">
                    <span>JOB_ROLE:</span>
                    <span className="text-cyan-accent">FRONTEND_DEV@ILMIFY</span>
                  </div>
                  <div className="flex justify-between">
                    <span>ACADEMICS:</span>
                    <span className="text-purple-accent">ECONOMICS_DEPT</span>
                  </div>
                  <div className="flex justify-between">
                    <span>STACK:</span>
                    <span className="text-white">FULL_STACK_OK</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 3: Full Stack Skills */}
        <section id="skills" className="scroll-mt-24">
          <div className="flex flex-col gap-8">
            <div>
              <span className="text-xs font-mono text-cyan-accent uppercase tracking-widest block mb-2">
                03. // TECH_STACK_MATRIX
              </span>
              <h3 className="text-3xl font-extrabold tracking-tight text-white">
                Skills & Technologies
              </h3>
              <p className="text-sm text-zinc-400 font-light mt-2 max-w-xl">
                A structured categorization of full-stack tools, backend libraries, and development environments.
              </p>
            </div>

            <SkillsSection />
          </div>
        </section>

        {/* Section 4: Experience & Education */}
        <section id="experience" className="scroll-mt-24">
          <div className="flex flex-col gap-8">
            <div>
              <span className="text-xs font-mono text-purple-accent uppercase tracking-widest block mb-2">
                04. // CAREER_LEDGER
              </span>
              <h3 className="text-3xl font-extrabold tracking-tight text-white">
                Experience & Achievements
              </h3>
              <p className="text-sm text-zinc-400 font-light mt-2 max-w-xl">
                Highlighting professional software development work, team leadership accomplishments, and academic background.
              </p>
            </div>

            <ExperienceEducation />
          </div>
        </section>

        {/* Section 5: Projects */}
        <section id="projects" className="scroll-mt-24">
          <div className="flex flex-col gap-8">
            <div>
              <span className="text-xs font-mono text-cyan-accent uppercase tracking-widest block mb-2">
                05. // DEPLOYED_APPLICATIONS
              </span>
              <h3 className="text-3xl font-extrabold tracking-tight text-white">
                Project Catalog Node
              </h3>
              <p className="text-sm text-zinc-400 font-light mt-2 max-w-xl">
                A selection of full stack applications demonstrating database indexing, real-time message architectures, and analysis pipelines.
              </p>
            </div>
            
            <ProjectCard />
          </div>
        </section>

        {/* Section 6: Contact Terminal Handshake */}
        <section id="contact" className="scroll-mt-24 mb-12">
          <div className="flex flex-col gap-8">
            <div>
              <span className="text-xs font-mono text-cyan-accent uppercase tracking-widest block mb-2">
                06. // INITIATE_TCP_HANDSHAKE
              </span>
              <h3 className="text-3xl font-extrabold tracking-tight text-white">
                Get In Touch
              </h3>
              <p className="text-sm text-zinc-400 font-light mt-2 max-w-xl">
                Submit an HTTP POST request payload. The contact details are parsed, written to a mock SQL schema, and outputted live on screen.
              </p>
            </div>

            <ContactForm />
          </div>
        </section>
      </main>

      {/* Retro scanline overlay grid */}
      <div className="fixed inset-0 pointer-events-none z-40 bg-zinc-950/[0.02] mix-blend-overlay" />
      
      {/* Footer */}
      <footer className="w-full glass-panel border-t border-white/5 py-8 text-center text-xs font-mono text-zinc-500 relative z-10 mt-auto">
        <p>&copy; {new Date().getFullYear()} // RUBEL. ALL CHANNELS OPERATIONAL.</p>
        <p className="text-[10px] text-zinc-600 mt-2 tracking-widest uppercase">
          Economics optimization &#215; Full-Stack engineering
        </p>
      </footer>
    </div>
  );
}
