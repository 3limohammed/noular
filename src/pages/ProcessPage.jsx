import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { ProcessSection } from '../components/ProcessSection';
import { ArrowRight, ArrowLeft, Sparkles } from 'lucide-react';

export const ProcessPage = ({ navigateTo }) => {
  const { t, isAr, dir } = useLanguage();

  return (
    <div style={{ backgroundColor: 'var(--bg-primary)', padding: '3.5rem 0 7rem 0', direction: dir }}>
      <div className="container-noular">
        <div style={{ maxWidth: '780px', marginBottom: '3rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
            <span style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: 'var(--color-terracotta)' }} />
            <span className="text-eyebrow">
              {t({
                ar: 'منهجية العمل والشفافية',
                fr: 'MÉTHODE & TRANSPARENCE',
                en: 'METHOD & TRANSPARENCY'
              })}
            </span>
          </div>

          <h1
            style={{
              fontFamily: isAr ? 'var(--font-arabic-serif)' : 'var(--font-serif)',
              fontSize: isAr ? '3rem' : 'clamp(2.5rem, 5vw, 4rem)',
              fontWeight: isAr ? 700 : 400,
              color: 'var(--text-primary)',
              marginTop: '0.8rem',
              lineHeight: 1.15
            }}
          >
            {t({
              ar: 'كل قطعة تبدأ بموافقتك.',
              fr: 'Chaque pièce commence par votre oui.',
              en: 'Every piece begins after you say yes.'
            })}
          </h1>

          <p
            style={{
              fontFamily: isAr ? 'var(--font-arabic-sans)' : 'var(--font-sans)',
              fontSize: '1.15rem',
              color: 'var(--text-secondary)',
              marginTop: '1.2rem',
              lineHeight: 1.7
            }}
          >
            {t({
              ar: 'لا إنتاج عشوائي ضخم، ولا مستودعات ممتلئة ببضائع نائمة. إليك كيف ينتقل مصباحك من ورشتنا في المغرب مباشرة إلى غرفتك وطاولتك.',
              fr: 'Pas de production de masse, pas d’entrepôts saturés. Voici comment votre luminaire passe de notre atelier marocain à votre salon.',
              en: 'No mass production, no saturated warehouses. Here is how your lamp travels from our Moroccan studio into your living space.'
            })}
          </p>
        </div>

        {/* Re-use Process Section */}
        <ProcessSection />

        {/* Technical lineart visual */}
        <div
          style={{
            marginTop: '4rem',
            padding: '3rem',
            backgroundColor: 'var(--bg-secondary)',
            borderRadius: '4px',
            border: '1px solid var(--border-light)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            textAlign: 'center',
            gap: '1.5rem'
          }}
        >
          <img
            src="/assets/noular/process/lamp-lineart.png"
            alt="Épure Warda"
            style={{ maxHeight: '280px', objectFit: 'contain' }}
          />
          <p
            style={{
              maxWidth: '580px',
              fontFamily: isAr ? 'var(--font-arabic-sans)' : 'var(--font-sans)',
              color: 'var(--text-secondary)',
              fontSize: '0.95rem',
              lineHeight: 1.6
            }}
          >
            {t({
              ar: 'الفروقات الدقيقة والتموجات الملمسية الرقيقة هي جزء جوهري من جمال الحرفية اليدوية والطباعة الرقمية المتقنة. كل مصباح هو تحفة حصرية وفريدة.',
              fr: 'De légères variations de texture font partie intégrante du charme de l’artisanat numérique et manuel. Votre lampe est véritablement unique.',
              en: 'Subtle textural variations are part of the intrinsic charm of digital craftsmanship and manual finishing. Your lamp is truly unique.'
            })}
          </p>
          <button
            onClick={() => navigateTo('/fr/shop')}
            className="btn-noular-primary"
          >
            {t({ ar: 'اختر مصباح وردة الخاص بك', fr: 'CHOISIR VOTRE WARDA', en: 'CHOOSE YOUR WARDA' })}
            {isAr ? <ArrowLeft size={16} /> : <ArrowRight size={16} />}
          </button>
        </div>
      </div>
    </div>
  );
};

