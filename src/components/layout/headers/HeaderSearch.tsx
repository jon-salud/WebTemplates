import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Search, ShoppingBag } from 'lucide-react';
import Container from '../../ui/Container';
import type { IndustryConfig } from '@/config/industries';
import { getThemeTokens, hexToRgba } from '@/utils/theme';

interface HeaderProps {
  industry: IndustryConfig;
}

const HeaderSearch: React.FC<HeaderProps> = ({ industry }) => {
  const [isOpen, setIsOpen] = useState(false);
  const theme = getThemeTokens(industry);
  const inputBg = hexToRgba(theme.surface, theme.isDarkMode ? 0.4 : 1);
  const inputPlaceholder = theme.isDarkMode ? 'rgba(248, 250, 252, 0.5)' : 'rgba(15, 23, 42, 0.5)';
  const dividerColor = theme.border;

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 border-b backdrop-blur-md"
      style={{ backgroundColor: hexToRgba(theme.surface, theme.isDarkMode ? 0.9 : 0.95), borderColor: theme.border, color: theme.text }}
    >
      <Container>
        <div className="h-16 flex items-center justify-between gap-4">
          <div className="flex items-center gap-4 lg:gap-8">
            <button className="lg:hidden" onClick={() => setIsOpen(!isOpen)} style={{ color: theme.text }}>
              <Menu />
            </button>
            <a href="/" className="text-xl font-bold tracking-tight" style={{ fontFamily: 'var(--font-heading)', color: theme.text }}>
              {industry.name}
            </a>
          </div>

          <div className="flex-1 max-w-xl hidden md:block">
            <div className="relative">
              <input
                type="text"
                placeholder="Search for products, brands and more..."
                className="w-full pl-10 pr-4 py-2 border-none rounded-lg text-sm focus:ring-2 transition-all"
                style={{
                  '--tw-ring-color': industry.colors.primary,
                  backgroundColor: inputBg,
                  color: theme.text,
                } as React.CSSProperties}
              />
              <Search className="absolute left-3 top-1/2 -translate-y-1/2" size={18} style={{ color: inputPlaceholder }} />
            </div>
          </div>

          <div className="flex items-center gap-4 lg:gap-6">
            <nav className="hidden lg:flex items-center gap-6">
              {[
                { href: '#categories', label: 'Categories' },
                { href: '#deals', label: 'Deals' },
                { href: '#whats-new', label: "What's New" },
              ].map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="text-sm font-medium transition-colors"
                  style={{ color: hexToRgba(theme.text, 0.75) }}
                >
                  {item.label}
                </a>
              ))}
            </nav>
            <div className="h-6 w-px hidden lg:block" style={{ backgroundColor: dividerColor }} />
            <div className="flex items-center gap-4">
              <button className="md:hidden" style={{ color: theme.text }}>
                <Search />
              </button>
              <a href="#cart" className="relative">
                <ShoppingBag />
                <span 
                  className="absolute -top-1 -right-1 w-4 h-4 text-white text-[10px] font-bold flex items-center justify-center rounded-full"
                  style={{ backgroundColor: industry.colors.primary }}
                >2</span>
              </a>
            </div>
          </div>
        </div>
      </Container>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: '-100%' }}
            animate={{ x: 0 }}
            exit={{ x: '-100%' }}
            transition={{ type: 'tween' }}
                  className="fixed inset-y-0 left-0 w-80 z-50 shadow-2xl lg:hidden flex flex-col"
                  style={{ backgroundColor: theme.surface, color: theme.text }}
          >
                  <div className="p-4 border-b flex justify-between items-center" style={{ borderColor: theme.border }}>
                    <span className="font-bold text-lg">Menu</span>
                    <button onClick={() => setIsOpen(false)} style={{ color: theme.text }}><X /></button>
            </div>
            <div className="p-4 flex-1 overflow-y-auto">
              <div className="space-y-6">
                <div className="space-y-3">
                        <h3 className="text-xs font-bold uppercase" style={{ color: hexToRgba(theme.text, 0.6) }}>Shop</h3>
                        <a href="#" className="block font-medium" style={{ color: theme.text }}>New Arrivals</a>
                        <a href="#" className="block font-medium" style={{ color: theme.text }}>Best Sellers</a>
                        <a href="#" className="block font-medium" style={{ color: theme.text }}>Sale</a>
                </div>
                <div className="space-y-3">
                        <h3 className="text-xs font-bold uppercase" style={{ color: hexToRgba(theme.text, 0.6) }}>Account</h3>
                        <a href="#" className="block font-medium" style={{ color: theme.text }}>Sign In</a>
                        <a href="#" className="block font-medium" style={{ color: theme.text }}>Register</a>
                        <a href="#" className="block font-medium" style={{ color: theme.text }}>Order Status</a>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default HeaderSearch;
