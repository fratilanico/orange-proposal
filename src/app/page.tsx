"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import AnimateIn from "@/components/AnimateIn";
import AnimatedCounter from "@/components/AnimatedCounter";
import StatsTicker from "@/components/StatsTicker";
import { ChevronDown, Zap, Users, Brain, Shield, TrendingUp, Target, Phone, Mail, Linkedin } from "lucide-react";

/* ══════════════════════════════════════════════════════════════
   DATA
   ══════════════════════════════════════════════════════════════ */

const PAIN_POINTS = [
  {
    icon: "🤖",
    title: "Djia Voice AI — 52% Success Rate",
    desc: "Nearly half of all voice interactions fail. Customers hang up, call again, clog human queues. Every failed interaction costs Orange money and trust.",
    color: "#ff453a",
  },
  {
    icon: "🇷🇴",
    title: "Romanian NLP — Underdeveloped",
    desc: "Language-specific AI models are weak. Romanian is underserved by major LLM providers. Orange can't buy this off the shelf — it needs to be built.",
    color: "#ff9f0a",
  },
  {
    icon: "👻",
    title: "Shadow AI — No Governance",
    desc: "Internal teams are already experimenting with ChatGPT, Claude, LangChain. No coordination, no standards, no governance. Every team is reinventing the wheel.",
    color: "#6e3aff",
  },
  {
    icon: "📊",
    title: "€600M AI Target — Clock Ticking",
    desc: "Orange Group mandates €600M in AI-generated value by 2028. Paris has Live Intelligence Studio. Bucharest needs to show results — fast.",
    color: "#ff7900",
  },
  {
    icon: "📱",
    title: "No WhatsApp Presence",
    desc: "10M+ Romanians use WhatsApp daily. Orange has zero presence there. Vodafone and Digi haven't moved either. First-mover advantage is sitting on the table.",
    color: "#30d158",
  },
  {
    icon: "🏢",
    title: "Vendor Lock-In Everywhere",
    desc: "Genesys, MATRIXX, IBM — deep multi-year contracts. Internal AI capability is the only path that doesn't create another dependency.",
    color: "#0071e3",
  },
];

const PHASES = [
  {
    phase: "01",
    title: "Assess & Build",
    subtitle: "AI Operations Lab",
    duration: "10 weeks",
    price: "€25–30K",
    color: "#ff7900",
    items: [
      "8-12 Orange employees selected (IT, CX, Operations mix)",
      "Customized AI architecture training on InfoAcademy platform",
      "Weeks 1-2: Agent patterns, orchestration, deterministic pipelines",
      "Weeks 3-6: Each team builds a working internal AI agent",
      "Weeks 7-8: Architecture review, gap analysis",
      "Weeks 9-10: Living architecture blueprint delivered",
      "3-4 working internal AI agents as tangible output",
      "Orange owns the agents. APEX retains methodology.",
    ],
  },
  {
    phase: "02",
    title: "Scale & Integrate",
    subtitle: "Architecture Deployment",
    duration: "6 months",
    price: "€150–200K",
    color: "#0071e3",
    items: [
      "Deploy agent infrastructure across 2-3 departments",
      "AI governance framework established (FDRP methodology)",
      "Train 2nd and 3rd cohorts (12 → 50+ AI-capable employees)",
      "Integrate with Genesys, MATRIXX, internal APIs",
      "Romanian NLP model fine-tuning pipeline",
      "Measurable KPIs: Djia improvement, internal automation rate",
    ],
  },
  {
    phase: "03",
    title: "Autonomous Operations",
    subtitle: "Self-Sustaining AI Team",
    duration: "9 months",
    price: "€400K+ / retainer",
    color: "#30d158",
    items: [
      "Orange runs own AI operations team — APEX on advisory retainer",
      "Replication playbook for Orange Group (Poland, Belgium, Spain)",
      "Revenue shifts from project fees to licensing + advisory",
      "AI-as-a-Service revenue stream for enterprise clients",
      "Full organizational AI capability achieved",
    ],
  },
];

