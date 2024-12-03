// Theme configuration
export const themes = {
  light: {
    primary: '#3b82f6',
    secondary: '#1d4ed8',
    background: '#ffffff',
    surface: '#f3f4f6',
    text: {
      primary: '#111827',
      secondary: '#4b5563',
      inverse: '#ffffff'
    },
    border: '#e5e7eb'
  },
  dark: {
    primary: '#60a5fa',
    secondary: '#3b82f6',
    background: '#111827',
    surface: '#1f2937',
    text: {
      primary: '#f9fafb',
      secondary: '#d1d5db',
      inverse: '#111827'
    },
    border: '#374151'
  }
};

export const applyTheme = (theme) => {
  const root = document.documentElement;
  Object.entries(themes[theme]).forEach(([property, value]) => {
    if (typeof value === 'object') {
      Object.entries(value).forEach(([subProperty, subValue]) => {
        root.style.setProperty(`--${property}-${subProperty}`, subValue);
      });
    } else {
      root.style.setProperty(`--${property}`, value);
    }
  });
};