import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';

import ResetStyles from './globalStyles/reset.js';
import ColorVars from './globalStyles/colors.js';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ColorVars />
    <ResetStyles />

    <App />
  </React.StrictMode>
);
