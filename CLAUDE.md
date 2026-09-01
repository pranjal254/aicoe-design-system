# AICOE Design System — Instructions for Claude Code

You are looking at the **AICOE Design System**: the canonical look and feel for all AICOE apps, extracted from ShiftAI Marketing Studio. When a user says anything like *"use the aicoe design system"*, *"restyle this app to the design system"*, or *"change the look and feel based on this folder"*, follow this file.

## What to read, in order
1. `tokens/tokens.css` — the single source of truth for colors, radius, type, spacing. Never invent values that exist here.
2. `docs/design-principles.md` — the rules (light-only theme, borders over shadows, status semantics, type floor 11px).
3. `docs/apply-to-existing-app.md` — the step-by-step restyling playbook. Follow it when converting an existing app.
4. `docs/component-catalog.md` + `docs/patterns.md` — canonical markup for primitives and page layouts.
5. `styles/*.css` and `components/react/primitives.tsx` — code to copy or import.

## How to apply to an app
- **New app**: copy `tokens/` + `styles/` into `src/design-system/` (or import from this folder), import in order tokens → base → layout → components, install `@fontsource-variable/geist`, `@fontsource-variable/geist-mono`, `@phosphor-icons/react`. Build screens by composing catalog classes and patterns.
- **Existing plain-CSS app**: same, then migrate screen-by-screen per the playbook (buttons → chips → cards → lists → forms → overlays → shell → typography pass).
- **Tailwind/MUI app**: map `tokens/tokens.json` into the theme config instead of importing components.css wholesale; keep class semantics and all non-negotiables.
- Do not modify files in this design-system folder when styling a target app unless the user explicitly asks to evolve the system itself.

## Non-negotiables (never "improve" these)
- **Light theme only.** White page, `#fafafa` recessed surfaces. No dark mode.
- Brand steel blue `#456bb6` for actions/active states — never bootstrap/tailwind default blues.
- Status semantics are fixed: **blue = agent/in-progress · amber = human gate/waiting · green = done/approved · red = blocked** (red only as text/small chips, never filled buttons or large fills).
- Geist Variable font, 13px base, **type floor 11px**.
- Radius 12px panels / 8px controls / pill chips. **1px `--line` borders instead of shadows** on resting cards; shadows only on floating surfaces (menus, popovers, drawers, toasts).
- Compact density: 32px buttons/inputs, 16px card padding, 12–14px grid gaps, 1200px content max.
- Humans = circle avatars; agents/entities = rounded-square monograms.
- Keep the global `:focus-visible` ring and `prefers-reduced-motion` block.
- Sentence case for all UI text; metadata muted 11.5px; ids/costs/hashes in Geist Mono.

## Verification checklist before finishing
Run the checklist at the end of `docs/apply-to-existing-app.md` (borders not shadows, semantics, focus ring, responsive at 1080/760px, no font below 11px).
