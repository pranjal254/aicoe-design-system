# AICOE Design System — Principles

The look and feel of every AICOE app. Extracted from ShiftAI Marketing Studio.

## The one-line summary

**Calm, dense, enterprise-light**: white pages, zinc neutrals, 1px borders instead of shadows, one muted steel-blue brand, small precise type (13px base), pill chips carrying all status color, and generous whitespace between bordered panels.

## Color

| Role | Token | Usage |
|---|---|---|
| Brand (steel blue `#456bb6`) | `--brand` | Primary buttons, active nav, links, agent/in-progress states, chart series 1 |
| Accent (emerald `#047857`) | `--accent` | Success, approved, done, positive deltas. Never for actions |
| Amber | `--amber-*` | Human gates, waiting, pending review, live/running pulses |
| Red `#b42318` | `--red` | Blocked, overdue, destructive. Text and small chips ONLY — never large fills or filled buttons |
| Zinc neutrals | `--ink/--text/--muted/--faint/--line` | Everything else |

Rules:
- **One theme (light).** No dark mode.
- Every status color has a `-soft` fill + `-ink` text pair; colored text always sits on its matching soft fill.
- Backgrounds are white (`#fff`) for cards, `--surface` (`#fafafa`) for recessed areas and hovers, `#f7f7f9` for inner boxes.
- Semantic mapping is fixed: **blue = agent/automated/in-progress, amber = human/waiting, green = done/approved, red = blocked/overdue**.

## Typography

- Font: **Geist Variable** (sans), **Geist Mono Variable** for code, hashes, costs, ids. From npm: `@fontsource-variable/geist`, `@fontsource-variable/geist-mono`.
- Base body: **13px / 1.5**. Antialiased.
- Scale: h1 21px/650/-0.4px · h2 15px/600 · h3 13px/600 · control 12.5px/600 · caption 11.5px · micro 11px.
- **Type floor: nothing below 11px, ever.**
- Numbers that matter (KPIs) are 18–22px, weight 650, letter-spacing −0.3px.
- Weight 650 for emphasis, 600 for headings/controls, 500–550 for nav and secondary emphasis.

## Shape & depth

- Radius: **12px panels/cards, 8px controls/inputs/nav, 7px small tiles/menu items, pill (99px) chips, circle avatars**.
- **Borders over shadows.** Cards get `1px solid var(--line)`, no shadow at rest.
- Shadows only on floating surfaces: menus/popovers (`--shadow-pop`), notification panels (`--shadow-panel`), toasts (`--shadow-toast`), card hover lift (`--shadow-card-hover`).
- Dividers inside a card use `--line-soft` (hairline).

## Spacing & density

- Content column: max 1200px, padding `22px 28px 56px`.
- Card padding 16–18px; grid gaps 12–14px.
- Controls are compact: buttons 32px tall (34px for tall/outline variants), inputs 32px, nav items 34px, icon buttons 30px.
- Tables are CSS grids with row bottom-borders, min row height 50–56px.

## Identity

- **Humans are circles** (`.avatar`, initials), **agents/entities are rounded squares** (`.monogram`).
- Overlapping avatar stacks for groups (−8px margin).

## Motion

- Subtle and fast: 0.13–0.18s ease. Hover = background/border-color change only.
- Live/running states pulse amber (`.pulse-dot`, breathing bars).
- Everything disabled under `prefers-reduced-motion`.

## Voice & content

- Sentence case everywhere (buttons, headings, labels). No ALL CAPS.
- Metadata lines are muted 11.5px: `19 Aug, 14:18`, `$4.24`, `Rishi Patel · owner`.
- Costs/ids/hashes in mono font.
- Empty states explain what will appear and why, in one calm sentence.

## Accessibility

- Single global focus ring: `2px solid var(--brand)`, offset 2px. Never removed.
- Escape closes modals/drawers; overlay click closes.
- `aria-label` on icon-only buttons; `role="dialog" aria-modal` on modals.
- Checkboxes/radios use `accent-color: var(--brand)`.

## Breakpoints

- `1080px`: sidebar 210px, grids collapse to 2-col.
- `760px`: sidebar becomes top bar with horizontal scroll nav; grids 1-col; page headers stack.
