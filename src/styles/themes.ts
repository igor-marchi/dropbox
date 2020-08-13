export const themes = {
  light: {
    'color-primary': '#0d2f81',
    'color-secondary': '#ffe7aa',
    'color-tertiary': '#fff',
    'color-quaternary': '#000',

    'color-blue': '#0061ff',
    'color-border': '#bdc4c9',
  },
  dark: {
    'color-primary': '#003459',
    'color-secondary': '#9b9b9b',
    'color-tertiary': '#343434',
    'color-quaternary': '#00171F',

    'color-blue': '#8257e5',
    'color-border': '#2b7489',
  },
};

export type ThemeName = keyof typeof themes;
export type ThemeType = typeof themes.light | typeof themes.dark;
