import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import * as Icons from 'lucide-react';
import Container from '../ui/Container';
import Card from '../ui/Card';
import Section from '../ui/Section';
import type { IndustryConfig } from '@/config/industries';

interface ServicesProps {
  industry: IndustryConfig;
  columns?: 2 | 3;
  variant?: 'cards' | 'list' | 'grid' | 'numbered-list' | 'accordion' | 'icon-grid' | 'hover-cards' | 'tabs' | 'image-cards';
}

const iconMap: Record<string, React.FC<{ className?: string }>> = {
  calculator: Icons.Calculator,
  'chart-bar': Icons.BarChart3,
  briefcase: Icons.Briefcase,
  'shield-check': Icons.ShieldCheck,
  users: Icons.Users,
  'trending-up': Icons.TrendingUp,
  building: Icons.Building,
  scale: Icons.Scale,
  'file-text': Icons.FileText,
  shield: Icons.Shield,
  home: Icons.Home,
  heart: Icons.Heart,
  activity: Icons.Activity,
  clipboard: Icons.Clipboard,
  zap: Icons.Zap,
  video: Icons.Video,
  calendar: Icons.Calendar,
  settings: Icons.Settings,
  'refresh-cw': Icons.RefreshCw,
  'pie-chart': Icons.PieChart,
  target: Icons.Target,
  umbrella: Icons.Umbrella,
  'graduation-cap': Icons.GraduationCap,
  'dollar-sign': Icons.DollarSign,
  search: Icons.Search,
  key: Icons.Key,
};

