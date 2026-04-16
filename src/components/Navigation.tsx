"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";

const homepageSections = [
  { anchor: "problem", label: "The Challenge" },
  { anchor: "offer", label: "What We Offer" },
  { anchor: "value", label: "The Value" },
  { anchor: "proof", label: "Track Record" },
  { anchor: "team", label: "Team" },
  { anchor: "engagement", label: "The Engagement" },
  { anchor: "cta", label: "Contact" },
];

// Phase-2 and Phase-3 get their own short nav pointing at sections on that page,
// plus a link back to the homepage.
const phase2Sections = [
  { anchor: "problem", label: "The Challenge", target: "home" },
  { anchor: "offer", label: "What Gets Built", target: "self" },
  { anchor: "investment", label: "Investment", target: "self" },
  { anchor: "team", label: "Team", target: "home" },
  { anchor: "cta", label: "Contact", target: "self" },
];

const phase3Sections = [
  { anchor: "problem", label: "The Challenge", target: "home" },
  { anchor: "offer", label: "Operating Model", target: "self" },
  { anchor: "investment", label: "Investment", target: "self" },
  { anchor: "team", label: "Team", target: "home" },
  { anchor: "cta", label: "Contact", target: "self" },
];

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  // Build the nav section list based on current route
  const isHome = pathname === "/";
  const isPhase2 = pathname === "/phase-2";
  const isPhase3 = pathname === "/phase-3";

  let sections: { href: string; label: string }[];
  if (isHome) {
    sections = homepageSections.map((s) => ({ href: `#${s.anchor}`, label: s.label }));
  } else if (isPhase2) {
    sections = phase2Sections.map((s) => ({
      href: s.target === "self" ? `#${s.anchor}` : `/#${s.anchor}`,
      label: s.label,
    }));
  } else if (isPhase3) {
    sections = phase3Sections.map((s) => ({
      href: s.target === "self" ? `#${s.anchor}` : `/#${s.anchor}`,
      label: s.label,
    }));
  } else {
    sections = homepageSections.map((s) => ({ href: `/#${s.anchor}`, label: s.label }));
  }

  const logoHref = isHome ? "#hero" : "/";

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "bg-white/90 backdrop-blur-xl border-b border-[#e8e8ed]" : "bg-transparent"
      }`}
    >
      <div className="max-w-[1120px] mx-auto flex items-center justify-between h-[52px] px-6">
        <a href={logoHref}
          className={`flex items-center gap-2 transition-colors duration-500 ${
            scrolled ? "text-[#1d1d1f]" : "text-white"
          }`}>
          <div className="w-7 h-7 rounded-lg flex items-center justify-center" style={{ background: "#ff7900" }}>
            <span className="text-white text-[11px] font-black">IA</span>
          </div>
          <span className="text-sm font-bold tracking-tight">InfoAcademy × Orange</span>
        </a>

        <ul className="hidden md:flex items-center gap-6">
          {sections.map((s) => (
            <li key={s.href}>
              <a href={s.href}
                className={`text-[13px] font-medium transition-colors duration-300 ${
                  scrolled ? "text-[#6e6e73] hover:text-[#1d1d1f]" : "text-white/60 hover:text-white"
                }`}>{s.label}</a>
            </li>
          ))}
        </ul>

        <button onClick={() => setMenuOpen((v) => !v)}
          className="md:hidden p-2 -mr-1 rounded-lg cursor-pointer"
          aria-label="Toggle menu" aria-expanded={menuOpen}>
          <svg width="22" height="16" viewBox="0 0 22 16" fill="none">
            <rect x="0" y="0" width="22" height="2" rx="1"
              fill={scrolled ? "#1d1d1f" : "white"}
              style={{ transformOrigin: "11px 1px", transform: menuOpen ? "rotate(45deg) translateY(6px)" : "none", transition: "transform 0.3s ease" }} />
            <rect x="0" y="7" width="22" height="2" rx="1"
              fill={scrolled ? "#1d1d1f" : "white"}
              style={{ opacity: menuOpen ? 0 : 1, transition: "opacity 0.2s ease" }} />
            <rect x="0" y="14" width="22" height="2" rx="1"
              fill={scrolled ? "#1d1d1f" : "white"}
              style={{ transformOrigin: "11px 15px", transform: menuOpen ? "rotate(-45deg) translateY(-6px)" : "none", transition: "transform 0.3s ease" }} />
          </svg>
        </button>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }} transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="md:hidden bg-white/97 backdrop-blur-xl border-b border-[#e8e8ed] overflow-hidden">
            <div className="px-6 py-4 flex flex-col gap-1">
              {sections.map((s) => (
                <a key={s.href} href={s.href} onClick={() => setMenuOpen(false)}
                  className="py-3 text-[16px] font-medium text-[#1d1d1f] border-b border-[#f5f5f7] last:border-0 active:text-[#ff7900] transition-colors">
                  {s.label}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
