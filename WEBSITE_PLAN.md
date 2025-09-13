# Find Your Ride — Website Plan

This plan describes tasks required to build an attractive, animated marketing website for the Find Your Ride platform that drives app downloads. The website uses HTML, CSS animations, and JavaScript to create engaging user experiences that convince visitors to download the mobile app from app stores. It includes dark/light theme, multi-language support (English default, Arabic, French), accessibility & RTL for Arabic, and smooth animations throughout.

> Primary Goal: Convert website visitors to app downloads with compelling design and animations
> Source material: `drivers_app/docs/TRANSPORTATION_APP_SPECIFICATIONS.md` — the site content should be drawn from its sections (Project Overview, User Types, Routes, Booking, Driver & Organization features, etc.).

---

## How to use this plan
- Each task is a checkbox; check items as you complete them.
- Keep commits small and reference checklist items in commit messages (e.g., "Add homepage skeleton — WEBSITE_PLAN #1").
- Do not write app store privacy policy text until I approve this plan.

---

## High-level milestones
- [x] 1. Project scaffolding (static site) — basic folder structure and default index.html
- [x] 2. Design & theme system — light and dark themes with a toggle and saved preference
- [x] 3. Multilingual content (EN, FR, AR) — runtime language switcher and translation files
- [ ] 4. App download conversion focus — compelling hero sections with clear CTAs
- [ ] 5. Smooth CSS animations — hero animations, button effects, scroll animations
- [ ] 6. Mobile app store integration — download links, device detection, QR codes
- [ ] 7. Performance optimization — fast loading animations and optimized assets
- [ ] 8. Accessibility & RTL support for Arabic with animated elements
- [ ] 9. SEO, metadata, and app-store readiness notes
- [ ] 10. Privacy policy (draft task & final file) following Apple & Google recommendations
- [ ] 11. QA/testing checklist (visual, accessibility, i18n, performance, animations)

---

## Project structure (suggested)
- `website/`
  - `index.html` (Home)
  - `about.html`
    - `routes.html` (Routes listing / Marketplace)  <!-- REMOVED: moved to app/admin portals -->
    - `passengers.html` (Passenger profiles & dependents)  <!-- REMOVED: moved to app -->
    - `profile.html` (Account/settings)  <!-- REMOVED: managed inside the app -->
  - `legal/privacy-policy.html` (Privacy policy — task)
  - `assets/` (images, icons)
  - `i18n/` (en.json, fr.json, ar.json)
  - `css/` (theme, layout)
  - `js/` (i18n loader, theme toggler, simple routing/helpers)

---

## Assets & Logo

- [ ] Copy icon files from `drivers_app/assets/icons/` into `website/assets/icons/`:
  - `app_icon.svg` (primary logo)
  - `app_icon_small.svg` (small logo)
  - `app_icon_mono.svg` (monochrome for favicons or headers)
  - `app_icon_small.png` (fallback raster)
- [ ] Use `app_icon.svg` in the header and `app_icon_small.svg` as a favicon (generate sizes as needed)

Note: source icons are available at `drivers_app/assets/icons/` in the repository. Copying keeps a single canonical source for the website assets.

> Task: implement this skeleton in later steps after you approve the plan.

---

## Pages & Content Tasks
The content for these pages should be taken from `TRANSPORTATION_APP_SPECIFICATIONS.md`. Each page should have compelling animations and clear calls-to-action for app downloads.

- Home / Hero Landing
  - [x] Create `index.html` with animated hero section and prominent app download CTAs
  - [ ] Add smooth fade-in animations for hero text and buttons
  - [ ] Include floating/parallax effects for visual appeal
  - [ ] Add animated feature highlights showcasing app benefits
  - [ ] Implement scroll-triggered animations for engagement
  - [ ] Include app store badges with hover animations

- Download Page
  - [x] Create `download.html` with device detection and direct store links
  - [ ] Add QR code generator for easy mobile access
  - [ ] Include animated phone mockups showing the app
  - [ ] Add download progress indicators and success animations
  - [ ] Implement smart device detection for iOS/Android

- About / How it works
  - [x] Create `about.html` describing Find Your Ride, dual driver model, and benefits
  - [ ] Add animated infographics explaining the transportation process
  - [ ] Include testimonial section with smooth transitions
  - [ ] Add interactive elements showcasing app features