const Services: React.FC<ServicesProps> = ({
  industry,
  columns = 3,
  variant = 'cards',
}) => {
  const [activeAccordion, setActiveAccordion] = useState<number | null>(0);
  const [activeTab, setActiveTab] = useState(0);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  // Theme-aware colors
  const isDarkMode = industry.themeMode === 'dark';
  const theme = {
    bg: isDarkMode ? 'bg-[var(--theme-background)]' : 'bg-white',
    bgAlt: isDarkMode ? 'bg-[var(--theme-surface)]' : 'bg-neutral-50',
    text: isDarkMode ? 'text-[var(--theme-text)]' : 'text-brand-black',
    textMuted: isDarkMode ? 'text-[var(--theme-text)]/70' : 'text-neutral-600',
    textLight: isDarkMode ? 'text-[var(--theme-text)]/50' : 'text-neutral-500',
    card: isDarkMode ? 'bg-[var(--theme-surface)]' : 'bg-white',
    cardBorder: isDarkMode ? 'border-white/10' : 'border-neutral-200',
    cardHover: isDarkMode ? 'hover:bg-white/5' : 'hover:bg-neutral-50/50',
    // Raw values for inline styles
    surfaceRaw: industry.themeColors?.surface || '#f9fafb',
    textRaw: industry.themeColors?.text || '#0f172a',
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.4, 0, 0.2, 1],
      },
    },
  };

  const gridCols = {
    2: 'md:grid-cols-2',
    3: 'md:grid-cols-2 lg:grid-cols-3',
  };

  // ═══════════════════════════════════════════════════════════════════════════
  // VARIANT: Numbered List (Accounting)
  // Clean, minimal design with large numbers - conveys precision & order
  // ═══════════════════════════════════════════════════════════════════════════
  const renderNumberedList = () => (
    <div className="space-y-0">
      {industry.services.items.map((service, index) => {
        const IconComponent = iconMap[service.icon] || Icons.Circle;
        return (
          <motion.div
            key={service.title}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="group relative flex items-start gap-8 py-8 border-b border-neutral-200 last:border-b-0 hover:bg-neutral-50/50 transition-colors px-4 -mx-4 rounded-lg"
          >
            {/* Large Number */}
            <span
              className="text-[80px] leading-none font-bold opacity-10 select-none shrink-0 w-24 text-right"
              style={{ color: industry.colors.primary }}
            >
              {String(index + 1).padStart(2, '0')}
            </span>

            {/* Content */}
            <div className="flex-1 pt-2">
              <div className="flex items-center gap-3 mb-2">
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
                  style={{ backgroundColor: `${industry.colors.primary}15` }}
                >
                  <IconComponent className="w-5 h-5" style={{ color: industry.colors.primary }} />
                </div>
                <h3 className="text-heading-3 text-brand-black font-semibold group-hover:translate-x-2 transition-transform">
                  {service.title}
                </h3>
              </div>
              <p className="text-body text-neutral-600 max-w-2xl">
                {service.description}
              </p>
            </div>

            {/* Arrow */}
            <motion.div
              className="opacity-0 group-hover:opacity-100 transition-opacity pt-4"
              initial={{ x: -10 }}
              whileHover={{ x: 0 }}
            >
              <Icons.ArrowRight className="w-6 h-6" style={{ color: industry.colors.primary }} />
            </motion.div>
          </motion.div>
        );
      })}
    </div>
  );

  // ═══════════════════════════════════════════════════════════════════════════
  // VARIANT: Accordion (Law)
  // Expandable panels - conveys depth of expertise & structured approach
  // ═══════════════════════════════════════════════════════════════════════════
  const renderAccordion = () => (
    <div className="max-w-3xl mx-auto space-y-4">
      {industry.services.items.map((service, index) => {
        const IconComponent = iconMap[service.icon] || Icons.Circle;
        const isOpen = activeAccordion === index;

        return (
          <motion.div
            key={service.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.08 }}
            className="border border-neutral-200 rounded-2xl overflow-hidden bg-white"
          >
            <button
              onClick={() => setActiveAccordion(isOpen ? null : index)}
              className="w-full flex items-center justify-between p-6 text-left hover:bg-neutral-50 transition-colors"
            >
              <div className="flex items-center gap-4">
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center transition-colors"
                  style={{
                    backgroundColor: isOpen ? industry.colors.primary : `${industry.colors.primary}15`,
                    color: isOpen ? 'white' : industry.colors.primary,
                  }}
                >
                  <IconComponent className="w-6 h-6" />
                </div>
                <h3 className="text-heading-3 text-brand-black font-semibold">
                  {service.title}
                </h3>
              </div>
              <motion.div
                animate={{ rotate: isOpen ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                <Icons.ChevronDown className="w-6 h-6 text-neutral-400" />
              </motion.div>
            </button>

            <AnimatePresence>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: 'easeInOut' }}
                >
                  <div className="px-6 pb-6 pt-0">
                    <div className="pl-16">
                      <p className="text-body text-neutral-600 mb-4">
                        {service.description}
                      </p>
                      <motion.a
                        href="#"
                        className="inline-flex items-center gap-2 text-sm font-medium"
                        style={{ color: industry.colors.primary }}
                        whileHover={{ x: 5 }}
                      >
                        Learn more about this service
                        <Icons.ArrowRight className="w-4 h-4" />
                      </motion.a>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        );
      })}
    </div>
  );

  // ═══════════════════════════════════════════════════════════════════════════
  // VARIANT: Icon Grid (Healthcare)
  // Soft, rounded cards with prominent icons - conveys care & approachability
  // ═══════════════════════════════════════════════════════════════════════════
  const renderIconGrid = () => (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
    >
      {industry.services.items.map((service, index) => {
        const IconComponent = iconMap[service.icon] || Icons.Circle;
        return (
          <motion.div
            key={service.title}
            variants={itemVariants}
            className="group text-center"
          >
            <div className="relative mb-6">
              {/* Soft background blob */}
              <div
                className="absolute inset-0 rounded-full blur-2xl opacity-20 scale-150"
                style={{ backgroundColor: industry.colors.primary }}
              />
              {/* Icon circle */}
              <motion.div
                className="relative w-24 h-24 mx-auto rounded-full flex items-center justify-center"
                style={{ backgroundColor: `${industry.colors.primary}10` }}
                whileHover={{ scale: 1.1 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center"
                  style={{ backgroundColor: `${industry.colors.primary}20` }}
                >
                  <IconComponent
                    className="w-8 h-8 transition-transform group-hover:scale-110"
                    style={{ color: industry.colors.primary }}
                  />
                </div>
              </motion.div>
            </div>

            <h3 className="text-heading-3 text-brand-black mb-3 font-semibold">
              {service.title}
            </h3>
            <p className="text-body text-neutral-600 max-w-sm mx-auto">
              {service.description}
            </p>
          </motion.div>
        );
      })}
    </motion.div>
  );

  // ═══════════════════════════════════════════════════════════════════════════
  // VARIANT: Hover Cards (Consulting)
  // Cards that expand on hover - conveys dynamism & engagement
  // ═══════════════════════════════════════════════════════════════════════════
  const renderHoverCards = () => (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {industry.services.items.map((service, index) => {
        const IconComponent = iconMap[service.icon] || Icons.Circle;
        const isHovered = hoveredCard === index;

        return (
          <motion.div
            key={service.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            onHoverStart={() => setHoveredCard(index)}
            onHoverEnd={() => setHoveredCard(null)}
            className="relative group cursor-pointer"
          >
            <motion.div
              className="relative overflow-hidden rounded-3xl p-8 h-full"
              animate={{
                backgroundColor: isHovered ? industry.colors.primary : '#ffffff',
                y: isHovered ? -8 : 0,
              }}
              transition={{ duration: 0.3 }}
              style={{
                boxShadow: isHovered
                  ? '0 25px 50px -12px rgba(0, 0, 0, 0.25)'
                  : '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
              }}
            >
              {/* Background pattern on hover */}
              <motion.div
                className="absolute inset-0 opacity-10"
                animate={{ opacity: isHovered ? 0.1 : 0 }}
                style={{
                  backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
                  backgroundSize: '20px 20px',
                }}
              />

              <div className="relative z-10">
                <motion.div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6"
                  animate={{
                    backgroundColor: isHovered ? 'rgba(255,255,255,0.2)' : `${industry.colors.primary}15`,
                  }}
                >
                  <IconComponent
                    className="w-7 h-7 transition-colors"
                    style={{ color: isHovered ? 'white' : industry.colors.primary }}
                  />
                </motion.div>

                <motion.h3
                  className="text-heading-3 font-bold mb-3"
                  animate={{ color: isHovered ? 'white' : '#0a0a0a' }}
                >
                  {service.title}
                </motion.h3>

                <motion.p
                  className="text-body mb-4"
                  animate={{ color: isHovered ? 'rgba(255,255,255,0.9)' : '#525252' }}
                >
                  {service.description}
                </motion.p>

                <motion.div
                  className="flex items-center gap-2 text-sm font-medium"
                  animate={{
                    color: isHovered ? 'white' : industry.colors.primary,
                    x: isHovered ? 8 : 0,
                  }}
                >
                  Explore service
                  <Icons.ArrowRight className="w-4 h-4" />
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        );
      })}
    </div>
  );

  // ═══════════════════════════════════════════════════════════════════════════
  // VARIANT: Tabs (Financial)
  // Tabbed interface - conveys organization & easy navigation
  // ═══════════════════════════════════════════════════════════════════════════
  const renderTabs = () => {
    const activeService = industry.services.items[activeTab];
    const ActiveIcon = iconMap[activeService?.icon] || Icons.Circle;

    return (
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Tab buttons - vertical on desktop */}
        <div className="lg:w-80 shrink-0">
          <div className="flex lg:flex-col gap-2 overflow-x-auto lg:overflow-visible pb-4 lg:pb-0">
            {industry.services.items.map((service, index) => {
              const IconComponent = iconMap[service.icon] || Icons.Circle;
              const isActive = activeTab === index;

              return (
                <motion.button
                  key={service.title}
                  onClick={() => setActiveTab(index)}
                  className={`relative flex items-center gap-3 px-5 py-4 rounded-xl text-left whitespace-nowrap lg:whitespace-normal transition-colors ${
                    isActive ? 'text-white' : 'text-neutral-600 hover:bg-neutral-100'
                  }`}
                  style={{
                    backgroundColor: isActive ? industry.colors.primary : 'transparent',
                  }}
                  whileHover={{ x: isActive ? 0 : 4 }}
                >
                  <IconComponent className="w-5 h-5 shrink-0" />
                  <span className="font-medium">{service.title}</span>
                </motion.button>
              );
            })}
          </div>
        </div>

        {/* Tab content */}
        <div className="flex-1">
          <AnimatePresence mode="wait">
            {activeService && (
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="bg-white rounded-3xl p-8 lg:p-12 border border-neutral-200"
              >
                <div
                  className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6"
                  style={{ backgroundColor: `${industry.colors.primary}15` }}
                >
                  <ActiveIcon className="w-8 h-8" style={{ color: industry.colors.primary }} />
                </div>

                <h3 className="text-display-3 text-brand-black mb-4 font-bold">
                  {activeService.title}
                </h3>

                <p className="text-body-lg text-neutral-600 mb-8 max-w-2xl">
                  {activeService.description}
                </p>

                {/* Feature highlights */}
                <div className="grid sm:grid-cols-2 gap-4 mb-8">
                  {['Expert guidance', 'Proven results', 'Dedicated support', 'Custom solutions'].map((feature) => (
                    <div key={feature} className="flex items-center gap-3">
                      <div
                        className="w-6 h-6 rounded-full flex items-center justify-center"
                        style={{ backgroundColor: `${industry.colors.primary}15` }}
                      >
                        <Icons.Check className="w-4 h-4" style={{ color: industry.colors.primary }} />
                      </div>
                      <span className="text-sm text-neutral-700">{feature}</span>
                    </div>
                  ))}
                </div>

                <motion.a
                  href="#"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-white font-medium"
                  style={{ backgroundColor: industry.colors.primary }}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Get started
                  <Icons.ArrowRight className="w-4 h-4" />
                </motion.a>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    );
  };

  // ═══════════════════════════════════════════════════════════════════════════
  // VARIANT: Image Cards (Real Estate)
  // Cards with background images - conveys visual appeal & lifestyle
  // ═══════════════════════════════════════════════════════════════════════════
  const serviceImages = [
    'https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80&w=800',
    'https://images.unsplash.com/photo-1582407947304-fd86f028f716?auto=format&fit=crop&q=80&w=800',
    'https://images.unsplash.com/photo-1560520653-9e0e4c89eb11?auto=format&fit=crop&q=80&w=800',
    'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80&w=800',
    'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=800',
    'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=800',
  ];

  const renderImageCards = () => (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
    >
      {industry.services.items.map((service, index) => {
        const IconComponent = iconMap[service.icon] || Icons.Circle;
        const imageUrl = serviceImages[index % serviceImages.length];

        return (
          <motion.div
            key={service.title}
            variants={itemVariants}
            className="group relative h-80 rounded-3xl overflow-hidden cursor-pointer"
          >
            {/* Background Image */}
            <div
              className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
              style={{ backgroundImage: `url(${imageUrl})` }}
            />

            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

            {/* Content */}
            <div className="absolute inset-0 p-6 flex flex-col justify-end">
              <motion.div
                className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 backdrop-blur-sm"
                style={{ backgroundColor: `${industry.colors.primary}80` }}
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: index * 0.1 + 0.3 }}
              >
                <IconComponent className="w-6 h-6 text-white" />
              </motion.div>

              <h3 className="text-heading-3 text-white font-bold mb-2">
                {service.title}
              </h3>

              <p className="text-sm text-white/80 line-clamp-2 mb-3">
                {service.description}
              </p>

              <motion.div
                className="flex items-center gap-2 text-sm font-medium text-white opacity-0 group-hover:opacity-100 transition-opacity"
                initial={{ x: -10 }}
                whileHover={{ x: 0 }}
              >
                View details
                <Icons.ArrowRight className="w-4 h-4" />
              </motion.div>
            </div>
          </motion.div>
        );
      })}
    </motion.div>
  );

  // ═══════════════════════════════════════════════════════════════════════════
  // VARIANT: Default Cards (Original)
  // ═══════════════════════════════════════════════════════════════════════════
  const renderCards = () => (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-50px' }}
      className={`grid gap-6 ${gridCols[columns]}`}
    >
      {industry.services.items.map((service, index) => {
        const IconComponent = iconMap[service.icon] || Icons.Circle;

        return (
          <motion.div key={service.title} variants={itemVariants}>
            <Card hover className="h-full">
              <div
                className="w-14 h-14 rounded-2xl flex items-center justify-center mb-5"
                style={{ backgroundColor: `${industry.colors.primary}15` }}
              >
                <IconComponent className="w-7 h-7" style={{ color: industry.colors.primary }} />
              </div>

              <h3 className="text-heading-3 text-brand-black mb-3 font-bold">
                {service.title}
              </h3>

              <p className="text-body text-neutral-600">
                {service.description}
              </p>

              <motion.a
                href="#"
                className="inline-flex items-center gap-2 mt-4 text-sm font-medium transition-colors"
                style={{ color: industry.colors.primary }}
                whileHover={{ x: 5 }}
              >
                Learn more
                <Icons.ArrowRight className="w-4 h-4" />
              </motion.a>
            </Card>
          </motion.div>
        );
      })}
    </motion.div>
  );

  // ═══════════════════════════════════════════════════════════════════════════
  // VARIANT: Timeline Services (Architecture)
  // ═══════════════════════════════════════════════════════════════════════════
  const renderTimeline = () => (
    <div className="relative">
      {/* Vertical Line */}
      <div 
        className="absolute left-8 top-0 bottom-0 w-0.5 hidden lg:block"
        style={{ backgroundColor: `${industry.colors.primary}20` }}
      />
      
      <div className="space-y-8">
        {industry.services.items.map((service, index) => {
          const IconComponent = iconMap[service.icon] || Icons.Circle;
          const isEven = index % 2 === 0;
          
          return (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, x: isEven ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative flex items-start gap-6"
            >
              {/* Timeline Dot */}
              <div 
                className="relative z-10 w-16 h-16 rounded-full flex items-center justify-center flex-shrink-0 shadow-lg"
                style={{ backgroundColor: industry.colors.primary }}
              >
                <IconComponent className="w-7 h-7 text-white" />
              </div>
              
              {/* Content Card */}
              <Card hover className="flex-1">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-heading-3 text-brand-black font-bold">
                    {service.title}
                  </h3>
                  <span 
                    className="text-sm font-bold px-3 py-1 rounded-full"
                    style={{ 
                      backgroundColor: `${industry.colors.primary}10`,
                      color: industry.colors.primary 
                    }}
                  >
                    0{index + 1}
                  </span>
                </div>
                <p className="text-body text-neutral-600">{service.description}</p>
              </Card>
            </motion.div>
          );
        })}
      </div>
    </div>
  );

  // ═══════════════════════════════════════════════════════════════════════════
  // VARIANT: Masonry Grid Services (Education)
  // ═══════════════════════════════════════════════════════════════════════════
  const renderMasonry = () => {
    const heights = ['min-h-[280px]', 'min-h-[320px]', 'min-h-[260px]', 'min-h-[340px]', 'min-h-[300px]', 'min-h-[280px]'];
    
    return (
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6"
      >
        {industry.services.items.map((service, index) => {
          const IconComponent = iconMap[service.icon] || Icons.Circle;
          const heightClass = heights[index % heights.length];
          
          return (
            <motion.div
              key={service.title}
              variants={itemVariants}
              className={`break-inside-avoid ${heightClass}`}
            >
              <div 
                className="h-full rounded-2xl p-6 flex flex-col group transition-all duration-300 hover:shadow-xl"
                style={{ 
                  background: `linear-gradient(135deg, ${industry.colors.primary}08, ${industry.colors.primary}15)`,
                  border: `1px solid ${industry.colors.primary}15`
                }}
              >
                <div 
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform"
                  style={{ backgroundColor: industry.colors.primary }}
                >
                  <IconComponent className="w-6 h-6 text-white" />
                </div>
                
                <h3 className="text-heading-3 text-brand-black mb-3 font-bold">
                  {service.title}
                </h3>
                
                <p className="text-body text-neutral-600 flex-1">
                  {service.description}
                </p>
                
                <motion.a
                  href="#"
                  className="inline-flex items-center gap-2 mt-4 text-sm font-medium"
                  style={{ color: industry.colors.primary }}
                  whileHover={{ x: 5 }}
                >
                  Explore program
                  <Icons.ArrowRight className="w-4 h-4" />
                </motion.a>
              </div>
            </motion.div>
          );
        })}
      </motion.div>
    );
  };

  // ═══════════════════════════════════════════════════════════════════════════
  // VARIANT: Spotlight Cards Services (Recruitment)
  // ═══════════════════════════════════════════════════════════════════════════
  const renderSpotlight = () => {
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
    
    return (
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid grid-cols-1 lg:grid-cols-2 gap-4"
      >
        {industry.services.items.map((service, index) => {
          const IconComponent = iconMap[service.icon] || Icons.Circle;
          const isHovered = hoveredIndex === index;
          
          return (
            <motion.div
              key={service.title}
              variants={itemVariants}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="relative overflow-hidden rounded-2xl cursor-pointer"
              style={{ 
                backgroundColor: isHovered ? industry.colors.primary : '#fff',
                border: `2px solid ${industry.colors.primary}20`
              }}
            >
              <motion.div
                animate={{ 
                  scale: isHovered ? 1.02 : 1,
                  backgroundColor: isHovered ? industry.colors.primary : '#fff'
                }}
                transition={{ duration: 0.3 }}
                className="p-6"
              >
                <div className="flex items-start gap-4">
                  <div 
                    className="w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0 transition-colors duration-300"
                    style={{ 
                      backgroundColor: isHovered ? 'rgba(255,255,255,0.2)' : `${industry.colors.primary}10`
                    }}
                  >
                    <IconComponent 
                      className="w-7 h-7 transition-colors duration-300" 
                      style={{ color: isHovered ? '#fff' : industry.colors.primary }}
                    />
                  </div>
                  
                  <div className="flex-1">
                    <h3 
                      className="text-heading-3 mb-2 font-bold transition-colors duration-300"
                      style={{ color: isHovered ? '#fff' : '#1a1a1a' }}
                    >
                      {service.title}
                    </h3>
                    
                    <p 
                      className="text-body transition-colors duration-300"
                      style={{ color: isHovered ? 'rgba(255,255,255,0.85)' : '#666' }}
                    >
                      {service.description}
                    </p>
                    
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: isHovered ? 1 : 0, y: isHovered ? 0 : 10 }}
                      className="mt-4 flex items-center gap-2 text-sm font-medium text-white"
                    >
                      Learn more
                      <Icons.ArrowRight className="w-4 h-4" />
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          );
        })}
      </motion.div>
    );
  };

  // ═══════════════════════════════════════════════════════════════════════════
  // RENDER LOGIC
  // ═══════════════════════════════════════════════════════════════════════════
  const renderContent = () => {
    switch (variant) {
      case 'numbered-list':
        return renderNumberedList();
      case 'accordion':
        return renderAccordion();
      case 'icon-grid':
        return renderIconGrid();
      case 'hover-cards':
        return renderHoverCards();
      case 'tabs':
        return renderTabs();
      case 'image-cards':
        return renderImageCards();
      case 'timeline':
        return renderTimeline();
      case 'masonry':
        return renderMasonry();
      case 'spotlight':
        return renderSpotlight();
      case 'cards':
      case 'list':
      case 'grid':
      default:
        return renderCards();
    }
  };

  return (
    <Section id="services" background="light" padding="lg">
      <Container>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className={`text-display-2 ${theme.text} mb-4`}>
            {industry.services.title}
          </h2>
          <p className={`text-body-xl ${theme.textMuted} max-w-2xl mx-auto`}>
            Comprehensive solutions tailored to your specific needs
          </p>
        </motion.div>

        {/* Services Content */}
        {renderContent()}
      </Container>
    </Section>
  );
};

export default Services;
