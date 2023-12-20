import React from 'react';
import ReactDOM from 'react-dom';
import '@mui/material/styles';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import theme from './theme';
import App from './App';
import emailjs from "emailjs-com";

emailjs.init("82Se2kBaLJNBC3rTB");

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <App />
  </ThemeProvider>,
  document.getElementById('root')
);