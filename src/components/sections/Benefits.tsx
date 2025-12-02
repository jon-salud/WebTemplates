import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Container from '../ui/Container';
import Section from '../ui/Section';
import type { IndustryConfig } from '@/config/industries';

interface BenefitsProps {
  industry: IndustryConfig;
  variant?: 'stats' | 'features' | 'bento' | 'counter-cards' | 'progress-bars' | 'timeline' | 'radial' | 'comparison' | 'animated-counter' | 'icon-list';
}

const Benefits: React.FC<BenefitsProps> = ({
  industry,
  variant = 'stats',
}) => {
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

  const renderStats = () => (
    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
      {industry.benefits.items.map((benefit, index) => (
        <motion.div
          key={benefit.title}
          variants={itemVariants}
          className="text-center"
        >
          {benefit.stat && (
            <motion.div
              className="text-display-1 font-bold mb-2"
              style={{ color: industry.colors.primary }}
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              {benefit.stat}
            </motion.div>
          )}
          <h3 className="text-heading-3 text-brand-black mb-2">
            {benefit.title}
          </h3>
          <p className="text-body-sm text-neutral-600">
            {benefit.description}
          </p>
        </motion.div>
      ))}
    </div>
  );

  const renderFeatures = () => (
    <div className="grid md:grid-cols-2 gap-8">
      {industry.benefits.items.map((benefit, index) => (
        <motion.div
          key={benefit.title}
          variants={itemVariants}
          className="flex gap-4"
        >
          <div
            className="flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center"
            style={{ backgroundColor: `${industry.colors.primary}15` }}
          >
            <span
              className="text-2xl font-bold"
              style={{ color: industry.colors.primary }}
            >
              {benefit.stat ? benefit.stat.charAt(0) : index + 1}
            </span>
          </div>
          <div>
            <h3 className="text-heading-3 text-brand-black mb-2">
              {benefit.title}
            </h3>
            <p className="text-body text-neutral-600">
              {benefit.description}
            </p>
            {benefit.stat && (
              <p
                className="text-body-lg font-semibold mt-2"
                style={{ color: industry.colors.primary }}
              >
                {benefit.stat}
              </p>
            )}
          </div>
        </motion.div>
      ))}
    </div>
  );

  const renderBento = () => (
    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
      {industry.benefits.items.map((benefit, index) => {
        // Create varied sizes for bento grid effect
        const isLarge = index === 0 || index === 3;
        
        return (
          <motion.div
            key={benefit.title}
            variants={itemVariants}
            className={`
              rounded-3xl p-6 flex flex-col justify-between
              ${isLarge ? 'lg:col-span-2 lg:row-span-2' : ''}
              ${index % 2 === 0 ? 'bg-white' : ''}
            `}
            style={{
              backgroundColor: index % 2 === 0 ? 'white' : `${industry.colors.primary}10`,
            }}
          >
            {benefit.stat && (
              <div
                className={`font-bold mb-4 ${isLarge ? 'text-display-1' : 'text-display-3'}`}
                style={{ color: industry.colors.primary }}
              >
                {benefit.stat}
              </div>
            )}
            <div>
              <h3 className={`text-brand-black mb-2 ${isLarge ? 'text-heading-2' : 'text-heading-3'}`}>
                {benefit.title}
              </h3>
              <p className={`text-neutral-600 ${isLarge ? 'text-body-lg' : 'text-body-sm'}`}>
                {benefit.description}
              </p>
            </div>
          </motion.div>
        );
      })}
    </div>
  );

  // ═══════════════════════════════════════════════════════════════════════════
  // VARIANT: Counter Cards (Accounting)
  // Large animated numbers with clean cards - conveys precision & reliability
  // ═══════════════════════════════════════════════════════════════════════════
  const AnimatedNumber = ({ value, delay = 0 }: { value: string; delay?: number }) => {
    const [displayValue, setDisplayValue] = useState('0');
    const ref = useRef<HTMLDivElement>(null);
    const isInView = useInView(ref, { once: true });

    useEffect(() => {
      if (!isInView) return;

      // Extract number and suffix
      const match = value.match(/^([<>]?\s*)(\d+\.?\d*)(.*)$/);
      if (!match) {
        setDisplayValue(value);
        return;
      }

      const [, prefix, numStr, suffix] = match;
      const targetNum = parseFloat(numStr);
      const duration = 2000;
      const startTime = Date.now() + delay;

      const animate = () => {
        const elapsed = Date.now() - startTime;
        if (elapsed < 0) {
          requestAnimationFrame(animate);
          return;
        }

        const progress = Math.min(elapsed / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 4);
        const current = targetNum * eased;

        if (numStr.includes('.')) {
          setDisplayValue(`${prefix}${current.toFixed(1)}${suffix}`);
        } else {
          setDisplayValue(`${prefix}${Math.floor(current)}${suffix}`);
        }

        if (progress < 1) {
          requestAnimationFrame(animate);
        } else {
          setDisplayValue(value);
        }
      };

      requestAnimationFrame(animate);
    }, [isInView, value, delay]);

    return <div ref={ref}>{displayValue}</div>;
  };

  const renderCounterCards = () => (
    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
      {industry.benefits.items.map((benefit, index) => (
        <motion.div
          key={benefit.title}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          className="group relative bg-white rounded-3xl p-8 border border-neutral-100 hover:border-transparent hover:shadow-card-hover transition-all duration-300"
        >
          {/* Accent line */}
          <div
            className="absolute top-0 left-8 right-8 h-1 rounded-b-full opacity-0 group-hover:opacity-100 transition-opacity"
            style={{ backgroundColor: industry.colors.primary }}
          />
          
          {benefit.stat && (
            <div
              className="text-[56px] leading-none font-bold mb-4"
              style={{ color: industry.colors.primary }}
            >
              <AnimatedNumber value={benefit.stat} delay={index * 150} />
            </div>
          )}
          
          <h3 className="text-heading-3 text-brand-black mb-2 font-semibold">
            {benefit.title}
          </h3>
          <p className="text-body-sm text-neutral-600">
            {benefit.description}
          </p>
        </motion.div>
      ))}
    </div>
  );

  // ═══════════════════════════════════════════════════════════════════════════
  // VARIANT: Progress Bars (Law)
  // Horizontal progress indicators - conveys achievement & track record
  // ═══════════════════════════════════════════════════════════════════════════
  const renderProgressBars = () => {
    // Extract percentage-like values or default to calculated percentages
    const getProgressValue = (stat: string | undefined, index: number): number => {
      if (!stat) return 75 + index * 5;
      const match = stat.match(/(\d+)/);
      if (match) {
        const num = parseInt(match[1]);
        if (stat.includes('%')) return Math.min(num, 100);
        if (num > 100) return 85 + (index * 3);
        return Math.min(num, 100);
      }
      return 80;
    };

    return (
      <div className="max-w-4xl mx-auto space-y-8">
        {industry.benefits.items.map((benefit, index) => {
          const progressValue = getProgressValue(benefit.stat, index);

          return (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="group"
            >
              <div className="flex justify-between items-end mb-3">
                <div>
                  <h3 className="text-heading-3 text-brand-black font-semibold">
                    {benefit.title}
                  </h3>
                  <p className="text-body-sm text-neutral-500">
                    {benefit.description}
                  </p>
                </div>
                {benefit.stat && (
                  <span
                    className="text-display-3 font-bold"
                    style={{ color: industry.colors.primary }}
                  >
                    {benefit.stat}
                  </span>
                )}
              </div>

              {/* Progress bar container */}
              <div className="relative h-3 bg-neutral-100 rounded-full overflow-hidden">
                <motion.div
                  className="absolute inset-y-0 left-0 rounded-full"
                  style={{ backgroundColor: industry.colors.primary }}
                  initial={{ width: 0 }}
                  whileInView={{ width: `${progressValue}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.2, delay: index * 0.15, ease: 'easeOut' }}
                />
                {/* Shine effect */}
                <motion.div
                  className="absolute inset-y-0 w-20 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                  initial={{ x: '-100%' }}
                  whileInView={{ x: '500%' }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.5, delay: index * 0.15 + 0.5 }}
                />
              </div>
            </motion.div>
          );
        })}
      </div>
    );
  };

  // ═══════════════════════════════════════════════════════════════════════════
  // VARIANT: Timeline (Healthcare)
  // Vertical timeline - conveys journey & milestones
  // ═══════════════════════════════════════════════════════════════════════════
  const renderTimeline = () => (
    <div className="max-w-3xl mx-auto relative">
      {/* Vertical line */}
      <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-neutral-200" />

      {industry.benefits.items.map((benefit, index) => (
        <motion.div
          key={benefit.title}
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: index * 0.15 }}
          className="relative flex gap-8 pb-12 last:pb-0"
        >
          {/* Timeline node */}
          <motion.div
            className="relative z-10 w-16 h-16 rounded-full flex items-center justify-center shrink-0"
            style={{ backgroundColor: `${industry.colors.primary}15` }}
            whileHover={{ scale: 1.1 }}
          >
            <div
              className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold"
              style={{ backgroundColor: industry.colors.primary }}
            >
              {index + 1}
            </div>
          </motion.div>

          {/* Content */}
          <div className="flex-1 pt-2">
            {benefit.stat && (
              <motion.div
                className="text-display-3 font-bold mb-2"
                style={{ color: industry.colors.primary }}
                initial={{ scale: 0.8 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 + 0.2 }}
              >
                {benefit.stat}
              </motion.div>
            )}
            <h3 className="text-heading-3 text-brand-black font-semibold mb-2">
              {benefit.title}
            </h3>
            <p className="text-body text-neutral-600">
              {benefit.description}
            </p>
          </div>
        </motion.div>
      ))}
    </div>
  );

  // ═══════════════════════════════════════════════════════════════════════════
  // VARIANT: Radial/Circular (Consulting)
  // Circular progress indicators - conveys completeness & goals
  // ═══════════════════════════════════════════════════════════════════════════
  const CircularProgress = ({ value, index, primaryColor }: { value: number; index: number; primaryColor: string }) => {
    const radius = 54;
    const circumference = 2 * Math.PI * radius;
    const strokeDashoffset = circumference - (value / 100) * circumference;

    return (
      <svg className="w-36 h-36 -rotate-90" viewBox="0 0 128 128">
        {/* Background circle */}
        <circle
          cx="64"
          cy="64"
          r={radius}
          fill="none"
          stroke="#e5e5e5"
          strokeWidth="8"
        />
        {/* Progress circle */}
        <motion.circle
          cx="64"
          cy="64"
          r={radius}
          fill="none"
          stroke={primaryColor}
          strokeWidth="8"
          strokeLinecap="round"
          strokeDasharray={circumference}
          initial={{ strokeDashoffset: circumference }}
          whileInView={{ strokeDashoffset }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, delay: index * 0.2, ease: 'easeOut' }}
        />
      </svg>
    );
  };

  const renderRadial = () => {
    const getProgressValue = (stat: string | undefined, index: number): number => {
      if (!stat) return 75 + index * 5;
      const match = stat.match(/(\d+)/);
      if (match) {
        const num = parseInt(match[1]);
        if (stat.includes('%')) return Math.min(num, 100);
        return Math.min(85 + (index * 3), 98);
      }
      return 80;
    };

    return (
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {industry.benefits.items.map((benefit, index) => {
          const progressValue = getProgressValue(benefit.stat, index);

          return (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="relative inline-flex items-center justify-center mb-6">
                <CircularProgress value={progressValue} index={index} primaryColor={industry.colors.primary} />
                {/* Center stat */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <span
                    className="text-heading-2 font-bold"
                    style={{ color: industry.colors.primary }}
                  >
                    {benefit.stat || `${progressValue}%`}
                  </span>
                </div>
              </div>

              <h3 className="text-heading-3 text-brand-black font-semibold mb-2">
                {benefit.title}
              </h3>
              <p className="text-body-sm text-neutral-600">
                {benefit.description}
              </p>
            </motion.div>
          );
        })}
      </div>
    );
  };

  // ═══════════════════════════════════════════════════════════════════════════
  // VARIANT: Comparison/Before-After (Financial)
  // Split view showing improvement - conveys transformation & value
  // ═══════════════════════════════════════════════════════════════════════════
  const renderComparison = () => (
    <div className="grid md:grid-cols-2 gap-8">
      {/* Before column */}
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="bg-neutral-100 rounded-3xl p-8"
      >
        <div className="text-center mb-8">
          <span className="inline-block px-4 py-2 bg-neutral-200 rounded-full text-sm font-medium text-neutral-600 mb-4">
            Without Us
          </span>
          <h3 className="text-heading-2 text-neutral-500">The Challenge</h3>
        </div>

        <div className="space-y-6">
          {industry.benefits.items.map((benefit, index) => (
            <motion.div
              key={`before-${benefit.title}`}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="flex items-center gap-4 p-4 bg-white/50 rounded-xl"
            >
              <div className="w-10 h-10 rounded-full bg-neutral-300 flex items-center justify-center">
                <span className="text-neutral-500 font-medium">?</span>
              </div>
              <div>
                <p className="text-neutral-500 font-medium">{benefit.title}</p>
                <p className="text-sm text-neutral-400">Uncertain outcomes</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* After column */}
      <motion.div
        initial={{ opacity: 0, x: 30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="rounded-3xl p-8"
        style={{ backgroundColor: `${industry.colors.primary}10` }}
      >
        <div className="text-center mb-8">
          <span
            className="inline-block px-4 py-2 rounded-full text-sm font-medium text-white mb-4"
            style={{ backgroundColor: industry.colors.primary }}
          >
            With Us
          </span>
          <h3 className="text-heading-2 text-brand-black">The Results</h3>
        </div>

        <div className="space-y-6">
          {industry.benefits.items.map((benefit, index) => (
            <motion.div
              key={`after-${benefit.title}`}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 + 0.3 }}
              className="flex items-center gap-4 p-4 bg-white rounded-xl shadow-sm"
            >
              <div
                className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold"
                style={{ backgroundColor: industry.colors.primary }}
              >
                ✓
              </div>
              <div className="flex-1">
                <p className="text-brand-black font-medium">{benefit.title}</p>
                <p className="text-sm text-neutral-500">{benefit.description}</p>
              </div>
              {benefit.stat && (
                <span
                  className="text-heading-3 font-bold"
                  style={{ color: industry.colors.primary }}
                >
                  {benefit.stat}
                </span>
              )}
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );

  // ═══════════════════════════════════════════════════════════════════════════
  // VARIANT: Animated Counter Grid (Real Estate)
  // Bold numbers with flip/slot animation - conveys achievement & scale
  // ═══════════════════════════════════════════════════════════════════════════
  const renderAnimatedCounter = () => (
    <div className="grid md:grid-cols-2 gap-6">
      {industry.benefits.items.map((benefit, index) => (
        <motion.div
          key={benefit.title}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: index * 0.15 }}
          className="group relative overflow-hidden rounded-3xl"
        >
          {/* Background with gradient */}
          <div
            className="absolute inset-0 opacity-5 group-hover:opacity-10 transition-opacity"
            style={{
              background: `linear-gradient(135deg, ${industry.colors.primary} 0%, transparent 100%)`,
            }}
          />

          <div className="relative p-8 md:p-10">
            <div className="flex items-start justify-between gap-4">
              <div className="flex-1">
                <h3 className="text-heading-3 text-brand-black font-semibold mb-2">
                  {benefit.title}
                </h3>
                <p className="text-body text-neutral-600">
                  {benefit.description}
                </p>
              </div>

              {benefit.stat && (
                <motion.div
                  className="text-right"
                  initial={{ scale: 0.5, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    type: 'spring',
                    stiffness: 200,
                    delay: index * 0.15 + 0.3,
                  }}
                >
                  <div
                    className="text-[64px] md:text-[80px] leading-none font-black"
                    style={{ color: industry.colors.primary }}
                  >
                    <AnimatedNumber value={benefit.stat} delay={index * 200} />
                  </div>
                </motion.div>
              )}
            </div>

            {/* Decorative element */}
            <motion.div
              className="absolute bottom-0 right-0 w-32 h-32 rounded-tl-full opacity-10"
              style={{ backgroundColor: industry.colors.primary }}
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 + 0.5 }}
            />
          </div>

          {/* Border */}
          <div className="absolute inset-0 rounded-3xl border border-neutral-200 group-hover:border-transparent transition-colors" />
        </motion.div>
      ))}
    </div>
  );

  // ═══════════════════════════════════════════════════════════════════════════
  // VARIANT: Icon List (Recruitment)
  // ═══════════════════════════════════════════════════════════════════════════
  const renderIconList = () => (
    <div className="space-y-6">
      {industry.benefits.items.map((benefit, index) => (
        <motion.div
          key={benefit.title}
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          className="group"
        >
          <div 
            className="flex items-center gap-6 p-6 rounded-2xl transition-all duration-300 hover:shadow-lg"
            style={{ 
              backgroundColor: '#fff',
              border: `2px solid ${industry.colors.primary}15`
            }}
          >
            {/* Stat Badge */}
            <div 
              className="w-24 h-24 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform"
              style={{ backgroundColor: industry.colors.primary }}
            >
              <span className="text-2xl md:text-3xl font-black text-white">
                <AnimatedNumber value={benefit.stat} delay={index * 150} />
              </span>
            </div>
            
            {/* Content */}
            <div className="flex-1">
              <h3 className="text-heading-3 text-brand-black mb-2 font-bold">
                {benefit.title}
              </h3>
              <p className="text-body text-neutral-600">
                {benefit.description}
              </p>
            </div>
            
            {/* Arrow */}
            <motion.div
              className="hidden md:flex items-center justify-center w-12 h-12 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
              style={{ backgroundColor: `${industry.colors.primary}10` }}
              whileHover={{ scale: 1.1 }}
            >
              <ArrowRight className="w-5 h-5" style={{ color: industry.colors.primary }} />
            </motion.div>
          </div>
        </motion.div>
      ))}
    </div>
  );

  return (
    <Section id="benefits" background="white" padding="lg">
      <Container>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-display-2 text-brand-black mb-4">
            {industry.benefits.title}
          </h2>
          <p className="text-body-xl text-neutral-600 max-w-2xl mx-auto">
            {industry.benefits.subtitle}
          </p>
        </motion.div>

        {/* Benefits Content */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
        >
          {variant === 'stats' && renderStats()}
          {variant === 'features' && renderFeatures()}
          {variant === 'bento' && renderBento()}
          {variant === 'counter-cards' && renderCounterCards()}
          {variant === 'progress-bars' && renderProgressBars()}
          {variant === 'timeline' && renderTimeline()}
          {variant === 'radial' && renderRadial()}
          {variant === 'comparison' && renderComparison()}
          {variant === 'animated-counter' && renderAnimatedCounter()}
          {variant === 'icon-list' && renderIconList()}
        </motion.div>
      </Container>
    </Section>
  );
};

export default Benefits;
