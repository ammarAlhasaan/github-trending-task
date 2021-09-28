import React, { createContext, useEffect, useState } from 'react';
import { useMediaPredicate } from 'react-media-hook';

const ThemeContext = createContext({
  themeMode: 'light',
});

const ThemeProvider = ({ children }: any) => {
  const preferredTheme = useMediaPredicate('(prefers-color-scheme: dark)') ? 'dark' : 'light';

  const [appData, setApp] = useState({
    themeMode: localStorage.getItem('theme-mode') || preferredTheme,
    changeTheme: (mode: any) => setApp((data) => ({ ...data, themeMode: mode })),
  });

  useEffect(() => {
    const removeClass = appData.themeMode === 'dark' ? 'light' : 'dark';
    document.body.classList.remove(removeClass);
    document.body.classList.add(appData.themeMode);
    localStorage.setItem('theme-mode', appData.themeMode);
  }, [appData.themeMode]);

  // @ts-ignore
  return <ThemeContext.Provider value={appData}>{children}</ThemeContext.Provider>;
};

export { ThemeContext, ThemeProvider };
