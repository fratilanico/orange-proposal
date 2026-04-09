"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import AnimateIn from "@/components/AnimateIn";
import AnimatedCounter from "@/components/AnimatedCounter";
import StatsTicker from "@/components/StatsTicker";
import { ChevronDown, Users, Brain, Target, Phone, Mail, Linkedin, Globe } from "lucide-react";

/* ══════════════════════════════════════════════════════════════
   DATA
   ══════════════════════════════════════════════════════════════ */

const PAIN_POINTS = [
  {
    icon: "📋",
    title: "Contract Renewals — 5-Day Wait",
    bullets: [
      "Hundreds of thousands of renewal events every month across 9.3M subscribers",
      "Process is fully reactive — customers call in themselves, then wait days for an offer",
      "At this scale, even 0.5% improvement in retention is millions in recovered revenue",
    ],
    color: "#ff9f0a",
  },
  {
    icon: "📧",
    title: "Support Emails — Manual Triage",
    bullets: [
      "Thousands of emails arrive daily at serviciul.clienti@orange.ro, reclamatii@orange.ro and others",
      "Every one is manually read, sorted, and forwarded — urgent issues sit beside billing questions",
      "At this volume it never gets better, only grows — and every delay risks customer escalation",
    ],
    color: "#0071e3",
  },
  {
    icon: "🇷🇴",
    title: "Romanian NLP — Underdeveloped",
    bullets: [
      "Major LLM providers underserve Romanian — models are weak on local vocabulary and intent",
      "Orange can't buy a Romanian-calibrated AI model off the shelf from any vendor",
      "This needs to be built internally, fine-tuned on Orange's own call data and customer language",
    ],
    color: "#ff9f0a",
  },
  {
    icon: "👻",
    title: "Shadow AI — No Governance",
    bullets: [
      "Internal teams are already using ChatGPT, Claude, LangChain — independently, with no coordination",
      "No shared standards, no audit trails, no visibility into what's being built or deployed",
      "Every department is reinventing the wheel — duplicating effort and creating compliance risk",
    ],
    color: "#6e3aff",
  },
  {
    icon: "📊",
    title: "€600M AI Value Target — Clock Ticking",
    bullets: [
      "Orange Group's 'Trust the Future' 2026–2030 strategy targets €600M in AI-generated value by 2028 — not a budget, a revenue commitment (Reuters, Feb 2026)",
      "Paris is already deploying Group-level AI infrastructure — Bucharest needs to show measurable results",
      "Without concrete deliverables, the risk is centralisation from Paris, not autonomy for Romania",
    ],
    color: "#ff7900",
  },
  {
    icon: "📱",
    title: "No WhatsApp Presence",
    bullets: [
      "WhatsApp is the dominant messaging platform in Romania — and Orange has zero presence on it",
      "Vodafone and Digi haven't moved either — the first-mover advantage is unclaimed",
      "An AI-powered WhatsApp channel creates a new touchpoint for sales, support, and retention",
    ],
    color: "#30d158",
  },
];

const PHASES = [
  {
    phase: "01",
    title: "Assess & Build",
    subtitle: "AI Operations Lab",
    duration: "10 weeks",
    price: "€30K",
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
    subtitle: "Sovereign AI Infrastructure",
    duration: "6 months",
    price: "€185–200K",
    color: "#0071e3",
    link: "/phase-2",
    items: [
      "Skills Engine — departmental AI knowledge distillation, auto-evolving",
      "2 additional production agents (Customer Retention + Upsell Intelligence)",
      "Python ADK Agent-to-Agent orchestration across departments",
      "AutoResearch Evolution — agents that research, learn, and improve autonomously",
      "Deploy inside Orange's sandboxed LLM environment (Claude + GPT + Gemini)",
      "Per-department skill libraries built on Orange's own operational data",
      "Scale from 12 → 50+ AI-capable employees across 3 departments",
      "Integrate with Genesys, MATRIXX, and internal APIs",
    ],
  },
  {
    phase: "03",
    title: "Architectural Cognition",
    subtitle: "FDRP Quality Governance + EU AI Act",
    duration: "9 months",
    price: "€350–450K",
    color: "#30d158",
    link: "/phase-3",
    items: [
      "FDRP gate lifecycle on every AI decision (PDR → PQR)",
      "N≥3 cross-model verification (Claude + GPT + Gemini independently)",
      "Romanian NLP fine-tuning pipeline on Orange call data",
      "EU AI Act Article 6/9 compliance framework — deadline Aug 2026",
      "CVT dashboard for CTO + Group AI Paris",
      "Procurement intelligence — Genesys, MATRIXX, IBM contract analysis",
      "Group replication blueprint for Poland, Belgium, Spain",
      "Orange runs own AI operations — APEX on advisory retainer",
    ],
  },
];

