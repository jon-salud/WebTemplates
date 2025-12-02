# Circula Website Design Documentation

## Complete Analysis for Professional Website Recreation

---

## 1. TYPOGRAPHY SYSTEM

### Font Family

-   **Primary Font**: Space Grotesk (geometric grotesque, similar to Sharp Grotesk)
    -   Loaded from Google Fonts with weights: 300, 400, 500, 600, 700
    -   Fallback stack: system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif

```css
font-family: "Space Grotesk", system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI",
    Roboto, sans-serif;
```

**Why Space Grotesk?**

-   Free alternative to Sharp Grotesk (used by original Circula.com)
-   Geometric grotesque design matches modern, professional aesthetic
-   Excellent screen readability with distinctive character
-   Supports variable font weights for sophisticated typography

### Font Smoothing

```css
* {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -o-font-smoothing: antialiased;
}
```

### Fluid Typography System

The website uses a sophisticated fluid typography system with responsive scaling using CSS clamp():

```css
/* Display sizes with responsive scaling */
'display-1': clamp(2.5rem, 5vw + 1rem, 5rem)
'display-2': clamp(2rem, 4vw + 0.5rem, 4rem)
'display-3': clamp(1.75rem, 3vw + 0.5rem, 3rem)

/* Heading sizes */
'heading-1': clamp(1.5rem, 2.5vw + 0.5rem, 2.5rem)
'heading-2': clamp(1.25rem, 2vw + 0.25rem, 2rem)
'heading-3': clamp(1.125rem, 1.5vw + 0.25rem, 1.5rem)

/* Body sizes */
'body-xl': clamp(1.125rem, 1vw + 0.5rem, 1.375rem)
'body-lg': clamp(1rem, 0.5vw + 0.75rem, 1.125rem)
'body': 1rem
'body-sm': 0.875rem
'body-xs': 0.75rem
```

### Font Weight System

Nine font weights available for varied typography emphasis:

```css
.font-thin {
    font-weight: 300;
} /* Light */
.font-light {
    font-weight: 300;
} /* Light */
.font-normal {
    font-weight: 400;
} /* Regular */
.font-medium {
    font-weight: 500;
} /* Medium */
.font-semibold {
    font-weight: 600;
} /* Semibold */
.font-bold {
    font-weight: 700;
} /* Bold */
.font-extrabold {
    font-weight: 800;
} /* Extrabold */
.font-black {
    font-weight: 900;
} /* Black */
```

### Heading Defaults

-   `h1`: font-extrabold (800), display-1 size
-   `h2`: font-extrabold (800), display-2 size
-   `h3`: font-bold (700), display-3 size
-   `h4-h6`: font-semibold (600)
-   Body text: font-normal (400)

---

## 2. COLOR SCHEME

### CSS Custom Properties (Design Tokens)

```css
:root {
    /* Brand Colors */
    --colorbrand--black: #222222;
    --colorbrand--white: #ffffff;

    /* Green (Primary Accent) */
    --colorbrand--green-light: #e8f5e9;
    --colorbrand--green-dark: #42a344;

    /* Blue */
    --colorbrand--blue-light: #e3f2fd;
    --colorbrand--blue-dark: #1565c0;

    /* Orange */
    --colorbrand--orange-light: #fff3e0;
    --colorbrand--orange-dark: #e65100;

    /* Peach */
    --colorbrand--peach-light: #fff5f0;
    --colorbrand--peach-dark: #ff8a65;

    /* Purple */
    --colorbrand--purple-light: #f3e5f5;
    --colorbrand--purple-dark: #7b1fa2;

    /* Olive */
    --colorbrand--olive-light: #f1f8e9;
    --colorbrand--olive-dark: #558b2f;

    /* Brown */
    --colorbrand--brown-light: #efebe9;
    --colorbrand--brown-dark: #5d4037;

    /* Grey */
    --colorbrand--grey-dark: #9e9e9e;

    /* Neutral (for backgrounds) */
    --colorbrand--neutral: #f5f5f5;
    --colorbrand--muted-black: #333333;
}
```

### Dynamic Color Variables (Page-specific)

```css
--navbar--font-color: #222;
--navbar--button-color: #222;
--colorinteractions--color-background: var(--colorbrand--black);
--colorinteractions--color-text: #222;
```

### Color Application Classes

