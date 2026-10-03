import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { useCart } from '../context/CartContext';
import { useTheme } from '../context/ThemeContext';
import { Plus, ArrowRight, ArrowLeft } from 'lucide-react';

export const ProductCard = ({ product, onSelect }) => {
  const { t, isAr, dir } = useLanguage();
  const { addToCart } = useCart();
  const { isDark } = useTheme();
  const [isHovered, setIsHovered] = useState(false);
  const [addedNotice, setAddedNotice] = useState(false);

  // Hover alternates to real second angle as specified in Section 18
  const defaultImage = isDark ? product.images.coverDark : product.images.coverLight;
  const hoverImage = product.images.angle1 || product.images.angle2 || defaultImage;

  const handleQuickAdd = (e) => {
    e.stopPropagation();
    addToCart(product, 1, false);
    setAddedNotice(true);
    setTimeout(() => setAddedNotice(false), 1600);
  };

  return (
    <div
      onClick={() => onSelect(product.slug)}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        cursor: 'pointer',
        borderRadius: '3px',
        backgroundColor: 'var(--bg-card)',
        border: '1px solid var(--border-light)',
        padding: '1.2rem',
        transition: 'transform 450ms var(--ease-editorial), box-shadow 450ms var(--ease-editorial)',
        transform: isHovered ? 'translateY(-4px)' : 'none',
        boxShadow: isHovered ? 'var(--shadow-hover)' : 'var(--shadow-soft)',
        direction: dir
      }}
    >
      {/* Product Image Stage with Secondary Angle on Hover */}
      <div
        style={{
          position: 'relative',
          width: '100%',
          aspectRatio: '1 / 1.15',
          overflow: 'hidden',
          borderRadius: '2px',
          backgroundColor: isDark ? '#1F1E1B' : '#F4EFEB',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        {/* Primary Angle */}
        <img
          src={defaultImage}
          alt={`${product.name} vue principale`}
          style={{
            position: 'absolute',
            inset: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            transition: 'opacity 600ms var(--ease-editorial), transform 700ms var(--ease-editorial)',
            opacity: isHovered ? 0 : 1,
            transform: isHovered ? 'scale(1.025)' : 'scale(1)'
          }}
          loading="lazy"
        />

        {/* Secondary Angle (Desktop Hover) */}
        <img
          src={hoverImage}
          alt={`${product.name} angle secondaire`}
          style={{
            position: 'absolute',
            inset: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            transition: 'opacity 600ms var(--ease-editorial), transform 700ms var(--ease-editorial)',
            opacity: isHovered ? 1 : 0,
            transform: isHovered ? 'scale(1.025)' : 'scale(1)'
          }}
          loading="lazy"
        />

        {/* Promotional Price Badge */}
        <div
          style={{
            position: 'absolute',
            top: '0.8rem',
            [isAr ? 'right' : 'left']: '0.8rem',
            backgroundColor: 'var(--bg-glass)',
            backdropFilter: 'blur(8px)',
            border: '1px solid var(--border-light)',
            padding: '0.25rem 0.65rem',
            borderRadius: '2px',
            fontSize: '0.68rem',
            fontWeight: 700,
            letterSpacing: '0.08em',
            textTransform: 'uppercase',
            color: 'var(--color-terracotta)'
          }}
        >
          {t({ ar: 'وفر 100 درهم', fr: 'Offre -100 DH', en: 'Save 100 DH' })}
        </div>

        {/* Quick Add Button Overlay */}
        <div
          style={{
            position: 'absolute',
            bottom: '0.8rem',
            [isAr ? 'left' : 'right']: '0.8rem',
            display: 'flex',
            gap: '0.5rem',
            opacity: isHovered ? 1 : 0.9,
            transition: 'opacity 250ms ease'
          }}
        >
          <button
            onClick={handleQuickAdd}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.35rem',
              backgroundColor: 'var(--accent-cta)',
              color: 'var(--accent-cta-text)',
              border: 'none',
              padding: '0.55rem 0.9rem',
              borderRadius: '2px',
              fontSize: '0.74rem',
              fontWeight: 700,
              letterSpacing: isAr ? '0.04em' : '0.12em',
              textTransform: isAr ? 'none' : 'uppercase',
              cursor: 'pointer',
              boxShadow: '0 4px 14px rgba(0,0,0,0.2)'
            }}
            title={t({ ar: 'إضافة مباشرة للسلة', fr: 'Ajouter directement au panier', en: 'Quick Add' })}
          >
            <Plus size={14} />
            {addedNotice ? t({ ar: 'تمت الإضافة !', fr: 'Ajouté !', en: 'Added!' }) : t({ ar: 'أضف للسلة', fr: 'Ajouter', en: 'Add' })}
          </button>
        </div>
      </div>

      {/* Product Information */}
      <div style={{ marginTop: '1.2rem', display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <span className="text-eyebrow" style={{ fontSize: '0.68rem' }}>
            {t(product.variantLabel)}
          </span>
          <span style={{ fontSize: '0.72rem', color: 'var(--text-muted)' }}>
            E14 · 4 W LED
          </span>
        </div>

        <h3
          style={{
            fontFamily: isAr ? 'var(--font-arabic-serif)' : 'var(--font-serif)',
            fontSize: isAr ? '1.5rem' : '1.35rem',
            fontWeight: isAr ? 700 : 500,
            color: 'var(--text-primary)',
            letterSpacing: '-0.01em',
            lineHeight: 1.2
          }}
        >
          {isAr ? (product.nameAr || product.name) : product.name}
        </h3>

        <p
          style={{
            fontFamily: isAr ? 'var(--font-arabic-sans)' : 'var(--font-sans)',
            fontSize: '0.84rem',
            color: 'var(--text-secondary)',
            lineHeight: 1.5,
            marginTop: '0.2rem'
          }}
        >
          {t(product.shortDescription)}
        </p>

        {/* Pricing */}
        <div
          style={{
            display: 'flex',
            alignItems: 'baseline',
            gap: '0.65rem',
            marginTop: '0.6rem',
            paddingTop: '0.6rem',
            borderTop: '1px solid var(--border-subtle)'
          }}
        >
          <span
            style={{
              fontFamily: 'var(--font-sans)',
              fontSize: '1.15rem',
              fontWeight: 700,
              color: 'var(--text-primary)'
            }}
          >
            {product.price} {isAr ? 'درهم' : product.currencyDisplay}
          </span>
          <span
            style={{
              fontFamily: 'var(--font-sans)',
              fontSize: '0.85rem',
              color: 'var(--text-muted)',
              textDecoration: 'line-through'
            }}
          >
            {product.compareAtPrice} {isAr ? 'درهم' : product.currencyDisplay}
          </span>

          <span
            style={{
              [isAr ? 'marginRight' : 'marginLeft']: 'auto',
              fontFamily: isAr ? 'var(--font-arabic-sans)' : 'var(--font-sans)',
              fontSize: '0.76rem',
              color: 'var(--accent-highlight)',
              fontWeight: 700,
              display: 'flex',
              alignItems: 'center',
              gap: '0.2rem'
            }}
          >
            {t({ ar: 'التفاصيل', fr: 'Détails', en: 'Details' })}
            {isAr ? <ArrowLeft size={12} /> : <ArrowRight size={12} />}
          </span>
        </div>
      </div>
    </div>
  );
};
