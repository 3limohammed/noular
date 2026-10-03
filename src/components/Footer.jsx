import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { BRAND } from '../data/noularData';
import { MessageCircle, Mail, MapPin } from 'lucide-react';

export const Footer = ({ navigateTo }) => {
  const { t, isAr, dir } = useLanguage();

  return (
    <footer
      style={{
        backgroundColor: 'var(--bg-secondary)',
        borderTop: '1px solid var(--border-light)',
        padding: '5rem 0 3rem 0',
        transition: 'background-color 400ms ease',
        direction: dir
      }}
    >
      <div className="container-noular">
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            gap: '3rem',
            paddingBottom: '3.5rem',
            borderBottom: '1px solid var(--border-subtle)'
          }}
        >
          {/* Brand Info */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <span
              style={{
                fontFamily: isAr ? 'var(--font-arabic-serif)' : 'var(--font-serif)',
                fontSize: isAr ? '2.4rem' : '1.9rem',
                letterSpacing: isAr ? 'normal' : '0.22em',
                fontWeight: isAr ? 700 : 500,
                color: 'var(--text-primary)'
              }}
            >
              {isAr ? 'نـولار' : 'NOULAR'}
            </span>
            <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: 1.65, maxWidth: '280px' }}>
              {t(BRAND.tagline)}<br />
              {t(BRAND.subtagline)}
            </p>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.82rem', color: 'var(--text-muted)' }}>
              <MapPin size={14} color="var(--color-terracotta)" />
              <span>{t(BRAND.contact.location)} · {t({ ar: 'توصيل مجاني لجميع مدن المغرب', fr: 'Livraison dans tout le Maroc', en: 'Shipping throughout Morocco' })}</span>
            </div>
          </div>

          {/* Navigation Links */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
            <span className="text-eyebrow">
              {t({ ar: 'المتجر والورشة', fr: 'BOUTIQUE & ATELIER', en: 'SHOP & ATELIER' })}
            </span>
            <a
              href="/fr/shop"
              onClick={(e) => { e.preventDefault(); navigateTo('/fr/shop'); }}
              style={{ color: 'var(--text-secondary)', textDecoration: 'none', fontSize: '0.88rem' }}
            >
              {t({ ar: 'المجموعة الكاملة', fr: 'Toute la collection', en: 'All Collection' })}
            </a>
            <a
              href="/fr/product/warda-sienna"
              onClick={(e) => { e.preventDefault(); navigateTo('/fr/product/warda-sienna'); }}
              style={{ color: 'var(--text-secondary)', textDecoration: 'none', fontSize: '0.88rem' }}
            >
              {isAr ? 'وردة سيينا · قاعدة برتقالية' : 'Warda Sienna'}
            </a>
            <a
              href="/fr/product/warda-basalt"
              onClick={(e) => { e.preventDefault(); navigateTo('/fr/product/warda-basalt'); }}
              style={{ color: 'var(--text-secondary)', textDecoration: 'none', fontSize: '0.88rem' }}
            >
              {isAr ? 'وردة بازلت · قاعدة داكنة' : 'Warda Basalt'}
            </a>
            <a
              href="/fr/product/warda-neige"
              onClick={(e) => { e.preventDefault(); navigateTo('/fr/product/warda-neige'); }}
              style={{ color: 'var(--text-secondary)', textDecoration: 'none', fontSize: '0.88rem' }}
            >
              {isAr ? 'وردة ثلج · أبيض' : 'Warda Neige'}
            </a>
            <a
              href="/fr/product/warda-soleil"
              onClick={(e) => { e.preventDefault(); navigateTo('/fr/product/warda-soleil'); }}
              style={{ color: 'var(--text-secondary)', textDecoration: 'none', fontSize: '0.88rem' }}
            >
              {isAr ? 'وردة شمس · برتقالي كامل' : 'Warda Soleil'}
            </a>
            <a
              href="/fr/atelier"
              onClick={(e) => { e.preventDefault(); navigateTo('/fr/atelier'); }}
              style={{ color: 'var(--text-secondary)', textDecoration: 'none', fontSize: '0.88rem' }}
            >
              {t({ ar: 'ورشتنا في المغرب', fr: 'Notre Atelier', en: 'Our Atelier' })}
            </a>
            <a
              href="/fr/how-it-is-made"
              onClick={(e) => { e.preventDefault(); navigateTo('/fr/how-it-is-made'); }}
              style={{ color: 'var(--text-secondary)', textDecoration: 'none', fontSize: '0.88rem' }}
            >
              {t({ ar: 'كيف تُصنع القطع', fr: 'Comment c’est fait', en: 'How it is made' })}
            </a>
          </div>

          {/* Customer Service & WhatsApp */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
            <span className="text-eyebrow">
              {t({ ar: 'خدمة العملاء والتواصل', fr: 'SERVICE CLIENT & CONTACT', en: 'CUSTOMER CARE' })}
            </span>
            <p style={{ fontSize: '0.84rem', color: 'var(--text-secondary)' }}>
              {t({
                ar: 'أي استفسار عن قطعة معينة أو طلب مخصص أو الشحن؟ نحن هنا لمساعدتك.',
                fr: 'Une question sur une pièce, un projet ou la livraison ?',
                en: 'Questions about a piece, a project, or delivery?'
              })}
            </p>
            <a
              href={`https://wa.me/${BRAND.contact.whatsappRaw}`}
              target="_blank"
              rel="noreferrer"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                color: '#25D366',
                textDecoration: 'none',
                fontWeight: 700,
                fontSize: '0.9rem'
              }}
            >
              <MessageCircle size={16} />
              واتساب : {BRAND.contact.whatsapp}
            </a>
            <a
              href={`mailto:${BRAND.contact.email}`}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                color: 'var(--text-primary)',
                textDecoration: 'none',
                fontSize: '0.88rem'
              }}
            >
              <Mail size={16} />
              {BRAND.contact.email}
            </a>
            <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)', marginTop: '0.2rem' }}>
              {t(BRAND.contact.hours)}
            </div>
          </div>

          {/* Production & Legal */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
            <span className="text-eyebrow">
              {t({ ar: 'معلومات قانونية', fr: 'INFORMATIONS LÉGALES', en: 'LEGAL & TERMS' })}
            </span>
            <a
              href="/fr/privacy"
              onClick={(e) => { e.preventDefault(); navigateTo('/fr/privacy'); }}
              style={{ color: 'var(--text-secondary)', textDecoration: 'none', fontSize: '0.88rem' }}
            >
              {t({ ar: 'سياسة الخصوصية', fr: 'Politique de confidentialité', en: 'Privacy Policy' })}
            </a>
            <a
              href="/fr/terms"
              onClick={(e) => { e.preventDefault(); navigateTo('/fr/terms'); }}
              style={{ color: 'var(--text-secondary)', textDecoration: 'none', fontSize: '0.88rem' }}
            >
              {t({ ar: 'شروط البيع والاستخدام', fr: 'Conditions de vente & d’utilisation', en: 'Terms of Sale & Use' })}
            </a>
            <div style={{ marginTop: '0.8rem', padding: '0.8rem', backgroundColor: 'var(--bg-primary)', borderRadius: '3px', border: '1px solid var(--border-subtle)' }}>
              <div style={{ fontSize: '0.76rem', fontWeight: 700, color: 'var(--text-primary)' }}>
                {t({ ar: 'ضمان لمدة سنتين شامل', fr: 'Garantie 24 mois incluse', en: '24-Month Warranty Included' })}
              </div>
              <div style={{ fontSize: '0.74rem', color: 'var(--text-muted)', marginTop: '0.2rem' }}>
                {t(BRAND.warranty.coverage)}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Credits & Copyright */}
        <div
          style={{
            paddingTop: '2rem',
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '1rem',
            fontSize: '0.8rem',
            color: 'var(--text-muted)'
          }}
        >
          <div>
            © 2026 NOULAR · Created by owwcostudio
          </div>
          <div>
            {t({
              ar: 'قطع حرفية أصيلة تُصنع في المغرب · الفروق الطفيفة في الملمس طبيعية وتؤكد أصالة الحرفة.',
              fr: 'Pièces artisanales façonnées au Maroc · De légères variations sont normales.',
              en: 'Handmade objects crafted in Morocco · Subtle natural variations are expected.'
            })}
          </div>
        </div>
      </div>
    </footer>
  );
};
