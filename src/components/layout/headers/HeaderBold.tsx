import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowRight } from 'lucide-react';
import Container from '../../ui/Container';
import type { IndustryConfig } from '@/config/industries';

const hexToRgba = (hex: string, alpha = 1) => {
  const sanitized = hex?.replace('#', '');
  if (!sanitized || (sanitized.length !== 3 && sanitized.length !== 6)) {
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

interface HeaderProps {
  industry: IndustryConfig;
}

const HeaderBold: React.FC<HeaderProps> = ({ industry }) => {
  const [isOpen, setIsOpen] = useState(false);

  const isDarkMode = industry.themeMode === 'dark';
  const themeSurface = industry.themeColors?.surface || (isDarkMode ? '#111827' : '#ffffff');
  const themeBackground = industry.themeColors?.background || (isDarkMode ? '#0b1120' : '#f8fafc');
  const themeText = industry.themeColors?.text || (isDarkMode ? '#f8fafc' : '#0f172a');
  const borderColor = isDarkMode ? 'rgba(248, 250, 252, 0.12)' : 'rgba(15, 23, 42, 0.08)';
  const headerBg = hexToRgba(themeSurface, isDarkMode ? 0.98 : 0.9);
  const overlayBg = industry.colors.primaryDark || themeBackground;

  const menuItems = [
    { label: 'Projects', href: '#projects' },
    { label: 'Expertise', href: '#expertise' },
    { label: 'Agency', href: '#agency' },
    { label: 'Careers', href: '#careers' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <>
      <header 
        className="fixed top-0 left-0 right-0 z-50 py-6 backdrop-blur-md border-b transition-all duration-300"
        style={{ backgroundColor: headerBg, borderColor, color: themeText }}
      >
        <Container>
          <div className="flex items-center justify-between">
            <a href="/" className="text-3xl font-black uppercase tracking-tighter" style={{ fontFamily: 'var(--font-heading)' }}>
              {industry.name}
            </a>

            <button
              onClick={() => setIsOpen(true)}
              className="flex items-center gap-2 text-sm font-bold uppercase tracking-widest hover:opacity-80 transition-opacity"
              style={{ color: themeText }}
            >
              Menu <Menu size={24} />
            </button>
          </div>
        </Container>
      </header>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'tween', duration: 0.5, ease: 'circOut' }}
            className="fixed inset-0 z-[60] flex flex-col"
            style={{ backgroundColor: overlayBg, color: '#ffffff' }}
          >
            <div className="p-6 flex justify-between items-center">
              <span className="text-3xl font-black uppercase tracking-tighter" style={{ fontFamily: 'var(--font-heading)' }}>{industry.name}</span>
              <button
                onClick={() => setIsOpen(false)}
                className="flex items-center gap-2 text-sm font-bold uppercase tracking-widest hover:opacity-70 transition-opacity"
              >
                Close <X size={24} />
              </button>
            </div>

            <div className="flex-1 flex items-center justify-center">
              <nav className="flex flex-col gap-2">
                {menuItems.map((item, idx) => (
                  <motion.a
                    key={item.label}
                    href={item.href}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 + idx * 0.1 }}
                    onClick={() => setIsOpen(false)}
                    className="text-5xl md:text-7xl font-black uppercase tracking-tighter transition-all flex items-center gap-4 group"
                    style={{ WebkitTextStroke: '1px transparent' }}
                  >
                    {item.label}
                    <ArrowRight className="opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" size={48} />
                  </motion.a>
                ))}
              </nav>
            </div>

            <div className="p-6 border-t border-white/20 flex justify-between text-sm text-white/70 uppercase tracking-wider">
              <span>© 2024 {industry.name}</span>
              <div className="flex gap-4">
                <a href="#" className="hover:text-white">Instagram</a>
                <a href="#" className="hover:text-white">LinkedIn</a>
                <a href="#" className="hover:text-white">Twitter</a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default HeaderBold;
