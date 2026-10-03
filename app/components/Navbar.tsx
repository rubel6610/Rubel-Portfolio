"use client";

import { useState, useEffect } from "react";
import { Menu, X, FileText, ArrowRight } from "lucide-react";

interface NavbarProps {
  activeSection: string;
}

export default function Navbar({ activeSection }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "services", label: "Services" },
    { id: "skills", label: "Toolkit" },
    { id: "experience", label: "Experience" },
    { id: "projects", label: "Projects" },
    { id: "faqs", label: "FAQs" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <>
      {/* Floating Header */}
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 px-3 sm:px-6 md:px-8 ${
          scrolled ? "pt-2" : "pt-5 sm:pt-6"
        }`}
      >
        <div
          className={`max-w-7xl mx-auto rounded-2xl transition-all duration-300 flex items-center justify-between border ${
            scrolled
              ? "py-2 px-4 sm:px-5 bg-white/95 backdrop-blur-xl border-slate-200 shadow-[0_8px_25px_-8px_rgba(15,23,42,0.12)]"
              : "py-3.5 px-5 sm:px-6 bg-white/80 backdrop-blur-md border-slate-200/70 shadow-sm"
          }`}
        >
          {/* Brand Logo */}
          <a href="#home" className="flex items-center gap-2.5 group">
            <div
              className={`rounded-xl bg-slate-900 flex items-center justify-center font-semibold text-white tracking-tight group-hover:bg-[#fb3602] transition-all shadow-sm ${
                scrolled ? "w-8 h-8 text-sm" : "w-10 h-10 text-base"
              }`}
            >
              R<span className="text-[#fb3602] group-hover:text-white transition-colors">.</span>
            </div>
            <div className="flex flex-col">
              <span
                className={`font-semibold tracking-tight text-slate-900 leading-tight font-sans transition-all ${
                  scrolled ? "text-base" : "text-lg"
                }`}
              >
                RUBEL<span className="text-[#fb3602]">.</span>
              </span>
              <span
                className={`uppercase tracking-widest text-slate-500 font-medium transition-all ${
                  scrolled ? "text-[9px]" : "text-[10px]"
                }`}
              >
                Full Stack Dev
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-1.5">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className={`rounded-xl font-semibold transition-all ${
                  scrolled ? "px-3 py-1.5 text-xs" : "px-3.5 py-2 text-sm"
                } ${
                  activeSection === item.id
                    ? "text-[#fb3602] bg-[#fff3ef]"
                    : "text-slate-600 hover:text-slate-950 hover:bg-slate-100/80"
                }`}
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Right Action Buttons */}
          <div className="hidden sm:flex items-center gap-2.5">
            <a
              href="https://drive.google.com/file/d/1qoQWwNiDSKHdXK7sBPPWGlc4OEBquKRZ/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className={`inline-flex items-center gap-1.5 rounded-xl bg-slate-100 hover:bg-slate-200/80 text-slate-700 font-semibold uppercase tracking-wider transition-all ${
                scrolled ? "px-3 py-1.5 text-[11px]" : "px-3.5 py-2 text-xs"
              }`}
            >
              <FileText className="w-3.5 h-3.5 text-[#fb3602]" />
              <span>Resume</span>
            </a>

            {/* Clear, prominent Hire Me button with Arrow */}
            <a
              href="#contact"
              className={`group inline-flex items-center gap-1.5 rounded-xl bg-[#fb3602] hover:bg-[#e02f00] text-white font-semibold uppercase tracking-wider transition-all shadow-sm hover:shadow-md hover:shadow-[#fb3602]/25 ${
                scrolled ? "py-1.5 px-4 text-xs" : "py-2.5 px-5 text-xs"
              }`}
            >
              <span>Hire Me</span>
              <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-1" />
            </a>
          </div>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`block lg:hidden rounded-xl bg-slate-100 border border-slate-200 text-slate-800 hover:text-[#fb3602] transition-all ${
              scrolled ? "p-1.5" : "p-2"
            }`}
            aria-label="Toggle Menu"
          >
            {isMobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </button>
        </div>
      </header>

      {/* Mobile Menu Dropdown */}
      <div
        className={`lg:hidden fixed left-4 right-4 z-40 rounded-2xl border border-slate-200 bg-white/95 backdrop-blur-2xl p-5 shadow-2xl transition-all duration-300 ${
          scrolled ? "top-[64px]" : "top-[88px]"
        } ${
          isMobileMenuOpen
            ? "opacity-100 translate-y-0 pointer-events-auto"
            : "opacity-0 -translate-y-4 pointer-events-none"
        }`}
      >
        <div className="flex flex-col gap-1.5">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={() => setIsMobileMenuOpen(false)}
              className={`px-3.5 py-2.5 rounded-xl text-sm font-semibold flex items-center justify-between transition-all ${
                activeSection === item.id
                  ? "bg-[#fff3ef] text-[#fb3602]"
                  : "text-slate-700 hover:bg-slate-100"
              }`}
            >
              <span>{item.label}</span>
              <ArrowRight className="w-4 h-4 text-slate-400" />
            </a>
          ))}
        </div>

        <div className="mt-4 pt-4 border-t border-slate-100 flex flex-col gap-2.5">
          <a
            href="https://drive.google.com/file/d/1qoQWwNiDSKHdXK7sBPPWGlc4OEBquKRZ/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setIsMobileMenuOpen(false)}
            className="w-full py-2.5 rounded-xl bg-slate-100 text-center font-semibold text-xs uppercase tracking-wider text-slate-800 flex items-center justify-center gap-2 hover:bg-slate-200 transition-colors"
          >
            <FileText className="w-4 h-4 text-[#fb3602]" />
            View Resume
          </a>
          <a
            href="#contact"
            onClick={() => setIsMobileMenuOpen(false)}
            className="w-full py-2.5 rounded-xl bg-[#fb3602] hover:bg-[#e02f00] text-white text-center font-semibold text-xs uppercase tracking-wider flex items-center justify-center gap-1.5 shadow-sm transition-all"
          >
            <span>Hire Me</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </>
  );
}
