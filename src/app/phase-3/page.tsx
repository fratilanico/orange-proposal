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
    icon: Shield,
    color: "#ff3b30",
    title: "Governance",
    subtitle: "Policies, risk, oversight, auditability",
    description:
      "Formal AI governance for Orange: policies for acceptable use, risk classification, human oversight protocols, auditability, and model quality ownership. EU AI Act Article 6/9 compliance for Djia before the August 2026 deadline. Risk management system, technical documentation, accuracy testing.",
    applies: ["EU AI Act Article 6/9", "Risk management system", "Human oversight protocols", "Model quality ownership"],
  },
  {
    icon: GitBranch,
    color: "#6e3aff",
    title: "Shared Services",
    subtitle: "Reusable components, memory, evaluation",
    description:
      "A toolchain every Orange team builds on: reusable agent components, prompts, memory, evaluation flows, deployment patterns. New use cases slot in without re-architecture. This is the layer that turns Phase 1 wins into a repeatable internal capability.",
    applies: ["Reusable agent components", "Prompts & memory", "Evaluation flows", "Deployment patterns"],
  },
  {
    icon: Users,
    color: "#0071e3",
    title: "Operating Model",
    subtitle: "Clear ownership across the business",
    description:
      "Explicit ownership between business teams, architecture, service, data, and tech champions. Who owns the rota, who owns the toolchain, who reports upward. Phase 3 replaces shadow AI with an operating model Orange Group can defend.",
    applies: ["Business / architecture / service / data owners", "On-call rota for AI", "Escalation paths", "Group-aligned governance"],
  },
  {
    icon: BarChart3,
    color: "#30d158",
    title: "Reporting & Trust",
    subtitle: "Dashboards Paris can read",
    description:
      "AI reporting Orange leadership can defend internally and align with Group expectations. Single pane of glass for the CTO, exports for the Board, feeds for Group AI Paris. Measurable, auditable, translation-free.",
    applies: ["CTO real-time view", "Board reporting layer", "Group AI Paris feed", "Audit trail"],
  },
  {
    icon: Globe,
    color: "#ff9500",
    title: "Future Expansion",
    subtitle: "A base that extends without re-architecture",
    description:
      "A practical base for new customer, network, B2B, and internal automation domains. When the next use case surfaces, it plugs into the existing operating layer. No rewrite, no re-procurement. Same patterns replicated across Orange Group (Poland, Belgium, Spain).",
    applies: ["New customer domains", "Network automation", "B2B AI services", "Group replication"],
  },
  {
    icon: Cpu,
    color: "#ff7900",
    title: "Romanian NLP Fine-Tuning Pipeline",
    subtitle: "From a Phase 1 benchmark to a measurable uplift",
    description:
      "A Romanian-first fine-tuning pipeline trained on Orange's own call data, intent set, and dialect variation. Phase 1 establishes a benchmarked baseline (the public 2021 Djia number is 52%; the current Orange-internal number isn't published, so we baseline it ourselves). Phase 3 lifts whatever that baseline turns out to be using a continuous retraining loop. Applies to Djia and any other Romanian voice or text surface in scope.",
    applies: ["Romanian dialect handling", "Telecom intent recognition", "Continuous retraining loop", "Voice and text surfaces"],
  },
  {
    icon: Brain,
    color: "#6e3aff",
    title: "Cross-Model Verification",
    subtitle: "Claude + GPT + Gemini deliberate",
    description:
      "For high-stakes decisions (model selection, risk classification, vendor renegotiation), multiple frontier models deliberate independently and consensus is documented. Bias detection, auditable reasoning, defensible in front of regulators.",
    applies: ["High-stakes decision review", "Model bias detection", "EU AI Act evidence trail", "Regulatory reporting"],
  },
  {
    icon: DollarSign,
    color: "#0071e3",
    title: "Vendor Estate Intelligence",
    subtitle: "€5-10M renegotiation opportunities",
    description:
      "OSINT methodology applied to Orange's vendor estate: Genesys, MATRIXX, IBM. Identifies contract redundancies, pricing anomalies, consolidation opportunities. Operator-grade procurement intelligence, not consultant guesswork.",
    applies: ["Genesys contract analysis", "MATRIXX pricing audit", "IBM contract review", "Vendor consolidation map"],
  },
];

