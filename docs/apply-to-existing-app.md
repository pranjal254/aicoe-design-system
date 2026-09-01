# Applying the AICOE Design System to an Existing App

Playbook for restyling any app (new or already built) to this system.
Works for a human or for Claude Code ("change the UI based on the aicoe design system").

## Step 0 — Inventory
- Find the app's global stylesheet(s), theme config (Tailwind/MUI/etc.), fonts, and icon library.
- List its screens and map each to a pattern in `docs/patterns.md` (dashboard, list, master-detail, card grid, detail w/ tabs…).

## Step 1 — Bring in the foundation
Plain CSS apps (recommended, matches source):
1. Copy `tokens/tokens.css` and `styles/*.css` into the app (e.g. `src/design-system/`), or import from this folder if co-located.
2. Import in order: tokens → base → layout → components → app-specific css.
3. Install fonts + icons:
   ```
   npm i @fontsource-variable/geist @fontsource-variable/geist-mono @phosphor-icons/react
   ```
   and in the entry file:
   ```ts
   import "@fontsource-variable/geist";
   import "@fontsource-variable/geist-mono";
   ```

Tailwind apps: map `tokens/tokens.json` into `theme.extend` (colors, borderRadius: panel 12 / control 8, fontFamily, fontSize scale) and keep semantics identical. Component classes can coexist with utilities.

## Step 2 — Replace the theme
- Set body: white bg, `#3f4046` text, 13px Geist, line-height 1.5.
- Kill dark mode; this system is light-only.
- Swap all primary/action colors to `--brand` (#456bb6), success to `--accent`, warnings to amber pair, errors to `--red` (text/chips only).
- Replace box-shadows on resting cards with `1px solid var(--line)` + 12px radius.

## Step 3 — Restyle by primitive, in this order
1. **Buttons** → `.primary-button` / `.secondary-button` / `.outline-button` / `.text-link` / `.icon-button`. One primary per region. Heights 32–34px.
2. **Status** → `.chip` tones with fixed semantics (blue agent, amber human/waiting, green done, red blocked).
3. **Cards/panels** → `.card`, `.inner-box`, `.advisory`, hairline `--line-soft` dividers.
4. **Lists/tables** → `.list-panel` + grid `.list-row`s, or `.data-table-head/-row`. No `<table>` chrome, no zebra stripes.
5. **Forms** → `.field` (32px inputs, `#d9d9de` borders), `.field.gap` for required-missing.
6. **Identity** → circles for humans, rounded squares for agents/entities.
7. **Overlays** → `.overlay/.modal/.drawer/.toast/.menu`. Escape + backdrop close.
8. **Shell** (if the app has chrome) → sidebar + topbar from `styles/layout.css`.

## Step 4 — Typography & density pass
- Base 13px; page titles 21px/650; nothing under 11px.
- Compact control heights; card padding 16–18px; grid gaps 12–14px; content max 1200px.
- Costs, hashes, ids, code → Geist Mono.

## Step 5 — Verify
- [ ] No resting drop shadows on cards; borders only
- [ ] One light theme; white page, `#fafafa` recessed surfaces
- [ ] All interactive hovers = background/border change (0.13–0.18s)
- [ ] Focus-visible ring intact everywhere
- [ ] Status colors match semantics table
- [ ] Sentence case labels; muted 11.5px metadata
- [ ] Responsive at 1080px and 760px
- [ ] `prefers-reduced-motion` respected

## Non-negotiables (do not "improve")
- Light theme only · 13px base · type floor 11px
- Brand #456bb6 (never generic bootstrap blue), emerald success, amber waiting
- Red never fills large areas or buttons
- Radius 12/8/pill · borders over shadows
