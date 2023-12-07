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
    fontFamily: 'DM Sans, sans-serif', // Cambia 'Roboto' por la fuente que prefieras
  },
  
});

export default theme;
