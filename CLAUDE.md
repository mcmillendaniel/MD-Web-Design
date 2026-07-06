# CLAUDE.md — MD Web Design (company website)

Context for Claude Code sessions in this repo. This repo is **MD Web Design's own marketing website** — the company's first web presence. It is *not* a client site and *not* a clone of the Luxe Aesthetic med-spa template. It reuses the same **stack, build structure, and tooling** as the base template so everything stays congruent; the content and design are its own.

---

## 1. What this site is

- **Owner:** MD Web Design LLC (Raleigh, NC). Solo operator: McMillen Daniel.
- **Purpose:** Establish a professional web presence and convert med-spa / aesthetic-clinic owners in the Raleigh-Durham area into consult bookings.
- **Current business state (important for content):** No paying clients yet. Do **not** invent testimonials, client logos, or case studies. The only real proof asset is the Luxe Aesthetic demonstration build (see §5).
- **Primary CTA:** Book a consult / start a conversation → routes to **mdwebdesignllc@gmail.com** (business email; personal mcmillendaniel@gmail.com is not used on this site).

---

## 2. Positioning & messaging (drives all copy)

The company sells a **service**, not premium code. The code is the deliverable, not the pitch. Lead with relationship and service quality.

**Core differentiators to communicate:**
- A custom-coded site the practice actually owns — real software, not a rented theme.
- A **local operator** (Raleigh-Durham) who builds *and* manages the site long-term.
- **No platform dependency.**
- Analogy to lean on: a **skilled local contractor** you keep on retainer.

**Language rules (hard):**
- **Never name a competitor or website-builder/template company anywhere on the site.** This applies site-wide going forward unless McMillen supplies specific copy that names one.
- Never say "nothing templated." Correct framing: "no off-the-shelf themes," "fully custom-coded," "built specifically for your practice."
- Don't lead with a "you've outgrown your current setup" angle — it's weak for static single-location sites. Lead with relationship + service quality.
- Copy style: periods, commas, exclamation points, question marks only. **No dashes, no ellipses** in customer-facing copy.

**Copy production process:**
1. Draft in the natural-language flow of McMillen's outreach copy (match that voice).
2. Then run a polishing pass as if the draft went through an experienced PR / marketing department.
3. Copy is not final until it clears TA (see §7).

> This file carries copy *guidance* only. No finished copy is written yet.

> Note: the site's messaging is downstream of the value-prop reframe. Treat all copy as draft pending TA review before launch.

---

## 3. Brand system (from the email signature design system v1.0)

**Colors**
| Token | Hex | Use |
|---|---|---|
| Primary Navy | `#1B2A4A` | Wordmark, headings/subheadings |
| Secondary Gray | `#4A5568` | Optional heading/subheading accent, dividers |
| Accent Blue | `#5B8DB8` | Rules, accents, hover/active states |
| Background | `#F8F9FA` | Page background (cool off-white) |

**Text color rule:**
- **Logo / wordmark and any logo imagery:** use the signature's exact fonts and colors — do not deviate.
- **Headings and subheadings:** may use the palette colors above (navy primary).
- **All other body text:** black (`#000000`), or whatever reads best against the `#F8F9FA` background. Body is not tinted navy/gray.

**Type**
- **Wordmark + display headings:** Playfair Display, Medium (500).
- **Everything else:** Montserrat — Regular (400) and SemiBold (600).
- Keep weights limited to the three above.

**Style direction:** flat vector, modern luxury, medical/healthcare-inspired, boutique-agency feel, Apple-inspired restraint. High-contrast typography, clean geometric spacing, generous whitespace. **No gradients, no drop shadows, minimal-to-no rounded containers, icons used sparingly if at all.** Let typography and spacing carry the design.

**Wordmark composition** (mirrors the signature): "MD Web Design" in Playfair navy, a 4px accent-blue rule roughly the width of the wordmark beneath it, tagline "Web Design for Aesthetic Clinics" in Montserrat gray centered under the rule.

---

## 4. Tech stack & conventions

Match the Luxe Aesthetic base template so this site dogfoods the production stack and stays congruent with client work:

- **React** 18.3.1
- **Vite** 6.3.5
- **Tailwind CSS** 4.1.12 (via `@tailwindcss/vite`)
- **shadcn/ui** + Radix UI for primitives
- **React Router** 7.x (library mode, `createBrowserRouter`)
- **Prerender:** reuse the custom Vite SSR prerender pipeline (`scripts/prerender.js`) from the base template. This site must be crawlable — do not ship CSR-only. `view-source` must show real title, meta description, canonical, and body content per route.

**Hosting / deployment:**
- Deploy on **Vercel**, same process as the client pages.
- Test via **Vercel preview deployments** (exercises the prerender pipeline and matches real hosting).
- Real domain is TBD (acquired later). Keep the base path and all canonical/OG URLs **config- or env-driven** so pointing the site at the real domain later is a config change, not a find-and-replace.

**Dependencies:** this site is built fresh in code, not exported from Figma, so there is no Figma-Make dependency bloat to strip. Just keep deps lean: Tailwind v4 + shadcn, nothing speculative.

**Images:** Cloudinary is the intended method for images uploaded later. None are available yet — build layouts that accept images but don't block on them.

**Commit discipline:** human-sounding commit messages (e.g. "Add hero section," "Fix nav spacing on mobile"). No AI-branded commits.

**This file:** lives at repo root as `CLAUDE.md`. This repo is never cloned into client repos, so there's no `.claude/` clone-leak concern (contrast with the Luxe Aesthetic repo, where `.claude/` *is* gitignored).

---

## 5. The proof asset — honest framing

The Luxe Aesthetic build is the demonstration of quality:
- **Link to use:** the production **Vercel deployment (`*.vercel.app`)**. Do **not** use the Figma URL.
- Repo: `github.com/mcmillendaniel/Luxe_Aesthetic` (private).

**Frame it honestly, but don't undersell.** Be factual about what it is — a demonstration build that shows the kind of site MD Web Design produces, not a delivered client project — while conveying genuine excitement about what it demonstrates and what it can do. Acceptable labels: "demonstration build," "sample build," "a build we created to show what's possible." Never imply it was a real client engagement.

**Imagery policy:** AI/stock imagery is fine for lifestyle/header/service visuals on *this* site. (The real-client rule about AI before/after results imagery does not apply here — this site has no patient results.)

---

## 6. Suggested scaffold (skeleton to build)

Lean by design. Can ship as a single scrolling page with anchored sections, or a small route set. Recommended sections/routes:

```
/                Home
  - Hero: wordmark + one-line value prop + primary CTA (Book a consult)
  - The problem/promise: a custom-built, managed site vs a DIY build (relationship-led)
  - What you get: the build + the ongoing Site Care Plan relationship (contractor framing)
  - Process: consult -> build -> launch -> ongoing management (keep to 3-4 steps)
  - Proof: the Luxe Aesthetic demonstration build, honestly framed (see §5)
  - CTA band: book a consult
/about           McMillen + local-operator story, the contractor analogy
/contact         Consult request (CTA -> mdwebdesignllc@gmail.com or a form)
```

Collapse `/about` and `/contact` into the home page if a one-pager reads better; drop React Router if so.

**Do NOT scaffold:** a blog, a login, a client portal, or anything speculative. Scope tight.

---

## 7. Pre-launch gate

- **Copy must clear TA (The Adversarial) before the site is truly shared.** Draft and polish freely; do not treat any copy as final until TA signs off.

---

## 8. SEO / metadata baseline

- Per-route unique `<title>`, meta description, and canonical (enforced by the prerender pipeline).
- Canonical / OG URLs tie to the env-driven URL config (§4), so they resolve correctly on Vercel previews now and the real domain later.
- Open Graph tags; JSON-LD **Organization / ProfessionalService** schema (this is a web-design service — do *not* use MedicalBusiness schema).
- No self-serving review/rating markup (produces no star rich results and there are no reviews yet anyway).
- Performance target: LCP ≤ 2.5s (the 2.0s figure circulating online is misinformation — do not implement).
