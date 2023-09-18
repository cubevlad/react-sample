import type { PaletteMode } from '@mui/material';

import { DARK_THEME_COLORS, LIGHT_THEME_COLORS, THEME_SHADOWS } from './colors';

export const getThemePalette = (mode: PaletteMode) => ({
  palette: {
    mode,
    ...(mode === 'light'
      ? {
          colors: {
            contentBackground: LIGHT_THEME_COLORS.seasalt,
            mainBackground: LIGHT_THEME_COLORS['pure-white'],
            text: LIGHT_THEME_COLORS['pure-dark'],
          },
        }
      : {
          // TODO: wip
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
  // shadows: {},
});