-   `.background-color-white` / `.background-color-black`
-   `.background-color-neutral` - Light grey background
-   `.background-color-muted-black` - Dark grey/black
-   `.background-color-green` / `.background-color-green-dark`
-   `.text-color-secondary` - Muted text color
-   `.text-color-green-dark` / `.text-color-green-light`

---

## 3. SPACING SYSTEM

### Spacer Components

Uses data attributes for consistent spacing:

```html
<div
    data-spacer=""
    data-wf--global-spacer--variant="base"
    class="spacer spacer-{size}"
></div>
```

### Spacer Sizes

-   `.spacer-tiny` - ~4px
-   `.spacer-xxsmall` - ~8px
-   `.spacer-xsmall` - ~12px
-   `.spacer-small` - ~16px
-   `.spacer-medium` - ~24px
-   `.spacer-large` - ~32px
-   `.spacer-xlarge` - ~48px
-   `.spacer-huge` - ~64px

### Margin/Padding Utilities

-   `.margin-0`, `.padding-0`
-   `.margin-top`, `.padding-top` (and other directional)
-   `.margin-horizontal`, `.padding-horizontal`
-   `.margin-vertical`, `.padding-vertical`
-   `.spacing-clean` - Remove all padding/margin

---

## 4. LAYOUT SYSTEM

### Container System

```css
.container-small {
    max-width: 48rem;
}
.container-medium {
    max-width: 64rem;
}
.container-large {
    max-width: 80rem;
}
.container-large.is-outer {
    /* Full-width with padding */
}
```

### Global Padding

```css
.padding-global {
    padding-left: 5%;
    padding-right: 5%;
}
```

### Section Padding

-   `.padding-section-small`
-   `.padding-section-medium`
-   `.padding-section-large`
-   `.padding-section_huge`

### Grid System

```css
.grid-reverse {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-areas: "right left";
}
.grid-item-left {
    grid-area: left;
}
.grid-item-right {
    grid-area: right;
}
```

### Flexbox Utilities

-   `.v-flex` - Vertical flex container
-   `.display-inlineflex` - Inline flex
-   `.button-group` - Button container with gap

---

## 5. NAVIGATION DESIGN

### Navbar Structure

```html
<div class="navbar8_component">
    <div class="navbar8_container">
        <div class="navbar8_logo-link"><!-- Logo --></div>
        <nav class="navbar8_menu">
            <div class="navbar8_menu-left"><!-- Nav items --></div>
            <div class="navbar8_menu-right"><!-- CTA buttons --></div>
        </nav>
    </div>
</div>
```

### Key Navbar Features

1. **Sticky/Smart Nav**: Uses `fs-scrolldisable-element="smart-nav"`
2. **Mega Menu Dropdowns**: Multi-column with tabs
3. **Color Transitions**: Dynamic color based on page section
4. **Language Switcher**: Globe icon with dropdown
5. **Mobile Hamburger**: Animated menu icon

### Dropdown Menu Design

-   Tab-based navigation within dropdowns
-   Featured content/highlight section
-   Icon + text navigation items
-   Hover animations on items

### CTA Buttons in Nav

```html
<a class="button is-nav is-blurred">Beratung buchen</a>
```

---

## 6. HERO SECTION PATTERNS

### Hero Component with Variable Font Weights

The hero section supports mixed-weight text for visual emphasis and sophistication:

```tsx
// Example: Accounting Industry
<Hero
    industry={industry}
    showBadge={true}
    badgeText="Trusted by 1000+ clients"
    variant="default"
    headlineSegments={[
        { text: "Streamline", weight: "light" },
        { text: " Your Finances ", weight: "bold" },
        { text: "with Expert ", weight: "light" },
        { text: "Accounting", weight: "extrabold" },
    ]}
/>
```

### Industry-Specific Headlines with Variable Weights

Each industry template features a unique headline with mixed font weights:

**Accounting Firm:**

-   "Streamline" (light) + "Your Finances" (bold) + "with Expert" (light) + "Accounting" (extrabold)

**Law Firm:**

-   "Expert Legal" (bold) + "Guidance" (light) + "for Complex" (bold) + "Cases" (extrabold)

**Healthcare Practice:**

-   "Compassionate" (light) + "Healthcare" (bold) + "That Puts" (light) + "You First" (extrabold)

**Consulting Firm:**

