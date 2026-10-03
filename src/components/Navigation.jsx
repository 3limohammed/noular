import React, { useState, useEffect } from 'react';
import { useCart } from '../context/CartContext';
import { useTheme } from '../context/ThemeContext';
import { useLanguage } from '../context/LanguageContext';
import { ShoppingBag, Sun, Moon, Menu, X, ArrowRight, ArrowLeft, MessageCircle, Globe, Smartphone, QrCode } from 'lucide-react';
import { BRAND } from '../data/noularData';
import { MobileShareModal } from './MobileShareModal';

export const Navigation = ({ currentRoute, navigateTo }) => {
  const { totalUnits, setIsDrawerOpen } = useCart();
  const { isDark, toggleTheme } = useTheme();
  const { lang, setLang, t, isAr, dir } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [langMenuOpen, setLangMenuOpen] = useState(false);
  const [shareModalOpen, setShareModalOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: { ar: 'المتجر', fr: 'Boutique', en: 'Shop' }, route: '/fr/shop' },
    { label: { ar: 'مجموعة وردة', fr: 'Collection Warda', en: 'Warda Collection' }, route: '/#collection' },
    { label: { ar: 'ورشتنا بالمغرب', fr: 'Notre Atelier', en: 'Atelier' }, route: '/fr/atelier' },
    { label: { ar: 'كيف تُصنع', fr: 'Comment c’est fait', en: 'How it’s made' }, route: '/fr/how-it-is-made' },
    { label: { ar: 'تواصل معنا', fr: 'Contact', en: 'Contact' }, route: '/fr/contact' }
  ];

  const handleLinkClick = (route, e) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    if (route.startsWith('/#')) {
      if (currentRoute !== '/') {
        navigateTo('/');
        setTimeout(() => {
          const el = document.getElementById(route.replace('/#', ''));
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }, 150);
      } else {
        const el = document.getElementById(route.replace('/#', ''));
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      navigateTo(route);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Top Quiet Announcement Bar */}
      <div
        style={{
          backgroundColor: isDark ? '#191816' : '#EFEBE3',
          color: isDark ? '#B8B0A4' : '#5C5247',
          borderBottom: '1px solid var(--border-subtle)',
          fontSize: '0.74rem',
          letterSpacing: isAr ? '0.04em' : '0.12em',
          textAlign: 'center',
          padding: '0.45rem 1rem',
          transition: 'all 300ms ease',
          direction: dir
        }}
      >
        <span style={{ fontWeight: 700 }}>{isAr ? 'نولار' : 'NOULAR'}</span> ·{' '}
        {t({
          ar: 'قطع ديكور وإضاءة مغربية تُصنع على الطلب. توصيل مجاني في كل مدن المغرب ابتداءً من 700 درهم.',
          fr: 'Décoration d’intérieur façonnée au Maroc. Livraison offerte partout au Maroc dès 700 DH.',
          en: 'Artisanal interior pieces crafted in Morocco. Free delivery across Morocco from 700 DH.'
        })}
      </div>

      {/* Main Sticky Navbar */}
      <header
        style={{
          position: 'sticky',
          top: 0,
          zIndex: 100,
          backgroundColor: isScrolled ? 'var(--bg-glass)' : 'transparent',
          backdropFilter: isScrolled ? 'blur(16px)' : 'none',
          WebkitBackdropFilter: isScrolled ? 'blur(16px)' : 'none',
          borderBottom: isScrolled ? '1px solid var(--border-light)' : '1px solid transparent',
          transition: 'background-color 400ms ease, border-color 400ms ease, backdrop-filter 400ms ease',
          direction: dir
        }}
      >
        <div
          className="container-noular"
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            height: '74px'
          }}
        >
          {/* Brand Logo */}
          <a
            href="/"
            onClick={(e) => handleLinkClick('/', e)}
            style={{
              textDecoration: 'none',
              display: 'flex',
              alignItems: 'center',
              gap: '0.6rem'
            }}
          >
            <span
              style={{
                fontFamily: isAr ? 'var(--font-arabic-serif)' : 'var(--font-serif)',
                fontSize: isAr ? '2rem' : '1.75rem',
                letterSpacing: isAr ? 'normal' : '0.22em',
                fontWeight: isAr ? 700 : 500,
                color: 'var(--text-primary)',
                textTransform: 'uppercase'
              }}
            >
              {isAr ? 'نـولار' : 'NOULAR'}
            </span>
          </a>

          {/* Desktop Navigation Links */}
          <nav
            style={{
              display: 'none',
              alignItems: 'center',
              gap: '2.2rem'
            }}
            className="desktop-nav"
          >
            {navLinks.map((link) => {
              const active = currentRoute === link.route;
              return (
                <a
                  key={link.route}
                  href={link.route}
                  onClick={(e) => handleLinkClick(link.route, e)}
                  style={{
                    fontFamily: isAr ? 'var(--font-arabic-sans)' : 'var(--font-sans)',
                    fontSize: isAr ? '0.88rem' : '0.78rem',
                    fontWeight: active ? 700 : 500,
                    letterSpacing: isAr ? 'normal' : '0.14em',
                    textTransform: isAr ? 'none' : 'uppercase',
                    color: active ? 'var(--text-primary)' : 'var(--text-secondary)',
                    textDecoration: 'none',
                    position: 'relative',
                    padding: '0.4rem 0',
                    transition: 'color 250ms ease'
                  }}
                >
                  {t(link.label)}
                  {active && (
                    <span
                      style={{
                        position: 'absolute',
                        bottom: 0,
                        left: 0,
                        right: 0,
                        height: '1.5px',
                        backgroundColor: 'var(--accent-highlight)'
                      }}
                    />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Right Action Icons (Language, Dark/Light, Cart, Mobile Menu) */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.9rem' }}>
            {/* Language Switcher Dropdown */}
            <div style={{ position: 'relative' }}>
              <button
                onClick={() => setLangMenuOpen(!langMenuOpen)}
                style={{
                  background: 'none',
                  border: '1px solid var(--border-light)',
                  borderRadius: '2px',
                  padding: '0.35rem 0.65rem',
                  fontFamily: 'var(--font-sans)',
                  fontSize: '0.72rem',
                  fontWeight: 700,
                  letterSpacing: '0.08em',
                  color: 'var(--text-secondary)',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.35rem',
                  transition: 'all 200ms ease'
                }}
                title="Changer de langue / تغيير اللغة"
              >
                <Globe size={13} />
                <span>{lang === 'ar' ? 'العربية' : lang.toUpperCase()}</span>
              </button>

              {langMenuOpen && (
                <div
                  style={{
                    position: 'absolute',
                    top: '110%',
                    [isAr ? 'left' : 'right']: 0,
                    backgroundColor: 'var(--bg-card)',
                    border: '1px solid var(--border-light)',
                    borderRadius: '3px',
                    boxShadow: 'var(--shadow-soft)',
                    display: 'flex',
                    flexDirection: 'column',
                    minWidth: '110px',
                    zIndex: 110,
                    overflow: 'hidden'
                  }}
                >
                  <button
                    onClick={() => { setLang('ar'); setLangMenuOpen(false); }}
                    style={{
                      padding: '0.6rem 0.9rem',
                      background: lang === 'ar' ? 'var(--bg-secondary)' : 'none',
                      border: 'none',
                      textAlign: isAr ? 'right' : 'left',
                      fontFamily: 'var(--font-arabic-sans)',
                      fontSize: '0.85rem',
                      fontWeight: lang === 'ar' ? 700 : 500,
                      color: 'var(--text-primary)',
                      cursor: 'pointer'
                    }}
                  >
                    العربية
                  </button>
                  <button
                    onClick={() => { setLang('fr'); setLangMenuOpen(false); }}
                    style={{
                      padding: '0.6rem 0.9rem',
                      background: lang === 'fr' ? 'var(--bg-secondary)' : 'none',
                      border: 'none',
                      textAlign: isAr ? 'right' : 'left',
                      fontFamily: 'var(--font-sans)',
                      fontSize: '0.8rem',
                      fontWeight: lang === 'fr' ? 700 : 500,
                      color: 'var(--text-primary)',
                      cursor: 'pointer'
                    }}
                  >
                    Français
                  </button>
                  <button
                    onClick={() => { setLang('en'); setLangMenuOpen(false); }}
                    style={{
                      padding: '0.6rem 0.9rem',
                      background: lang === 'en' ? 'var(--bg-secondary)' : 'none',
                      border: 'none',
                      textAlign: isAr ? 'right' : 'left',
                      fontFamily: 'var(--font-sans)',
                      fontSize: '0.8rem',
                      fontWeight: lang === 'en' ? 700 : 500,
                      color: 'var(--text-primary)',
                      cursor: 'pointer'
                    }}
                  >
                    English
                  </button>
                </div>
              )}
            </div>

            {/* Dark / Light Mode Switcher */}
            <button
              onClick={toggleTheme}
              style={{
                background: 'none',
                border: 'none',
                padding: '0.4rem',
                color: 'var(--text-primary)',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: '50%'
              }}
              title={isDark ? 'Passer en mode clair' : 'Passer en mode sombre'}
            >
              {isDark ? <Sun size={18} strokeWidth={1.75} /> : <Moon size={18} strokeWidth={1.75} />}
            </button>

            {/* Mobile Preview & Share Trigger Button */}
            <button
              onClick={() => setShareModalOpen(true)}
              style={{
                background: 'rgba(198, 93, 50, 0.1)',
                border: '1px solid rgba(198, 93, 50, 0.25)',
                color: 'var(--color-terracotta)',
                padding: '0.35rem 0.75rem',
                borderRadius: '30px',
                cursor: 'pointer',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.4rem',
                fontSize: '0.74rem',
                fontWeight: 700,
                transition: 'all 200ms ease'
              }}
              title={t({ ar: 'رابط ومشاركة معاينة الهاتف (QR Code)', fr: 'Aperçu & Partage Mobile (QR Code)', en: 'Mobile Preview & QR' })}
            >
              <Smartphone size={14} />
              <span className="hidden-mobile">
                {t({ ar: 'معاينة الهاتف', fr: 'Aperçu Mobile', en: 'Mobile Preview' })}
              </span>
            </button>

            {/* Cart Icon */}
            <button
              onClick={() => setIsDrawerOpen(true)}
              style={{
                background: 'none',
                border: 'none',
                padding: '0.4rem',
                color: 'var(--text-primary)',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                position: 'relative'
              }}
              aria-label="Ouvrir le panier"
            >
              <ShoppingBag size={20} strokeWidth={1.75} />
              {totalUnits > 0 && (
                <span
                  style={{
                    position: 'absolute',
                    top: '-2px',
                    [isAr ? 'left' : 'right']: '-4px',
                    width: '18px',
                    height: '18px',
                    borderRadius: '50%',
                    backgroundColor: 'var(--color-terracotta)',
                    color: '#FFFFFF',
                    fontSize: '0.68rem',
                    fontWeight: 700,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    lineHeight: 1
                  }}
                >
                  {totalUnits}
                </span>
              )}
            </button>

            {/* Mobile Hamburger Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="mobile-menu-btn"
              style={{
                background: 'none',
                border: 'none',
                padding: '0.4rem',
                color: 'var(--text-primary)',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
              aria-label="Menu de navigation"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </header>

      {/* Full Screen Mobile Menu Drawer with Smooth Touch Design */}
      {mobileMenuOpen && (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 99,
            backgroundColor: 'var(--bg-primary)',
            padding: '5.5rem 1.8rem 2.5rem 1.8rem',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            overflowY: 'auto',
            direction: dir
          }}
        >
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.8rem' }}>
            <span className="text-eyebrow">
              {t({ ar: 'أقسام الموقع', fr: 'NAVIGATION', en: 'NAVIGATION' })}
            </span>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
              {navLinks.map((link) => (
                <a
                  key={link.route}
                  href={link.route}
                  onClick={(e) => handleLinkClick(link.route, e)}
                  style={{
                    fontFamily: isAr ? 'var(--font-arabic-serif)' : 'var(--font-serif)',
                    fontSize: isAr ? '1.8rem' : '1.75rem',
                    fontWeight: isAr ? 700 : 400,
                    color: 'var(--text-primary)',
                    textDecoration: 'none',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    borderBottom: '1px solid var(--border-subtle)',
                    paddingBottom: '0.8rem'
                  }}
                >
                  <span>{t(link.label)}</span>
                  {isAr ? <ArrowLeft size={18} color="var(--text-muted)" /> : <ArrowRight size={18} color="var(--text-muted)" />}
                </a>
              ))}
            </div>
          </div>

          <div
            style={{
              paddingTop: '2rem',
              borderTop: '1px solid var(--border-light)',
              display: 'flex',
              flexDirection: 'column',
              gap: '1.2rem'
            }}
          >
            {/* Language Quick Switcher in Mobile */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
              <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                {t({ ar: 'اللغة :', fr: 'Langue :', en: 'Language:' })}
              </span>
              {['ar', 'fr', 'en'].map((code) => (
                <button
                  key={code}
                  onClick={() => setLang(code)}
                  style={{
                    background: lang === code ? 'var(--text-primary)' : 'none',
                    color: lang === code ? 'var(--bg-primary)' : 'var(--text-primary)',
                    border: '1px solid var(--border-light)',
                    borderRadius: '2px',
                    padding: '0.3rem 0.7rem',
                    fontSize: '0.74rem',
                    fontWeight: 700,
                    cursor: 'pointer'
                  }}
                >
                  {code === 'ar' ? 'العربية' : code.toUpperCase()}
                </button>
              ))}
            </div>

            {/* Mobile Share Link & QR Preview Button in Drawer */}
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                setShareModalOpen(true);
              }}
              className="btn-noular-secondary"
              style={{ width: '100%', padding: '0.85rem', fontSize: '0.78rem', gap: '0.5rem' }}
            >
              <QrCode size={16} />
              <span>{t({ ar: 'رمز QR ومشاركة الرابط للمعاينة', fr: 'Code QR & Partager le lien', en: 'QR Code & Share Preview Link' })}</span>
            </button>

            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
                {t({ ar: 'خدمة العملاء عبر واتساب', fr: 'Service WhatsApp', en: 'WhatsApp Support' })}
              </span>
              <a
                href={`https://wa.me/${BRAND.contact.whatsappRaw}`}
                target="_blank"
                rel="noreferrer"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.4rem',
                  color: '#25D366',
                  textDecoration: 'none',
                  fontWeight: 700,
                  fontSize: '0.85rem'
                }}
              >
                <MessageCircle size={16} />
                {BRAND.contact.whatsapp}
              </a>
            </div>

            <p style={{ fontSize: '0.76rem', color: 'var(--text-muted)' }}>
              © 2026 NOULAR · {t(BRAND.tagline)}
            </p>
          </div>
        </div>
      )}

      {/* Mobile Share & QR Preview Modal */}
      <MobileShareModal
        isOpen={shareModalOpen}
        onClose={() => setShareModalOpen(false)}
      />

      <style>{`
        @media (min-width: 900px) {
          .desktop-nav {
            display: flex !important;
          }
          .mobile-menu-btn {
            display: none !important;
          }
        }
      `}</style>
    </>
  );
};
