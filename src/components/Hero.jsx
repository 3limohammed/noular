import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { useTheme } from '../context/ThemeContext';
import { PRODUCTS } from '../data/noularData';
import { ArrowDown, Sparkles, Lightbulb, ChevronRight } from 'lucide-react';

export const Hero = ({ onExploreClick, onProductSelect }) => {
  const { t } = useLanguage();
  const { isDark } = useTheme();
  
  // Real hero product: Warda Sienna
  const heroProduct = PRODUCTS[0];
  
  // Interactive light state toggle: light-on (warm glow at night) vs light-off (natural daytime daylight)
  const [isLightOn, setIsLightOn] = useState(true);

  return (
    <section
      style={{
        position: 'relative',
        minHeight: 'calc(100vh - 100px)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
        paddingTop: '2rem',
        paddingBottom: '4rem'
      }}
    >
      {/* Background Soft Architectural Gradient */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: isDark
            ? 'radial-gradient(ellipse 65% 55% at 50% 45%, rgba(217, 164, 91, 0.08), transparent 70%)'
            : 'radial-gradient(ellipse 65% 55% at 50% 45%, rgba(217, 164, 91, 0.12), transparent 70%)',
          pointerEvents: 'none'
        }}
      />

      <div className="container-noular" style={{ position: 'relative', zIndex: 2, width: '100%' }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(12, 1fr)',
            alignItems: 'center',
            gap: '2rem'
          }}
        >
          {/* Left Editorial Copy */}
          <div
            style={{
              gridColumn: 'span 12',
              display: 'flex',
              flexDirection: 'column',
              gap: '1.4rem'
            }}
            className="hero-text-col"
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
              <span
                style={{
                  width: '8px',
                  height: '8px',
                  borderRadius: '50%',
                  backgroundColor: 'var(--color-terracotta)'
                }}
              />
              <span className="text-eyebrow">
                {t({ fr: 'LUMINAIRES SCULPTURAUX · MAROC', en: 'SCULPTURAL LIGHTING · MOROCCO' })}
              </span>
            </div>

            <h1
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: 'clamp(2.5rem, 5.2vw, 4.8rem)',
                lineHeight: 1.08,
                fontWeight: 400,
                color: 'var(--text-primary)',
                letterSpacing: '-0.02em',
                maxWidth: '680px'
              }}
            >
              {t({
                fr: 'Une maison plus calme.',
                en: 'A calmer kind of home.'
              })}
            </h1>

            <p
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: 'clamp(1rem, 1.3vw, 1.2rem)',
                lineHeight: 1.6,
                color: 'var(--text-secondary)',
                maxWidth: '520px',
                fontWeight: 400
              }}
            >
              {t({
                fr: 'Des objets faits pour adoucir l’espace. Façonnés sur commande dans notre atelier marocain, finis à la main.',
                en: 'Objects made to soften the space. Crafted to order in our Moroccan workshop, finished with quiet care.'
              })}
            </p>

            {/* CTAs */}
            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                alignItems: 'center',
                gap: '1.2rem',
                marginTop: '1rem'
              }}
            >
              <button
                onClick={onExploreClick}
                className="btn-noular-primary"
                style={{ cursor: 'pointer' }}
              >
                {t({ fr: 'EXPLORER LA COLLECTION', en: 'EXPLORE THE COLLECTION' })}
                <ChevronRight size={16} />
              </button>

              <button
                onClick={() => onProductSelect(heroProduct.slug)}
                className="btn-noular-secondary"
                style={{ cursor: 'pointer' }}
              >
                {t({ fr: 'DÉCOUVRIR WARDA SIENNA', en: 'DISCOVER WARDA SIENNA' })}
              </button>
            </div>

            {/* Interactive Illumination Switcher Pill */}
            <div
              style={{
                marginTop: '1.8rem',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.8rem',
                padding: '0.5rem 1rem',
                borderRadius: '30px',
                border: '1px solid var(--border-light)',
                backgroundColor: 'var(--bg-glass)',
                backdropFilter: 'blur(10px)',
                width: 'fit-content'
              }}
            >
              <Lightbulb
                size={16}
                color={isLightOn ? 'var(--color-warm-amber)' : 'var(--text-muted)'}
              />
              <span style={{ fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.08em', color: 'var(--text-secondary)' }}>
                {t({ fr: 'INTERACTIF :', en: 'INTERACTIVE:' })}
              </span>
              <button
                onClick={() => setIsLightOn(!isLightOn)}
                style={{
                  background: isLightOn ? 'var(--color-terracotta)' : 'var(--bg-secondary)',
                  color: isLightOn ? '#FFFFFF' : 'var(--text-primary)',
                  border: 'none',
                  borderRadius: '20px',
                  padding: '0.25rem 0.75rem',
                  fontSize: '0.72rem',
                  fontWeight: 600,
                  cursor: 'pointer',
                  transition: 'all 250ms ease'
                }}
              >
                {isLightOn
                  ? t({ fr: 'Lumière allumée (2700 K)', en: 'Light Illuminated (2700 K)' })
                  : t({ fr: 'Lumière éteinte (Jour)', en: 'Natural Daylight' })}
              </button>
            </div>
          </div>

          {/* Right Product Hero Stage (Real NOULAR Product Photography) */}
          <div
            style={{
              gridColumn: 'span 12',
              position: 'relative',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center'
            }}
            className="hero-image-col"
          >
            {/* Ambient Backlight Glow for Illuminated State */}
            {isLightOn && (
              <div
                style={{
                  position: 'absolute',
                  width: '360px',
                  height: '360px',
                  borderRadius: '50%',
                  background: 'radial-gradient(circle, rgba(217, 164, 91, 0.45) 0%, rgba(217, 164, 91, 0.08) 55%, transparent 75%)',
                  filter: 'blur(30px)',
                  pointerEvents: 'none',
                  transform: 'translateY(-8%)',
                  transition: 'opacity 600ms ease'
                }}
              />
            )}

            {/* The Real Product Frame */}
            <div
              style={{
                position: 'relative',
                maxWidth: '560px',
                width: '100%',
                borderRadius: '4px',
                overflow: 'hidden',
                boxShadow: isDark
                  ? '0 30px 60px -15px rgba(0, 0, 0, 0.7)'
                  : '0 30px 60px -15px rgba(43, 38, 33, 0.16)',
                transition: 'box-shadow 400ms ease'
              }}
            >
              <img
                src={isLightOn ? heroProduct.images.coverDark : heroProduct.images.coverLight}
                alt="Noular Warda Sienna Lampe sur socle minéral"
                style={{
                  width: '100%',
                  height: 'auto',
                  display: 'block',
                  transition: 'opacity 500ms var(--ease-editorial), transform 700ms var(--ease-editorial)',
                  transform: 'scale(1.01)'
                }}
              />

              {/* Discreet Authentic Product Badge */}
              <div
                style={{
                  position: 'absolute',
                  bottom: '1.4rem',
                  left: '1.4rem',
                  right: '1.4rem',
                  padding: '0.8rem 1.2rem',
                  borderRadius: '2px',
                  backgroundColor: 'rgba(23, 22, 20, 0.75)',
                  backdropFilter: 'blur(12px)',
                  color: '#FFFFFF',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center'
                }}
              >
                <div>
                  <div style={{ fontSize: '0.72rem', letterSpacing: '0.14em', textTransform: 'uppercase', opacity: 0.8 }}>
                    {heroProduct.name}
                  </div>
                  <div style={{ fontFamily: 'var(--font-serif)', fontSize: '1.15rem', color: 'var(--color-warm-amber)' }}>
                    799 DH <span style={{ fontSize: '0.85rem', textDecoration: 'line-through', opacity: 0.6, marginLeft: '0.4rem' }}>899 DH</span>
                  </div>
                </div>

                <button
                  onClick={() => onProductSelect(heroProduct.slug)}
                  style={{
                    background: 'none',
                    border: '1px solid rgba(255, 255, 255, 0.4)',
                    color: '#FFFFFF',
                    borderRadius: '2px',
                    padding: '0.35rem 0.8rem',
                    fontSize: '0.72rem',
                    fontWeight: 600,
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase',
                    cursor: 'pointer',
                    transition: 'all 200ms ease'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = '#FFFFFF';
                    e.currentTarget.style.color = '#171614';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = 'transparent';
                    e.currentTarget.style.color = '#FFFFFF';
                  }}
                >
                  {t({ fr: 'VOIR →', en: 'VIEW →' })}
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div
          style={{
            marginTop: '3.5rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'column',
            gap: '0.5rem',
            opacity: 0.75
          }}
        >
          <span className="text-eyebrow" style={{ fontSize: '0.68rem' }}>
            {t({ fr: 'DÉFILER POUR DÉCOUVRIR', en: 'SCROLL TO EXPLORE' })}
          </span>
          <ArrowDown size={14} className="animate-bounce" />
        </div>
      </div>

      <style>{`
        @media (min-width: 960px) {
          .hero-text-col {
            grid-column: span 6 !important;
          }
          .hero-image-col {
            grid-column: span 6 !important;
          }
        }
        @keyframes bounceSlow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(6px); }
        }
        .animate-bounce {
          animation: bounceSlow 2s infinite ease-in-out;
        }
      `}</style>
    </section>
  );
};