const PROOF_POINTS = [
  {
    name: "GTM Agentic Platform",
    metric: "€3M+",
    metricLabel: "R&D Codebase",
    desc: "Co-founding a plug-and-play GTM platform (€33B TAM) with an established EU procurement founder. Enterprises connect their vendor and customer data — the cognition layer handles discovery, qualification, matching, and onboarding autonomously. Full vendor lifecycle outsourced to AI, not to a consulting firm. Built on €3M+ of existing R&D.",
    role: "Co-Founder — Cognition Architecture",
    color: "#0071e3",
    url: "",
  },
  {
    name: "ProfileSense",
    metric: "5min",
    metricLabel: "30 Ranked Candidates",
    desc: "White-label talent sourcing platform for Dutch recruitment (Lieno B.V., Benelux). Paste a job description → 30 ranked candidates with verified emails in under 5 minutes. Multi-source AI scoring across LinkedIn, GitHub, and professional networks. Full agentic pipeline: scrape → enrich → score → rank → deliver. Production-grade, running live for paying clients.",
    role: "Full-Stack Agentic Delivery",
    color: "#6e3aff",
    url: "https://profilesense-dashboard.vercel.app",
  },
  {
    name: "APEX OS",
    metric: "400+",
    metricLabel: "Skills Deployed",
    desc: "Sovereign AI operating system — 400+ self-evolving skills, persistent cross-session agent memory, multi-model orchestration (Claude + Codex + Gemini), self-healing watchdog, knowledge distillation engine that promotes learnings to skills automatically, RAG evaluation pipeline, FDRP gate automation, and injection-guard security layer. Running 24/7 on Azure.",
    role: "Founder — Architectural Cognition",
    color: "#ff7900",
    url: "https://apex.infoacademy.uk",
  },
  {
    name: "InfoAcademy",
    metric: "20K+",
    metricLabel: "Learners",
    desc: "AI-first learning platform with built-in agentic orchestration layer — currently in beta with ~100 active users. Enterprise cohorts get customised training environments, progress tracking, and AI-assisted learning paths. Free for all customers during beta. Already delivered training to Orange Romania. The same platform that powers the Phase 1 training delivery.",
    role: "Founder & CEO",
    color: "#30d158",
    url: "https://www.infoacademy.uk",
  },
];

const LEADERSHIP = [
  {
    name: "Nico Fratila",
    location: "London, UK",
    title: "AI Infrastructure Architect",
    org: "APEX OS / InfoAcademy",
    bio: "Founder of APEX OS — sovereign AI operating system with 400+ self-evolving skills, persistent agent memory, multi-model orchestration, self-healing infrastructure, and a knowledge distillation engine running 24/7 on Azure. 5 years network engineering at Lloyds Banking Group. Chief Customer Office at CUBE Global (RegTech). CEO of InfoAcademy, Orange Romania's existing training vendor.",
    credentials: [
      "APEX OS — Founder, 400+ skills, self-healing, 24/7 sovereign governance",
      "Lloyds Banking Group — Network Engineering (5 years)",
      "CUBE Global — Chief Customer Office (RegTech)",
      "InfoAcademy — CEO, existing Orange Romania vendor",
    ],
    linkedin: "https://linkedin.com/in/nicofratila",
    email: "nico.f@infoacademy.net",
    website: "",
    color: "#ff7900",
    lead: false,
  },
  {
    name: "Mru Patel",
    location: "Dubai, UAE",
    title: "Executive Chairman & Global Partner",
    org: "eWealthTech / ex-IBM / ex-Sun Microsystems",
    bio: "40 years at the intersection of enterprise technology and global commercial strategy. Led multi-billion-pound programmes at IBM, Siemens, and Sun Microsystems — including pioneering open-source platforms and securing deals valued at over £3B across Europe, Africa, and Asia. Government and Fortune 500 advisor since 1987. Established the first independent Property Investment Fund in Eastern Europe. Brings the strategic and commercial architecture that turns a strong technical proposal into a Group-level decision.",
    credentials: [
      "IBM / Siemens / Sun Microsystems — enterprise transformation",
      "£3B+ in programmes across Europe, Africa, Asia",
      "Government & Fortune 500 advisor since 1987",
      "Eastern Europe market entry — first Property Investment Fund",
      "eWealthTech — CEO, global AI & open-source platforms",
    ],
    linkedin: "https://www.linkedin.com/in/maborishapatel/",
    email: "",
    website: "",
    color: "#0d7377",
    lead: false,
  },
];

