---
name: aicoe-design-system
description: Apply the AICOE design system (light-only, steel-blue brand, Geist 13px, borders-over-shadows) to any app — new projects or migrating existing ones. Use whenever the user asks to style, restyle, or align an app's UI to AICOE design standards.
---

# AICOE Design System — Skill

## Skill name
`aicoe-design-system`

## Description
Reusable design system for all AICOE apps, extracted from ShiftAI Marketing Studio. Gives any app the same look and feel: white pages, zinc neutrals, 1px borders instead of shadows, steel-blue brand `#456bb6`, fixed status semantics (blue = agent/in-progress · amber = human gate/waiting · green = done · red = blocked), Geist 13px type with an 11px floor, 12px/8px/pill radii, compact 32px controls. Works for **starting a new project** or **migrating an ongoing project** to these standards.

## GitHub URL
https://github.com/pranjal254/aicoe-design-system

## Install command

```bash
# Option A — clone next to your projects (shared, single source of truth)
git clone https://github.com/pranjal254/aicoe-design-system.git

# Option B — vendor into one app (self-contained)
git clone https://github.com/pranjal254/aicoe-design-system.git temp-ds
cp -r temp-ds/tokens temp-ds/styles src/design-system && rm -rf temp-ds

# Option C — install as a Claude Code skill (project-level)
mkdir -p .claude/skills/aicoe-design-system
curl -L https://raw.githubusercontent.com/pranjal254/aicoe-design-system/main/SKILL.md \
  -o .claude/skills/aicoe-design-system/SKILL.md
```

## Dependency packages

```bash
npm i @fontsource-variable/geist @fontsource-variable/geist-mono @phosphor-icons/react
```

| Package | Purpose |
|---|---|
| `@fontsource-variable/geist` | Geist Variable — the system's sans font |
| `@fontsource-variable/geist-mono` | Geist Mono — code, costs, hashes, ids |
| `@phosphor-icons/react` | Icon library (regular weight, 14–16px) |

No other runtime dependencies — the system is plain CSS + optional thin React wrappers.

## Code example

**1. Entry file (`src/main.tsx`) — import fonts + CSS in this exact order:**

```tsx
import "@fontsource-variable/geist";
import "@fontsource-variable/geist-mono";
import "./design-system/tokens.css";      // design tokens (source of truth)
import "./design-system/base.css";        // reset, typography, focus
import "./design-system/layout.css";      // app shell (sidebar/topbar) — optional
import "./design-system/components.css";  // buttons, chips, cards, lists…
```

**2. Compose screens from catalog classes:**

```tsx
export function CampaignRow() {
  return (
    <div className="list-panel">
      <button className="list-row clickable"
        style={{ gridTemplateColumns: "36px 1fr 150px 20px" }}>
        <span className="monogram">BC</span>          {/* agent = rounded square */}
        <div>
          <h3>BC Cloud Momentum</h3>
          <p className="meta-label">Financial Services · Demand generation</p>
        </div>
        <span className="chip amber">Awaiting sign-off</span>  {/* amber = human gate */}
        <span className="row-arrow">›</span>
      </button>
    </div>
  );
}
```

**3. Or drive it with Claude Code (VS Code extension):**

> Change this app's UI/look and feel based on the aicoe-design-system repo
> (https://github.com/pranjal254/aicoe-design-system) — read its CLAUDE.md first,
> then follow docs/apply-to-existing-app.md.

## Usage

### Starting a new project
1. Install dependency packages (above).
2. Copy `tokens/` + `styles/` into `src/design-system/`; import in order (see code example).
3. Optionally copy `components/react/primitives.tsx` for Avatar, Chip, Modal, Menu, Drawer.
4. Build every screen from `docs/component-catalog.md` (markup) and `docs/patterns.md` (page layouts).

### Migrating an ongoing project
1. Read `CLAUDE.md`, then follow `docs/apply-to-existing-app.md` step-by-step:
   inventory → foundation → theme swap → primitives in order (buttons → chips → cards → lists → forms → overlays → shell) → typography/density pass.
2. Tailwind/MUI apps: map `tokens/tokens.json` into the theme config instead of importing `components.css` wholesale.
3. Finish with the verification checklist (borders not shadows, status semantics, focus ring, 1080/760px responsive, no font below 11px).

### Non-negotiables (never override)
- Light theme only — no dark mode
- Brand `#456bb6`; red only as text/small chips, never filled buttons
- Status semantics fixed: blue agent · amber waiting · green done · red blocked
- Geist 13px base, type floor 11px; radius 12/8/pill; borders over shadows
- Humans = circle avatars, agents = rounded-square monograms
