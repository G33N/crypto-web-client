const lightTheme = {
  primary: 'rgba(0,0,0,1)',
  text: '#9b9b9b',
  textSecondary: 'rgba(255,165,0,1)',
  background: 'rgba(255,255,255,1)',
  backgroundVariant: 'rgba(251,249,249,1)',
  border: 'rgba(58,52,51,0.12)',
  borderLight: 'rgba(58,52,51,0.05)',
};

const darkTheme: Theme = {
  primary: 'rgba(255,255,255,1)',
  text: '#9b9b9b',
  textSecondary: 'rgba(255,165,0,1)',
  background: 'rgba(0,0,0,1)',
  backgroundVariant: 'rgba(28,26,26,1)',
  border: 'rgba(241,233,231,0.15)',
  borderLight: 'rgba(241,233,231,0.05)',
};

export type Theme = typeof lightTheme;

export const themes = {
  light: lightTheme,
  dark: darkTheme,
};