const PROOF_POINTS = [
  {
    name: "ProfiCircle",
    metric: "100+",
    metricLabel: "Enterprise Clients",
    desc: "Agentic GTM system deployed for EU procurement platform. €33B TAM. Clients include Bolt, Wolt, JLL, Danone, Volvo, PERI. Full 8-agent orchestration: email, LinkedIn, voice, AI classification.",
    role: "CTO — AI Orchestration Layer",
    color: "#0071e3",
    url: "https://proficircle-deck-six5.vercel.app",
  },
  {
    name: "ProfileSense",
    metric: "5min",
    metricLabel: "30 Ranked Candidates",
    desc: "White-label talent sourcing for Dutch recruitment (Lieno B.V., Benelux). Paste a job description → 30 ranked candidates with verified emails. AI-scored talent pipeline.",
    role: "Full-Stack Delivery",
    color: "#6e3aff",
    url: "https://profilesense-dashboard.vercel.app",
  },
  {
    name: "APEX OS",
    metric: "73+",
    metricLabel: "Production Repos",
    desc: "Sovereign AI operating system. 6 persistent agents, 49 repos, 70+ skills, 2920 tests green. Self-healing, recursive learning, sovereign governance. Running 24/7 on Azure.",
    role: "Founder & Architect",
    color: "#ff7900",
    url: "https://apex.infoacademy.uk",
  },
  {
    name: "InfoAcademy",
    metric: "20K+",
    metricLabel: "Learners",
    desc: "AI learning platform. 163+ daily content items, webinars, agentic training. Self-serve for students, customizable for enterprise cohorts. Already delivered training to Orange Romania.",
    role: "CEO",
    color: "#30d158",
    url: "https://www.infoacademy.uk",
  },
];

const TEAM = [
  {
    name: "Nico Fratila",
    title: "AI Infrastructure Architect",
    org: "APEX OS / InfoAcademy",
    bio: "73+ production repos. ProfiCircle CTO. 5 years network engineering at Lloyds Banking Group. APEX OS founder — 6 persistent agents, 70+ skills. Building AI systems that run themselves.",
    credentials: ["Lloyds Banking Group — Network Engineering", "APEX OS — 6 agents, 49 repos, 70+ skills", "ProfiCircle — CTO, 100+ enterprise clients", "InfoAcademy — 20K+ learners"],
    linkedin: "https://linkedin.com/in/nicofratila",
    email: "nico.f@infoacademy.net",
    phone: "+447778424242",
    color: "#ff7900",
  },
  {
    name: "Mihai Catalin Teodosiu",
    title: "Network Automation AI Specialist",
    org: "aiQA / GNS3 Technologies",
    bio: "100,000+ students across 185 countries. Vodafone NOC engineer. Building Network Automation AI Agents. CCNP certified. 12-dimension AI system management framework. Claude Code + MCP expert.",
    credentials: ["Vodafone — NOC Engineer, 200+ critical alerts", "100K+ Udemy students, 185 countries", "CCNP, CCNA, CCDA, JNCIA, ISTQB certified", "Politehnica Bucharest — BS Telecommunications"],
    linkedin: "https://linkedin.com/in/tmihaicatalin",
    email: "",
    phone: "",
    color: "#0071e3",
  },
];

const OBJECTIONS = [
  {
    q: "Why not hire an AI engineer internally for €5K/month?",
    a: "One engineer builds tools. We transfer architectural capability across your organization. One person doesn't transform 50 people. And they don't bring 100K+ students of teaching experience or 73 production repos of battle-tested patterns.",
  },
  {
    q: "You're a small company. Can you handle Orange scale?",
    a: "InfoAcademy is your existing vendor — you've already vetted us. Teodosiu has trained 100K+ engineers globally. We're not replacing Genesys or MATRIXX — we're training your people to build the AI layer on top of what you already have.",
  },
  {
    q: "What if we take the blueprint and give it to Accenture?",
    a: "The blueprint is a living environment on InfoAcademy, not a PDF. The methodology is licensed, not transferred. And frankly — if your internal team can execute it after Phase 1, that means the training worked. That's the point.",
  },
  {
    q: "Orange Group has AI teams in Paris. Why go external?",
    a: "Paris builds tools. Tools without people who know how to use them are shelfware. We build the people AND the architecture. Bucharest delivering measurable AI value positions you as the Group's AI innovation lab — political capital for your leadership.",
  },
  {
    q: "€25-30K seems cheap for 'architecture' but expensive for 'training'.",
    a: "It's neither. It's a 10-week build program where your people create working AI agents under expert guidance. The architecture emerges from what they build. You get trained people + working agents + a roadmap. Below VP discretionary spend threshold.",
  },
];

