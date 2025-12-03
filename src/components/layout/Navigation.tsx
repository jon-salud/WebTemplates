import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown } from 'lucide-react';
import Button from '../ui/Button';
import Container from '../ui/Container';
import type { IndustryConfig } from '@/config/industries';

const hexToRgba = (hex: string, alpha = 1) => {
  const sanitized = hex?.replace('#', '');
  if (!sanitized || (sanitized.length !== 6 && sanitized.length !== 3)) {
    return `rgba(15, 23, 42, ${alpha})`;
  }

  const expand = sanitized.length === 3
    ? sanitized.split('').map((char) => `${char}${char}`).join('')
    : sanitized;

  const bigint = parseInt(expand, 16);
  const r = (bigint >> 16) & 255;
  const g = (bigint >> 8) & 255;
  const b = bigint & 255;

  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
};

interface NavItem {
  label: string;
  href: string;
  children?: Array<{
    label: string;
    href: string;
    description?: string;
  }>;
}

interface NavigationProps {
  industry: IndustryConfig;
  logo?: React.ReactNode;
  navItems?: NavItem[];
}

const defaultNavItems: NavItem[] = [
  { label: 'Home', href: '/' },
  {
    label: 'Services',
    href: '#services',
    children: [
      { label: 'All Services', href: '#services', description: 'View our complete service offerings' },
      { label: 'Consultation', href: '#consultation', description: 'Book a free consultation' },
    ],
  },
  { label: 'About', href: '#about' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'Contact', href: '#contact' },
];

const Navigation: React.FC<NavigationProps> = ({
  industry,
  logo,
  navItems = defaultNavItems,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const isDarkMode = industry.themeMode === 'dark';
  const themeBackground = industry.themeColors?.background || (isDarkMode ? '#0b1120' : '#ffffff');
  const themeSurface = industry.themeColors?.surface || (isDarkMode ? '#111827' : '#ffffff');
  const themeText = industry.themeColors?.text || (isDarkMode ? '#f8fafc' : '#0f172a');
  const translucentSurface = hexToRgba(themeSurface, isDarkMode ? 0.95 : 0.9);
  const translucentBackground = hexToRgba(themeBackground, 0.65);
  const borderColor = isDarkMode ? 'rgba(248, 250, 252, 0.15)' : 'rgba(15, 23, 42, 0.08)';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <motion.header
      className="fixed top-0 left-0 right-0 z-50 border-b backdrop-blur-md transition-all duration-300"
      style={{
        backgroundColor: isScrolled ? translucentSurface : translucentBackground,
        borderBottomColor: isScrolled ? borderColor : 'transparent',
        color: themeText,
      }}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Container>
        <nav className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="/" className="flex items-center gap-2">
            {logo || (
              <span
                className="text-2xl font-bold"
                style={{ color: industry.colors.primary, fontFamily: 'var(--font-heading)' }}
              >
                {industry.name}
              </span>
            )}
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => item.children && setActiveDropdown(item.label)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <a
                  href={item.href}
                  className="flex items-center gap-1 text-sm font-medium transition-colors"
                  style={{ color: themeText }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = industry.colors.primary)}
                  onMouseLeave={(e) => (e.currentTarget.style.color = themeText)}
                  aria-haspopup={item.children ? 'true' : undefined}
                  aria-expanded={item.children && activeDropdown === item.label ? 'true' : 'false'}
                >
                  {item.label}
                  {item.children && (
                    <ChevronDown className="w-4 h-4" aria-hidden="true" />
                  )}
                </a>

                {/* Dropdown Menu */}
                <AnimatePresence>
                  {item.children && activeDropdown === item.label && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full left-0 pt-2"
                    >
                      <div
                        className="rounded-xl shadow-card-hover border p-2 min-w-[240px]"
                        style={{
                          backgroundColor: themeSurface,
                          borderColor: borderColor,
                          color: themeText,
                        }}
                      >
                        {item.children.map((child) => (
                          <a
                            key={child.label}
                            href={child.href}
                            className="block px-4 py-3 rounded-lg transition-colors"
                            style={{ color: themeText }}
                          >
                            <span className="block text-sm font-medium" style={{ color: themeText }}>
                              {child.label}
                            </span>
                            {child.description && (
                              <span className="block text-xs opacity-70" style={{ color: themeText }}>
                                {child.description}
                              </span>
                            )}
                          </a>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-4" style={{ color: themeText }}>
            <Button variant="ghost" size="sm">
              Sign In
            </Button>
            <Button
              variant="primary"
              size="sm"
              style={{ backgroundColor: industry.colors.primary }}
            >
              {industry.hero.cta}
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="lg:hidden p-2 rounded-lg transition-colors"
            style={{ color: themeText, backgroundColor: 'transparent' }}
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isOpen}
          >
            {isOpen ? (
              <X className="w-6 h-6" aria-hidden="true" />
            ) : (
              <Menu className="w-6 h-6" aria-hidden="true" />
            )}
          </button>
        </nav>
      </Container>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden"
            style={{ backgroundColor: themeSurface, borderTop: `1px solid ${borderColor}` }}
          >
            <Container>
              <div className="py-4 space-y-2">
                {navItems.map((item) => (
                  <div key={item.label}>
                    <a
                      href={item.href}
                      onClick={closeMenu}
                      className="block px-4 py-3 font-medium rounded-lg transition-colors"
                      style={{ color: themeText }}
                    >
                      {item.label}
                    </a>
                    {item.children && (
                      <div className="pl-4 space-y-1">
                        {item.children.map((child) => (
                          <a
                            key={child.label}
                            href={child.href}
                            onClick={closeMenu}
                            className="block px-4 py-2 text-sm rounded-lg transition-colors"
                            style={{ color: themeText, opacity: 0.75 }}
                          >
                            {child.label}
                          </a>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
                <div className="pt-4 space-y-2" style={{ borderTop: `1px solid ${borderColor}` }}>
                  <Button variant="secondary" fullWidth>
                    Sign In
                  </Button>
                  <Button
                    variant="primary"
                    fullWidth
                    style={{ backgroundColor: industry.colors.primary }}
                  >
                    {industry.hero.cta}
                  </Button>
                </div>
              </div>
            </Container>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Navigation;
