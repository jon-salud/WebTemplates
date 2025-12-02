# Template Family Blueprints & Implementation Guide

> **Purpose:** Define a reusable strategy so new industries (especially hospitality, lifestyle, trades, events) reuse the same component set, with only configuration and blueprint selection changing. Less powerful agents can follow this document to implement new templates without rewriting pages.

---

## 1. Approach Overview

-   **Single Page Skeleton:** Every industry page keeps the `BaseLayout → Navigation → main sections → Footer` scaffold. Differences come from config-driven data and a `TemplateFamily` blueprint that defines section order + variants.
-   **Blueprint Registry:** Create `src/config/templateFamilies.ts` that maps a `templateFamily` key to:
    -   ordered section list (`Hero`, `LogoMarquee`, `Services`, etc.)
    -   default variant/prop overrides per section
    -   optional custom sections (e.g., `FeaturedMenu`, `EventSchedule`)
-   **Industry Configs:** Each industry references a `templateFamily`, fonts, palette, copy, and toggles for optional sections. No handwritten Astro page per industry—just a generic `src/pages/[industry]/index.astro` (or a factory) that renders the blueprint.
-   **Design Consistency:** All colors, fonts, and spacing must align with `DESIGN_PRINCIPLES.md`. Font pairings come from `font-table.html` (or equivalent alternatives when justified).
-   **Future Work Split:** This document covers the architecture and content plan. Subsequent implementation tasks are enumerated in Section 6.

---

## 2. Template Families & Target Industries

| Family Key             | Audience & Tone                                | Existing Industries                               | Planned Additions                                              |
| ---------------------- | ---------------------------------------------- | ------------------------------------------------- | -------------------------------------------------------------- |
| `professionalServices` | Formal, trust-building, data-heavy             | accounting, law, consulting, financial, insurance | legal boutique, tax specialist, corporate IT                   |
| `healthWellness`       | Calm, friendly, human-centered                 | healthcare, education                             | dental clinic, wellness spa, fitness studio, therapist         |
| `hospitalityCulinary`  | Vibrant, sensorial, menu/experience driven     | _new_                                             | restaurant, cafe, cocktail bar, boutique hotel                 |
| `tradesFieldServices`  | Gritty yet clean, proof-of-work, booking focus | _new_                                             | general contractor, electrician, cleaning service, landscaping |
| `creativeEvents`       | Bold, expressive, media-heavy                  | recruitment (partial overlap)                     | DJ, wedding planner, photography studio, event venue           |
| `saasStartups`         | Modern tech feel, product-centric              | realestate (partial), architecture                | proptech, marketing agency, design studio                      |

> Families can expand. Each industry simply selects the closest family; custom overrides remain possible when unique sections are required.

---

## 3. Section Blueprints by Family

Each blueprint defines the recommended order plus default variants. Implement as data (e.g., TypeScript arrays) so pages iterate over it.

### 3.1 `professionalServices`

```
Hero: split | editorial | centered-cards (per industry)
LogoMarquee: yes
Services: numbered-list or tabs (variant override allowed)
Benefits: counter-cards / progress-bars
Testimonials: featured / stacked-cards
CTA: gradient-card / stats-cta
Footer: default / minimal
Extras: TemplateShortcut, optional case-study grid
```

### 3.2 `healthWellness`

```
Hero: asymmetric or diagonal-split (softer gradients)
LogoMarquee: optional (insurers, partners)
Services: icon-grid / masonry
Benefits: timeline / stats
Testimonials: carousel (patient stories) with avatar support
CTA: with-form (appointment) + secondary reassurance block
Footer: centered with contact info emphasis
Extras: `FeaturedPrograms` section (cards for packages), `CareTeam` grid
```

### 3.3 `hospitalityCulinary`

```
Hero: video-bg or image-overlap with copy over photography
LogoMarquee: replaced by `AwardsBadges` (Michelin, Google Stars)
Services: rename to `Experiences` (use image-cards / spotlight)
Benefits: `MenuHighlights` (bento grid) or `ExperienceTimeline`
Testimonials: quote-slider with food imagery
CTA: dual-action (Reserve Table + View Menu)
Footer: split-brand with hours, map snippet
Extras: `MenuPreview`, `EventSchedule`, `GalleryCarousel`
```

### 3.4 `tradesFieldServices`

```
Hero: floating-elements or minimal-centered with urgency badge
LogoMarquee: replaced with `CertificationStrip`
Services: cards (3-up) + `ProcessSteps`
Benefits: icon-list (guarantees, response times)
Testimonials: side-scroll (before/after slider optional)
CTA: banner (Call Now + Request Quote)
Footer: simple-dark emphasizing license and coverage areas
Extras: `ServiceAreas` map/list, `EmergencyCTA`
```

