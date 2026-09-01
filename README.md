# AICOE Design System

Reusable design system for all AICOE apps. Extracted from **ShiftAI Marketing Studio** — calm, dense, enterprise-light: white pages, zinc neutrals, 1px borders over shadows, steel-blue brand, emerald success, amber human-gates, 13px Geist type.

## Folder map

```
aicoe-design-system/
├── CLAUDE.md                     ← entry point for Claude Code ("apply this design system")
├── README.md
├── tokens/
│   ├── tokens.css                ← CSS custom properties (source of truth)
│   └── tokens.json               ← machine-readable (Tailwind/MUI/JS mapping)
├── styles/
│   ├── base.css                  ← reset, typography, focus, reduced-motion
│   ├── layout.css                ← app shell: sidebar, topbar, content column, responsive
│   └── components.css            ← buttons, chips, cards, KPI bands, lists, forms, overlays…
├── components/react/
│   └── primitives.tsx            ← thin React wrappers (Avatar, Chip, Modal, Menu, Drawer…)
├── docs/
│   ├── design-principles.md      ← the rules
│   ├── component-catalog.md      ← canonical markup per component
│   ├── patterns.md               ← page-level compositions (dashboard, master-detail…)
│   └── apply-to-existing-app.md  ← restyling playbook + checklist
└── examples/
    └── preview.html              ← open in a browser to see the system
```

## Use in a new app

1. Copy `tokens/` + `styles/` into `src/design-system/`.
2. Import in order: `tokens.css` → `base.css` → `layout.css` → `components.css`.
3. `npm i @fontsource-variable/geist @fontsource-variable/geist-mono @phosphor-icons/react` and import both fonts in your entry file.
4. Optionally copy `components/react/primitives.tsx`.
5. Build screens from `docs/component-catalog.md` + `docs/patterns.md`.

## Use on an already-built app

Tell Claude Code (in VS Code):

> Change this app's UI/look and feel based on `c:\Users\Sthiti Panda\Desktop\Projects\aicoe-design-system` — read its CLAUDE.md first.

Or follow `docs/apply-to-existing-app.md` manually. Tailwind/MUI apps map `tokens/tokens.json` into their theme config instead of the CSS files.

## Non-negotiables

Light theme only · brand `#456bb6` · fixed status semantics (blue agent / amber waiting / green done / red blocked) · Geist 13px base, floor 11px · radius 12/8/pill · borders over shadows · compact 32px controls.

**Version 1.0** · Source: ShiftAI Marketing Studio (`marketing-studio/src/index.css`)
