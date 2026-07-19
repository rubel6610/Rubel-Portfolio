"use client";

import React, { useState, useRef } from "react";
import { Send, Terminal, ShieldAlert, CheckCircle2, ChevronRight } from "lucide-react";

export default function ContactForm() {
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [consoleLogs, setConsoleLogs] = useState<string[]>([
    "// SYSTEM READY. Waiting for user interaction...",
    "// Target Endpoint: POST /api/contact",
    "// Database Adapter: PostgreSQL client pools status [OK]"
  ]);
  const [sqlQuery, setSqlQuery] = useState("");
  const [responsePayload, setResponsePayload] = useState<any>(null);
  
  const consoleBottomRef = useRef<HTMLDivElement>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !message) return;

    setStatus("sending");
    setSqlQuery("");
    setResponsePayload(null);
    
    // Initial request logs
    const initialReqLogs = [
      `>> EXECUTING FETCH: POST /api/contact`,
      `[CLIENT] Initiating connection handshake...`,
      `[CLIENT] Packing payload body (JSON stringify)...`,
      `[CLIENT] Sending headers: { 'Content-Type': 'application/json' }`,
      `[CLIENT] Dispatching network package. Waiting for gateway response...`
    ];
    setConsoleLogs(initialReqLogs);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, subject, message }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Server responded with an error");
      }

      setStatus("success");
      setSqlQuery(data.sqlQueryUsed || "");
      setResponsePayload({
        success: data.success,
        messageId: data.messageId,
        latencyMs: data.latencyMs,
        timestamp: data.timestamp
      });
      
      // Feed server logs directly into console!
      if (data.serverLogs && Array.isArray(data.serverLogs)) {
        setConsoleLogs((prev) => [...prev, ...data.serverLogs]);
      }

      // Reset form
      setEmail("");
      setSubject("");
      setMessage("");
    } catch (err: any) {
      setStatus("error");
      const errStr = err.message || "Network request failed";
      setErrorMessage(errStr);
      setConsoleLogs((prev) => [
        ...prev,
        `[CLIENT] [ERROR] Handshake failed or aborted!`,
        `[CLIENT] Exception: ${errStr}`
      ]);
    }
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 w-full">
      {/* Left Column: The Interactive Contact Form (5 Cols) */}
      <div className="lg:col-span-5 flex flex-col justify-between p-6 rounded-2xl glass-panel relative overflow-hidden">
        <div className="absolute top-0 left-0 w-24 h-24 bg-gradient-to-br from-purple-accent/15 to-transparent blur-2xl pointer-events-none" />
        
        <div>
          <h3 className="text-xl font-bold font-mono tracking-tight text-white mb-1.5">
            Contact rubel_server
          </h3>
          <p className="text-xs text-zinc-400 font-mono mb-6">
            Execute a client-server POST request payload.
          </p>

          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <div className="flex flex-col gap-1.5">
              <label htmlFor="email" className="text-[10px] font-mono uppercase tracking-wider text-zinc-400">
                Sender Email <span className="text-purple-accent">*</span>
              </label>
              <input
                id="email"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="recruiter@company.com"
                className="w-full bg-black/50 border border-white/5 focus:border-cyan-accent/50 rounded-xl px-4 py-3 text-sm font-mono text-white outline-none transition-all placeholder:text-zinc-600"
              />
            </div>

            <div className="flex flex-col gap-1.5">
              <label htmlFor="subject" className="text-[10px] font-mono uppercase tracking-wider text-zinc-400">
                Request Subject
              </label>
              <input
                id="subject"
                type="text"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                placeholder="Full Stack Opportunity"
                className="w-full bg-black/50 border border-white/5 focus:border-cyan-accent/50 rounded-xl px-4 py-3 text-sm font-mono text-white outline-none transition-all placeholder:text-zinc-600"
              />
            </div>

            <div className="flex flex-col gap-1.5">
              <label htmlFor="message" className="text-[10px] font-mono uppercase tracking-wider text-zinc-400">
                Message Body <span className="text-purple-accent">*</span>
              </label>
              <textarea
                id="message"
                required
                rows={4}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Describe your project, timeline, and stack requirements..."
                className="w-full bg-black/50 border border-white/5 focus:border-cyan-accent/50 rounded-xl px-4 py-3 text-sm font-mono text-white outline-none transition-all placeholder:text-zinc-600 resize-none"
              />
            </div>

            <button
              type="submit"
              disabled={status === "sending"}
              className="mt-2 w-full py-3.5 px-4 rounded-xl bg-gradient-to-r from-purple-accent to-cyan-accent hover:from-purple-500 hover:to-cyan-400 text-white font-mono font-medium text-xs tracking-widest uppercase transition-all shadow-glow-purple flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {status === "sending" ? (
                <>
                  <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  POSTING PAYLOAD...
                </>
              ) : (
                <>
                  <Send className="w-3.5 h-3.5" />
                  DISPATCH POST REQUEST
                </>
              )}
            </button>
          </form>
        </div>

        {/* Feedback Cards */}
        {status === "success" && (
          <div className="mt-4 p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono flex items-start gap-2.5">
            <CheckCircle2 className="w-4 h-4 mt-0.5 shrink-0" />
            <div>
              <div className="font-bold text-emerald-300">HTTP 200 OK</div>
              <p className="text-[11px] leading-5 text-zinc-300 mt-1">
                Your message successfully routed to Rubel's database. Read the server response in the console!
              </p>
            </div>
          </div>
        )}

        {status === "error" && (
          <div className="mt-4 p-4 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400 text-xs font-mono flex items-start gap-2.5">
            <ShieldAlert className="w-4 h-4 mt-0.5 shrink-0" />
            <div>
              <div className="font-bold text-red-300">REQUEST ERROR</div>
              <p className="text-[11px] leading-5 text-zinc-300 mt-1">{errorMessage}</p>
            </div>
          </div>
        )}
      </div>

      {/* Right Column: Server API Response Terminal (7 Cols) */}
      <div className="lg:col-span-7 flex flex-col h-[400px] lg:h-[450px]">
        <h4 className="text-xs font-mono tracking-widest text-zinc-400 uppercase font-semibold flex items-center gap-2 mb-2">
          <Terminal className="w-4 h-4 text-cyan-accent" /> API Handshake Console
        </h4>

        {/* Console Box */}
        <div className="flex-1 bg-black/90 border border-white/5 rounded-2xl p-5 overflow-y-auto font-mono text-xs leading-5 flex flex-col gap-2.5 shadow-inner">
          <div className="text-[10px] text-zinc-500 border-b border-zinc-900 pb-2 mb-1 flex items-center justify-between">
            <span>STDOUT / HTTP CONSOLE</span>
            <span>PORT: 3000</span>
          </div>

          {/* Logs */}
          <div className="flex-grow flex flex-col gap-1.5 overflow-y-auto">
            {consoleLogs.map((log, lIdx) => {
              let color = "text-zinc-400";
              if (log.startsWith(">>") || log.startsWith("[CLIENT]")) {
                color = "text-cyan-accent";
              } else if (log.includes("[DB]")) {
                color = "text-yellow-500/90";
              } else if (log.includes("[REDIS]")) {
                color = "text-purple-accent/90";
              } else if (log.includes("[SMTP]")) {
                color = "text-blue-400/90";
              } else if (log.includes("200 OK") || log.includes("[SUCCESS]")) {
                color = "text-emerald-400 font-semibold";
              } else if (log.includes("[ERROR]") || log.includes("[WARN]")) {
                color = "text-red-400";
              }
              
              return (
                <div key={lIdx} className={`flex items-start gap-1 ${color}`}>
                  <ChevronRight className="w-3.5 h-3.5 shrink-0 mt-0.5" />
                  <span className="break-all">{log}</span>
                </div>
              );
            })}
            <div ref={consoleBottomRef} />
          </div>

          {/* Dynamic DB/SQL output */}
          {sqlQuery && (
            <div className="mt-4 border-t border-zinc-900 pt-3 flex flex-col gap-2">
              <span className="text-[10px] text-zinc-500 font-bold uppercase tracking-wider">
                SQL QUERY EXECUTION:
              </span>
              <pre className="p-3 bg-zinc-950/80 rounded-lg border border-white/5 text-yellow-500 text-[11px] overflow-x-auto whitespace-pre-wrap leading-relaxed select-all">
                {sqlQuery}
              </pre>
            </div>
          )}

          {/* Response Payload */}
          {responsePayload && (
            <div className="mt-2 border-t border-zinc-900 pt-3 flex flex-col gap-2">
              <span className="text-[10px] text-zinc-500 font-bold uppercase tracking-wider">
                RAW JSON RESPONSE PAYLOAD:
              </span>
              <pre className="p-3 bg-zinc-950/80 rounded-lg border border-white/5 text-emerald-400 text-[11px] overflow-x-auto whitespace-pre-wrap select-all">
                {JSON.stringify(responsePayload, null, 2)}
              </pre>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