const TEAM = [
  {
    name: "Liviu Olos",
    location: "Romania",
    title: "Lead AI Systems Architect",
    org: "LOFTREK / FDRP / liviu.ai",
    bio: "Creator of FDRP — the AI quality governance framework with 32 subsystems and 557 database tables, evolving daily. Runs LOFTREK (790+ clients, 76 public institutions). Selected for Anthropic's inaugural global hackathon (top 500 of 13,000). Member of Anthropic's private research network. EU AI Act, NIS2, and NATO DIANA authority.",
    credentials: [
      "FDRP — AI governance, 32 subsystems, 557 DB tables",
      "LOFTREK — 790+ clients, 76 public institutions",
      "Anthropic Hackathon — top 500 of 13,000 globally",
      "EU AI Act · NIS2 · Cybersecurity specialist",
      "EU Horizon + NATO DIANA project authority",
    ],
    linkedin: "https://www.linkedin.com/in/liviu-olos/",
    email: "",
    website: "https://liviu.ai",
    color: "#f0b429",
    lead: true,
  },
  {
    name: "Bogdan Toporan",
    location: "Cluj, Romania",
    title: "Engineering Leader & AI Architect",
    org: "ARANDI / ex-Telenav / ex-HP",
    bio: "17+ years enterprise architecture. 2 years deep in AI Agent Orchestration and RAG systems. Built telecom-grade data pipelines at Telenav serving millions of users. Led 40+ engineer teams. US Patent holder in spatial data intelligence.",
    credentials: [
      "ARANDI — Founder, AI Agentic Systems",
      "Telenav — Engineering Lead, 40+ engineers, Big Data",
      "Micro Focus / HP — R&D Manager, US Patent holder",
    ],
    linkedin: "https://linkedin.com/in/bogdan-toporan",
    email: "bogdan.toporan@hotmail.com",
    website: "",
    color: "#6e3aff",
    lead: false,
  },
  {
    name: "Hardik Nakum",
    location: "London, UK",
    title: "Principal Cloud & Security Architect",
    org: "Lloyds Banking Group",
    bio: "10+ years at Lloyds Banking Group designing multi-cloud infrastructure across Azure, AWS, and GCP at financial-system scale. Zero-trust security architecture, agentic systems design, and enterprise network hardening for one of the UK's largest banks.",
    credentials: [
      "Lloyds — Principal Cloud Architect (3 years)",
      "Lloyds — Network & Security Lead (7.5 years)",
      "Visa / PayPoint — Enterprise Architect",
    ],
    linkedin: "https://linkedin.com/in/hardik-nakum",
    email: "",
    website: "",
    color: "#0071e3",
    lead: false,
  },
];

const OBJECTIONS = [
  {
    q: "Why not hire an AI engineer internally for €5K/month?",
    a: "One engineer builds tools. We transfer architectural capability across your organisation. One person doesn't transform 12 people into AI-capable builders. Our team brings 40+ years combined enterprise experience — Lloyds, HP, Telenav, Visa, PayPoint — and 73 production repos of battle-tested patterns.",
  },
  {
    q: "You're a small company. Can you handle Orange scale?",
    a: "InfoAcademy is your existing vendor — you've already vetted us. The team brings 10+ years inside Lloyds Banking Group, 17+ years of enterprise architecture, and 40+ engineer teams led. We're not replacing Genesys or MATRIXX — we're training your people to build the AI layer on top of what you already have.",
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
    q: "€30K seems cheap for 'architecture' but expensive for 'training'.",
    a: "It's neither. It's a 10-week build program where your people create working AI agents under expert guidance. The architecture emerges from what they build. You get trained people + working agents + a roadmap. Below VP discretionary spend threshold.",
  },
];

/* ══════════════════════════════════════════════════════════════
   COMPONENTS
   ══════════════════════════════════════════════════════════════ */

