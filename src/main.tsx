import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';

// Ensure favicon is set immediately
const setFavicon = (path: string) => {
  // Remove existing favicon links
  const existingIcons = document.querySelectorAll("link[rel*='icon']");
  existingIcons.forEach(icon => icon.remove());
  
  // Create new favicon links
  const favicon = document.createElement('link');
  favicon.rel = 'icon';
  favicon.type = 'image/png';
  favicon.href = path;
  document.head.appendChild(favicon);
  
  const shortcutIcon = document.createElement('link');
  shortcutIcon.rel = 'shortcut icon';
  shortcutIcon.type = 'image/png';
  shortcutIcon.href = path;
  document.head.appendChild(shortcutIcon);
  
  const appleIcon = document.createElement('link');
  appleIcon.rel = 'apple-touch-icon';
  appleIcon.href = path;
  document.head.appendChild(appleIcon);
};

// Set initial favicon
setFavicon('/logo.png');

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