-   "Strategic" (light) + "Consulting" (bold) + "Driving Real" (light) + "Growth" (extrabold)

**Financial Advisory:**

-   "Secure Your" (light) + "Financial" (bold) + "Future with" (light) + "Expert Advice" (extrabold)

**Real Estate Agency:**

-   "Find Your" (light) + "Dream Home" (bold) + "with Trusted" (light) + "Expertise" (extrabold)

### Full-Width Hero with Bento Grid

```html
<section class="section_home_hero-header">
    <div class="travel-expense_component">
        <div class="travel-expense_content">
            <!-- Eyebrow text -->
            <div class="text-style-eyebrow">KI-gestützte Software</div>
            <!-- Main heading -->
            <h1>Mit ● Circula managen sich Ihre Ausgaben</h1>
            <!-- Subtext -->
            <p class="text-wrap-pretty">Description text...</p>
            <!-- Button group -->
            <div class="button-group">
                <a class="button">Primary CTA</a>
                <a class="button is-secondary">Secondary CTA</a>
            </div>
            <!-- Trust indicators -->
            <div class="new-home-hero-header-trust">
                <!-- Stars + Review logos -->
            </div>
        </div>
        <!-- Bento grid images -->
        <div class="travel-expense_bento-grid">
            <div class="travel-expense_bento-grid-left">
                <!-- Animated card + phone mockup -->
            </div>
            <div class="travel-expense_bento-grid-right">
                <!-- Dashboard UI -->
            </div>
        </div>
    </div>
</section>
```

### Hero Animation Features

1. **Intro Overlay**: Fade-out animation on load
2. **Scale Animation**: Elements scale from 1.15 to 1
3. **Slide-in Text**: Staggered text animation
4. **Parallax Images**: Scroll-based image movement

---

## 7. BUTTON STYLES

### Primary Button

```css
.button {
    padding: 0.75rem 1.5rem;
    border-radius: 0.5rem;
    background-color: var(--colorbrand--black);
    color: white;
    font-weight: 500;
    transition: all 0.3s ease;
}
```

### Button Variants

-   `.button` - Primary black button
-   `.button.is-secondary` - Grey background variant
-   `.button.is-small` - Smaller padding
-   `.button.is-nav` - Navigation button (blurred glass effect)
-   `.button.is-nav-highlight` - Highlighted nav button
-   `.button.banner-icon-only` - Icon-only button

### Button with Glass Effect

```css
.is-blurred {
    background: rgba(255, 255, 255, 0.15);
    backdrop-filter: blur(14.48px);
}
```

---

## 8. CARD COMPONENTS

### Standard Card

```html
<div class="am_layout_card">
    <div class="am_layout_card-content">
        <div class="am_layout_image-wrapper">
            <img class="am_layout_image" />
        </div>
        <div class="am_layout_text-wrap background-color-neutral">
            <div class="text-rich-text">Content</div>
        </div>
    </div>
</div>
```

### Benefit Card (Interactive)

```html
<a
    class="benefit-item_component"
    data-arrow="trigger"
    data-benefit-hover="trigger"
>
    <div class="benefit-item_field background-color-green">
        <h3 class="benefit-item_heading">Title</h3>
        <div class="benefit-item_arrow"><!-- Arrow SVG --></div>
    </div>
    <div class="benefit-item_img-wrap">
        <img class="is-cover is-absolut" />
        <div class="benefits-item_overlay"></div>
    </div>
</a>
```

### Card Hover Effects

-   Scale on image: `transform: scale(1.05)`
-   Arrow animation
-   Opacity changes
-   Background color transitions

---

## 9. ANIMATIONS & INTERACTIONS

### Scroll-triggered Animations

Uses GSAP for scroll-based animations:

```javascript
gsap.to(element, {
    opacity: 1,
    scale: 1,
    duration: 1,
    ease: "quint.out",
});
```

### CSS Keyframe Animations

#### Fade Out (Intro Overlay)

```css
@keyframes fadeOut {
    0% {
    }
    100% {
        opacity: 0;
    }
}
```

#### Scale Down

```css
@keyframes scaleDown {
    0% {
    }
    100% {
        transform: scale(1);
    }
}
```

#### Slide In

```css
@keyframes slideIn {
    from {
        opacity: 0;
        transform: translateY(20px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}
```

