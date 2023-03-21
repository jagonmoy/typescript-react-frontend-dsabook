import { createTheme } from '@mui/material/styles';

declare module '@mui/material/styles' {
  interface Theme {
    myCustomPalette: {
      main: string;
      secondary: string;
    };
  }
  // allow configuration using `createTheme`
  interface PaletteOptions {
    myCustomPalette?: {
      main?: string;
      secondary?: string;
    };
  }
}

const theme = createTheme({
  palette: {
    myCustomPalette: {
      main: '#ff4400',
      secondary: '#0077ff',
    },
  },
});

export default theme;