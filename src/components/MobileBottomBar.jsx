import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { useCart } from '../context/CartContext';
import { Home, ShoppingBag, Hammer, MessageCircle, Sparkles } from 'lucide-react';
import { BRAND } from '../data/noularData';

export const MobileBottomBar = ({ currentRoute, navigateTo }) => {
  const { t, isAr, dir } = useLanguage();
  const { totalUnits, setIsDrawerOpen } = useCart();

  const handleNav = (route, e) => {
    e.preventDefault();
    if (route === currentRoute) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      navigateTo(route);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  // On Product Detail Pages, yield to the dedicated Sticky Purchase Bar
  if (currentRoute && currentRoute.includes('/product/')) {
    return null;
  }

  return (
    <nav
      className="mobile-bottom-bar"
      aria-label="Navigation mobile principale"
      style={{
        position: 'fixed',
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: 85,
        backgroundColor: 'var(--bg-glass)',
        backdropFilter: 'blur(16px)',
        WebkitBackdropFilter: 'blur(16px)',
        borderTop: '1px solid var(--border-light)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-around',
        padding: '0.5rem 0.6rem env(safe-area-inset-bottom, 0.5rem) 0.6rem',
        boxShadow: '0 -4px 20px rgba(0, 0, 0, 0.1)',
        direction: dir
      }}
    >
      {/* 1. Home */}
      <button
        onClick={(e) => handleNav('/', e)}
        style={{
          background: 'none',
          border: 'none',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '0.2rem',
          padding: '0.3rem 0.5rem',
          cursor: 'pointer',
          color: currentRoute === '/' ? 'var(--color-terracotta)' : 'var(--text-secondary)'
        }}
      >
        <Home size={19} />
        <span style={{ fontSize: '0.66rem', fontWeight: currentRoute === '/' ? 700 : 500 }}>
          {t({ ar: 'الرئيسية', fr: 'Accueil', en: 'Home' })}
        </span>
      </button>

      {/* 2. Shop */}
      <button
        onClick={(e) => handleNav('/fr/shop', e)}
        style={{
          background: 'none',
          border: 'none',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '0.2rem',
          padding: '0.3rem 0.5rem',
          cursor: 'pointer',
          color: currentRoute === '/fr/shop' ? 'var(--color-terracotta)' : 'var(--text-secondary)'
        }}
      >
        <ShoppingBag size={19} />
        <span style={{ fontSize: '0.66rem', fontWeight: currentRoute === '/fr/shop' ? 700 : 500 }}>
          {t({ ar: 'المتجر', fr: 'Boutique', en: 'Shop' })}
        </span>
      </button>

      {/* 3. Atelier */}
      <button
        onClick={(e) => handleNav('/fr/atelier', e)}
        style={{
          background: 'none',
          border: 'none',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '0.2rem',
          padding: '0.3rem 0.5rem',
          cursor: 'pointer',
          color: currentRoute === '/fr/atelier' ? 'var(--color-terracotta)' : 'var(--text-secondary)'
        }}
      >
        <Hammer size={19} />
        <span style={{ fontSize: '0.66rem', fontWeight: currentRoute === '/fr/atelier' ? 700 : 500 }}>
          {t({ ar: 'الورشة', fr: 'Atelier', en: 'Atelier' })}
        </span>
      </button>

      {/* 4. WhatsApp Direct */}
      <a
        href={`https://wa.me/${BRAND.contact.whatsappRaw}`}
        target="_blank"
        rel="noreferrer"
        style={{
          textDecoration: 'none',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '0.2rem',
          padding: '0.3rem 0.5rem',
          cursor: 'pointer',
          color: '#25D366'
        }}
      >
        <MessageCircle size={19} />
        <span style={{ fontSize: '0.66rem', fontWeight: 700 }}>
          {t({ ar: 'واتساب', fr: 'WhatsApp', en: 'WhatsApp' })}
        </span>
      </a>

      {/* 5. Cart with Live Badge */}
      <button
        onClick={() => setIsDrawerOpen(true)}
        style={{
          background: 'none',
          border: 'none',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '0.2rem',
          padding: '0.3rem 0.5rem',
          cursor: 'pointer',
          position: 'relative',
          color: 'var(--text-primary)'
        }}
        aria-label="Ouvrir le panier"
      >
        <div style={{ position: 'relative' }}>
          <ShoppingBag size={19} />
          {totalUnits > 0 && (
            <span
              style={{
                position: 'absolute',
                top: '-4px',
                right: '-8px',
                width: '16px',
                height: '16px',
                borderRadius: '50%',
                backgroundColor: 'var(--color-terracotta)',
                color: '#FFFFFF',
                fontSize: '0.62rem',
                fontWeight: 800,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                lineHeight: 1
              }}
            >
              {totalUnits}
            </span>
          )}
        </div>
        <span style={{ fontSize: '0.66rem', fontWeight: 600 }}>
          {t({ ar: 'السلة', fr: 'Panier', en: 'Cart' })}
        </span>
      </button>

      <style>{`
        @media (min-width: 960px) {
          .mobile-bottom-bar {
            display: none !important;
          }
        }
      `}</style>
    </nav>
  );
};
