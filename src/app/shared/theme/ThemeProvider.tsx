import { PaletteMode } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useMemo, useState, ReactNode, createContext, useContext } from 'react';
import { getThemePalette } from './helpers';
interface ColorModeContextProps {
  toggleColorMode: () => void;
}

const ColorModeContext = createContext<ColorModeContextProps>({} as ColorModeContextProps);
const useThemeLayout = (): ColorModeContextProps => useContext(ColorModeContext);

const ThemeLayout = ({ children }: { children: ReactNode }) => {
  const [currentThemeMode, setCurrentThemeMode] = useState<PaletteMode>('light');

  const theme = useMemo(() => {
    return createTheme(getThemePalette(currentThemeMode));
  }, [currentThemeMode]);

  const colorMode = useMemo(() => {
    return {
      toggleColorMode: () => {
        setCurrentThemeMode((prevMode: PaletteMode) => (prevMode === 'light' ? 'dark' : 'light'));
      },
    };
  }, []);

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </ColorModeContext.Provider>
  );
};

export { ThemeLayout, useThemeLayout };
