"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import AnimateIn from "@/components/AnimateIn";
import AnimatedCounter from "@/components/AnimatedCounter";
import StatsTicker from "@/components/StatsTicker";
import { ChevronDown, Users, Brain, Target, Phone, Mail, Linkedin } from "lucide-react";

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
    icon: "📋",
    title: "Contract Renewals — 5-Day Wait",
    desc: "Millions of contracts expire monthly. Today a customer has to call in themselves, wait for a callback, then wait 5 more days for an offer. That friction is churn Orange doesn't see coming.",
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
    icon: "📧",
    title: "Support Emails — Manual Triage, Daily",
    desc: "Hundreds of emails hit generic contact addresses every day. Someone manually reads, sorts, and forwards each one. Urgent issues sit in the same queue as billing questions. Escalations happen late.",
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
      "Weeks 1-2: Agent patterns, orchestration, deterministic pipelines, governance basics",
      "Team A — Contract Renewal Agent: monitors expiring contracts, analyses customer profile, generates personalised renewal offer, delivers via WhatsApp or email automatically",
      "Team B — Email Triage Agent: scans inbound support emails, sets priority, routes to the correct department — no manual sorting",
      "Team C — Orange picks the 3rd use case from their own operations",
      "Weeks 7-8: Architecture review against Orange's live systems",
      "Weeks 9-10: Living architecture blueprint + 18-month roadmap delivered",
      "Orange owns every agent built. APEX retains methodology.",
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
    metric: "8",
    metricLabel: "Agent Orchestration",
    desc: "Building the AI agentic layer for an EU procurement platform (€33B TAM). Architecture: 8-agent pipeline covering outreach, LinkedIn automation, voice enrichment, and AI candidate classification. In active development.",
    role: "AI Agentic Layer — Architect & Builder",
    color: "#0071e3",
    url: "",
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
    bio: "73+ production repos. 5 years network engineering at Lloyds Banking Group. APEX OS founder — 6 persistent agents, 70+ skills. Currently architecting the AI agentic layer for a €33B TAM EU procurement platform. Building AI systems that run themselves.",
    credentials: ["Lloyds Banking Group — Network Engineering (5 years)", "APEX OS — 6 agents, 49 repos, 70+ skills", "ProfiCircle — AI Agentic Layer Architect (in development)", "InfoAcademy — 20K+ learners, Orange Romania vendor"],
    linkedin: "https://linkedin.com/in/nicofratila",
    email: "nico.f@infoacademy.net",
    whatsapp: "+447722195774",
    phoneRO: "+40743164820",
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
    whatsapp: "",
    phoneRO: "",
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

function PhaseCard({ phase, initialOpen = false }: { phase: typeof PHASES[0]; initialOpen?: boolean }) {
  const [open, setOpen] = useState(initialOpen);
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
  const inner = (
    <div
      className={`block rounded-2xl p-6 transition-all ${point.url ? "hover:scale-[1.02] hover:-translate-y-1 cursor-pointer" : ""}`}
      style={{ background: point.color + "06", border: `1px solid ${point.color}18` }}
    >
      <div className="flex items-baseline gap-2 mb-3">
        <span className="text-3xl font-black" style={{ color: point.color }}>{point.metric}</span>
        <span className="text-[11px] font-bold uppercase tracking-widest text-[#86868b]">{point.metricLabel}</span>
      </div>
      <h3 className="text-[17px] font-bold text-[#1d1d1f] mb-1">{point.name}</h3>
      <p className="text-[11px] font-medium uppercase tracking-wider mb-2" style={{ color: point.color }}>{point.role}</p>
      <p className="text-[13px] text-[#6e6e73] leading-relaxed">{point.desc}</p>
      {!point.url && (
        <span className="inline-flex items-center gap-1 mt-3 text-[10px] font-bold uppercase tracking-widest px-2 py-0.5 rounded-full"
          style={{ color: point.color, background: point.color + "15" }}>
          In Development
        </span>
      )}
    </div>
  );
  return (
    <AnimateIn delay={index * 0.1}>
      {point.url
        ? <a href={point.url} target="_blank" rel="noopener">{inner}</a>
        : inner
      }
    </AnimateIn>
  );
}

