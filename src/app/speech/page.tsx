"use client";

import { useState } from "react";

const SECTIONS = [
  {
    id: "pre",
    label: "Before you walk in",
    color: "#6e3aff",
    items: [
      {
        type: "task",
        text: "Google the person: LinkedIn, interviews, Orange press releases. Look for values signals.",
      },
      {
        type: "task",
        text: "Find out if teams were cut under their watch. If yes — the 'do more with fewer' angle hits hard.",
      },
      {
        type: "task",
        text: "Check if they've presented at Group level before. If yes — they want to again. Use that.",
      },
      {
        type: "task",
        text: "Check values.institute/list-human-values — pick 2-3 that fit their public profile. Weave those words into your speech naturally.",
      },
      {
        type: "rule",
        text: "Nothing in this doc gets said out loud as a list. You plant these ideas one at a time, casually, at the right moment.",
      },
    ],
  },
  {
    id: "open",
    label: "Opening — first 5 minutes",
    color: "#ff7900",
    items: [
      {
        type: "say",
        text: "\"I'm not here to sell you software. I'm here to show you what your team can build in 10 weeks.\"",
      },
      {
        type: "say",
        text: "\"You don't need another vendor. You need a capability — one your people own.\"",
      },
      {
        type: "note",
        text: "Don't start with the deck. Start with eye contact and one sentence. Then open the laptop.",
      },
    ],
  },
  {
    id: "problem",
    label: "Problem — the 5-day wait story",
    color: "#ff453a",
    items: [
      {
        type: "say",
        text: "\"A customer's contract expired. They called in. Waited 5 days for someone to call back with an offer. Do you know how many of those walk to Vodafone in those 5 days?\"",
      },
      {
        type: "say",
        text: "\"Your support inbox gets hundreds of emails a day. Someone reads them, sorts them, forwards them. That person has a university degree. They shouldn't be doing that.\"",
      },
      {
        type: "note",
        text: "Let the silence sit after the 5-day story. Don't rush to the solution. They'll fill the silence.",
      },
      {
        type: "plant",
        text: "PLANT: \"The volume problem isn't going away. It scales with your subscriber base. The only way to solve it without scaling headcount is automation.\"",
      },
    ],
  },
  {
    id: "solution",
    label: "Solution — what Phase 1 actually is",
    color: "#30d158",
    items: [
      {
        type: "say",
        text: "\"We don't build this for you. Your people build it. We guide the build. In 10 weeks, two of your teams ship working agents. You own them.\"",
      },
      {
        type: "say",
        text: "\"Team A builds the renewal agent. It monitors expiring contracts, reads the customer profile, and sends a personalised offer on WhatsApp before the customer even knows they need to renew.\"",
      },
      {
        type: "say",
        text: "\"Team B builds the triage agent. Every email gets read, scored, and routed. No queue. No manual sorting. Your agents handle decisions — not admin.\"",
      },
      {
        type: "note",
        text: "Show the proposal here. Point to the Phase 1 split card. Let them read the timeline themselves — don't narrate every line.",
      },
    ],
  },
  {
    id: "personal",
    label: "The personal angle — say, never write",
    color: "#ff9f0a",
    items: [
      {
        type: "plant",
        text: "VISIBILITY: \"If this works here — and it will — Group will want to replicate it in Poland, Belgium, Spain. That playbook comes from Bucharest. From your initiative.\"",
      },
      {
        type: "plant",
        text: "SAVING MONEY: \"The renewal agent alone, if it recaptures 0.5% of contracts that currently churn from friction — do the math on 9 million subscribers. That's a number you can put in a Group report.\"",
      },
      {
        type: "plant",
        text: "DOING MORE WITH LESS: \"You don't need to hire more people to handle more volume. You need your existing team to handle 10x the volume. That's what this does.\"",
      },
      {
        type: "plant",
        text: "INNOVATION CREDIT: \"Paris has Live Intelligence Studio. You don't need to wait for Group to mandate this. You can arrive at the next review already running.\"",
      },
      {
        type: "plant",
        text: "COST CONTROL: \"€25K is below VP discretionary. No committee. No procurement cycle. You can move next week if you want to.\"",
      },
      {
        type: "rule",
        text: "DROP ONE of these max per meeting. Not all five. Pick the one that fits who they are.",
      },
    ],
  },
  {
    id: "values",
    label: "Values drops — match to the person",
    color: "#0071e3",
    items: [
      {
        type: "value",
        trigger: "They value FAIRNESS",
        say: "\"It's fair to your employees to give them tools that remove the grunt work. They're here because of their judgment and expertise — not to sort emails. And it's fair to the company to use what's available.\"",
      },
      {
        type: "value",
        trigger: "They value RECOGNITION / STATUS",
        say: "\"In 18 months, you'll have something no other Orange market has. Warsaw will call Bucharest. That's a different position to be in at Group reviews.\"",
      },
      {
        type: "value",
        trigger: "They value SECURITY",
        say: "\"Nobody gets replaced. The agent handles volume. Your team handles everything that requires judgment. That's a story you control — both internally and upward.\"",
      },
      {
        type: "value",
        trigger: "They value ACHIEVEMENT",
        say: "\"Three working agents in 10 weeks. Measurable. Reportable. You walk into the next Group review with concrete numbers — not a roadmap.\"",
      },
      {
        type: "value",
        trigger: "They value INNOVATION",
        say: "\"This isn't a ChatGPT subscription. This is your people building AI infrastructure from scratch. That's a different level of capability — and it stays inside Orange.\"",
      },
      {
        type: "value",
        trigger: "They value LOYALTY / TEAM",
        say: "\"The 12 people who go through this become your AI team. They don't leave for a startup — they built this here, for Orange, with Orange's problems. That's a retention play too.\"",
      },
      {
        type: "rule",
        text: "Don't guess — listen. Use the word they use. If they say 'fair', use 'fair'. If they say 'results', use 'results'. Mirror their language.",
      },
    ],
  },
  {
    id: "ego",
    label: "The ego play — for senior, high-ego profiles",
    color: "#ff453a",
    items: [
      {
        type: "note",
        text: "Only use this if you're sure they're senior enough and have the ego for it. Don't force it.",
      },
      {
        type: "plant",
        text: "\"Most people in your position wait for Group to tell them what to do. You're in a position to tell Group what's possible.\"",
      },
      {
        type: "plant",
        text: "\"The companies that win on AI in the next 3 years aren't the ones who bought the most software. They're the ones whose people understand how to build with it. You can be that at Orange Romania.\"",
      },
      {
        type: "plant",
        text: "\"Paris has a studio. You don't need a studio. You need 12 people who've shipped agents inside your own infrastructure. That's actually harder to replicate.\"",
      },
    ],
  },
  {
    id: "close",
    label: "The close",
    color: "#30d158",
    items: [
      {
        type: "say",
        text: "\"I'm not asking you to approve a €500K programme today. I'm asking for 10 weeks and €25K. If after week 10 the agents don't deliver value — you still have 12 trained people. You can't lose.\"",
      },
      {
        type: "say",
        text: "\"What would need to be true for you to say yes to this?\"",
      },
      {
        type: "note",
        text: "Ask that last question and stop talking. Don't fill the silence. Whatever they say next tells you exactly what objection to handle.",
      },
      {
        type: "rule",
        text: "Leave the proposal URL on screen when you close the laptop. Don't email it — make them ask for it. Or open it on their machine before you leave.",
      },
    ],
  },
  {
    id: "dont",
    label: "What NOT to say",
    color: "#86868b",
    items: [
      { type: "dont", text: "Don't mention FDRP, APEX OS, or technical architecture names. Say 'methodology' or 'framework' if pressed." },
      { type: "dont", text: "Don't say 'AI agents will replace jobs'. Say 'handles volume so your people handle decisions'." },
      { type: "dont", text: "Don't quote competitor prices. Don't mention IBM or Accenture unless they bring it up first." },
      { type: "dont", text: "Don't oversell Phase 3. You're selling Phase 1. Phase 2 and 3 come out naturally after they ask 'what does this lead to?'" },
      { type: "dont", text: "Don't say 'we are a small team' or downplay your credentials. Say 'we run this in production' and stop." },
      { type: "dont", text: "Don't pitch Liviu in the first meeting unless they ask about the quality framework specifically." },
    ],
  },
];

