import { StrictMode } from 'react'
// src/main.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './styles.css';
import { CountryProvider } from './context/CountryContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <CountryProvider>
    <App />
  </CountryProvider>
);
