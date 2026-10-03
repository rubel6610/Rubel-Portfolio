"use client";

import React, { useState } from "react";
import {
  Send,
  CheckCircle2,
  AlertCircle,
  Mail,
  MapPin,
  Clock,
  Loader2,
} from "lucide-react";
import { Github, Linkedin, Facebook } from "./Icons";

export default function ContactForm() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !message) return;

    const fullName = `${firstName} ${lastName}`.trim() || firstName || "Website Visitor";

    setStatus("sending");
    setErrorMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name: fullName, email, subject, message }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Failed to send message. Please try again.");
      }

      setStatus("success");
      // Reset form fields
      setFirstName("");
      setLastName("");
      setEmail("");
      setSubject("");
      setMessage("");
    } catch (err: unknown) {
      setStatus("error");
      const errStr =
        err instanceof Error ? err.message : "Unable to send message right now.";
      setErrorMessage(errStr);
    }
  };

  return (
    <div className="w-full">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
        {/* Left Column: Contact Details & Info (5 Cols) */}
        <div className="lg:col-span-5 flex flex-col gap-8">
          <div>
            <span className="section-sub-title">Contact Me</span>
            <h2 className="text-3xl md:text-5xl font-semibold text-slate-900 tracking-tight leading-tight mt-1">
              Let&apos;s work together &amp; build something great
            </h2>
            <p className="text-sm md:text-base text-slate-600 mt-4 leading-relaxed font-normal">
              Whether you have a project in mind, a full-time role, or an engineering inquiry, feel free to reach out. I would love to hear from you.
            </p>
          </div>

          {/* Contact Details List */}
          <div className="flex flex-col gap-4">
            <div className="box-border-gradiant p-5 bg-white flex items-center gap-4 shadow-2xs">
              <div className="w-12 h-12 rounded-2xl bg-[#fff2ee] flex items-center justify-center icon-box-bg-circle shrink-0">
                <Mail className="w-5 h-5 text-[#fb3602]" />
              </div>
              <div>
                <span className="text-[11px] font-semibold uppercase tracking-wider text-slate-400">Email Address</span>
                <h4 className="text-sm md:text-base font-semibold text-slate-900">
                  <a href="mailto:rubelhosen1310@gmail.com" className="hover:text-[#fb3602] transition-colors">
                    rubelhosen1310@gmail.com
                  </a>
                </h4>
              </div>
            </div>

            <div className="box-border-gradiant p-5 bg-white flex items-center gap-4 shadow-2xs">
              <div className="w-12 h-12 rounded-2xl bg-[#fff2ee] flex items-center justify-center icon-box-bg-circle shrink-0">
                <MapPin className="w-5 h-5 text-[#fb3602]" />
              </div>
              <div>
                <span className="text-[11px] font-semibold uppercase tracking-wider text-slate-400">Location</span>
                <h4 className="text-sm md:text-base font-semibold text-slate-900">
                  Dhaka, Bangladesh (Available for Remote Work)
                </h4>
              </div>
            </div>

            <div className="box-border-gradiant p-5 bg-white flex items-center gap-4 shadow-2xs">
              <div className="w-12 h-12 rounded-2xl bg-[#fff2ee] flex items-center justify-center icon-box-bg-circle shrink-0">
                <Clock className="w-5 h-5 text-[#fb3602]" />
              </div>
              <div>
                <span className="text-[11px] font-semibold uppercase tracking-wider text-slate-400">Availability</span>
                <h4 className="text-sm md:text-base font-semibold text-slate-900">
                  Open for Full-Time &amp; Contract Roles
                </h4>
              </div>
            </div>
          </div>

          {/* Social Links Bar */}
          <div className="pt-2 flex items-center gap-3">
            <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider mr-1">Connect:</span>
            <a
              href="https://github.com/rubel6610"
              target="_blank"
              rel="noreferrer"
              className="w-10 h-10 rounded-xl border border-slate-200 bg-white hover:bg-[#fb3602] hover:text-white hover:border-[#fb3602] text-slate-700 flex items-center justify-center transition-all shadow-xs"
              title="GitHub"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href="https://www.linkedin.com/in/rubelhosen13/"
              target="_blank"
              rel="noreferrer"
              className="w-10 h-10 rounded-xl border border-slate-200 bg-white hover:bg-[#fb3602] hover:text-white hover:border-[#fb3602] text-slate-700 flex items-center justify-center transition-all shadow-xs"
              title="LinkedIn"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href="https://www.facebook.com/arfanahmedrubel10"
              target="_blank"
              rel="noreferrer"
              className="w-10 h-10 rounded-xl border border-slate-200 bg-white hover:bg-[#fb3602] hover:text-white hover:border-[#fb3602] text-slate-700 flex items-center justify-center transition-all shadow-xs"
              title="Facebook"
            >
              <Facebook className="w-4 h-4" />
            </a>
            <a
              href="mailto:rubelhosen1310@gmail.com"
              className="w-10 h-10 rounded-xl border border-slate-200 bg-white hover:bg-[#fb3602] hover:text-white hover:border-[#fb3602] text-slate-700 flex items-center justify-center transition-all shadow-xs"
              title="Email"
            >
              <Mail className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Right Column: Clean, Friendly Contact Form (7 Cols) */}
        <div className="lg:col-span-7">
          <div className="box-border-gradiant p-8 sm:p-10 bg-white shadow-xl">
            <div className="mb-6">
              <h3 className="text-2xl font-semibold text-slate-900 tracking-tight">Send a Message</h3>
              <p className="text-xs sm:text-sm text-slate-500 mt-1 font-normal">
                Fill in the form below and I will get back to you within 24 hours.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="fname" className="text-xs font-semibold text-slate-700">
                    First Name <span className="text-[#fb3602]">*</span>
                  </label>
                  <input
                    id="fname"
                    type="text"
                    required
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    placeholder="Your first name"
                    className="w-full bg-slate-50 border border-slate-200 focus:border-[#fb3602] focus:bg-white rounded-xl px-4 py-3 text-sm text-slate-900 outline-none transition-all placeholder:text-slate-400"
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label htmlFor="lname" className="text-xs font-semibold text-slate-700">
                    Last Name
                  </label>
                  <input
                    id="lname"
                    type="text"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    placeholder="Your last name"
                    className="w-full bg-slate-50 border border-slate-200 focus:border-[#fb3602] focus:bg-white rounded-xl px-4 py-3 text-sm text-slate-900 outline-none transition-all placeholder:text-slate-400"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="email" className="text-xs font-semibold text-slate-700">
                    Your Email <span className="text-[#fb3602]">*</span>
                  </label>
                  <input
                    id="email"
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="name@example.com"
                    className="w-full bg-slate-50 border border-slate-200 focus:border-[#fb3602] focus:bg-white rounded-xl px-4 py-3 text-sm text-slate-900 outline-none transition-all placeholder:text-slate-400"
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label htmlFor="subject" className="text-xs font-semibold text-slate-700">
                    Subject
                  </label>
                  <input
                    id="subject"
                    type="text"
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    placeholder="e.g. Project Inquiry / Job Opportunity"
                    className="w-full bg-slate-50 border border-slate-200 focus:border-[#fb3602] focus:bg-white rounded-xl px-4 py-3 text-sm text-slate-900 outline-none transition-all placeholder:text-slate-400"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-1.5">
                <label htmlFor="message" className="text-xs font-semibold text-slate-700">
                  Your Message <span className="text-[#fb3602]">*</span>
                </label>
                <textarea
                  id="message"
                  required
                  rows={5}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="How can I help you? Tell me about your project, timeline, or inquiry..."
                  className="w-full bg-slate-50 border border-slate-200 focus:border-[#fb3602] focus:bg-white rounded-xl px-4 py-3 text-sm text-slate-900 outline-none transition-all placeholder:text-slate-400 resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={status === "sending"}
                className="btn-default no-arrow w-full justify-center !py-4 !text-sm !font-semibold uppercase mt-2 shadow-sm disabled:opacity-75 cursor-pointer"
              >
                {status === "sending" ? (
                  <span className="flex items-center gap-2">
                    <Loader2 className="w-4 h-4 animate-spin" />
                    Sending Message...
                  </span>
                ) : (
                  <span className="flex items-center gap-2">
                    Send Message
                    <Send className="w-4 h-4 ml-1" />
                  </span>
                )}
              </button>
            </form>

            {/* Clear, Friendly Success Alert */}
            {status === "success" && (
              <div className="mt-6 p-5 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-900 flex items-start gap-3.5 animate-fadeIn">
                <div className="w-8 h-8 rounded-xl bg-emerald-500 text-white flex items-center justify-center shrink-0 shadow-xs">
                  <CheckCircle2 className="w-5 h-5" />
                </div>
                <div>
                  <h5 className="text-sm font-semibold text-emerald-900">
                    Email Sent Successfully!
                  </h5>
                  <p className="text-xs text-emerald-700 mt-1 leading-relaxed">
                    Thank you for reaching out! Your message has been delivered to Rubel. I will get back to you as soon as possible.
                  </p>
                </div>
              </div>
            )}

            {/* Clear, Friendly Error Alert */}
            {status === "error" && (
              <div className="mt-6 p-5 rounded-2xl bg-red-50 border border-red-200 text-red-900 flex items-start gap-3.5 animate-fadeIn">
                <div className="w-8 h-8 rounded-xl bg-red-500 text-white flex items-center justify-center shrink-0 shadow-xs">
                  <AlertCircle className="w-5 h-5" />
                </div>
                <div>
                  <h5 className="text-sm font-semibold text-red-900">
                    Unable to Send Message
                  </h5>
                  <p className="text-xs text-red-700 mt-1 leading-relaxed">
                    {errorMessage || "Something went wrong. Please try again or send an email directly to"} <a href="mailto:rubelhosen1310@gmail.com" className="font-semibold underline">rubelhosen1310@gmail.com</a>.
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