function PainCard({ point, index, isOpen, onToggle }: { point: typeof PAIN_POINTS[0]; index: number; isOpen: boolean; onToggle: () => void }) {
  return (
    <AnimateIn delay={index * 0.08}>
      <motion.div
        onClick={onToggle}
        whileHover={{ scale: 1.02, y: -2 }}
        whileTap={{ scale: 0.98 }}
        className="cursor-pointer rounded-2xl p-6 transition-all"
        style={{ background: point.color + "08", border: `1px solid ${isOpen ? point.color + "40" : point.color + "20"}` }}
      >
        <div className="flex items-start justify-between gap-2">
          <div className="flex items-center gap-3">
            <span className="text-2xl flex-shrink-0">{point.icon}</span>
            <h3 className="text-[15px] font-semibold text-[#1d1d1f]">{point.title}</h3>
          </div>
          <ChevronDown
            size={16}
            className="text-[#86868b] flex-shrink-0 mt-1 transition-transform duration-300"
            style={{ transform: isOpen ? "rotate(180deg)" : "rotate(0deg)" }}
          />
        </div>
        <AnimatePresence>
          {isOpen && (
            <motion.ul
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="mt-3 space-y-2"
            >
              {point.bullets.map((b, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: -6 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                  className="text-[13px] text-[#6e6e73] leading-relaxed flex items-start gap-2"
                >
                  <span className="mt-1 flex-shrink-0" style={{ color: point.color }}>•</span>
                  {b}
                </motion.li>
              ))}
            </motion.ul>
          )}
        </AnimatePresence>
      </motion.div>
    </AnimateIn>
  );
}

