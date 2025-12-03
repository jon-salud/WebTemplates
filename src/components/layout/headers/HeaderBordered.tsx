import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import type { IndustryConfig } from '@/config/industries';
import { getThemeTokens, hexToRgba } from '@/utils/theme';

interface HeaderProps {
  industry: IndustryConfig;
}

const HeaderBordered: React.FC<HeaderProps> = ({ industry }) => {
  const [isOpen, setIsOpen] = useState(false);
  const theme = getThemeTokens(industry);
  const surfaceBg = hexToRgba(theme.surface, theme.isDarkMode ? 0.95 : 1);
  const navColor = hexToRgba(theme.text, 0.85);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b-2" style={{ backgroundColor: surfaceBg, borderColor: theme.border }}>
      <div className="flex h-16 md:h-20">
        {/* Logo Section */}
        <div 
          className="flex-shrink-0 px-6 md:px-8 flex items-center border-r-2 border-black"
          style={{ backgroundColor: industry.colors.primary }}
        >
          <a href="/" className="text-xl md:text-2xl font-black uppercase tracking-tighter text-white" style={{ fontFamily: 'var(--font-heading)' }}>
            {industry.name}
          </a>
        </div>

        {/* Nav Section */}
        <div
          className="flex-1 flex items-center justify-end md:justify-between px-6 md:px-8"
          style={{ backgroundColor: surfaceBg, color: theme.text }}
        >
          <nav className="hidden md:flex items-center gap-8">
            {[
              { href: '#work', label: 'Work' },
              { href: '#studio', label: 'Studio' },
              { href: '#news', label: 'News' },
            ].map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-base font-bold uppercase tracking-wide decoration-2 underline-offset-4 transition-colors hover:underline"
                style={{ color: navColor }}
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-6">
            <a
              href="#contact"
              className="px-6 py-2 font-bold uppercase text-sm transition-colors border-2"
              style={{
                backgroundColor: theme.isDarkMode ? 'transparent' : '#0f172a',
                color: theme.isDarkMode ? theme.text : '#ffffff',
                borderColor: theme.isDarkMode ? theme.text : 'transparent',
              }}
            >
              Let's Talk
            </a>
          </div>

          <button
            className="md:hidden p-2 border-2 transition-colors"
            style={{ borderColor: theme.text, color: theme.text }}
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-b-2"
            style={{ backgroundColor: surfaceBg, borderColor: theme.border }}
          >
            <div className="flex flex-col">
              {[
                { href: '#work', label: 'Work' },
                { href: '#studio', label: 'Studio' },
                { href: '#news', label: 'News' },
              ].map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="p-4 font-bold uppercase transition-colors"
                  style={{ borderBottom: `2px solid ${theme.border}`, color: theme.text }}
                >
                  {item.label}
                </a>
              ))}
              <a
                href="#contact"
                className="p-4 font-bold uppercase transition-colors"
                style={{ backgroundColor: industry.colors.primary, color: '#ffffff' }}
              >
                Let's Talk
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default HeaderBordered;
