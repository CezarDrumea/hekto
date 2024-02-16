import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';

import ResetStyles from './assets/globalStyled/reset.js';
import { ThemeProvider } from 'styled-components';
import colorVars from './assets/themes/colors.js';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={colorVars}>
      <ResetStyles />
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
