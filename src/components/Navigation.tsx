"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const sections = [
  { href: "#problem", label: "The Challenge" },
  { href: "#offer", label: "What We Offer" },
  { href: "#value", label: "The Value" },
  { href: "#proof", label: "Track Record" },
  { href: "#team", label: "Team" },
  { href: "#engagement", label: "The Engagement" },
  { href: "#cta", label: "Contact" },
];

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "bg-white/90 backdrop-blur-xl border-b border-[#e8e8ed]" : "bg-transparent"
      }`}
    >
      <div className="max-w-[1120px] mx-auto flex items-center justify-between h-[52px] px-6">
        <a href="#hero"
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
