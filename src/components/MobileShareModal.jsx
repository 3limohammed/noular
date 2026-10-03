import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { X, Smartphone, QrCode, Copy, Check, ExternalLink, Globe, Wifi } from 'lucide-react';

export const MobileShareModal = ({ isOpen, onClose }) => {
  const { t, isAr, dir } = useLanguage();
  const [copiedKey, setCopiedKey] = useState(null);

  if (!isOpen) return null;

  const publicUrl = 'https://noular-maroc.loca.lt';
  const publicIp = '169.224.83.77';
  const lanUrl = 'http://192.168.0.102:5173/';
  const localUrl = 'http://localhost:5173/';

  const handleCopy = (text, key) => {
    navigator.clipboard.writeText(text);
    setCopiedKey(key);
    setTimeout(() => setCopiedKey(null), 2200);
  };

  // Pre-rendered clean QR Code pointing to publicUrl via public QR API
  const qrCodeApiUrl = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&color=17-16-14&bgcolor=248-246-241&data=${encodeURIComponent(publicUrl)}`;

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 300,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '1.2rem',
        direction: dir
      }}
    >
      {/* Backdrop */}
      <div
        onClick={onClose}
        style={{
          position: 'absolute',
          inset: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.72)',
          backdropFilter: 'blur(8px)',
          WebkitBackdropFilter: 'blur(8px)',
          transition: 'opacity 300ms ease'
        }}
      />

      {/* Modal Dialog */}
      <div
        style={{
          position: 'relative',
          width: '100%',
          maxWidth: '540px',
          maxHeight: '92vh',
          overflowY: 'auto',
          backgroundColor: 'var(--bg-primary)',
          border: '1px solid var(--border-light)',
          borderRadius: '6px',
          padding: '2.2rem 2rem',
          boxShadow: '0 25px 60px -15px rgba(0, 0, 0, 0.45)',
          zIndex: 310,
          animation: 'fadeInScale 250ms ease-out'
        }}
      >
        {/* Header */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.5rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
            <span
              style={{
                width: '32px',
                height: '32px',
                borderRadius: '50%',
                backgroundColor: 'rgba(198, 93, 50, 0.12)',
                color: 'var(--color-terracotta)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
              <Smartphone size={18} />
            </span>
            <div>
              <span className="text-eyebrow">
                {t({ ar: 'معاينة تجربة الهاتف', fr: 'APERÇU MOBILE NOULAR', en: 'MOBILE PREVIEW' })}
              </span>
              <h3
                style={{
                  fontFamily: isAr ? 'var(--font-arabic-serif)' : 'var(--font-serif)',
                  fontSize: isAr ? '1.6rem' : '1.45rem',
                  fontWeight: isAr ? 700 : 500,
                  color: 'var(--text-primary)',
                  marginTop: '0.1rem'
                }}
              >
                {t({
                  ar: 'رابط ومشاركة المشروع للمعاينة',
                  fr: 'Partager le lien de prévisualisation',
                  en: 'Share Preview Link with Others'
                })}
              </h3>
            </div>
          </div>

          <button
            onClick={onClose}
            style={{
              background: 'none',
              border: 'none',
              color: 'var(--text-muted)',
              cursor: 'pointer',
              padding: '0.4rem',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
            aria-label="Fermer"
          >
            <X size={20} />
          </button>
        </div>

        {/* QR Code Presentation */}
        <div
          style={{
            backgroundColor: 'var(--bg-card)',
            border: '1px solid var(--border-light)',
            borderRadius: '4px',
            padding: '1.6rem',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            textAlign: 'center',
            gap: '1rem',
            marginBottom: '1.6rem',
            boxShadow: 'var(--shadow-soft)'
          }}
        >
          <div
            style={{
              padding: '0.8rem',
              backgroundColor: '#F8F6F1',
              borderRadius: '4px',
              border: '1px solid rgba(0,0,0,0.08)'
            }}
          >
            <img
              src={qrCodeApiUrl}
              alt="QR Code معاينة نولار على الهاتف"
              style={{ width: '160px', height: '160px', display: 'block', borderRadius: '2px' }}
            />
          </div>

          <div>
            <div style={{ fontWeight: 700, fontSize: '0.92rem', color: 'var(--text-primary)' }}>
              {t({
                ar: 'امسح الرمز بكاميرا هاتفك للمعاينة الفورية',
                fr: 'Scannez avec votre appareil photo mobile',
                en: 'Scan with your mobile camera to preview'
              })}
            </div>
            <p style={{ fontSize: '0.82rem', color: 'var(--text-secondary)', marginTop: '0.2rem' }}>
              {t({
                ar: 'يفتح التصميم المخصص للهواتف الذكية مع شريط الملاحة وإيماءات السحب باللمس.',
                fr: 'Ouvre l’interface mobile avec barre ergonomique et gestes tactiles.',
                en: 'Opens the mobile-tailored design with thumb bar and gestures.'
              })}
            </p>
          </div>
        </div>

        {/* Links List */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          {/* 1. Public Tunnel Link (Internet users anywhere) */}
          <div
            style={{
              backgroundColor: 'var(--bg-secondary)',
              border: '1px solid var(--border-light)',
              borderRadius: '4px',
              padding: '1rem 1.2rem',
              display: 'flex',
              flexDirection: 'column',
              gap: '0.5rem'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--color-terracotta)', fontSize: '0.78rem', fontWeight: 700 }}>
                <Globe size={15} />
                <span>{t({ ar: 'رابط الإنترنت العام (لأي مستخدم في العالم)', fr: 'Lien Public Internet (partout dans le monde)', en: 'Public Internet Link' })}</span>
              </div>
              <span style={{ fontSize: '0.7rem', color: 'var(--text-muted)' }}>HTTPS</span>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
              <input
                type="text"
                readOnly
                value={publicUrl}
                style={{
                  flex: 1,
                  padding: '0.55rem 0.8rem',
                  borderRadius: '2px',
                  border: '1px solid var(--border-light)',
                  backgroundColor: 'var(--bg-card)',
                  color: 'var(--text-primary)',
                  fontFamily: 'monospace',
                  fontSize: '0.84rem'
                }}
              />
              <button
                onClick={() => handleCopy(publicUrl, 'public')}
                className="btn-noular-primary"
                style={{ padding: '0.55rem 1rem', fontSize: '0.74rem' }}
              >
                {copiedKey === 'public' ? <Check size={14} /> : <Copy size={14} />}
                <span>{copiedKey === 'public' ? t({ ar: 'تم النسخ', fr: 'Copié', en: 'Copied' }) : t({ ar: 'نسخ', fr: 'Copier', en: 'Copy' })}</span>
              </button>
            </div>

            <div style={{ fontSize: '0.76rem', color: 'var(--text-muted)', lineHeight: 1.4 }}>
              {t({
                ar: `إذا طُلبت كلمة مرور الأمان من loca.lt، أدخل: ${publicIp}`,
                fr: `Si un mot de passe tunnel est requis par loca.lt, saisissez : ${publicIp}`,
                en: `If tunnel password is requested by loca.lt, enter: ${publicIp}`
              })}
            </div>
          </div>

          {/* 2. Same Wi-Fi LAN link */}
          <div
            style={{
              backgroundColor: 'var(--bg-secondary)',
              border: '1px solid var(--border-light)',
              borderRadius: '4px',
              padding: '1rem 1.2rem',
              display: 'flex',
              flexDirection: 'column',
              gap: '0.5rem'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-secondary)', fontSize: '0.78rem', fontWeight: 700 }}>
                <Wifi size={15} />
                <span>{t({ ar: 'رابط شبكة الواي فاي المحلية (للهواتف المتصلة بنفس الشبكة)', fr: 'Réseau Wi-Fi Local (appareils sur le même Wi-Fi)', en: 'Local Wi-Fi Network Link' })}</span>
              </div>
              <span style={{ fontSize: '0.7rem', color: 'var(--text-muted)' }}>LAN</span>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
              <input
                type="text"
                readOnly
                value={lanUrl}
                style={{
                  flex: 1,
                  padding: '0.55rem 0.8rem',
                  borderRadius: '2px',
                  border: '1px solid var(--border-light)',
                  backgroundColor: 'var(--bg-card)',
                  color: 'var(--text-primary)',
                  fontFamily: 'monospace',
                  fontSize: '0.84rem'
                }}
              />
              <button
                onClick={() => handleCopy(lanUrl, 'lan')}
                className="btn-noular-secondary"
                style={{ padding: '0.55rem 1rem', fontSize: '0.74rem' }}
              >
                {copiedKey === 'lan' ? <Check size={14} /> : <Copy size={14} />}
                <span>{copiedKey === 'lan' ? t({ ar: 'تم النسخ', fr: 'Copié', en: 'Copied' }) : t({ ar: 'نسخ', fr: 'Copier', en: 'Copy' })}</span>
              </button>
            </div>
          </div>
        </div>

        {/* Footer info */}
        <div style={{ marginTop: '1.5rem', textAlign: 'center', fontSize: '0.78rem', color: 'var(--text-muted)' }}>
          {t({
            ar: 'تم تحسين تجربة الهواتف الذكية مع مراعاة أبعاد الشاشات وإيماءات اللمس السريعة.',
            fr: 'Optimisé pour smartphones iOS et Android avec ergonomie tactile native.',
            en: 'Optimized for iOS & Android smartphones with native touch ergonomics.'
          })}
        </div>
      </div>
    </div>
  );
};
