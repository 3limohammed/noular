import React from 'react';
import { useLanguage } from '../context/LanguageContext';

export const ProcessSection = () => {
  const { t, isAr, dir } = useLanguage();

  return (
    <section id="process" style={{ padding: '6.5rem 0', backgroundColor: 'var(--bg-primary)', direction: dir }}>
      <div className="container-noular">
        {/* Section Title */}
        <div style={{ textAlign: 'center', marginBottom: '4.5rem' }}>
          <span className="text-eyebrow">
            {t({ ar: 'مسار الصنع', fr: 'LE PROCESSUS', en: 'THE PROCESS' })}
          </span>
          <h2
            style={{
              fontFamily: isAr ? 'var(--font-arabic-serif)' : 'var(--font-serif)',
              fontSize: isAr ? '2.8rem' : 'clamp(2.2rem, 3.8vw, 3.2rem)',
              fontWeight: isAr ? 700 : 400,
              color: 'var(--text-primary)',
              marginTop: '0.8rem'
            }}
          >
            {t({
              ar: 'كيف تسير خطوات طلبك؟',
              fr: 'Comment ça marche ?',
              en: 'How it works'
            })}
          </h2>
          <p style={{ color: 'var(--text-secondary)', maxWidth: '540px', margin: '0.8rem auto 0 auto', fontSize: '1rem', lineHeight: 1.6 }}>
            {t({
              ar: 'من لحظة اختيارك حتى وصول القطعة إلى طاولتك: رحلة حرفية واضحة ومطمئنة.',
              fr: 'De votre commande à votre table de chevet : un parcours limpide et artisanal.',
              en: 'From your confirmation to your bedside table: a transparent, mindful journey.'
            })}
          </p>
        </div>

        {/* 3 Step Editorial Cards */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '2.5rem'
          }}
        >
          {/* Step 01 */}
          <div
            style={{
              backgroundColor: 'var(--bg-card)',
              borderRadius: '4px',
              border: '1px solid var(--border-light)',
              padding: '2.5rem 2rem',
              display: 'flex',
              flexDirection: 'column',
              boxShadow: 'var(--shadow-soft)'
            }}
          >
            <div
              style={{
                fontSize: '2rem',
                fontFamily: isAr ? 'var(--font-arabic-serif)' : 'var(--font-serif)',
                color: 'var(--color-terracotta)',
                fontWeight: 700,
                marginBottom: '1rem'
              }}
            >
              01
            </div>
            <h3
              style={{
                fontFamily: isAr ? 'var(--font-arabic-serif)' : 'var(--font-serif)',
                fontSize: isAr ? '1.6rem' : '1.45rem',
                fontWeight: isAr ? 700 : 500,
                color: 'var(--text-primary)'
              }}
            >
              {t({ ar: 'الاختيار والطلب', fr: 'Choisir et commander', en: 'Choose & Order' })}
            </h3>
            <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', marginTop: '0.6rem', lineHeight: 1.6 }}>
              {t({
                ar: 'تختار المصباح الذي يلائم بيتك، تضيفه إلى السلة وتؤكد طلبك. بضع نقرات فقط على موقعنا أو مباشرة عبر واتساب.',
                fr: 'Vous choisissez, vous ajoutez au panier, vous validez. Quelques clics suffisent sur notre boutique en ligne ou directement sur WhatsApp.',
                en: 'You choose, add to cart, and confirm. A few simple clicks on our store or directly via WhatsApp.'
              })}
            </p>
          </div>

          {/* Step 02 */}
          <div
            style={{
              backgroundColor: 'var(--bg-card)',
              borderRadius: '4px',
              border: '1px solid var(--border-light)',
              padding: '2.5rem 2rem',
              display: 'flex',
              flexDirection: 'column',
              boxShadow: 'var(--shadow-soft)'
            }}
          >
            <div
              style={{
                fontSize: '2rem',
                fontFamily: isAr ? 'var(--font-arabic-serif)' : 'var(--font-serif)',
                color: 'var(--color-terracotta)',
                fontWeight: 700,
                marginBottom: '1rem'
              }}
            >
              02
            </div>
            <h3
              style={{
                fontFamily: isAr ? 'var(--font-arabic-serif)' : 'var(--font-serif)',
                fontSize: isAr ? '1.6rem' : '1.45rem',
                fontWeight: isAr ? 700 : 500,
                color: 'var(--text-primary)'
              }}
            >
              {t({ ar: 'التصنيع في الورشة', fr: 'Production à l’atelier', en: 'Production' })}
            </h3>
            <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', marginTop: '0.6rem', lineHeight: 1.6 }}>
              {t({
                ar: 'بعد طلبك، يبدأ التشكيل في الورشة والتجميع الدقيق باليد. المدة المتوقعة للتصنيع من 3 إلى 5 أيام عمل.',
                fr: 'Après votre commande, la fabrication démarre à l’atelier et le montage se fait à la main. Prévoir environ 3 à 5 jours ouvrés.',
                en: 'After your order, shaping starts at the workshop and hand assembly begins. Expect roughly 3 to 5 business days.'
              })}
            </p>

            <div style={{ marginTop: '1.5rem', borderRadius: '3px', overflow: 'hidden', maxHeight: '140px' }}>
              <img
                src="/assets/noular/process/workshop-print.webp"
                alt="Production atelier Noular"
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </div>
          </div>

          {/* Step 03 */}
          <div
            style={{
              backgroundColor: 'var(--bg-card)',
              borderRadius: '4px',
              border: '1px solid var(--border-light)',
              padding: '2.5rem 2rem',
              display: 'flex',
              flexDirection: 'column',
              boxShadow: 'var(--shadow-soft)'
            }}
          >
            <div
              style={{
                fontSize: '2rem',
                fontFamily: isAr ? 'var(--font-arabic-serif)' : 'var(--font-serif)',
                color: 'var(--color-terracotta)',
                fontWeight: 700,
                marginBottom: '1rem'
              }}
            >
              03
            </div>
            <h3
              style={{
                fontFamily: isAr ? 'var(--font-arabic-serif)' : 'var(--font-serif)',
                fontSize: isAr ? '1.6rem' : '1.45rem',
                fontWeight: isAr ? 700 : 500,
                color: 'var(--text-primary)'
              }}
            >
              {t({ ar: 'في الطريق إليك !', fr: 'En route !', en: 'On the Way!' })}
            </h3>
            <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', marginTop: '0.6rem', lineHeight: 1.6 }}>
              {t({
                ar: 'نغلف كل قطعة بعناية ونرسلها إليك. تتلقى رابطاً لتتبع الشحنة مع توصيل مجاني والدفع عند الاستلام.',
                fr: 'On emballe chaque pièce avec soin et on l’envoie. Vous recevez un lien de suivi par e-mail. Livraison offerte partout au Maroc dès 700 DH.',
                en: 'We pack every lamp with tactile care and dispatch it. You receive a live tracking link. Free delivery across Morocco.'
              })}
            </p>

            <div style={{ marginTop: '1.5rem', borderRadius: '3px', overflow: 'hidden', maxHeight: '140px' }}>
              <img
                src="/assets/noular/process/workshop-shipping.webp"
                alt="Expédition soignée Noular"
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
