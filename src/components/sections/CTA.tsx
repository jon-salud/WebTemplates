import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Phone, Calendar, MessageCircle, CheckCircle, Sparkles } from 'lucide-react';
import Button from '../ui/Button';
import Container from '../ui/Container';
import type { IndustryConfig } from '@/config/industries';

interface CTAProps {
  industry: IndustryConfig;
  variant?: 'default' | 'centered' | 'split' | 'gradient-card' | 'minimal' | 'with-form' | 'floating' | 'stats-cta' | 'dual-action';
}

const CTA: React.FC<CTAProps> = ({
  industry,
  variant = 'default',
}) => {
  const [email, setEmail] = useState('');

  // ═══════════════════════════════════════════════════════════════════════════
  // VARIANT: Default (Original)
  // ═══════════════════════════════════════════════════════════════════════════
  const renderDefault = () => (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="rounded-3xl p-8 md:p-12 lg:p-16 text-center text-white relative overflow-hidden"
      style={{ backgroundColor: industry.colors.primary }}
    >
      {/* Background decoration */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          background: `radial-gradient(circle at 20% 50%, white 0%, transparent 50%),
                       radial-gradient(circle at 80% 50%, white 0%, transparent 50%)`,
        }}
      />

      <div className="relative z-10">
        <h2 className="text-display-2 mb-4">{industry.cta.title}</h2>
        <p className="text-body-xl opacity-90 mb-8 max-w-xl mx-auto">
          {industry.cta.subtitle}
        </p>
        <Button
          variant="secondary"
          size="lg"
          icon={<ArrowRight className="w-5 h-5" />}
          className="bg-white hover:bg-neutral-50"
        >
          {industry.cta.buttonText}
        </Button>
      </div>
    </motion.div>
  );

  // ═══════════════════════════════════════════════════════════════════════════
  // VARIANT: Gradient Card (Accounting)
  // Sophisticated gradient with floating elements
  // ═══════════════════════════════════════════════════════════════════════════
  const renderGradientCard = () => (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="relative rounded-[2rem] p-10 md:p-16 text-white overflow-hidden"
      style={{
        background: `linear-gradient(135deg, ${industry.colors.primary} 0%, ${industry.colors.primaryDark} 100%)`,
      }}
    >
      {/* Animated background shapes */}
      <motion.div
        className="absolute top-0 right-0 w-96 h-96 rounded-full opacity-20"
        style={{ background: 'radial-gradient(circle, white 0%, transparent 70%)' }}
        animate={{ scale: [1, 1.2, 1], rotate: [0, 90, 0] }}
        transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
      />
      <motion.div
        className="absolute bottom-0 left-0 w-64 h-64 rounded-full opacity-10"
        style={{ background: 'radial-gradient(circle, white 0%, transparent 70%)' }}
        animate={{ scale: [1.2, 1, 1.2] }}
        transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
      />

      <div className="relative z-10 max-w-3xl mx-auto text-center">
        <motion.div
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, type: 'spring' }}
          className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 rounded-full text-sm font-medium mb-6"
        >
          <Sparkles className="w-4 h-4" />
          Limited Time Offer
        </motion.div>

        <h2 className="text-display-2 mb-4">{industry.cta.title}</h2>
        <p className="text-body-xl opacity-90 mb-10 max-w-xl mx-auto">
          {industry.cta.subtitle}
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            variant="secondary"
            size="lg"
            icon={<ArrowRight className="w-5 h-5" />}
            className="bg-white hover:bg-neutral-50 text-brand-black"
          >
            {industry.cta.buttonText}
          </Button>
          <Button
            variant="outline"
            size="lg"
            icon={<Phone className="w-5 h-5" />}
            className="border-white/30 text-white hover:bg-white/10"
          >
            Schedule a Call
          </Button>
        </div>
      </div>
    </motion.div>
  );

  // ═══════════════════════════════════════════════════════════════════════════
  // VARIANT: Minimal (Law)
  // Clean, understated design with focus on text
  // ═══════════════════════════════════════════════════════════════════════════
  const renderMinimal = () => (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="max-w-4xl mx-auto text-center py-8"
    >
      <div
        className="w-16 h-1 mx-auto mb-8 rounded-full"
        style={{ backgroundColor: industry.colors.primary }}
      />
      
      <h2 className="text-display-1 text-brand-black mb-6 leading-tight">
        {industry.cta.title}
      </h2>
      
      <p className="text-body-xl text-neutral-600 mb-10 max-w-2xl mx-auto">
        {industry.cta.subtitle}
      </p>

      <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
        <motion.a
          href="#contact"
          className="inline-flex items-center gap-3 px-8 py-4 rounded-xl text-white font-semibold text-lg"
          style={{ backgroundColor: industry.colors.primary }}
          whileHover={{ scale: 1.02, y: -2 }}
          whileTap={{ scale: 0.98 }}
        >
          {industry.cta.buttonText}
          <ArrowRight className="w-5 h-5" />
        </motion.a>
        
        <span className="text-neutral-400">or</span>
        
        <a
          href="tel:+1234567890"
          className="text-lg font-medium hover:underline"
          style={{ color: industry.colors.primary }}
        >
          Call (234) 567-8900
        </a>
      </div>

      <div
        className="w-16 h-1 mx-auto mt-8 rounded-full"
        style={{ backgroundColor: industry.colors.primary }}
      />
    </motion.div>
  );

  // ═══════════════════════════════════════════════════════════════════════════
  // VARIANT: With Form (Healthcare)
  // Embedded contact form - conveys accessibility
  // ═══════════════════════════════════════════════════════════════════════════
  const renderWithForm = () => (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="grid lg:grid-cols-2 gap-12 items-center"
    >
      <div>
        <h2 className="text-display-2 text-brand-black mb-4">
          {industry.cta.title}
        </h2>
        <p className="text-body-xl text-neutral-600 mb-8">
          {industry.cta.subtitle}
        </p>

        <div className="space-y-4">
          {['Quick response within 24 hours', 'Free initial consultation', 'No obligation quote'].map((item, i) => (
            <motion.div
              key={item}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex items-center gap-3"
            >
              <CheckCircle className="w-5 h-5" style={{ color: industry.colors.primary }} />
              <span className="text-neutral-700">{item}</span>
            </motion.div>
          ))}
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, x: 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className="bg-white rounded-3xl p-8 shadow-card-hover"
      >
        <h3 className="text-heading-2 text-brand-black mb-6">Request a Callback</h3>
        <form className="space-y-4">
          <div className="grid sm:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="First name"
              className="px-4 py-3 rounded-xl border border-neutral-200 focus:outline-none focus:ring-2 transition-all"
              style={{ '--tw-ring-color': industry.colors.primary } as React.CSSProperties}
            />
            <input
              type="text"
              placeholder="Last name"
              className="px-4 py-3 rounded-xl border border-neutral-200 focus:outline-none focus:ring-2 transition-all"
            />
          </div>
          <input
            type="email"
            placeholder="Email address"
            className="w-full px-4 py-3 rounded-xl border border-neutral-200 focus:outline-none focus:ring-2 transition-all"
          />
          <input
            type="tel"
            placeholder="Phone number"
            className="w-full px-4 py-3 rounded-xl border border-neutral-200 focus:outline-none focus:ring-2 transition-all"
          />
          <select className="w-full px-4 py-3 rounded-xl border border-neutral-200 focus:outline-none focus:ring-2 transition-all text-neutral-600">
            <option>Select a service</option>
            {industry.services.items.slice(0, 4).map((s) => (
              <option key={s.title}>{s.title}</option>
            ))}
          </select>
          <Button
            variant="primary"
            size="lg"
            className="w-full"
            style={{ backgroundColor: industry.colors.primary }}
          >
            {industry.cta.buttonText}
          </Button>
        </form>
      </motion.div>
    </motion.div>
  );

  // ═══════════════════════════════════════════════════════════════════════════
  // VARIANT: Floating (Consulting)
  // Cards floating with depth effect
  // ═══════════════════════════════════════════════════════════════════════════
  const renderFloating = () => (
    <div className="relative">
      {/* Background card */}
      <div
        className="absolute inset-4 rounded-3xl opacity-20"
        style={{ backgroundColor: industry.colors.primary }}
      />
      
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="relative bg-white rounded-3xl p-10 md:p-16 shadow-card-hover"
      >
        <div className="grid lg:grid-cols-3 gap-8 items-center">
          <div className="lg:col-span-2">
            <h2 className="text-display-2 text-brand-black mb-4">
              {industry.cta.title}
            </h2>
            <p className="text-body-xl text-neutral-600">
              {industry.cta.subtitle}
            </p>
          </div>

          <div className="flex flex-col gap-4">
            <motion.a
              href="#contact"
              className="flex items-center justify-center gap-3 px-6 py-4 rounded-2xl text-white font-semibold"
              style={{ backgroundColor: industry.colors.primary }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Calendar className="w-5 h-5" />
              Book Consultation
            </motion.a>
            <motion.a
              href="#chat"
              className="flex items-center justify-center gap-3 px-6 py-4 rounded-2xl font-semibold border-2"
              style={{ borderColor: industry.colors.primary, color: industry.colors.primary }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <MessageCircle className="w-5 h-5" />
              Live Chat
            </motion.a>
          </div>
        </div>
      </motion.div>
    </div>
  );

  // ═══════════════════════════════════════════════════════════════════════════
  // VARIANT: Stats CTA (Financial)
  // CTA with impressive statistics
  // ═══════════════════════════════════════════════════════════════════════════
  const renderStatsCta = () => (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="rounded-3xl overflow-hidden"
    >
      {/* Stats bar */}
      <div
        className="grid grid-cols-2 md:grid-cols-4 gap-px"
        style={{ backgroundColor: industry.colors.primary }}
      >
        {[
          { stat: '$2.5B+', label: 'Assets Managed' },
          { stat: '15K+', label: 'Happy Clients' },
          { stat: '25+', label: 'Years Experience' },
          { stat: '99%', label: 'Client Retention' },
        ].map((item, i) => (
          <motion.div
            key={item.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="bg-white p-6 text-center"
          >
            <div
              className="text-display-3 font-bold mb-1"
              style={{ color: industry.colors.primary }}
            >
              {item.stat}
            </div>
            <div className="text-sm text-neutral-500">{item.label}</div>
          </motion.div>
        ))}
      </div>

      {/* CTA content */}
      <div
        className="p-10 md:p-14 text-center text-white"
        style={{ backgroundColor: industry.colors.primary }}
      >
        <h2 className="text-display-2 mb-4">{industry.cta.title}</h2>
        <p className="text-body-xl opacity-90 mb-8 max-w-xl mx-auto">
          {industry.cta.subtitle}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            variant="secondary"
            size="lg"
            icon={<ArrowRight className="w-5 h-5" />}
            className="bg-white hover:bg-neutral-50 text-brand-black"
          >
            {industry.cta.buttonText}
          </Button>
        </div>
      </div>
    </motion.div>
  );

  // ═══════════════════════════════════════════════════════════════════════════
  // VARIANT: Dual Action (Real Estate)
  // Two prominent action paths
  // ═══════════════════════════════════════════════════════════════════════════
  const renderDualAction = () => (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <div className="text-center mb-12">
        <h2 className="text-display-2 text-brand-black mb-4">
          {industry.cta.title}
        </h2>
        <p className="text-body-xl text-neutral-600 max-w-2xl mx-auto">
          {industry.cta.subtitle}
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {/* Primary action */}
        <motion.div
          className="relative rounded-3xl p-8 md:p-10 text-white overflow-hidden group cursor-pointer"
          style={{ backgroundColor: industry.colors.primary }}
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.3 }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
          <div className="relative z-10">
            <div className="w-14 h-14 rounded-2xl bg-white/20 flex items-center justify-center mb-6">
              <Calendar className="w-7 h-7" />
            </div>
            <h3 className="text-heading-2 mb-3">Schedule a Viewing</h3>
            <p className="text-white/80 mb-6">
              See your dream property in person. We'll arrange a private tour at your convenience.
            </p>
            <div className="flex items-center gap-2 font-semibold">
              Book Now <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
            </div>
          </div>
        </motion.div>

        {/* Secondary action */}
        <motion.div
          className="relative rounded-3xl p-8 md:p-10 bg-neutral-100 overflow-hidden group cursor-pointer"
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.3 }}
        >
          <div className="relative z-10">
            <div
              className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6"
              style={{ backgroundColor: `${industry.colors.primary}20` }}
            >
              <Phone className="w-7 h-7" style={{ color: industry.colors.primary }} />
            </div>
            <h3 className="text-heading-2 text-brand-black mb-3">Speak to an Agent</h3>
            <p className="text-neutral-600 mb-6">
              Get expert advice from our experienced real estate professionals today.
            </p>
            <div
              className="flex items-center gap-2 font-semibold"
              style={{ color: industry.colors.primary }}
            >
              Call Now <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );

  const renderCentered = () => (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="text-center"
    >
      <h2 className="text-display-2 text-brand-black mb-4">
        {industry.cta.title}
      </h2>
      <p className="text-body-xl text-neutral-600 mb-8 max-w-xl mx-auto">
        {industry.cta.subtitle}
      </p>
      <Button
        variant="primary"
        size="lg"
        icon={<ArrowRight className="w-5 h-5" />}
        style={{ backgroundColor: industry.colors.primary }}
      >
        {industry.cta.buttonText}
      </Button>
    </motion.div>
  );

  const renderSplit = () => (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="grid lg:grid-cols-2 gap-8 items-center"
    >
      <div>
        <h2 className="text-display-2 text-brand-black mb-4">
          {industry.cta.title}
        </h2>
        <p className="text-body-xl text-neutral-600">
          {industry.cta.subtitle}
        </p>
      </div>
      <div className="flex lg:justify-end">
        <Button
          variant="primary"
          size="lg"
          icon={<ArrowRight className="w-5 h-5" />}
          style={{ backgroundColor: industry.colors.primary }}
        >
          {industry.cta.buttonText}
        </Button>
      </div>
    </motion.div>
  );

  // ═══════════════════════════════════════════════════════════════════════════
  // VARIANT: Banner CTA (Recruitment)
  // ═══════════════════════════════════════════════════════════════════════════
  const renderBanner = () => (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="relative overflow-hidden"
    >
      {/* Background with gradient */}
      <div 
        className="relative rounded-3xl py-12 md:py-16 px-8 md:px-16"
        style={{ 
          background: `linear-gradient(135deg, ${industry.colors.primary} 0%, ${industry.colors.primaryDark} 100%)`
        }}
      >
        {/* Decorative circles */}
        <div 
          className="absolute top-0 right-0 w-64 h-64 rounded-full opacity-10 blur-3xl"
          style={{ backgroundColor: '#fff' }}
        />
        <div 
          className="absolute bottom-0 left-0 w-48 h-48 rounded-full opacity-10 blur-2xl"
          style={{ backgroundColor: '#fff' }}
        />
        
        <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="text-center lg:text-left">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
              {industry.cta.title}
            </h2>
            <p className="text-lg text-white/80 max-w-xl">
              {industry.cta.subtitle}
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              variant="secondary"
              size="lg"
              icon={<ArrowRight className="w-5 h-5" />}
              className="bg-white hover:bg-gray-100 text-gray-900 shadow-lg"
            >
              {industry.cta.buttonText}
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-white/30 text-white hover:bg-white/10"
            >
              Learn More
            </Button>
          </div>
        </div>
      </div>
    </motion.div>
  );

  return (
    <section className="py-16 md:py-24">
      <Container>
        {variant === 'default' && renderDefault()}
        {variant === 'centered' && renderCentered()}
        {variant === 'split' && renderSplit()}
        {variant === 'gradient-card' && renderGradientCard()}
        {variant === 'minimal' && renderMinimal()}
        {variant === 'with-form' && renderWithForm()}
        {variant === 'floating' && renderFloating()}
        {variant === 'stats-cta' && renderStatsCta()}
        {variant === 'dual-action' && renderDualAction()}
        {variant === 'banner' && renderBanner()}
      </Container>
    </section>
  );
};

export default CTA;
