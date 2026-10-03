import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { BRAND } from '../data/noularData';

export const MadeToOrderSection = ({ onExploreAtelier }) => {
  const { t, isAr, dir } = useLanguage();

  return (
    <section style={{ padding: '6.5rem 0', backgroundColor: 'var(--bg-secondary)', overflow: 'hidden', direction: dir }}>
      <div className="container-noular">
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(12, 1fr)',
            alignItems: 'center',
            gap: '3.5rem'
          }}
        >
          {/* Text Narrative */}
          <div
            style={{
              gridColumn: 'span 12',
              display: 'flex',
              flexDirection: 'column',
              gap: '1.4rem'
            }}
            className="mto-text-col"
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
                {t({ ar: 'فلسفة الإنتاج المسؤول', fr: 'PHILOSOPHIE DE PRODUCTION', en: 'PRODUCTION PHILOSOPHY' })}
              </span>
            </div>

            <h2
              style={{
                fontFamily: isAr ? 'var(--font-arabic-serif)' : 'var(--font-serif)',
                fontSize: isAr ? '2.8rem' : 'clamp(2.2rem, 3.8vw, 3.5rem)',
                color: 'var(--text-primary)',
                lineHeight: 1.15,
                fontWeight: isAr ? 700 : 400
              }}
            >
              {t({
                ar: 'كل قطعة تبدأ بموافقتك.',
                fr: 'Chaque pièce commence par votre oui.',
                en: 'Every piece begins after you say yes.'
              })}
            </h2>

            <p
              style={{
                fontFamily: isAr ? 'var(--font-arabic-sans)' : 'var(--font-sans)',
                fontSize: '1.05rem',
                color: 'var(--text-secondary)',
                lineHeight: 1.65
              }}
            >
              {t({
                ar: 'يُصنع كل مصباح في ورشتنا بالمغرب فقط بعد تأكيد طلبك: لا سلاسل تصنيع عشوائية، ولا مستودعات بضائع نائمة. نقوم بفحص وتشطيب كل تفصيلة باليد قبل الشحن. إيقاع صناعة هادئ يعيد الاعتبار للأصالة.',
                fr: 'Chaque lampe est réalisée dans notre atelier marocain seulement après votre commande : pas de séries inutiles, pas de stock qui dort. Nous contrôlons les finitions à la main avant l’envoi. Une fabrication plus calme qu’à la chaîne.',
                en: 'Each lamp is created in our Moroccan atelier only after you place your order: no wasteful mass production, no dusty unsold stock. We inspect and finish every piece by hand before shipment. A calmer cadence than industrial factory lines.'
              })}
            </p>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.2rem', marginTop: '0.8rem' }}>
              <div style={{ [isAr ? 'borderRight' : 'borderLeft']: '2px solid var(--color-terracotta)', [isAr ? 'paddingRight' : 'paddingLeft']: '1rem' }}>
                <div style={{ fontSize: '1.35rem', fontFamily: isAr ? 'var(--font-arabic-serif)' : 'var(--font-serif)', fontWeight: 700, color: 'var(--text-primary)' }}>
                  {t({ ar: '3 إلى 5 أيام', fr: '3 à 5 jours', en: '3 to 5 days' })}
                </div>
                <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                  {t({ ar: 'متوسط مدة الصنع بالورشة', fr: 'Délai moyen de fabrication', en: 'Average crafting timeframe' })}
                </div>
              </div>

              <div style={{ [isAr ? 'borderRight' : 'borderLeft']: '2px solid var(--color-terracotta)', [isAr ? 'paddingRight' : 'paddingLeft']: '1rem' }}>
                <div style={{ fontSize: '1.35rem', fontFamily: isAr ? 'var(--font-arabic-serif)' : 'var(--font-serif)', fontWeight: 700, color: 'var(--text-primary)' }}>
                  {t({ ar: 'صفر تخزين فائض', fr: '0 sur-stock', en: '0 overstock' })}
                </div>
                <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                  {t({ ar: 'تصنيع حسب الطلب الفعلي', fr: 'Production responsable à la commande', en: 'Zero surplus inventory' })}
                </div>
              </div>
            </div>

            <div style={{ marginTop: '1rem' }}>
              <button
                onClick={onExploreAtelier}
                className="btn-noular-secondary"
                style={{ fontSize: '0.76rem' }}
              >
                {t({ ar: 'تعرف على ورشتنا في المغرب', fr: 'DÉCOUVRIR NOTRE ATELIER', en: 'DISCOVER OUR ATELIER' })}
              </button>
            </div>
          </div>

          {/* Right Visual Composition with Real Workshop Lineart */}
          <div
            style={{
              gridColumn: 'span 12',
              position: 'relative',
              display: 'flex',
              justifyContent: 'center'
            }}
            className="mto-img-col"
          >
            <div
              style={{
                position: 'relative',
                maxWidth: '480px',
                width: '100%',
                borderRadius: '4px',
                backgroundColor: 'var(--bg-card)',
                border: '1px solid var(--border-light)',
                padding: '2.5rem',
                boxShadow: 'var(--shadow-soft)'
              }}
            >
              <img
                src="/assets/noular/process/lamp-lineart.png"
                alt="Warda Lampe dessin technique atelier"
                style={{
                  width: '100%',
                  maxHeight: '380px',
                  objectFit: 'contain',
                  filter: 'contrast(1.05)'
                }}
              />

              <div
                style={{
                  marginTop: '1.5rem',
                  paddingTop: '1.2rem',
                  borderTop: '1px solid var(--border-subtle)',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center'
                }}
              >
                <div style={{ fontSize: '0.78rem', letterSpacing: isAr ? 'normal' : '0.12em', textTransform: isAr ? 'none' : 'uppercase', color: 'var(--text-muted)' }}>
                  {t({ ar: 'ورشة نولار · المغرب', fr: 'Atelier NOULAR · Maroc', en: 'NOULAR Atelier · Morocco' })}
                </div>
                <div style={{ fontSize: '0.78rem', fontWeight: 700, color: 'var(--color-terracotta)' }}>
                  {t({ ar: 'صناعة يدوية على الطلب', fr: 'Fait main sur commande', en: 'Handcrafted to order' })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (min-width: 900px) {
          .mto-text-col {
            grid-column: span 7 !important;
          }
          .mto-img-col {
            grid-column: span 5 !important;
          }
        }
      `}</style>
    </section>
  );
};
