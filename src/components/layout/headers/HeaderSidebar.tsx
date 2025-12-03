import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Home, User, Briefcase, Mail, Settings } from 'lucide-react';
import type { IndustryConfig } from '@/config/industries';
import { getThemeTokens, hexToRgba } from '@/utils/theme';

interface HeaderProps {
  industry: IndustryConfig;
}

const HeaderSidebar: React.FC<HeaderProps> = ({ industry }) => {
  const [isOpen, setIsOpen] = useState(false);
  const theme = getThemeTokens(industry);
  const sidebarBg = hexToRgba(theme.surface, theme.isDarkMode ? 0.98 : 1);
  const drawerBg = hexToRgba(theme.surface, theme.isDarkMode ? 0.95 : 1);
  const iconMuted = hexToRgba(theme.text, 0.6);

  return (
    <>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed top-6 right-6 z-50 p-3 rounded-full shadow-lg transition-colors lg:hidden"
        style={{ backgroundColor: sidebarBg, color: theme.text }}
      >
        {isOpen ? <X /> : <Menu />}
      </button>

      <aside
        className="fixed top-0 left-0 bottom-0 w-20 hidden lg:flex flex-col items-center py-8 z-40 border-r"
        style={{ backgroundColor: sidebarBg, borderColor: theme.border, color: theme.text }}
      >
        <a 
          href="/" 
          className="w-10 h-10 text-white rounded-lg flex items-center justify-center font-bold text-xl mb-12"
          style={{ backgroundColor: industry.colors.primary }}
        >
          {industry.name.charAt(0)}
        </a>

        <nav className="flex-1 flex flex-col gap-8 w-full px-2">
          {[
            { icon: Home, label: 'Home' },
            { icon: User, label: 'About' },
            { icon: Briefcase, label: 'Work' },
            { icon: Mail, label: 'Contact' },
          ].map((item) => (
            <a
              key={item.label}
              href={`#${item.label.toLowerCase()}`}
              className="flex flex-col items-center gap-1 transition-colors group"
              style={{ color: iconMuted }}
            >
              <div
                className="p-2 rounded-lg transition-colors"
                style={{ backgroundColor: hexToRgba(theme.text, theme.isDarkMode ? 0.1 : 0.05), color: theme.text }}
              >
                <item.icon size={24} />
              </div>
              <span className="text-[10px] font-medium" style={{ color: hexToRgba(theme.text, 0.7) }}>
                {item.label}
              </span>
            </a>
          ))}
        </nav>

        <a href="#settings" style={{ color: iconMuted }}>
          <Settings size={24} />
        </a>
      </aside>

      {/* Mobile Sidebar */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'tween' }}
            className="fixed inset-y-0 right-0 w-64 shadow-2xl z-40 lg:hidden p-8"
            style={{ backgroundColor: drawerBg, color: theme.text }}
          >
            <div className="flex flex-col gap-6 mt-12">
              {['home', 'about', 'work', 'contact'].map((item) => (
                <a key={item} href={`#${item}`} className="text-xl font-medium" style={{ color: theme.text }}>
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default HeaderSidebar;
