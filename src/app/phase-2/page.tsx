"use client"

import { useState } from "react"
import { motion, AnimatePresence, type Variants } from "framer-motion"

// ─── AnimateIn ────────────────────────────────────────────────────────────────
function AnimateIn({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode
  delay?: number
  className?: string
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 32, filter: "blur(6px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

// ─── WhatsApp Icon ─────────────────────────────────────────────────────────────
function WhatsAppIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  )
}

// ─── Stagger container variants ───────────────────────────────────────────────
const staggerContainer: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
}
const staggerItem: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
}

// ─── Data ──────────────────────────────────────────────────────────────────────
const COMPONENTS = [
  {
    id: "head-of-ops",
    icon: "🧠",
    title: "Head of Ops",
    subtitle: "Persistent Agent Orchestration",
    description:
      "A production-grade orchestration layer managing agent sessions, context handoff between conversations, JSONL audit trails, heartbeat monitoring, and a REST API for human-in-the-loop control.",
    why: "Production agents need memory. Without session persistence and context handoff, every interaction starts from zero, losing the context that drives real resolution rates. Head of Ops gives every Phase 1 winner a persistent state layer: agents remember, escalations route correctly, and human reviewers see full conversation history. Applies to whichever Phase 1 winners Orange selects, including any voice or chat surface like Djia if it's in scope.",
    color: "#6e3aff",
  },
  {
    id: "agents-md",
    icon: "📋",
    title: "AGENTS.md Governance",
    subtitle: "AI Operations Framework · policy & drift control",
    description:
      "Enforced governance spec deployed across all repos. Skills system with tiered agent hierarchy, drift detection, and audit-ready compliance. Shadow AI tracked and governed from day one.",
    why: "Internal teams are already using rogue AI tools. Without governance, Orange carries legal and data risk it cannot quantify. AGENTS.md creates the control plane before regulators force it.",
    color: "#ff7900",
  },
  {
    id: "phase-1-winners",
    icon: "🏆",
    title: "Phase 1 Winners → Production",
    subtitle: "Move the proof into daily workflows",
    description:
      "Take the 3-4 winning agents from Phase 1 and move them into production workflows across the departments that owned them. Wire them into Orange's live systems, give them access boundaries, run them under supervision, and measure them daily.",
    why: "Phase 1 was proof. Phase 2 is operationalisation. The winners live inside Orange's actual workflows, not on a demo server. Expansion across multiple departments is the difference between a successful pilot and a repeatable internal capability.",
    color: "#30d158",
  },
  {
    id: "security",
    icon: "🛡️",
    title: "Identity, Audit & Human Review",
    subtitle: "Permissions, audit trails, override controls",
    description:
      "Identity, permissions, audit, and human review controls built in from day one. Every AI decision logged, every override tracked, every agent bounded by role-based access. Production-grade controls, not a demo harness.",
    why: "Orange's regulatory exposure under NIS2, GDPR, and the EU AI Act makes this non-negotiable. Human review and audit trails are the difference between an agent that's allowed in production and one that stays in a sandbox.",
    color: "#ff453a",
  },
  {
    id: "knowledge",
    icon: "📚",
    title: "Knowledge Management",
    subtitle: "RAG pipeline on Orange documentation",
    description:
      "Retrieval-augmented generation pipeline ingesting Orange's internal docs, KB articles, and product specs. Whichever agents need authoritative answers (support triage, internal knowledge assistant, retention copilot) get measurably better without retraining the base model. Knowledge base refreshes continuously.",
    why: "Most agent quality problems are not model problems, they're knowledge access problems. RAG gives every Phase 1 winner instant access to Orange's authoritative documentation, searchable, versioned, and current. If a voice surface like Djia is in scope, the same pipeline lifts it too.",
    color: "#0071e3",
  },
  {
    id: "observability",
    icon: "📡",
    title: "Observability & Model Routing",
    subtitle: "Monitoring, drift detection, support processes",
    description:
      "Observability for every production agent: model routing, drift detection, quality monitoring, support processes. When a model misbehaves, the system catches it, routes around it, and flags it for review. The same discipline Orange already applies to network operations, applied to AI.",
    why: "Productionising AI without observability is guessing. Orange needs to know, not hope, that agents are behaving. This is the layer that makes it safe to scale beyond the first few use cases.",
    color: "#6e3aff",
  },
  {
    id: "integration",
    icon: "🔗",
    title: "AI Layer on Top of Your Existing Stack",
    subtitle: "Genesys, MATRIXX, and internal APIs, not a replacement",
    description:
      "We're not replacing Genesys or MATRIXX. We're training your people to build the AI layer on top of what you already have, to deliver real value most companies don't. API bridges that extend existing infrastructure with AI capabilities (routing, intent detection, real-time enrichment) without touching existing contracts.",
    why: "Orange cannot rip-and-replace €40M+ in vendor contracts, and it shouldn't. The AI layer sits above Genesys and MATRIXX, coordinating them instead of competing with them. Sunk costs protected, AI capability unlocked.",
    color: "#6e3aff",
  },
]

