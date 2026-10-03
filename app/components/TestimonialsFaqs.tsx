"use client";

import React, { useState } from "react";
import { Star, ChevronDown, MessageSquareQuote, HelpCircle } from "lucide-react";

interface Testimonial {
  quote: string;
  name: string;
  role: string;
  rating: number;
}

const testimonials: Testimonial[] = [
  {
    quote:
      "Rubel led the development of our full-stack project with remarkable clarity, agile discipline, and technical ownership. His architectural choices and leadership propelled our team to the Top 3 ranking.",
    name: "EndGame Sprint Mentor",
    role: "Senior Engineering Lead, Programming Hero",
    rating: 5,
  },
  {
    quote:
      "Exceptional front-to-back engineering capabilities. Rubel crafts clean, responsive React & Next.js user interfaces backed by performant APIs. A pleasure to collaborate with.",
    name: "Agency Colleague",
    role: "UI/UX Designer, Ilmify Tech Agency",
    rating: 5,
  },
  {
    quote:
      "Rubel builds clean, robust full-stack applications with high performance. His problem-solving approach and dedication to software quality make him a standout developer.",
    name: "Engineering Colleague",
    role: "Full Stack Developer",
    rating: 5,
  },
];

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: "What is your primary tech stack for building web applications?",
    answer:
      "I specialize in Next.js 15/16, React 19, TypeScript, Tailwind CSS, Node.js, Express, PostgreSQL, MongoDB, Prisma ORM, Redis, and WebSockets (Socket.IO). I focus on type-safety, high performance, and SEO optimization.",
  },
  {
    question: "How did you learn Full Stack Web Development?",
    answer:
      "I learned full stack web development through Programming Hero's intensive Level 1 and Level 2 Bootcamps, mastering modern frontend and backend architectures, databases, and deployment. I also led my developer team to a Top 3 rank during the EndGame phase.",
  },
  {
    question: "What is your availability for freelance contracts or full-time roles?",
    answer:
      "I am available for full-time frontend/full-stack developer roles, contract engineering, and client projects worldwide. I work smoothly across global timezones with asynchronous communication and agile sprint updates.",
  },
  {
    question: "What is your typical project delivery timeline?",
    answer:
      "Timelines depend on scope. Full-stack MVPs and landing applications are delivered within 1 to 3 weeks, while complex platforms with custom dashboards, authentication, and role hierarchies typically take 3 to 6 weeks.",
  },
  {
    question: "Do you provide code repositories, documentation, and post-launch support?",
    answer:
      "Yes! Every project includes a clean GitHub repository with descriptive commits, environment configuration templates, API documentation, and post-launch deployment support.",
  },
];

export default function TestimonialsFaqs() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  return (
    <div className="w-full flex flex-col gap-20">
      {/* Testimonials Section */}
      <div>
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="section-sub-title">Testimonials & Feedback</span>
          <h2 className="text-3xl md:text-5xl font-semibold text-slate-900 tracking-tight">
            Real Feedback & Endorsements
          </h2>
          <p className="text-sm text-slate-600 mt-3 font-normal">
            Reflections from team members, project mentors, and collaborating engineers.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((test, idx) => (
            <div
              key={idx}
              className="box-border-gradiant p-8 bg-white flex flex-col justify-between hover:shadow-xl transition-all"
            >
              <div>
                <div className="flex items-center gap-1 text-amber-400 mb-4">
                  {[...Array(test.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400" />
                  ))}
                </div>
                <p className="text-sm text-slate-700 leading-relaxed font-normal italic mb-6">
                  &ldquo;{test.quote}&rdquo;
                </p>
              </div>

              <div className="pt-4 border-t border-slate-100 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#fff2ee] text-[#fb3602] flex items-center justify-center font-semibold text-sm">
                  <MessageSquareQuote className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-slate-900">{test.name}</h4>
                  <p className="text-xs text-slate-500 m-0">{test.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* FAQs Accordion Section */}
      <div id="faqs" className="scroll-mt-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Title & CTA (5 Cols) */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <div>
              <span className="section-sub-title">Frequently Asked Questions</span>
              <h2 className="text-3xl md:text-5xl font-semibold text-slate-900 tracking-tight leading-tight">
                Clear answers about my engineering process
              </h2>
              <p className="text-sm text-slate-600 mt-4 leading-relaxed font-normal">
                Everything you need to know about starting a project, technical stack choices, communication workflows, and code delivery.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#fff7f4] border border-[#ffded6] flex flex-col gap-3">
              <h4 className="text-base font-semibold text-slate-900">Have a custom question?</h4>
              <p className="text-xs text-slate-600 font-normal m-0">
                Feel free to drop an inquiry in the contact terminal below. I respond within 24 hours.
              </p>
              <a href="#contact" className="btn-default w-fit mt-2">
                Initiate Conversation
              </a>
            </div>
          </div>

          {/* Right Accordion List (7 Cols) */}
          <div className="lg:col-span-7 flex flex-col gap-4">
            {faqs.map((faq, fIdx) => {
              const isOpen = openFaqIndex === fIdx;
              return (
                <div
                  key={fIdx}
                  className={`box-border-gradiant overflow-hidden transition-all duration-300 ${
                    isOpen ? "border-[#fb3602]/40 shadow-md" : "border-slate-200"
                  }`}
                >
                  <button
                    onClick={() => toggleFaq(fIdx)}
                    className="w-full p-6 text-left flex items-center justify-between gap-4 cursor-pointer"
                  >
                    <span className="font-semibold text-base md:text-lg text-slate-900">
                      {faq.question}
                    </span>
                    <div
                      className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-transform duration-300 ${
                        isOpen
                          ? "bg-[#fb3602] text-white rotate-180"
                          : "bg-slate-100 text-slate-700"
                      }`}
                    >
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </button>

                  {isOpen && (
                    <div className="px-6 pb-6 pt-0 text-sm text-slate-600 leading-relaxed font-normal border-t border-slate-100 mt-2 pt-4">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
