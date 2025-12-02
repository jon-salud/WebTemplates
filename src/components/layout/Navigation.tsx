import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown } from 'lucide-react';
import Button from '../ui/Button';
import Container from '../ui/Container';
import type { IndustryConfig } from '@/config/industries';

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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-sm'
          : 'bg-transparent'
      }`}
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
                style={{ color: industry.colors.primary }}
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
                  className={`flex items-center gap-1 text-sm font-medium transition-colors ${
                    isScrolled ? 'text-neutral-700 hover:text-brand-primary' : 'text-neutral-700 hover:text-brand-primary'
                  }`}
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
                      <div className="bg-white rounded-xl shadow-card-hover border border-neutral-100 p-2 min-w-[240px]">
                        {item.children.map((child) => (
                          <a
                            key={child.label}
                            href={child.href}
                            className="block px-4 py-3 rounded-lg hover:bg-neutral-50 transition-colors"
                          >
                            <span className="block text-sm font-medium text-neutral-800">
                              {child.label}
                            </span>
                            {child.description && (
                              <span className="block text-xs text-neutral-500 mt-0.5">
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
          <div className="hidden lg:flex items-center gap-4">
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
            className="lg:hidden p-2 rounded-lg hover:bg-neutral-100 transition-colors"
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
            className="lg:hidden bg-white border-t border-neutral-100"
          >
            <Container>
              <div className="py-4 space-y-2">
                {navItems.map((item) => (
                  <div key={item.label}>
                    <a
                      href={item.href}
                      onClick={closeMenu}
                      className="block px-4 py-3 text-neutral-700 font-medium rounded-lg hover:bg-neutral-50 transition-colors"
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
                            className="block px-4 py-2 text-sm text-neutral-500 rounded-lg hover:bg-neutral-50 transition-colors"
                          >
                            {child.label}
                          </a>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
                <div className="pt-4 border-t border-neutral-100 space-y-2">
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
