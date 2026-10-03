import React from 'react';
import { useCart } from '../context/CartContext';
import { useLanguage } from '../context/LanguageContext';
import { X, Trash2, Plus, Minus, MessageCircle, ArrowRight, ArrowLeft, Sparkles, Truck } from 'lucide-react';
import { BRAND } from '../data/noularData';

export const CartDrawer = () => {
  const {
    items,
    totalUnits,
    currentTotal,
    originalTotal,
    totalSavings,
    bundleDiscountApplied,
    isDrawerOpen,
    setIsDrawerOpen,
    setIsCheckoutOpen,
    updateQuantity,
    removeFromCart,
    getWhatsAppOrderUrl
  } = useCart();
  const { t, isAr, dir } = useLanguage();

  if (!isDrawerOpen) return null;

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 200,
        display: 'flex',
        justifyContent: isAr ? 'flex-start' : 'flex-end',
        direction: dir
      }}
    >
      {/* Backdrop */}
      <div
        onClick={() => setIsDrawerOpen(false)}
        style={{
          position: 'absolute',
          inset: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.6)',
          backdropFilter: 'blur(5px)',
          transition: 'opacity 300ms ease'
        }}
      />

      {/* Slide Drawer */}
      <div
        style={{
          position: 'relative',
          width: '100%',
          maxWidth: '480px',
          height: '100%',
          backgroundColor: 'var(--bg-primary)',
          [isAr ? 'borderRight' : 'borderLeft']: '1px solid var(--border-light)',
          display: 'flex',
          flexDirection: 'column',
          boxShadow: isAr ? '15px 0 40px rgba(0, 0, 0, 0.35)' : '-15px 0 40px rgba(0, 0, 0, 0.35)',
          zIndex: 210,
          animation: isAr ? 'slideInLeft 350ms cubic-bezier(0.22, 1, 0.36, 1)' : 'slideInRight 350ms cubic-bezier(0.22, 1, 0.36, 1)'
        }}
      >
        {/* Drawer Header */}
        <div
          style={{
            padding: '1.4rem 1.8rem',
            borderBottom: '1px solid var(--border-light)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between'
          }}
        >
          <div>
            <span className="text-eyebrow">
              {t({ ar: 'سلة المشتريات', fr: 'VOTRE SÉLECTION', en: 'YOUR BASKET' })}
            </span>
            <h3
              style={{
                fontFamily: isAr ? 'var(--font-arabic-serif)' : 'var(--font-serif)',
                fontSize: isAr ? '1.8rem' : '1.6rem',
                color: 'var(--text-primary)',
                fontWeight: isAr ? 700 : 500,
                marginTop: '0.2rem'
              }}
            >
              {t({ ar: 'سلتك', fr: 'Panier', en: 'Cart' })} ({totalUnits})
            </h3>
          </div>

          <button
            onClick={() => setIsDrawerOpen(false)}
            style={{
              background: 'none',
              border: 'none',
              padding: '0.4rem',
              color: 'var(--text-primary)',
              cursor: 'pointer'
            }}
            aria-label="Fermer le panier"
          >
            <X size={22} />
          </button>
        </div>

        {/* Free Shipping Alert Banner */}
        <div
          style={{
            padding: '0.65rem 1.8rem',
            backgroundColor: 'var(--bg-secondary)',
            borderBottom: '1px solid var(--border-subtle)',
            display: 'flex',
            alignItems: 'center',
            gap: '0.6rem',
            fontSize: '0.78rem',
            color: 'var(--text-primary)'
          }}
        >
          <Truck size={16} color="var(--color-terracotta)" />
          <span>
            {t({
              ar: 'توصيل مجاني لجميع مدن المغرب ابتداءً من 700 درهم.',
              fr: 'Livraison offerte partout au Maroc dès 700 DH.',
              en: 'Free shipping throughout Morocco on orders over 700 DH.'
            })}
          </span>
        </div>

        {/* Items List */}
        <div
          style={{
            flex: 1,
            overflowY: 'auto',
            padding: '1.4rem 1.8rem',
            display: 'flex',
            flexDirection: 'column',
            gap: '1.2rem'
          }}
        >
          {items.length === 0 ? (
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                height: '100%',
                textAlign: 'center',
                gap: '1rem',
                color: 'var(--text-muted)'
              }}
            >
              <p style={{ fontSize: '1.1rem', fontFamily: isAr ? 'var(--font-arabic-serif)' : 'var(--font-serif)' }}>
                {t({
                  ar: 'سلة مشترياتك فارغة حالياً.',
                  fr: 'Votre panier est vide.',
                  en: 'Your basket is currently empty.'
                })}
              </p>
              <button
                onClick={() => setIsDrawerOpen(false)}
                className="btn-noular-primary"
                style={{ fontSize: '0.74rem', padding: '0.7rem 1.4rem' }}
              >
                {t({ ar: 'استكشف مصابيح وردة', fr: 'DÉCOUVRIR LES LUMINAIRES', en: 'BROWSE LIGHTING' })}
              </button>
            </div>
          ) : (
            items.map((item) => (
              <div
                key={item.product.id}
                style={{
                  display: 'flex',
                  gap: '1rem',
                  paddingBottom: '1.2rem',
                  borderBottom: '1px solid var(--border-subtle)'
                }}
              >
                {/* Thumbnail */}
                <div
                  style={{
                    width: '80px',
                    height: '92px',
                    borderRadius: '2px',
                    overflow: 'hidden',
                    backgroundColor: 'var(--bg-secondary)',
                    flexShrink: 0
                  }}
                >
                  <img
                    src={item.product.images.coverLight}
                    alt={item.product.name}
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                </div>

                {/* Details */}
                <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                  <div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                      <h4
                        style={{
                          fontFamily: isAr ? 'var(--font-arabic-serif)' : 'var(--font-serif)',
                          fontSize: isAr ? '1.2rem' : '1.1rem',
                          fontWeight: isAr ? 700 : 500,
                          color: 'var(--text-primary)',
                          lineHeight: 1.2
                        }}
                      >
                        {isAr ? (item.product.nameAr || item.product.name) : item.product.name}
                      </h4>
                      <button
                        onClick={() => removeFromCart(item.product.id)}
                        style={{
                          background: 'none',
                          border: 'none',
                          color: 'var(--text-muted)',
                          cursor: 'pointer',
                          padding: '0.2rem'
                        }}
                        title={t({ ar: 'حذف', fr: 'Retirer', en: 'Remove' })}
                      >
                        <Trash2 size={16} />
                      </button>
                    </div>
                    <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginTop: '0.2rem' }}>
                      {t(item.product.variantLabel)} · {t({ ar: 'لمبة LED 4 واط مشمولة', fr: 'LED 4 W incluse', en: 'LED 4 W included' })}
                    </div>
                  </div>

                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: '0.6rem' }}>
                    {/* Quantity Selector */}
                    <div
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        border: '1px solid var(--border-light)',
                        borderRadius: '2px',
                        overflow: 'hidden'
                      }}
                    >
                      <button
                        onClick={() => updateQuantity(item.product.id, -1)}
                        style={{
                          background: 'none',
                          border: 'none',
                          padding: '0.35rem 0.6rem',
                          cursor: 'pointer',
                          color: 'var(--text-primary)'
                        }}
                        aria-label="Diminuer"
                      >
                        <Minus size={13} />
                      </button>
                      <span style={{ fontSize: '0.8rem', fontWeight: 700, padding: '0 0.5rem' }}>
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => updateQuantity(item.product.id, 1)}
                        style={{
                          background: 'none',
                          border: 'none',
                          padding: '0.35rem 0.6rem',
                          cursor: 'pointer',
                          color: 'var(--text-primary)'
                        }}
                        aria-label="Augmenter"
                      >
                        <Plus size={13} />
                      </button>
                    </div>

                    {/* Price */}
                    <div style={{ textAlign: isAr ? 'left' : 'right' }}>
                      <div style={{ fontSize: '0.95rem', fontWeight: 700, color: 'var(--text-primary)' }}>
                        {item.quantity * 799} {isAr ? 'درهم' : 'DH'}
                      </div>
                      <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', textDecoration: 'line-through' }}>
                        {item.quantity * 899} {isAr ? 'درهم' : 'DH'}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))
          )}

          {/* Bundle Savings Highlight if applied */}
          {bundleDiscountApplied && (
            <div
              style={{
                backgroundColor: 'rgba(198, 93, 50, 0.08)',
                border: '1px solid rgba(198, 93, 50, 0.25)',
                borderRadius: '3px',
                padding: '0.8rem 1rem',
                display: 'flex',
                alignItems: 'center',
                gap: '0.6rem',
                fontSize: '0.8rem',
                color: 'var(--color-terracotta)',
                fontWeight: 600
              }}
            >
              <Sparkles size={16} />
              <span>
                {t({
                  ar: `تم تطبيق خصم الثنائي لغرفة النوم: 1 499 درهم للمصباحين (وفرت ${totalSavings} درهم!)`,
                  fr: `Remise duo chambre appliquée : 1 499 DH les 2 lampes (Économie de ${totalSavings} DH !)`,
                  en: `Bedroom pair discount applied: 1,499 DH per 2 lamps (You save ${totalSavings} DH!)`
                })}
              </span>
            </div>
          )}
        </div>

        {/* Drawer Footer / Checkout CTA */}
        {items.length > 0 && (
          <div
            style={{
              padding: '1.4rem 1.8rem',
              borderTop: '1px solid var(--border-light)',
              backgroundColor: 'var(--bg-card)',
              display: 'flex',
              flexDirection: 'column',
              gap: '0.9rem'
            }}
          >
            {/* Subtotal & Total */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.82rem', color: 'var(--text-secondary)' }}>
                <span>{t({ ar: 'المجموع الفرعي', fr: 'Sous-total', en: 'Subtotal' })}</span>
                <span>{currentTotal} {isAr ? 'درهم' : 'DH'}</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.82rem', color: 'var(--text-secondary)' }}>
                <span>{t({ ar: 'التوصيل في المغرب', fr: 'Livraison Maroc', en: 'Shipping (Morocco)' })}</span>
                <span style={{ color: 'var(--color-terracotta)', fontWeight: 700 }}>
                  {t({ ar: 'مجاني', fr: 'Offerte', en: 'Free' })}
                </span>
              </div>
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'baseline',
                  fontSize: '1.25rem',
                  fontWeight: 700,
                  color: 'var(--text-primary)',
                  paddingTop: '0.5rem',
                  borderTop: '1px solid var(--border-subtle)'
                }}
              >
                <span>{t({ ar: 'المجموع النهائي', fr: 'Total', en: 'Total' })}</span>
                <span>{currentTotal} {isAr ? 'درهم' : 'DH'}</span>
              </div>
            </div>

            {/* Direct Checkout Button */}
            <button
              onClick={() => {
                setIsDrawerOpen(false);
                setIsCheckoutOpen(true);
              }}
              className="btn-noular-primary"
              style={{ width: '100%', padding: '0.95rem', fontSize: '0.8rem' }}
            >
              <span>{t({ ar: 'إتمام الطلب والدفع عند الاستلام', fr: 'COMMANDER MAINTENANT', en: 'PROCEED TO CHECKOUT' })}</span>
              {isAr ? <ArrowLeft size={16} /> : <ArrowRight size={16} />}
            </button>

            {/* WhatsApp Order Button */}
            <a
              href={getWhatsAppOrderUrl()}
              target="_blank"
              rel="noreferrer"
              className="btn-whatsapp"
              style={{ width: '100%', padding: '0.85rem' }}
            >
              <MessageCircle size={18} />
              {t({ ar: 'الطلب المباشر عبر واتساب', fr: 'COMMANDER SUR WHATSAPP', en: 'ORDER ON WHATSAPP' })}
            </a>

            <div style={{ textAlign: 'center', fontSize: '0.72rem', color: 'var(--text-muted)' }}>
              {t({
                ar: 'الدفع عند الاستلام في المغرب · ضمان لمدة سنتين 24 شهراً',
                fr: 'Paiement à la livraison au Maroc · Garantie 24 mois incluse',
                en: 'Cash on delivery in Morocco · 24-month warranty included'
              })}
            </div>
          </div>
        )}
      </div>

      <style>{`
        @keyframes slideInRight {
          from { transform: translateX(100%); }
          to { transform: translateX(0); }
        }
        @keyframes slideInLeft {
          from { transform: translateX(-100%); }
          to { transform: translateX(0); }
        }
      `}</style>
    </div>
  );
};