/* ══════════════════════════════════════════════════════════════
   COMPONENTS
   ══════════════════════════════════════════════════════════════ */

function PainCard({ point, index }: { point: typeof PAIN_POINTS[0]; index: number }) {
  const [open, setOpen] = useState(false);
  return (
    <AnimateIn delay={index * 0.08}>
      <motion.div
        onClick={() => setOpen(!open)}
        whileHover={{ scale: 1.02, y: -2 }}
        whileTap={{ scale: 0.98 }}
        className="cursor-pointer rounded-2xl p-6 transition-all"
        style={{ background: point.color + "08", border: `1px solid ${point.color}20` }}
      >
        <div className="flex items-start justify-between">
          <div className="flex items-center gap-3">
            <span className="text-2xl">{point.icon}</span>
            <h3 className="text-[15px] font-semibold text-[#1d1d1f]">{point.title}</h3>
          </div>
          <ChevronDown
            size={16}
            className="text-[#86868b] transition-transform duration-300"
            style={{ transform: open ? "rotate(180deg)" : "rotate(0deg)" }}
          />
        </div>
        <AnimatePresence>
          {open && (
            <motion.p
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="text-[13px] text-[#6e6e73] mt-3 leading-relaxed"
            >
              {point.desc}
            </motion.p>
          )}
        </AnimatePresence>
      </motion.div>
    </AnimateIn>
  );
}