### 3.5 `creativeEvents`

```
Hero: bento or floating-elements with video embed option
LogoMarquee: clients list or brand marquee
Services: hover-cards (Packages), timeline for event flow
Benefits: radial stats (events completed, avg rating)
Testimonials: floating-cards with media quotes
CTA: split (Book a Call + Download Deck)
Footer: modern-grid with socials
Extras: `ShowcaseGallery`, `PlaylistEmbed`, `EventFeatures`
```

### 3.6 `saasStartups`

```
Hero: centered-cards / video-bg
LogoMarquee: standard logos + press badges
Services: tabs (Product + Services)
Benefits: comparison tables, animated-counter
Testimonials: spotlight w/ metrics
CTA: with-form (demo request)
Footer: mega or stacked
Extras: `IntegrationGrid`, `PricingSummary`, `TemplateShortcut`
```

---

## 4. Typography & Color Guidance

-   **Font Selection:** Use pairings from `font-table.html`. Recommended combos per family:
    -   `professionalServices`: Playfair Display + Lora, Inter + Lato, EB Garamond + Merriweather
    -   `healthWellness`: Montserrat + Open Sans, Fredoka + Varela Round, Source Sans 3 + Lora
    -   `hospitalityCulinary`: Abril Fatface + Source Sans 3, Lobster + Raleway (sparingly), Righteous + Varela Round for modern spots
    -   `tradesFieldServices`: Zilla Slab + Inter, Titan One (accent) + Roboto, PT Serif + Source Sans 3
    -   `creativeEvents`: Monoton + Source Sans 3, Fugaz One + Open Sans, Bangers (accent) + Inter
    -   `saasStartups`: Jost + Roboto, Raleway + Source Sans 3
-   **Color Tokens:** Remain four-color palette as in `IndustryConfig.colors`. Hospitality can use richer accents (e.g., deep gold). Trades should keep high-contrast safety colors (orange, navy). All combinations must meet WCAG ratios (see DESIGN_PRINCIPLES).
-   **Font Loading:** Add new Google Fonts via `fonts.googleFontsUrl`. Load only required weights (usually 2–3) and apply `font-display: swap`.

---

## 5. Data Structures & Component Strategy

1. **`TemplateFamily` Type**

    ```ts
    export type TemplateFamily =
        | "professionalServices"
        | "healthWellness"
        | "hospitalityCulinary"
        | "tradesFieldServices"
        | "creativeEvents"
        | "saasStartups";
    ```

2. **Blueprint Definition (`src/config/templateFamilies.ts`)**

    ```ts
    interface SectionBlueprint {
      component: 'Hero' | 'Services' | 'Benefits' | 'Testimonials' | 'CTA' | 'LogoMarquee' | 'Footer' | 'Custom';
      variant?: string;
      props?: Record<string, unknown>;
      enabledKey?: keyof IndustryConfig;
    }

    export const templateBlueprints: Record<TemplateFamily, SectionBlueprint[]> = { ... };
    ```

3. **Industry Config Extension**

    ```ts
    interface IndustryConfig {
      templateFamily: TemplateFamily;
      sections?: Partial<Record<'Hero' | 'Services' | ... , { variant?: string; props?: Record<string, unknown> }>>;
      customSections?: Array<{ slot: string; component: string; props: Record<string, unknown> }>;
    }
    ```

4. **Renderer Utility**

    - Create `src/components/layout/TemplateRenderer.astro` (or `.tsx`).
    - Accepts `industryConfig` + blueprint array.
    - Iterates through blueprint, merges defaults with per-industry overrides, and renders section components dynamically.
    - Handles optional custom sections via dynamic imports (Astro’s `Component` type + `await import`).

5. **Generic Industry Page**

    - Replace individual `src/pages/<industry>/index.astro` with a single `[industry].astro` route.
    - Use `getStaticPaths` to generate pages for all industries from `getAllIndustries()`.
    - Inside, call `TemplateRenderer` with the resolved config.

6. **Custom Sections**
    - Add lightweight sections (e.g., `MenuPreview`) inside `src/components/sections/custom/` with simple props.
    - Blueprint `component: 'Custom', props: { component: 'MenuPreview', ... }` to render them.

---

## 6. Implementation Tasks for Next Agent

1. **Scaffold Template Family Config**

    - Add `TemplateFamily` type + `templateBlueprints.ts` with definitions from Section 3.
    - Update `IndustryConfig` and `industryConfigs` to reference `templateFamily` and optional section overrides.

