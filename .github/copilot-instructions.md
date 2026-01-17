## Purpose
This file guides AI coding agents working on this repository so they can be productive immediately.

## High-level architecture
- Framework: Next.js (app router, Next 16) with TypeScript. Entry points are under `app/` (server components by default).
- UI: `components/` contains page-level and UI primitives (`components/ui/`). Global layout is `app/layout.tsx` which mounts `PageEffects` and `Header`.
- Data: static JSON files live in `data/` and are exposed via small helpers in `lib/` (e.g. `lib/getSquad.ts`). Types live in `types/` and should be imported for shapes.
- Routing: dynamic routes use the app-directory pattern (example: `app/tournaments/[slug]/page.tsx`).

## Developer workflows (repeatable commands)
- Run dev server: `npm run dev` (Next dev, port 3000 by default).
- Build for production: `npm run build`.
- Start production server: `npm run start`.
- Lint: `npm run lint` (project uses `eslint`).

Note: `package.json` lists these scripts and Next 16 / TypeScript dependencies.

## Project-specific conventions
- Imports use the `@/` alias (e.g. `import Header from "@/components/Header"`). Preserve these when adding files.
- Server vs Client components: files with `"use client"` at the top are client components (see `components/Header.tsx`). Default in `app/` is server component—only add `"use client"` when DOM APIs, state, or hooks are needed.
- Styling: Tailwind CSS is used; global styles are in `app/globals.css`. Classnames may rely on CSS variables set in `app/layout.tsx` (fonts, theme classes like `new-year-bg`).
- Data flow: prefer adding static data to `data/*.json` and exposing it via `lib/*` helpers. Types should be declared/used from `types/` (for example, `types/index.ts`).

## Patterns & examples
- Global layout: `app/layout.tsx` — sets fonts (next/font), mounts `PageEffects` and `Header`, and wraps all pages. Keep metadata exports consistent with existing pattern.
- Data helper: `lib/getSquad.ts` — returns typed data from `data/squad.json`. Follow this pattern for new data access helpers.
- Component examples: `components/Header.tsx` (client component), `components/participants/SquadCard.tsx` and `components/participants/SquadCarousel.tsx` show how squad data is displayed with small, focused components.
- Page example: `app/tournaments/[slug]/page.tsx` demonstrates server-rendered dynamic pages consuming `data/tournaments.json` and types from `types/`.

## Integration points & external deps
- No server-side third-party APIs are configured; external links (Discord, etc.) appear in `data/tournaments.json`.
- Key runtime libs: `framer-motion` (animations), `next`, `react`, Tailwind and `next/font`.

## Editing guidance for AI agents
- Keep edits small and local: modify or add the minimal files required (data -> lib -> component -> page).
- When introducing new data shapes, add or update types in `types/` and use them across `lib/` and `app/` pages.
- Client components must include `"use client"`. Prefer server components for data fetching in the `app/` router.
- Preserve idiomatic patterns: `@/` imports, `PageEffects` usage in layout, and use of small focused components in `components/participants/`.
- Avoid changing global design tokens (fonts, top-level classnames) unless necessary; those are defined in `app/layout.tsx` and `app/globals.css`.

## Known repo quirks and notes
- `README.md` currently contains unresolved merge markers; avoid editing it unless you intend to resolve the conflict.
- There are no automated tests present — rely on `npm run dev` and manual verification in the browser for UI changes.

## When to ask the maintainer
- Significant structural changes (new global state, new build-time transforms, or adding external APIs).
- If you need to resolve the `README.md` merge conflict or change project-level configs (Next config, Tailwind versions).

---
If anything here is unclear or you want more examples (specific components or pages), tell me which area to expand.
