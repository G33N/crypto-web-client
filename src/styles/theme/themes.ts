const lightTheme = {
  primary: '#2482FA',
  secondary: '#92C1FD',
  text: '#0A0A0A',
  textSecondary: '#9D9D9D',
  textlight: '#787878',
  background: 'rgba(255,255,255,1)',
  backgroundVariant: 'rgba(251,249,249,1)',
  border: 'rgba(58,52,51,0.12)',
  borderLight: '#CECECE',
  errorColor: '#F44336',
  successColor: '#4CAF50',
  labelColor: ' #92C1FD',
};

const darkTheme: Theme = {
  primary: '#2482FA',
  secondary: '#92C1FD',
  text: '#9b9b9b',
  textSecondary: 'rgba(255,165,0,1)',
  textlight: '#CECECE',
  background: 'rgba(0,0,0,1)',
  backgroundVariant: 'rgba(28,26,26,1)',
  border: 'rgba(241,233,231,0.15)',
  borderLight: 'rgba(241,233,231,0.05)',
  errorColor: '#F44336',
  successColor: '#4CAF50',
  labelColor: ' #92C1FD',
};

export type Theme = typeof lightTheme;

export const themes = {
  light: lightTheme,
  dark: darkTheme,
};