2. **Create Template Renderer**

    - Build a reusable renderer that:
        - injects `Navigation`, `TemplateShortcut`, `Footer`
        - loops through blueprint & renders sections with variant overrides
        - supports optional components (LogoMarquee vs AwardsBadges, etc.)

3. **Refactor Pages**

    - Convert existing `src/pages/<industry>/index.astro` files into a single dynamic route using the renderer.
    - Maintain any unique copy by keeping data inside `industryConfigs` (services, benefits, etc.).

4. **Introduce Custom Sections**

    - Implement the extra sections listed per family (start with simplest ones: `AwardsBadges`, `MenuPreview`, `ProcessSteps`).
    - Wire them through the blueprint `Custom` slot.

5. **Add New Industries**

    - At minimum, add configs for: `restaurant`, `boutiquehotel`, `contractor`, `dj`, `fitnessstudio`.
    - Assign appropriate fonts/colors per Section 4 guidelines.

6. **Update Documentation**

    - Extend `README.md` matrices with new industries & variants.
    - Document template families in `README` (reference this file).

7. **Testing & QA**
    - Run `npm run dev` to verify each generated page.
    - Check Lighthouse accessibility/performance for at least one industry per family.
    - Confirm fonts load, sections align to 8-point grid, CTA states accessible.

---

## 7. Usage Notes for Future Contributors

-   **Adding an Industry:**

    1. Duplicate an existing config block.
    2. Set `templateFamily` to the appropriate key.
    3. Provide copy, services, benefits, testimonials, CTA.
    4. Override any section variant via `sections.Services = { variant: 'tabs' }` etc.
    5. Optional: define `customSections` data.

-   **Design Consistency:** Always cross-check against `DESIGN_PRINCIPLES.md` (font limits, color contrast, spacing) and reference `font-table.html` for safe pairings.

-   **When to Add a New Family:** Only if multiple industries share a drastically different structure. Update this document and `templateBlueprints.ts` accordingly.

---

## 8. Implementation Checklist (New Templates)

Use the checklist below to track delivery of the first wave of non-professional templates. Each item lists the template family and the exact scaffolding (section order + key variants) that should be wired via the blueprint registry.

-   [ ] **Restaurant** — `hospitalityCulinary`; Hero (video-bg) → AwardsBadges → Experiences (image-cards) → MenuHighlights (bento) → MenuPreview (custom) → Testimonials (quote-slider) → CTA (dual-action) → Footer (split-brand)
-   [ ] **Boutique Hotel** — `hospitalityCulinary`; Hero (image-overlap) → AwardsBadges → Experiences (spotlight) → GalleryCarousel (custom) → Testimonials (quote-slider) → CTA (dual-action) → Footer (split-brand)
-   [ ] **Contractor** — `tradesFieldServices`; Hero (minimal-centered) → CertificationStrip → Services (cards) → ProcessSteps (custom) → Benefits (icon-list) → Testimonials (side-scroll) → CTA (banner) → Footer (simple-dark)
-   [ ] **DJ / Music Producer** — `creativeEvents`; Hero (bento) → ClientMarquee → Services (hover-cards packages) → ShowcaseGallery (custom) → Benefits (radial stats) → Testimonials (floating-cards) → CTA (split) → Footer (modern-grid)
-   [ ] **Fitness Studio** — `healthWellness`; Hero (diagonal-split) → LogoMarquee (partners) → Services (icon-grid) → FeaturedPrograms (custom) → Benefits (timeline) → Testimonials (carousel) → CTA (with-form) → Footer (centered)

Add additional checklist rows as new industries are planned so contributors can see progress at a glance.

---

## 9. Creative Logo Assets

To support the requested scroll-triggered logo animations on creative templates, reusable SVG wordmarks are stored under `public/logos/creative/`. Each file exposes distinct stroke (`class="logo-stroke"`) and fill (`class="logo-fill"`) elements so implementers can animate line-draw → fill transitions:

-   `pulse-mark.svg` – angular audio waveform mark
-   `wave-ribbon.svg` – flowing ribbon suitable for music or events brands
-   `prism-stack.svg` – stacked geometric prisms
-   `orbit-star.svg` – concentric orbit with star accent
-   `glyph-loop.svg` – looping monoline emblem for lifestyle brands

Developers can import these assets into Hero or sticky sections and animate stroke/fill opacity/length via CSS or Framer Motion as needed.

---

By following this plan, future agents can roll out new industry templates quickly by editing configuration and reusing section components instead of rebuilding pages from scratch.