#### Marquee Scroll

```css
@keyframes marquee {
    0% {
        transform: translateX(0);
    }
    100% {
        transform: translateX(-50%);
    }
}
```

### Arrow Animation on Hover

```css
[data-arrow="trigger"]:hover [data-arrow="top"] {
    transform: translate(0px, 0%);
}
[data-arrow="trigger"]:hover [data-arrow="bottom"] {
    transform: translate(0px, 100%);
}
```

### Parallax Effect

```css
@media (min-width: 992px) {
    [data-parallax-image="image"] {
        height: calc(100% + 20rem);
        transform: translate(0px, -20rem);
    }
}
```

---

## 10. LOGO MARQUEE/CAROUSEL

### Structure

```html
<div class="logo3_component">
    <div class="logo3_list">
        <!-- Logo items duplicated for infinite scroll -->
        <div class="logo3_wrapper">
            <img class="logo3_logo is-black" />
        </div>
    </div>
</div>
```

### CSS Animation

```css
.logo3_list {
    display: flex;
    animation: marquee 60s linear infinite;
}

@keyframes marquee {
    0% {
        transform: translateX(0);
    }
    100% {
        transform: translateX(-50%);
    }
}
```

### Gradient Fade Edges

```css
.logo3_list::before {
    background: linear-gradient(to right, white, transparent);
}
.logo3_list::after {
    background: linear-gradient(to left, white, transparent);
}
```

---

## 11. SECTION PATTERNS

### Background Color Transitions

Dynamic background color changes on scroll:

```css
[data-color-change-background],
[data-color-change-text] {
    transition: background-color 0.6s, color 0.6s;
}

[data-color-change-background="black"] {
    background-color: var(--colorbrand--black);
}
[data-color-change-text="white"] {
    color: var(--colorbrand--white);
}
```

### Section Types Identified

1. **Hero Section**: Full-width with bento grid
2. **Logo Marquee Section**: Scrolling client logos
3. **Feature Cards Section**: Grid of feature cards
4. **Benefits Overview**: Interactive benefit cards
5. **Testimonial Section**: Customer quotes with carousel
6. **CTA Section**: Call-to-action with form or buttons
7. **FAQ Section**: Accordion-style Q&A
8. **Blog Grid Section**: Card grid for articles
9. **Pricing Section**: Pricing table with toggle

---

## 12. BANNER COMPONENT

### Promotional Banner

```html
<div id="banner_component" class="banner_variants">
    <section class="banner_component">
        <div class="banner_content">
            <div class="banner_tag-wrapper">NEW</div>
            <div class="banner_text-wrapper">
                <div class="banner-content">Text with link</div>
            </div>
            <div class="button-group">
                <a class="button is-small banner-icon-only">→</a>
            </div>
        </div>
        <button class="banner_close-button">×</button>
    </section>
</div>
```

### Banner Features

-   Cookie-based dismissal (30-day remember)
-   Smooth height animation on close
-   Mobile-responsive text

---

## 13. FOOTER STRUCTURE

### Footer Components

1. **Logo + Description**
2. **Multi-column Links** (Products, Solutions, Resources, Company)
3. **Social Media Icons**
4. **App Store Badges**
5. **Legal Links** (Privacy, Terms, Imprint)
6. **Copyright**
7. **Language Selector**

---

## 14. BLOG PAGE DESIGN

### Blog Hero

-   Dark background
-   Featured article highlight
-   Category filter tags

### Blog Grid

```html
<div class="blog_list">
    <a class="blog_item" data-arrow="trigger">
        <div class="blog_image-wrapper">
            <img class="blog_image" />
            <div class="blog_item_tag">Category</div>
        </div>
        <div class="blog_content">
            <h3>Article Title</h3>
            <p>Excerpt...</p>
            <div class="blog_meta">Date • Read time</div>
        </div>
    </a>
</div>
```

### Blog Card Hover

-   Image scale: 1.05
-   Tag background change
-   Arrow animation

---

## 15. PRICING PAGE DESIGN

### Toggle Switch (Monthly/Annual)

```css
.fs_checkbox-5_dot {
    width: 1.6rem;
    height: 1.6rem;
    background-color: #000000;
    border-radius: 50%;
    transition: transform 0.5s cubic-bezier(0.25, 0.1, 0.25, 1);
}

.fs_checkbox-5_wrapper.checked .fs_checkbox-5_dot {
    transform: translateX(1.9rem);
    background-color: #ffffff;
}

.fs_checkbox-5_wrapper.checked .fs_checkbox-5_mask {
    background-color: #16a34a;
}
```