const TIMELINE = [
  {
    months: "Month 1-2",
    label: "Deploy Inside Orange's Environment",
    items: [
      "Head of Ops orchestration layer deployed inside Orange's existing enterprise infrastructure",
      "REST API live, integrated with Orange's identity and access controls",
      "Permissions, audit, and human review controls wired in from day one",
      "JSONL audit trail operational, hooked into Orange's existing logging",
      "Agent heartbeat monitoring connected to Orange's existing NOC",
    ],
    color: "#ff7900",
  },
  {
    months: "Month 2-3",
    label: "Phase 1 Winners into Production",
    items: [
      "3-4 winning agents from Phase 1 wired into live workflows",
      "Access boundaries and role-based permissions in place",
      "RAG pipeline on Orange internal docs",
      "Each production workflow benchmarked against a Group-readable baseline (including any voice surface in scope)",
      "Knowledge base ingestion complete",
    ],
    color: "#0071e3",
  },
  {
    months: "Month 3-4",
    label: "Governance Rollout",
    items: [
      "AGENTS.md deployed across all repos",
      "Shadow AI audit complete",
      "Skills hierarchy live",
      "Drift detection operational",
      "Staff training cohort 2 (25 staff)",
    ],
    color: "#6e3aff",
  },
  {
    months: "Month 4-5",
    label: "Integrations & Multi-Department Expansion",
    items: [
      "Genesys API bridge deployed",
      "MATRIXX AI extension live",
      "Phase 1 winners expanded into additional departments",
      "Cross-department agent orchestration",
      "Observability for every production agent",
    ],
    color: "#30d158",
  },
  {
    months: "Month 5-6",
    label: "Optimisation & Handoff",
    items: [
      "Load testing at production scale",
      "99.5%+ uptime validated",
      "Full documentation handoff",
      "Phase 3 scoping sessions",
      "50+ staff fully governed",
    ],
    color: "#ff453a",
  },
]

const KPIS = [
  {
    metric: "Production Workflow Coverage",
    baseline: "0 workflows in production (Phase 1 outputs are pilots)",
    target: "3-5 production-grade AI workflows live by end of Phase 2",
    method: "Production telemetry and supervised review cycles. The exact 3-5 are the Phase 1 winners Orange picks at the decision gate.",
    icon: "🚀",
  },
  {
    metric: "Multi-Department Reach",
    baseline: "1 department (the Phase 1 sponsor)",
    target: "3+ business units running production agents by Month 5",
    method: "Department-level usage metrics. Each new department gets its own owners, reviewers, and supervised rollout window.",
    icon: "🌐",
  },
  {
    metric: "Human-in-the-Loop Coverage",
    baseline: "Ad-hoc human review (where it exists)",
    target: "100% of high-stakes decisions go through a defined review path with measurable latency",
    method: "Audit trail completeness, review-action SLA, override rate per agent, all in one operational dashboard.",
    icon: "👁️",
  },
  {
    metric: "Group-Readable Reporting",
    baseline: "Internal-only visibility, no Group-level format",
    target: "Single dashboard the CTO can hand to Group AI Paris without translation",
    method: "Defined report schema agreed with Group leadership in Month 1. Live dashboard from Month 4.",
    icon: "📊",
  },
  {
    metric: "Internal Capability",
    baseline: "12 trained Orange staff (Phase 1 cohort)",
    target: "50+ AI-capable employees by end of Phase 2, ownership transferred",
    method: "Cohort certification, hands-on build credit, named owners per agent. Orange runs Phase 3 with its own people, not ours.",
    icon: "🛠️",
  },
]

const BREAKDOWN = [
  { label: "Deployment inside Orange's environment", amount: "€40,000", note: "Head of Ops orchestration layer, identity & audit hooks, deployed onto Orange's existing enterprise infrastructure (no new infra build)" },
  { label: "Genesys/MATRIXX Integration", amount: "€60,000", note: "AI layer on top of existing stack. API bridges, no contract changes" },
  { label: "Phase 1 Winners → Production", amount: "€25,000", note: "Wire the Phase 1 winning agents into live workflows across the departments that own them" },
  { label: "Knowledge Management (RAG)", amount: "€25,000", note: "Retrieval pipeline on Orange's internal documentation, KB, and product specs" },
  { label: "Observability & Governance", amount: "€20,000", note: "Per-agent monitoring, drift detection, human review controls, AGENTS.md rollout" },
  { label: "Training (12 → 50 staff)", amount: "€15,000-€30,000", note: "Hands-on. Included in fixed fee range" },
]

const COMPARISON = [
  {
    vendor: "APEX OS",
    highlight: true,
    delivery: "6 months (Phase 2)",
    ownership: "You own the stack",
    dependency: "Zero vendor lock-in",
    pricePhase2: "€185-200K",
    priceTotal: "€565-700K",
    priceNote: "P1 + P2 + P3 · stop after any phase",
    color: "#ff7900",
  },
  {
    vendor: "IBM",
    highlight: false,
    delivery: "18-24 months",
    ownership: "IBM Watson ecosystem",
    dependency: "Permanent IBM dependency",
    pricePhase2: "",
    priceTotal: "€800K-€2M",
    priceNote: "Single monolithic project",
    color: "#6e3aff",
  },
  {
    vendor: "Accenture",
    highlight: false,
    delivery: "12-18 months",
    ownership: "Consulting deliverables",
    dependency: "Accenture team retention",
    pricePhase2: "",
    priceTotal: "€500K-€1.5M",
    priceNote: "Single monolithic project",
    color: "#6e3aff",
  },
  {
    vendor: "Ericsson",
    highlight: false,
    delivery: "Roadmap TBD",
    ownership: "Ericsson platform",
    dependency: "Full platform dependency",
    pricePhase2: "",
    priceTotal: "€600K-€1.2M",
    priceNote: "Single monolithic project",
    color: "#6e3aff",
  },
]

