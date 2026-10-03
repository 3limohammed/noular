import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { PRODUCTS } from '../data/noularData';
import { ProductCard } from './ProductCard';
import { Sparkles, ShieldCheck, Truck, Clock } from 'lucide-react';

export const ProductCollection = ({ onSelectProduct }) => {
  const { t, isAr, dir } = useLanguage();

  return (
    <section id="collection" style={{ padding: '6rem 0', backgroundColor: 'var(--bg-primary)', direction: dir }}>
      <div className="container-noular">
        {/* Editorial Section Header */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            textAlign: 'center',
            gap: '1rem',
            marginBottom: '4.5rem'
          }}
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
              {t({
                ar: 'مجموعة الإنارة النحتية المعمارية',
                fr: 'LUMINAIRES D’INTÉRIEUR',
                en: 'INTERIOR SCULPTURAL LIGHTING'
              })}
            </span>
          </div>

          <h2
            style={{
              fontFamily: isAr ? 'var(--font-arabic-serif)' : 'var(--font-serif)',
              fontSize: isAr ? '2.8rem' : 'clamp(2.2rem, 4vw, 3.6rem)',
              color: 'var(--text-primary)',
              letterSpacing: isAr ? 'normal' : '-0.02em',
              fontWeight: isAr ? 700 : 400
            }}
          >
            {t({
              ar: 'مجموعة وردة.',
              fr: 'La Collection Warda.',
              en: 'The Warda Collection.'
            })}
          </h2>

          <p
            style={{
              fontFamily: isAr ? 'var(--font-arabic-sans)' : 'var(--font-sans)',
              fontSize: isAr ? '1.05rem' : '1.05rem',
              color: 'var(--text-secondary)',
              maxWidth: '580px',
              lineHeight: 1.6
            }}
          >
            {t({
              ar: 'أربعة تجليات للغة نحتية واحدة. خطوط نقية، مادة نباتية مستدامة، ونور دافئ يهدئ تفاصيل يومك.',
              fr: 'Quatre expressions d’un même langage sculptural. Lignes nettes, matière bio-sourcée et lumière bienfaisante.',
              en: 'Four expressions of the same sculptural language. Pure fluting, biobased material, and soothing ambient light.'
            })}
          </p>
        </div>

        {/* 4 Products Editorial Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '2.4rem'
          }}
        >
          {PRODUCTS.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onSelect={onSelectProduct}
            />
          ))}
        </div>

        {/* Two-Lamp Bedroom Bundle Promo Box */}
        <div
          style={{
            marginTop: '4.5rem',
            backgroundColor: 'var(--bg-secondary)',
            border: '1px solid var(--border-light)',
            borderRadius: '4px',
            padding: '2rem 2.5rem',
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '1.8rem'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '1.2rem', maxWidth: '620px' }}>
            <div
              style={{
                width: '46px',
                height: '46px',
                borderRadius: '50%',
                backgroundColor: 'var(--color-terracotta)',
                color: '#FFFFFF',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0
              }}
            >
              <Sparkles size={22} />
            </div>

            <div>
              <h4
                style={{
                  fontFamily: isAr ? 'var(--font-arabic-serif)' : 'var(--font-serif)',
                  fontSize: isAr ? '1.6rem' : '1.45rem',
                  fontWeight: isAr ? 700 : 500,
                  color: 'var(--text-primary)'
                }}
              >
                {t({
                  ar: 'عرض ثنائي غرفة النوم · مصباحان بسعر 1 499 درهم',
                  fr: 'Offre Duo Chambre · 2 Lampes pour 1 499 DH',
                  en: 'Bedroom Pair Offer · 2 Lamps for 1,499 DH'
                })}
              </h4>
              <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', marginTop: '0.2rem' }}>
                {t({
                  ar: 'السعر المعتاد لمصباحين: 1 598 درهم. توفرون 99 درهم. مثالي لجانبي السرير أو على طاولة الكونسول ومدخل البيت.',
                  fr: 'Prix habituel pour 2 lampes : 1 598 DH. Vous économisez 99 DH. Idéal pour encadrer un lit ou meubler console & chevet.',
                  en: 'Standard price for 2 lamps: 1,598 DH. Save 99 DH. Ideal to frame a bed or complement console and nightstand.'
                })}
              </p>
            </div>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <div style={{ textAlign: isAr ? 'left' : 'right' }}>
              <div style={{ fontSize: '1.35rem', fontWeight: 700, color: 'var(--text-primary)' }}>
                1 499 {isAr ? 'درهم' : 'DH'}
              </div>
              <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', textDecoration: 'line-through' }}>
                1 598 {isAr ? 'درهم' : 'DH'}
              </div>
            </div>

            <button
              onClick={() => onSelectProduct('warda-sienna')}
              className="btn-noular-primary"
              style={{ padding: '0.8rem 1.6rem', fontSize: '0.76rem' }}
            >
              {t({ ar: 'اختيار الثنائي', fr: 'CHOISIR LE DUO', en: 'CHOOSE PAIR' })}
            </button>
          </div>
        </div>

        {/* Brand Guarantees Strip */}
        <div
          style={{
            marginTop: '3.5rem',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            gap: '1.5rem',
            paddingTop: '2.5rem',
            borderTop: '1px solid var(--border-subtle)'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.8rem' }}>
            <Truck size={20} color="var(--color-terracotta)" style={{ flexShrink: 0, marginTop: '2px' }} />
            <div>
              <div style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--text-primary)' }}>
                {t({ ar: 'توصيل مجاني', fr: 'Livraison offerte', en: 'Free Shipping' })}
              </div>
              <div style={{ fontSize: '0.78rem', color: 'var(--text-secondary)' }}>
                {t({ ar: 'في جميع مدن المغرب ابتداءً من 700 درهم', fr: 'Partout au Maroc dès 700 DH', en: 'Across Morocco from 700 DH' })}
              </div>
            </div>
          </div>

          <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.8rem' }}>
            <Clock size={20} color="var(--color-terracotta)" style={{ flexShrink: 0, marginTop: '2px' }} />
            <div>
              <div style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--text-primary)' }}>
                {t({ ar: 'تُصنع على الطلب', fr: 'Façonnée sur commande', en: 'Made to Order' })}
              </div>
              <div style={{ fontSize: '0.78rem', color: 'var(--text-secondary)' }}>
                {t({ ar: '3 إلى 5 أيام عمل في ورشتنا بالمغرب', fr: '3 à 5 jours ouvrés à l’atelier', en: '3 to 5 working days at atelier' })}
              </div>
            </div>
          </div>

          <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.8rem' }}>
            <ShieldCheck size={20} color="var(--color-terracotta)" style={{ flexShrink: 0, marginTop: '2px' }} />
            <div>
              <div style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--text-primary)' }}>
                {t({ ar: 'ضمان لمدة سنتين', fr: 'Garantie 24 mois', en: '24-Month Warranty' })}
              </div>
              <div style={{ fontSize: '0.78rem', color: 'var(--text-secondary)' }}>
                {t({ ar: 'شامل للمواد والتجهيز الكهربائي', fr: 'Matériaux et conformité', en: 'Materials & manufacturing' })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