const TYPE_CONFIG: Record<string, { label: string; bg: string; text: string }> = {
  task:  { label: "DO",    bg: "bg-[#6e3aff]/15", text: "text-[#a78bfa]" },
  say:   { label: "SAY",   bg: "bg-[#ff7900]/15", text: "text-[#ff9a40]" },
  plant: { label: "PLANT", bg: "bg-[#0071e3]/15", text: "text-[#60a5fa]" },
  note:  { label: "NOTE",  bg: "bg-white/5",       text: "text-white/50"  },
  rule:  { label: "RULE",  bg: "bg-[#ff453a]/10",  text: "text-[#ff6b6b]" },
  value: { label: "VALUE", bg: "bg-[#0071e3]/15",  text: "text-[#60a5fa]" },
  dont:  { label: "DON'T", bg: "bg-[#ff453a]/10",  text: "text-[#ff6b6b]" },
};

export default function SpeechPage() {
  const [active, setActive] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white font-sans">
      {/* Header */}
      <div className="sticky top-0 z-10 bg-[#0a0a0a]/95 backdrop-blur border-b border-white/[0.06] px-4 py-3">
        <div className="max-w-2xl mx-auto flex items-center justify-between">
          <div>
            <div className="text-[10px] font-black uppercase tracking-widest text-[#ff7900]">Private — Not for sharing</div>
            <div className="text-[15px] font-black text-white">Orange Romania — Speech Guide</div>
          </div>
          <div className="text-[11px] text-white/20 uppercase tracking-widest">Nico only</div>
        </div>
      </div>

      {/* Nav pills */}
      <div className="sticky top-[52px] z-10 bg-[#0a0a0a]/90 backdrop-blur px-4 py-2 border-b border-white/[0.04]">
        <div className="max-w-2xl mx-auto flex gap-2 overflow-x-auto pb-1 scrollbar-hide">
          {SECTIONS.map((s) => (
            <button
              key={s.id}
              onClick={() => {
                setActive(s.id);
                document.getElementById(s.id)?.scrollIntoView({ behavior: "smooth", block: "start" });
              }}
              className="flex-shrink-0 px-3 py-1.5 rounded-full text-[11px] font-bold transition-all"
              style={{
                background: active === s.id ? s.color : "rgba(255,255,255,0.06)",
                color: active === s.id ? "#fff" : "rgba(255,255,255,0.4)",
              }}
            >
              {s.label.split(" — ")[0]}
            </button>
          ))}
        </div>
      </div>

      {/* Sections */}
      <div className="max-w-2xl mx-auto px-4 py-8 space-y-10">
        {SECTIONS.map((section) => (
          <div key={section.id} id={section.id}>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-3 h-3 rounded-full flex-shrink-0" style={{ background: section.color }} />
              <h2 className="text-[13px] font-black uppercase tracking-widest" style={{ color: section.color }}>
                {section.label}
              </h2>
            </div>
            <div className="space-y-2">
              {section.items.map((item, i) => {
                const cfg = TYPE_CONFIG[item.type] ?? TYPE_CONFIG.note;
                return (
                  <div key={i} className={`rounded-xl p-4 ${cfg.bg}`}>
                    {"trigger" in item && (
                      <div className="text-[10px] font-black uppercase tracking-widest text-white/30 mb-2">
                        IF: {item.trigger}
                      </div>
                    )}
                    <div className="flex gap-3 items-start">
                      <span className={`text-[9px] font-black uppercase tracking-widest flex-shrink-0 mt-0.5 ${cfg.text}`}>
                        {cfg.label}
                      </span>
                      <p className="text-[14px] text-white/90 leading-relaxed">
                        {"say" in item ? item.say : item.text}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        ))}

        {/* Footer */}
        <div className="text-center py-8 border-t border-white/[0.06]">
          <p className="text-[11px] text-white/20 uppercase tracking-widest">
            Nico Fratila · APEX OS × InfoAcademy · April 2026
          </p>
          <p className="text-[10px] text-white/10 mt-1">
            Not for distribution · Speech guide only
          </p>
        </div>
      </div>
    </div>
  );
}
