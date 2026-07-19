"use client";

import { useState, useEffect } from "react";
import { Menu, X, FileText } from "lucide-react";

interface NavbarProps {
  activeSection: string;
}

export default function Navbar({ activeSection }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { id: "home", label: "HOME" },
    { id: "about", label: "ABOUT" },
    { id: "skills", label: "SKILLS" },
    { id: "experience", label: "EXPERIENCE" },
    { id: "projects", label: "PROJECTS" },
    { id: "contact", label: "CONTACT" },
  ];

  return (
    <>
      {/* Redesigned Fixed full-width Cyber Header */}
      <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 border-b ${
        scrolled 
          ? "bg-[#040408]/90 backdrop-blur-md border-white/5 py-3.5 shadow-[0_10px_30px_rgba(0,0,0,0.8)] shadow-cyan-accent/[0.02]" 
          : "bg-transparent border-transparent py-5"
      }`}>
        <div className="max-w-6xl mx-auto px-6 md:px-12 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="relative w-8 h-8 rounded-lg overflow-hidden border border-purple-accent/30 bg-black flex items-center justify-center font-mono font-bold text-cyan-accent text-sm shadow-glow-cyan">
              R_
            </div>
            <div>
              <h1 className="text-sm font-bold font-mono tracking-wider text-white">RUBEL</h1>
        
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className={`relative group text-xs font-mono tracking-widest py-1.5 transition-all ${
                  activeSection === item.id
                    ? "text-cyan-accent text-glow-cyan font-semibold"
                    : "text-zinc-500 hover:text-white"
                }`}
              >
                {item.label}
                <span className={`absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-cyan-accent to-purple-accent rounded-full transition-all duration-300 ${
                  activeSection === item.id ? "opacity-100 scale-x-100" : "opacity-0 scale-x-0 group-hover:opacity-50 group-hover:scale-x-50"
                }`} />
              </a>
            ))}
          </nav>

          {/* Global Developer Status Badge & Action Menu */}
          <div className="flex items-center gap-3">
            <a
              href="https://drive.google.com/file/d/1qoQWwNiDSKHdXK7sBPPWGlc4OEBquKRZ/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-500/10 border border-emerald-500/20 hover:border-emerald-400/40 text-[10px] font-mono tracking-widest text-emerald-400 hover:text-white transition-all cursor-pointer"
            >
              <FileText className="w-3.5 h-3.5" />
              VIEW_RESUME
            </a>

            <a
              href="#contact"
              className="hidden sm:inline-block px-4 py-1.5 rounded-lg bg-white/5 border border-white/10 hover:border-purple-accent/40 text-[10px] font-mono tracking-widest text-zinc-300 hover:text-white transition-all cursor-pointer"
            >
              PING_SERVER
            </a>

            {/* Mobile hamburger menu toggle */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="block md:hidden p-2 rounded-lg bg-white/5 border border-white/10 text-zinc-300 hover:text-cyan-accent hover:border-cyan-accent/40 transition-all cursor-pointer"
              title="Toggle Menu"
            >
              {isMobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Dropdown Menu */}
      <div className={`md:hidden fixed left-0 right-0 z-40 border-b border-white/5 bg-[#040408]/95 backdrop-blur-xl px-6 py-6 flex flex-col gap-4 shadow-[0_10px_30px_rgba(0,0,0,0.8)] transition-all duration-300 ease-in-out ${
        scrolled ? "top-[58px]" : "top-[78px]"
      } ${
        isMobileMenuOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4 pointer-events-none"
      }`}>
        {navItems.map((item) => (
          <a
            key={item.id}
            href={`#${item.id}`}
            onClick={() => setIsMobileMenuOpen(false)}
            className={`text-sm font-mono tracking-widest py-2.5 border-b border-white/[0.02] transition-all flex justify-between items-center ${
              activeSection === item.id
                ? "text-cyan-accent font-semibold pl-2"
                : "text-zinc-400 hover:text-white"
            }`}
          >
            <span>{item.label}</span>
            {activeSection === item.id && <span className="w-1.5 h-1.5 rounded-full bg-cyan-accent shadow-glow-cyan" />}
          </a>
        ))}
        
        <div className="flex items-center justify-between mt-4 pt-4 border-t border-white/5">
          <a
            href="https://drive.google.com/file/d/1qoQWwNiDSKHdXK7sBPPWGlc4OEBquKRZ/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setIsMobileMenuOpen(false)}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-500/10 border border-emerald-500/20 hover:border-emerald-400/40 text-[10px] font-mono tracking-widest text-emerald-400 hover:text-white transition-all cursor-pointer"
          >
            <FileText className="w-3.5 h-3.5" />
            VIEW_RESUME
          </a>
          <a
            href="#contact"
            onClick={() => setIsMobileMenuOpen(false)}
            className="px-4 py-1.5 rounded-lg bg-white/5 border border-white/10 hover:border-purple-accent/40 text-[10px] font-mono tracking-widest text-zinc-300 hover:text-white transition-all text-center"
          >
            PING_SERVER
          </a>
        </div>
      </div>
    </>
  );
}
