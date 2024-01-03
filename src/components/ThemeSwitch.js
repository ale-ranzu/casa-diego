// ThemeSwitch.js

import React, { useState } from 'react';
import Switch from '@material-ui/core/Switch';
import { createTheme, ThemeProvider } from '@material-ui/core/styles';

const ThemeSwitch = () => {
  const [darkMode, setDarkMode] = useState(false);

  const handleThemeChange = () => {
    setDarkMode(!darkMode);
  };

  const theme = createTheme({
    palette: {
      type: darkMode ? 'dark' : 'light',
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <div>
        <Switch
          checked={darkMode}
          onChange={handleThemeChange}
          name="themeSwitch"
          inputProps={{ 'aria-label': 'Cambiar tema' }}
        />
        <span>{darkMode ? 'Modo Oscuro' : 'Modo Claro'}</span>
      </div>
    </ThemeProvider>
  );
};

export default ThemeSwitch;
