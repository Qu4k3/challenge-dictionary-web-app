import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('dictionary'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

