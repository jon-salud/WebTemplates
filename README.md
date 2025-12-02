# Professional Agency Template

A modern, customizable multi-industry agency template built with Astro, React, Framer Motion, and Tailwind CSS.

## 🚀 Features

-   **15 Industry Templates** - Pre-configured for professional services, hospitality, trades, creative, and wellness industries
-   **60+ Unique Section Variants** - No two industries look the same
-   **Blueprint-Driven Rendering** - Template families with reusable section configurations
-   **Fully Responsive** - Mobile-first design
-   **Animated Interactions** - Smooth Framer Motion animations
-   **Easy Customization** - Centralized configuration in `src/config/industries.ts`
-   **Accessibility First** - WCAG 2.1 compliant with ARIA labels, keyboard navigation, and skip links
-   **Optimized Performance** - Lazy loading images, skeleton loaders, and efficient animations
-   **Form Validation** - Real-time validation with accessible error messages

## 📦 Tech Stack

-   [Astro](https://astro.build/) 4.x - Static site generator with islands architecture
-   [React](https://react.dev/) 18 - UI components with client-side interactivity
-   [Framer Motion](https://www.framer.com/motion/) 11 - Smooth animations and transitions
-   [Tailwind CSS](https://tailwindcss.com/) 3.4 - Utility-first CSS framework
-   [TypeScript](https://www.typescriptlang.org/) - Type-safe development

## 🎭 Template Families

The project uses a blueprint-driven architecture with 6 template families:

### Professional Services

Clean, authoritative layouts for B2B services (accounting, law, consulting, etc.)

### Health & Wellness

Calming, trustworthy designs for healthcare and fitness (healthcare, fitness studio)

### Hospitality & Culinary

Vibrant, sensory-focused layouts for restaurants and hotels

### Trades & Field Services

Bold, process-driven designs for contractors and tradespeople

### Creative & Events

Energetic, portfolio-style layouts for DJs, photographers, and event services

### SaaS & Startups

Modern, feature-focused designs for tech companies

Each family defines a reusable blueprint of sections that can be customized per industry.

## 🏃 Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

## 🎨 Industry Variant Matrix

Each industry uses a unique combination of section variants to ensure visual diversity:

| Industry           | Template Family      | Hero              | Services      | Benefits         | Testimonials   | CTA           | Footer        |
| ------------------ | -------------------- | ----------------- | ------------- | ---------------- | -------------- | ------------- | ------------- |
| **Accounting**     | professionalServices | split             | numbered-list | counter-cards    | featured       | gradient-card | default       |
| **Architecture**   | professionalServices | image-overlap     | timeline      | features         | cards-row      | centered      | columns-light |
| **Consulting**     | professionalServices | bento             | hover-cards   | radial           | spotlight      | floating      | mega          |
| **Education**      | professionalServices | diagonal-split    | masonry       | stats            | centered-quote | split         | stacked       |
| **Financial**      | professionalServices | centered-cards    | tabs          | comparison       | masonry        | stats-cta     | dark-gradient |
| **Healthcare**     | healthWellness       | asymmetric        | icon-grid     | timeline         | carousel       | with-form     | centered      |
| **Insurance**      | professionalServices | minimal-centered  | cards         | bento            | quote-slider   | default       | simple-dark   |
| **Law**            | professionalServices | editorial         | accordion     | progress-bars    | stacked-cards  | minimal       | minimal       |
| **Real Estate**    | professionalServices | video-bg          | image-cards   | animated-counter | floating-cards | dual-action   | split-brand   |
| **Recruitment**    | professionalServices | floating-elements | spotlight     | icon-list        | side-scroll    | banner        | modern-grid   |
| **Restaurant**     | hospitalityCulinary  | video-bg          | image-cards   | —                | quote-slider   | dual-action   | split-brand   |
| **Boutique Hotel** | hospitalityCulinary  | image-overlap     | spotlight     | —                | quote-slider   | dual-action   | split-brand   |
| **Contractor**     | tradesFieldServices  | minimal-centered  | cards         | icon-list        | side-scroll    | banner        | simple-dark   |
| **DJ**             | creativeEvents       | bento             | hover-cards   | radial           | floating-cards | split         | modern-grid   |
| **Fitness Studio** | healthWellness       | diagonal-split    | icon-grid     | timeline         | carousel       | with-form     | centered      |

## � Typography Matrix

Each industry uses a unique font pairing for brand distinction and optimal readability:

| Industry           | Heading Font     | Body Font         | Character                               |
| ------------------ | ---------------- | ----------------- | --------------------------------------- |
| **Accounting**     | Inter            | Lato              | Modern, professional, highly legible    |
| **Architecture**   | Bodoni Moda      | Libre Baskerville | Elegant, sophisticated, high-contrast   |
| **Consulting**     | Raleway          | Source Sans 3     | Contemporary, clean, business-focused   |
| **Education**      | Fredoka          | Varela Round      | Friendly, approachable, kid-friendly    |
| **Financial**      | EB Garamond      | Merriweather      | Traditional, trustworthy, classic serif |
| **Healthcare**     | Montserrat       | Open Sans         | Clear, accessible, humanist sans-serif  |
| **Insurance**      | PT Serif         | Crimson Text      | Reliable, established, literary serif   |
| **Law**            | Playfair Display | Lora              | Authoritative, refined, editorial style |
| **Real Estate**    | Jost             | Roboto            | Bold, geometric, modern sans-serif      |
| **Recruitment**    | Zilla Slab       | Inter             | Tech-forward, sturdy, contemporary slab |
| **Restaurant**     | Abril Fatface    | Source Sans 3     | Vibrant, sensory, editorial food focus  |
| **Boutique Hotel** | Playfair Display | Lora              | Elegant, local-focused hospitality      |
| **Contractor**     | Zilla Slab       | Inter             | Trustworthy, robust, clear              |
| **DJ**             | Fugaz One        | Source Sans 3     | Bold, energetic, event-focused          |
| **Fitness Studio** | Fredoka          | Varela Round      | Friendly, approachable, active          |

### Font Usage Guidelines

**Heading Font** - Used for:

-   Hero headlines (H1)
-   Section titles (H2)
-   Card titles (H3)
-   Navigation branding

**Body Font** - Used for:

-   Paragraphs and body text
-   Descriptions and subtitles
-   Buttons and labels
-   Form inputs and UI elements

All fonts are loaded from Google Fonts for optimal performance and are configured in `src/config/industries.ts`.

## �📂 Available Variants

### Header Variants (13)

| Variant    | Description                                       |
| ---------- | ------------------------------------------------- |
| `minimal`  | Clean, single-line layout with essential links    |
| `centered` | Logo centered with navigation on sides            |
| `double`   | Two-row layout for information-dense needs        |
| `floating` | Floats above content with glassmorphism effect    |
| `glass`    | Transparent, blurry background for immersive feel |
| `split`    | Logo left, navigation right, distinct separation  |
| `bold`     | High-impact, large typography for creative brands |
| `mega`     | Includes mega-menu capabilities for large sites   |
| `sidebar`  | Vertical navigation sidebar (desktop)             |
| `search`   | Prominent search bar (Real Estate/Retail)         |
| `gradient` | Gradient background for modern tech/SaaS          |
| `bordered` | High-contrast borders for industrial/trades       |
| `default`  | Standard professional layout                      |

### Hero Variants (10)

| Variant             | Description                                 |
| ------------------- | ------------------------------------------- |
| `split`             | Two-column layout with text and image       |
| `centered-cards`    | Centered content with floating stat cards   |
| `video-bg`          | Full-width video background                 |
| `asymmetric`        | Off-center layout with overlapping elements |
| `editorial`         | Magazine-style with large typography        |
| `bento`             | Grid-based bento box layout                 |
| `minimal-centered`  | Clean, minimal centered design              |
| `image-overlap`     | Overlapping image panels                    |
| `diagonal-split`    | Diagonal divider between sections           |
| `floating-elements` | Animated floating decorative elements       |

### Services Variants (10)

| Variant         | Description                      |
| --------------- | -------------------------------- |
| `numbered-list` | Numbered list with hover effects |
| `accordion`     | Expandable accordion panels      |
| `icon-grid`     | Icon-based grid layout           |
| `hover-cards`   | Cards with hover reveal effects  |
| `tabs`          | Tabbed navigation interface      |
| `image-cards`   | Cards with background images     |
| `cards`         | Standard card grid               |
| `timeline`      | Timeline-style vertical layout   |
| `masonry`       | Pinterest-style masonry grid     |
| `spotlight`     | Hover spotlight effect cards     |

### Benefits Variants (10)

| Variant            | Description                         |
| ------------------ | ----------------------------------- |
| `counter-cards`    | Animated number counters in cards   |
| `progress-bars`    | Animated progress bar indicators    |
| `timeline`         | Vertical timeline layout            |
| `radial`           | Circular/radial progress indicators |
| `comparison`       | Before/after comparison style       |
| `animated-counter` | Large animated statistics           |
| `stats`            | Simple stat blocks                  |
| `features`         | Feature list with icons             |
| `bento`            | Bento grid layout                   |
| `icon-list`        | Horizontal icon list                |

### Testimonials Variants (11)

| Variant          | Description                       |
| ---------------- | --------------------------------- |
| `carousel`       | Sliding carousel                  |
| `grid`           | Standard grid layout              |
| `featured`       | Single featured testimonial       |
| `stacked-cards`  | Overlapping stacked cards         |
| `masonry`        | Masonry grid with varied heights  |
| `spotlight`      | Auto-rotating spotlight           |
| `quote-slider`   | Quote-focused slider              |
| `cards-row`      | Horizontal scrolling row          |
| `centered-quote` | Large centered quote              |
| `side-scroll`    | Horizontal scroll animation       |
| `floating-cards` | Floating cards with hover effects |

### CTA Variants (10)

| Variant         | Description                |
| --------------- | -------------------------- |
| `default`       | Simple centered CTA        |
| `gradient-card` | Gradient background card   |
| `minimal`       | Minimal text-only style    |
| `with-form`     | Includes email signup form |
| `floating`      | Floating card design       |
| `stats-cta`     | CTA with statistics        |
| `dual-action`   | Two action buttons         |
| `centered`      | Centered layout            |
| `split`         | Two-column split layout    |
| `banner`        | Full-width banner style    |

### Footer Variants (10)

| Variant         | Description                       |
| --------------- | --------------------------------- |
| `default`       | Standard multi-column footer      |
| `minimal`       | Minimal single-line footer        |
| `centered`      | Centered content layout           |
| `mega`          | Large mega footer with many links |
| `dark-gradient` | Dark gradient background          |
| `split-brand`   | Split layout with brand focus     |
| `simple-dark`   | Simple dark themed footer         |
| `columns-light` | Light multi-column layout         |
| `stacked`       | Vertically stacked sections       |
| `modern-grid`   | Modern grid-based layout          |

## 🔧 Customization

### Adding a New Industry

1. Add the industry type to `src/config/industries.ts`:

```typescript
export type IndustryType = "..." | "your-industry";
```

2. Add the configuration object:

```typescript
'your-industry': {
  id: 'your-industry',
  name: 'Your Industry Name',
  tagline: 'Your Tagline',
  templateFamily: 'professionalServices', // Choose appropriate family
  colors: { ... },
  fonts: {
    heading: 'Font Name',
    body: 'Font Name',
    googleFontsUrl: 'https://fonts.googleapis.com/css2?family=...'
  },
  hero: { ... },
  services: { ... },
  // ... etc
}
```

3. The page will automatically be generated at `/your-industry/` via the dynamic route

### Using Custom Sections

Custom sections can be added to any industry via the `customSections` config:

```typescript
'your-industry': {
  // ... other config
  customSections: [
    { slot: 'after-hero', component: 'AwardsBadges', props: { ... } },
    { slot: 'before-cta', component: 'MenuPreview', props: { ... } }
  ]
}
```

Available custom sections:

-   `AwardsBadges` - Display awards, certifications, or recognition
-   `MenuPreview` - Showcase menu items or product highlights
-   `ProcessSteps` - Step-by-step process visualization
-   `CertificationStrip` - Display certifications or trust badges
-   `ClientMarquee` - Scrolling client/partner logos
-   `ShowcaseGallery` - Portfolio or project gallery
-   `AnimatedLogoSection` - Animated logo with scroll effects

### Changing Variants

Update the variant props in your industry page:

```astro
<Hero variant="your-preferred-variant" />
<Services variant="your-preferred-variant" />
```

## 📁 Project Structure

```
src/
├── components/
│   ├── sections/          # Main section components
│   │   ├── Hero.tsx
│   │   ├── Services.tsx
│   │   ├── Benefits.tsx
│   │   ├── Testimonials.tsx
│   │   ├── CTA.tsx
│   │   ├── Footer.tsx
│   │   ├── AnimatedLogoSection.astro
│   │   └── custom/       # Custom lightweight sections
│   │       ├── AwardsBadges.astro
│   │       ├── MenuPreview.astro
│   │       ├── ProcessSteps.astro
│   │       ├── CertificationStrip.astro
│   │       ├── ClientMarquee.astro
│   │       └── ShowcaseGallery.astro
│   ├── ui/               # Reusable UI components
│   │   ├── Button.tsx
│   │   ├── AnimatedLogo.tsx
│   │   └── ...
│   └── layout/           # Layout components
│       ├── Navigation.tsx
│       └── TemplateRenderer.astro  # Blueprint-driven renderer
├── config/
│   ├── industries.ts        # Industry configurations
│   ├── templateFamilies.ts  # Template family blueprints
│   └── types.ts             # Type definitions
├── layouts/
│   └── BaseLayout.astro  # Base page layout
├── pages/
│   ├── [industry]/
│   │   └── index.astro   # Dynamic route for all industries
│   ├── accounting/       # Legacy static routes
│   ├── architecture/
│   └── ...
└── docs/
    └── template-family-blueprints.md  # Architecture documentation
```

## 📄 License

MIT License - feel free to use for personal and commercial projects.

## 🚀 Quick Start

### Prerequisites

-   Node.js 18+
-   npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

The site will be available at `http://localhost:4321`

### Available Routes

-   `/` - Home page with industry selector
-   `/accounting/` - Accounting firm template
-   `/law/` - Law firm template
-   `/healthcare/` - Healthcare template
-   `/consulting/` - Consulting template
-   `/financial/` - Financial services template
-   `/realestate/` - Real estate template
-   `/insurance/` - Insurance template
-   `/architecture/` - Architecture template
-   `/education/` - Education template
-   `/recruitment/` - Recruitment template
-   `/restaurant/` - Restaurant template (new)
-   `/boutiquehotel/` - Boutique hotel template (new)
-   `/contractor/` - Contractor template (new)
-   `/dj/` - DJ/Events template (new)
-   `/fitnessstudio/` - Fitness studio template (new)

### Build for Production

```bash
# Build the site
npm run build

# Preview the build
npm run preview
```

## 📁 Project Structure

```
circula_com/
├── src/
│   ├── components/
│   │   ├── ui/              # Base UI components
│   │   │   ├── Button.tsx
│   │   │   ├── Card.tsx
│   │   │   ├── Badge.tsx
│   │   │   ├── Container.tsx
│   │   │   ├── AnimatedLogo.tsx
│   │   │   └── Section.tsx
│   │   ├── layout/          # Layout components
│   │   │   ├── Navigation.tsx
│   │   │   └── TemplateRenderer.astro
│   │   ├── sections/        # Page sections
│   │   │   ├── Hero.tsx
│   │   │   ├── Services.tsx
│   │   │   ├── Benefits.tsx
│   │   │   ├── Testimonials.tsx
│   │   │   ├── CTA.tsx
│   │   │   ├── LogoMarquee.tsx
│   │   │   ├── Footer.tsx
│   │   │   ├── AnimatedLogoSection.astro
│   │   │   └── custom/      # Custom sections
│   │   │       ├── AwardsBadges.astro
│   │   │       ├── MenuPreview.astro
│   │   │       ├── ProcessSteps.astro
│   │   │       ├── CertificationStrip.astro
│   │   │       ├── ClientMarquee.astro
│   │   │       └── ShowcaseGallery.astro
│   │   └── forms/           # Form components
│   │       └── ContactForm.tsx
│   ├── config/
│   │   ├── industries.ts    # Industry configurations
│   │   ├── templateFamilies.ts  # Blueprint definitions
│   │   └── types.ts         # Type definitions
│   ├── layouts/
│   │   └── BaseLayout.astro # Base HTML layout
│   ├── pages/
│   │   ├── index.astro      # Home (with industry selector)
│   │   ├── [industry]/      # Dynamic route
│   │   │   └── index.astro
│   │   ├── accounting/      # Static routes (legacy)
│   │   ├── law/
│   │   ├── healthcare/
│   │   └── ...
│   └── styles/
│       └── global.css       # Global styles & Tailwind
├── public/                   # Static assets
│   └── logos/
│       └── creative/        # Animated SVG logos
├── docs/
│   └── template-family-blueprints.md
├── astro.config.mjs
├── tailwind.config.mjs
├── tsconfig.json
└── package.json
```

## 🎨 Customization

### Changing Industry Content

Edit `src/config/industries.ts` to customize:

-   Headlines and copy
-   Services offered
-   Benefits/stats
-   Testimonials
-   Color schemes

```typescript
// Example: Customizing the accounting firm
export const industryConfigs = {
    accounting: {
        id: "accounting",
        name: "Your Firm Name",
        colors: {
            primary: "#0066CC", // Your brand color
            primaryLight: "#3388DD",
            primaryDark: "#004499",
            accent: "#42A344",
        },
        hero: {
            headline: "Your Custom Headline",
            subheadline: "Your compelling subheadline",
            cta: "Get Started",
            ctaSecondary: "Learn More",
        },
        // ... more configuration
    },
};
```

### Adding a New Industry

1. Add a new entry to `industryConfigs` in `src/config/industries.ts`
2. Add the new type to `IndustryType`
3. Create a new page in `src/pages/[industry]/index.astro`

### Customizing Colors

Edit `tailwind.config.mjs` to modify the design tokens:

```javascript
colors: {
  brand: {
    primary: {
      DEFAULT: '#YOUR_COLOR',
      light: '#YOUR_LIGHT',
      dark: '#YOUR_DARK',
    },
  },
}
```

### Component Variants

Most components support multiple variants:

```tsx
// Hero variants
<Hero variant="default" />  // Side-by-side layout
<Hero variant="centered" /> // Centered text

// Benefits variants
<Benefits variant="stats" />    // Big numbers
<Benefits variant="features" /> // Feature list
<Benefits variant="bento" />    // Bento grid

// Testimonials variants
<Testimonials variant="carousel" /> // Carousel
<Testimonials variant="grid" />     // Grid layout
<Testimonials variant="featured" /> // Featured + sidebar
```

## 📦 Dependencies

### Core

-   `astro` - Static site generator
-   `@astrojs/react` - React integration
-   `@astrojs/tailwind` - Tailwind CSS integration
-   `react` & `react-dom` - UI library

### Styling & Animation

-   `tailwindcss` - Utility CSS framework
-   `framer-motion` - Animation library

### Icons

-   `lucide-react` - Icon library

## 🔧 Development

### Commands

| Command           | Description              |
| ----------------- | ------------------------ |
| `npm run dev`     | Start dev server         |
| `npm run build`   | Build for production     |
| `npm run preview` | Preview production build |

### Adding New Components

1. Create component in appropriate folder (`ui/`, `sections/`, `forms/`)
2. Export from the folder's `index.ts`
3. Import and use in pages

### Styling Guidelines

-   Use Tailwind utility classes
-   Use CSS custom properties for dynamic theming
-   Follow the existing spacing/sizing system
-   Use `motion` from Framer Motion for animations

## 📄 License

MIT License - feel free to use for personal or commercial projects.

## 🙏 Credits

Design inspiration from [Circula.com](https://circula.com) - an excellent example of modern B2B SaaS design.

---

Built with ❤️ using Astro + React + Tailwind CSS

## 🔗 Extra Resources

-   **[font-table.html](font-table.html)** — A local HTML reference showing a curated set of professional and fun Google Fonts. Open this file in your browser to preview the fonts used across the project.
-   **[DESIGN_PRINCIPLES.md](DESIGN_PRINCIPLES.md)** — Comprehensive guide to design principles, best practices, typography, color theory, spacing, accessibility, and more.
-   **[ACCESSIBILITY.md](ACCESSIBILITY.md)** — Complete accessibility implementation guide with usage examples, testing instructions, and WCAG 2.1 compliance details.

## ♿ Accessibility Features

This template implements comprehensive accessibility features following WCAG 2.1 guidelines:

### Keyboard Navigation

-   **Skip Link** - Bypass navigation and jump to main content (press Tab on page load)
-   **Visible Focus States** - Clear focus indicators on all interactive elements
-   **Keyboard-Accessible Dropdowns** - Navigate menus with Tab, Enter, and Escape keys

### Screen Reader Support

-   **ARIA Labels** - Descriptive labels on all icon-only buttons
-   **Semantic HTML** - Proper heading hierarchy and landmark regions
-   **Form Validation** - Error messages announced with `role="alert"`
-   **Loading States** - Proper status announcements for async operations

### Visual Accessibility

-   **Color Contrast** - Minimum 4.5:1 ratio for normal text, 3:1 for large text
-   **Error States** - Visual indicators beyond color (icons, borders)
-   **Form Validation** - Real-time feedback with accessible error messages
-   **Loading Indicators** - Skeleton loaders prevent layout shift

### Performance Optimization

-   **Lazy Loading** - Images load on scroll to improve initial page load
-   **Optimized Images** - Multiple format support (AVIF, WebP, fallback)
-   **Efficient Animations** - Respects `prefers-reduced-motion` setting
-   **Code Splitting** - Astro islands load components on demand

See [ACCESSIBILITY.md](ACCESSIBILITY.md) for detailed implementation guide and testing instructions.