function PainGrid() {
  const [activeCard, setActiveCard] = useState<number | null>(null);
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 items-start">
      {PAIN_POINTS.map((p, i) => (
        <PainCard
          key={i}
          point={p}
          index={i}
          isOpen={activeCard === i}
          onToggle={() => setActiveCard(activeCard === i ? null : i)}
        />
      ))}
    </div>
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
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <ul className="space-y-2 mt-4">
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
            </ul>
            {"link" in phase && phase.link && (
              <a
                href={phase.link}
                onClick={(e) => e.stopPropagation()}
                className="inline-flex items-center gap-2 mt-5 px-5 py-2.5 rounded-xl text-[13px] font-bold text-white transition-all hover:opacity-90"
                style={{ background: phase.color }}
              >
                View full Phase {phase.phase} proposal →
              </a>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

function ProofCard({ point, index }: { point: typeof PROOF_POINTS[0]; index: number }) {
  const inner = (
    <div
      className={`block rounded-2xl p-6 h-full flex flex-col transition-all ${point.url ? "hover:scale-[1.02] hover:-translate-y-1 cursor-pointer" : ""}`}
      style={{ background: point.color + "06", border: `1px solid ${point.color}18` }}
    >
      <div className="flex items-baseline gap-2 mb-3">
        <span className="text-3xl font-black" style={{ color: point.color }}>{point.metric}</span>
        <span className="text-[11px] font-bold uppercase tracking-widest text-[#86868b]">{point.metricLabel}</span>
      </div>
      <h3 className="text-[17px] font-bold text-[#1d1d1f] mb-1">{point.name}</h3>
      <p className="text-[11px] font-medium uppercase tracking-wider mb-2" style={{ color: point.color }}>{point.role}</p>
      <p className="text-[13px] text-[#6e6e73] leading-relaxed flex-1">{point.desc}</p>
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
        ? <a href={point.url} target="_blank" rel="noopener" className="block h-full">{inner}</a>
        : <div className="h-full">{inner}</div>
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
  const isLead = person.lead;

  const baseStyle = isLead
    ? {
        background: `linear-gradient(135deg, ${person.color}1a 0%, ${person.color}0a 100%)`,
        border: `1px solid ${person.color}55`,
      }
    : {
        background: person.color + "06",
        border: `1px solid ${person.color}18`,
      };

  return (
    <motion.div
      className="rounded-2xl p-6 h-full flex flex-col relative"
      style={baseStyle}
      animate={
        isLead
          ? {
              boxShadow: [
                `0 0 0 1px ${person.color}22, 0 6px 28px ${person.color}1a, 0 20px 60px ${person.color}0c`,
                `0 0 0 1px ${person.color}50, 0 8px 40px ${person.color}30, 0 24px 80px ${person.color}18`,
                `0 0 0 1px ${person.color}22, 0 6px 28px ${person.color}1a, 0 20px 60px ${person.color}0c`,
              ],
            }
          : {}
      }
      transition={isLead ? { duration: 3, repeat: Infinity, ease: "easeInOut" } : {}}
    >
      {/* Lead badge */}
      {isLead && (
        <div
          className="absolute top-4 right-4 px-2.5 py-1 rounded-full text-[9px] font-black uppercase tracking-[0.1em]"
          style={{
            background: `linear-gradient(135deg, ${person.color}28, ${person.color}12)`,
            color: person.color,
            border: `1px solid ${person.color}45`,
          }}
        >
          ★ Lead AI
        </div>
      )}

      {/* Avatar */}
      <div
        className="w-12 h-12 rounded-xl flex items-center justify-center text-white font-black mb-4 flex-shrink-0"
        style={
          isLead
            ? {
                background: `linear-gradient(135deg, ${person.color}, #c8860a)`,
                fontSize: "13px",
                boxShadow: `0 4px 16px ${person.color}40`,
              }
            : { background: person.color, fontSize: "12px" }
        }
      >
        {person.name.split(" ").map((n) => n[0]).join("")}
      </div>

      {/* Name + location */}
      <h3
        className="leading-tight text-[#1d1d1f]"
        style={{ fontSize: isLead ? "17px" : "16px", fontWeight: isLead ? 800 : 700 }}
      >
        {person.name}
      </h3>
      <p className="text-[10px] text-[#86868b] mt-0.5">{person.location}</p>

      {/* Title */}
      <p
        className="font-semibold mt-2"
        style={{ color: person.color, fontSize: isLead ? "13px" : "12px" }}
      >
        {person.title}
      </p>
      <p className="text-[10px] text-[#86868b] uppercase tracking-wider mt-0.5">{person.org}</p>

      {/* Bio */}
      <p className="text-[12px] text-[#6e6e73] leading-relaxed mt-3">{person.bio}</p>

      {/* Credentials */}
      <ul className="mt-3 space-y-1.5 flex-1">
        {person.credentials.map((c, i) => (
          <li key={i} className="text-[11px] text-[#6e6e73] flex items-start gap-2">
            <span style={{ color: person.color }} className="mt-0.5 flex-shrink-0">
              ✓
            </span>{" "}
            {c}
          </li>
        ))}
      </ul>

      {/* Contact */}
      <div
        className="mt-4 pt-3 border-t flex items-center gap-3 flex-wrap"
        style={{ borderColor: person.color + "20" }}
      >
        {person.linkedin && (
          <a
            href={person.linkedin}
            target="_blank"
            rel="noopener"
            className="flex items-center gap-1 text-[11px] font-semibold hover:underline"
            style={{ color: person.color }}
          >
            <Linkedin size={11} /> LinkedIn
          </a>
        )}
        {person.email && (
          <a
            href={`mailto:${person.email}`}
            className="flex items-center gap-1 text-[11px] font-semibold hover:underline"
            style={{ color: person.color }}
          >
            <Mail size={11} /> Email
          </a>
        )}
        {person.website && (
          <a
            href={person.website}
            target="_blank"
            rel="noopener"
            className="flex items-center gap-1 text-[11px] font-semibold hover:underline"
            style={{ color: person.color }}
          >
            <Globe size={11} /> liviu.ai
          </a>
        )}
      </div>
    </motion.div>
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
                { value: 30, prefix: "€", suffix: "K", label: "Phase 1 Investment" },
                { value: 18, prefix: "", suffix: " months", label: "To AI Independence" },
                { value: 50, prefix: "", suffix: "+", label: "Agentic AI-Ready Staff" },
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
          <PainGrid />
        </div>
      </section>

      {/* ── MICRO-CTA ────────────────────────────────────────── */}
      <div className="py-10 px-6" style={{ background: "#ff7900" }}>
        <div className="max-w-[900px] mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <p className="text-white font-black text-xl sm:text-2xl leading-tight">
              Seen enough? Start with €30K.
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

          <AnimateIn delay={0.12}>
            <div className="mt-10 mx-auto max-w-[680px] rounded-2xl px-8 py-6 border border-white/10 bg-white/[0.04]">
              <p className="text-[11px] font-black uppercase tracking-widest text-[#ff7900] mb-3">The core principle</p>
              <p className="text-xl font-black text-white leading-snug">
                The agents handle the volume.
                <span className="text-[#ff7900]"> Your people handle what requires judgment.</span>
              </p>
              <p className="text-[13px] text-white/40 mt-3 leading-relaxed">
                These AI agents are not here to replace Orange employees. They exist to remove the high-volume, repetitive grunt work — so your team spends their time on decisions, relationships, and complex cases. The work only humans should be doing.
              </p>
            </div>
          </AnimateIn>

          <AnimateIn delay={0.2}>
            <div className="grid sm:grid-cols-3 gap-6 mt-10">
              {[
                { icon: <Users size={26} />, title: "Train", desc: "8–12 Orange employees learn to build AI agents. Not a course — a build sprint. They leave with skills, not certificates." },
                { icon: <Brain size={26} />, title: "Build", desc: "Each team builds a working agent for a real Orange problem. Contract renewals. Email triage. The agent takes the volume. The employee takes the credit." },
                { icon: <Target size={26} />, title: "Architect", desc: "What your team builds reveals your actual integration landscape — turning 10 weeks of hands-on work into an 18-month AI roadmap grounded in evidence." },
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
                { label: "Entry cost", apex: "€30K", them: "€300K+ minimum" },
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
                tag: "Djia — launched 2021, improving since",
                title: "Your voice AI is getting better. Phase 1 gives you the architecture to prove it to Group.",
                value: "Phase 1 maps the integration landscape your team discovers while building agents against Orange's live systems. That evidence becomes the foundation for fixing Djia in Phase 2 — grounded in your stack, not external assumptions.",
                color: "#ff453a",
                icon: "🤖",
              },
              {
                tag: "€600M AI Value Target — 2028",
                title: "Paris set the target. Bucharest needs to deliver.",
                value: "Phase 1 produces 3–4 working agents and an architecture blueprint. Bucharest becomes the Group's AI reference implementation — political capital for your leadership.",
                color: "#ff7900",
                icon: "📊",
              },
              {
                tag: "Shadow AI — No Governance",
                title: "15 internal experiments. No coordination.",
                value: "12 trained staff who speak the same AI architecture language. A governance framework that coordinates what's already happening internally — and scales it.",
                color: "#6e3aff",
                icon: "🔒",
              },
              {
                tag: "Vendor Lock-In — Genesys, MATRIXX, IBM",
                title: "Your stack already belongs to someone else.",
                value: "Every agent your team builds belongs to Orange. The architecture blueprint lives on InfoAcademy. Zero APEX dependency after Phase 1 if you choose not to continue.",
                color: "#0071e3",
                icon: "🗝️",
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
                Enterprise engineering.
                <br />
                <span className="text-[#86868b]">AI-native delivery.</span>
              </h2>
              <p className="text-lg text-[#6e6e73] mt-4 max-w-[600px] mx-auto">
                IBM and Lloyds pedigree. FDRP AI governance. 40+ years enterprise strategy. Anthropic hackathon alumni. Delivered through InfoAcademy — your existing vendor.
              </p>
            </div>
          </AnimateIn>

          {/* Strategic Leadership */}
          <AnimateIn>
            <p className="text-[11px] font-bold uppercase tracking-widest text-[#86868b] mb-4">Strategic Leadership</p>
          </AnimateIn>
          <div className="grid sm:grid-cols-2 gap-5 mb-8">
            {LEADERSHIP.map((person, i) => (
              <AnimateIn key={i} delay={i * 0.1}>
                <TeamCard person={person} />
              </AnimateIn>
            ))}
          </div>

          {/* Execution Team */}
          <AnimateIn>
            <p className="text-[11px] font-bold uppercase tracking-widest text-[#86868b] mb-4 mt-10">Execution Team</p>
          </AnimateIn>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {TEAM.map((person, i) => (
              <AnimateIn key={i} delay={i * 0.1 + 0.2}>
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
                  <div className="text-3xl font-black text-[#ff7900]">€30K</div>
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
                      { week: "W3–6", title: "Build Sprint", desc: "Each team selects a real Orange use case — network triage, knowledge base, procurement analysis. Orange picks. We guide the build.", color: "#0071e3" },
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
              10 weeks. €30K. Working AI agents built by your team.
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
            <p className="text-[11px] text-white/20 uppercase tracking-widest mt-14">
              InfoAcademy × APEX OS — Bucharest, Romania · London, UK
            </p>
            <a href="https://nico.apex.infoacademy.uk" target="_blank" rel="noopener"
              className="inline-block mt-3 text-[11px] text-white/15 hover:text-[#ff7900] transition-colors tracking-wider">
              nico.apex.infoacademy.uk
            </a>
          </AnimateIn>
        </div>
      </section>
    </main>
  );
}
