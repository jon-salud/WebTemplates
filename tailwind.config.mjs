/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      // Fluid Typography System (inspired by Circula)
      fontSize: {
        // Display sizes
        'display-1': ['clamp(2.5rem, 5vw + 1rem, 5rem)', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
        'display-2': ['clamp(2rem, 4vw + 0.5rem, 4rem)', { lineHeight: '1.15', letterSpacing: '-0.02em' }],
        'display-3': ['clamp(1.75rem, 3vw + 0.5rem, 3rem)', { lineHeight: '1.2', letterSpacing: '-0.01em' }],
        // Heading sizes
        'heading-1': ['clamp(1.5rem, 2.5vw + 0.5rem, 2.5rem)', { lineHeight: '1.25', letterSpacing: '-0.01em' }],
        'heading-2': ['clamp(1.25rem, 2vw + 0.25rem, 2rem)', { lineHeight: '1.3' }],
        'heading-3': ['clamp(1.125rem, 1.5vw + 0.25rem, 1.5rem)', { lineHeight: '1.35' }],
        // Body sizes
        'body-xl': ['clamp(1.125rem, 1vw + 0.5rem, 1.375rem)', { lineHeight: '1.6' }],
        'body-lg': ['clamp(1rem, 0.5vw + 0.75rem, 1.125rem)', { lineHeight: '1.7' }],
        'body': ['1rem', { lineHeight: '1.7' }],
        'body-sm': ['0.875rem', { lineHeight: '1.6' }],
        'body-xs': ['0.75rem', { lineHeight: '1.5' }],
      },
      // Color System
      colors: {
        // Brand colors - can be customized per industry
        brand: {
          black: '#222222',
          white: '#ffffff',
          // Primary accent colors (change per industry)
          primary: {
            DEFAULT: '#0066CC',
            light: '#3388DD',
            dark: '#004499',
          },
          // Secondary accent
          secondary: {
            DEFAULT: '#42A344',
            light: '#5BB85D',
            dark: '#358736',
          },
          // Accent colors
          accent: {
            blue: '#4A90D9',
            green: '#42A344',
            yellow: '#FFCD00',
            coral: '#FF6B6B',
            purple: '#8B5CF6',
          },
        },
        // Neutral colors
        neutral: {
          50: '#FAFAFA',
          100: '#F4F4F4',
          200: '#E5E5E5',
          300: '#D4D4D4',
          400: '#A3A3A3',
          500: '#737373',
          600: '#525252',
          700: '#404040',
          800: '#262626',
          900: '#171717',
        },
        // Background colors
        surface: {
          light: '#FFFFFF',
          cream: '#FFFEF5',
          gray: '#F5F5F5',
          dark: '#222222',
          darker: '#1a1a1a',
        },
      },
      // Spacing System
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
        '30': '7.5rem',
        '34': '8.5rem',
        '38': '9.5rem',
        // Section spacing
        'section-sm': 'clamp(3rem, 8vw, 5rem)',
        'section-md': 'clamp(4rem, 10vw, 7rem)',
        'section-lg': 'clamp(5rem, 12vw, 9rem)',
      },
      // Container sizes
      maxWidth: {
        'container-sm': '48rem',
        'container-md': '64rem',
        'container-lg': '80rem',
        'container-xl': '90rem',
      },
      // Border radius
      borderRadius: {
        'xl': '1rem',
        '2xl': '1.25rem',
        '3xl': '1.5rem',
        '4xl': '2rem',
      },
      // Box shadows
      boxShadow: {
        'card': '0 4px 20px rgba(0, 0, 0, 0.08)',
        'card-hover': '0 12px 40px rgba(0, 0, 0, 0.15)',
        'button': '0 4px 14px rgba(0, 102, 204, 0.25)',
        'glass': '0 8px 32px rgba(0, 0, 0, 0.1)',
      },
      // Animation
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out forwards',
        'fade-in-up': 'fadeInUp 0.6s ease-out forwards',
        'scale-in': 'scaleIn 0.4s ease-out forwards',
        'slide-in-right': 'slideInRight 0.5s ease-out forwards',
        'slide-in-left': 'slideInLeft 0.5s ease-out forwards',
        'marquee': 'marquee 30s linear infinite',
        'marquee-reverse': 'marquee-reverse 30s linear infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.95)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        slideInRight: {
          '0%': { opacity: '0', transform: 'translateX(30px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        slideInLeft: {
          '0%': { opacity: '0', transform: 'translateX(-30px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        'marquee-reverse': {
          '0%': { transform: 'translateX(-50%)' },
          '100%': { transform: 'translateX(0)' },
        },
      },
      // Transitions
      transitionDuration: {
        '400': '400ms',
        '600': '600ms',
        '800': '800ms',
      },
      transitionTimingFunction: {
        'bounce-in': 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
        'smooth': 'cubic-bezier(0.4, 0, 0.2, 1)',
      },
      // Backdrop blur
      backdropBlur: {
        'xs': '2px',
      },
      // Font family - Dynamic via CSS variables
      fontFamily: {
        'sans': ['var(--font-body)', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
        'display': ['var(--font-heading)', 'system-ui', 'sans-serif'],
      },
      // Font weights for varied thickness
      fontWeight: {
        'thin': '100',
        'extralight': '200',
        'light': '300',
        'normal': '400',
        'medium': '500',
        'semibold': '600',
        'bold': '700',
        'extrabold': '800',
        'black': '900',
      },
    },
  },
  plugins: [],
}
