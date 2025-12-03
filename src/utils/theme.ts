import type { IndustryConfig } from '@/config/industries';

interface ThemeTokens {
  background: string;
  surface: string;
  text: string;
  border: string;
  primary: string;
  accent: string;
  isDarkMode: boolean;
}

const FALLBACK_LIGHT = {
  background: '#ffffff',
  surface: '#f8fafc',
  text: '#0f172a',
};

const FALLBACK_DARK = {
  background: '#0b1120',
  surface: '#111827',
  text: '#f8fafc',
};

/**
 * Centralizes how we compute theme tokens from an industry configuration so components
 * have a single source for light/dark aware colors.
 */
export const getThemeTokens = (industry: IndustryConfig): ThemeTokens => {
  const isDarkMode = industry.themeMode === 'dark';
  const fallbacks = isDarkMode ? FALLBACK_DARK : FALLBACK_LIGHT;
  const themeColors = industry.themeColors || fallbacks;

  return {
    background: themeColors.background || fallbacks.background,
    surface: themeColors.surface || fallbacks.surface,
    text: themeColors.text || fallbacks.text,
    border: isDarkMode ? 'rgba(248, 250, 252, 0.15)' : 'rgba(15, 23, 42, 0.1)',
    primary: industry.colors.primary,
    accent: industry.colors.accent || industry.colors.primary,
    isDarkMode,
  };
};

export const hexToRgba = (hex: string, alpha = 1): string => {
  const sanitized = hex?.replace('#', '');
  if (!sanitized || (sanitized.length !== 3 && sanitized.length !== 6)) {
    return `rgba(0, 0, 0, ${alpha})`;
  }

  const expanded = sanitized.length === 3
    ? sanitized.split('').map((char) => `${char}${char}`).join('')
    : sanitized;

  const intVal = parseInt(expanded, 16);
  const r = (intVal >> 16) & 255;
  const g = (intVal >> 8) & 255;
  const b = intVal & 255;

  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
};
