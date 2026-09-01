# AICOE Design System — Screen Patterns

Reusable page-level compositions, as seen in Marketing Studio.

## 1. App shell
Fixed left sidebar (224px, collapsible to 68px) + sticky blurred topbar (54px) + centered content (max 1200px).
```html
<div class="app-shell">
  <aside class="sidebar">
    <div class="sidebar-head">brand + collapse-toggle</div>
    <p class="nav-label">WORKSPACE</p>
    <nav>nav buttons (icon + text + optional <em>count</em>)</nav>
    <div class="sidebar-bottom">.sidebar-card (live status) + .profile</div>
  </aside>
  <div class="main-panel">
    <header class="topbar">.ask-wrap search · .top-actions · .role-chip</header>
    <main class="screen-content">…page…</main>
  </div>
</div>
```

## 2. Dashboard home
1. `page-header` — greeting h1 + lede + primary/secondary actions right.
2. One-line status strip (activity summary + `text-link` "Review activity →").
3. `kpi-band` — 4 joined KPI tiles.
4. `section-heading` ("Needs you" + "View all →") followed by a `list-panel` of decision rows: type chip → title/subtitle → status-dot + context → `chip amber` Overdue → timestamp → arrow.
5. "In flight" section with campaign rows.

## 3. Entity list (campaigns)
`list-panel` of `list-row clickable`, columns: color dot + monogram · name/vertical/state-chip · journey (`progress-steps` + "Step n of 9") · waiting-on person · AI cost · last event + timestamp · owner avatar · arrow.

## 4. Card grid (agent library)
`page-header` + settings button right; 3-col grid of `card hoverable`: monogram + type chip top; h2 name; muted description; `inner-box`-separated model line; 3-col stats; `inner-box` autonomy boundary; `text-link` "View n runs →".

## 5. Master-detail (approvals)
2-col grid `280px 1fr`: left `list-panel` of `queue-item` (active = brand-soft + inset brand bar); right detail panel with head, context sections separated by `--line` borders, amber `advisory` strips, and a `decision-footer` (context left, secondary + primary actions right).

## 6. Detail page with journey (campaign)
`breadcrumb` · header (monogram lg + h1 + state chip, actions right) · summary strip (joined 4-col card) · `tab-bar` · phase groups: label column + 3-col grid of journey step cards (active = amber tint `#fffdf7` + `#e6c790` border), each with gate-line footer (avatar/gate icon + gate text + trace link).

## 7. Locked package (library)
`success-hero` (lock orb + h1 + meta chips + actions: secondary "View audit trail", primary "Copy manifest JSON") · 2-col `1fr 300px`: manifest `data-table` left; right rail cards — health score (30px green number + checklist), vertical approval chain, handoff inner-box.

## 8. Insights
`page-header` + `filter-row` · `kpi-cards` (value + green delta) · `chart-grid` (line chart card + donut/legend card) · bar rows + promotion list.

## 9. Workflow canvas (React Flow)
Pill picker (`pill-pick` with per-campaign `--tone`) above a 2-col layout: bordered canvas (nodes = 180px white cards, amber = running with pulse/glow, green bar = done) + 332px side panel with telemetry grid.

## Status semantics (apply everywhere)
- **blue** chips/fills — agent working, in production, planning
- **amber** — waiting on a human, overdue, live-running pulses
- **green** — approved, locked, done, positive deltas
- **red** — blocked, destructive text buttons, unread counters
