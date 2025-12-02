# Accessibility Implementation Guide

This guide covers all accessibility features implemented in the professional agency template and how to use them.

---

## ✅ What's Been Implemented

### 1. Skip Navigation Link

**Location:** [src/components/ui/SkipLink.tsx](src/components/ui/SkipLink.tsx)

**Purpose:** Allows keyboard users to bypass repetitive navigation and jump directly to main content.

**Usage:**

```astro
---
import SkipLink from '../components/ui/SkipLink';
---

<SkipLink />
<Navigation client:load industry={industry} />
<main id="main-content">
  <!-- Your content -->
</main>
```

**How it works:**

-   Hidden by default (`.sr-only`)
-   Becomes visible when focused via Tab key
-   Links to `#main-content` ID on main element
-   Styled with primary brand color

**Keyboard Navigation:**

-   Press `Tab` key immediately after page load
-   Link appears at top-left of viewport
-   Press `Enter` to skip to main content

---

### 2. Optimized Images with Lazy Loading

**Location:** [src/components/ui/OptimizedImage.tsx](src/components/ui/OptimizedImage.tsx)

**Purpose:** Implements modern image loading best practices for performance and accessibility.

**Features:**

-   ✅ Multiple format support (AVIF, WebP, fallback)
-   ✅ Lazy loading for below-the-fold images
-   ✅ Responsive sizing with srcset
-   ✅ Proper alt text for screen readers
-   ✅ Priority loading for above-the-fold images

**Usage:**

```tsx
import OptimizedImage from '@/components/ui/OptimizedImage';

// Hero image (above fold) - load immediately
<OptimizedImage
  src="/images/hero-image.jpg"
  alt="Professional accountant reviewing financial documents"
  priority={true}
  loading="eager"
  width={1920}
  height={1080}
  className="w-full h-full"
  objectFit="cover"
/>

// Below-the-fold image - lazy load
<OptimizedImage
  src="/images/team-photo.jpg"
  alt="Our expert team of financial advisors"
  loading="lazy"
  width={800}
  height={600}
  className="rounded-2xl"
/>

// Responsive sizing
<OptimizedImage
  src="/images/service-icon.jpg"
  alt="Tax planning services"
  loading="lazy"
  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
/>
```

**Best Practices:**

-   Always include descriptive `alt` text
-   Use `priority={true}` for hero images only
-   Use `loading="lazy"` for all other images
-   Specify width/height to prevent layout shift
-   Use descriptive alt text (not "image", "photo", etc.)

**Alt Text Guidelines:**

```tsx
// ❌ Bad alt text
<OptimizedImage src="..." alt="image" />
<OptimizedImage src="..." alt="photo of person" />

// ✅ Good alt text
<OptimizedImage src="..." alt="Financial advisor explaining investment portfolio to client" />
<OptimizedImage src="..." alt="Modern office interior with glass conference room" />

// Decorative images
<OptimizedImage src="..." alt="" /> {/* Empty alt for decorative images */}
```

---

### 3. ARIA Labels for Icon Buttons

**Locations:**

-   [src/components/layout/Navigation.tsx](src/components/layout/Navigation.tsx)
-   [src/components/sections/Testimonials.tsx](src/components/sections/Testimonials.tsx)

**Purpose:** Provides text alternatives for icon-only buttons so screen reader users understand their purpose.

**Implementation Examples:**

**Navigation Menu Toggle:**

```tsx
<button
    onClick={toggleMenu}
    aria-label={isOpen ? "Close menu" : "Open menu"}
    aria-expanded={isOpen}
>
    {isOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
</button>
```

**Carousel Navigation:**

```tsx
<button
  onClick={prevTestimonial}
  aria-label="Previous testimonial"
>
  <ChevronLeft aria-hidden="true" />
</button>

<button
  onClick={() => setActiveIndex(index)}
  aria-label={`Go to testimonial ${index + 1}`}
  aria-current={index === activeIndex ? 'true' : 'false'}
>
  <div className="dot" />
</button>

<button
  onClick={nextTestimonial}
  aria-label="Next testimonial"
>
  <ChevronRight aria-hidden="true" />
</button>
```

**Dropdown Menus:**

```tsx
<a
    href={item.href}
    aria-haspopup={item.children ? "true" : undefined}
    aria-expanded={
        item.children && activeDropdown === item.label ? "true" : "false"
    }
>
    {item.label}
    {item.children && <ChevronDown aria-hidden="true" />}
</a>
```

**ARIA Attributes Guide:**

-   `aria-label` - Provides text alternative for icon-only buttons
-   `aria-hidden="true"` - Hides decorative icons from screen readers
-   `aria-expanded` - Indicates open/closed state of expandable elements
-   `aria-haspopup` - Indicates element triggers a popup/menu
-   `aria-current` - Indicates the current item in a set
-   `aria-describedby` - Associates description text with input
-   `aria-invalid` - Indicates form field has validation error

---

### 4. Form Validation with Error States

