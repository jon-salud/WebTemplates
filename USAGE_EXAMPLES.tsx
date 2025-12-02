// ============================================================================
// USAGE EXAMPLES - New Accessibility Components
// ============================================================================
// This file shows how to use the newly implemented accessibility features
// in your pages and components.
// ============================================================================

// ============================================================================
// 1. SKIP LINK - Keyboard Navigation
// ============================================================================
// Already implemented in BaseLayout.astro
// Automatically included on every page
// Press Tab on page load to see it appear

// To add skip link in a React component:
import SkipLink from '@/components/ui/SkipLink';

function MyPage() {
  return (
    <>
      <SkipLink />
      <Navigation />
      <main id="main-content">
        {/* Your content */}
      </main>
    </>
  );
}

// ============================================================================
// 2. OPTIMIZED IMAGES - Performance & Accessibility
// ============================================================================
import OptimizedImage from '@/components/ui/OptimizedImage';

// Hero Image (Above the fold - load immediately)
<OptimizedImage
  src="/images/hero-accounting.jpg"
  alt="Professional accountant reviewing financial statements with client"
  priority={true}
  loading="eager"
  width={1920}
  height={1080}
  className="w-full h-full object-cover"
/>

// Service Icon (Below fold - lazy load)
<OptimizedImage
  src="/images/service-tax-planning.jpg"
  alt="Tax planning documents and calculator on desk"
  loading="lazy"
  width={400}
  height={300}
  className="rounded-lg"
/>

// Team Photo with responsive sizing
<OptimizedImage
  src="/images/team-photo.jpg"
  alt="Our expert team of 5 financial advisors in modern office"
  loading="lazy"
  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
  className="w-full rounded-2xl shadow-lg"
/>

// Decorative image (empty alt)
<OptimizedImage
  src="/images/pattern-background.svg"
  alt=""
  loading="lazy"
  className="absolute inset-0 opacity-10"
/>

// ============================================================================
// 3. LOADING STATES - Better UX
// ============================================================================

// --- BUTTON LOADING ---
import Button from '@/components/ui/Button';

function ContactSection() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  return (
    <Button
      variant="primary"
      loading={isSubmitting}
      icon={<Send />}
      onClick={handleSubmit}
    >
      {isSubmitting ? 'Sending...' : 'Send Message'}
    </Button>
  );
}

// --- SPINNER COMPONENT ---
import Spinner from '@/components/ui/Spinner';

function LoadingScreen() {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="text-center">
        <Spinner size="xl" color="#0066CC" />
        <p className="mt-4 text-neutral-600">Loading your dashboard...</p>
      </div>
    </div>
  );
}

// --- SKELETON LOADERS ---
import SkeletonLoader from '@/components/ui/SkeletonLoader';

// Loading services grid
function ServicesSection() {
  const [isLoading, setIsLoading] = useState(true);
  const [services, setServices] = useState([]);

  if (isLoading) {
    return (
      <div className="grid md:grid-cols-3 gap-6">
        {[1, 2, 3].map((i) => (
          <SkeletonLoader key={i} variant="card" />
        ))}
      </div>
    );
  }

  return (
    <div className="grid md:grid-cols-3 gap-6">
      {services.map((service) => (
        <ServiceCard key={service.id} {...service} />
      ))}
    </div>
  );
}

// Loading testimonials
function TestimonialsList() {
  const [isLoading, setIsLoading] = useState(true);

  if (isLoading) {
    return (
      <div className="space-y-6">
        {[1, 2, 3].map((i) => (
          <div key={i} className="flex items-start gap-4">
            <SkeletonLoader variant="circular" width={64} height={64} />
            <div className="flex-1">
              <SkeletonLoader variant="text" width="60%" />
              <SkeletonLoader variant="text" width="100%" count={2} />
            </div>
          </div>
        ))}
      </div>
    );
  }

  // ... render actual testimonials
}

// ============================================================================
// 4. FORM VALIDATION - ContactForm Component
// ============================================================================
import ContactForm from '@/components/forms/ContactForm';

// Basic usage (validation already built-in)
<ContactForm industry={industry} />

// Minimal variant
<ContactForm industry={industry} variant="minimal" />

// Detailed variant with service selector
<ContactForm industry={industry} variant="detailed" />

// The form automatically includes:
// - Real-time validation on blur
// - Visual error states (red border, error icon)
// - Accessible error messages with ARIA
// - Loading state during submission
// - Success confirmation screen

// ============================================================================
// 5. ARIA LABELS - Icon-Only Buttons
// ============================================================================

// Navigation menu toggle
<button
  onClick={toggleMenu}
  aria-label={isOpen ? 'Close menu' : 'Open menu'}
  aria-expanded={isOpen}
  className="p-2 rounded-lg"
>
  {isOpen ? (
    <X className="w-6 h-6" aria-hidden="true" />
  ) : (
    <Menu className="w-6 h-6" aria-hidden="true" />
  )}
</button>

// Carousel navigation
<button
  onClick={prevSlide}
  aria-label="Previous slide"
  className="p-3 rounded-full bg-white shadow"
>
  <ChevronLeft className="w-5 h-5" aria-hidden="true" />
</button>

// Pagination dots
<button
  onClick={() => goToSlide(index)}
  aria-label={`Go to slide ${index + 1}`}
  aria-current={index === currentIndex ? 'true' : 'false'}
  className="w-2 h-2 rounded-full"
/>