const TIMELINE = [
  {
    months: "1-2",
    title: "Governance Foundation",
    description: "AI Operations Framework deployed on Orange's existing AI decision inventory. Policies, risk classification, human oversight protocols activated on active Djia changes. On-call rota defined.",
    color: "#ff3b30",
  },
  {
    months: "2-4",
    title: "Romanian NLP Pipeline",
    description: "Fine-tuning pipeline built on Orange's own call data. Accelerates the improvements already happening internally. Performance formally benchmarked against Group reporting standards. Target trajectory set from Orange's operational evidence.",
    color: "#ff7900",
  },
  {
    months: "3-5",
    title: "EU AI Act Framework",
    description: "Article 6/9 classification completed. Risk management system implemented. Technical documentation generated. Human oversight protocols deployed before the August 2026 deadline.",
    color: "#6e3aff",
  },
  {
    months: "4-6",
    title: "Shared Services & Operating Model",
    description: "Reusable agent components, prompts, memory, evaluation flows, and deployment patterns lifted into a shared toolchain. Ownership between business, architecture, service, data, and tech champions formalised.",
    color: "#0071e3",
  },
  {
    months: "5-7",
    title: "Reporting & Vendor Intelligence",
    description: "Dashboards delivered for CTO, Board, and Group AI Paris. Vendor estate intelligence reports completed for Genesys, MATRIXX, IBM. Renegotiation recommendations prepared.",
    color: "#30d158",
  },
  {
    months: "7-9",
    title: "Expert Panel + Phase 4 Roadmap",
    description: "20+ specialist panel runs on full Orange AI architecture. Phase 4 roadmap delivered. Group replication blueprint for Poland, Belgium, Spain.",
    color: "#ff9500",
  },
];

