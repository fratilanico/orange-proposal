"use client";

import { useEffect, useState } from "react";

const sections = [
  { id: "hero", label: "Intro" },
  { id: "problem", label: "The Challenge" },
  { id: "offer", label: "What We Offer" },
  { id: "value", label: "The Value" },
  { id: "proof", label: "Track Record" },
  { id: "team", label: "Team" },
  { id: "engagement", label: "The Engagement" },
  { id: "cta", label: "Contact" },
];

export default function ScrollProgress() {
  const [progress, setProgress] = useState(0);
  const [active, setActive] = useState("");

  useEffect(() => {
    const onScroll = () => {
      const doc = document.documentElement;
      const scrollTop = doc.scrollTop || document.body.scrollTop;
      const scrollHeight = doc.scrollHeight - doc.clientHeight;
      setProgress(scrollHeight > 0 ? (scrollTop / scrollHeight) * 100 : 0);

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i].id);
        if (el && el.getBoundingClientRect().top <= 120) {
          setActive(sections[i].id);
          break;
        }
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <div className="fixed top-0 left-0 right-0 z-[100] h-[2px] bg-white/[0.06]">
        <div
          className="h-full bg-gradient-to-r from-[#ff7900] to-[#ff9a40] transition-all duration-100"
          style={{ width: `${progress}%` }}
        />
      </div>

      <div className="fixed right-5 top-1/2 -translate-y-1/2 z-50 hidden xl:flex flex-col gap-3">
        {sections.map((s) => (
          <a
            key={s.id}
            href={`#${s.id}`}
            title={s.label}
            className="group flex items-center gap-2 justify-end"
          >
            <span className="text-[11px] font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-200 text-white/60 whitespace-nowrap">
              {s.label}
            </span>
            <span
              className={`block rounded-full transition-all duration-300 ${
                active === s.id
                  ? "w-[8px] h-[8px] bg-[#ff7900]"
                  : "w-[5px] h-[5px] bg-white/20 group-hover:bg-white/50"
              }`}
            />
          </a>
        ))}
      </div>
    </>
  );
}
