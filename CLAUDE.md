# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

**אלוגברה** (Alogebra) is an Israeli Hebrew-language math learning platform for grades 7–10. It is a client-side SPA hosted via [Lovable](https://lovable.dev/projects/9e41ee9a-f348-49b3-ae86-e31b121a3dc2). The UI is entirely RTL Hebrew.

## Commands

```bash
npm run dev       # Start dev server on port 8080
npm run build     # Production build (Vite + SWC)
npm run lint      # ESLint (eslint.config.js, typescript-eslint)
npm run preview   # Preview production build locally
```

There is no test suite. Type-check with `npx tsc --noEmit`.

## Architecture

### Routing (`src/App.tsx`)
| Route | Component | Notes |
|---|---|---|
| `/` | `Landing` | Public marketing page |
| `/about` | `About` | About page |
| `/pricing` | `Pricing` | Shows tier cards + mock sign-in |
| `/dashboard` | `Dashboard` | Grade/topic/tool picker — redirects to `/pricing` if logged out |
| `/activity/:id` | `Activity` | Activity viewer with an iframe/HTML embed placeholder |

`BrowserRouter` → `AuthProvider` → `Routes`. TanStack Query's `QueryClientProvider` wraps everything but is not yet wired to any data fetching (no backend exists yet).

### Auth (`src/contexts/AuthContext.tsx`)
**Mock auth only** — `signInWithGoogle()` sets a hardcoded user object in local state. The comment in that file explicitly marks it as a placeholder for Firebase Auth + Firestore. `UserTier` is `"free" | "premium"`. The `upgradeToPremium()` helper flips the tier in-memory.

### Curriculum data (`src/data/curriculum.ts`)
Single source of truth for all content. The type hierarchy is `GradeId → Topic[] → Tool[]`. Each `Tool` has `premium: boolean` and an optional `hero: boolean` flag (renders the tool card with the primary→accent gradient instead of a plain card). To add a new topic or tool, edit only this file.

### Activity page (`src/pages/Activity.tsx`)
Activity content is currently a hardcoded mock map (`activitiesData`) and the main content area is an empty placeholder meant to receive an `<iframe>` or custom HTML widget. When implementing a real activity, embed it in the `min-h-[500px]` container div.

### Component groups
- `src/components/ui/` — shadcn/ui generated components (Radix primitives). Do not hand-edit these; use the shadcn CLI (`npx shadcn@latest add <component>`).
- `src/components/landing/` — Landing page sections (`TriangleShowcase`, `StatsSection`, `LearnAloneSection`, `TeacherStorySection`).
- `src/components/math/` — Math-specific primitives (see RTL/Math section below).
- `src/components/AppNav.tsx` — Sticky glass-morphism nav used on all pages.
- `src/components/PremiumModal.tsx` — Dialog shown when a free user clicks a locked tool; navigates to `/pricing`.

### Root-level scratch files
`gradehub` and `layoutnew` and `codeforupdate` in the repo root are **not part of the active application** — they are scratch/exploration code fragments. Do not import from them.

## RTL & Math Conventions

The global stylesheet sets `html { direction: rtl; }`. All Hebrew layout is RTL by default.

Mathematical expressions must be wrapped in `<MathBlock>` (`src/components/math/MathBlock.tsx`), which enforces `dir="ltr"` and applies the `font-math` class. Never mix Hebrew text and math symbols in the same span without this wrapper.

Never render fractions as `a/b` in UI text. Use `<Fraction numerator={...} denominator={...} />` (`src/components/math/Fraction.tsx`) for proper CSS-based fraction display.

## Styling System

Tailwind with CSS custom properties defined in `src/index.css`. Key non-obvious conventions:

- **Gold = premium**: `bg-gradient-to-r from-gold to-gold-light` is the premium/plus visual identity. Use `text-gold-dark` for accessible text on gold backgrounds.
- **Utility classes** (defined in `src/index.css` `@layer components`): `.glass` (frosted-glass nav/cards), `.glass-dark`, `.text-gradient-hero`, `.text-gradient-gold`, `.bg-hero-gradient`, `.grid-pattern`, `.shadow-card`, `.shadow-2xl-soft`, `.shadow-glow`, `.shadow-gold`.
- **Border radius**: `--radius: 1.5rem`. Cards use `rounded-[2rem]`, interactive panels use `rounded-[2.5rem]`. Maintain this large-radius aesthetic throughout.
- **Font**: `Assistant` for all Hebrew UI text. `Inter`/`SF Pro Display` for math — apply via `font-math` Tailwind class or `className="font-math"`.

## Free/Premium Gating

Tool access is gated by `tool.premium` (from `curriculum.ts`) against `user.tier` (from `useAuth()`). In `Dashboard.tsx`, clicking a locked tool opens `PremiumModal`. In `Pricing.tsx`, any paid tier selection calls `upgradeToPremium()` in-memory — there is no real payment flow yet.

## Path Alias

`@/` resolves to `src/`. Always use this alias for imports rather than relative paths.

## Lovable Integration

`lovable-tagger` (in `vite.config.ts`) is active only in `mode === "development"` and adds data attributes for Lovable's visual editor. It is a no-op in production builds and can be ignored.
