import { createTheme } from '@mui/material/styles';

// Define tu paleta de colores personalizada aquí
const theme = createTheme({
  palette: {
    primary: {
      main: '#232020', // Puedes cambiar este color según tu preferencia
    },
    secondary: {
      main: '#f50057', // Puedes cambiar este color según tu preferencia
    },
  },
  typography: {
    fontFamily: 'DM Sans, sans-serif',
    fontWeight: 300, 
    fontSize: 21,
    '@media (min-width:600px)': {
      fontSize: 17,
    },
    h1: {
      fontSize: 100,
      fontWeight: 200,
      '@media (max-width:600px)': {
        fontSize: 55,
      },
    },
    h2: {
      fontSize: 55,
      fontWeight: 300,
      '@media (max-width:600px)': {
        fontSize: 48,
      },
    },
    h3: {
      fontSize: 48,
      fontWeight: 400,
      '@media (max-width:600px)': {
        fontSize: 40,
      },
    },
  }, 
  button: {
    fontSize: 19,
  },
  
});

export default theme;
