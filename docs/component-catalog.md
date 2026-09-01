# AICOE Design System — Component Catalog

All classes live in `styles/components.css` (+ shell classes in `styles/layout.css`).
Markup snippets below are the canonical usage.

## Buttons

```html
<button class="primary-button">New campaign request</button>
<button class="secondary-button">View agent workflow</button>
<button class="outline-button">Export</button>
<button class="text-link">View all →</button>
<button class="text-button">Reject request</button>   <!-- destructive: red text only -->
<button class="icon-button" aria-label="Close">✕</button>
```
- One primary button per view region. Secondary/outline for everything else.
- Icons inside buttons: 14–16px, gap 6–7px.

## Chips (status)

```html
<span class="chip">Planned</span>
<span class="chip blue">In production</span>
<span class="chip amber">Awaiting sign-off</span>
<span class="chip green">Approved & locked</span>
<span class="chip red">Blocked</span>
<span class="source-chip">OneDrive</span>
<span class="hash-label">8a89…0c80</span>
```
Tone mapping: blue = agent/in-progress · amber = human/waiting · green = done · red = blocked/overdue.

## Identity

```html
<span class="avatar">RP</span>                <!-- human: circle -->
<span class="avatar sm">SR</span>
<span class="monogram sm">CI</span>           <!-- agent/entity: rounded square -->
<span class="monogram lg">CB</span>
<div class="avatar-stack"><span class="avatar">RP</span><span class="avatar">SR</span><span>+3 reviewers</span></div>
```

## Cards & panels

```html
<article class="card">…</article>
<article class="card hoverable">…</article>
<div class="inner-box"><small>Autonomy boundary</small><p>May validate, classify…</p></div>
<div class="advisory"><span class="advisory-icon">!</span><div><strong>Turnaround</strong><p>…</p></div></div>
<section class="success-hero">…</section>    <!-- approved/locked hero -->
<div class="card-footer">…left…  …right…</div>
```

## KPI displays

```html
<!-- Joined band (home page) -->
<section class="kpi-band">
  <article><p>Agent-executed</p><strong>79%</strong><small>34 of 43 activities</small></article>
  <article><p>First-pass approval</p><strong>100%</strong><small class="positive">2 of 2 runs</small></article>
  …
</section>
<!-- Separated cards (insights) -->
<section class="kpi-cards"><article class="kpi-tile">…</article>…</section>
```

## Progress steps (journey)

```html
<div class="progress-steps" aria-label="5 of 9 steps complete">
  <span class="done"></span>…<span class="current"></span><span></span>…
</div>
```

## Tabs

```html
<div class="tab-bar"><button class="active">Journey</button><button>Brief</button><button>Content</button></div>
```

## Lists & tables

```html
<!-- Bordered list container with grid rows -->
<div class="list-panel">
  <button class="list-row clickable" style="grid-template-columns:36px 1fr 132px 20px">
    <span class="monogram">AI</span>
    <div><h3>AI Readiness for Manufacturing</h3><p>…</p></div>
    <div>…stat…</div>
    <span class="row-arrow">›</span>
  </button>
</div>

<!-- Grid data table with soft header -->
<div class="data-table-head" style="grid-template-columns:1.5fr .65fr .55fr .8fr">Asset · Type · Version · State</div>
<div class="data-table-row"   style="grid-template-columns:1.5fr .65fr .55fr .8fr">…</div>

<!-- Master-detail queue -->
<button class="queue-item active"><span><strong>Answer brief gap questions</strong><small>Copilot Cloud Essentials · 17 Aug</small></span>›</button>
```
Set `grid-template-columns` per table; keep 36px leading identity column and 20px trailing arrow.

## Forms

```html
<label class="field">
  <small>Which target segment is this campaign for?</small>
  <select>…</select>
</label>
<label class="field gap">…</label>   <!-- missing/required: amber -->
<div class="form-grid">…two fields…</div>
```

## Status indicators

```html
<span class="status-dot green"></span>
<span class="pulse-dot"></span>                          <!-- live/running -->
<span class="status-pill active">Running</span>
<span class="status-pill done">Done</span>
```

## Overlays

```html
<div class="overlay" role="dialog" aria-modal="true">
  <div class="modal wide"><div class="modal-head"><h2>Title</h2><button class="icon-button">✕</button></div><div class="modal-body">…</div></div>
</div>
<div class="overlay drawer-overlay"><aside class="drawer">…</aside></div>   <!-- right drawer -->
<div class="toast" role="status">Saved</div>
```
Escape + overlay-click close. Modal widths: 560 / 720 (`.wide`) / 920 (`.xl`).

## Menus & popovers

```html
<details class="menu"><summary>⋯</summary><div class="menu-list"><button>Rename</button><div class="menu-sep"></div><button>Delete</button></div></details>
<div class="popover-panel">…</div>
<div class="popover-panel anchored-right">…notifications…</div>
```

## Empty states

```html
<div class="empty-panel"><h3>No approvals waiting</h3><p>Items appear here when an agent reaches a human gate.</p></div>
```

## Charts

Use `--chart-1..4` in order; `.chart-card`, `.legend-list`, `.bar-rows`, `.big-stat` for CSS-only charts. Icon library: **@phosphor-icons/react**, regular weight.