**Location:** [src/components/forms/ContactForm.tsx](src/components/forms/ContactForm.tsx)

**Purpose:** Provides real-time validation feedback and accessible error messages.

**Features:**

-   ✅ Real-time field validation on blur
-   ✅ Visual error states (red border, error icon)
-   ✅ Descriptive error messages
-   ✅ ARIA attributes for screen reader support
-   ✅ Success confirmation screen
-   ✅ Loading states during submission

**Implementation Details:**

**Form State:**

```tsx
const [formData, setFormData] = useState<FormData>({...});
const [errors, setErrors] = useState<FormErrors>({});
const [touched, setTouched] = useState<Record<string, boolean>>({});
```

**Input with Validation:**

```tsx
<input
    type="email"
    id="email"
    name="email"
    value={formData.email}
    onChange={handleChange}
    onBlur={() => handleBlur("email")}
    className={getInputClasses("email")}
    aria-invalid={touched.email && errors.email ? "true" : "false"}
    aria-describedby={touched.email && errors.email ? "email-error" : undefined}
/>;
{
    touched.email && errors.email && (
        <motion.p
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            id="email-error"
            className="mt-1 text-sm text-red-600 flex items-center gap-1"
            role="alert"
        >
            <span>⚠</span>
            {errors.email}
        </motion.p>
    );
}
```

**Validation Rules:**

-   **Name:** Required, minimum 2 characters
-   **Email:** Required, valid email format
-   **Phone:** Optional, valid phone format if provided
-   **Message:** Required, minimum 10 characters

**Error Messages:**

-   Appear on blur (when user leaves field)
-   Clear when user starts typing
-   Animated entry/exit for smooth UX
-   Associated with input via `aria-describedby`

**Visual States:**

```css
/* Normal state */
border: 1px solid #e5e5e5;

/* Focus state */
border: transparent;
ring: 2px primary-color;

/* Error state */
border: 1px solid #fca5a5;
ring: 2px #fee2e2;
background: #fef2f2;
```

---

### 5. Loading States

**Components:**

-   [src/components/ui/Spinner.tsx](src/components/ui/Spinner.tsx)
-   [src/components/ui/SkeletonLoader.tsx](src/components/ui/SkeletonLoader.tsx)
-   [src/components/ui/Button.tsx](src/components/ui/Button.tsx) (already had loading prop)

**Purpose:** Improve perceived performance and user experience during asynchronous operations.

#### Button Loading State

**Already implemented in Button component:**

```tsx
<Button variant="primary" loading={isSubmitting} icon={<Send />}>
    {isSubmitting ? "Sending..." : "Send Message"}
</Button>
```

**Features:**

-   Spinner overlay on button
-   Original content becomes invisible
-   Button is disabled during loading
-   Maintains button dimensions (no layout shift)

#### Spinner Component

**Usage:**

```tsx
import Spinner from '@/components/ui/Spinner';

// Small spinner
<Spinner size="sm" />

// Medium (default)
<Spinner size="md" color="#0066CC" />

// Large
<Spinner size="lg" />

// Extra large
<Spinner size="xl" />

// Custom color
<Spinner size="md" color={industry.colors.primary} />
```

#### Skeleton Loader

**Usage:**

```tsx
import SkeletonLoader from '@/components/ui/SkeletonLoader';

// Loading text
<SkeletonLoader variant="text" count={3} />

// Loading circular avatar
<SkeletonLoader variant="circular" width={64} height={64} />

// Loading rectangular image
<SkeletonLoader variant="rectangular" width="100%" height={200} />

// Loading card
<SkeletonLoader variant="card" />

// Custom dimensions
<SkeletonLoader
  variant="rectangular"
  width={800}
  height={400}
  className="rounded-2xl"
/>
```

**Use Cases:**

-   **Text skeleton:** Blog post loading, testimonial loading
-   **Circular:** Avatar loading in comment sections
-   **Rectangular:** Image placeholders, video thumbnails
-   **Card:** Product cards, service cards, blog cards

**Example - Loading Services:**

```tsx
const [isLoading, setIsLoading] = useState(true);

{
    isLoading ? (
        <div className="grid md:grid-cols-3 gap-6">
            {[1, 2, 3].map((i) => (
                <SkeletonLoader key={i} variant="card" />
            ))}
        </div>
    ) : (
        <div className="grid md:grid-cols-3 gap-6">
            {services.map((service) => (
                <ServiceCard key={service.id} {...service} />
            ))}
        </div>
    );
}
```

---

## 🎯 Quick Start Checklist

When creating a new page or component, ensure:

### Images

-   [ ] Use `OptimizedImage` component instead of `<img>`
-   [ ] Include descriptive `alt` text
-   [ ] Set `priority={true}` for hero images
-   [ ] Set `loading="lazy"` for below-fold images
-   [ ] Specify width and height

### Buttons

