import React from 'react';
import ReactDOM from 'react-dom/client';
// bootstrap 
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import './index.css';
import App from './App';
// i18next
import "./i18n";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

