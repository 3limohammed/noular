import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { CRAFT_PILLARS } from '../data/noularData';
import { CheckCircle2 } from 'lucide-react';

export const CraftSection = () => {
  const { t, isAr, dir } = useLanguage();

  return (
    <section style={{ padding: '6.5rem 0', backgroundColor: 'var(--bg-primary)', direction: dir }}>
      <div className="container-noular">
        {/* Section Intro */}
        <div style={{ maxWidth: '720px', marginBottom: '4rem' }}>
          <span className="text-eyebrow">
            {t({ ar: 'شفافية الحرفة والورشة', fr: 'TRANSPARENCE ARTISANALE', en: 'ARTISANAL TRANSPARENCY' })}
          </span>
          <h2
            style={{
              fontFamily: isAr ? 'var(--font-arabic-serif)' : 'var(--font-serif)',
              fontSize: isAr ? '2.8rem' : 'clamp(2.2rem, 4vw, 3.4rem)',
              fontWeight: isAr ? 700 : 400,
              color: 'var(--text-primary)',
              marginTop: '0.8rem',
              lineHeight: 1.15
            }}
          >
            {t({
              ar: 'لماذا 799 درهم ؟',
              fr: 'Pourquoi 799 DH ?',
              en: 'Why 799 DH?'
            })}
          </h2>
          <p
            style={{
              fontFamily: isAr ? 'var(--font-arabic-sans)' : 'var(--font-sans)',
              fontSize: '1.05rem',
              color: 'var(--text-secondary)',
              marginTop: '1rem',
              lineHeight: 1.6
            }}
          >
            {t({
              ar: 'قرابة 18 ساعة عمل متفانية في الورشة لكل مصباح. ليست سلاسل إنتاج متسرعة، بل مسار عمل هادئ، صادق ومصنوع ليدوم سنيناً في بيتك.',
              fr: 'Environ 18 heures de travail d’atelier pour chaque lampe. Pas de chaîne industrielle automatisée, mais un processus lent, soigné et fait pour durer.',
              en: 'Roughly 18 hours of atelier dedication for every single lamp. No rushed factory conveyor belts, but an intentional, gentle process made to last.'
            })}
          </p>
        </div>

        {/* 4 Craft Pillars Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: '2rem'
          }}
        >
          {CRAFT_PILLARS.map((pillar) => (
            <div
              key={pillar.number}
              style={{
                backgroundColor: 'var(--bg-card)',
                borderRadius: '3px',
                border: '1px solid var(--border-light)',
                padding: '2.2rem 1.8rem',
                display: 'flex',
                flexDirection: 'column',
                gap: '1rem',
                boxShadow: 'var(--shadow-soft)'
              }}
            >
              <div
                style={{
                  display: 'flex',
                  alignItems: 'baseline',
                  justifyContent: 'space-between',
                  borderBottom: '1px solid var(--border-subtle)',
                  paddingBottom: '0.8rem'
                }}
              >
                <span
                  style={{
                    fontFamily: isAr ? 'var(--font-arabic-serif)' : 'var(--font-serif)',
                    fontSize: '1.7rem',
                    color: 'var(--color-terracotta)',
                    fontWeight: 700
                  }}
                >
                  {pillar.hours}
                </span>
                <span style={{ fontSize: '0.72rem', letterSpacing: '0.15em', color: 'var(--text-muted)' }}>
                  {pillar.number}
                </span>
              </div>

              <h4
                style={{
                  fontFamily: isAr ? 'var(--font-arabic-serif)' : 'var(--font-serif)',
                  fontSize: isAr ? '1.45rem' : '1.3rem',
                  fontWeight: isAr ? 700 : 500,
                  color: 'var(--text-primary)',
                  lineHeight: 1.25
                }}
              >
                {t(pillar.title)}
              </h4>

              <p
                style={{
                  fontFamily: isAr ? 'var(--font-arabic-sans)' : 'var(--font-sans)',
                  fontSize: '0.88rem',
                  color: 'var(--text-secondary)',
                  lineHeight: 1.6
                }}
              >
                {t(pillar.description)}
              </p>
            </div>
          ))}
        </div>

        {/* Real Inclusive Value Breakdown Banner */}
        <div
          style={{
            marginTop: '3.5rem',
            backgroundColor: 'var(--bg-secondary)',
            borderRadius: '4px',
            border: '1px solid var(--border-light)',
            padding: '1.8rem 2.2rem',
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '1.5rem'
          }}
        >
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1.5rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.85rem', color: 'var(--text-primary)' }}>
              <CheckCircle2 size={16} color="var(--color-terracotta)" />
              {t({ ar: 'لمبة LED E14 4 W مشمولة مجاناً (بقيمة تقارب 30 درهم)', fr: 'Ampoule LED E14 4 W incluse (valeur ≈ 30 DH)', en: 'LED E14 4 W bulb included (≈ 30 DH value)' })}
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.85rem', color: 'var(--text-primary)' }}>
              <CheckCircle2 size={16} color="var(--color-terracotta)" />
              {t({ ar: 'سلك قماشي مجدول 180 سم + مفتاح مدمج inline', fr: 'Câble textile tressé 180 cm + interrupteur inline', en: '180 cm braided cable + inline switch' })}
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.85rem', color: 'var(--text-primary)' }}>
              <CheckCircle2 size={16} color="var(--color-terracotta)" />
              {t({ ar: 'تغليف آمن وراقي مع لمسات ورقية خاصة', fr: 'Emballage soigné & détails papier personnalisés', en: 'Protective packaging & tactile paper details' })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
