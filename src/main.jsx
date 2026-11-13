import React, { useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { AppProvider } from './store/AppContext';
import App from './App';
import './styles.css';

const IMAGE_FALLBACK = 'data:image/svg+xml;charset=UTF-8,' + encodeURIComponent(`
<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="800" viewBox="0 0 1200 800">
  <rect width="1200" height="800" fill="#151511"/>
  <circle cx="600" cy="400" r="235" fill="#23231f" stroke="#c9a25f" stroke-width="7"/>
  <circle cx="600" cy="400" r="180" fill="#0e0e0c"/>
  <text x="600" y="392" fill="#e8d6b0" font-size="42" text-anchor="middle" font-family="Georgia,serif" letter-spacing="5">ROYAL BITE</text>
  <text x="600" y="438" fill="#aaa096" font-size="20" text-anchor="middle" font-family="Arial,sans-serif" letter-spacing="2">IMAGE UNAVAILABLE</text>
</svg>`);

function Bootstrap() {
  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth';

    const handleImageError = (event) => {
      const target = event.target;
      if (target instanceof HTMLImageElement && !target.dataset.fallbackApplied) {
        target.dataset.fallbackApplied = 'true';
        target.src = IMAGE_FALLBACK;
      }
    };

    window.addEventListener('error', handleImageError, true);
    return () => window.removeEventListener('error', handleImageError, true);
  }, []);

  return <App />;
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <AppProvider>
        <Bootstrap />
      </AppProvider>
    </BrowserRouter>
  </React.StrictMode>,
);
