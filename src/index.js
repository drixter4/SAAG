import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './App';

const Root = () => {
  React.useEffect(() => {
    // Cargar CSS dinámicamente desde public/
    const loadCSS = (href) => {
      const link = document.createElement('link');
      link.rel = 'stylesheet';
      link.href = href;
      document.head.appendChild(link);
    };

    // Cargar todos los CSS
    loadCSS('/css/vendors.min.css');
    loadCSS('/css/icon.min.css');
    loadCSS('/css/style.css');
    loadCSS('/css/responsive.css');
    loadCSS('/demos/business/business.css');

    
    // loadCSS('/css/formaviable.css')
    // Cargar scripts
    const loadScript = (src) => {
      return new Promise((resolve, reject) => {
        const script = document.createElement('script');
        script.src = src;
        script.async = true;
        script.onload = resolve;
        script.onerror = reject;
        document.body.appendChild(script);
      });
    };

    const loadAllScripts = async () => {
      try {
        await loadScript('/js/jquery.js');
        await loadScript('/js/vendors.min.js');
        await loadScript('/js/main.js');
        await loadScript('https://cdn.jsdelivr.net/npm/sweetalert2@11') 
        // await loadScript('/js/hotel/getRoomsAviable.js')
           } catch (error) {
        console.error('Error loading scripts:', error);
      }
    };

    loadAllScripts();
  }, []);

  return (
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Root />);