import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { PRODUCTS } from '../data/noularData';
import { ArrowRight, ArrowLeft } from 'lucide-react';

export const ProductComparison = ({ onSelectProduct }) => {
  const { t, isAr, dir } = useLanguage();
  const [selectedProduct, setSelectedProduct] = useState(PRODUCTS[0]);

  return (
    <section style={{ padding: '6rem 0', backgroundColor: 'var(--bg-secondary)', direction: dir }}>
      <div className="container-noular">
        {/* Section Header */}
        <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
          <span className="text-eyebrow">
            {t({ ar: 'دليل اختيار التشطيبات', fr: 'GUIDE DES FINITIONS', en: 'FINISH SELECTION GUIDE' })}
          </span>
          <h2
            style={{
              fontFamily: isAr ? 'var(--font-arabic-serif)' : 'var(--font-serif)',
              fontSize: isAr ? '2.8rem' : 'clamp(2rem, 3.5vw, 3rem)',
              fontWeight: isAr ? 700 : 400,
              color: 'var(--text-primary)',
              marginTop: '0.8rem'
            }}
          >
            {t({
              ar: 'أيّ وردة تختار لبيتك؟',
              fr: 'Quelle Warda pour votre intérieur ?',
              en: 'Which Warda belongs in your home?'
            })}
          </h2>
          <p style={{ color: 'var(--text-secondary)', maxWidth: '520px', margin: '0.6rem auto 0 auto', fontSize: '1rem' }}>
            {t({
              ar: 'قوام نحتي معماري متطابق، ينبض بأربع شخصيات من اللون والملمس.',
              fr: 'Une même silhouette architecturale, déclinée en quatre personnalités de matière et de couleur.',
              en: 'The same architectural silhouette, rendered across four distinct material expressions.'
            })}
          </p>
        </div>

        {/* Visual Swatch Selector Buttons */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            gap: '0.8rem',
            marginBottom: '3rem'
          }}
        >
          {PRODUCTS.map((p) => {
            const isSelected = p.id === selectedProduct.id;
            return (
              <button
                key={p.id}
                onClick={() => setSelectedProduct(p)}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.75rem',
                  padding: '0.75rem 1.4rem',
                  borderRadius: '30px',
                  border: isSelected ? '1px solid var(--text-primary)' : '1px solid var(--border-light)',
                  backgroundColor: isSelected ? 'var(--text-primary)' : 'var(--bg-card)',
                  color: isSelected ? 'var(--bg-primary)' : 'var(--text-primary)',
                  cursor: 'pointer',
                  transition: 'all 250ms ease'
                }}
              >
                <span
                  style={{
                    width: '14px',
                    height: '14px',
                    borderRadius: '50%',
                    backgroundColor: p.accentColor,
                    border: '1px solid rgba(0,0,0,0.1)'
                  }}
                />
                <span style={{ fontSize: '0.84rem', fontWeight: 700, letterSpacing: isAr ? 'normal' : '0.06em' }}>
                  {isAr ? (p.nameAr || p.shortName) : p.shortName}
                </span>
              </button>
            );
          })}
        </div>

        {/* Editorial Comparison Card */}
        <div
          style={{
            backgroundColor: 'var(--bg-card)',
            borderRadius: '4px',
            border: '1px solid var(--border-light)',
            padding: 'clamp(1.5rem, 4vw, 3rem)',
            display: 'grid',
            gridTemplateColumns: 'repeat(12, 1fr)',
            alignItems: 'center',
            gap: '2.5rem',
            boxShadow: 'var(--shadow-soft)'
          }}
        >
          {/* Real Lamp Photography Angle */}
          <div
            style={{
              gridColumn: 'span 12',
              display: 'flex',
              justifyContent: 'center'
            }}
            className="comp-img-col"
          >
            <div
              style={{
                maxWidth: '420px',
                width: '100%',
                aspectRatio: '1 / 1.1',
                borderRadius: '3px',
                overflow: 'hidden',
                backgroundColor: 'var(--bg-secondary)',
                position: 'relative'
              }}
            >
              <img
                src={selectedProduct.images.coverLight}
                alt={selectedProduct.name}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  transition: 'opacity 300ms ease'
                }}
              />
            </div>
          </div>

          {/* Details & Specifications */}
          <div
            style={{
              gridColumn: 'span 12',
              display: 'flex',
              flexDirection: 'column',
              gap: '1.2rem'
            }}
            className="comp-text-col"
          >
            <div>
              <span className="text-eyebrow">{t(selectedProduct.variantLabel)}</span>
              <h3
                style={{
                  fontFamily: isAr ? 'var(--font-arabic-serif)' : 'var(--font-serif)',
                  fontSize: isAr ? '2.2rem' : '2rem',
                  fontWeight: isAr ? 700 : 500,
                  color: 'var(--text-primary)',
                  marginTop: '0.3rem'
                }}
              >
                {isAr ? (selectedProduct.nameAr || selectedProduct.name) : selectedProduct.name}
              </h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.94rem', marginTop: '0.4rem', lineHeight: 1.6 }}>
                {t(selectedProduct.description)}
              </p>
            </div>

            {/* Shared & Distinct Specs */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))',
                gap: '1rem',
                padding: '1.2rem 0',
                borderTop: '1px solid var(--border-subtle)',
                borderBottom: '1px solid var(--border-subtle)'
              }}
            >
              <div>
                <div style={{ fontSize: '0.74rem', textTransform: 'uppercase', color: 'var(--text-muted)' }}>
                  {t({ ar: 'التشطيب', fr: 'Finition', en: 'Finish' })}
                </div>
                <div style={{ fontSize: '0.88rem', fontWeight: 600, color: 'var(--text-primary)', marginTop: '0.2rem' }}>
                  {t(selectedProduct.specifications.finish)}
                </div>
              </div>

              <div>
                <div style={{ fontSize: '0.74rem', textTransform: 'uppercase', color: 'var(--text-muted)' }}>
                  {t({ ar: 'المادة', fr: 'Matière', en: 'Material' })}
                </div>
                <div style={{ fontSize: '0.88rem', fontWeight: 600, color: 'var(--text-primary)', marginTop: '0.2rem' }}>
                  {t(selectedProduct.specifications.material)}
                </div>
              </div>

              <div>
                <div style={{ fontSize: '0.74rem', textTransform: 'uppercase', color: 'var(--text-muted)' }}>
                  {t({ ar: 'الأبعاد', fr: 'Dimensions', en: 'Dimensions' })}
                </div>
                <div style={{ fontSize: '0.88rem', fontWeight: 600, color: 'var(--text-primary)', marginTop: '0.2rem' }}>
                  H 24 × Ø 14 cm
                </div>
              </div>

              <div>
                <div style={{ fontSize: '0.74rem', textTransform: 'uppercase', color: 'var(--text-muted)' }}>
                  {t({ ar: 'اللمبة المشمولة', fr: 'Ampoule incluse', en: 'Bulb Included' })}
                </div>
                <div style={{ fontSize: '0.88rem', fontWeight: 600, color: 'var(--text-primary)', marginTop: '0.2rem' }}>
                  E14 · 4 W LED (2700 K)
                </div>
              </div>

              <div>
                <div style={{ fontSize: '0.74rem', textTransform: 'uppercase', color: 'var(--text-muted)' }}>
                  {t({ ar: 'السلك والمفتاح', fr: 'Câble & Commutateur', en: 'Cable & Switch' })}
                </div>
                <div style={{ fontSize: '0.88rem', fontWeight: 600, color: 'var(--text-primary)', marginTop: '0.2rem' }}>
                  180 cm · tressé inline
                </div>
              </div>

              <div>
                <div style={{ fontSize: '0.74rem', textTransform: 'uppercase', color: 'var(--text-muted)' }}>
                  {t({ ar: 'ضمان الورشة', fr: 'Garantie atelier', en: 'Warranty' })}
                </div>
                <div style={{ fontSize: '0.88rem', fontWeight: 600, color: 'var(--text-primary)', marginTop: '0.2rem' }}>
                  24 mois (سنتان)
                </div>
              </div>
            </div>

            {/* Price & CTA */}
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem' }}>
              <div>
                <span style={{ fontSize: '1.4rem', fontWeight: 700, color: 'var(--text-primary)' }}>
                  {selectedProduct.price} {isAr ? 'درهم' : selectedProduct.currencyDisplay}
                </span>
                <span style={{ margin: '0 0.6rem', textDecoration: 'line-through', color: 'var(--text-muted)', fontSize: '0.95rem' }}>
                  {selectedProduct.compareAtPrice} {isAr ? 'درهم' : selectedProduct.currencyDisplay}
                </span>
              </div>

              <button
                onClick={() => onSelectProduct(selectedProduct.slug)}
                className="btn-noular-primary"
                style={{ padding: '0.8rem 1.6rem', fontSize: '0.76rem' }}
              >
                <span>{t({ ar: 'تفاصيل كاملة', fr: 'ACCÉDER À LA FICHE', en: 'VIEW FULL PRODUCT' })}</span>
                {isAr ? <ArrowLeft size={14} /> : <ArrowRight size={14} />}
              </button>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (min-width: 900px) {
          .comp-img-col {
            grid-column: span 5 !important;
          }
          .comp-text-col {
            grid-column: span 7 !important;
          }
        }
      `}</style>
    </section>
  );
};
