const ICON_EMOJI_MAP: Record<string, string> = {
  calculator: '🧮',
  'chart-bar': '📊',
  briefcase: '💼',
  'shield-check': '🛡️',
  users: '👥',
  'trending-up': '📈',
  building: '🏢',
  scale: '⚖️',
  'file-text': '📄',
  shield: '🛡️',
  home: '🏠',
  heart: '❤️',
  activity: '💓',
  clipboard: '📋',
  zap: '⚡',
  video: '🎥',
  calendar: '📅',
  settings: '⚙️',
  'refresh-cw': '🔄',
  'pie-chart': '🥧',
  target: '🎯',
  umbrella: '☂️',
  'graduation-cap': '🎓',
  'dollar-sign': '💲',
  search: '🔍',
  key: '🔑',
};

export const resolveServiceIcon = (icon?: string): string => {
  if (!icon) return '💼';
  return ICON_EMOJI_MAP[icon] || '💼';
};

export default resolveServiceIcon;
