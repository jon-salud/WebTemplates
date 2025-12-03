import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Home, User, Briefcase, Mail, Settings } from 'lucide-react';
import type { IndustryConfig } from '@/config/industries';

interface HeaderProps {
  industry: IndustryConfig;
}

const HeaderSidebar: React.FC<HeaderProps> = ({ industry }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed top-6 right-6 z-50 p-3 bg-white rounded-full shadow-lg hover:bg-neutral-50 transition-colors lg:hidden"
      >
        {isOpen ? <X /> : <Menu />}
      </button>

      <aside className="fixed top-0 left-0 bottom-0 w-20 bg-white border-r border-neutral-200 hidden lg:flex flex-col items-center py-8 z-40">
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
              className="flex flex-col items-center gap-1 text-neutral-400 hover:text-neutral-900 transition-colors group"
            >
              <div className="p-2 rounded-lg group-hover:bg-neutral-100 transition-colors">
                <item.icon size={24} />
              </div>
              <span className="text-[10px] font-medium">{item.label}</span>
            </a>
          ))}
        </nav>

        <a href="#settings" className="text-neutral-400 hover:text-neutral-900">
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
            className="fixed inset-y-0 right-0 w-64 bg-white shadow-2xl z-40 lg:hidden p-8"
          >
            <div className="flex flex-col gap-6 mt-12">
              <a href="#home" className="text-xl font-medium">Home</a>
              <a href="#about" className="text-xl font-medium">About</a>
              <a href="#work" className="text-xl font-medium">Work</a>
              <a href="#contact" className="text-xl font-medium">Contact</a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default HeaderSidebar;