// ─── Page ──────────────────────────────────────────────────────────────────────
export default function Phase2Page() {
  const [expandedCard, setExpandedCard] = useState<string | null>(null)

  return (
    <div className="bg-white text-[#1d1d1f] font-sans overflow-x-hidden">

      {/* ── 1. HERO ─────────────────────────────────────────────────────────── */}
      <section className="relative bg-[#1d1d1f] text-white overflow-hidden min-h-screen flex items-center">
        {/* Background grid */}
        <div className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
        {/* Orange glow */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full opacity-10"
          style={{ background: "radial-gradient(circle, #ff7900 0%, transparent 70%)" }}
        />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full opacity-5"
          style={{ background: "radial-gradient(circle, #6e3aff 0%, transparent 70%)" }}
        />

        <div className="relative max-w-7xl mx-auto px-6 lg:px-12 py-32">
          <AnimateIn delay={0}>
            <div className="inline-flex items-center gap-2 bg-[#ff7900]/10 border border-[#ff7900]/30 rounded-full px-4 py-2 mb-8">
              <div className="w-2 h-2 rounded-full bg-[#ff7900] animate-pulse" />
              <span className="text-[#ff7900] text-xs font-bold uppercase tracking-widest">
                Requires Phase 1 Completion
              </span>
            </div>
          </AnimateIn>

          <AnimateIn delay={0.1}>
            <div className="flex items-start gap-4 mb-6">
              <span className="text-[#ff7900] text-sm font-bold uppercase tracking-widest mt-2">
                Orange Romania × APEX OS
              </span>
            </div>
            <h1 className="text-5xl lg:text-7xl font-black leading-[0.95] tracking-tight mb-6">
              Phase 2:{" "}
              <span className="block">
                <span className="text-[#ff7900]">Operationalise</span>
              </span>
              <span className="block">& Integrate</span>
            </h1>
          </AnimateIn>

          <AnimateIn delay={0.2}>
            <p className="text-xl text-white/60 max-w-2xl leading-relaxed mb-16">
              Phase 1 proved the concept. Phase 2 moves the Phase 1 winners into production
              workflows and expands them across multiple departments. Governed AI operations,
              observability, and measurable KPIs Orange&apos;s board can report against the
              &apos;Trust the Future&apos; 2026-2030 AI value target.
            </p>
          </AnimateIn>

          {/* Stats bar */}
          <AnimateIn delay={0.3}>
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-white/10 rounded-2xl overflow-hidden border border-white/10"
            >
              {[
                { value: "€185-200K", label: "Fixed Fee" },
                { value: "6 months", label: "Deployment" },
                { value: "7 systems", label: "Deployed" },
                { value: "50+ staff", label: "Governed" },
              ].map((stat) => (
                <motion.div
                  key={stat.label}
                  variants={staggerItem}
                  className="bg-[#1d1d1f] px-8 py-8 text-center"
                >
                  <div className="text-3xl lg:text-4xl font-black text-white mb-2">{stat.value}</div>
                  <div className="text-white/40 text-sm uppercase tracking-widest font-medium">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </AnimateIn>

          <AnimateIn delay={0.4} className="mt-12">
            <div className="flex flex-wrap gap-3">
              <a
                href="https://wa.me/447722195774"
                className="inline-flex items-center gap-2 bg-[#ff7900] text-white px-6 py-3 rounded-full font-bold text-sm hover:bg-[#e56e00] transition-colors"
              >
                <WhatsAppIcon className="w-4 h-4" />
                Start Phase 2 Scoping
              </a>
              <a
                href="#investment"
                className="inline-flex items-center gap-2 bg-white/10 text-white border border-white/20 px-6 py-3 rounded-full font-bold text-sm hover:bg-white/20 transition-colors"
              >
                View Investment Breakdown
              </a>
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* ── 2. MICRO-CTA BAND ───────────────────────────────────────────────── */}
      <section className="bg-[#ff7900] py-5">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-2 h-2 rounded-full bg-white animate-pulse" />
            <span className="text-white font-bold text-sm lg:text-base">
              Phase 1: 10 weeks · 12 staff · Working AI agents built by your team.
            </span>
          </div>
          <a
            href="mailto:nico.f@infoacademy.net"
            className="flex-shrink-0 bg-white text-[#ff7900] px-5 py-2 rounded-full font-bold text-sm hover:bg-orange-50 transition-colors"
          >
            Ready for Phase 2? Contact us →
          </a>
        </div>
      </section>

      {/* ── 3. WHAT GETS BUILT ──────────────────────────────────────────────── */}
      <section className="bg-white py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <AnimateIn>
            <p className="text-[#ff7900] text-xs font-bold uppercase tracking-widest mb-4">
              What we build
            </p>
            <h2 className="text-4xl lg:text-5xl font-black text-[#1d1d1f] mb-6">
              What gets built in six months
            </h2>
            <p className="text-[#6e6e73] text-xl max-w-2xl mb-16 leading-relaxed">
              Six months. Six interlocking systems built inside Orange&apos;s environment, each
              one extending the Phase 1 winners into production. Every component runs in
              APEX OS today, proof available on request.
            </p>
          </AnimateIn>

          <div className="space-y-3">
            {COMPONENTS.map((comp, i) => {
              const isOpen = expandedCard === comp.id
              return (
                <AnimateIn key={comp.id} delay={i * 0.05}>
                  <motion.div
                    layout
                    className="border border-[#e5e5ea] rounded-2xl overflow-hidden cursor-pointer hover:border-[#ff7900]/40 transition-colors"
                    onClick={() => setExpandedCard(isOpen ? null : comp.id)}
                  >
                    <div className="flex items-center gap-4 p-6">
                      <span className="text-2xl flex-shrink-0">{comp.icon}</span>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-3 mb-1">
                          <h3 className="font-black text-[#1d1d1f] text-lg">{comp.title}</h3>
                          <span
                            className="text-xs font-bold px-2 py-0.5 rounded-full"
                            style={{ background: `${comp.color}15`, color: comp.color }}
                          >
                            {comp.subtitle}
                          </span>
                        </div>
                        <p className="text-[#6e6e73] text-sm line-clamp-1">{comp.description}</p>
                      </div>
                      <motion.div
                        animate={{ rotate: isOpen ? 45 : 0 }}
                        transition={{ duration: 0.2 }}
                        className="flex-shrink-0 w-8 h-8 rounded-full bg-[#f5f5f7] flex items-center justify-center text-[#1d1d1f] font-bold text-lg"
                      >
                        +
                      </motion.div>
                    </div>

                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                          className="overflow-hidden"
                        >
                          <div className="px-6 pb-6 border-t border-[#f0f0f5] pt-5">
                            <div className="grid lg:grid-cols-2 gap-6">
                              <div>
                                <p className="text-xs font-bold uppercase tracking-widest text-[#6e6e73] mb-3">
                                  What it does
                                </p>
                                <p className="text-[#1d1d1f] leading-relaxed">{comp.description}</p>
                              </div>
                              <div
                                className="rounded-xl p-5"
                                style={{ background: `${comp.color}08`, border: `1px solid ${comp.color}20` }}
                              >
                                <p className="text-xs font-bold uppercase tracking-widest mb-3"
                                  style={{ color: comp.color }}>
                                  Why Orange needs this
                                </p>
                                <p className="text-[#1d1d1f] leading-relaxed text-sm">{comp.why}</p>
                              </div>
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                </AnimateIn>
              )
            })}
          </div>
        </div>
      </section>

      {/* ── 4. TIMELINE ─────────────────────────────────────────────────────── */}
      <section className="bg-[#1d1d1f] text-white py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <AnimateIn>
            <p className="text-[#ff7900] text-xs font-bold uppercase tracking-widest mb-4">
              6-Month Deployment Plan
            </p>
            <h2 className="text-4xl lg:text-5xl font-black mb-6">
              Timeline
            </h2>
            <p className="text-white/50 text-xl max-w-2xl mb-16 leading-relaxed">
              Sequential delivery with clear milestones. Each month ships something Orange can
              measure immediately.
            </p>
          </AnimateIn>

          <div className="grid lg:grid-cols-5 gap-4">
            {TIMELINE.map((phase, i) => (
              <AnimateIn key={phase.months} delay={i * 0.08} className="h-full">
                <div className="relative h-full">
                  {/* Connector line */}
                  {i < TIMELINE.length - 1 && (
                    <div className="hidden lg:block absolute top-10 left-full w-4 h-px bg-white/10 z-10" />
                  )}
                  <div
                    className="h-full rounded-2xl p-6 border"
                    style={{
                      background: `${phase.color}08`,
                      borderColor: `${phase.color}25`,
                    }}
                  >
                    <div
                      className="text-xs font-bold uppercase tracking-widest mb-2"
                      style={{ color: phase.color }}
                    >
                      {phase.months}
                    </div>
                    <div className="font-black text-white mb-4 text-lg leading-tight">
                      {phase.label}
                    </div>
                    <ul className="space-y-2">
                      {phase.items.map((item) => (
                        <li key={item} className="flex items-start gap-2 text-white/60 text-sm">
                          <div
                            className="w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0"
                            style={{ background: phase.color }}
                          />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </AnimateIn>
            ))}
          </div>

          {/* Bottom note */}
          <AnimateIn delay={0.4} className="mt-12">
            <div className="border border-white/10 rounded-2xl p-6 flex flex-col lg:flex-row gap-6 items-start lg:items-center justify-between">
              <div>
                <p className="font-black text-white mb-1">This is not a consulting engagement.</p>
                <p className="text-white/50 text-sm">
                  Every component ships as deployed infrastructure, not recommendations.
                  KPIs are contractually defined before day one.
                </p>
              </div>
              <div className="flex-shrink-0 bg-[#ff7900]/10 border border-[#ff7900]/30 rounded-xl px-6 py-3 text-center">
                <div className="text-[#ff7900] font-black text-2xl">6mo</div>
                <div className="text-[#ff7900]/70 text-xs uppercase tracking-widest">fixed delivery</div>
              </div>
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* ── 5. KPIs ─────────────────────────────────────────────────────────── */}
      <section className="bg-[#f5f5f7] py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <AnimateIn>
            <p className="text-[#ff7900] text-xs font-bold uppercase tracking-widest mb-4">
              Measurable Outcomes
            </p>
            <h2 className="text-4xl lg:text-5xl font-black text-[#1d1d1f] mb-6">
              KPIs Orange can report
            </h2>
            <p className="text-[#6e6e73] text-xl max-w-2xl mb-16 leading-relaxed">
              Five hard metrics, each with a defined measurement method. No vanity
              numbers. Only figures that appear in a board report.
            </p>
          </AnimateIn>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {KPIS.map((kpi, i) => (
              <AnimateIn key={kpi.metric} delay={i * 0.06} className="h-full">
                <div
                  className="bg-white rounded-2xl p-7 h-full flex flex-col"
                  style={{
                    border: "1px solid #e5e5ea",
                    boxShadow: "0 1px 0 rgba(0,0,0,0.03), 0 8px 32px rgba(0,0,0,0.04)",
                  }}
                >
                  {/* Header: icon tile + metric name */}
                  <div className="flex items-start gap-4 mb-5">
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 text-2xl"
                      style={{ backgroundColor: "#ff790018" }}
                    >
                      {kpi.icon}
                    </div>
                    <div className="flex-1 min-w-0 pt-1">
                      <div className="text-[10px] font-black uppercase tracking-[0.15em] text-[#ff7900] mb-1">
                        Metric {String(i + 1).padStart(2, "0")}
                      </div>
                      <h3 className="text-[16px] font-black text-[#1d1d1f] leading-tight">
                        {kpi.metric}
                      </h3>
                    </div>
                  </div>

                  {/* How we measure */}
                  <p className="text-[13px] text-[#6e6e73] leading-relaxed mb-5 flex-1">
                    {kpi.method}
                  </p>

                  {/* Baseline → Target as tag pills */}
                  <div className="flex flex-wrap gap-2">
                    <span
                      className="text-[10px] font-bold uppercase tracking-wider px-3 py-1.5 rounded-full"
                      style={{
                        border: "1px solid #86868b40",
                        color: "#6e6e73",
                        backgroundColor: "#86868b0d",
                      }}
                    >
                      Baseline · {kpi.baseline}
                    </span>
                    <span
                      className="text-[10px] font-bold uppercase tracking-wider px-3 py-1.5 rounded-full"
                      style={{
                        border: "1px solid #30d15840",
                        color: "#1f9447",
                        backgroundColor: "#30d1580d",
                      }}
                    >
                      Target · {kpi.target}
                    </span>
                  </div>
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── 6. INVESTMENT ───────────────────────────────────────────────────── */}
      <section id="investment" className="bg-[#1d1d1f] text-white py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <AnimateIn>
            <p className="text-[#ff7900] text-xs font-bold uppercase tracking-widest mb-4">
              Investment
            </p>
            <h2 className="text-4xl lg:text-5xl font-black mb-6">
              €185-200K fixed fee
            </h2>
            <p className="text-white/50 text-xl max-w-2xl mb-16 leading-relaxed">
              Fixed-fee engagement. No time-and-materials surprises. Every line item
              is infrastructure Orange owns, not a subscription or retainer.
            </p>
          </AnimateIn>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Breakdown */}
            <AnimateIn delay={0.1}>
              <div className="space-y-3">
                {BREAKDOWN.map((item, i) => (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.07, duration: 0.4 }}
                    className="flex items-start justify-between gap-4 p-5 rounded-xl border border-white/10 bg-white/[0.03] hover:bg-white/[0.06] transition-colors"
                  >
                    <div className="flex-1">
                      <div className="font-black text-white mb-1">{item.label}</div>
                      <div className="text-white/40 text-sm">{item.note}</div>
                    </div>
                    <div className="text-[#ff7900] font-black text-lg flex-shrink-0 text-right">
                      {item.amount}
                    </div>
                  </motion.div>
                ))}

                {/* Total */}
                <div className="flex items-center justify-between p-6 rounded-xl bg-[#ff7900] mt-4">
                  <div>
                    <div className="text-white/80 text-sm font-bold uppercase tracking-widest mb-1">
                      Total Investment
                    </div>
                    <div className="text-white text-sm">Fixed fee, no surprises</div>
                  </div>
                  <div className="text-white font-black text-3xl">€185-200K</div>
                </div>
              </div>
            </AnimateIn>

            {/* Comparison */}
            <AnimateIn delay={0.2}>
              <div className="rounded-2xl border border-white/10 overflow-hidden">
                <div className="p-6 border-b border-white/10">
                  <h3 className="font-black text-white text-xl">vs. The Alternatives</h3>
                  <p className="text-white/40 text-sm mt-1">
                    Enterprise vendors don&apos;t phase. Their numbers are for a single monolithic
                    project that covers the same ground as our full Phase 1 + 2 + 3 engagement
                    (€565-700K).
                  </p>
                </div>
                <div className="divide-y divide-white/10">
                  {[
                    { name: "Genesys AI Add-on", price: "€400K+", note: "Per-year licensing, no ownership" },
                    { name: "IBM AI Services", price: "€800K-€2M", note: "18-24 month delivery, single project" },
                    { name: "Accenture Advisory", price: "€500K-€1.5M", note: "Slide decks, not infrastructure" },
                    { name: "Ericsson Platform", price: "€600K-€1.2M", note: "Full vendor dependency" },
                  ].map((alt) => (
                    <div key={alt.name} className="flex items-center justify-between p-5">
                      <div>
                        <div className="text-white font-bold">{alt.name}</div>
                        <div className="text-white/40 text-sm">{alt.note}</div>
                      </div>
                      <div className="text-[#ff453a] font-black text-lg">{alt.price}</div>
                    </div>
                  ))}
                </div>
                <div className="p-5 bg-white/[0.03] border-t border-white/10">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-2 h-2 rounded-full bg-[#30d158]" />
                    <span className="text-[#30d158] font-black text-sm">Same ground, at least 30% less, and you can stop at any phase</span>
                  </div>
                  <p className="text-white/40 text-xs">
                    Full three-phase APEX engagement: €565-700K. Every phase is a decision gate.
                    Orange owns everything built to that point whether you continue or not.
                  </p>
                </div>
              </div>
            </AnimateIn>
          </div>
        </div>
      </section>

      {/* ── 7. WHY APEX OS NOT IBM ──────────────────────────────────────────── */}
      <section className="bg-white py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <AnimateIn>
            <div className="text-center mb-6">
              <p className="text-[#ff7900] text-xs font-bold uppercase tracking-widest mb-4">
                Vendor Selection
              </p>
              <h2 className="text-4xl lg:text-5xl font-black text-[#1d1d1f] mb-6">
                Why APEX OS, not IBM
              </h2>
              <p className="text-[#6e6e73] text-xl max-w-2xl mx-auto leading-relaxed">
                The comparison Orange&apos;s procurement team will run. We&apos;ve done it for you.
              </p>
            </div>
          </AnimateIn>

          {/* Clarifying framing paragraph */}
          <AnimateIn delay={0.05}>
            <div className="max-w-3xl mx-auto mb-12 rounded-2xl border border-[#ff7900]/25 bg-[#ff7900]/5 p-6 text-center">
              <p className="text-[13px] font-black uppercase tracking-widest text-[#ff7900] mb-2">
                How to read this
              </p>
              <p className="text-[15px] text-[#1d1d1f] leading-relaxed">
                Enterprise vendors don&apos;t phase. IBM, Accenture, and Ericsson propose single
                monolithic 12-24 month projects to deliver the same capability Orange would get
                across our Phase 1 + Phase 2 + Phase 3 combined. The numbers below show their
                equivalent programme cost versus our full three-phase engagement.
              </p>
              <p className="text-[13px] text-[#6e6e73] leading-relaxed mt-3">
                Our model: three fixed phases, scoped and priced separately. Phase 1 is €30-50K,
                Phase 2 is €185-200K, Phase 3 is €350-450K. <strong>Total engagement
                €565-700K.</strong> You stop after any phase and keep everything built to that
                point. No vendor in the comparison below offers that structure.
              </p>
            </div>
          </AnimateIn>

          {/* Table header */}
          <div className="overflow-x-auto">
            <div className="min-w-[700px]">
              {/* Column headers */}
              <AnimateIn delay={0.1}>
                <div className="grid grid-cols-5 gap-3 mb-3">
                  <div className="col-span-1" />
                  {COMPARISON.map((v) => (
                    <div
                      key={v.vendor}
                      className={`rounded-xl p-4 text-center font-black text-lg ${
                        v.highlight
                          ? "bg-[#ff7900] text-white"
                          : "bg-[#f5f5f7] text-[#1d1d1f]"
                      }`}
                    >
                      {v.vendor}
                      {v.highlight && (
                        <div className="text-white/80 text-xs font-normal mt-1">Existing vendor</div>
                      )}
                    </div>
                  ))}
                </div>
              </AnimateIn>

              {/* Non-price rows */}
              {[
                { label: "Delivery Time", key: "delivery" as const },
                { label: "Ownership", key: "ownership" as const },
                { label: "Dependency", key: "dependency" as const },
              ].map((row, ri) => (
                <AnimateIn key={row.label} delay={0.15 + ri * 0.07}>
                  <div className="grid grid-cols-5 gap-3 mb-3">
                    <div className="flex items-center px-4">
                      <span className="text-xs font-bold uppercase tracking-widest text-[#6e6e73]">
                        {row.label}
                      </span>
                    </div>
                    {COMPARISON.map((v) => (
                      <div
                        key={v.vendor}
                        className={`rounded-xl p-4 text-sm font-bold flex items-center ${
                          v.highlight
                            ? "bg-[#ff7900]/10 border border-[#ff7900]/30 text-[#1d1d1f]"
                            : "bg-[#f5f5f7] text-[#6e6e73]"
                        }`}
                      >
                        {v[row.key]}
                      </div>
                    ))}
                  </div>
                </AnimateIn>
              ))}

              {/* Price divider label */}
              <AnimateIn delay={0.36}>
                <div className="grid grid-cols-5 gap-3 mb-3 mt-8">
                  <div className="flex items-center px-4">
                    <span className="text-xs font-bold uppercase tracking-widest text-[#ff7900]">
                      Price
                    </span>
                  </div>
                  <div className="col-span-4 flex items-center">
                    <div className="h-px flex-1 bg-[#e5e5ea]" />
                  </div>
                </div>
              </AnimateIn>

              {/* Phase 2 scope price row */}
              <AnimateIn delay={0.4}>
                <div className="grid grid-cols-5 gap-3 mb-3">
                  <div className="flex items-center px-4">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-[#6e6e73] leading-tight">
                      Phase 2 scope
                      <span className="block text-[#86868b] font-normal normal-case tracking-normal mt-0.5">
                        6-month production deployment
                      </span>
                    </span>
                  </div>
                  {COMPARISON.map((v) => (
                    <div
                      key={v.vendor}
                      className={`rounded-xl p-4 flex flex-col justify-center min-h-[68px] ${
                        v.highlight
                          ? "bg-[#ff7900]/10 border border-[#ff7900]/30"
                          : "bg-[#f5f5f7]"
                      }`}
                    >
                      {v.highlight ? (
                        <div className="text-[17px] font-black text-[#1d1d1f] leading-none">
                          {v.pricePhase2}
                        </div>
                      ) : (
                        <div className="text-[12px] italic text-[#86868b] leading-snug">
                          Not offered as a phase
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </AnimateIn>

              {/* Full engagement price row */}
              <AnimateIn delay={0.46}>
                <div className="grid grid-cols-5 gap-3 mb-3">
                  <div className="flex items-center px-4">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-[#6e6e73] leading-tight">
                      Full engagement
                      <span className="block text-[#86868b] font-normal normal-case tracking-normal mt-0.5">
                        equivalent total programme
                      </span>
                    </span>
                  </div>
                  {COMPARISON.map((v) => (
                    <div
                      key={v.vendor}
                      className={`rounded-xl p-4 flex flex-col justify-center min-h-[68px] ${
                        v.highlight
                          ? "bg-[#ff7900]/10 border border-[#ff7900]/30"
                          : "bg-[#f5f5f7]"
                      }`}
                    >
                      <div className={`text-[17px] font-black leading-none ${v.highlight ? "text-[#1d1d1f]" : "text-[#6e6e73]"}`}>
                        {v.priceTotal}
                      </div>
                      <div className={`text-[10px] mt-1.5 leading-snug ${v.highlight ? "text-[#ff7900]/80 font-semibold" : "text-[#86868b]"}`}>
                        {v.priceNote}
                      </div>
                    </div>
                  ))}
                </div>
              </AnimateIn>
            </div>
          </div>

          {/* Supporting points */}
          <AnimateIn delay={0.4} className="mt-16">
            <div className="grid lg:grid-cols-3 gap-6 items-stretch">
              {[
                {
                  title: "Production-proven today",
                  body: "Every system in Phase 2 is running in production. We're not proposing architecture. We're deploying infrastructure we already operate.",
                  icon: "✅",
                },
                {
                  title: "Existing Orange vendor",
                  body: "Phase 1 delivered through InfoAcademy, already in Orange's procurement system. No new vendor approval required. Phase 2 is a PO extension.",
                  icon: "🤝",
                },
                {
                  title: "You own everything",
                  body: "Source code, documentation, and infrastructure are Orange's on day one. No SaaS dependency, no ongoing license fees, no renegotiation leverage.",
                  icon: "🔑",
                },
              ].map((point) => (
                <div
                  key={point.title}
                  className="h-full flex flex-col rounded-2xl p-6 border border-[#e5e5ea] bg-[#fafafa]"
                >
                  <div className="text-3xl mb-4 flex-shrink-0">{point.icon}</div>
                  <div className="font-black text-[#1d1d1f] text-lg mb-3">{point.title}</div>
                  <p className="text-[#6e6e73] leading-relaxed text-sm flex-1">{point.body}</p>
                </div>
              ))}
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* ── 8. PHASE 3 PREVIEW ──────────────────────────────────────────────── */}
      <section className="bg-[#1d1d1f] text-white py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="max-w-4xl mx-auto text-center">
            <AnimateIn>
              <p className="text-[#6e3aff] text-xs font-bold uppercase tracking-widest mb-4">
                What comes next
              </p>
              <h2 className="text-4xl lg:text-5xl font-black mb-6">
                Phase 3: Cognitive Architecture
              </h2>
              <p className="text-white/50 text-xl max-w-2xl mx-auto leading-relaxed mb-12">
                Phase 2 sets the infrastructure foundation. Phase 3 adds the intelligence layer:
                autonomous agents that learn from Orange&apos;s operations, predict failures, and
                act without human prompting.
              </p>
            </AnimateIn>

            <AnimateIn delay={0.1}>
              <div className="grid lg:grid-cols-3 gap-4 mb-12">
                {[
                  { icon: "🤖", label: "Autonomous Agents", desc: "Self-healing infrastructure that responds to incidents before staff are paged" },
                  { icon: "🧬", label: "Cognitive RAG", desc: "Knowledge base that updates itself from call transcripts and ticket resolutions" },
                  { icon: "📡", label: "Predictive Operations", desc: "ML models trained on Orange's own operational data, not generic benchmarks" },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="h-full flex flex-col rounded-2xl p-6 border border-[#6e3aff]/30 bg-[#6e3aff]/5 text-left"
                  >
                    <div className="text-3xl mb-4 flex-shrink-0">{item.icon}</div>
                    <div className="font-black text-white mb-3">{item.label}</div>
                    <p className="text-white/50 text-sm leading-relaxed flex-1">{item.desc}</p>
                  </div>
                ))}
              </div>
            </AnimateIn>

            <AnimateIn delay={0.2}>
              <div className="inline-flex items-center gap-3 bg-[#6e3aff]/10 border border-[#6e3aff]/30 rounded-full px-6 py-3 text-[#6e3aff] font-bold text-sm">
                Phase 3 scoping included in Phase 2 Month 5-6
              </div>
            </AnimateIn>
          </div>
        </div>
      </section>

      {/* ── 9. CTA ──────────────────────────────────────────────────────────── */}
      <section
        className="relative py-32 overflow-hidden"
        style={{
          background: "linear-gradient(135deg, #1d1d1f 0%, #2a1810 40%, #1d1d1f 100%)",
        }}
      >
        {/* Glow effects */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] rounded-full opacity-20"
          style={{ background: "radial-gradient(ellipse, #ff7900 0%, transparent 70%)" }}
        />
        <div className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />

        <div className="relative max-w-7xl mx-auto px-6 lg:px-12 text-center">
          <AnimateIn>
            <div className="inline-flex items-center gap-2 bg-[#ff7900]/10 border border-[#ff7900]/30 rounded-full px-4 py-2 mb-8">
              <div className="w-2 h-2 rounded-full bg-[#ff7900] animate-pulse" />
              <span className="text-[#ff7900] text-xs font-bold uppercase tracking-widest">
                Phase 1 in progress. Phase 2 scoping open.
              </span>
            </div>
            <h2 className="text-4xl lg:text-6xl font-black text-white mb-6 leading-tight">
              Start the Phase 2
              <br />
              <span className="text-[#ff7900]">scoping call</span>
            </h2>
            <p className="text-white/50 text-xl max-w-2xl mx-auto mb-12 leading-relaxed">
              This is a conversation between Orange's IT leadership and APEX OS.
              No sales team. No NDAs required upfront. Just a 60-minute technical
              scoping call to align on scope and KPIs.
            </p>
          </AnimateIn>

          <AnimateIn delay={0.15}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
              <a
                href="https://wa.me/447722195774?text=Phase%202%20scoping%20call%20request"
                className="inline-flex items-center justify-center gap-2 bg-[#25d366] text-white px-8 py-4 rounded-full font-black text-lg hover:bg-[#20bc5a] transition-colors shadow-lg shadow-[#25d366]/20"
              >
                <WhatsAppIcon className="w-5 h-5" />
                WhatsApp us directly
              </a>
              <a
                href="mailto:nico.f@infoacademy.net?subject=Phase%202%20Scoping%20Call%20-%20Orange%20Romania"
                className="inline-flex items-center justify-center gap-2 bg-[#ff7900] text-white px-8 py-4 rounded-full font-black text-lg hover:bg-[#e56e00] transition-colors shadow-lg shadow-[#ff7900]/20"
              >
                Email for Phase 2 scoping
              </a>
            </div>
          </AnimateIn>

          {/* Bottom trust signals */}
          <AnimateIn delay={0.25}>
            <div className="border border-white/10 rounded-2xl p-8 max-w-3xl mx-auto">
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                  { value: "3-5", label: "Production workflows" },
                  { value: "50+", label: "AI-capable staff" },
                  { value: "6 mo", label: "Fixed delivery" },
                  { value: "100%", label: "Orange-owned" },
                ].map((stat) => (
                  <div key={stat.label} className="text-center">
                    <div className="text-white font-black text-2xl mb-1">{stat.value}</div>
                    <div className="text-white/40 text-xs uppercase tracking-widest">{stat.label}</div>
                  </div>
                ))}
              </div>

              <div className="border-t border-white/10 mt-6 pt-6 text-center">
                <p className="text-white/30 text-sm">
                  APEX OS is delivered through <strong className="text-white/50">InfoAcademy</strong> - 
                  existing Orange Romania vendor. Phase 1 invoiced and delivered. Phase 2 is a PO extension.
                </p>
              </div>
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* ── FOOTER ──────────────────────────────────────────────────────────── */}
      <footer className="bg-[#1d1d1f] border-t border-white/10 py-8">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col lg:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div
              className="w-7 h-7 rounded-lg flex items-center justify-center font-black text-white text-xs"
              style={{ background: "#ff7900" }}
            >
              A
            </div>
            <span className="text-white/40 text-sm">APEX OS × InfoAcademy</span>
            <span className="text-white/20 text-sm">·</span>
            <span className="text-white/40 text-sm">Orange Romania Phase 2 Proposal</span>
          </div>
          <div className="text-white/20 text-xs">
            Confidential: For Marius Maican (CTO) & Alexandru Ilie (IT Director)
          </div>
        </div>
      </footer>
    </div>
  )
}
