"use client";

import { motion } from "framer-motion";
import {
  Shield,
  Brain,
  GitBranch,
  TrendingUp,
  Globe,
  CheckCircle,
  AlertTriangle,
  BarChart3,
  Cpu,
  Lock,
  Layers,
  ArrowRight,
  Star,
  DollarSign,
  Clock,
  Users,
  Zap,
  Target,
  Award,
} from "lucide-react";

const AnimateIn = ({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) => (
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6, delay, ease: [0.21, 0.47, 0.32, 0.98] }}
    className={className}
  >
    {children}
  </motion.div>
);

const DELIVERABLES = [
  {
    icon: GitBranch,
    color: "#6e3aff",
    title: "FDRP Gate Lifecycle",
    subtitle: "PDR → CDR → FDR → TRR → PQR",
    description:
      "Every Orange AI decision — from Djia architecture changes to model selection — treated as a manufactured artifact with six mandatory quality gates. No high-stakes AI output ships without gate sign-off.",
    applies: ["Djia architecture decisions", "New agent deployments", "Model selection", "Data governance"],
  },
  {
    icon: Brain,
    color: "#ff7900",
    title: "N≥3 Cross-Model Verification",
    subtitle: "Claude + GPT + Gemini independently",
    description:
      "Every high-stakes AI output verified by three separate frontier models. Catches systematic bias that single-model review misses. Required for EU AI Act high-risk AI classification. Same methodology that caught an arithmetic error and self-corrected convergence from 85.7% to 75%.",
    applies: ["Djia response quality", "Model bias detection", "EU AI Act evidence trail", "Regulatory reporting"],
  },
  {
    icon: BarChart3,
    color: "#0071e3",
    title: "Convergence Velocity Tensor (CVT)",
    subtitle: "Measurable AI decision quality KPIs",
    description:
      "Orange's board stops seeing 'are agents running' and starts seeing AI convergence scores. CVT tracks decision quality over time, identifies drift, flags regressions before they become outages.",
    applies: ["Board-level AI dashboard", "Decision quality trending", "Regression detection", "Portfolio KPIs"],
  },
  {
    icon: Cpu,
    color: "#30d158",
    title: "Romanian NLP Fine-Tuning Pipeline",
    subtitle: "Djia: pilot-era baseline → 80%+ target",
    description:
      "Custom model trained on Orange's own call data. Fine-tuned on Romanian telecom vocabulary, Orange-specific intents, regional dialect variation. The infrastructure to retrain continuously as new call patterns emerge.",
    applies: ["Djia voice AI improvement", "Romanian dialect handling", "Telecom intent recognition", "Continuous retraining"],
  },
  {
    icon: Shield,
    color: "#ff3b30",
    title: "EU AI Act Compliance Framework",
    subtitle: "Article 6/9 — Deadline August 2026",
    description:
      "Article 6 classification for Djia (high-risk AI). Risk management system, technical documentation, human oversight protocols, accuracy testing — all mandatory before the August 2026 deadline. GDPR-scale fines for non-compliance.",
    applies: ["Djia Article 6 classification", "Risk management system", "Technical documentation", "Human oversight protocols"],
  },
  {
    icon: DollarSign,
    color: "#ff9500",
    title: "Procurement Intelligence",
    subtitle: "€5–10M renegotiation opportunities",
    description:
      "LOFTREK's OSINT methodology applied to Orange's vendor estate — Genesys, MATRIXX, IBM. Identifies contract redundancies, pricing anomalies, consolidation opportunities. Operator-grade procurement intelligence, not consultant guesswork.",
    applies: ["Genesys contract analysis", "MATRIXX pricing audit", "IBM contract review", "Vendor consolidation map"],
  },
  {
    icon: Users,
    color: "#6e3aff",
    title: "Expert Expansion Panel",
    subtitle: "20+ LLM-generated domain specialists",
    description:
      "Orange's AI architecture reviewed by a synthesized panel spanning telecom engineering, cybersecurity, manufacturing quality, regulatory compliance. Cross-domain validation catches blind spots that single-domain review misses.",
    applies: ["Architecture blind spot detection", "Cross-domain validation", "Regulatory review", "Security assessment"],
  },
  {
    icon: Globe,
    color: "#0071e3",
    title: "Cognitive Architecture Dashboard",
    subtitle: "Real-time AI system health",
    description:
      "Single pane of glass: convergence metrics, gate status, compliance posture, Djia performance, CVT trending. Orange's leadership team and Group AI Paris both see the same real-time view.",
    applies: ["CTO real-time view", "Board reporting layer", "Group AI Paris feed", "Audit trail"],
  },
];

