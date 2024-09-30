
import { createRoot } from 'react-dom/client';
import App from './App';
import './styles.css'; // Import your CSS here
import React from 'react';

const rootElement = document.getElementById('app');
if (rootElement) {
  const root = createRoot(rootElement);
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
}