function PhaseCard({ phase }: { phase: typeof PHASES[0] }) {
  const [open, setOpen] = useState(false);
  return (
    <motion.div
      whileHover={{ scale: 1.01 }}
      className="rounded-2xl p-8 cursor-pointer"
      style={{ background: phase.color + "06", border: `1px solid ${phase.color}18` }}
      onClick={() => setOpen(!open)}
    >
      <div className="flex items-start justify-between mb-4">
        <div>
          <div className="text-[11px] font-bold uppercase tracking-widest mb-1" style={{ color: phase.color }}>
            Phase {phase.phase} — {phase.duration}
          </div>
          <h3 className="text-xl font-bold text-[#1d1d1f]">{phase.title}</h3>
          <p className="text-[13px] text-[#6e6e73] mt-1">{phase.subtitle}</p>
        </div>
        <div className="text-right">
          <div className="text-2xl font-black" style={{ color: phase.color }}>{phase.price}</div>
          <ChevronDown
            size={16}
            className="text-[#86868b] ml-auto mt-1 transition-transform duration-300"
            style={{ transform: open ? "rotate(180deg)" : "rotate(0deg)" }}
          />
        </div>
      </div>
      <AnimatePresence>
        {open && (
          <motion.ul
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="space-y-2 mt-4"
          >
            {phase.items.map((item, i) => (
              <motion.li
                key={i}
                initial={{ opacity: 0, x: -8 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.04 }}
                className="text-[13px] text-[#6e6e73] flex items-start gap-2"
              >
                <span style={{ color: phase.color }} className="mt-0.5">•</span>
                {item}
              </motion.li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

function ProofCard({ point, index }: { point: typeof PROOF_POINTS[0]; index: number }) {
  return (
    <AnimateIn delay={index * 0.1}>
      <a href={point.url} target="_blank" rel="noopener"
        className="block rounded-2xl p-6 transition-all hover:scale-[1.02] hover:-translate-y-1"
        style={{ background: point.color + "06", border: `1px solid ${point.color}18` }}>
        <div className="flex items-baseline gap-2 mb-3">
          <span className="text-3xl font-black" style={{ color: point.color }}>{point.metric}</span>
          <span className="text-[11px] font-bold uppercase tracking-widest text-[#86868b]">{point.metricLabel}</span>
        </div>
        <h3 className="text-[17px] font-bold text-[#1d1d1f] mb-1">{point.name}</h3>
        <p className="text-[11px] font-medium uppercase tracking-wider mb-2" style={{ color: point.color }}>{point.role}</p>
        <p className="text-[13px] text-[#6e6e73] leading-relaxed">{point.desc}</p>
      </a>
    </AnimateIn>
  );
}

function TeamCard({ person }: { person: typeof TEAM[0] }) {
  return (
    <div className="rounded-2xl p-8" style={{ background: person.color + "06", border: `1px solid ${person.color}18` }}>
      <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-4 text-white text-lg font-black"
        style={{ background: person.color }}>
        {person.name.split(" ").map(n => n[0]).join("")}
      </div>
      <h3 className="text-xl font-bold text-[#1d1d1f]">{person.name}</h3>
      <p className="text-[13px] font-semibold mt-1" style={{ color: person.color }}>{person.title}</p>
      <p className="text-[12px] text-[#86868b] uppercase tracking-wider mt-0.5">{person.org}</p>
      <p className="text-[13px] text-[#6e6e73] mt-4 leading-relaxed">{person.bio}</p>
      <ul className="mt-4 space-y-1.5">
        {person.credentials.map((c, i) => (
          <li key={i} className="text-[12px] text-[#6e6e73] flex items-start gap-2">
            <span style={{ color: person.color }} className="mt-0.5">✓</span> {c}
          </li>
        ))}
      </ul>
      <div className="flex gap-3 mt-5">
        {person.linkedin && (
          <a href={person.linkedin} target="_blank" rel="noopener"
            className="text-[11px] font-bold uppercase tracking-wider hover:underline" style={{ color: person.color }}>
            LinkedIn →
          </a>
        )}
        {person.email && (
          <a href={`mailto:${person.email}`}
            className="text-[11px] font-bold uppercase tracking-wider hover:underline" style={{ color: person.color }}>
            Email →
          </a>
        )}
      </div>
    </div>
  );
}

function ObjectionItem({ obj, index }: { obj: typeof OBJECTIONS[0]; index: number }) {
  const [open, setOpen] = useState(false);
  return (
    <AnimateIn delay={index * 0.06}>
      <div
        onClick={() => setOpen(!open)}
        className="cursor-pointer border-b border-[#e8e8ed] py-5 group"
      >
        <div className="flex items-start justify-between gap-4">
          <h4 className="text-[15px] font-semibold text-[#1d1d1f] group-hover:text-[#ff7900] transition-colors">
            {obj.q}
          </h4>
          <ChevronDown
            size={16}
            className="text-[#86868b] flex-shrink-0 mt-1 transition-transform duration-300"
            style={{ transform: open ? "rotate(180deg)" : "rotate(0deg)" }}
          />
        </div>
        <AnimatePresence>
          {open && (
            <motion.p
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="text-[13px] text-[#6e6e73] mt-3 leading-relaxed"
            >
              {obj.a}
            </motion.p>
          )}
        </AnimatePresence>
      </div>
    </AnimateIn>
  );
}

/* ══════════════════════════════════════════════════════════════
   PAGE
   ══════════════════════════════════════════════════════════════ */

export default function Page() {
  return (
    <main>
      {/* ── HERO ──────────────────────────────────────────────── */}
      <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden"
        style={{ background: "linear-gradient(135deg, #1d1d1f 0%, #0a0a0a 50%, #1a0800 100%)" }}>
        <div className="absolute inset-0 opacity-20"
          style={{ backgroundImage: "radial-gradient(circle at 70% 30%, #ff790030 0%, transparent 60%)" }} />
        <div className="relative z-10 max-w-[900px] mx-auto px-6 text-center">
          <AnimateIn>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 mb-8">
              <span className="w-2 h-2 rounded-full bg-[#30d158] animate-pulse" />
              <span className="text-[12px] text-white/60 uppercase tracking-widest font-medium">
                InfoAcademy — Existing Orange Romania Vendor
              </span>
            </div>
          </AnimateIn>
          <AnimateIn delay={0.1}>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-white leading-[1.05] tracking-tight">
              AI Operations Lab
              <br />
              <span style={{ color: "#ff7900" }}>for Orange Romania</span>
            </h1>
          </AnimateIn>
          <AnimateIn delay={0.2}>
            <p className="text-lg sm:text-xl text-white/50 mt-6 max-w-[640px] mx-auto leading-relaxed">
              We train your people to build AI systems and architect the patterns they build on.
              In 18 months, you don&apos;t need us. That&apos;s the point.
            </p>
          </AnimateIn>
          <AnimateIn delay={0.3}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-10">
              <a href="#pricing"
                className="px-8 py-4 rounded-xl text-white font-semibold text-[15px] transition-all hover:scale-105"
                style={{ background: "#ff7900" }}>
                View Proposal →
              </a>
              <a href="#proof"
                className="px-8 py-4 rounded-xl text-white/80 font-semibold text-[15px] border border-white/15 hover:bg-white/5 transition-all">
                See Our Work
              </a>
            </div>
          </AnimateIn>
          <AnimateIn delay={0.4}>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mt-16">
              {[
                { value: 25, suffix: "K", label: "POC Investment (€)" },
                { value: 10, suffix: " weeks", label: "To First Results" },
                { value: 4, suffix: " agents", label: "Built By Your Team" },
                { value: 12, suffix: " people", label: "Trained & Certified" },
              ].map((s, i) => (
                <div key={i} className="text-center">
                  <div className="text-3xl font-black text-white">
                    <AnimatedCounter to={s.value} suffix={s.suffix} />
                  </div>
                  <div className="text-[11px] text-white/40 uppercase tracking-widest mt-1">{s.label}</div>
                </div>
              ))}
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* ── TICKER ────────────────────────────────────────────── */}
      <StatsTicker />

      {/* ── THE PROBLEM ──────────────────────────────────────── */}
      <section id="problem" className="py-24 px-6">
        <div className="max-w-[1120px] mx-auto">
          <AnimateIn>
            <div className="text-center mb-16">
              <p className="text-[12px] font-bold uppercase tracking-widest text-[#ff453a] mb-3">The Reality</p>
              <h2 className="text-4xl lg:text-5xl font-black text-[#1d1d1f]">
                Orange has the customers.
                <br />
                <span className="text-[#86868b]">But AI isn&apos;t working yet.</span>
              </h2>
            </div>
          </AnimateIn>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {PAIN_POINTS.map((p, i) => (
              <PainCard key={i} point={p} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* ── SOLUTION ─────────────────────────────────────────── */}
      <section id="solution" className="py-24 px-6 bg-[#1d1d1f]">
        <div className="max-w-[900px] mx-auto text-center">
          <AnimateIn>
            <p className="text-[12px] font-bold uppercase tracking-widest text-[#ff7900] mb-3">The Solution</p>
            <h2 className="text-4xl lg:text-5xl font-black text-white leading-tight">
              Don&apos;t buy AI tools.
              <br />
              <span className="text-[#ff7900]">Build AI capability.</span>
            </h2>
            <p className="text-lg text-white/50 mt-6 max-w-[700px] mx-auto leading-relaxed">
              IBM, Accenture, and Ericsson sell products that create dependency.
              We transfer capability that creates independence.
              Your team learns by building real agents that solve real Orange problems.
              The architecture emerges from what they build.
            </p>
          </AnimateIn>
          <AnimateIn delay={0.2}>
            <div className="grid sm:grid-cols-3 gap-6 mt-16">
              {[
                { icon: <Users size={28} />, title: "Train", desc: "8-12 of your people learn AI architecture by building — not by watching slides" },
                { icon: <Brain size={28} />, title: "Build", desc: "Each team creates a working internal AI agent solving a real Orange operational problem" },
                { icon: <Target size={28} />, title: "Architect", desc: "The integration walls they hit become your AI infrastructure roadmap" },
              ].map((s, i) => (
                <div key={i} className="rounded-2xl p-6 bg-white/5 border border-white/8 text-left">
                  <div className="text-[#ff7900] mb-4">{s.icon}</div>
                  <h3 className="text-[17px] font-bold text-white mb-2">{s.title}</h3>
                  <p className="text-[13px] text-white/50 leading-relaxed">{s.desc}</p>
                </div>
              ))}
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* ── HOW IT WORKS ─────────────────────────────────────── */}
      <section id="how" className="py-24 px-6">
        <div className="max-w-[900px] mx-auto">
          <AnimateIn>
            <div className="text-center mb-16">
              <p className="text-[12px] font-bold uppercase tracking-widest text-[#0071e3] mb-3">10-Week Program</p>
              <h2 className="text-4xl lg:text-5xl font-black text-[#1d1d1f]">
                Training that ships agents.
              </h2>
              <p className="text-lg text-[#6e6e73] mt-4 max-w-[600px] mx-auto">
                Not a classroom course. A build program. Your team creates working AI tools — the architecture is the byproduct.
              </p>
            </div>
          </AnimateIn>
          <div className="grid gap-6">
            {[
              { week: "1–2", title: "Foundations", desc: "Agent patterns, orchestration, deterministic vs probabilistic pipelines, governance basics", color: "#ff7900" },
              { week: "3–6", title: "Build Sprint", desc: "Each team selects a real Orange problem and builds a working AI agent. Network triage, knowledge base, procurement analysis, compliance monitoring — Orange picks.", color: "#0071e3" },
              { week: "7–8", title: "Architecture Review", desc: "APEX audits what your teams built. Documents patterns. Identifies infrastructure gaps. Maps integration needs.", color: "#6e3aff" },
              { week: "9–10", title: "Roadmap Delivery", desc: "Living architecture blueprint on InfoAcademy (not a PDF). 18-month roadmap. Capability assessment. Phase 2 scope defined by YOUR people's work.", color: "#30d158" },
            ].map((w, i) => (
              <AnimateIn key={i} delay={i * 0.08}>
                <div className="flex gap-6 items-start p-6 rounded-2xl hover:bg-[#f5f5f7] transition-colors">
                  <div className="flex-shrink-0 w-16 h-16 rounded-2xl flex items-center justify-center text-white font-black text-sm"
                    style={{ background: w.color }}>
                    W{w.week}
                  </div>
                  <div>
                    <h3 className="text-[17px] font-bold text-[#1d1d1f]">{w.title}</h3>
                    <p className="text-[13px] text-[#6e6e73] mt-1 leading-relaxed">{w.desc}</p>
                  </div>
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── PROOF ────────────────────────────────────────────── */}
      <section id="proof" className="py-24 px-6 bg-[#f5f5f7]">
        <div className="max-w-[1120px] mx-auto">
          <AnimateIn>
            <div className="text-center mb-16">
              <p className="text-[12px] font-bold uppercase tracking-widest text-[#6e3aff] mb-3">Track Record</p>
              <h2 className="text-4xl lg:text-5xl font-black text-[#1d1d1f]">
                We already built this.
                <br />
                <span className="text-[#86868b]">For ourselves and for clients.</span>
              </h2>
            </div>
          </AnimateIn>
          <div className="grid sm:grid-cols-2 gap-5">
            {PROOF_POINTS.map((p, i) => (
              <ProofCard key={i} point={p} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* ── TEAM ─────────────────────────────────────────────── */}
      <section id="team" className="py-24 px-6">
        <div className="max-w-[1000px] mx-auto">
          <AnimateIn>
            <div className="text-center mb-16">
              <p className="text-[12px] font-bold uppercase tracking-widest text-[#ff7900] mb-3">Your Team</p>
              <h2 className="text-4xl lg:text-5xl font-black text-[#1d1d1f]">
                Network engineering meets
                <br />
                <span className="text-[#86868b]">AI infrastructure.</span>
              </h2>
              <p className="text-lg text-[#6e6e73] mt-4 max-w-[600px] mx-auto">
                Delivered through InfoAcademy — your existing vendor. No new procurement. No new vendor qualification.
              </p>
            </div>
          </AnimateIn>
          <div className="grid sm:grid-cols-2 gap-6">
            {TEAM.map((person, i) => (
              <AnimateIn key={i} delay={i * 0.15}>
                <TeamCard person={person} />
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── PRICING ──────────────────────────────────────────── */}
      <section id="pricing" className="py-24 px-6 bg-[#1d1d1f]">
        <div className="max-w-[1000px] mx-auto">
          <AnimateIn>
            <div className="text-center mb-16">
              <p className="text-[12px] font-bold uppercase tracking-widest text-[#ff7900] mb-3">The Engagement</p>
              <h2 className="text-4xl lg:text-5xl font-black text-white leading-tight">
                Start small. Prove value.
                <br />
                <span className="text-[#ff7900]">Then scale.</span>
              </h2>
            </div>
          </AnimateIn>
          <div className="grid gap-6">
            {PHASES.map((phase, i) => (
              <AnimateIn key={i} delay={i * 0.12}>
                <PhaseCard phase={phase} />
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── OBJECTIONS ───────────────────────────────────────── */}
      <section className="py-24 px-6">
        <div className="max-w-[800px] mx-auto">
          <AnimateIn>
            <div className="text-center mb-12">
              <p className="text-[12px] font-bold uppercase tracking-widest text-[#86868b] mb-3">Straight Answers</p>
              <h2 className="text-3xl font-black text-[#1d1d1f]">
                Questions you should be asking.
              </h2>
            </div>
          </AnimateIn>
          <div>
            {OBJECTIONS.map((obj, i) => (
              <ObjectionItem key={i} obj={obj} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────── */}
      <section id="cta" className="py-24 px-6"
        style={{ background: "linear-gradient(135deg, #1d1d1f 0%, #0a0a0a 50%, #1a0800 100%)" }}>
        <div className="max-w-[700px] mx-auto text-center">
          <AnimateIn>
            <h2 className="text-4xl lg:text-5xl font-black text-white leading-tight">
              Ready to build?
            </h2>
            <p className="text-lg text-white/50 mt-4">
              10 weeks. €25-30K. Working AI agents built by your team.
              <br />
              If the agents don&apos;t deliver value, you still have 12 trained people.
            </p>
          </AnimateIn>
          <AnimateIn delay={0.15}>
            <div className="mt-10 grid sm:grid-cols-2 gap-6 text-left">
              {TEAM.map((person, i) => (
                <div key={i} className="rounded-2xl p-6 bg-white/5 border border-white/8">
                  <h3 className="text-[17px] font-bold text-white">{person.name}</h3>
                  <p className="text-[12px] text-white/40 uppercase tracking-wider mt-0.5">{person.title}</p>
                  <div className="mt-4 space-y-2">
                    {person.email && (
                      <a href={`mailto:${person.email}`} className="flex items-center gap-2 text-[13px] text-[#ff7900] hover:underline">
                        <Mail size={14} /> {person.email}
                      </a>
                    )}
                    {person.phone && (
                      <a href={`tel:${person.phone}`} className="flex items-center gap-2 text-[13px] text-white/60 hover:text-white transition-colors">
                        <Phone size={14} /> {person.phone}
                      </a>
                    )}
                    <a href={person.linkedin} target="_blank" rel="noopener" className="flex items-center gap-2 text-[13px] text-white/60 hover:text-white transition-colors">
                      <Linkedin size={14} /> LinkedIn
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </AnimateIn>
          <AnimateIn delay={0.3}>
            <p className="text-[11px] text-white/20 uppercase tracking-widest mt-16">
              InfoAcademy × APEX OS — Bucharest, Romania · London, UK
            </p>
          </AnimateIn>
        </div>
      </section>
    </main>
  );
}
