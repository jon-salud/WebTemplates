import React from 'react';
import { motion, m, LazyMotion, domAnimation } from 'framer-motion';
import { ArrowRight, Play, CheckCircle, Star, TrendingUp, Users, Award, Clock } from 'lucide-react';
import Button from '../ui/Button';
import Container from '../ui/Container';
import Badge from '../ui/Badge';
import VariableWeightText from '../ui/VariableWeightText';
import type { IndustryConfig } from '@/config/industries';

interface HeroProps {
  industry: IndustryConfig;
  showBadge?: boolean;
  badgeText?: string;
  showVideo?: boolean;
  backgroundImage?: string;
  videoUrl?: string;
  variant?: 'split' | 'centered-cards' | 'video-bg' | 'asymmetric' | 'editorial' | 'bento' | 'minimal-centered' | 'image-overlap' | 'diagonal-split' | 'floating-elements';
  headlineSegments?: Array<{
    text: string;
    weight?: 'thin' | 'extralight' | 'light' | 'normal' | 'medium' | 'semibold' | 'bold' | 'extrabold' | 'black';
  }>;
}

const Hero: React.FC<HeroProps> = ({
  industry,
  showBadge = true,
  headlineSegments,
  badgeText = 'Trusted by 1000+ clients',
  showVideo = false,
  backgroundImage,
  videoUrl = 'https://assets.mixkit.co/videos/preview/mixkit-aerial-view-of-city-traffic-at-night-11-large.mp4',
  variant = 'split',
}) => {
  // Default fallback hero image (professional business image)
  const defaultHeroImage = 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1920&q=80';
  const heroImage = backgroundImage || defaultHeroImage;

  // Theme-aware colors
  const isDarkMode = industry.themeMode === 'dark';
  const theme = {
    bg: isDarkMode ? 'bg-[var(--theme-background)]' : 'bg-white',
    bgAlt: isDarkMode ? 'bg-[var(--theme-surface)]' : 'bg-neutral-50',
    text: isDarkMode ? 'text-[var(--theme-text)]' : 'text-neutral-900',
    textMuted: isDarkMode ? 'text-[var(--theme-text)]/70' : 'text-neutral-600',
    textLight: isDarkMode ? 'text-[var(--theme-text)]/50' : 'text-neutral-500',
    card: isDarkMode ? 'bg-[var(--theme-surface)]' : 'bg-white',
    cardBorder: isDarkMode ? 'border-white/10' : 'border-neutral-100',
    // Raw values for inline styles
    bgRaw: industry.themeColors?.background || '#ffffff',
    surfaceRaw: industry.themeColors?.surface || '#f9fafb',
    textRaw: industry.themeColors?.text || '#0f172a',
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.4, 0, 0.2, 1],
      },
    },
  };

  const floatVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: 'easeOut',
      },
    },
  };

  // ============================================
  // BACKGROUND COMPONENTS
  // ============================================
  
  // Animated Gradient Mesh (for Split/Accounting)
  const GradientMeshBackground = () => (
    <div className="absolute inset-0 overflow-hidden">
      <div 
        className="absolute -top-1/2 -left-1/2 w-full h-full rounded-full blur-3xl opacity-30 animate-pulse"
        style={{ 
          background: `radial-gradient(circle, ${industry.colors.primaryLight} 0%, transparent 70%)`,
          animationDuration: '4s'
        }}
      />
      <div 
        className="absolute -bottom-1/2 -right-1/2 w-full h-full rounded-full blur-3xl opacity-20 animate-pulse"
        style={{ 
          background: `radial-gradient(circle, ${industry.colors.accent} 0%, transparent 70%)`,
          animationDuration: '6s',
          animationDelay: '2s'
        }}
      />
      <div 
        className="absolute top-1/4 right-1/4 w-96 h-96 rounded-full blur-3xl opacity-20 animate-pulse"
        style={{ 
          background: `radial-gradient(circle, ${industry.colors.primary} 0%, transparent 70%)`,
          animationDuration: '5s',
          animationDelay: '1s'
        }}
      />
    </div>
  );

  // Geometric Lines Pattern (for Editorial/Law)
  const GeometricLinesBackground = () => (
    <div className="absolute inset-0 overflow-hidden opacity-[0.20]">
      <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id={`grid-${industry.id}`} width="60" height="60" patternUnits="userSpaceOnUse">
            <path d="M 60 0 L 0 0 0 60" fill="none" stroke={industry.colors.primary} strokeWidth="1"/>
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill={`url(#grid-${industry.id})`} />
      </svg>
      <div 
        className="absolute top-0 left-0 w-full h-1 opacity-20"
        style={{ background: `linear-gradient(90deg, transparent, ${industry.colors.primary}, transparent)` }}
      />
      <div 
        className="absolute bottom-0 left-0 w-full h-1 opacity-20"
        style={{ background: `linear-gradient(90deg, transparent, ${industry.colors.accent}, transparent)` }}
      />
    </div>
  );

  // Soft Gradient Waves (for Asymmetric/Healthcare)
  const GradientWavesBackground = () => (
    <div className="absolute inset-0 overflow-hidden">
      <svg 
        className="absolute bottom-0 left-0 w-full opacity-20" 
        viewBox="0 0 1440 320" 
        preserveAspectRatio="none"
        style={{ height: '50%', filter: 'blur(2px)' }}
        shapeRendering="geometricPrecision"
      >
        <path 
          fill={industry.colors.primary}
          d="M0,160L48,176C96,192,192,224,288,213.3C384,203,480,149,576,138.7C672,128,768,160,864,181.3C960,203,1056,213,1152,197.3C1248,181,1344,139,1392,117.3L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
        />
      </svg>
      <div 
        className="absolute top-0 right-0 w-1/3 h-1/3 rounded-full blur-3xl opacity-10"
        style={{ background: industry.colors.primaryLight }}
      />
    </div>
  );

  // Floating Shapes (for Bento/Consulting)
  const FloatingShapesBackground = () => (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full"
          style={{
            width: `${60 + i * 30}px`,
            height: `${60 + i * 30}px`,
            left: `${10 + i * 15}%`,
            top: `${20 + (i % 3) * 25}%`,
            background: i % 2 === 0 
              ? `${industry.colors.primary}08` 
              : `${industry.colors.accent}08`,
            border: `1px solid ${i % 2 === 0 ? industry.colors.primary : industry.colors.accent}10`,
          }}
          animate={{
            y: [0, -20, 0],
            x: [0, 10, 0],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 10 + i * 2,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      ))}
      <motion.div
        className="absolute right-10 top-20 w-20 h-20 border rounded-lg opacity-10"
        style={{ borderColor: industry.colors.primary }}
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      />
      <motion.div
        className="absolute left-1/4 bottom-1/4 w-32 h-32 border rounded-full opacity-5"
        style={{ borderColor: industry.colors.accent }}
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
    </div>
  );

  // Aurora Effect (for Centered Cards/Financial)
  const AuroraBackground = () => (
    <LazyMotion features={domAnimation}>
      <div className="absolute inset-0 overflow-hidden" style={{ backgroundColor: theme.bgRaw }}>
        {/* Primary Aurora Band */}
        <m.div
          className="absolute top-[-10%] left-[-20%] w-[140%] h-[70%] blur-[60px] opacity-40"
          style={{ 
            background: `linear-gradient(170deg, transparent 20%, ${industry.colors.primaryLight} 40%, ${industry.colors.primary} 60%, transparent 80%)`,
          }}
          animate={{ 
            x: [-50, 0, -50],
            skewY: [-3, 3, -3],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Secondary Aurora Band */}
        <m.div
          className="absolute top-[10%] left-[-20%] w-[140%] h-[60%] blur-[50px] opacity-30"
          style={{ 
            background: `linear-gradient(190deg, transparent 20%, ${industry.colors.accent} 40%, ${industry.colors.primary} 60%, transparent 80%)`,
          }}
          animate={{ 
            x: [0, -50, 0],
            skewY: [3, -3, 3],
            opacity: [0.2, 0.5, 0.2],
          }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>
    </LazyMotion>
  );

  // ============================================
  // VARIANT 1: Split Hero (50/50)
  // Clean, balanced layout - content left, image right
  // Best for: Law, Consulting
  // ============================================
  const renderSplitHero = () => (
    <>
      <GradientMeshBackground />
      <Container className="relative z-10 py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center min-h-[60vh]">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="text-left"
          >
            {showBadge && (
              <motion.div variants={itemVariants}>
                <Badge variant="primary" className="mb-6">
                  {badgeText}
                </Badge>
              </motion.div>
            )}

        <motion.h1 variants={itemVariants} className={`text-5xl md:text-6xl lg:text-7xl font-bold ${theme.text} mb-6 leading-[1.1]`}>
          {headlineSegments ? (
            <VariableWeightText segments={headlineSegments} as="span" />
          ) : (
            <>
              {industry.hero.headline.split(' ').slice(0, 3).join(' ')}{' '}
              <span style={{ color: industry.colors.primary }}>
                {industry.hero.headline.split(' ').slice(3).join(' ')}
              </span>
            </>
          )}
        </motion.h1>

        <motion.p variants={itemVariants} className={`text-xl ${theme.textMuted} mb-8 max-w-lg leading-relaxed`}>
          {industry.hero.subheadline}
        </motion.p>

        <motion.div variants={itemVariants} className="flex flex-wrap gap-4 mb-8">
          <Button
            variant="primary"
            size="lg"
            icon={<ArrowRight className="w-5 h-5" />}
            style={{ backgroundColor: industry.colors.primary }}
          >
            {industry.hero.cta}
          </Button>
          <Button variant="secondary" size="lg" className={isDarkMode ? 'border-white/20 text-white hover:bg-white/10' : ''}>
            {industry.hero.ctaSecondary}
          </Button>
        </motion.div>

        <motion.div variants={itemVariants} className={`flex items-center gap-6 text-sm ${theme.textLight}`}>
          <div className="flex items-center gap-2">
            <CheckCircle className="w-4 h-4" style={{ color: industry.colors.primary }} />
            <span>Free Consultation</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle className="w-4 h-4" style={{ color: industry.colors.primary }} />
            <span>No Hidden Fees</span>
          </div>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="relative"
      >
        <div
          className="aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl"
          style={{
            background: `url(${heroImage}) center/cover`,
          }}
        />

        {/* Floating stat cards */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.9, duration: 0.5 }}
          className={`absolute -left-8 top-1/4 ${theme.card} rounded-2xl shadow-xl p-5 hidden lg:block`}
          style={{ backgroundColor: theme.surfaceRaw }}
        >
          <div className="flex items-center gap-4">
            <div
              className="w-12 h-12 rounded-xl flex items-center justify-center"
              style={{ backgroundColor: `${industry.colors.primary}15` }}
            >
              <Users className="w-6 h-6" style={{ color: industry.colors.primary }} />
            </div>
            <div>
              <p className={`text-2xl font-bold ${theme.text}`}>1,200+</p>
              <p className={`text-sm ${theme.textLight}`}>Happy Clients</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1.1, duration: 0.5 }}
          className={`absolute -right-8 bottom-1/4 ${theme.card} rounded-2xl shadow-xl p-5 hidden lg:block`}
          style={{ backgroundColor: theme.surfaceRaw }}
        >
          <div className="flex items-center gap-4">
            <div
              className="w-12 h-12 rounded-xl flex items-center justify-center"
              style={{ backgroundColor: `${industry.colors.accent}15` }}
            >
              <Star className="w-6 h-6" style={{ color: industry.colors.accent }} />
            </div>
            <div>
              <p className={`text-2xl font-bold ${theme.text}`}>4.9/5</p>
              <p className={`text-sm ${theme.textLight}`}>Client Rating</p>
            </div>
          </div>
        </motion.div>
      </motion.div>
      </div>
    </Container>
    </>
  );

  // ============================================
  // VARIANT 2: Centered Hero with Floating Cards
  // Massive headline with floating glassmorphism stats
  // Best for: SaaS, Financial Services
  // ============================================
  const renderCenteredCardsHero = () => (
    <>
      <AuroraBackground />
      <Container className="relative z-10 py-20 lg:py-32">
        <div className="relative min-h-[70vh] flex items-center justify-center">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="text-center max-w-5xl mx-auto relative z-10"
          >
            {showBadge && (
              <motion.div variants={itemVariants} className="mb-8">
                <span
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold"
                  style={{
                    backgroundColor: `${industry.colors.primary}10`,
                    color: industry.colors.primary,
                  }}
                >
                  <span className="w-2 h-2 rounded-full animate-pulse" style={{ backgroundColor: industry.colors.primary }} />
                  {badgeText}
                </span>
              </motion.div>
            )}

            <motion.h1 variants={itemVariants} className={`text-5xl md:text-7xl lg:text-8xl font-black ${theme.text} mb-8 leading-[1.05] tracking-tight`}>
              {headlineSegments ? (
                <VariableWeightText segments={headlineSegments} as="span" />
              ) : (
                <>
                  {industry.hero.headline.split(' ').slice(0, 2).join(' ')}
                  <br />
                  <span
                    className="bg-clip-text text-transparent"
                    style={{
                      backgroundImage: `linear-gradient(135deg, ${industry.colors.primary} 0%, ${industry.colors.accent} 100%)`,
                    }}
                  >
                    {industry.hero.headline.split(' ').slice(2).join(' ')}
                  </span>
                </>
              )}
            </motion.h1>

            <motion.p variants={itemVariants} className={`text-xl md:text-2xl ${theme.textMuted} mb-10 max-w-2xl mx-auto leading-relaxed`}>
              {industry.hero.subheadline}
            </motion.p>

            <motion.div variants={itemVariants} className="flex flex-wrap justify-center gap-4 mb-16">
              <Button
                variant="primary"
                size="lg"
                icon={<ArrowRight className="w-5 h-5" />}
                style={{ backgroundColor: industry.colors.primary }}
                className="px-8 py-4 text-lg"
              >
                {industry.hero.cta}
              </Button>
            </motion.div>

            {/* Floating Stats Cards */}
            <motion.div variants={itemVariants} className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
              {[
                { label: 'Clients Served', value: '2,500+', icon: Users },
                { label: 'Success Rate', value: '98%', icon: TrendingUp },
                { label: 'Years Experience', value: '15+', icon: Award },
                { label: 'Response Time', value: '< 4hrs', icon: Clock },
              ].map((stat, idx) => (
                <motion.div
                  key={stat.label}
                  variants={floatVariants}
                  className={`backdrop-blur-lg rounded-2xl p-5 shadow-lg ${isDarkMode ? 'bg-white/10 border-white/20' : 'bg-white/80 border-white/50'} border`}
                  style={{ animationDelay: `${idx * 0.1}s` }}
                >
                  <stat.icon className="w-5 h-5 mb-2" style={{ color: industry.colors.primary }} />
                  <p className={`text-2xl font-bold ${theme.text}`}>{stat.value}</p>
                  <p className={`text-xs ${theme.textLight}`}>{stat.label}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </Container>
    </>
  );

  // ============================================
  // VARIANT 3: Video Background Hero
  // Full-screen video with dark overlay
  // Best for: Real Estate, Consulting
  // ============================================
  const renderVideoBackgroundHero = () => (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
          poster={heroImage}
        >
          <source src={videoUrl} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80" />
      </div>

      <Container className="relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-4xl"
        >
          {showBadge && (
            <motion.div variants={itemVariants} className="mb-6">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm text-white/90 text-sm font-medium border border-white/20">
                {badgeText}
              </span>
            </motion.div>
          )}

          <motion.h1
            variants={itemVariants}
            className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-[1.1]"
            style={{ textShadow: '0 4px 30px rgba(0,0,0,0.3)' }}
          >
            {headlineSegments ? (
              <VariableWeightText segments={headlineSegments} as="span" className="text-white" />
            ) : (
              industry.hero.headline
            )}
          </motion.h1>

          <motion.p variants={itemVariants} className="text-xl md:text-2xl text-white/80 mb-10 max-w-2xl leading-relaxed">
            {industry.hero.subheadline}
          </motion.p>

          <motion.div variants={itemVariants} className="flex flex-wrap gap-4">
            <Button
              variant="primary"
              size="lg"
              icon={<ArrowRight className="w-5 h-5" />}
              style={{ backgroundColor: industry.colors.primary }}
              className="px-8"
            >
              {industry.hero.cta}
            </Button>
            <button className="inline-flex items-center gap-3 px-6 py-3 text-white font-medium hover:bg-white/10 rounded-xl transition-colors">
              <span className="flex items-center justify-center w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm border border-white/30">
                <Play className="w-5 h-5 ml-0.5" />
              </span>
              Watch Our Story
            </button>
          </motion.div>

          {/* Bottom stats bar */}
          <motion.div
            variants={itemVariants}
            className="mt-16 pt-8 border-t border-white/20 grid grid-cols-3 gap-8"
          >
            {[
              { value: '15+', label: 'Years Experience' },
              { value: '2,500+', label: 'Clients Served' },
              { value: '$500M+', label: 'Assets Managed' },
            ].map((stat) => (
              <div key={stat.label} className="text-center md:text-left">
                <p className="text-3xl md:text-4xl font-bold text-white">{stat.value}</p>
                <p className="text-sm text-white/60">{stat.label}</p>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </Container>
    </div>
  );

  // ============================================
  // VARIANT 4: Asymmetric Overlap Hero
  // Off-center content with overlapping image
  // Best for: Creative agencies, Healthcare
  // ============================================
  const renderAsymmetricHero = () => (
    <div className="relative min-h-[90vh] overflow-hidden">
      {/* Large background image */}
      <motion.div
        initial={{ opacity: 0, scale: 1.1 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2 }}
        className="absolute right-0 top-0 w-2/3 h-full hidden lg:block"
      >
        <div
          className="absolute inset-0 rounded-l-[4rem]"
          style={{
            background: `url(${heroImage}) center/cover`,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/50 to-transparent" />
      </motion.div>

      <GradientWavesBackground />

      <Container className="relative z-10 h-full flex items-center py-32">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-2xl"
        >
          {showBadge && (
            <motion.div variants={itemVariants} className="mb-6">
              <Badge variant="primary">{badgeText}</Badge>
            </motion.div>
          )}

          <motion.h1 variants={itemVariants} className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-neutral-900 mb-6 leading-[1.05]">
            {headlineSegments ? (
              <VariableWeightText segments={headlineSegments} as="span" />
            ) : (
              <>
                {industry.hero.headline.split(' ').slice(0, 2).join(' ')}
                <br />
                <span style={{ color: industry.colors.primary }}>
                  {industry.hero.headline.split(' ').slice(2, 4).join(' ')}
                </span>
                <br />
                {industry.hero.headline.split(' ').slice(4).join(' ')}
              </>
            )}
          </motion.h1>

          <motion.div variants={itemVariants} className="w-20 h-1.5 rounded-full mb-6" style={{ backgroundColor: industry.colors.primary }} />

          <motion.p variants={itemVariants} className="text-lg text-neutral-600 mb-8 leading-relaxed max-w-lg">
            {industry.hero.subheadline}
          </motion.p>

          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4">
            <Button
              variant="primary"
              size="lg"
              icon={<ArrowRight className="w-5 h-5" />}
              style={{ backgroundColor: industry.colors.primary }}
            >
              {industry.hero.cta}
            </Button>
            <button className="flex items-center gap-2 text-neutral-700 font-medium hover:text-neutral-900 transition-colors">
              <span className="w-10 h-10 rounded-full border-2 flex items-center justify-center" style={{ borderColor: industry.colors.primary }}>
                <Play className="w-4 h-4" style={{ color: industry.colors.primary }} />
              </span>
              {industry.hero.ctaSecondary}
            </button>
          </motion.div>

          {/* Overlapping feature cards */}
          <motion.div
            variants={itemVariants}
            className="mt-12 flex gap-4"
          >
            {[
              { icon: CheckCircle, text: 'Free Consultation' },
              { icon: Award, text: 'Award Winning' },
            ].map((item, idx) => (
              <div
                key={idx}
                className="flex items-center gap-2 px-4 py-2.5 bg-white rounded-xl shadow-md border border-neutral-100"
              >
                <item.icon className="w-4 h-4" style={{ color: industry.colors.primary }} />
                <span className="text-sm font-medium text-neutral-700">{item.text}</span>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </Container>
    </div>
  );

  // ============================================
  // VARIANT 5: Editorial/Magazine Hero
  // Typography-focused, minimal visuals
  // Best for: Law, Accounting
  // ============================================
  const renderEditorialHero = () => (
    <div className="relative min-h-[85vh] flex flex-col justify-center py-20">
      <GeometricLinesBackground />
      <Container className="relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Top row with badge */}
          <motion.div variants={itemVariants} className="flex items-center gap-6 mb-12">
            <div className="h-px flex-1 bg-neutral-200" />
            <span className="text-sm font-medium tracking-widest uppercase text-neutral-400">
              {industry.tagline}
            </span>
            <div className="h-px flex-1 bg-neutral-200" />
          </motion.div>

          {/* Giant headline */}
          <motion.h1
            variants={itemVariants}
            className="text-6xl md:text-8xl lg:text-9xl font-black text-neutral-900 leading-[0.95] tracking-tight mb-8"
          >
            {headlineSegments ? (
              <VariableWeightText segments={headlineSegments} as="span" />
            ) : (
              <>
                {industry.hero.headline.split(' ').slice(0, 2).join(' ')}
                <br />
                <span className="font-light italic" style={{ color: industry.colors.primary }}>
                  {industry.hero.headline.split(' ').slice(2, 4).join(' ')}
                </span>
                <br />
                {industry.hero.headline.split(' ').slice(4).join(' ')}
              </>
            )}
          </motion.h1>

          {/* Two column layout below */}
          <div className="grid md:grid-cols-2 gap-12 items-end mt-16">
            <motion.div variants={itemVariants}>
              <p className="text-lg md:text-xl text-neutral-600 leading-relaxed max-w-md">
                {industry.hero.subheadline}
              </p>
            </motion.div>

            <motion.div variants={itemVariants} className="flex flex-col items-start md:items-end gap-6">
              <button
                className="group flex items-center gap-4 text-lg font-semibold"
                style={{ color: industry.colors.primary }}
              >
                <span className="relative">
                  {industry.hero.cta}
                  <span
                    className="absolute bottom-0 left-0 w-full h-0.5 origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300"
                    style={{ backgroundColor: industry.colors.primary }}
                  />
                </span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>

              <div className="flex items-center gap-8 text-sm text-neutral-500">
                <div className="flex items-center gap-2">
                  <span className="font-bold text-2xl text-neutral-900">25+</span>
                  <span>Years<br/>Experience</span>
                </div>
                <div className="w-px h-10 bg-neutral-200" />
                <div className="flex items-center gap-2">
                  <span className="font-bold text-2xl text-neutral-900">98%</span>
                  <span>Client<br/>Retention</span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Accent line */}
          <motion.div
            variants={itemVariants}
            className="mt-16 h-1 w-32 rounded-full"
            style={{ backgroundColor: industry.colors.primary }}
          />
        </motion.div>
      </Container>
    </div>
  );

  // ============================================
  // VARIANT 6: Bento Grid Hero
  // Modular grid with mixed content cards
  // Best for: Tech, Multi-service agencies
  // ============================================
  const renderBentoHero = () => (
    <div className="relative min-h-screen py-20 lg:py-28">
      <FloatingShapesBackground />
      <Container className="relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-4 lg:grid-cols-6 gap-4 auto-rows-[minmax(120px,auto)]"
        >
          {/* Main headline card - spans 4 cols, 2 rows */}
          <motion.div
            variants={itemVariants}
            className="col-span-4 row-span-2 bg-neutral-900 rounded-3xl p-8 lg:p-12 flex flex-col justify-between text-white"
          >
            <div>
              {showBadge && (
                <span
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium mb-6"
                  style={{
                    backgroundColor: `${industry.colors.primary}30`,
                    color: industry.colors.primaryLight,
                  }}
                >
                  {badgeText}
                </span>
              )}
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.1]">
                {headlineSegments ? (
                  <VariableWeightText segments={headlineSegments} as="span" className="text-white" />
                ) : (
                  <>
                    {industry.hero.headline.split(' ').slice(0, 3).join(' ')}
                    <br />
                    <span style={{ color: industry.colors.primaryLight }}>
                      {industry.hero.headline.split(' ').slice(3).join(' ')}
                    </span>
                  </>
                )}
              </h1>
            </div>
            <p className="text-lg text-white/70 mt-6 max-w-xl">
              {industry.hero.subheadline}
            </p>
          </motion.div>

          {/* CTA card */}
          <motion.div
            variants={itemVariants}
            className="col-span-2 row-span-1 rounded-3xl p-6 flex flex-col justify-between"
            style={{ backgroundColor: industry.colors.primary }}
          >
            <ArrowRight className="w-8 h-8 text-white/80" />
            <div>
              <p className="text-white font-semibold text-lg">{industry.hero.cta}</p>
              <p className="text-white/70 text-sm">Get started today →</p>
            </div>
          </motion.div>

          {/* Stat card 1 */}
          <motion.div
            variants={itemVariants}
            className="col-span-2 row-span-1 bg-white rounded-3xl p-6 border border-neutral-200 flex flex-col justify-between"
          >
            <TrendingUp className="w-6 h-6" style={{ color: industry.colors.primary }} />
            <div>
              <p className="text-3xl font-bold text-neutral-900">98%</p>
              <p className="text-sm text-neutral-500">Success Rate</p>
            </div>
          </motion.div>

          {/* Image card */}
          <motion.div
            variants={itemVariants}
            className="col-span-2 lg:col-span-2 row-span-2 rounded-3xl overflow-hidden"
            style={{
              background: `url(${heroImage}) center/cover`,
            }}
          />

          {/* Stat card 2 */}
          <motion.div
            variants={itemVariants}
            className="col-span-2 row-span-1 bg-neutral-100 rounded-3xl p-6 flex flex-col justify-between"
          >
            <Users className="w-6 h-6 text-neutral-600" />
            <div>
              <p className="text-3xl font-bold text-neutral-900">2,500+</p>
              <p className="text-sm text-neutral-500">Happy Clients</p>
            </div>
          </motion.div>

          {/* Testimonial card */}
          <motion.div
            variants={itemVariants}
            className="col-span-4 lg:col-span-2 row-span-1 bg-white rounded-3xl p-6 border border-neutral-200"
          >
            <div className="flex items-center gap-1 mb-3">
              {[1, 2, 3, 4, 5].map((i) => (
                <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <p className="text-neutral-600 text-sm leading-relaxed line-clamp-2">
              "{industry.testimonials?.items?.[0]?.quote?.slice(0, 100) || "Great service"}..."
            </p>
            <p className="text-xs text-neutral-400 mt-2">— {industry.testimonials?.items?.[0]?.author || "Client"}</p>
          </motion.div>

          {/* Secondary CTA */}
          <motion.div
            variants={itemVariants}
            className="col-span-2 row-span-1 bg-neutral-900 rounded-3xl p-6 flex items-center justify-between cursor-pointer hover:bg-neutral-800 transition-colors"
          >
            <span className="text-white font-medium">{industry.hero.ctaSecondary}</span>
            <Play className="w-8 h-8 text-white/80" />
          </motion.div>
        </motion.div>
      </Container>
    </div>
  );

  // ============================================
  // VARIANT 7: Minimal Centered Hero
  // Clean, typography-focused design
  // Best for: Insurance, Professional services
  // ============================================
  const renderMinimalCenteredHero = () => (
    <div className="relative min-h-screen flex items-center justify-center py-20">
      <div className="absolute inset-0 bg-gradient-to-br from-neutral-50 via-white to-neutral-100" />
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `radial-gradient(${industry.colors.primary} 1px, transparent 1px)`,
          backgroundSize: '30px 30px'
        }}
      />
      <Container className="relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-center max-w-4xl mx-auto"
        >
          {showBadge && (
            <motion.div variants={itemVariants} className="mb-8">
              <span
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-medium border"
                style={{
                  borderColor: industry.colors.primary,
                  color: industry.colors.primary,
                }}
              >
                <Award className="w-4 h-4" />
                {badgeText}
              </span>
            </motion.div>
          )}
          
          <motion.h1
            variants={itemVariants}
            className="text-5xl md:text-6xl lg:text-7xl font-bold text-neutral-900 leading-[1.1] tracking-tight mb-8"
          >
            {headlineSegments ? (
              <VariableWeightText segments={headlineSegments} as="span" />
            ) : (
              industry.hero.headline
            )}
          </motion.h1>
          
          <motion.p
            variants={itemVariants}
            className="text-xl md:text-2xl text-neutral-600 leading-relaxed mb-12 max-w-2xl mx-auto"
          >
            {industry.hero.subheadline}
          </motion.p>
          
          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="px-10 py-4 text-lg rounded-full shadow-lg hover:shadow-xl transition-all"
              style={{ backgroundColor: industry.colors.primary }}
            >
              {industry.hero.cta}
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="px-10 py-4 text-lg rounded-full border-2"
              style={{ borderColor: industry.colors.primary, color: industry.colors.primary }}
            >
              {industry.hero.ctaSecondary}
            </Button>
          </motion.div>
          
          {/* Trust indicators */}
          <motion.div
            variants={itemVariants}
            className="mt-16 flex flex-wrap justify-center gap-8 text-neutral-500"
          >
            {[
              { icon: CheckCircle, text: 'Free Consultation' },
              { icon: Users, text: '10,000+ Clients' },
              { icon: Star, text: '5-Star Rated' },
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-2">
                <item.icon className="w-5 h-5" style={{ color: industry.colors.primary }} />
                <span className="font-medium">{item.text}</span>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </Container>
    </div>
  );

  // ============================================
  // VARIANT 8: Image Overlap Hero
  // Overlapping image with text
  // Best for: Architecture, Creative agencies
  // ============================================
  const renderImageOverlapHero = () => (
    <div className="relative min-h-screen py-20 lg:py-0">
      {/* Dynamic dark background */}
      <div 
        className="absolute inset-0" 
        style={{ 
          background: `linear-gradient(to bottom right, ${industry.colors.primaryDark}, #000000)` 
        }} 
      />
      
      {/* Ambient background effects */}
      <div className="absolute inset-0 opacity-30">
        <GradientMeshBackground />
      </div>

      <Container className="relative z-10 min-h-screen flex items-center">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 w-full">
          {/* Text side */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="flex flex-col justify-center py-20 lg:py-32 lg:pr-16"
          >
            {showBadge && (
              <motion.div variants={itemVariants} className="mb-6">
                <span
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium"
                  style={{
                    backgroundColor: `${industry.colors.primary}30`,
                    color: industry.colors.primaryLight,
                  }}
                >
                  {badgeText}
                </span>
              </motion.div>
            )}
            
            <motion.h1
              variants={itemVariants}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-[1.1] mb-6"
            >
              {headlineSegments ? (
                <VariableWeightText segments={headlineSegments} as="span" className="text-white" />
              ) : (
                industry.hero.headline
              )}
            </motion.h1>
            
            <motion.p
              variants={itemVariants}
              className="text-lg text-white/70 leading-relaxed mb-8 max-w-lg"
            >
              {industry.hero.subheadline}
            </motion.p>
            
            <motion.div variants={itemVariants} className="flex flex-wrap gap-4">
              <Button
                size="lg"
                className="px-8 py-4"
                style={{ backgroundColor: industry.colors.primary }}
              >
                {industry.hero.cta}
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <button className="flex items-center gap-3 text-white/80 hover:text-white transition-colors">
                <Play className="w-10 h-10" />
                <span className="font-medium">{industry.hero.ctaSecondary}</span>
              </button>
            </motion.div>
          </motion.div>
          
          {/* Image side with overlap */}
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative hidden lg:block"
          >
            <div
              className="absolute top-1/2 -translate-y-1/2 left-0 right-0 h-[80vh] rounded-l-3xl overflow-hidden"
              style={{
                background: `url(${heroImage}) center/cover`,
              }}
            >
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-r from-neutral-900 via-transparent to-transparent" />
            </div>
            {/* Floating accent card */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="absolute bottom-20 left-8 bg-white rounded-2xl p-6 shadow-2xl max-w-xs"
            >
              <div className="flex items-center gap-1 mb-2">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-neutral-600 text-sm">"Exceptional work that exceeded all expectations."</p>
              <p className="text-neutral-400 text-xs mt-2">— Featured Client</p>
            </motion.div>
          </motion.div>
        </div>
      </Container>
    </div>
  );

  // ============================================
  // VARIANT 9: Diagonal Split Hero
  // Dynamic diagonal division
  // Best for: Education, Modern agencies
  // ============================================
  const renderDiagonalSplitHero = () => (
    <div className="relative min-h-screen overflow-hidden">
      {/* Background split */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-white" />
        <div
          className="absolute top-0 right-0 w-3/4 h-full"
          style={{
            background: `linear-gradient(135deg, ${industry.colors.primary} 0%, ${industry.colors.primaryDark} 100%)`,
            clipPath: 'polygon(30% 0, 100% 0, 100% 100%, 0% 100%)',
          }}
        />
      </div>
      
      <Container className="relative z-10 min-h-screen flex items-center py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center w-full">
          {/* Left content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {showBadge && (
              <motion.div variants={itemVariants} className="mb-6">
                <span
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium bg-neutral-100 text-neutral-700"
                >
                  <TrendingUp className="w-4 h-4" style={{ color: industry.colors.primary }} />
                  {badgeText}
                </span>
              </motion.div>
            )}
            
            <motion.h1
              variants={itemVariants}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-neutral-900 leading-[1.1] mb-6"
            >
              {headlineSegments ? (
                <VariableWeightText segments={headlineSegments} as="span" />
              ) : (
                industry.hero.headline
              )}
            </motion.h1>
            
            <motion.p
              variants={itemVariants}
              className="text-lg text-neutral-600 leading-relaxed mb-8"
            >
              {industry.hero.subheadline}
            </motion.p>
            
            <motion.div variants={itemVariants} className="flex flex-wrap gap-4">
              <Button
                size="lg"
                className="px-8 py-4 rounded-xl"
                style={{ backgroundColor: industry.colors.primary }}
              >
                {industry.hero.cta}
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="px-8 py-4 rounded-xl border-2 border-neutral-300"
              >
                {industry.hero.ctaSecondary}
              </Button>
            </motion.div>
            
            {/* Stats row */}
            <motion.div
              variants={itemVariants}
              className="flex gap-8 mt-12 pt-8 border-t border-neutral-200"
            >
              {[
                { value: '15K+', label: 'Students' },
                { value: '98%', label: 'Success Rate' },
                { value: '50+', label: 'Programs' },
              ].map((stat, i) => (
                <div key={i}>
                  <p className="text-2xl font-bold" style={{ color: industry.colors.primary }}>{stat.value}</p>
                  <p className="text-sm text-neutral-500">{stat.label}</p>
                </div>
              ))}
            </motion.div>
          </motion.div>
          
          {/* Right content - on colored background */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="relative"
          >
            <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20">
              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: Award, title: 'Excellence', desc: 'Industry-leading programs' },
                  { icon: Users, title: 'Community', desc: 'Join thousands of learners' },
                  { icon: TrendingUp, title: 'Growth', desc: 'Proven track record' },
                  { icon: Star, title: 'Quality', desc: 'Five-star rated' },
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.6 + i * 0.1 }}
                    className="bg-white rounded-2xl p-5 shadow-lg"
                  >
                    <item.icon className="w-8 h-8 mb-3" style={{ color: industry.colors.primary }} />
                    <p className="font-semibold text-neutral-900">{item.title}</p>
                    <p className="text-sm text-neutral-500">{item.desc}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </Container>
    </div>
  );

  // ============================================
  // VARIANT 10: Floating Elements Hero
  // Dynamic floating cards and elements
  // Best for: Recruitment, Tech, Modern agencies
  // ============================================
  const renderFloatingElementsHero = () => (
    <div className="relative min-h-screen py-20 lg:py-28 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-neutral-50 to-neutral-100" />
      <FloatingShapesBackground />
      
      <Container className="relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center min-h-[80vh]">
          {/* Main content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="lg:col-span-6"
          >
            {showBadge && (
              <motion.div variants={itemVariants} className="mb-6">
                <Badge
                  className="px-4 py-2"
                  style={{
                    backgroundColor: `${industry.colors.primary}15`,
                    color: industry.colors.primary,
                  }}
                >
                  <Clock className="w-4 h-4 mr-2" />
                  {badgeText}
                </Badge>
              </motion.div>
            )}
            
            <motion.h1
              variants={itemVariants}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-neutral-900 leading-[1.1] mb-6"
            >
              {headlineSegments ? (
                <VariableWeightText segments={headlineSegments} as="span" />
              ) : (
                industry.hero.headline
              )}
            </motion.h1>
            
            <motion.p
              variants={itemVariants}
              className="text-lg text-neutral-600 leading-relaxed mb-8"
            >
              {industry.hero.subheadline}
            </motion.p>
            
            <motion.div variants={itemVariants} className="flex flex-wrap gap-4">
              <Button
                size="lg"
                className="px-8 py-4 rounded-2xl shadow-lg hover:shadow-xl transition-shadow"
                style={{ backgroundColor: industry.colors.primary }}
              >
                {industry.hero.cta}
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button
                variant="ghost"
                size="lg"
                className="px-8 py-4 rounded-2xl"
              >
                <Play className="mr-2 w-5 h-5" style={{ color: industry.colors.primary }} />
                {industry.hero.ctaSecondary}
              </Button>
            </motion.div>
          </motion.div>
          
          {/* Floating elements */}
          <div className="lg:col-span-6 relative h-[500px] hidden lg:block">
            {/* Main floating card */}
            <motion.div
              initial={{ opacity: 0, y: 50, x: -20 }}
              animate={{ opacity: 1, y: 0, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white rounded-3xl p-8 shadow-2xl w-80"
            >
              <div
                className="w-16 h-16 rounded-2xl flex items-center justify-center mb-4"
                style={{ backgroundColor: `${industry.colors.primary}15` }}
              >
                <TrendingUp className="w-8 h-8" style={{ color: industry.colors.primary }} />
              </div>
              <p className="text-3xl font-bold text-neutral-900 mb-1">10,000+</p>
              <p className="text-neutral-500">Successful Placements</p>
            </motion.div>
            
            {/* Floating card 2 */}
            <motion.div
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="absolute top-10 right-10 bg-white rounded-2xl p-4 shadow-xl"
            >
              <div className="flex items-center gap-3">
                <div className="flex -space-x-2">
                  {[1, 2, 3].map((i) => (
                    <div
                      key={i}
                      className="w-8 h-8 rounded-full border-2 border-white"
                      style={{ backgroundColor: i === 1 ? industry.colors.primary : i === 2 ? industry.colors.primaryLight : industry.colors.accent }}
                    />
                  ))}
                </div>
                <div>
                  <p className="text-sm font-semibold">500+ Companies</p>
                  <p className="text-xs text-neutral-500">Trust our service</p>
                </div>
              </div>
            </motion.div>
            
            {/* Floating card 3 */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="absolute bottom-20 left-0 rounded-2xl p-4 shadow-xl"
              style={{ backgroundColor: industry.colors.primary }}
            >
              <div className="flex items-center gap-2 text-white">
                <CheckCircle className="w-5 h-5" />
                <span className="font-medium">14-Day Average Fill Time</span>
              </div>
            </motion.div>
            
            {/* Floating rating */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.9 }}
              className="absolute bottom-10 right-20 bg-white rounded-2xl p-4 shadow-xl"
            >
              <div className="flex items-center gap-1 mb-1">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-sm text-neutral-500">4.9 out of 5 stars</p>
            </motion.div>
          </div>
        </div>
      </Container>
    </div>
  );

  // Render based on variant
  const renderHero = () => {
    switch (variant) {
      case 'split':
        return renderSplitHero();
      case 'centered-cards':
        return renderCenteredCardsHero();
      case 'video-bg':
        return renderVideoBackgroundHero();
      case 'asymmetric':
        return renderAsymmetricHero();
      case 'editorial':
        return renderEditorialHero();
      case 'bento':
        return renderBentoHero();
      case 'minimal-centered':
        return renderMinimalCenteredHero();
      case 'image-overlap':
        return renderImageOverlapHero();
      case 'diagonal-split':
        return renderDiagonalSplitHero();
      case 'floating-elements':
        return renderFloatingElementsHero();
      default:
        return renderSplitHero();
    }
  };

  return (
    <section className="relative overflow-hidden">
      {/* Background decoration for non-video variants */}
      {variant !== 'video-bg' && (
        <div
          className="absolute top-0 right-0 w-1/2 h-full opacity-5 pointer-events-none"
          style={{
            background: `radial-gradient(circle at 70% 30%, ${industry.colors.primary} 0%, transparent 70%)`,
          }}
        />
      )}
      {renderHero()}
    </section>
  );
};

export default Hero;