function WhatsAppIcon({ size = 14 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
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
      <div className="mt-5 space-y-2">
        {person.linkedin && (
          <a href={person.linkedin} target="_blank" rel="noopener"
            className="flex items-center gap-2 text-[12px] font-semibold hover:underline" style={{ color: person.color }}>
            <Linkedin size={13} /> LinkedIn
          </a>
        )}
        {person.email && (
          <a href={`mailto:${person.email}`}
            className="flex items-center gap-2 text-[12px] font-semibold hover:underline" style={{ color: person.color }}>
            <Mail size={13} /> {person.email}
          </a>
        )}
        {person.whatsapp && (
          <a href={`https://wa.me/${person.whatsapp.replace(/\+/g, "")}`} target="_blank" rel="noopener"
            className="flex items-center gap-2 text-[12px] font-semibold text-[#25d366] hover:underline">
            <WhatsAppIcon size={13} /> {person.whatsapp}
          </a>
        )}
        {person.phoneRO && (
          <a href={`tel:${person.phoneRO}`}
            className="flex items-center gap-2 text-[12px] text-[#86868b] hover:text-[#1d1d1f] transition-colors">
            <Phone size={13} /> {person.phoneRO} <span className="text-[10px] uppercase tracking-widest opacity-60">RO</span>
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
        <div className="absolute inset-0 opacity-[0.04]"
          style={{ backgroundImage: "radial-gradient(circle, #ffffff 1px, transparent 1px)", backgroundSize: "36px 36px" }} />
        <div className="relative z-10 max-w-[900px] mx-auto px-6 text-center">
          <AnimateIn>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5">
                <span className="w-2 h-2 rounded-full bg-[#30d158] animate-pulse" />
                <span className="text-[12px] text-white/60 uppercase tracking-widest font-medium">
                  InfoAcademy — Existing Orange Romania Vendor
                </span>
              </div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#ff7900]/30 bg-[#ff7900]/10">
                <span className="text-[12px]">⚡</span>
                <span className="text-[12px] text-[#ff9a40] font-semibold">
                  Paris AI Studio is live. Bucharest has until 2028.
                </span>
              </div>
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
              <a href="#problem"
                className="px-8 py-4 rounded-xl text-white font-semibold text-[15px] transition-all hover:scale-105"
                style={{ background: "#ff7900" }}>
                See the Problem →
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
                { value: 25, prefix: "€", suffix: "K", label: "Entry Investment" },
                { value: 18, prefix: "", suffix: " months", label: "To AI Independence" },
                { value: 50, prefix: "", suffix: "+", label: "AI-Capable Staff" },
                { value: 3, prefix: "", suffix: " phases", label: "Structured Engagement" },
              ].map((s, i) => (
                <div key={i} className="text-center">
                  <div className="text-3xl font-black text-white">
                    <AnimatedCounter to={s.value} prefix={s.prefix ?? ""} suffix={s.suffix} />
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

      {/* ── MICRO-CTA ────────────────────────────────────────── */}
      <div className="py-10 px-6" style={{ background: "#ff7900" }}>
        <div className="max-w-[900px] mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <p className="text-white font-black text-xl sm:text-2xl leading-tight">
              Seen enough? Start with €25K.
            </p>
            <p className="text-white/70 text-[14px] mt-1">
              No procurement committee. No RFP. One conversation.
            </p>
          </div>
          <a
            href="https://wa.me/447722195774"
            target="_blank"
            rel="noopener"
            className="flex-shrink-0 flex items-center gap-3 px-7 py-3.5 rounded-xl font-bold text-[15px] bg-white transition-all hover:scale-105 hover:shadow-xl"
            style={{ color: "#ff7900" }}
          >
            <WhatsAppIcon size={18} />
            WhatsApp Nico →
          </a>
        </div>
      </div>

      {/* ── WHAT WE OFFER ────────────────────────────────────── */}
      <section id="offer" className="py-24 px-6 bg-[#1d1d1f]">
        <div className="max-w-[900px] mx-auto text-center">
          <AnimateIn>
            <p className="text-[12px] font-bold uppercase tracking-widest text-[#ff7900] mb-3">What We Offer</p>
            <h2 className="text-4xl lg:text-5xl font-black text-white leading-tight">
              We transfer AI capability.
              <br />
              <span className="text-[#ff7900]">You build it. You own it. You run it.</span>
            </h2>
            <p className="text-lg text-white/50 mt-6 max-w-[680px] mx-auto leading-relaxed">
              IBM and Accenture deliver products — and a renewal invoice. We deliver an architectural capability that lives inside Orange permanently. Your people build the agents. The methodology is ours. The outcome is yours.
            </p>
          </AnimateIn>
          <AnimateIn delay={0.15}>
            <div className="grid sm:grid-cols-3 gap-6 mt-14">
              {[
                { icon: <Users size={26} />, title: "Train", desc: "8–12 of your engineers and ops staff learn AI agent architecture by doing — not by watching slides." },
                { icon: <Brain size={26} />, title: "Build", desc: "Each person builds a working AI agent solving a real Orange problem. Network triage, knowledge base, procurement analysis — Orange picks the use cases." },
                { icon: <Target size={26} />, title: "Architect", desc: "Real agents running inside Orange's systems reveal the actual integration landscape. That evidence becomes your 18-month AI architecture blueprint." },
              ].map((s, i) => (
                <div key={i} className="rounded-2xl p-6 bg-white/5 border border-white/[0.07] text-left">
                  <div className="text-[#ff7900] mb-4">{s.icon}</div>
                  <h3 className="text-[16px] font-bold text-white mb-2">{s.title}</h3>
                  <p className="text-[13px] text-white/50 leading-relaxed">{s.desc}</p>
                </div>
              ))}
            </div>
          </AnimateIn>
          <AnimateIn delay={0.25}>
            <div className="grid grid-cols-3 gap-0 mt-12 rounded-2xl overflow-hidden border border-white/[0.07] text-left text-[13px]">
              {[
                { label: "", apex: "APEX OS", them: "IBM / Accenture", isHeader: true },
                { label: "Model", apex: "Capability transfer", them: "Product delivery" },
                { label: "Ownership", apex: "You own every agent", them: "Vendor owns IP" },
                { label: "After 18 months", apex: "You run independently", them: "Renewal required" },
                { label: "Entry cost", apex: "€25–30K", them: "€300K+ minimum" },
              ].map((row, i) => (
                <div key={i} className="contents">
                  <div className={`px-4 py-3 ${i === 0 ? "font-black text-[11px] uppercase tracking-widest text-white/30 bg-white/[0.04]" : "text-white/40"} border-b border-white/[0.05]`}>{row.label}</div>
                  <div className={`px-4 py-3 ${i === 0 ? "font-black text-[11px] uppercase tracking-widest text-[#ff7900] bg-[#ff7900]/10" : "text-white font-semibold"} border-b border-l border-white/[0.05]`}>{row.apex}</div>
                  <div className={`px-4 py-3 ${i === 0 ? "font-black text-[11px] uppercase tracking-widest text-white/30 bg-white/[0.04]" : "text-white/30"} border-b border-l border-white/[0.05]`}>{row.them}</div>
                </div>
              ))}
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* ── THE VALUE ────────────────────────────────────────── */}
      <section id="value" className="py-24 px-6">
        <div className="max-w-[1120px] mx-auto">
          <AnimateIn>
            <div className="text-center mb-16">
              <p className="text-[12px] font-bold uppercase tracking-widest text-[#0071e3] mb-3">The Value for Orange</p>
              <h2 className="text-4xl lg:text-5xl font-black text-[#1d1d1f]">
                What this fixes.
                <br />
                <span className="text-[#86868b]">Specifically. For you.</span>
              </h2>
            </div>
          </AnimateIn>
          <div className="grid sm:grid-cols-2 gap-5">
            {[
              {
                tag: "Contract Renewals — 5-day wait today",
                title: "Customers are churning before you reach them.",
                value: "Phase 1 Team A builds the Contract Renewal Agent: monitors expiring contracts, reads the customer profile, generates a personalised offer and sends it via WhatsApp or email — automatically. No human in the loop until the customer says yes.",
                color: "#ff9f0a",
                icon: "📋",
              },
              {
                tag: "Support Emails — manual triage, every day",
                title: "Your people are sorting emails. AI should do this.",
                value: "Phase 1 Team B builds the Email Triage Agent: scans every inbound email, scores urgency, routes to the right department automatically. Your agents handle the decisions — not the sorting.",
                color: "#0071e3",
                icon: "📧",
              },
              {
                tag: "Djia — 52% success rate",
                title: "Your voice AI is failing half the time.",
                value: "Phase 1 maps the integration landscape against Orange's live systems. The 18-month roadmap that comes out of week 9-10 is the evidence base for fixing Djia — grounded in your stack, not external assumptions.",
                color: "#ff453a",
                icon: "🤖",
              },
              {
                tag: "€600M Group Mandate — 2028",
                title: "Paris set the target. Bucharest needs to deliver.",
                value: "3–4 working agents, 12 trained staff, architecture blueprint. Concrete deliverables your leadership can show Group — not a pilot deck. Bucharest as the AI reference implementation.",
                color: "#ff7900",
                icon: "📊",
              },
            ].map((item, i) => (
              <AnimateIn key={i} delay={i * 0.1}>
                <div className="rounded-2xl p-7 border border-[#e8e8ed] hover:border-[#d0d0d7] transition-colors">
                  <div className="flex items-center gap-2 mb-4">
                    <span className="text-xl">{item.icon}</span>
                    <span className="text-[11px] font-bold uppercase tracking-widest px-2 py-0.5 rounded-full"
                      style={{ color: item.color, background: item.color + "12" }}>
                      {item.tag}
                    </span>
                  </div>
                  <h3 className="text-[17px] font-black text-[#1d1d1f] mb-3 leading-snug">{item.title}</h3>
                  <p className="text-[13px] text-[#6e6e73] leading-relaxed">{item.value}</p>
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

      {/* ── THE ENGAGEMENT ───────────────────────────────────── */}
      <section id="engagement" className="py-24 px-6 bg-[#1d1d1f]">
        <div className="max-w-[1000px] mx-auto">
          <AnimateIn>
            <div className="text-center mb-16">
              <p className="text-[12px] font-bold uppercase tracking-widest text-[#ff7900] mb-3">The Engagement</p>
              <h2 className="text-4xl lg:text-5xl font-black text-white leading-tight">
                Three phases.
                <br />
                <span className="text-[#ff7900]">18 months to AI independence.</span>
              </h2>
              <p className="text-lg text-white/40 mt-4">Start at Phase 1. Scale when ready. Stop any time — you keep everything.</p>
            </div>
          </AnimateIn>

          {/* Phase 1 — Always-open rich split card */}
          <AnimateIn>
            <div className="rounded-2xl overflow-hidden mb-6" style={{ border: "1px solid #ff790025" }}>
              {/* Header */}
              <div className="p-7 flex flex-col sm:flex-row items-start justify-between gap-4"
                style={{ background: "rgba(255,121,0,0.07)" }}>
                <div>
                  <div className="text-[11px] font-black uppercase tracking-widest text-[#ff7900] mb-2">
                    Phase 01 — The Entry Point
                  </div>
                  <h3 className="text-2xl font-black text-white">AI Operations Lab</h3>
                  <p className="text-[13px] text-white/40 mt-1">
                    Funded from L&D budget · Below VP discretionary spend · No procurement committee
                  </p>
                </div>
                <div className="flex-shrink-0 text-right">
                  <div className="text-3xl font-black text-[#ff7900]">€25–30K</div>
                  <div className="text-[12px] text-white/30 mt-0.5">10 weeks · Fixed fee</div>
                </div>
              </div>
              {/* Split body */}
              <div className="grid md:grid-cols-2">
                {/* Left: 10-week timeline */}
                <div className="p-7 border-b md:border-b-0 md:border-r border-white/[0.06]">
                  <p className="text-[11px] font-black uppercase tracking-widest text-white/25 mb-5">10-Week Program</p>
                  <div className="space-y-5">
                    {[
                      { week: "W1–2", title: "Foundations", desc: "Agent patterns, orchestration, deterministic vs probabilistic pipelines, governance basics", color: "#ff7900" },
                      { week: "W3–6", title: "Build Sprint", desc: "Team A: Contract Renewal Agent — monitors expiring contracts, profiles the customer, sends personalised WhatsApp/email offer automatically. Team B: Email Triage Agent — scans inbound support emails, scores urgency, routes to the right department. Team C: Orange picks.", color: "#0071e3" },
                      { week: "W7–8", title: "Architecture Review", desc: "APEX reviews what your teams built. Synthesises patterns. Maps integration opportunities against Orange's live systems.", color: "#6e3aff" },
                      { week: "W9–10", title: "Roadmap Delivery", desc: "Living blueprint on InfoAcademy — not a PDF. 18-month roadmap grounded in what your people built, not external assumptions.", color: "#30d158" },
                    ].map((w, i) => (
                      <div key={i} className="flex gap-4 items-start">
                        <div className="flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center text-[10px] font-black"
                          style={{ background: w.color + "18", border: `1px solid ${w.color}35`, color: w.color }}>
                          {w.week}
                        </div>
                        <div>
                          <h4 className="text-[14px] font-bold text-white">{w.title}</h4>
                          <p className="text-[12px] text-white/35 mt-0.5 leading-relaxed">{w.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                {/* Right: Deliverables */}
                <div className="p-7">
                  <p className="text-[11px] font-black uppercase tracking-widest text-white/25 mb-5">What You Get</p>
                  <div className="space-y-4">
                    {[
                      { icon: "🤖", title: "3–4 Working AI Agents", desc: "Built by YOUR team. Owned by Orange." },
                      { icon: "🗺️", title: "Living Architecture Blueprint", desc: "On InfoAcademy — not a PDF. Evolves with your stack." },
                      { icon: "👥", title: "12 Trained Employees", desc: "Your internal AI champions. Ready to scale Phase 2." },
                      { icon: "📋", title: "18-Month AI Roadmap", desc: "Grounded in your builds, not consultant assumptions." },
                      { icon: "🔒", title: "Governance Foundation", desc: "Standards, audit trails, shadow AI visibility." },
                      { icon: "📊", title: "Capability Assessment", desc: "Evidence for your Group AI mandate reporting." },
                    ].map((item, i) => (
                      <div key={i} className="flex gap-3 items-start">
                        <span className="text-base flex-shrink-0 mt-0.5">{item.icon}</span>
                        <div>
                          <h4 className="text-[13px] font-bold text-white">{item.title}</h4>
                          <p className="text-[11px] text-white/35 leading-relaxed">{item.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </AnimateIn>

          {/* Phases 2 + 3 */}
          <div className="grid gap-4">
            {PHASES.slice(1).map((phase, i) => (
              <AnimateIn key={i} delay={(i + 1) * 0.12}>
                <PhaseCard phase={phase} initialOpen={false} />
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

      {/* ── WHERE THIS GOES ──────────────────────────────────── */}
      <section className="py-24 px-6 bg-[#f5f5f7]">
        <div className="max-w-[1000px] mx-auto">
          <AnimateIn>
            <div className="text-center mb-14">
              <p className="text-[12px] font-bold uppercase tracking-widest text-[#6e3aff] mb-3">The Bigger Picture</p>
              <h2 className="text-4xl lg:text-5xl font-black text-[#1d1d1f] leading-tight">
                Phase 1 is the door.
                <br />
                <span className="text-[#86868b]">The infrastructure is behind it.</span>
              </h2>
              <p className="text-lg text-[#6e6e73] mt-4 max-w-[600px] mx-auto">
                Orange&apos;s full AI infrastructure — deterministic pipelines, self-verifying decisions, EU AI Act compliant — built in four phases over 24 months.
              </p>
            </div>
          </AnimateIn>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { phase: "01", title: "AI Operations Lab", price: "€25–30K", duration: "10 weeks", desc: "Train 12 staff. Ship 3–4 agents. Deliver architecture blueprint. Entry point via L&D budget.", color: "#ff7900", current: true, href: null },
              { phase: "02", title: "Sovereign Infrastructure", price: "€150–200K", duration: "6 months", desc: "APEX OS deployed. WhatsApp gateway. AGENTS.md governance. Security hardening. Genesys/MATRIXX integration.", color: "#0071e3", current: false, href: "/phase-2" },
              { phase: "03", title: "Architectural Cognition", price: "€350–450K", duration: "9 months", desc: "FDRP quality layer. N≥3 cross-model verification. Romanian NLP fine-tuning. EU AI Act compliance.", color: "#6e3aff", current: false, href: "/phase-3" },
              { phase: "04", title: "Orange as AI Platform", price: "€500K–1M/yr", duration: "Ongoing", desc: "License Romanian NLP to Orange Group. AI-as-a-Service for B2B clients. Bucharest = Group AI hub.", color: "#30d158", current: false, href: null },
            ].map((p, i) => (
              <AnimateIn key={i} delay={i * 0.08}>
                <div className={`rounded-2xl p-6 h-full flex flex-col ${p.current ? "border-2" : "border"}`}
                  style={{ borderColor: p.color + (p.current ? "60" : "20"), background: p.color + (p.current ? "10" : "05") }}>
                  {p.current && (
                    <div className="text-[10px] font-black uppercase tracking-widest mb-3 flex items-center gap-1.5"
                      style={{ color: p.color }}>
                      <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: p.color }} />
                      You are here
                    </div>
                  )}
                  <div className="text-[11px] font-black uppercase tracking-widest mb-1" style={{ color: p.color }}>
                    Phase {p.phase}
                  </div>
                  <h3 className="text-[16px] font-black text-[#1d1d1f] mb-1">{p.title}</h3>
                  <div className="text-[13px] font-bold mb-3" style={{ color: p.color }}>{p.price} · {p.duration}</div>
                  <p className="text-[12px] text-[#6e6e73] leading-relaxed flex-1">{p.desc}</p>
                  {p.href && (
                    <a href={p.href}
                      className="mt-4 text-[11px] font-black uppercase tracking-widest hover:underline flex items-center gap-1"
                      style={{ color: p.color }}>
                      View Phase {p.phase} proposal →
                    </a>
                  )}
                </div>
              </AnimateIn>
            ))}
          </div>
          <AnimateIn delay={0.4}>
            <div className="mt-8 rounded-2xl p-6 bg-white border border-[#e8e8ed] text-center">
              <p className="text-[13px] text-[#6e6e73]">
                Total engagement over 24 months: <span className="font-black text-[#1d1d1f]">€1.0M – €1.7M</span> ·
                Orange owns all IP at every phase · Stop any time · Keep everything you built
              </p>
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────── */}
      <section id="cta" className="py-24 px-6"
        style={{ background: "linear-gradient(135deg, #1d1d1f 0%, #0a0a0a 50%, #1a0800 100%)" }}>
        <div className="max-w-[700px] mx-auto text-center">
          <AnimateIn>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#ff7900]/30 bg-[#ff7900]/10 mb-6">
              <span className="w-2 h-2 rounded-full bg-[#ff7900]" />
              <span className="text-[12px] text-[#ff7900] font-semibold tracking-wide">Below VP discretionary spend — no committee needed</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-black text-white leading-tight">
              Ready to build?
            </h2>
            <p className="text-lg text-white/50 mt-4">
              10 weeks. €25–30K. Working AI agents built by your team.
              <br />
              If the agents don&apos;t deliver value, you still have 12 trained people.
            </p>
          </AnimateIn>

          <AnimateIn delay={0.12}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-10">
              <a href="https://wa.me/447722195774" target="_blank" rel="noopener"
                className="px-8 py-4 rounded-xl text-white font-semibold text-[15px] transition-all hover:scale-105 flex items-center justify-center gap-2"
                style={{ background: "#25d366" }}>
                <WhatsAppIcon size={18} /> WhatsApp Nico
              </a>
              <a href="tel:+40743164820"
                className="px-8 py-4 rounded-xl text-white/80 font-semibold text-[15px] border border-white/15 hover:bg-white/5 transition-all flex items-center justify-center gap-2">
                <Phone size={16} /> +40 743 164 820 <span className="text-[11px] opacity-50">RO</span>
              </a>
            </div>
          </AnimateIn>

          <AnimateIn delay={0.22}>
            <div className="mt-10 grid sm:grid-cols-2 gap-6 text-left">
              {TEAM.map((person, i) => (
                <div key={i} className="rounded-2xl p-6 bg-white/5 border border-white/[0.08]">
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center text-white text-[11px] font-black mb-3"
                    style={{ background: person.color }}>
                    {person.name.split(" ").map(n => n[0]).join("")}
                  </div>
                  <h3 className="text-[15px] font-bold text-white">{person.name}</h3>
                  <p className="text-[11px] text-white/40 uppercase tracking-wider mt-0.5">{person.title}</p>
                  <div className="mt-3 space-y-1.5">
                    {person.email && (
                      <a href={`mailto:${person.email}`} className="flex items-center gap-2 text-[12px] text-[#ff7900] hover:underline">
                        <Mail size={12} /> {person.email}
                      </a>
                    )}
                    {person.whatsapp && (
                      <a href={`https://wa.me/${person.whatsapp.replace(/\+/g, "")}`} target="_blank" rel="noopener"
                        className="flex items-center gap-2 text-[12px] text-[#25d366] hover:underline">
                        <WhatsAppIcon size={12} /> {person.whatsapp}
                      </a>
                    )}
                    {person.phoneRO && (
                      <a href={`tel:${person.phoneRO}`} className="flex items-center gap-2 text-[12px] text-white/50 hover:text-white transition-colors">
                        <Phone size={12} /> {person.phoneRO} <span className="text-[10px] opacity-50">RO</span>
                      </a>
                    )}
                    <a href={person.linkedin} target="_blank" rel="noopener" className="flex items-center gap-2 text-[12px] text-white/50 hover:text-white transition-colors">
                      <Linkedin size={12} /> LinkedIn
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </AnimateIn>

          <AnimateIn delay={0.35}>
            <p className="text-[11px] text-white/20 uppercase tracking-widest mt-14">
              InfoAcademy × APEX OS — Bucharest, Romania · London, UK
            </p>
          </AnimateIn>
        </div>
      </section>
    </main>
  );
}