### Pricing Card Structure

-   Header with plan name
-   Price with period
-   Feature list with checkmarks
-   CTA button
-   "Popular" badge option

---

## 16. FORM STYLES

### HubSpot Form Integration

```css
.hs-form-booleancheckbox {
    display: flex;
    align-items: center;
    font-size: 0.795rem;
}

.hs-button.primary.large {
    width: 100%;
    display: block;
    text-align: center;
    cursor: pointer;
    border: none;
}
```

### Custom Input Styling

-   Border radius: 0.5rem
-   Padding: 0.75rem 1rem
-   Focus state: Blue outline

---

## 17. RESPONSIVE BREAKPOINTS

```css
/* Desktop */
@media (min-width: 992px) {
}

/* Tablet */
@media (max-width: 991px) {
}

/* Mobile Landscape */
@media (max-width: 767px) {
}

/* Mobile Portrait */
@media (max-width: 479px) {
}
```

### Visibility Classes

-   `.hide` - Always hidden
-   `.hide-tablet` - Hidden on tablet and below
-   `.hide-mobile-landscape` - Hidden on mobile landscape and below
-   `.hide-mobile` - Hidden on mobile only
-   `.show-tablet` - Only visible on tablet and below
-   `.show-mobile-landscape` - Only visible on mobile landscape and below

---

## 18. ICONS & SVG PATTERNS

### Industry Selector Component

A fixed position dropdown in the bottom-right corner allows users to switch between industry templates:

```tsx
<div class="fixed bottom-4 right-4 z-50">
    <div class="bg-white rounded-xl shadow-card-hover p-4">
        <p class="text-xs text-neutral-500 mb-2 uppercase tracking-wider">
            Switch Industry
        </p>
        <select
            id="industry-selector"
            class="w-full px-3 py-2 rounded-lg border border-neutral-200"
        >
            <option value="accounting" selected>
                Accounting Firm
            </option>
            <option value="law">Law Firm</option>
            <option value="healthcare">Healthcare Practice</option>
            <option value="consulting">Consulting Firm</option>
            <option value="financial">Financial Advisory</option>
            <option value="realestate">Real Estate Agency</option>
        </select>
    </div>
</div>
```

**Features:**

-   Positioned fixed in bottom-right corner
-   Shows current selected industry
-   Navigates to industry-specific pages (/accounting/, /law/, etc.)
-   Maintains consistent styling across all pages
-   Updates all page content including colors, copy, services, and testimonials

### Icon Embed Classes

-   `.icon-embed-xxsmall` - ~12px
-   `.icon-embed-xsmall` - ~16px
-   `.icon-embed-small` - ~20px
-   `.icon-embed-medium` - ~24px

### Common SVG Icons

-   Arrow (right, down, diagonal)
-   Checkmark
-   Close (X)
-   Globe (language)
-   Menu hamburger

### Icon Color

Icons use `currentColor` for dynamic theming:

```html
<path stroke="currentColor" />
```

---

## 19. ACCESSIBILITY FEATURES

### Skip Link

```html
<a id="skip-link" href="#main" class="skiptomain"> Skip to main content </a>
```

### Screen Reader Only

```css
.sr-only {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
}
```

### Focus States

```css
*[tabindex]:focus-visible {
    outline: 0.125rem solid #4d65ff;
    outline-offset: 0.125rem;
}
```

### ARIA Labels

-   `aria-label` on buttons and links
-   `role="button"` on interactive elements
-   `aria-expanded` on dropdowns
-   `aria-controls` for tab panels

---

## 20. THIRD-PARTY INTEGRATIONS

1. **Intercom** - Chat widget
2. **HubSpot** - Forms and CRM
3. **Google Tag Manager** - Analytics
4. **Usercentrics** - Cookie consent
5. **Finsweet Attributes** - CMS enhancements
6. **Swiper** - Carousels
7. **GSAP** - Animations

---

## 21. PERFORMANCE OPTIMIZATIONS

### Lazy Loading

```html
<img loading="lazy" />
```

### Preconnect

```html
<link rel="preconnect" href="https://cdn.prod.website-files.com" />
```

