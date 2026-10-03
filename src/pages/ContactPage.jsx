import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { BRAND } from '../data/noularData';
import { MessageCircle, Mail, MapPin, Send, CheckCircle2 } from 'lucide-react';

export const ContactPage = () => {
  const { t, isAr, dir } = useLanguage();
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.message) return;
    setSent(true);
  };

  return (
    <div style={{ backgroundColor: 'var(--bg-primary)', padding: '3.5rem 0 7rem 0', direction: dir }}>
      <div className="container-noular">
        <div style={{ maxWidth: '680px', marginBottom: '3.5rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
            <span style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: 'var(--color-terracotta)' }} />
            <span className="text-eyebrow">
              {t({
                ar: 'خدمة العملاء والورشة المباشرة',
                fr: 'SERVICE CLIENT & ATELIER',
                en: 'DIRECT INQUIRIES'
              })}
            </span>
          </div>

          <h1
            style={{
              fontFamily: isAr ? 'var(--font-arabic-serif)' : 'var(--font-serif)',
              fontSize: isAr ? '3rem' : 'clamp(2.6rem, 5vw, 4rem)',
              fontWeight: isAr ? 700 : 400,
              color: 'var(--text-primary)',
              marginTop: '0.8rem',
              lineHeight: 1.15
            }}
          >
            {t({ ar: 'تواصل معنا', fr: 'Contact', en: 'Contact Us' })}
          </h1>

          <p
            style={{
              fontFamily: isAr ? 'var(--font-arabic-sans)' : 'var(--font-sans)',
              fontSize: '1.1rem',
              color: 'var(--text-secondary)',
              marginTop: '0.8rem',
              lineHeight: 1.6
            }}
          >
            {t({
              ar: 'هل لديك استفسار حول قطعة معينة، أو ترغب في طلب مخصص لمشروع معماري، أو شحن خاص؟ يسعدنا جداً الإجابة ومساعدتك.',
              fr: 'Des questions sur une pièce, un projet sur mesure ou une livraison internationale ? Nous vous répondons avec plaisir.',
              en: 'Questions about a piece, a bespoke architectural project, or international delivery? We would love to assist you.'
            })}
          </p>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(12, 1fr)',
            gap: '3rem',
            alignItems: 'start'
          }}
        >
          {/* Direct Channels */}
          <div
            style={{
              gridColumn: 'span 12',
              display: 'flex',
              flexDirection: 'column',
              gap: '1.5rem'
            }}
            className="contact-info-col"
          >
            {/* WhatsApp Card */}
            <div
              style={{
                backgroundColor: 'var(--bg-card)',
                borderRadius: '4px',
                border: '1px solid var(--border-light)',
                padding: '2rem',
                display: 'flex',
                flexDirection: 'column',
                gap: '0.8rem',
                boxShadow: 'var(--shadow-soft)'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', color: '#25D366' }}>
                <MessageCircle size={22} />
                <span style={{ fontWeight: 700, fontSize: '0.82rem', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
                  WhatsApp Direct
                </span>
              </div>
              <div style={{ fontSize: '1.4rem', fontFamily: 'var(--font-serif)', color: 'var(--text-primary)' }}>
                {BRAND.contact.whatsapp}
              </div>
              <p style={{ fontSize: '0.88rem', fontFamily: isAr ? 'var(--font-arabic-sans)' : 'var(--font-sans)', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                {t({
                  ar: 'الوسيلة الأسرع لطرح أي سؤال، أو الطلب المباشر، أو متابعة مسار تصنيع وشحن قطعتك في المغرب.',
                  fr: 'Le canal le plus rapide pour poser une question, commander directement ou suivre une commande en cours.',
                  en: 'The fastest channel to ask questions, place an order, or check production status.'
                })}
              </p>
              <a
                href={`https://wa.me/${BRAND.contact.whatsappRaw}`}
                target="_blank"
                rel="noreferrer"
                className="btn-whatsapp"
                style={{ width: 'fit-content', padding: '0.75rem 1.4rem', fontSize: '0.76rem', marginTop: '0.4rem' }}
              >
                {t({ ar: 'فتح محادثة واتساب', fr: 'OUVRIR WHATSAPP', en: 'OPEN WHATSAPP' })}
              </a>
            </div>

            {/* Email & Location Card */}
            <div
              style={{
                backgroundColor: 'var(--bg-card)',
                borderRadius: '4px',
                border: '1px solid var(--border-light)',
                padding: '2rem',
                display: 'flex',
                flexDirection: 'column',
                gap: '1.2rem',
                boxShadow: 'var(--shadow-soft)'
              }}
            >
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-muted)', fontSize: '0.76rem', textTransform: isAr ? 'none' : 'uppercase', letterSpacing: '0.1em' }}>
                  <Mail size={16} />
                  <span>{t({ ar: 'البريد الإلكتروني', fr: 'E-mail', en: 'Email' })}</span>
                </div>
                <a
                  href={`mailto:${BRAND.contact.email}`}
                  style={{ fontSize: '1.15rem', color: 'var(--text-primary)', textDecoration: 'none', fontWeight: 600, display: 'block', marginTop: '0.2rem' }}
                >
                  {BRAND.contact.email}
                </a>
              </div>

              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-muted)', fontSize: '0.76rem', textTransform: isAr ? 'none' : 'uppercase', letterSpacing: '0.1em' }}>
                  <MapPin size={16} />
                  <span>{t({ ar: 'الورشة والمقر', fr: 'Atelier & Origine', en: 'Atelier & Origin' })}</span>
                </div>
                <div style={{ fontSize: '1.05rem', color: 'var(--text-primary)', marginTop: '0.2rem' }}>
                  {t({ ar: 'المغرب · توصيل مجاني وسريع لجميع المدن ابتداءً من 700 درهم', fr: 'Maroc · Livraison offerte dans toutes les villes', en: 'Morocco · Free delivery across all cities' })}
                </div>
              </div>

              <div style={{ fontSize: '0.8rem', fontFamily: isAr ? 'var(--font-arabic-sans)' : 'var(--font-sans)', color: 'var(--text-muted)', borderTop: '1px solid var(--border-subtle)', paddingTop: '0.8rem' }}>
                {t(BRAND.contact.hours)}
              </div>
            </div>
          </div>

          {/* Quick Message Form */}
          <div
            style={{
              gridColumn: 'span 12',
              backgroundColor: 'var(--bg-card)',
              borderRadius: '4px',
              border: '1px solid var(--border-light)',
              padding: '2.5rem',
              boxShadow: 'var(--shadow-soft)'
            }}
            className="contact-form-col"
          >
            <span className="text-eyebrow">{t({ ar: 'نموذج المراسلة السريع', fr: 'FORMULAIRE', en: 'MESSAGE' })}</span>
            <h3
              style={{
                fontFamily: isAr ? 'var(--font-arabic-serif)' : 'var(--font-serif)',
                fontSize: isAr ? '1.9rem' : '1.8rem',
                fontWeight: isAr ? 700 : 500,
                color: 'var(--text-primary)',
                marginTop: '0.2rem',
                marginBottom: '1.2rem'
              }}
            >
              {t({ ar: 'أرسل لنا رسالة', fr: 'Écrivez-nous', en: 'Send a note' })}
            </h3>

            {sent ? (
              <div style={{ textAlign: 'center', padding: '2rem 1rem', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem' }}>
                <CheckCircle2 size={36} color="#25D366" />
                <h4 style={{ fontFamily: isAr ? 'var(--font-arabic-serif)' : 'var(--font-serif)', fontSize: '1.5rem', color: 'var(--text-primary)' }}>
                  {t({ ar: 'تم استلام رسالتك بنجاح !', fr: 'Message bien reçu !', en: 'Message sent!' })}
                </h4>
                <p style={{ fontSize: '0.92rem', fontFamily: isAr ? 'var(--font-arabic-sans)' : 'var(--font-sans)', color: 'var(--text-secondary)' }}>
                  {t({
                    ar: 'شكراً لتواصلك معنا. سنرد عليك في أقرب وقت عبر الواتساب أو البريد الإلكتروني.',
                    fr: 'Nous vous répondrons dans les plus brefs délais.',
                    en: 'We will respond promptly.'
                  })}
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.1rem' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '0.78rem', textTransform: isAr ? 'none' : 'uppercase', letterSpacing: isAr ? 'normal' : '0.1em', marginBottom: '0.35rem', color: 'var(--text-secondary)', fontWeight: 600 }}>
                    {t({ ar: 'الاسم الكامل *', fr: 'Nom ou prénom *', en: 'Name *' })}
                  </label>
                  <input
                    type="text"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '0.75rem 1rem',
                      borderRadius: '2px',
                      border: '1px solid var(--border-light)',
                      backgroundColor: 'var(--bg-primary)',
                      color: 'var(--text-primary)',
                      fontFamily: isAr ? 'var(--font-arabic-sans)' : 'var(--font-sans)',
                      fontSize: '0.9rem'
                    }}
                  />
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.78rem', textTransform: isAr ? 'none' : 'uppercase', letterSpacing: isAr ? 'normal' : '0.1em', marginBottom: '0.35rem', color: 'var(--text-secondary)', fontWeight: 600 }}>
                    {t({ ar: 'البريد الإلكتروني أو رقم الهاتف *', fr: 'Adresse e-mail ou téléphone *', en: 'Email or Phone *' })}
                  </label>
                  <input
                    type="text"
                    required
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '0.75rem 1rem',
                      borderRadius: '2px',
                      border: '1px solid var(--border-light)',
                      backgroundColor: 'var(--bg-primary)',
                      color: 'var(--text-primary)',
                      fontFamily: isAr ? 'var(--font-arabic-sans)' : 'var(--font-sans)',
                      fontSize: '0.9rem'
                    }}
                  />
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.78rem', textTransform: isAr ? 'none' : 'uppercase', letterSpacing: isAr ? 'normal' : '0.1em', marginBottom: '0.35rem', color: 'var(--text-secondary)', fontWeight: 600 }}>
                    {t({ ar: 'رسالتك أو استفسارك *', fr: 'Votre message *', en: 'Message *' })}
                  </label>
                  <textarea
                    required
                    rows={4}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '0.75rem 1rem',
                      borderRadius: '2px',
                      border: '1px solid var(--border-light)',
                      backgroundColor: 'var(--bg-primary)',
                      color: 'var(--text-primary)',
                      fontFamily: isAr ? 'var(--font-arabic-sans)' : 'var(--font-sans)',
                      fontSize: '0.9rem',
                      resize: 'none'
                    }}
                  />
                </div>

                <button
                  type="submit"
                  className="btn-noular-primary"
                  style={{ width: 'fit-content', padding: '0.85rem 1.8rem', fontSize: '0.76rem', marginTop: '0.5rem' }}
                >
                  <Send size={15} />
                  {t({ ar: 'إرسال الرسالة', fr: 'ENVOYER LE MESSAGE', en: 'SEND INQUIRY' })}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>

      <style>{`
        @media (min-width: 900px) {
          .contact-info-col {
            grid-column: span 5 !important;
          }
          .contact-form-col {
            grid-column: span 7 !important;
          }
        }
      `}</style>
    </div>
  );
};

