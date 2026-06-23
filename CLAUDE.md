# CLAUDE.md — Seton Educational Services (setoned.org)

**Read this before touching anything in this folder.**

---

## What this is

The public-facing website for Dr. Vince Cascone's consulting practice — setoned.org. Hosted on GitHub Pages (repo: `Cascone96/seton-educational-services`). Static HTML/CSS only — no server, no backend. The backend (auth, portal, pipeline) lives in the companion project `seton-site/` and is deployed to PythonAnywhere at `cascone96.pythonanywhere.com`.

---

## The Seton Estate — the hub for all agent context

**`estate/index.html`** is the owner-facing index for everything Bev has built and knows about this project. It has three doors:

| Door | File | What it holds |
|---|---|---|
| **Canon** | `estate/canon.html` | Design system, brand rules, voice guide, CSS token reference |
| **Protocols** | `estate/protocols.html` | Agent protocols, build conventions, anti-drift rules |
| **Financials** | `estate/financials.html` | Financial data, invoices, engagement summaries |

**Before building anything new, check the estate.** It is the single source of truth for what exists, what the rules are, and what Vince has already decided.

---

## Key data and resources — where they live

| Resource | Location |
|---|---|
| **Research briefs (Track C codex)** | `seton-site/library/codex/` — 11 evidence-based briefs on crisis, hiring, burnout, AI, enrollment, Catholic identity, etc. Read these before writing any resource guide. |
| **Program track documents** | `seton-site/library/omaha/track-a/` through `track-c/` — the Omaha Year 1 program (A1–A8, B1–B5, C1–C8) |
| **Crisis doc** | `OneDrive/.../Program Materials/Tier 1 - Foundation/Crisis Response Guide.html` |
| **A6 Decision & Crisis Quick Reference** | `seton-site/library/omaha/track-a/A6.pdf` |
| **Service offerings** | `seton-educational-services/service-offerings.md` |
| **Tiered packages** | `seton-educational-services/tiered-packages.md` |
| **Diocesan contacts** | `seton-educational-services/diocesan-contacts.md` |
| **Brand assets** | `seton-site/library/brand/` — ses-crest.svg, logos |
| **Canon CSS (design tokens)** | `seton-site/canon.css` — all colors, fonts, spacing. Never hardcode. |
| **Full agent contract** | `seton-site/AGENTS.md` — the complete build contract; read this too |

---

## Design system (non-negotiable)

- **Fonts:** Cinzel (headings/display), Cormorant Garamond (body/serif), Inter (labels/nav/UI)
- **Colors:** Navy `#111c33`, gold `#c9a84c`, linen `#e4d6ba`, parchment `#f9f7f2`, maroon `#7a1f2e`
- **Look:** flat linen ground, parchment cards, `✠` ornament, dignified — never pastel, never flashy
- **Never hardcode a hex or font** — use CSS variables from `canon.css`

---

## Voice (for any copy)

Earnest, dignified, vocational. Catholic-school-leadership, not corporate SaaS. "You were called to lead." Servant leadership. Never salesy. Every reply ends at a human next step — never a verdict, never a dead end.

---

## Quick facts

- **Client portal:** `cascone96.pythonanywhere.com/login.html`
- **Public site:** `setoned.org` (GitHub Pages, this repo)
- **Owner dashboard:** `seton-site/dashboard.html` (run `python server.py` locally)
- **Vince's email:** vcascone@setoned.org
- **PythonAnywhere API token:** stored in Bev's memory (ask Bev)
- **GitHub repo:** `Cascone96/seton-educational-services`

---

## Push to live

```bash
cd C:/Users/vcasc/projects/seton-educational-services
git add <files>
git commit -m "..."
git push origin main
```

GitHub Pages deploys automatically — takes ~2 minutes. Hard-refresh (`Ctrl+Shift+R`) to see changes.