const ROI_ITEMS = [
  {
    icon: TrendingUp,
    label: "Voice AI Performance",
    from: "Phase 1 baseline",
    to: "Measurable uplift",
    context: "The 2021 Djia pilot was 52%. Orange's internal number isn't public. We baseline it in Phase 1, lift it in Phase 3.",
    color: "#30d158",
  },
  {
    icon: Shield,
    label: "EU AI Act Exposure",
    from: "Unclassified",
    to: "Compliant",
    context: "Djia is the most likely Article 6 high-risk classification target. August 2026 deadline cleared.",
    color: "#ff7900",
  },
  {
    icon: DollarSign,
    label: "Vendor Renegotiation",
    from: "Unknown",
    to: "€5-10M",
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
    photo: "/team/nico.png",
    role: "Founder & CEO, APEX OS",
    org: "London, UK",
    credentials: "Founder & CEO of APEX OS: the sovereign AI OS running 24/7 on Azure with 400+ self-evolving skills, persistent agent memory, multi-model orchestration, self-healing watchdog, AI Operations Framework gate automation, and a knowledge distillation engine. Also runs InfoAcademy, Orange Romania's existing training vendor. 5 years network engineering and AI/ML adoption at Lloyds Banking Group. Chief Customer Office at CUBE Global (RegTech). Business analysis and project & programme management across FinTech and RegTech.",
    color: "#ff7900",
    lead: false,
  },
  {
    name: "Mru Patel",
    photo: "/team/mru.png",
    role: "Co-Founder, Executive Chairman & Global Partner",
    org: "Dubai, UAE",
    credentials: "40 years at the intersection of innovative, disruptive enterprise technology and global commercial strategy. Led multi-billion-pound programmes at IBM, Siemens, and Sun Microsystems, including pioneering vertical-sector solutions including telcos, open-source platforms, and securing deals valued at over £3B across Europe, Africa, and Asia. Government and Fortune 500 advisor since 1987. Established the first independent Property Investment Fund in Eastern Europe in 2004. Founder and CEO of several startups in FinTech, HealthTech, Marketing & Comms. Telecom and operator experience with Orange, Vodafone, O2, and BT.",
    color: "#0d7377",
    lead: false,
  },
  {
    name: "Bogdan Toporan",
    photo: "/team/bogdan.png",
    role: "Founder · Cloud Architect · SCADA Patent Holder",
    org: "Cluj, Romania",
    credentials: "20+ years leading engineering teams at Telenav, Micro Focus (HP), and Emerson. Patented a SCADA communication system for the Oil & Gas sector. Founder of Arandi Software (cloud modernisation: Microservices, Kubernetes, AWS) and Digitalize Today (agentic AI, workflow automation, intelligent document processing). Engineers it, doesn't just talk about it.",
    color: "#6e3aff",
    lead: false,
  },
  {
    name: "Hardik Nakum",
    photo: "/team/hardik.png",
    role: "Director · Cloud, Security & Enterprise Transformation",
    org: "MindNova · UK",
    credentials: "10+ years across global financial institutions at the intersection of AI, cloud, and cybersecurity. Has led large-scale cloud and transformation initiatives across Azure, AWS, and GCP; supports multi-cloud re-architecture programmes; helps leadership teams adopt innovation in a way that is practical, responsible, and aligned to business outcomes. Director of MindNova.",
    color: "#0071e3",
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
              <span>Phase 3 · Following Phase 1 and Phase 2</span>
            </div>
          </AnimateIn>

          <AnimateIn delay={0.1}>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 leading-[1.05]">
              Enterprise AI
              <br />
              <span style={{ color: "#ff7900" }}>Operating Model</span>
            </h1>
          </AnimateIn>

          <AnimateIn delay={0.2}>
            <p className="text-xl md:text-2xl text-white/60 max-w-3xl mx-auto mb-4 leading-relaxed">
              Nine months to make Orange Romania AI{" "}
              <span className="text-white font-medium">capable, governed, scalable, and durable</span>.
              Owned by Orange, defensible to Group, and EU AI Act compliant before August 2026.
            </p>
          </AnimateIn>

          <AnimateIn delay={0.3}>
            <p className="text-base text-white/60 mb-12">
              9 months · €350-450K fixed · Five pillars · One operating model
            </p>
          </AnimateIn>

          <AnimateIn delay={0.4}>
            <div className="flex flex-wrap justify-center gap-4">
              {[
                { label: "Duration", value: "9 months", icon: Clock },
                { label: "Investment", value: "€350-450K", icon: DollarSign },
                { label: "Operating model", value: "Five pillars", icon: TrendingUp },
                { label: "EU AI Act", value: "Aug 2026", icon: Shield },
              ].map(({ label, value, icon: Icon }) => (
                <div
                  key={label}
                  className="flex items-center gap-3 bg-white/8 border border-white/15 rounded-2xl px-5 py-3"
                >
                  <Icon size={16} className="text-[#ff7900]" />
                  <div className="text-left">
                    <div className="text-xs text-white/60 uppercase tracking-wider">{label}</div>
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
                From Successful AI Projects
                <br />
                <span style={{ color: "#ff7900" }}>To an AI Operating Capability.</span>
              </h2>
              <p className="text-xl text-[#6e6e73] max-w-2xl mx-auto">
                Phase 2 operationalised the Phase 1 winners. Phase 3 is where Orange moves from
                successful AI projects to an Orange-owned AI operating model, governed, scalable, durable.
              </p>
            </div>
          </AnimateIn>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: AlertTriangle,
                color: "#ff3b30",
                title: "Strong AI Foundation, Missing Governance Layer",
                body: "Orange already has AI in production (Djia in voice, internal experiments across departments). Internal teams have been improving these for years. What's missing is not performance, it's the governance framework to measure, verify, and report those improvements against Group AI targets.",
              },
              {
                icon: Lock,
                color: "#ff9500",
                title: "EU AI Act Exposure",
                body: "Djia likely classifies as high-risk AI under Article 6 (essential private services). Without a risk management system, Orange faces GDPR-scale fines. Deadline: August 2026. This is the single concrete reason Phase 3 has a hard date attached to it.",
              },
              {
                icon: Zap,
                color: "#6e3aff",
                title: "€600M AI Value Target",
                body: "Orange Group's 'Trust the Future' 2026-2030 strategy targets €600M in AI-generated value by 2028. Bucharest's execution quality determines whether Romania leads or follows within Group.",
              },
            ].map(({ icon: Icon, color, title, body }) => (
              <AnimateIn key={title} className="h-full">
                <div className="rounded-2xl border border-[#e5e5ea] p-7 bg-[#f5f5f7] h-full flex flex-col">
                  <Icon size={28} style={{ color }} className="mb-4 flex-shrink-0" />
                  <h3 className="text-lg font-bold text-[#1d1d1f] mb-3">{title}</h3>
                  <p className="text-[#6e6e73] leading-relaxed flex-1">{body}</p>
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      {/* AI Operations Framework Explainer */}
      <section className="bg-[#1d1d1f] py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <AnimateIn>
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 bg-[#6e3aff]/20 border border-[#6e3aff]/30 rounded-full px-4 py-2 mb-6 text-sm text-[#b399ff]">
                <Star size={14} />
                <span>The Operating Layer</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                An AI Operations Layer.
                <br />
                <span style={{ color: "#6e3aff" }}>The NOC for Orange&apos;s AI Decisions.</span>
              </h2>
              <p className="text-xl text-white/60 max-w-3xl mx-auto leading-relaxed">
                You already run a network operations centre. Phase 3 builds the equivalent for your AI:
                a single operating layer that observes every AI decision across Djia, the internal
                knowledge base, support triage, and the agents your teams built in Phase 1.
              </p>
              <p className="text-lg text-white/60 max-w-3xl mx-auto leading-relaxed mt-4">
                Alerts, dashboards, on-call rotas, runbooks. Not for packet loss or capacity events.
                For AI quality, drift, bias, and safety. The same operational discipline Orange already
                has, applied to AI.
              </p>
            </div>
          </AnimateIn>

          <AnimateIn delay={0.1}>
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="bg-white/5 border border-white/10 rounded-2xl p-7 h-full flex flex-col">
                <div className="inline-flex items-center gap-2 bg-[#6e3aff]/15 border border-[#6e3aff]/30 rounded-full px-3 py-1 mb-4 text-xs text-[#b399ff] font-semibold flex-shrink-0 w-fit">
                  <span>01</span>
                  <span>Observation</span>
                </div>
                <div className="text-white font-semibold mb-2">Every decision logged, every drift detected.</div>
                <div className="text-white/70 text-sm leading-relaxed flex-1">
                  Every AI output logged. Model drift detected. Escalations routed. Dashboards for the CTO,
                  summaries for the Board, exports for Group AI Paris, all fed from the same source.
                </div>
              </div>

              <div className="bg-white/5 border border-white/10 rounded-2xl p-7 h-full flex flex-col">
                <div className="inline-flex items-center gap-2 bg-[#ff7900]/15 border border-[#ff7900]/30 rounded-full px-3 py-1 mb-4 text-xs text-[#ffa64d] font-semibold flex-shrink-0 w-fit">
                  <span>02</span>
                  <span>Intervention</span>
                </div>
                <div className="text-white font-semibold mb-2">Clear rules for when humans override.</div>
                <div className="text-white/70 text-sm leading-relaxed flex-1">
                  When a human overrides, when a decision is rolled back, when a model is pulled out of
                  rotation. Same discipline as your existing NOC runbooks, applied to AI incidents.
                </div>
              </div>

              <div className="bg-white/5 border border-white/10 rounded-2xl p-7 h-full flex flex-col">
                <div className="inline-flex items-center gap-2 bg-[#30d158]/15 border border-[#30d158]/30 rounded-full px-3 py-1 mb-4 text-xs text-[#5de67b] font-semibold flex-shrink-0 w-fit">
                  <span>03</span>
                  <span>Evolution</span>
                </div>
                <div className="text-white font-semibold mb-2">New use cases plug in. No re-architecture.</div>
                <div className="text-white/70 text-sm leading-relaxed flex-1">
                  When the next use case surfaces (B2B, network ops, internal automation), it plugs into
                  the existing layer without a rewrite. Built to extend from day one.
                </div>
              </div>
            </div>
          </AnimateIn>

          <AnimateIn delay={0.2}>
            <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
              <h3 className="text-lg font-semibold text-white/80 mb-6">Governance Gate Lifecycle</h3>
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
                      <div className="text-white/60 text-xs mt-0.5">{desc}</div>
                    </div>
                    {i < 5 && <ArrowRight size={16} className="text-white/45" />}
                  </div>
                ))}
              </div>
              <p className="text-white/60 text-sm mt-6 leading-relaxed">
                Every high-stakes AI decision (model selection, Djia architecture changes, vendor
                renegotiation, EU AI Act risk classification) passes through the same six-gate sequence.
                Auditable, defensible, Group-readable.
              </p>
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* 8 Deliverables */}
      <section id="offer" className="bg-[#f5f5f7] py-24 px-6">
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
              <AnimateIn key={title} delay={i * 0.05} className="h-full">
                <div className="bg-white rounded-2xl border border-[#e5e5ea] p-7 h-full flex flex-col">
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
                  <p className="text-[#6e6e73] text-sm leading-relaxed mb-4 flex-1">{description}</p>
                  <div className="flex flex-wrap gap-2 mt-auto">
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
              <p className="text-xl text-white/70 max-w-2xl mx-auto">
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
                      <p className="text-white/70 leading-relaxed">{description}</p>
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
                For €450K, Orange Romania gets four material outcomes, each independently justifying the investment.
              </p>
            </div>
          </AnimateIn>

          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {ROI_ITEMS.map(({ icon: Icon, label, from, to, context, color }, i) => (
              <AnimateIn key={label} delay={i * 0.08} className="h-full">
                <div className="border border-[#e5e5ea] rounded-2xl p-7 bg-[#f5f5f7] h-full flex flex-col">
                  <div className="flex items-center gap-3 mb-4">
                    <Icon size={20} style={{ color }} />
                    <span className="font-semibold text-[#1d1d1f]">{label}</span>
                  </div>
                  <div className="flex items-center gap-4 mb-3">
                    <div className="text-2xl font-bold text-[#6e6e73]">{from}</div>
                    <ArrowRight size={20} style={{ color }} />
                    <div className="text-2xl font-bold" style={{ color }}>{to}</div>
                  </div>
                  <div className="text-sm text-[#6e6e73] flex-1">{context}</div>
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
                Phase 3 is not a cost, it&apos;s a positioning play inside Group.
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
              <p className="text-xl text-white/70 max-w-2xl mx-auto">
                Enterprise engineering. AI Operations Framework governance. Cloud, security, and telecom-grade pipelines. Each brings irreplaceable operational depth, no generalist consultants.
              </p>
            </div>
          </AnimateIn>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {TEAM.map(({ name, photo, role, org, credentials, color }, i) => (
              <AnimateIn key={name} delay={i * 0.1} className="h-full">
                <div
                  className="rounded-2xl p-7 h-full flex flex-col"
                  style={{
                    background: "rgba(255,255,255,0.05)",
                    border: `1px solid ${color}33`,
                  }}
                >
                  <div className="flex items-start gap-5 mb-5">
                    {photo ? (
                      <img
                        src={photo}
                        alt={name}
                        className="w-[88px] h-[88px] rounded-2xl object-cover flex-shrink-0"
                        style={{ boxShadow: `0 4px 16px ${color}55` }}
                      />
                    ) : (
                      <div
                        className="w-[88px] h-[88px] rounded-2xl flex items-center justify-center text-white font-black text-[22px] flex-shrink-0"
                        style={{ background: color, boxShadow: `0 4px 16px ${color}55` }}
                      >
                        {name.charAt(0)}
                      </div>
                    )}
                    <div className="flex-1 min-w-0 pt-1">
                      <h3 className="text-[19px] font-black text-white leading-tight">{name}</h3>
                      <div className="text-[12px] font-bold mt-1.5 leading-snug" style={{ color }}>
                        {role}
                      </div>
                      <div className="text-[11px] text-white/60 mt-1 font-medium">{org}</div>
                    </div>
                  </div>
                  <p className="text-[13px] text-white/60 leading-relaxed flex-1">{credentials}</p>
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="investment" className="bg-[#f5f5f7] py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <AnimateIn>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-[#1d1d1f] mb-4">Investment</h2>
              <p className="text-xl text-[#6e6e73] max-w-2xl mx-auto">
                Fixed-fee engagement. Every line item is work Orange owns, not a subscription or retainer.
              </p>
            </div>
          </AnimateIn>

          {/* Line-item breakdown */}
          <AnimateIn delay={0.05}>
            <div className="space-y-3 mb-8">
              {[
                { label: "AI Operations Framework Deployment", amount: "€80,000", note: "Six-gate lifecycle across all Orange AI decisions. PDR → PQR on every model change and high-stakes decision. On-call rota and runbooks." },
                { label: "Romanian NLP Fine-Tuning Pipeline", amount: "€110,000", note: "Model training on Orange's own call data. Continuous retraining infrastructure. Lifts whichever voice or text surfaces are in scope (Djia included if applicable)." },
                { label: "EU AI Act Compliance Framework", amount: "€80,000", note: "Article 6/9 classification, focused on Djia as the most likely high-risk target. Risk management system, technical documentation, human oversight protocols. August 2026 deadline." },
                { label: "Cross-Model Verification", amount: "€50,000", note: "Claude + GPT + Gemini deliberate on high-stakes decisions (model selection, risk classification, vendor renegotiation)." },
                { label: "Reporting & Trust Dashboards", amount: "€40,000", note: "Single pane of glass for CTO + Board + Group AI Paris. Audit trail, exports, governance posture." },
                { label: "Vendor Estate Intelligence", amount: "€35,000", note: "OSINT methodology applied to Genesys, MATRIXX, IBM contracts. Renegotiation opportunities mapped." },
                { label: "Expert Panel + Phase 4 Roadmap", amount: "€30-55K", note: "20+ specialist panel run on full Orange AI architecture. Group replication blueprint for Poland, Belgium, Spain." },
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
                  <div className="text-white text-sm">Fixed fee, no time-and-materials surprises</div>
                </div>
                <div className="text-white font-black text-3xl">€350-450K</div>
              </div>
            </div>
          </AnimateIn>

          {/* Phase 3 Fixed card */}
          <AnimateIn delay={0.1}>
            <div className="bg-white border-2 border-[#ff7900] rounded-2xl p-8 shadow-lg max-w-2xl mx-auto">
              <div className="text-sm font-semibold text-[#ff7900] uppercase tracking-wider mb-2">Phase 3 Fixed</div>
              <div className="text-5xl font-bold text-[#1d1d1f] mb-2">€350-450K</div>
              <div className="text-[#6e6e73] mb-6">9-month engagement, fixed scope</div>
              <ul className="space-y-3">
                {[
                  "Governance: policies, risk, human oversight, auditability",
                  "Shared services: reusable agents, prompts, memory, evaluation",
                  "Operating model: clear ownership across the business",
                  "Reporting & trust: dashboards Paris can read",
                  "Future expansion: a base that extends without re-architecture",
                  "Romanian NLP fine-tuning on Orange call data",
                  "EU AI Act Article 6/9 compliance framework",
                  "Cross-model verification for high-stakes decisions",
                  "Vendor estate intelligence: Genesys, MATRIXX, IBM",
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
        </div>
      </section>

      {/* CTA */}
      <section id="cta" className="bg-[#1d1d1f] py-24 px-6">
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
                  WhatsApp Nico: Schedule Review
                </a>
                <a href="mailto:nico.f@infoacademy.net?subject=Phase 3 Scoping: Orange Romania"
                  className="border border-white/20 text-white font-semibold px-8 py-4 rounded-xl text-lg hover:bg-white/5 transition-colors">
                  Email for Phase 3 scoping
                </a>
              </div>
              <div className="mt-8 text-white/55 text-sm">
                InfoAcademy × APEX OS · Phase 3 Proposal · April 2026
              </div>
            </div>
          </AnimateIn>
        </div>
      </section>
    </main>
  );
}