const TIMELINE = [
  {
    months: "1–2",
    title: "FDRP Deployment",
    description: "Gate lifecycle deployed on Orange's existing AI decision inventory. PDR through PQR gates activated on active Djia changes.",
    color: "#ff7900",
  },
  {
    months: "2–4",
    title: "Romanian NLP Pipeline",
    description: "Fine-tuning pipeline built on Orange's own call data — accelerating the improvements already happening internally. Performance formally benchmarked against Group reporting standards. Target trajectory set from Orange's operational evidence.",
    color: "#6e3aff",
  },
  {
    months: "3–5",
    title: "EU AI Act Framework",
    description: "Article 6/9 classification completed. Risk management system implemented. Technical documentation generated. Human oversight protocols deployed.",
    color: "#ff3b30",
  },
  {
    months: "4–6",
    title: "N≥3 Verification in Production",
    description: "Cross-model verification integrated into Orange's AI pipelines. CVT tracking active. First board dashboard delivered.",
    color: "#0071e3",
  },
  {
    months: "5–7",
    title: "CVT Dashboard + Procurement Intelligence",
    description: "Convergence Velocity Tensor live for leadership. Vendor OSINT reports delivered for Genesys, MATRIXX, IBM. Renegotiation recommendations prepared.",
    color: "#30d158",
  },
  {
    months: "7–9",
    title: "Expert Panel + Phase 4 Roadmap",
    description: "20+ specialist panel runs on full Orange AI architecture. Phase 4 roadmap delivered. Group replication blueprint for Poland, Belgium, Spain.",
    color: "#ff9500",
  },
];

const ROI_ITEMS = [
  {
    icon: TrendingUp,
    label: "Djia Success Rate",
    from: "52% (2021 pilot)",
    to: "80%+",
    context: "9.3M subscribers — internal improvements made Group-reportable",
    color: "#30d158",
  },
  {
    icon: Shield,
    label: "EU AI Act Exposure",
    from: "Unclassified",
    to: "Compliant",
    context: "August 2026 deadline cleared",
    color: "#ff7900",
  },
  {
    icon: DollarSign,
    label: "Vendor Renegotiation",
    from: "Unknown",
    to: "€5–10M",
    context: "Identified opportunities",
    color: "#0071e3",
  },
  {
    icon: Globe,
    label: "Group Replication",
    from: "Bucharest only",
    to: "4 markets",
    context: "Poland, Belgium, Spain, NL",
    color: "#6e3aff",
  },
];

const TEAM = [
  {
    name: "Nico Fratila",
    role: "AI Infrastructure Architect",
    org: "APEX OS / InfoAcademy",
    credentials: "Built APEX OS — sovereign AI OS with 400+ self-evolving skills, persistent agent memory, multi-model orchestration, self-healing watchdog, FDRP gate automation, and knowledge distillation engine, running 24/7 on Azure. Lloyds Banking Group (5 yrs). CUBE Global CCO (RegTech). InfoAcademy CEO — existing Orange vendor.",
    color: "#ff7900",
    lead: false,
  },
  {
    name: "Liviu Olos",
    role: "Lead AI Systems Architect — FDRP Creator",
    org: "LOFTREK / liviu.ai",
    credentials: "Creator of FDRP: 32 subsystems, 557 DB tables, evolves daily. LOFTREK: 790+ clients, 76 public institutions. Anthropic global hackathon — top 500 of 13,000 candidates. Member of Anthropic's private research network. EU AI Act, NIS2 & NATO DIANA authority. EU Horizon project specialist.",
    color: "#f0b429",
    lead: true,
  },
  {
    name: "Bogdan Toporan",
    role: "Engineering Leader & AI Architect",
    org: "ARANDI / ex-Telenav / ex-HP",
    credentials: "17+ years enterprise architecture. AI Agent Orchestration and RAG specialist. Built telecom-grade data pipelines at Telenav serving millions of users. Led 40+ engineer teams. US Patent holder.",
    color: "#6e3aff",
    lead: false,
  },
];

