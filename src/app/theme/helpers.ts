import { PaletteMode } from '@mui/material';

export const getThemePalette = (mode: PaletteMode) => ({
  palette: {
    mode,
    ...(mode === 'light'
      ? {
          colors: {
            contentBackground: '#F8FAFB',
            mainBackground: '#FFFFFF',
            text: '#000',
          },
        }
      : {
          colors: {
            contentBackground: '#F8FAFB',
            mainBackground:
              'radial-gradient(circle, rgba(64,20,94,1) 0%, rgba(38,15,107,1) 15%, rgba(64,20,94,1) 55%, rgba(38,15,107,1) 100%)',
            text: '#ffffff',
          },
        }),
  },
  typography: {
    allVariants: {
      fontFamily: ['PT Sans', 'sans-serif'].join(', '),
    },
    h1: {
      fontFamily: ['Poppins', 'sans-serif'].join(', '),
      fontWeight: 700,
    },
  },
});
