import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { PRODUCTS } from '../data/noularData';
import { ArrowRight, ArrowLeft } from 'lucide-react';

export const FinalCTA = ({ onExploreCollection }) => {
  const { t, isAr, dir } = useLanguage();
  const realProduct = PRODUCTS[0];

  return (
    <section
      style={{
        padding: '7rem 0',
        backgroundColor: '#141311',
        color: '#F2EEE6',
        position: 'relative',
        overflow: 'hidden',
        direction: dir
      }}
    >
      {/* Amber Light Gradient */}
      <div
        style={{
          position: 'absolute',
          top: '50%',
          [isAr ? 'left' : 'right']: '10%',
          width: '500px',
          height: '500px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(217, 164, 91, 0.22) 0%, transparent 70%)',
          filter: 'blur(50px)',
          pointerEvents: 'none'
        }}
      />

      <div className="container-noular" style={{ position: 'relative', zIndex: 2 }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(12, 1fr)',
            alignItems: 'center',
            gap: '3rem'
          }}
        >
          <div
            style={{
              gridColumn: 'span 12',
              display: 'flex',
              flexDirection: 'column',
              gap: '1.4rem'
            }}
            className="final-cta-text"
          >
            <span
              style={{
                fontFamily: isAr ? 'var(--font-arabic-sans)' : 'var(--font-sans)',
                fontSize: '0.74rem',
                letterSpacing: isAr ? '0.08em' : '0.22em',
                textTransform: 'uppercase',
                color: 'var(--color-warm-amber)',
                fontWeight: 700
              }}
            >
              {t({ ar: 'جوهر نولار وسكينتها', fr: 'L’EXPÉRIENCE NOULAR', en: 'THE NOULAR ESSENCE' })}
            </span>

            <h2
              style={{
                fontFamily: isAr ? 'var(--font-arabic-serif)' : 'var(--font-serif)',
                fontSize: isAr ? '3rem' : 'clamp(2.4rem, 4.5vw, 4rem)',
                fontWeight: isAr ? 700 : 400,
                color: '#F2EEE6',
                lineHeight: 1.15
              }}
            >
              {t({
                ar: 'بيتٌ أكثر هدوءاً وسكينة.',
                fr: 'Une maison plus calme.',
                en: 'A calmer kind of home.'
              })}
            </h2>

            <p
              style={{
                fontFamily: isAr ? 'var(--font-arabic-sans)' : 'var(--font-sans)',
                fontSize: '1.1rem',
                color: '#D9CEBD',
                maxWidth: '520px',
                lineHeight: 1.65
              }}
            >
              {t({
                ar: 'ادعُ نوراً أكثر دفئاً إلى منزلك. كل مصباح يُصنع على الطلب في ورشتنا بالمغرب، صُمم ليؤنس أمسياتك ويجعل ركنك المفضل واحة من الهدوء.',
                fr: 'Invitez une lumière plus douce chez vous. Chaque luminaire est façonné sur commande au Maroc, pensé pour accompagner vos soirées.',
                en: 'Bring softer light home. Every luminaire is crafted to order in Morocco, designed to accompany peaceful evenings.'
              })}
            </p>

            <div style={{ marginTop: '0.8rem' }}>
              <button
                onClick={onExploreCollection}
                className="btn-noular-primary"
                style={{
                  backgroundColor: 'var(--color-warm-amber)',
                  color: '#171614',
                  borderColor: 'var(--color-warm-amber)',
                  fontWeight: 700
                }}
              >
                <span>{t({ ar: 'استكشف تشكيلة المتجر', fr: 'EXPLORER LA BOUTIQUE', en: 'EXPLORE THE SHOP' })}</span>
                {isAr ? <ArrowLeft size={16} /> : <ArrowRight size={16} />}
              </button>
            </div>
          </div>

          <div
            style={{
              gridColumn: 'span 12',
              display: 'flex',
              justifyContent: 'center'
            }}
            className="final-cta-img"
          >
            <div
              style={{
                maxWidth: '440px',
                width: '100%',
                borderRadius: '3px',
                overflow: 'hidden',
                boxShadow: '0 25px 60px -15px rgba(0,0,0,0.8)'
              }}
            >
              <img
                src={realProduct.images.coverDark}
                alt="Noular Warda lampe illuminée"
                style={{ width: '100%', height: 'auto', display: 'block' }}
              />
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (min-width: 900px) {
          .final-cta-text {
            grid-column: span 7 !important;
          }
          .final-cta-img {
            grid-column: span 5 !important;
          }
        }
      `}</style>
    </section>
  );
};
