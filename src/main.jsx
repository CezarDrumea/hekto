import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import { ResetStyles } from './globalStyles/reset.js';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ResetStyles />
    <App />
  </React.StrictMode>
);
