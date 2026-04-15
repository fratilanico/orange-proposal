# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

A Next.js 16 marketing/proposal site for InfoAcademy's AI Operations Lab pitch to Orange Romania. Deployed on Vercel. No backend, no database, no API routes — just animated landing pages with hardcoded content.

`AGENTS.md` covers the same ground in OpenCode's format; keep both files in sync when editing.

## Commands

```bash
npm run dev     # Next.js dev server on :3000
npm run build   # production build — the only real verification step
```

No linter, formatter, test runner, or CI pipeline is configured. `npm run build` is the gate.

## Stack

- **Next.js 16** (App Router) + React 19 + TypeScript 5
- **Tailwind CSS 4** via `@tailwindcss/postcss` — tokens live in `@theme inline` inside `src/app/globals.css`, **not** in a `tailwind.config.*` file. Most training data assumes v3; don't create that file.
- **Framer Motion** for scroll-triggered animations
- **Lucide React** for icons
- Path alias: `@/*` → `./src/*`

## Architecture

Single-layout app. All pages are `"use client"`. Content is hardcoded inline in the page files — no CMS, no data directory. Pages are long single-file components with data constants declared at the top, then a component that renders them.

| Route | Purpose |
|-------|---------|
| `/` | Main proposal — hero, pain points, phases, team, pricing |
| `/phase-2` | Detailed Phase 2 page |
| `/phase-3` | Detailed Phase 3 page |
| `/liviu` | **Private** strategy page addressed to Liviu Olos — currently public URL. Treat as sensitive. |
| `/speech` | Password-gated speech notes (password is hardcoded in source) |

Shared components live in `src/components/` (AnimateIn, Navigation, ScrollProgress, etc.). However, `/phase-2` and `/liviu` inline their own `AnimateIn` rather than importing the shared one — don't create a fourth copy; if you need to edit it, edit the inlined versions in place or lift them all to `src/components/AnimateIn.tsx`.

## Conventions

- Colors are defined as CSS custom properties in `src/app/globals.css` under `@theme inline`. Use tokens (e.g. `--color-orange: #ff7900`), not raw hex.
- Animation pattern: wrap blocks in `<AnimateIn>` for scroll fade-in; use `<motion.div>` directly for anything custom.
- Long data arrays sit at the top of the page file as `const` blocks; the component body maps over them.

## Current project state (as of 2026-04-15)

The V2 proposal deck (`/Users/nico/Downloads/Orange_Romania Presentation edits V2.pptx`) has moved ahead of the live site. Key differences the site still needs to catch up on:

- **Vocabulary**: deck uses **Stage 1** for the 10-week engagement, then Phase 2 (6mo) and Phase 3 (9mo). The site still says "Phase 1" in many places.
- **Price**: deck says **€30K–€50K based on scope**, not €30K flat.
- **FDRP is coming out**: the "Fratila Diamond Refinement Process" is licensed from Liviu Olos and the current plan is to stop leading with it. The governance story needs to be rebranded (working name: "AI Operations Framework") so the proposal doesn't depend on Liviu's IP. Liviu can still contribute, but he's no longer load-bearing.
- **Phase 2 page has drift**: it still contains WhatsApp AI Gateway, B2B AI Pipeline, and other cards that aren't in the deck and have nothing to do with what Orange asked for. These should be removed in favour of productionisation/governance/observability/ownership cards that match slides 9–10.
- **Phase 3 page is FDRP-heavy**: needs to be rewritten around the deck's five Phase 3 pillars — governance, shared services, operating model, reporting/trust, future expansion.
- **Team order**: slide 15 says Mru Patel should be first on the site for credibility (40 years, IBM/Siemens/Sun, £3B+ programmes, Fortune 500 advisor since 1987). Add Hardik Nakum to the execution layer. Update Bogdan Toporan's role to "engineering architecture and telecom-grade pipelines".
- **External links**: `https://orange.apex.infoacademy.uk` and `nico.apex.infoacademy.uk` references in `layout.tsx` and `page.tsx` are being retired — ask before editing these to pick the replacement.

The deck itself is the source of truth going forward. When the deck and the site disagree, the deck wins.

## Gotchas

- `/speech` has a plaintext password (`Nico!234Apex2305`) in source — don't change this to something more visible, don't log it, don't paste it into commit messages.
- `/liviu` is a public URL with private strategy content. If you touch that page, either keep it private-by-URL or explicitly ask about adding a password gate.
- `.playwright-mcp/` holds Playwright MCP session artifacts — gitignored, safe to ignore.
- No `.env` files; no environment variables are used.
- `BRIEF.md`, `speech-ro.md`, and `speech-ro.pdf` are source material (the original proposal brief and Romanian speech text) — reference documents, not code.
- `SESSION_TRANSCRIPT.jsonl` is a large committed session log — don't edit it by hand.