export default function Phase3Page() {
  return (
    <main className="min-h-screen bg-[#1d1d1f] text-white font-sans antialiased">
      {/* Hero */}
      <section className="relative overflow-hidden bg-[#1d1d1f] pt-24 pb-32 px-6">
        {/* Background glow */}
        <div className="absolute inset-0 pointer-events-none">
          <div
            className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[500px] rounded-full opacity-20 blur-[120px]"
            style={{ background: "radial-gradient(ellipse, #ff7900 0%, #6e3aff 50%, transparent 80%)" }}
          />
        </div>

        <div className="relative max-w-5xl mx-auto text-center">
          <AnimateIn>
            <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-2 mb-8 text-sm text-white/70">
              <Layers size={14} className="text-[#ff7900]" />
              <span>Phase 3 of 4 · Following successful Phase 1–2 deployment</span>
            </div>
          </AnimateIn>

          <AnimateIn delay={0.1}>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 leading-[1.05]">
              Architectural
              <br />
              <span style={{ color: "#ff7900" }}>Cognition</span>
            </h1>
          </AnimateIn>

          <AnimateIn delay={0.2}>
            <p className="text-xl md:text-2xl text-white/60 max-w-3xl mx-auto mb-4 leading-relaxed">
              Phase 2 built Orange Romania&apos;s AI infrastructure. Phase 3 makes it{" "}
              <span className="text-white font-medium">intelligent</span> —
              self-verifying, gate-reviewed, and EU AI Act compliant before August 2026.
            </p>
          </AnimateIn>

          <AnimateIn delay={0.3}>
            <p className="text-base text-white/40 mb-12">
              9 months · €350–450K fixed · Optional FDRP licence €30K/year
            </p>
          </AnimateIn>

          <AnimateIn delay={0.4}>
            <div className="flex flex-wrap justify-center gap-4">
              {[
                { label: "Duration", value: "9 months", icon: Clock },
                { label: "Investment", value: "€350–450K", icon: DollarSign },
                { label: "Djia Target", value: "pilot 52% → 80%+", icon: TrendingUp },
                { label: "EU AI Act", value: "Aug 2026", icon: Shield },
              ].map(({ label, value, icon: Icon }) => (
                <div
                  key={label}
                  className="flex items-center gap-3 bg-white/8 border border-white/15 rounded-2xl px-5 py-3"
                >
                  <Icon size={16} className="text-[#ff7900]" />
                  <div className="text-left">
                    <div className="text-xs text-white/40 uppercase tracking-wider">{label}</div>
                    <div className="text-sm font-semibold text-white">{value}</div>
                  </div>
                </div>
              ))}
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* Context: The Problem */}
      <section className="bg-white py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <AnimateIn>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-[#1d1d1f] mb-4">
                The Infrastructure Is Running.
                <br />
                <span style={{ color: "#ff7900" }}>Now It Needs to Think.</span>
              </h2>
              <p className="text-xl text-[#6e6e73] max-w-2xl mx-auto">
                Phase 2 deployed APEX OS. Orange now has the pipes. Phase 3 installs the quality layer
                that makes every AI decision measurable, verifiable, and defensible to regulators.
              </p>
            </div>
          </AnimateIn>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: AlertTriangle,
                color: "#ff3b30",
                title: "Djia — Strong Foundation, Missing Governance Layer",
                body: "Djia launched at 52% in 2021 and Orange's internal teams have been improving it since. What's missing is not performance — it's the governance framework to measure, verify, and report those improvements against Group AI targets.",
              },
              {
                icon: Lock,
                color: "#ff9500",
                title: "EU AI Act Exposure",
                body: "Djia likely classifies as high-risk AI under Article 6. Without a risk management system, Orange faces GDPR-scale fines. Deadline: August 2026.",
              },
              {
                icon: Zap,
                color: "#6e3aff",
                title: "€600M AI Value Target",
                body: "Orange Group's 'Trust the Future' 2026–2030 strategy targets €600M in AI-generated value by 2028. Bucharest's execution quality determines whether Romania leads or follows within Group.",
              },
            ].map(({ icon: Icon, color, title, body }) => (
              <AnimateIn key={title}>
                <div className="rounded-2xl border border-[#e5e5ea] p-7 bg-[#f5f5f7] h-full">
                  <Icon size={28} style={{ color }} className="mb-4" />
                  <h3 className="text-lg font-bold text-[#1d1d1f] mb-3">{title}</h3>
                  <p className="text-[#6e6e73] leading-relaxed">{body}</p>
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      {/* FDRP Explainer */}
      <section className="bg-[#1d1d1f] py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <AnimateIn>
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 bg-[#6e3aff]/20 border border-[#6e3aff]/30 rounded-full px-4 py-2 mb-6 text-sm text-[#b399ff]">
                <Star size={14} />
                <span>The Quality Layer</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                FDRP: Manufacturing Quality
                <br />
                <span style={{ color: "#6e3aff" }}>Applied to AI Decisions</span>
              </h2>
              <p className="text-xl text-white/60 max-w-3xl mx-auto leading-relaxed">
                Fractal Diamond Refinement Process. Built by an operator who ran 790+ physical integration
                projects — not an academic framework. 32 self-evolving subsystems. 557 database tables.
                Proven on a CHF 147M antimatter facility programme (68 experts, 6,052 findings).
              </p>
              <p className="text-lg text-white/40 max-w-3xl mx-auto leading-relaxed mt-4">
                The same gate methodology that governed a particle physics facility at CERN scale now governs AI decision-making in telecoms — every model selection, every Djia architecture change, every data governance call treated as a manufactured artefact with mandatory quality gates before it ships.
              </p>
            </div>
          </AnimateIn>

          <AnimateIn delay={0.1}>
            <div className="bg-white/5 border border-white/10 rounded-2xl p-8 mb-8">
              <h3 className="text-lg font-semibold text-white/80 mb-6">Six-Phase Gate Lifecycle</h3>
              <div className="flex flex-wrap gap-3">
                {[
                  { phase: "KICKOFF", desc: "Scope lock" },
                  { phase: "PDR", desc: "Preliminary Design Review" },
                  { phase: "CDR", desc: "Critical Design Review" },
                  { phase: "FDR", desc: "Final Design Review" },
                  { phase: "TRR", desc: "Test Readiness Review" },
                  { phase: "PQR", desc: "Production Quality Review" },
                ].map(({ phase, desc }, i) => (
                  <div key={phase} className="flex items-center gap-2">
                    <div className="bg-[#6e3aff]/20 border border-[#6e3aff]/40 rounded-xl px-4 py-2 text-center">
                      <div className="text-[#b399ff] font-bold text-sm">{phase}</div>
                      <div className="text-white/40 text-xs mt-0.5">{desc}</div>
                    </div>
                    {i < 5 && <ArrowRight size={16} className="text-white/20" />}
                  </div>
                ))}
              </div>
            </div>
          </AnimateIn>

          <AnimateIn delay={0.2}>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white/5 border border-white/10 rounded-2xl p-7">
                <div className="text-3xl font-bold text-[#6e3aff] mb-2">75%</div>
                <div className="text-white font-semibold mb-2">Self-corrected convergence rate</div>
                <div className="text-white/50 text-sm leading-relaxed">
                  Initial measurement: 85.7%. Cross-model verification caught an arithmetic error.
                  FDRP self-corrected to 75%. This is a system that finds its own mistakes.
                </div>
              </div>
              <div className="bg-white/5 border border-white/10 rounded-2xl p-7">
                <div className="text-3xl font-bold text-[#ff7900] mb-2">CHF 147M</div>
                <div className="text-white font-semibold mb-2">Antimatter facility programme</div>
                <div className="text-white/50 text-sm leading-relaxed">
                  68 domain experts. 6,052 findings processed through FDRP gates.
                  Quality methodology validated at nation-state infrastructure scale.
                </div>
              </div>
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* 8 Deliverables */}
      <section className="bg-[#f5f5f7] py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <AnimateIn>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-[#1d1d1f] mb-4">
                Eight Systems.
                <br />
                <span style={{ color: "#ff7900" }}>Nine Months. One Contract.</span>
              </h2>
              <p className="text-xl text-[#6e6e73] max-w-2xl mx-auto">
                Not a consulting engagement. A defined scope with measurable outputs and fixed pricing.
              </p>
            </div>
          </AnimateIn>

          <div className="grid md:grid-cols-2 gap-6">
            {DELIVERABLES.map(({ icon: Icon, color, title, subtitle, description, applies }, i) => (
              <AnimateIn key={title} delay={i * 0.05}>
                <div className="bg-white rounded-2xl border border-[#e5e5ea] p-7 h-full">
                  <div className="flex items-start gap-4 mb-4">
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                      style={{ backgroundColor: `${color}18` }}
                    >
                      <Icon size={22} style={{ color }} />
                    </div>
                    <div>
                      <h3 className="font-bold text-[#1d1d1f] text-lg">{title}</h3>
                      <div className="text-sm font-medium mt-0.5" style={{ color }}>{subtitle}</div>
                    </div>
                  </div>
                  <p className="text-[#6e6e73] text-sm leading-relaxed mb-4">{description}</p>
                  <div className="flex flex-wrap gap-2">
                    {applies.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs px-3 py-1 rounded-full border"
                        style={{ borderColor: `${color}40`, color, backgroundColor: `${color}0d` }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="bg-[#1d1d1f] py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <AnimateIn>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                9-Month Execution Plan
              </h2>
              <p className="text-xl text-white/50 max-w-2xl mx-auto">
                Phased delivery. Each milestone gates the next. No deliverable ships without prior gate sign-off.
              </p>
            </div>
          </AnimateIn>

          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-8 top-0 bottom-0 w-px bg-white/10 hidden md:block" />

            <div className="space-y-6">
              {TIMELINE.map(({ months, title, description, color }, i) => (
                <AnimateIn key={months} delay={i * 0.08}>
                  <div className="md:pl-20 relative">
                    {/* Dot */}
                    <div
                      className="hidden md:flex absolute left-0 top-6 w-16 h-16 rounded-full items-center justify-center text-sm font-bold text-white shadow-lg"
                      style={{ backgroundColor: color }}
                    >
                      {months}
                    </div>

                    <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
                      <div className="flex items-center gap-3 mb-3">
                        <span
                          className="md:hidden text-xs font-bold px-3 py-1 rounded-full text-white"
                          style={{ backgroundColor: color }}
                        >
                          M{months}
                        </span>
                        <h3 className="font-bold text-white text-lg">{title}</h3>
                      </div>
                      <p className="text-white/50 leading-relaxed">{description}</p>
                    </div>
                  </div>
                </AnimateIn>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ROI / Business Case */}
      <section className="bg-white py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <AnimateIn>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-[#1d1d1f] mb-4">
                The Board Case
              </h2>
              <p className="text-xl text-[#6e6e73] max-w-3xl mx-auto">
                For €450K, Orange Romania gets four material outcomes — each independently justifying the investment.
              </p>
            </div>
          </AnimateIn>

          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {ROI_ITEMS.map(({ icon: Icon, label, from, to, context, color }, i) => (
              <AnimateIn key={label} delay={i * 0.08}>
                <div className="border border-[#e5e5ea] rounded-2xl p-7 bg-[#f5f5f7]">
                  <div className="flex items-center gap-3 mb-4">
                    <Icon size={20} style={{ color }} />
                    <span className="font-semibold text-[#1d1d1f]">{label}</span>
                  </div>
                  <div className="flex items-center gap-4 mb-3">
                    <div className="text-2xl font-bold text-[#6e6e73]">{from}</div>
                    <ArrowRight size={20} style={{ color }} />
                    <div className="text-2xl font-bold" style={{ color }}>{to}</div>
                  </div>
                  <div className="text-sm text-[#6e6e73]">{context}</div>
                </div>
              </AnimateIn>
            ))}
          </div>

          <AnimateIn>
            <div
              className="rounded-2xl p-8 text-white text-center"
              style={{ background: "linear-gradient(135deg, #ff7900 0%, #ff5500 100%)" }}
            >
              <div className="text-3xl font-bold mb-3">The Political Case</div>
              <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
                Bucharest becomes Orange Group&apos;s AI innovation lab. Romania leads Poland, Belgium, Spain.
                The leadership team gets credit for EU AI Act compliance before any other Group market.
                Phase 3 is not a cost — it&apos;s a positioning play inside Group.
              </p>
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* Team */}
      <section className="bg-[#1d1d1f] py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <AnimateIn>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                The Consortium
              </h2>
              <p className="text-xl text-white/50 max-w-2xl mx-auto">
                Enterprise engineering. FDRP governance. AI Agent Orchestration. Each brings irreplaceable operational depth — no generalist consultants.
              </p>
            </div>
          </AnimateIn>

          <div className="grid md:grid-cols-3 gap-6">
            {TEAM.map(({ name, role, org, credentials, color, lead }, i) => (
              <AnimateIn key={name} delay={i * 0.1}>
                <motion.div
                  className="rounded-2xl p-7 h-full relative"
                  style={
                    lead
                      ? {
                          background: `linear-gradient(135deg, ${color}18 0%, ${color}0a 100%)`,
                          border: `1px solid ${color}55`,
                        }
                      : { background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)" }
                  }
                  animate={
                    lead
                      ? {
                          boxShadow: [
                            `0 0 0 1px ${color}22, 0 6px 28px ${color}1a, 0 20px 60px ${color}0c`,
                            `0 0 0 1px ${color}50, 0 8px 40px ${color}30, 0 24px 80px ${color}18`,
                            `0 0 0 1px ${color}22, 0 6px 28px ${color}1a, 0 20px 60px ${color}0c`,
                          ],
                        }
                      : {}
                  }
                  transition={lead ? { duration: 3, repeat: Infinity, ease: "easeInOut" } : {}}
                >
                  {lead && (
                    <div
                      className="absolute top-4 right-4 px-2.5 py-1 rounded-full text-[9px] font-black uppercase tracking-[0.1em]"
                      style={{
                        background: `${color}28`,
                        color,
                        border: `1px solid ${color}45`,
                      }}
                    >
                      ★ Lead AI
                    </div>
                  )}
                  <div
                    className="w-12 h-12 rounded-xl mb-4 flex items-center justify-center text-white font-bold text-lg flex-shrink-0"
                    style={
                      lead
                        ? { background: `linear-gradient(135deg, ${color}, #c8860a)`, boxShadow: `0 4px 16px ${color}40` }
                        : { backgroundColor: color }
                    }
                  >
                    {name.charAt(0)}
                  </div>
                  <h3
                    className="leading-tight mb-1"
                    style={{ color: "white", fontWeight: lead ? 800 : 700, fontSize: lead ? "18px" : "17px" }}
                  >
                    {name}
                  </h3>
                  <div className="text-sm font-semibold mb-1" style={{ color }}>{role}</div>
                  <div className="text-xs mb-4" style={{ color: "rgba(255,255,255,0.4)" }}>{org}</div>
                  <p className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.55)" }}>{credentials}</p>
                </motion.div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="bg-[#f5f5f7] py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <AnimateIn>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-[#1d1d1f] mb-4">Investment</h2>
              <p className="text-xl text-[#6e6e73] max-w-2xl mx-auto">
                Fixed-fee engagement. Every line item is work Orange owns — not a subscription or retainer.
              </p>
            </div>
          </AnimateIn>

          {/* Line-item breakdown */}
          <AnimateIn delay={0.05}>
            <div className="space-y-3 mb-8">
              {[
                { label: "FDRP Gate Lifecycle Deployment", amount: "€80,000", note: "6-gate lifecycle across all Orange AI decisions. PDR → PQR on every Djia change and model selection." },
                { label: "Romanian NLP Fine-Tuning Pipeline", amount: "€110,000", note: "Model training on Orange's own call data. Continuous retraining infrastructure. Djia improvement cycle." },
                { label: "EU AI Act Compliance Framework", amount: "€80,000", note: "Article 6/9 classification for Djia. Risk management system, technical documentation, human oversight protocols." },
                { label: "N≥3 Cross-Model Verification", amount: "€50,000", note: "Claude + GPT + Gemini verification integrated into Orange's AI pipelines. Bias detection at scale." },
                { label: "CVT Dashboard", amount: "€40,000", note: "Convergence Velocity Tensor — real-time AI quality KPIs for CTO and Group AI Paris." },
                { label: "Procurement Intelligence (LOFTREK OSINT)", amount: "€35,000", note: "OSINT methodology applied to Genesys, MATRIXX, IBM contracts. Renegotiation opportunities mapped." },
                { label: "Expert Panel + Phase 4 Roadmap", amount: "€30–55K", note: "20+ specialist panel run on full Orange AI architecture. Group replication blueprint for Poland, Belgium, Spain." },
              ].map((item, i) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.06, duration: 0.4 }}
                  className="flex items-start justify-between gap-4 p-5 rounded-xl border border-[#e5e5ea] bg-white hover:border-[#ff7900]/30 transition-colors"
                >
                  <div className="flex-1">
                    <div className="font-black text-[#1d1d1f] mb-1">{item.label}</div>
                    <div className="text-[#6e6e73] text-sm">{item.note}</div>
                  </div>
                  <div className="text-[#ff7900] font-black text-lg flex-shrink-0 text-right">{item.amount}</div>
                </motion.div>
              ))}
              {/* Total */}
              <div className="flex items-center justify-between p-6 rounded-xl bg-[#ff7900] mt-2">
                <div>
                  <div className="text-white/80 text-sm font-bold uppercase tracking-widest mb-1">Total Investment</div>
                  <div className="text-white text-sm">Fixed fee — no time-and-materials surprises</div>
                </div>
                <div className="text-white font-black text-3xl">€350–450K</div>
              </div>
            </div>
          </AnimateIn>

          {/* Fixed + Licence cards */}
          <div className="grid md:grid-cols-2 gap-6">
            <AnimateIn delay={0.1}>
              <div className="bg-white border-2 border-[#ff7900] rounded-2xl p-8 shadow-lg">
                <div className="text-sm font-semibold text-[#ff7900] uppercase tracking-wider mb-2">Phase 3 Fixed</div>
                <div className="text-5xl font-bold text-[#1d1d1f] mb-2">€350–450K</div>
                <div className="text-[#6e6e73] mb-6">9-month engagement, fixed scope</div>
                <ul className="space-y-3">
                  {[
                    "FDRP gate lifecycle across all AI decisions",
                    "Romanian NLP fine-tuning on Orange call data",
                    "EU AI Act Article 6/9 compliance framework",
                    "N≥3 cross-model verification in production",
                    "CVT dashboard for CTO + Group AI Paris",
                    "Procurement intelligence — Genesys, MATRIXX, IBM",
                    "20+ expert panel run on full architecture",
                    "Phase 4 Group replication roadmap",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm text-[#1d1d1f]">
                      <CheckCircle size={16} className="text-[#30d158] mt-0.5 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </AnimateIn>

            <AnimateIn delay={0.15}>
              <div className="bg-white border border-[#e5e5ea] rounded-2xl p-8">
                <div className="text-sm font-semibold text-[#6e3aff] uppercase tracking-wider mb-2">FDRP Licence (Optional)</div>
                <div className="text-5xl font-bold text-[#1d1d1f] mb-2">€30K</div>
                <div className="text-[#6e6e73] mb-6">Per year, from Phase 4 onwards</div>
                <ul className="space-y-3">
                  {[
                    "Ongoing FDRP methodology licence",
                    "Gate lifecycle updates as AI Act evolves",
                    "CVT algorithm improvements",
                    "Access to 32-subsystem platform",
                    "N≥3 verification framework updates",
                    "Romanian NLP model continuous retraining",
                    "Group replication support (Poland, Belgium, Spain)",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm text-[#1d1d1f]">
                      <CheckCircle size={16} className="text-[#6e3aff] mt-0.5 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </AnimateIn>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#1d1d1f] py-24 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <AnimateIn>
            <div className="bg-white/5 border border-white/10 rounded-3xl p-12">
              <Award size={48} className="text-[#ff7900] mx-auto mb-6" />
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Next Step
              </h2>
              <p className="text-xl text-white/60 max-w-2xl mx-auto mb-8 leading-relaxed">
                Phase 3 scoping session with Orange CTO and Board. We present the gate lifecycle deployment plan,
                EU AI Act risk classification for Djia, and the Bucharest-to-Group replication roadmap.
                One meeting. Concrete outputs.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <a href="https://wa.me/447722195774" target="_blank" rel="noopener"
                  className="bg-[#25d366] text-white font-semibold px-8 py-4 rounded-xl text-lg hover:opacity-90 transition-opacity flex items-center gap-2">
                  WhatsApp Nico — Schedule Review
                </a>
                <a href="mailto:nico.f@infoacademy.net?subject=Phase 3 Scoping — Orange Romania"
                  className="border border-white/20 text-white font-semibold px-8 py-4 rounded-xl text-lg hover:bg-white/5 transition-colors">
                  Email for Phase 3 scoping
                </a>
              </div>
              <div className="mt-8 text-white/30 text-sm">
                InfoAcademy × LOFTREK S.R.L. · Phase 3 Proposal · April 2026
              </div>
            </div>
          </AnimateIn>
        </div>
      </section>
    </main>
  );
}
