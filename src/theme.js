import { createTheme } from "@mui/material/styles";

// Define tu paleta de colores personalizada aquí
const theme = createTheme({
  palette: {
    primary: {
      main: "#7c6f65",
    },    
  },
  typography: {
    fontFamily: "DM Sans, sans-serif",
    fontWeight: 300,
    fontSize: 21,
    "@media (min-width:600px)": {
      fontSize: 17,
    },
    h1: {
      fontFamily: "Gilda Display, serif",
      color: '#393d42',
      fontSize: 100,
      "@media (max-width:600px)": {
        fontSize: 55,
      },
    },
    h2: {
      fontFamily: "Gilda Display, serif",
      fontSize: 55,
      "@media (max-width:600px)": {
        fontSize: 48,
      },
    },
    h3: {
      fontFamily: "Gilda Display, serif",
      fontSize: 45,
      "@media (max-width:600px)": {
        fontSize: 40,
      },
    },
    h4: {
      fontWeight: 200,
      fontSize: 36,
      letterSpacing: 2,
      "@media (max-width:600px)": {
        fontSize: 30,
      },
    },
  },
  button: {
    fontFamily: "Gilda Display, serif",
    fontSize: 19,
  },
});

export default theme;
