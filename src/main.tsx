import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';

// Ensure favicon is set immediately with proper path
const setFavicon = (path: string) => {
  // Use absolute path from root
  const faviconPath = path.startsWith('/') ? path : `/${path}`;
  const fullPath = `${window.location.origin}${faviconPath}`;
  
  // Remove existing favicon links
  const existingIcons = document.querySelectorAll("link[rel*='icon']");
  existingIcons.forEach(icon => icon.remove());
  
  // Create new favicon links with cache busting
  const timestamp = new Date().getTime();
  const cacheBustedPath = `${faviconPath}?v=${timestamp}`;
  
  const favicon = document.createElement('link');
  favicon.rel = 'icon';
  favicon.type = 'image/png';
  favicon.href = cacheBustedPath;
  document.head.appendChild(favicon);
  
  const shortcutIcon = document.createElement('link');
  shortcutIcon.rel = 'shortcut icon';
  shortcutIcon.type = 'image/png';
  shortcutIcon.href = cacheBustedPath;
  document.head.appendChild(shortcutIcon);
  
  const appleIcon = document.createElement('link');
  appleIcon.rel = 'apple-touch-icon';
  appleIcon.href = cacheBustedPath;
  document.head.appendChild(appleIcon);
  
  // Also try setting it via the existing link elements in HTML
  const existingFavicon = document.getElementById('favicon') as HTMLLinkElement;
  const existingShortcut = document.getElementById('shortcut-icon') as HTMLLinkElement;
  const existingApple = document.getElementById('apple-icon') as HTMLLinkElement;
  
  if (existingFavicon) existingFavicon.href = cacheBustedPath;
  if (existingShortcut) existingShortcut.href = cacheBustedPath;
  if (existingApple) existingApple.href = cacheBustedPath;
};

// Set initial favicon immediately
setFavicon('/logo.png');

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
