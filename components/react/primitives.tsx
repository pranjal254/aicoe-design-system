/* AICOE Design System — React reference primitives (v1.0)
   Framework-agnostic CSS does the styling; these are thin wrappers.
   Requires styles/: tokens.css, base.css, components.css imported globally.
   Copy into your app (e.g. src/design-system/primitives.tsx) and adapt. */

import { useEffect, useRef, useState, type ReactNode } from "react";

/* ---------- Identity ---------- */

/** Human identity — always a circle with initials. */
export function Avatar({ initials, size }: { initials: string; size?: "sm" }) {
  return <span className={`avatar${size === "sm" ? " sm" : ""}`}>{initials}</span>;
}

/** Agent/entity identity — always a rounded square. */
export function Monogram({ children, size = "md" }: { children: ReactNode; size?: "sm" | "md" | "lg" }) {
  return <span className={`monogram ${size}`}>{children}</span>;
}

/* ---------- Status ---------- */

export type ChipTone = "neutral" | "green" | "amber" | "blue" | "red";

/** Status chip. Semantics: blue=agent/in-progress, amber=human/waiting, green=done, red=blocked. */
export function Chip({ children, tone = "neutral" }: { children: ReactNode; tone?: ChipTone }) {
  return <span className={`chip ${tone === "neutral" ? "" : tone}`.trim()}>{children}</span>;
}

export function StatusPill({ children, state }: { children: ReactNode; state?: "done" | "active" | "waiting" }) {
  return <span className={`status-pill${state ? ` ${state}` : ""}`}>{children}</span>;
}

/** Segmented journey progress bar (default 9 steps). */
export function ProgressSteps({ active, total = 9 }: { active: number; total?: number }) {
  return (
    <div className="progress-steps" style={{ gridTemplateColumns: `repeat(${total}, minmax(12px, 1fr))` }}
      aria-label={`${active} of ${total} steps complete`}>
      {Array.from({ length: total }, (_, i) => (
        <span key={i} className={i < active ? "done" : i === active ? "current" : ""} />
      ))}
    </div>
  );
}

/* ---------- Overlays ---------- */

function useEscape(onClose: () => void) {
  useEffect(() => {
    function onKey(e: KeyboardEvent) { if (e.key === "Escape") onClose(); }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);
}

/** Centered modal: 560px default, 720px wide, 920px xl. Escape + backdrop close. */
export function Modal({ title, onClose, children, wide, xl }: {
  title: string; onClose: () => void; children: ReactNode; wide?: boolean; xl?: boolean;
}) {
  useEscape(onClose);
  return (
    <div className="overlay" role="dialog" aria-modal="true" aria-label={title}
      onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}>
      <div className={`modal${xl ? " xl" : wide ? " wide" : ""}`}>
        <div className="modal-head">
          <h2>{title}</h2>
          <button className="icon-button" aria-label="Close" onClick={onClose}>✕</button>
        </div>
        <div className="modal-body">{children}</div>
      </div>
    </div>
  );
}

/** Right-side drawer for traces, detail inspectors. */
export function Drawer({ label, onClose, children }: { label: string; onClose: () => void; children: ReactNode }) {
  useEscape(onClose);
  return (
    <div className="overlay drawer-overlay" onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}>
      <aside className="drawer" role="dialog" aria-modal="true" aria-label={label}>{children}</aside>
    </div>
  );
}

/** Dark toast, bottom-center. Render conditionally from app state. */
export function Toast({ children }: { children: ReactNode }) {
  return <div className="toast" role="status">{children}</div>;
}

/* ---------- Menus ---------- */

/** details/summary dropdown that closes on outside click and item click. */
export function Menu({ label, children }: { label: ReactNode; children: ReactNode }) {
  const ref = useRef<HTMLDetailsElement>(null);
  useEffect(() => {
    function onDown(e: MouseEvent) {
      const el = ref.current;
      if (el?.open && !el.contains(e.target as Node)) el.open = false;
    }
    document.addEventListener("mousedown", onDown);
    return () => document.removeEventListener("mousedown", onDown);
  }, []);
  return (
    <details className="menu" ref={ref}>
      <summary aria-label="More options">{label}</summary>
      <div className="menu-list" onClick={(e) => ((e.currentTarget.parentElement as HTMLDetailsElement).open = false)}>
        {children}
      </div>
    </details>
  );
}

/* ---------- Content ---------- */

export function EmptyPanel({ title, children, embedded }: { title?: string; children: ReactNode; embedded?: boolean }) {
  return (
    <div className={`empty-panel${embedded ? " embedded" : ""}`}>
      {title && <h3>{title}</h3>}
      <p>{children}</p>
    </div>
  );
}

export function SectionHeading({ title, sub, action }: { title: string; sub?: string; action?: ReactNode }) {
  return (
    <div className="section-heading">
      <div><h2>{title}</h2>{sub && <p>{sub}</p>}</div>
      {action}
    </div>
  );
}

/* ---------- Hooks ---------- */

/** Collapsible-sidebar shell state helper. */
export function useShellCollapsed(initial = false) {
  const [collapsed, setCollapsed] = useState(initial);
  return { collapsed, toggle: () => setCollapsed((c) => !c), shellClass: `app-shell${collapsed ? " is-collapsed" : ""}` };
}
