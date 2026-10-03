import React, { useState, useEffect } from 'react';
import { LanguageProvider } from './context/LanguageContext';
import { ThemeProvider } from './context/ThemeContext';
import { CartProvider } from './context/CartContext';
import { Navigation } from './components/Navigation';
import { Footer } from './components/Footer';
import { CartDrawer } from './components/CartDrawer';
import { CheckoutModal } from './components/CheckoutModal';
import { CustomCursor } from './components/CustomCursor';
import { MobileBottomBar } from './components/MobileBottomBar';
import { HomePage } from './pages/HomePage';
import { ShopPage } from './pages/ShopPage';
import { ProductDetailPage } from './pages/ProductDetailPage';
import { AtelierPage } from './pages/AtelierPage';
import { ProcessPage } from './pages/ProcessPage';
import { ContactPage } from './pages/ContactPage';
import { LegalPage } from './pages/LegalPage';

export function AppContent() {
  const [currentPath, setCurrentPath] = useState(() => {
    return window.location.pathname || '/';
  });

  useEffect(() => {
    const handlePopState = () => {
      setCurrentPath(window.location.pathname || '/');
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const navigateTo = (path) => {
    if (path.startsWith('/#')) {
      setCurrentPath('/');
      window.history.pushState({}, '', path);
      return;
    }
    window.history.pushState({}, '', path);
    setCurrentPath(path);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Route matching:
  const renderCurrentView = () => {
    const p = currentPath.toLowerCase();

    // Product pages: /fr/product/:slug or legacy /fr/product/lamp-...
    if (p.includes('/product/')) {
      const parts = p.split('/product/');
      const rawSlug = parts[1] ? parts[1].replace(/\/$/, '') : 'warda-sienna';
      return <ProductDetailPage slug={rawSlug} navigateTo={navigateTo} />;
    }

    // Shop page: /fr/shop
    if (p.includes('/shop')) {
      return <ShopPage navigateTo={navigateTo} />;
    }

    // Atelier page: /fr/atelier or /fr/our-store
    if (p.includes('/atelier') || p.includes('/our-store')) {
      return <AtelierPage navigateTo={navigateTo} />;
    }

    // Process page: /fr/how-it-is-made or /fr/pro-process
    if (p.includes('/how-it-is-made') || p.includes('/pro-process')) {
      return <ProcessPage navigateTo={navigateTo} />;
    }

    // Contact page: /fr/contact
    if (p.includes('/contact')) {
      return <ContactPage navigateTo={navigateTo} />;
    }

    // Privacy page: /fr/privacy
    if (p.includes('/privacy')) {
      return <LegalPage initialTab="privacy" />;
    }

    // Terms page: /fr/terms
    if (p.includes('/terms')) {
      return <LegalPage initialTab="terms" />;
    }

    // Default Home Page
    return <HomePage navigateTo={navigateTo} />;
  };

  return (
    <div className="noular-app" style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <CustomCursor />
      <Navigation currentRoute={currentPath} navigateTo={navigateTo} />
      <div style={{ flex: 1, paddingBottom: 'env(safe-area-inset-bottom, 3.5rem)' }}>{renderCurrentView()}</div>
      <Footer navigateTo={navigateTo} />
      <MobileBottomBar currentRoute={currentPath} navigateTo={navigateTo} />
      <CartDrawer />
      <CheckoutModal />
    </div>
  );
}

export default function App() {
  return (
    <LanguageProvider>
      <ThemeProvider>
        <CartProvider>
          <AppContent />
        </CartProvider>
      </ThemeProvider>
    </LanguageProvider>
  );
}