// Play video button
<button
  onClick={playVideo}
  aria-label="Play video"
  className="flex items-center justify-center w-16 h-16 rounded-full"
>
  <Play className="w-8 h-8" aria-hidden="true" />
</button>

// Social media links
<a
  href="https://twitter.com/company"
  aria-label="Follow us on Twitter"
  className="p-2 rounded-lg"
>
  <Twitter className="w-5 h-5" aria-hidden="true" />
</a>

// ============================================================================
// 6. DROPDOWN MENUS - Accessible Navigation
// ============================================================================

<div
  onMouseEnter={() => setIsOpen(true)}
  onMouseLeave={() => setIsOpen(false)}
>
  <button
    aria-haspopup="true"
    aria-expanded={isOpen}
    className="flex items-center gap-1"
  >
    Services
    <ChevronDown className="w-4 h-4" aria-hidden="true" />
  </button>

  {isOpen && (
    <div role="menu" className="absolute top-full left-0 mt-2">
      <a href="/service-1" role="menuitem">
        Service 1
      </a>
      <a href="/service-2" role="menuitem">
        Service 2
      </a>
    </div>
  )}
</div>

// ============================================================================
// 7. FORM VALIDATION - Custom Implementation
// ============================================================================

function CustomForm() {
  const [formData, setFormData] = useState({ email: '' });
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});

  const validateEmail = (email: string) => {
    if (!email) return 'Email is required';
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return 'Please enter a valid email address';
    }
    return '';
  };

  const handleBlur = (field: string) => {
    setTouched((prev) => ({ ...prev, [field]: true }));
    const error = validateEmail(formData[field]);
    setErrors((prev) => ({ ...prev, [field]: error }));
  };

  return (
    <div>
      <label htmlFor="email">Email Address *</label>
      <input
        type="email"
        id="email"
        value={formData.email}
        onChange={(e) => setFormData({ email: e.target.value })}
        onBlur={() => handleBlur('email')}
        className={touched.email && errors.email ? 'border-red-300' : ''}
        aria-invalid={touched.email && errors.email ? 'true' : 'false'}
        aria-describedby={touched.email && errors.email ? 'email-error' : undefined}
      />
      {touched.email && errors.email && (
        <p id="email-error" className="text-red-600 text-sm mt-1" role="alert">
          ⚠ {errors.email}
        </p>
      )}
    </div>
  );
}

// ============================================================================
// 8. MAIN CONTENT WRAPPER - Page Structure
// ============================================================================
import MainContent from '@/components/ui/MainContent';

function Page() {
  return (
    <>
      <SkipLink />
      <Navigation />
      <MainContent>
        <Hero />
        <Services />
        <Testimonials />
      </MainContent>
      <Footer />
    </>
  );
}

// ============================================================================
// 9. COMPLETE PAGE EXAMPLE - Putting It All Together
// ============================================================================

// In your Astro page file (e.g., src/pages/services/index.astro)
---
import BaseLayout from '@/layouts/BaseLayout.astro';
import Navigation from '@/components/layout/Navigation';
import OptimizedImage from '@/components/ui/OptimizedImage';
import ContactForm from '@/components/forms/ContactForm';
import SkeletonLoader from '@/components/ui/SkeletonLoader';
import { getIndustryConfig } from '@/config/industries';

const industry = getIndustryConfig('accounting');
---

<BaseLayout 
  title="Our Services"
  description="Professional accounting services"
  industryConfig={industry}
>
  {/* Skip link automatically included in BaseLayout */}
  
  <Navigation client:load industry={industry} />
  
  <main id="main-content" class="flex-1">
    {/* Hero with optimized image */}
    <section class="relative h-screen">
      <OptimizedImage
        src="/images/hero-services.jpg"
        alt="Accountant working with client on financial planning"
        priority={true}
        loading="eager"
        width={1920}
        height={1080}
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div class="relative z-10">
        <h1>Our Services</h1>
      </div>
    </section>

    {/* Services grid with skeleton loader */}
    <section>
      <div class="grid md:grid-cols-3 gap-6">
        {/* Replace with actual loading state */}
        <SkeletonLoader variant="card" />
        <SkeletonLoader variant="card" />
        <SkeletonLoader variant="card" />
      </div>
    </section>

    {/* Contact form with validation */}
    <section>
      <h2>Get in Touch</h2>
      <ContactForm client:load industry={industry} variant="detailed" />
    </section>
  </main>

  <Footer />
</BaseLayout>

// ============================================================================
// 10. TESTING YOUR IMPLEMENTATION
// ============================================================================

// Keyboard Navigation Test:
// 1. Press Tab key on page load → Skip link should appear
// 2. Press Enter → Should jump to main content
// 3. Continue pressing Tab → Should move through all interactive elements
// 4. Verify visible focus ring on each element

// Screen Reader Test (VoiceOver on Mac):
// 1. Press Cmd + F5 to enable VoiceOver
// 2. Navigate with Tab key
// 3. Verify each button has descriptive label
// 4. Verify form errors are announced
// 5. Verify images have descriptive alt text

// Visual Test:
// 1. Submit form with errors → Red borders should appear
// 2. Check color contrast with browser DevTools
// 3. Test responsive images at different screen sizes
// 4. Verify skeleton loaders appear during loading

// Performance Test:
// 1. Open DevTools > Lighthouse
// 2. Run accessibility audit → Should score 100
// 3. Check Network tab → Verify lazy loading
// 4. Check images use AVIF/WebP formats

// ============================================================================
// END OF USAGE EXAMPLES
// ============================================================================