### DNS Prefetch

```html
<link rel="dns-prefetch" href="//app.usercentrics.eu" />
```

### Deferred Scripts

```html
<script defer src="..."></script>
```

### Event-based Loading

GTM and Analytics load on user interaction (scroll, touch, mousemove)

---

## 22. KEY DESIGN PRINCIPLES OBSERVED

1. **Minimalist Elegance**: Clean layouts with ample white space
2. **Professional Color Palette**: Dark grays with bright accent colors
3. **Micro-interactions**: Subtle hover effects enhance engagement
4. **Visual Hierarchy**: Clear typography scale guides users
5. **Trust Signals**: Logos, reviews, and certifications prominently displayed
6. **Mobile-First Responsive**: All elements adapt gracefully
7. **Consistent Spacing**: Systematic use of spacer components
8. **Branded Components**: Distinctive card and button designs
9. **Dynamic Backgrounds**: Color transitions create visual interest
10. **Performance Focus**: Optimized loading and rendering
11. **Variable Typography**: Mixed font weights create sophistication and emphasis
12. **Industry Templating**: Reusable component system with industry-specific customization

---

## 23. ASTRO-REACT IMPLEMENTATION

### Technology Stack

-   **Framework**: Astro 4.16 with React 18 islands
-   **Styling**: Tailwind CSS 3.4
-   **Animations**: Framer Motion 11.2
-   **Icons**: Lucide React 0.400
-   **Font**: Space Grotesk from Google Fonts
-   **Build Tool**: Vite

### Design System Architecture

```
src/
├── config/
│   └── industries.ts          # 6 industry configurations
├── components/
│   ├── ui/                    # Reusable UI components
│   │   ├── Button.tsx
│   │   ├── Card.tsx
│   │   ├── Badge.tsx
│   │   ├── VariableWeightText.tsx
│   │   └── ...
│   ├── layout/
│   │   └── Navigation.tsx
│   └── sections/              # Page sections
│       ├── Hero.tsx
│       ├── Services.tsx
│       ├── Benefits.tsx
│       ├── Testimonials.tsx
│       ├── CTA.tsx
│       └── ...
├── pages/
│   ├── index.astro            # Home with industry selector
│   ├── accounting/index.astro
│   ├── law/index.astro
│   ├── healthcare/index.astro
│   ├── consulting/index.astro
│   ├── financial/index.astro
│   └── realestate/index.astro
├── styles/
│   └── global.css             # Global styles, Space Grotesk
└── layouts/
    └── BaseLayout.astro       # Root layout with font import
```

### Industry Configuration System

Each industry has customizable:

-   Brand colors (primary, secondary, accent)
-   Copy (headlines, descriptions, CTAs)
-   Services (3-5 per industry)
-   Benefits (stats, features, or bento variants)
-   Testimonials (3-5 per industry)
-   Trust badges/logos

---

## 24. COMPONENT VARIANTS

### Hero Component

-   `variant="default"` - Two-column layout with image
-   `variant="centered"` - Centered text layout
-   `variant="split"` - 50/50 split layout
-   `headlineSegments` prop for variable-weight text

### Benefits Component

-   `variant="stats"` - Statistics display
-   `variant="features"` - Feature list
-   `variant="bento"` - Bento grid layout

### Testimonials Component

-   `variant="carousel"` - Scrolling carousel
-   `variant="grid"` - Grid of testimonials
-   `variant="featured"` - Single featured testimonial

### CTA Component

-   `variant="default"` - Standard CTA section
-   Multiple customization options for copy and buttons

---

## NEXT STEPS: IMPLEMENTATION

The Astro-React professional agency template implements these design patterns for:

-   ✅ Accounting Firms
-   ✅ Law Firms
-   ✅ Healthcare Providers
-   ✅ Consulting Firms
-   ✅ Financial Advisory
-   ✅ Real Estate Agencies

Each template features:

-   ✅ Customizable color themes per industry
-   ✅ Industry-specific content sections
-   ✅ Modular component library with React
-   ✅ SEO-optimized structure
-   ✅ Accessibility compliance
-   ✅ Variable font weight typography
-   ✅ Industry selector for easy switching
-   ✅ Framer Motion animations
-   ✅ Responsive design with Tailwind CSS
-   ✅ Fluid typography system
