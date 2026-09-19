"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Mail, FileCode, FileText } from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";
import { Github, Linkedin, Facebook } from "./components/Icons";
import ThreeCanvas from "./components/ThreeCanvas";
import SkillsSection from "./components/SkillsSection";
import ExperienceEducation from "./components/ExperienceEducation";
import ProjectCard from "./components/ProjectCard";
import ContactForm from "./components/ContactForm";
import Navbar from "./components/Navbar";

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

    // Section Observer using IntersectionObserver
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

    const observer = new IntersectionObserver(
      observerCallback,
      observerOptions,
    );
    const sections = [
      "home",
      "about",
      "skills",
      "experience",
      "projects",
      "contact",
    ];
    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseover", handleMouseOver);
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Initialize Lenis Smooth Scrolling
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
      wheelMultiplier: 1.0,
      touchMultiplier: 2.0,
    });

    // Synchronize Lenis scroll updates with GSAP ScrollTrigger
    lenis.on("scroll", ScrollTrigger.update);

    // Synchronize Lenis RAF with GSAP Ticker for smooth frame rendering
    const updateTicker = (time: number) => {
      lenis.raf(time * 1000);
    };

    gsap.ticker.add(updateTicker);
    gsap.ticker.lagSmoothing(0);

    // 1. Initial Page Load Animation for Hero Banner section
    const heroBadge = document.querySelector("#home .font-mono");
    const heroTitle = document.querySelector("#home h2");
    const heroText = document.querySelector("#home p");
    const heroButtons = document.querySelectorAll(
      "#home .flex-wrap a, #home .flex a",
    );
    const heroSocials = document.querySelectorAll("#home .border-t a");

    const heroTimeline = gsap.timeline({ defaults: { ease: "power3.out" } });

    if (heroBadge) {
      heroTimeline.fromTo(
        heroBadge,
        { opacity: 0, y: -20, x: -10 },
        { opacity: 1, y: 0, x: 0, duration: 0.8 },
      );
    }

    if (heroTitle) {
      heroTimeline.fromTo(
        heroTitle,
        { opacity: 0, y: 50, rotateX: -35, transformOrigin: "50% 0%" },
        { opacity: 1, y: 0, rotateX: 0, duration: 1.1, ease: "power4.out" },
        "-=0.5",
      );
    }

    if (heroText) {
      heroTimeline.fromTo(
        heroText,
        { opacity: 0, y: 25 },
        { opacity: 1, y: 0, duration: 0.9 },
        "-=0.7",
      );
    }

    if (heroButtons.length > 0) {
      heroTimeline.fromTo(
        heroButtons,
        { opacity: 0, scale: 0.88, y: 20 },
        {
          opacity: 1,
          scale: 1,
          y: 0,
          duration: 0.7,
          ease: "back.out(1.6)",
          stagger: 0.12,
        },
        "-=0.5",
      );
    }

    if (heroSocials.length > 0) {
      heroTimeline.fromTo(
        heroSocials,
        { opacity: 0, y: 15 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.08,
        },
        "-=0.3",
      );
    }

    // 2. High-Impact Alternating Scroll Entrance Animation for Every Section (Left & Right)
    const nonHomeSections = Array.from(
      document.querySelectorAll("section"),
    ).filter((sec) => sec.id !== "home");

    nonHomeSections.forEach((sec, idx) => {
      const isLeft = idx % 2 === 0;
      const startX = isLeft ? -150 : 150; // Alternates coming from Left (-150px) vs Right (+150px)
      const startRotateY = isLeft ? -25 : 25; // 3D perspective rotation tilt
      const startRotateZ = isLeft ? -4 : 4;

      const secTl = gsap.timeline({
        scrollTrigger: {
          trigger: sec,
          start: "top 85%",
          toggleActions: "play none none none",
        },
      });

      // Overall section wrapper entrance: Slides in dynamically from alternating side with 3D tilt
      secTl.fromTo(
        sec,
        {
          opacity: 0,
          x: startX,
          y: 40,
          rotateY: startRotateY,
          rotateZ: startRotateZ,
          scale: 0.9,
          transformPerspective: 1200,
        },
        {
          opacity: 1,
          x: 0,
          y: 0,
          rotateY: 0,
          rotateZ: 0,
          scale: 1,
          duration: 1.1,
          ease: "power4.out",
        },
      );

      const headingBadge = sec.querySelector("span.uppercase");
      const headingTitle = sec.querySelector("h3");
      const subText = sec.querySelector("p");

      // Heading Badge entrance
      if (headingBadge) {
        secTl.fromTo(
          headingBadge,
          { opacity: 0, x: isLeft ? -40 : 40, scale: 0.8 },
          {
            opacity: 1,
            x: 0,
            scale: 1,
            duration: 0.7,
            ease: "back.out(1.6)",
          },
          "-=0.8",
        );
      }

      // Section Title entrance with 3D rotate
      if (headingTitle) {
        secTl.fromTo(
          headingTitle,
          { opacity: 0, y: 30, rotateX: -25 },
          {
            opacity: 1,
            y: 0,
            rotateX: 0,
            duration: 0.8,
            ease: "power3.out",
          },
          "-=0.6",
        );
      }

      // Subtitle / description text
      if (subText) {
        secTl.fromTo(
          subText,
          { opacity: 0, y: 15 },
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            ease: "power2.out",
          },
          "-=0.5",
        );
      }

      // Staggered reveal of section cards coming in from alternating side
      const sectionCards = sec.querySelectorAll(
        ".glass-panel, .border-dashed",
      );
      if (sectionCards.length > 0) {
        secTl.fromTo(
          sectionCards,
          {
            opacity: 0,
            x: isLeft ? -80 : 80,
            y: 35,
            rotateY: isLeft ? -15 : 15,
            scale: 0.9,
          },
          {
            opacity: 1,
            x: 0,
            y: 0,
            rotateY: 0,
            scale: 1,
            duration: 0.9,
            ease: "back.out(1.3)",
            stagger: 0.15,
          },
          "-=0.4",
        );
      }
    });

    // Parallax text movement in background for projects section
    const projectsSec = document.querySelector("#projects") as HTMLElement;
    const bgText = document.querySelector(".projects-bg-text") as HTMLElement;
    if (projectsSec && bgText) {
      gsap.fromTo(
        bgText,
        { x: "15%" },
        {
          x: "-15%",
          ease: "none",
          scrollTrigger: {
            trigger: projectsSec,
            start: "top bottom",
            end: "bottom top",
            scrub: 1.5,
          },
        },
      );
    }

    // 4. Interactive 3D Parallax Card Tilt Effect on Mouse Hover (Hard level, attracts people)
    const hoverCards = document.querySelectorAll(
      "main .glass-panel, main .border-dashed",
    );
    const cleanupFns: Array<() => void> = [];

    hoverCards.forEach((card) => {
      const htmlCard = card as HTMLElement;

      // Setup default transformation states
      gsap.set(htmlCard, {
        transformStyle: "preserve-3d",
        transformPerspective: 1000,
      });

      const handleMouseMove = (e: MouseEvent) => {
        const rect = htmlCard.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const xc = rect.width / 2;
        const yc = rect.height / 2;

        // Tilt range max 10 degrees
        const angleX = (-(y - yc) / yc) * 10;
        const angleY = ((x - xc) / xc) * 10;

        gsap.to(htmlCard, {
          rotateX: angleX,
          rotateY: angleY,
          scale: 1.02,
          duration: 0.35,
          ease: "power2.out",
          overwrite: "auto",
        });

        // Layered Parallax depth shifting inside the card
        const icon = htmlCard.querySelector("svg, span.uppercase");
        const title = htmlCard.querySelector("h3, h5");

        if (icon) {
          gsap.to(icon, {
            x: ((x - xc) / xc) * 6,
            y: ((y - yc) / yc) * 6,
            z: 15,
            duration: 0.35,
            ease: "power2.out",
            overwrite: "auto",
          });
        }
        if (title) {
          gsap.to(title, {
            x: ((x - xc) / xc) * 4,
            y: ((y - yc) / yc) * 4,
            z: 10,
            duration: 0.35,
            ease: "power2.out",
            overwrite: "auto",
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
          overwrite: "auto",
        });

        const icon = htmlCard.querySelector("svg, span.uppercase");
        const title = htmlCard.querySelector("h3, h5");
        if (icon)
          gsap.to(icon, {
            x: 0,
            y: 0,
            z: 0,
            duration: 0.5,
            ease: "power2.out",
            overwrite: "auto",
          });
        if (title)
          gsap.to(title, {
            x: 0,
            y: 0,
            z: 0,
            duration: 0.5,
            ease: "power2.out",
            overwrite: "auto",
          });
      };

      htmlCard.addEventListener("mousemove", handleMouseMove);
      htmlCard.addEventListener("mouseleave", handleMouseLeave);

      cleanupFns.push(() => {
        htmlCard.removeEventListener("mousemove", handleMouseMove);
        htmlCard.removeEventListener("mouseleave", handleMouseLeave);
      });
    });

    return () => {
      gsap.ticker.remove(updateTicker);
      lenis.destroy();
      ScrollTrigger.getAll().forEach((trigger: { kill: () => void }) =>
        trigger.kill(),
      );
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

      <Navbar activeSection={activeSection} />

      {/* Main Content Layout */}
      <main className="max-w-6xl mx-auto px-6 md:px-12 py-12 block space-y-32">
        {/* Section 1: Hero Section */}
        <section
          id="home"
          className="min-h-[80vh] flex flex-col justify-center items-start pt-24 relative"
        >
          <div className="flex flex-col gap-4 max-w-3xl relative z-10">
            <div className="font-mono text-xs text-purple-accent uppercase tracking-widest flex items-center gap-2">
              <span className="w-1 h-3 bg-purple-accent inline-block" />
              FULL STACK DEVELOPER
            </div>

            <h2 className="text-4xl md:text-7xl font-extrabold tracking-tight text-zinc-950 dark:text-white leading-none">
              Engineering <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-accent to-purple-accent text-glow-cyan">
                Scalable Architectures
              </span>
            </h2>

            <p className="text-zinc-600 dark:text-zinc-400 font-light text-base md:text-lg leading-relaxed mt-4 max-w-2xl">
              I engineer high-performance full-stack web applications with
              low-latency APIs and responsive interfaces. Applying an analytical
              economics framework, I optimize state management, rendering
              pipelines, and data storage.
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
                href="https://drive.google.com/file/d/1qoQWwNiDSKHdXK7sBPPWGlc4OEBquKRZ/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="py-3 px-6 rounded-xl bg-emerald-600/10 hover:bg-emerald-600/20 border border-emerald-500/25 hover:border-emerald-500/50 text-emerald-400 font-mono text-xs tracking-wider uppercase transition-all flex items-center gap-2 cursor-pointer"
              >
                <FileText className="w-4 h-4" />
                VIEW RESUME
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
              href="https://github.com/rubel6610"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 text-xs font-mono text-zinc-500 hover:text-cyan-accent transition-colors"
            >
              <Github className="w-4 h-4" /> github
            </a>
            <a
              href="https://www.linkedin.com/in/rubelhosen13/"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 text-xs font-mono text-zinc-500 hover:text-cyan-accent transition-colors"
            >
              <Linkedin className="w-4 h-4" /> linkedin
            </a>
            <a
              href="https://www.facebook.com/arfanahmedrubel10"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 text-xs font-mono text-zinc-500 hover:text-cyan-accent transition-colors"
            >
              <Facebook className="w-4 h-4" /> facebook
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
                  PROFILE OVERVIEW
                </span>
                <h3 className="text-3xl font-extrabold tracking-tight text-white">
                  Bridging Economics with Systems Engineering
                </h3>
              </div>

              <div className="text-zinc-400 font-light text-sm leading-6 flex flex-col gap-4">
                <p>
                  I am a passionate Full Stack Developer dedicated to
                  engineering clean frontend interfaces and robust backend
                  architectures. With a strong commitment to logic and
                  structured design, I translate ideas into low-latency,
                  scalable web experiences.
                </p>
                <p>
                  During my role at{" "}
                  <strong className="text-white">Ilmify Tech Agency</strong>, I
                  contributed to front-facing layouts, design implementation,
                  and reactive states. My core training through the level 1 &
                  level 2 web development bootcamps at{" "}
                  <strong className="text-white">Programming Hero</strong>,
                  combined with leadership roles in team challenges, has built
                  my capacity to deliver complete, optimized systems.
                </p>
                <p>
                  Additionally, my B.S.S. studies in Economics at National
                  University provide me with a distinct analytical
                  framework—allowing me to treat data indexing, client-server
                  concurrency, and memory caching as systems optimization
                  opportunities.
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
                    <span className="text-white font-semibold">
                      RUBEL_NU_03
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span>JOB_ROLE:</span>
                    <span className="text-cyan-accent">
                      FRONTEND_DEV@ILMIFY
                    </span>
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
                TECH STACK MATRIX
              </span>
              <h3 className="text-3xl font-extrabold tracking-tight text-white">
                Skills & Technologies
              </h3>
              <p className="text-sm text-zinc-400 font-light mt-2 max-w-xl">
                A structured categorization of full-stack tools, backend
                libraries, and development environments.
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
                CAREER LEDGER
              </span>
              <h3 className="text-3xl font-extrabold tracking-tight text-white">
                Experience & Achievements
              </h3>
              <p className="text-sm text-zinc-400 font-light mt-2 max-w-xl">
                Highlighting professional software development work, team
                leadership accomplishments, and academic background.
              </p>
            </div>

            <ExperienceEducation />
          </div>
        </section>

        {/* Section 5: Projects */}
        <section
          id="projects"
          className="min-h-screen flex flex-col justify-center relative overflow-hidden py-16 scroll-mt-16"
        >
          {/* Giant Parallax Background Text */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden z-0 opacity-[0.03] dark:opacity-[0.02]">
            <h2 className="projects-bg-text text-[20vw] font-extrabold font-mono tracking-widest uppercase text-white select-none whitespace-nowrap">
              PROJECTS
            </h2>
          </div>

          <div className="max-w-6xl w-full mx-auto px-6 md:px-12 relative z-10 flex flex-col gap-6">
            <div>
              <span className="text-xs font-mono text-cyan-accent uppercase tracking-widest block mb-2">
                DEPLOYED APPLICATIONS
              </span>
              <h3 className="text-3xl font-extrabold tracking-tight text-white">
                Project Catalog Showcase
              </h3>
              <p className="text-sm text-zinc-400 font-light mt-1 max-w-xl">
                A catalog of full-stack platforms and web applications engineered with production-ready architectures.
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
                INITIATE TCP HANDSHAKE
              </span>
              <h3 className="text-3xl font-extrabold tracking-tight text-white">
                Get In Touch
              </h3>
              <p className="text-sm text-zinc-400 font-light mt-2 max-w-xl">
                Submit an HTTP POST request payload. The contact details are
                parsed, written to a mock SQL schema, and outputted live on
                screen.
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
        <p>
          &copy; {new Date().getFullYear()} RUBEL. ALL CHANNELS OPERATIONAL.
        </p>
        <p className="text-[10px] text-zinc-600 mt-2 tracking-widest uppercase">
          Economics optimization &#215; Full-Stack engineering
        </p>
      </footer>
    </div>
  );
}