- Animation Enhancement Tasks
  - [ ] Implement CSS keyframe animations for buttons and cards
  - [ ] Add smooth page transitions and loading animations
  - [ ] Create hover effects for interactive elements
  - [ ] Add scroll-based reveal animations using Intersection Observer
  - [ ] Implement mobile-friendly touch animations



- Passengers / Profile / Dependents
  - [ ] REMOVED from public site: `passengers.html` and `profile.html` — passenger profiles and account settings are managed inside the mobile app. Keep any descriptive content in `about.html` or dedicated documentation pages, not as functional site pages.

- Legal pages
  - [ ] `legal/privacy-policy.html` (see Privacy Policy tasks below)
  - [ ] `legal/terms-of-service.html` (stub — optional)

---

## Theming & Design tasks
- [ ] Create a CSS variables-based theme system for light and dark themes
- [ ] Add a visible theme toggle in the header and store preference in `localStorage`
- [ ] Ensure color contrast meets WCAG AA (accessible colors for both themes)
- [ ] Create a small design tokens doc (`css/tokens.css` or comments) for reuse

Design acceptance criteria:
- Theme toggles without page reload
- Theme persists across pages and browser sessions
- Colors meet contrast thresholds

---

## Internationalization (i18n) & RTL tasks
- [ ] Create `i18n/en.json`, `i18n/fr.json`, `i18n/ar.json` with keys for all UI text
- [ ] Implement a lightweight JS i18n loader that swaps content at runtime
- [ ] Create a visible language selector (EN / FR / العربية) in the header
- [ ] Ensure Arabic layout flips to RTL (set `dir="rtl"` on `<html>` or root) when Arabic is active
- [ ] Translate at minimum: navigation, headings, page sections, CTAs, privacy policy (draft)

i18n acceptance criteria:
- Language can be changed without refreshing the page (where possible)
- Arabic UI uses RTL and mirrors layout logically (padding/margins adjusted)
- French uses correct locale formatting for numbers/dates where shown

---

## Accessibility & Performance
- [ ] Run pages through Lighthouse and address high-impact accessibility issues
- [ ] Ensure keyboard navigation for all interactive elements
- [ ] Provide `alt` text for images and ARIA attributes where appropriate
- [ ] Ensure color contrast and font sizes meet WCAG AA
- [ ] Keep page weight small (minimize images, no heavy frameworks)

---

## SEO & Meta
- [ ] Add descriptive `title`, `meta description`, and `og:` tags per page
- [ ] Add structured data (JSON-LD) for organization and WebSite where relevant
- [ ] Add `lang` attributes to HTML (`en`, `fr`, `ar`) and dynamic `dir` for Arabic

---

## SEO Optimization (detailed checklist)
Search engine optimization is critical — the site will be optimized for discoverability, localization, and performance.

- [ ] Keyword research: identify 5-10 primary keywords and long-tail phrases per major page (Home, Routes, Driver, Organization, Booking). Use the spec document language ("school transportation", "driver routes", "parent notifications") as seed keywords.
- [ ] Per-page on-page SEO:
  - [ ] Unique `<title>` (50-60 chars) with primary keyword near the front
  - [ ] Optimized `meta description` (120-160 chars) containing primary/secondary keywords and a CTA
  - [ ] Use semantic headings (`h1`, `h2`...) with keywords naturally included
  - [ ] Include descriptive `alt` attributes for images with keywords where appropriate
- [ ] Structured data (JSON-LD):
  - [ ] Add `WebSite` and `Organization` schema on the homepage
  - [ ] Add `BreadcrumbList` schema on internal pages (routes, route-detail)
  - [ ] Consider `Product`/`Service` schema for paid/commercial offerings or subscription models
- [ ] Localization & hreflang:
  - [ ] Serve `hreflang` annotations for English (`en`), French (`fr`), and Arabic (`ar`)
  - [ ] Ensure localized `meta` tags and translated content per locale
- [ ] Technical SEO:
  - [ ] Create `/sitemap.xml` and keep updated as pages change (static list is fine for this site)
  - [ ] Add `/robots.txt` (allow all except staging paths; reference the sitemap)
  - [ ] Ensure friendly URLs and readable filenames (e.g., `/routes/elementary-school-mornings.html`)
  - [ ] Add canonical tags to avoid duplicate content issues
- [ ] Performance & Core Web Vitals:
  - [ ] Defer non-critical JS, inline critical CSS, and minimize render-blocking resources
  - [ ] Optimize images (use SVGs for logos; provide WebP/PNG fallbacks)
  - [ ] Use preconnect/prefetch for fonts/CDNs if used
  - [ ] Aim for First Contentful Paint (FCP) < 1s on fast connections and good LCP
