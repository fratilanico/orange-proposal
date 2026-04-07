"use client";

import { motion } from "framer-motion";
import {
  DollarSign,
  Globe,
  Shield,
  TrendingUp,
  CheckCircle,
  Users,
  ArrowRight,
  Zap,
  Target,
  Award,
  Building,
  MapPin,
  Clock,
  Star,
  GitBranch,
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

const WHAT_LIVIU_BRINGS = [
  {
    icon: GitBranch,
    color: "#6e3aff",
    title: "FDRP Methodology Licence",
    body: "The quality governance layer. Six-phase gates. 32 subsystems. 557 tables. N≥3 cross-model verification. Nothing else in the Romanian market touches it. This is the differentiator that makes our proposal technically unassailable.",
  },
  {
    icon: Globe,
    color: "#0071e3",
    title: "LOFTREK OSINT Intelligence",
    body: "cognition.loftrek.ro applied to Orange's vendor estate. Genesys, MATRIXX, IBM — you map the procurement landscape better than any consultant who learned it from a textbook. Operator-grade intelligence, not guesswork.",
  },
  {
    icon: Building,
    color: "#ff7900",
    title: "20 Years Physical Integration",
    body: "€62M outdoor equipment integration operator. 790+ clients. 76 institutions. Orange's infrastructure teams have met consultants. They haven't met an operator who built a quality framework from 20 years of physical supply chain failures.",
  },
  {
    icon: MapPin,
    color: "#30d158",
    title: "Romanian Business Identity",
    body: "LOFTREK S.R.L. is a known entity in Romanian B2B. That matters inside Orange Romania's procurement process. We're not flying in from London. We're local operators who've proven delivery.",
  },
  {
    icon: Shield,
    color: "#ff9500",
    title: "SEAP Navigation",
    body: "You know how Romanian public sector procurement actually works. That's a competitive advantage that no foreign AI consultancy can replicate. Phase 3 may partially route through procurement frameworks you know cold.",
  },
  {
    icon: Star,
    color: "#6e3aff",
    title: "Cross-Model Verification Credibility",
    body: "FDRP's N≥3 verification is the technical answer to every 'how do we trust AI outputs' question Orange's board will ask. No competitor brings this. It's the EU AI Act compliance engine and the Djia quality engine in one framework.",
  },
];

const DEAL_STRUCTURE = [
  {
    label: "Phase 3 Revenue to Liviu",
    value: "€120–180K",
    sub: "40% of €350–450K fixed",
    color: "#30d158",
  },
  {
    label: "Phase 3 Duration",
    value: "9 months",
    sub: "Fixed scope, no scope creep",
    color: "#0071e3",
  },
  {
    label: "FDRP Licence (Phase 4+)",
    value: "€30K/year",
    sub: "Recurring. Orange pays annually",
    color: "#6e3aff",
  },
  {
    label: "Group Replication Upside",
    value: "4 markets",
    sub: "Poland, Belgium, Spain, NL",
    color: "#ff7900",
  },
];

const WHATS_IN_IT = [
  {
    title: "First Major Romanian Enterprise AI Contract with FDRP",
    body: "FDRP has been proven at CHF 147M scale (antimatter building programme). Orange Romania is the first €1B+ telco. This transforms FDRP from a rigorous methodology into an enterprise-validated product.",
    icon: Award,
    color: "#ff7900",
  },
  {
    title: "Case Study That Opens Group Doors",
    body: '"FDRP deployed in €1.4B Romanian telco AI infrastructure." That sentence gets you into Orange Group Paris, Telefónica, Deutsche Telekom. This isn\'t a consulting reference — it\'s a product launch.',
    icon: Globe,
    color: "#0071e3",
  },
  {
    title: "Recurring Revenue via FDRP Licence",
    body: "Phase 4 licenses FDRP methodology to Orange internally. €30K/year. If Group replication happens across 4 markets, that's €120K/year from a single enterprise client family. Operator-grade recurring revenue.",
    icon: DollarSign,
    color: "#30d158",
  },
  {
    title: "Joint IP: Romanian NLP Model",
    body: "The Romanian NLP fine-tuning pipeline we build in Phase 3 is owned 50/50. Liviu/LOFTREK holds half of a telecom-grade Romanian language model. That's licenceable to any operator in CEE.",
    icon: GitBranch,
    color: "#6e3aff",
  },
];

const CONSORTIUM = [
  {
    entity: "InfoAcademy S.R.L.",
    person: "Nico Fratila",
    role: "Lead AI architect · 73+ production repos · Phases 1–2 delivered",
    split: "60%",
    color: "#ff7900",
    handles: ["Phase 1–2 commercial", "APEX OS infrastructure", "AI agent architecture", "Client relationship management"],
  },
  {
    entity: "LOFTREK S.R.L.",
    person: "Liviu Olos",
    role: "FDRP methodology · OSINT intelligence · Physical integration operator",
    split: "40%",
    color: "#6e3aff",
    handles: ["FDRP gate lifecycle deployment", "N≥3 cross-model verification", "Vendor procurement intelligence", "Phase 3 technical credibility"],
  },
];

const THE_ASK = [
  {
    step: "1",
    title: "One meeting in Bucharest",
    body: "Lunch. Nico + Liviu. We align on the deal structure, the Phase 3 scope, and what you need to feel comfortable bringing FDRP into this engagement.",
    color: "#ff7900",
  },
  {
    step: "2",
    title: "Liviu runs Orange AI Readiness Assessment",
    body: 'You use LOFTREK OSINT methodology to produce a "Phase 0 Orange Romania AI Readiness Assessment" — your read on their vendor estate, procurement posture, and FDRP readiness. This becomes our opening artefact.',
    color: "#6e3aff",
  },
  {
    step: "3",
    title: "Joint presentation to Orange CTO",
    body: "Nico handles Phase 1–2 commercial continuity. Liviu presents FDRP technical credibility and procurement intelligence. Two operators. One proposal. No slides designed by a consulting firm.",
    color: "#0071e3",
  },
];

export default function LiviuPage() {
  return (
    <main className="min-h-screen bg-[#1d1d1f] text-white font-sans antialiased">
      {/* Hero */}
      <section className="relative overflow-hidden pt-24 pb-32 px-6">
        {/* Background glow */}
        <div className="absolute inset-0 pointer-events-none">
          <div
            className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] rounded-full opacity-15 blur-[100px]"
            style={{ background: "radial-gradient(ellipse, #6e3aff 0%, #ff7900 60%, transparent 80%)" }}
          />
        </div>

        <div className="relative max-w-4xl mx-auto">
          <AnimateIn>
            <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-2 mb-10 text-sm text-white/60">
              <span>Private · For Liviu Olos / LOFTREK S.R.L.</span>
            </div>
          </AnimateIn>

          <AnimateIn delay={0.1}>
            <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-6 leading-[1.1]">
              Liviu, here&apos;s
              <br />
              <span style={{ color: "#6e3aff" }}>the deal.</span>
            </h1>
          </AnimateIn>

          <AnimateIn delay={0.2}>
            <p className="text-xl text-white/60 max-w-2xl mb-8 leading-relaxed">
              Orange Romania. €1.4B telco. 9.3M subscribers. Phase 3 is the quality and compliance layer —
              and FDRP is the only methodology that makes it credible. I need you in this.
            </p>
          </AnimateIn>

          <AnimateIn delay={0.3}>
            <p className="text-white/40 text-sm">
              From Nico Fratila (APEX OS / InfoAcademy) to Liviu Olos (LOFTREK) · April 2026
            </p>
          </AnimateIn>
        </div>
      </section>

      {/* The Context — Fast */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <AnimateIn>
            <h2 className="text-3xl md:text-4xl font-bold text-[#1d1d1f] mb-10">
              Where we are
            </h2>
          </AnimateIn>

          <div className="grid md:grid-cols-3 gap-6 mb-10">
            {[
              {
                label: "Phase 1",
                status: "Complete",
                detail: "AI Operations Lab · €25–30K · InfoAcademy contracted",
                color: "#30d158",
              },
              {
                label: "Phase 2",
                status: "Complete",
                detail: "APEX OS sovereign AI infrastructure · €150–200K · Deployed",
                color: "#30d158",
              },
              {
                label: "Phase 3",
                status: "Open",
                detail: "Architectural Cognition · €350–450K · FDRP required",
                color: "#ff7900",
              },
            ].map(({ label, status, detail, color }) => (
              <AnimateIn key={label}>
                <div className="border border-[#e5e5ea] rounded-2xl p-6 bg-[#f5f5f7]">
                  <div className="flex items-center justify-between mb-3">
                    <span className="font-bold text-[#1d1d1f]">{label}</span>
                    <span className="text-xs font-semibold px-2 py-1 rounded-full text-white" style={{ backgroundColor: color }}>
                      {status}
                    </span>
                  </div>
                  <p className="text-sm text-[#6e6e73] leading-relaxed">{detail}</p>
                </div>
              </AnimateIn>
            ))}
          </div>

          <AnimateIn delay={0.1}>
            <div className="bg-[#1d1d1f] rounded-2xl p-8">
              <p className="text-white text-lg leading-relaxed mb-4">
                Phases 1 and 2 are done. Orange&apos;s AI infrastructure runs. Now comes the hard part:
                making it <em className="text-[#ff7900] not-italic">intelligent</em>. Gate-reviewed.
                Cross-model verified. EU AI Act compliant before August 2026.
              </p>
              <p className="text-white/50 leading-relaxed">
                Phase 3 is where Djia goes from its 2021 pilot baseline toward 80%+. Where Orange&apos;s board gets a convergence
                dashboard instead of uptime metrics. Where we classify Djia under Article 6 before
                regulators do it for them. And where FDRP gets its first €1B+ telco deployment.
              </p>
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* What's In It For Liviu */}
      <section className="bg-[#1d1d1f] py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <AnimateIn>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              What you get
            </h2>
            <p className="text-xl text-white/50 mb-16 max-w-2xl">
              Four material outcomes. Not consulting credit. Not exposure. Specific, contractual, measurable.
            </p>
          </AnimateIn>

          <div className="grid md:grid-cols-2 gap-6">
            {WHATS_IN_IT.map(({ title, body, icon: Icon, color }, i) => (
              <AnimateIn key={title} delay={i * 0.08}>
                <div className="bg-white/5 border border-white/10 rounded-2xl p-7 h-full">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                    style={{ backgroundColor: `${color}20` }}
                  >
                    <Icon size={22} style={{ color }} />
                  </div>
                  <h3 className="font-bold text-white text-lg mb-3">{title}</h3>
                  <p className="text-white/50 text-sm leading-relaxed">{body}</p>
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      {/* Deal Numbers */}
      <section className="bg-[#f5f5f7] py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <AnimateIn>
            <h2 className="text-4xl md:text-5xl font-bold text-[#1d1d1f] mb-4">
              The numbers
            </h2>
            <p className="text-xl text-[#6e6e73] mb-16 max-w-2xl">
              Straightforward. No ambiguity. Here&apos;s what the deal looks like financially.
            </p>
          </AnimateIn>

          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {DEAL_STRUCTURE.map(({ label, value, sub, color }, i) => (
              <AnimateIn key={label} delay={i * 0.06}>
                <div className="bg-white border border-[#e5e5ea] rounded-2xl p-7">
                  <div className="text-sm text-[#6e6e73] mb-2">{label}</div>
                  <div className="text-4xl font-bold mb-1" style={{ color }}>{value}</div>
                  <div className="text-sm text-[#6e6e73]">{sub}</div>
                </div>
              </AnimateIn>
            ))}
          </div>

          <AnimateIn delay={0.2}>
            <div
              className="rounded-2xl p-8 text-white"
              style={{ background: "linear-gradient(135deg, #6e3aff 0%, #0071e3 100%)" }}
            >
              <h3 className="text-2xl font-bold mb-4">Group Replication Scenario</h3>
              <p className="text-white/85 leading-relaxed mb-6">
                If Bucharest succeeds — and the EU AI Act compliance story alone makes it likely — Orange Group
                replicates Phase 3 in Poland, Belgium, Spain, and the Netherlands. That&apos;s four additional FDRP
                deployments. Four more FDRP licence renewals. Four more NLP model licences from our joint IP.
              </p>
              <div className="flex flex-wrap gap-6">
                {[
                  { label: "Group FDRP deployments", value: "4 markets" },
                  { label: "Annual licence revenue (4 markets)", value: "€120K/year" },
                  { label: "Joint NLP model licences", value: "CEE-wide" },
                ].map(({ label, value }) => (
                  <div key={label}>
                    <div className="text-white/60 text-sm">{label}</div>
                    <div className="text-white font-bold text-xl">{value}</div>
                  </div>
                ))}
              </div>
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* What Liviu Brings */}
      <section className="bg-[#1d1d1f] py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <AnimateIn>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Why you specifically
            </h2>
            <p className="text-xl text-white/50 mb-16 max-w-2xl">
              I could bring in a big four consultant for the governance layer. I&apos;m not. Here&apos;s why LOFTREK
              is the only entity that makes Phase 3 defensible.
            </p>
          </AnimateIn>

          <div className="grid md:grid-cols-2 gap-6">
            {WHAT_LIVIU_BRINGS.map(({ icon: Icon, color, title, body }, i) => (
              <AnimateIn key={title} delay={i * 0.07}>
                <div className="bg-white/5 border border-white/10 rounded-2xl p-7 h-full">
                  <div className="flex items-start gap-4">
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5"
                      style={{ backgroundColor: `${color}20` }}
                    >
                      <Icon size={18} style={{ color }} />
                    </div>
                    <div>
                      <h3 className="font-bold text-white mb-2">{title}</h3>
                      <p className="text-white/50 text-sm leading-relaxed">{body}</p>
                    </div>
                  </div>
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      {/* Consortium Structure */}
      <section className="bg-white py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <AnimateIn>
            <h2 className="text-4xl md:text-5xl font-bold text-[#1d1d1f] mb-4">
              The consortium structure
            </h2>
            <p className="text-xl text-[#6e6e73] mb-16 max-w-2xl">
              Clean. Each entity owns its domain. No ambiguity on who handles what.
            </p>
          </AnimateIn>

          <div className="grid md:grid-cols-2 gap-6 mb-10">
            {CONSORTIUM.map(({ entity, person, role, split, color, handles }, i) => (
              <AnimateIn key={entity} delay={i * 0.1}>
                <div className="border-2 rounded-2xl p-7 h-full" style={{ borderColor: color }}>
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <div className="font-bold text-[#1d1d1f] text-lg">{entity}</div>
                      <div className="text-sm text-[#6e6e73]">{person}</div>
                    </div>
                    <div
                      className="text-2xl font-bold px-4 py-2 rounded-xl text-white"
                      style={{ backgroundColor: color }}
                    >
                      {split}
                    </div>
                  </div>
                  <p className="text-sm text-[#6e6e73] mb-4 leading-relaxed">{role}</p>
                  <div className="space-y-2">
                    {handles.map((item) => (
                      <div key={item} className="flex items-center gap-2 text-sm text-[#1d1d1f]">
                        <CheckCircle size={14} style={{ color }} className="flex-shrink-0" />
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
              </AnimateIn>
            ))}
          </div>

          <AnimateIn delay={0.2}>
            <div className="bg-[#f5f5f7] border border-[#e5e5ea] rounded-2xl p-7">
              <h3 className="font-bold text-[#1d1d1f] mb-4">Joint IP: Romanian NLP Model</h3>
              <div className="grid md:grid-cols-3 gap-4">
                {[
                  { label: "Ownership", value: "50/50", detail: "InfoAcademy / LOFTREK" },
                  { label: "Built from", value: "Orange call data", detail: "Licensed from Orange for training" },
                  { label: "Licenceable to", value: "CEE telcos", detail: "Any operator in region" },
                ].map(({ label, value, detail }) => (
                  <div key={label} className="text-center">
                    <div className="text-xs text-[#6e6e73] mb-1">{label}</div>
                    <div className="font-bold text-[#1d1d1f]">{value}</div>
                    <div className="text-xs text-[#6e6e73]">{detail}</div>
                  </div>
                ))}
              </div>
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* The Ask */}
      <section className="bg-[#1d1d1f] py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <AnimateIn>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              What I need from you
            </h2>
            <p className="text-xl text-white/50 mb-16 max-w-2xl">
              Three steps. The first one is one lunch.
            </p>
          </AnimateIn>

          <div className="space-y-6 mb-16">
            {THE_ASK.map(({ step, title, body, color }, i) => (
              <AnimateIn key={step} delay={i * 0.1}>
                <div className="flex gap-6">
                  <div
                    className="w-14 h-14 rounded-full flex items-center justify-center text-white font-bold text-xl flex-shrink-0"
                    style={{ backgroundColor: color }}
                  >
                    {step}
                  </div>
                  <div className="bg-white/5 border border-white/10 rounded-2xl p-6 flex-1">
                    <h3 className="font-bold text-white text-lg mb-2">{title}</h3>
                    <p className="text-white/50 leading-relaxed">{body}</p>
                  </div>
                </div>
              </AnimateIn>
            ))}
          </div>

          <AnimateIn delay={0.3}>
            <div className="bg-white/5 border border-white/15 rounded-2xl p-8">
              <h3 className="text-xl font-bold text-white mb-4">Why now</h3>
              <div className="grid md:grid-cols-3 gap-6">
                {[
                  {
                    icon: Clock,
                    color: "#ff3b30",
                    title: "August 2026 deadline",
                    body: "EU AI Act Article 6 compliance for Djia. That's 16 months from today. Orange needs to start the risk classification now. The urgency is real.",
                  },
                  {
                    icon: Target,
                    color: "#ff7900",
                    title: "Phase 2 is warm",
                    body: "We're inside Orange's infrastructure. Phases 1–2 build trust. Phase 3 is a continuation, not a cold sale. That window won't stay open indefinitely.",
                  },
                  {
                    icon: TrendingUp,
                    color: "#30d158",
                    title: "First mover in Romanian telco",
                    body: "No other team is bringing FDRP to a Romanian telco at this scale. If we don't close Phase 3, another consortium will attempt something inferior. And FDRP loses its showcase.",
                  },
                ].map(({ icon: Icon, color, title, body }) => (
                  <div key={title}>
                    <Icon size={20} style={{ color }} className="mb-3" />
                    <h4 className="font-semibold text-white mb-2">{title}</h4>
                    <p className="text-white/40 text-sm leading-relaxed">{body}</p>
                  </div>
                ))}
              </div>
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* Direct Close */}
      <section className="bg-[#f5f5f7] py-24 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <AnimateIn>
            <h2 className="text-4xl md:text-5xl font-bold text-[#1d1d1f] mb-6">
              One meeting.
              <br />
              <span style={{ color: "#6e3aff" }}>That&apos;s the ask.</span>
            </h2>
            <p className="text-xl text-[#6e6e73] max-w-2xl mx-auto mb-10 leading-relaxed">
              You built a €62M business by making decisions on evidence. This document is the evidence.
              The deal structure is above. The opportunity is specific. Bring your questions to lunch.
              We close the structure there, or we don&apos;t.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="https://wa.me/40752287722" target="_blank" rel="noopener"
                className="text-white font-semibold px-8 py-4 rounded-xl text-lg hover:opacity-90 transition-opacity"
                style={{ background: "linear-gradient(135deg, #6e3aff 0%, #0071e3 100%)" }}>
                WhatsApp Liviu — Confirm meeting
              </a>
              <a href="mailto:nico.f@infoacademy.net?subject=Orange Partnership — Counter-proposal"
                className="border border-[#e5e5ea] text-[#1d1d1f] font-semibold px-8 py-4 rounded-xl text-lg hover:bg-[#f5f5f7] transition-colors">
                Send counter-proposal to Nico
              </a>
            </div>
            <p className="text-[#6e6e73] text-sm mt-8">
              Nico Fratila · APEX OS / InfoAcademy · nico.f@infoacademy.net
            </p>
            <p className="text-[#6e6e73] text-xs mt-2 opacity-60">
              Private proposal · April 2026 · Not for distribution
            </p>
          </AnimateIn>
        </div>
      </section>
    </main>
  );
}