-   [ ] Add `aria-label` to icon-only buttons
-   [ ] Set `aria-hidden="true"` on decorative icons
-   [ ] Use `loading` prop for async actions
-   [ ] Include focus states (automatically handled)

### Forms

-   [ ] Implement field validation
-   [ ] Show error messages with `role="alert"`
-   [ ] Associate errors with inputs using `aria-describedby`
-   [ ] Set `aria-invalid` on error state
-   [ ] Display loading state during submission

### Navigation

-   [ ] Include skip link before main navigation
-   [ ] Add `id="main-content"` to main element
-   [ ] Use `aria-expanded` for dropdowns
-   [ ] Set `aria-haspopup` for menu triggers
-   [ ] Ensure keyboard navigation works (Tab, Enter, Escape)

### Content Loading

-   [ ] Show skeleton loaders while fetching data
-   [ ] Use spinner for button actions
-   [ ] Prevent layout shift with proper dimensions
-   [ ] Maintain accessible loading announcements

---

## 🧪 Testing Your Implementation

### Keyboard Navigation Test

1. **Tab key navigation:**

    ```
    Tab → Skip Link appears
    Tab → First navigation item
    Tab → Continue through all interactive elements
    ```

2. **Skip link:**

    ```
    Tab → Skip link visible
    Enter → Jump to main content
    ```

3. **Dropdown menus:**
    ```
    Tab → Menu item with dropdown
    Enter → Open dropdown
    Tab → Navigate dropdown items
    Escape → Close dropdown
    ```

### Screen Reader Test

Use VoiceOver (Mac) or NVDA (Windows):

1. **Turn on screen reader:**

    - Mac: `Cmd + F5`
    - Windows: Download NVDA (free)

2. **Test announcements:**

    - Skip link: "Skip to main content, link"
    - Icon buttons: Descriptive label (e.g., "Close menu, button")
    - Form errors: Error message announced with "Alert"
    - Loading states: "Loading" or "Status: Loading"

3. **Navigate with keyboard:**
    - Headings: `H` key
    - Landmarks: `D` key
    - Links: `Tab` key
    - Forms: `F` key

### Visual Accessibility Test

1. **Color contrast:**

    - Use [WebAIM Contrast Checker](https://webaim.org/resources/contrastchecker/)
    - Body text: Minimum 4.5:1
    - Large text: Minimum 3:1
    - Error text: Ensure red has sufficient contrast

2. **Focus indicators:**

    - Tab through page
    - Verify visible focus ring on all interactive elements
    - Focus ring should be 2px solid with offset

3. **Error states:**
    - Submit form with errors
    - Verify red border on error fields
    - Verify error message appears below field
    - Verify error icon is visible

### Performance Test

1. **Lighthouse audit:**

    ```bash
    npm run build
    npm run preview
    # Open DevTools > Lighthouse > Run audit
    ```

2. **Target scores:**

    - Performance: 90+
    - Accessibility: 100
    - Best Practices: 90+
    - SEO: 90+

3. **Image optimization check:**
    - Network tab > Filter by Img
    - Verify AVIF/WebP formats loaded
    - Verify lazy loading (images load on scroll)
    - Check total image size < 2MB per page

---

## 📚 Additional Resources

### WCAG 2.1 Guidelines

-   [WCAG Overview](https://www.w3.org/WAI/standards-guidelines/wcag/)
-   [Understanding WCAG 2.1](https://www.w3.org/WAI/WCAG21/Understanding/)

### Testing Tools

-   **axe DevTools** - Browser extension for accessibility testing
-   **WAVE** - Web accessibility evaluation tool
-   **Lighthouse** - Built into Chrome DevTools
-   **VoiceOver** - macOS screen reader (Cmd + F5)
-   **NVDA** - Free Windows screen reader

### Best Practices

-   [MDN Accessibility](https://developer.mozilla.org/en-US/docs/Web/Accessibility)
-   [A11y Project](https://www.a11yproject.com/)
-   [WebAIM](https://webaim.org/)
-   [Inclusive Components](https://inclusive-components.design/)

---

## 🐛 Troubleshooting

### Skip link not visible on focus

**Problem:** Skip link doesn't appear when pressing Tab
**Solution:** Check that `.sr-only` and focus variants are properly defined in Tailwind config

### Screen reader not announcing button label

**Problem:** Icon button announced as "button" without descriptive label
**Solution:** Verify `aria-label` attribute is present and icons have `aria-hidden="true"`

### Form errors not announced

**Problem:** Screen reader doesn't announce validation errors
**Solution:** Ensure error element has `role="alert"` and input has `aria-describedby` pointing to error ID

### Images loading slowly

**Problem:** Large images causing slow page load
**Solution:**

-   Use OptimizedImage component
-   Compress images before upload
-   Set appropriate width/height
-   Use AVIF/WebP formats

### Keyboard focus not visible

**Problem:** Can't see which element has focus when using Tab key
**Solution:** Ensure `focus-visible:` classes are applied or use browser's default focus ring

---

_Last updated: December 2025_