- [ ] Mobile-first and responsive markup — ensure usability on small screens
- [ ] Accessibility-driven SEO — good accessibility often improves crawlability and ranking
- [ ] Link building & metadata for social sharing:
  - [ ] Add `og:title`, `og:description`, `og:image`, Twitter card tags
  - [ ] Ensure share images have correct aspect ratios and sizes

SEO acceptance criteria:
- [ ] Each main page has a unique title and meta description
- [ ] Sitemap and robots are present and correctly reference pages
- [ ] Hreflang tags are present and point to translated pages
- [ ] Lighthouse performance score >= 80 (mobile) after basic optimization


---

## App Store & Web Requirements (notes)
- [ ] Prepare a short summary and privacy policy page for app stores
- [ ] Prepare icons and screenshots (in `assets/`) for store listing (recommended sizes will be added later)
- [ ] Note: Apple and Google require a privacy policy URL for apps; the website will host this at `legal/privacy-policy.html`.

---

## Privacy Policy (task checklist — do NOT draft the policy until plan is approved)
Create a privacy policy page that meets Apple & Google guidance. This is an itemized task list to produce the policy content.

- [ ] Inventory data flows used by the website (for the static site: analytics, cookies, contact form email, optional location demo) — produce a short data map
- [ ] Include sections required by Apple/Google stores:
  - [ ] Data collected (identifiers, analytics, location, user content)
  - [ ] Purpose of collection (service provision, analytics, security)
  - [ ] Third-party services (analytics, CDN, fonts) with links to their privacy docs
  - [ ] Data sharing rules and legal bases (if applicable)
  - [ ] Data retention policies
  - [ ] Security measures
  - [ ] Parental consent & children policy (if you allow dependents and minors)
  - [ ] User rights (access, deletion, contact)
  - [ ] Contact information for data/privacy requests
  - [ ] Location data explicit handling (if the app will use GPS in future)
  - [ ] In-app purchase handling note (if applicable)
- [ ] Include clear effective date and a changelog for policy updates
- [ ] Provide a short plain-language summary at the top and a more detailed section below

Privacy policy acceptance criteria:
- Fulfills Apple & Google store minimal expectations for a privacy URL
- Clearly lists all used analytics/third-party tools and links to their policies
- Contains a contact method for data requests

---

## Implementation & development tasks (static-only)
- [ ] Implement routing strategy (static pages with links; optionally simple client-side routing)
- [ ] Implement small helper scripts:
  - [ ] `js/i18n.js` — loads translations and swaps text
  - [ ] `js/theme.js` — toggles theme and persists preference
  - [ ] `js/utils.js` — common helpers (formatting, mock data loader)

---

## Testing & QA
- [ ] Cross-browser test: Chrome, Safari, Firefox, mobile Safari and Chrome on Android
- [ ] Language QA: check translations and RTL layout
- [ ] Accessibility audit (Lighthouse or axe)
- [ ] Responsiveness: phone, tablet, desktop
- [ ] Performance: keep initial load < 1s on fast connection with minimal assets

---

## Delivery & Handoff
- [ ] Finalize content and assets
- [ ] Add README with local preview instructions (open `index.html` in browser)
- [ ] Provide a short deployment guide (GitHub Pages or static host)

---

## Suggested timeline (example)
 - Day 1: Scaffolding + Home + theme system + i18n bootstrapping
 - Day 2: About, Passengers, Profile pages and download landing
 - Day 3: Accessibility, SEO, privacy policy drafting
- Day 4: Accessibility, SEO, privacy policy drafting
- Day 5: QA, polish, deploy

---

## Acceptance criteria (for site)
- [ ] All pages render and navigation links work
- [ ] Theme toggle persists across pages
- [ ] Language selector swaps UI text (EN/FR/AR) and Arabic is RTL
- [ ] Privacy policy page exists and covers required store topics
- [ ] No major accessibility failures (Lighthouse AA)

---

## Next action I will take after your approval
- Create the site skeleton and a `legal/privacy-policy-draft.md` with a checklist and an initial data map (NOT the policy text) for your review.

---

_File saved: `website/WEBSITE_PLAN.md` — review and tell me any changes. Once you approve, I will start implementing the skeleton and the privacy-policy draft as separate tasks._
