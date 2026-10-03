import React, { useState } from 'react';
import { useProduct, useAllProducts } from '../hooks/useProduct';
import { useCart } from '../context/CartContext';
import { useLanguage } from '../context/LanguageContext';
import { useTheme } from '../context/ThemeContext';
import {
  Sparkles,
  ShoppingBag,
  MessageCircle,
  Truck,
  ShieldCheck,
  Clock,
  ChevronDown,
  ChevronUp,
  Lightbulb,
  ArrowRight,
  ArrowLeft
} from 'lucide-react';
import { CARE_GUIDE, BRAND } from '../data/noularData';

export const ProductDetailPage = ({ slug, navigateTo }) => {
  const product = useProduct(slug) || useAllProducts()[0];
  const allProducts = useAllProducts();
  const { addToCart, getSingleProductWhatsAppUrl } = useCart();
  const { t, isAr, dir } = useLanguage();
  const { isDark } = useTheme();

  // Selected bundle: 'single' (1 lamp = 799 DH) or 'duo' (2 lamps = 1,499 DH)
  const [purchaseType, setPurchaseType] = useState('single');
  const [activeImageKey, setActiveImageKey] = useState('coverLight');
  const [isLightOn, setIsLightOn] = useState(false);
  const [openAccordion, setOpenAccordion] = useState('specs'); // 'specs' | 'care' | 'shipping'
  const [addedNotice, setAddedNotice] = useState(false);

  // Price calculations
  const isDuo = purchaseType === 'duo';
  const price = isDuo ? product.bundlePrice : product.price;
  const originalPrice = isDuo ? product.bundleCompareAtPrice : product.compareAtPrice;
  const savings = isDuo ? (product.bundleCompareAtPrice - product.bundlePrice) : (product.compareAtPrice - product.price);

  const handleAddToCart = () => {
    addToCart(product, isDuo ? 2 : 1, isDuo);
    setAddedNotice(true);
    setTimeout(() => setAddedNotice(false), 2000);
  };

  const currentDisplayImage = isLightOn
    ? product.images.coverDark
    : (product.images[activeImageKey] || product.images.coverLight);

  const relatedProducts = allProducts.filter((p) => p.id !== product.id);

  return (
    <div style={{ backgroundColor: 'var(--bg-primary)', padding: '2.5rem 0 6rem 0', direction: dir }}>
      <div className="container-noular">
        {/* Breadcrumb */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', fontSize: '0.78rem', color: 'var(--text-muted)', marginBottom: '2.5rem' }}>
          <a
            href="/fr/shop"
            onClick={(e) => { e.preventDefault(); navigateTo('/fr/shop'); }}
            style={{ color: 'var(--text-muted)', textDecoration: 'none' }}
          >
            {t({ ar: 'المتجر', fr: 'Boutique', en: 'Shop' })}
          </a>
          <span>/</span>
          <span style={{ color: 'var(--text-primary)', fontWeight: 600 }}>
            {isAr ? (product.nameAr || product.shortName) : product.shortName}
          </span>
        </div>

        {/* Top Product Hero Split */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(12, 1fr)',
            gap: 'clamp(2rem, 5vw, 4.5rem)',
            alignItems: 'start'
          }}
        >
          {/* Left Column: Gallery & Interactive Lighting Stage */}
          <div
            style={{
              gridColumn: 'span 12',
              position: 'relative'
            }}
            className="pdp-gallery-col"
          >
            {/* Interactive Illumination Floating Switch */}
            <div
              style={{
                position: 'absolute',
                top: '1rem',
                [isAr ? 'left' : 'right']: '1rem',
                zIndex: 10,
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                padding: '0.4rem 0.8rem',
                borderRadius: '30px',
                backgroundColor: 'rgba(23, 22, 20, 0.82)',
                backdropFilter: 'blur(10px)',
                color: '#FFFFFF'
              }}
            >
              <Lightbulb size={15} color={isLightOn ? 'var(--color-warm-amber)' : '#FFFFFF'} />
              <button
                onClick={() => setIsLightOn(!isLightOn)}
                style={{
                  background: isLightOn ? 'var(--color-warm-amber)' : 'rgba(255,255,255,0.2)',
                  color: isLightOn ? '#171614' : '#FFFFFF',
                  border: 'none',
                  borderRadius: '16px',
                  padding: '0.2rem 0.65rem',
                  fontSize: '0.72rem',
                  fontWeight: 700,
                  cursor: 'pointer',
                  transition: 'all 200ms ease'
                }}
              >
                {isLightOn
                  ? t({ ar: 'النور مشتعل (2700 K)', fr: 'Allumée (2700 K)', en: 'Light On' })
                  : t({ ar: 'ضوء النهار (طبيعي)', fr: 'Éteinte (Jour)', en: 'Light Off' })}
              </button>
            </div>

            {/* Main Stage Image */}
            <div
              style={{
                position: 'relative',
                width: '100%',
                aspectRatio: '1 / 1.12',
                borderRadius: '3px',
                overflow: 'hidden',
                backgroundColor: isDark ? '#1C1B18' : '#F2ECE4',
                boxShadow: 'var(--shadow-soft)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
              <img
                src={currentDisplayImage}
                alt={product.name}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  transition: 'opacity 400ms ease'
                }}
              />
            </div>

            {/* Thumbnail Strip */}
            <div
              style={{
                display: 'flex',
                gap: '0.8rem',
                marginTop: '1rem',
                overflowX: 'auto',
                paddingBottom: '0.5rem'
              }}
            >
              {product.gallery.map((thumb, idx) => {
                const isActive = !isLightOn && currentDisplayImage === thumb.url;
                return (
                  <button
                    key={idx}
                    onClick={() => {
                      setIsLightOn(false);
                      const matchKey = Object.keys(product.images).find((k) => product.images[k] === thumb.url);
                      if (matchKey) setActiveImageKey(matchKey);
                    }}
                    style={{
                      width: '74px',
                      height: '84px',
                      borderRadius: '2px',
                      overflow: 'hidden',
                      border: isActive ? '2px solid var(--text-primary)' : '1px solid var(--border-light)',
                      padding: 0,
                      backgroundColor: 'transparent',
                      cursor: 'pointer',
                      flexShrink: 0,
                      transition: 'border-color 200ms ease'
                    }}
                    title={thumb.title}
                  >
                    <img src={thumb.url} alt={thumb.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  </button>
                );
              })}
            </div>
          </div>

          {/* Right Column: Information, Selector, CTAs & Specs */}
          <div
            style={{
              gridColumn: 'span 12',
              display: 'flex',
              flexDirection: 'column',
              gap: '1.6rem'
            }}
            className="pdp-info-col"
          >
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                <span style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: product.accentColor }} />
                <span className="text-eyebrow">{t(product.variantLabel)}</span>
              </div>

              <h1
                style={{
                  fontFamily: isAr ? 'var(--font-arabic-serif)' : 'var(--font-serif)',
                  fontSize: isAr ? '2.4rem' : 'clamp(2rem, 3.8vw, 3rem)',
                  fontWeight: isAr ? 700 : 400,
                  color: 'var(--text-primary)',
                  marginTop: '0.4rem',
                  lineHeight: 1.15
                }}
              >
                {isAr ? (product.nameAr || product.name) : product.name}
              </h1>

              <p style={{ color: 'var(--text-secondary)', fontSize: '0.96rem', marginTop: '0.6rem', lineHeight: 1.6 }}>
                {t(product.description)}
              </p>
            </div>

            {/* Pricing Tag */}
            <div
              style={{
                display: 'flex',
                alignItems: 'baseline',
                gap: '1rem',
                paddingBottom: '1.2rem',
                borderBottom: '1px solid var(--border-light)'
              }}
            >
              <span style={{ fontSize: '2rem', fontWeight: 700, color: 'var(--text-primary)' }}>
                {price} {isAr ? 'درهم' : product.currencyDisplay}
              </span>
              <span style={{ fontSize: '1.15rem', color: 'var(--text-muted)', textDecoration: 'line-through' }}>
                {originalPrice} {isAr ? 'درهم' : product.currencyDisplay}
              </span>
              <span
                style={{
                  fontSize: '0.76rem',
                  fontWeight: 700,
                  color: 'var(--color-terracotta)',
                  backgroundColor: 'rgba(198, 93, 50, 0.1)',
                  padding: '0.2rem 0.6rem',
                  borderRadius: '2px',
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase'
                }}
              >
                {t({ ar: `وفرت ${savings} درهم`, fr: `Économisez ${savings} DH`, en: `Save ${savings} DH` })}
              </span>
            </div>

            {/* Purchase Selector: Single vs Duo Bedroom Bundle (Section 20) */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
              <span className="text-eyebrow">
                {t({ ar: 'خيارات التكوين والطلب', fr: 'CONFIGURATION', en: 'CHOOSE CONFIGURATION' })}
              </span>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.8rem' }}>
                {/* 1 Lampe */}
                <button
                  type="button"
                  onClick={() => setPurchaseType('single')}
                  style={{
                    padding: '1.1rem',
                    borderRadius: '3px',
                    border: purchaseType === 'single' ? '2px solid var(--text-primary)' : '1px solid var(--border-light)',
                    backgroundColor: purchaseType === 'single' ? 'var(--bg-secondary)' : 'var(--bg-card)',
                    textAlign: isAr ? 'right' : 'left',
                    cursor: 'pointer',
                    transition: 'all 200ms ease'
                  }}
                >
                  <div style={{ fontSize: '0.92rem', fontWeight: 700, color: 'var(--text-primary)' }}>
                    {t({ ar: 'مصباح واحد', fr: '1 lampe', en: '1 lamp' })}
                  </div>
                  <div style={{ fontSize: '0.78rem', color: 'var(--text-secondary)', marginTop: '0.2rem' }}>
                    {t({ ar: 'قطعة فنية فردية', fr: 'Une pièce unique', en: 'Single piece' })}
                  </div>
                  <div style={{ fontSize: '1.1rem', fontWeight: 700, color: 'var(--text-primary)', marginTop: '0.5rem' }}>
                    799 {isAr ? 'درهم' : 'DH'}
                  </div>
                </button>

                {/* 2 Lampes (Duo Chambre) */}
                <button
                  type="button"
                  onClick={() => setPurchaseType('duo')}
                  style={{
                    padding: '1.1rem',
                    borderRadius: '3px',
                    border: purchaseType === 'duo' ? '2px solid var(--color-terracotta)' : '1px solid var(--border-light)',
                    backgroundColor: purchaseType === 'duo' ? 'rgba(198, 93, 50, 0.08)' : 'var(--bg-card)',
                    textAlign: isAr ? 'right' : 'left',
                    cursor: 'pointer',
                    position: 'relative',
                    transition: 'all 200ms ease'
                  }}
                >
                  <div
                    style={{
                      position: 'absolute',
                      top: '-10px',
                      [isAr ? 'left' : 'right']: '10px',
                      backgroundColor: 'var(--color-terracotta)',
                      color: '#FFFFFF',
                      fontSize: '0.62rem',
                      fontWeight: 700,
                      letterSpacing: '0.08em',
                      textTransform: 'uppercase',
                      padding: '0.15rem 0.5rem',
                      borderRadius: '10px'
                    }}
                  >
                    {t({ ar: 'خصم 99 درهم', fr: 'Économisez 99 DH', en: 'Save 99 DH' })}
                  </div>

                  <div style={{ fontSize: '0.92rem', fontWeight: 700, color: 'var(--text-primary)' }}>
                    {t({ ar: 'مصباحان (عرض الغرفة)', fr: '2 lampes (chambre)', en: '2 lamps (bedroom duo)' })}
                  </div>
                  <div style={{ fontSize: '0.78rem', color: 'var(--text-secondary)', marginTop: '0.2rem' }}>
                    {t({ ar: 'لأطراف السرير أو الكونسول', fr: 'Chevets & consoles', en: 'Ideal bedside pair' })}
                  </div>
                  <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.4rem', marginTop: '0.5rem' }}>
                    <span style={{ fontSize: '1.1rem', fontWeight: 700, color: 'var(--text-primary)' }}>
                      1 499 {isAr ? 'درهم' : 'DH'}
                    </span>
                    <span style={{ fontSize: '0.78rem', textDecoration: 'line-through', color: 'var(--text-muted)' }}>
                      1 598 {isAr ? 'درهم' : 'DH'}
                    </span>
                  </div>
                </button>
              </div>
            </div>

            {/* CTAs */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem', marginTop: '0.4rem' }}>
              <button
                onClick={handleAddToCart}
                className="btn-noular-primary"
                style={{ width: '100%', padding: '1.1rem', fontSize: '0.85rem' }}
              >
                <ShoppingBag size={18} />
                {addedNotice
                  ? t({ ar: 'تمت الإضافة إلى السلة !', fr: 'AJOUTÉ AU PANIER !', en: 'ADDED TO BASKET!' })
                  : t({ ar: 'أضف إلى السلة', fr: 'AJOUTER AU PANIER', en: 'ADD TO BASKET' })}
              </button>

              <a
                href={getSingleProductWhatsAppUrl(product, isDuo ? 2 : 1, isDuo)}
                target="_blank"
                rel="noreferrer"
                className="btn-whatsapp"
                style={{ width: '100%', padding: '0.95rem' }}
              >
                <MessageCircle size={18} />
                {t({ ar: 'اطلب مباشرة عبر واتساب', fr: 'COMMANDER SUR WHATSAPP', en: 'ORDER VIA WHATSAPP' })}
              </a>
            </div>

            {/* Key Micro Guarantees */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem', padding: '1rem', backgroundColor: 'var(--bg-secondary)', borderRadius: '3px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.82rem', color: 'var(--text-primary)' }}>
                <Clock size={16} color="var(--color-terracotta)" />
                <span>{t({ ar: '18 ساعة عمل في الورشة لكل مصباح (تشكيل، فحص وتشطيب يدوي)', fr: '18 h d’atelier par lampe (façonnage, contrôle, finitions)', en: '18 hours of atelier care per lamp' })}</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.82rem', color: 'var(--text-primary)' }}>
                <Truck size={16} color="var(--color-terracotta)" />
                <span>{t({ ar: 'توصيل مجاني لجميع مدن المغرب (خلال 3 إلى 5 أيام عمل)', fr: 'Livraison offerte partout au Maroc dès 700 DH (3 à 5 jours ouvrés)', en: 'Free delivery across Morocco (3 to 5 business days)' })}</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.82rem', color: 'var(--text-primary)' }}>
                <ShieldCheck size={16} color="var(--color-terracotta)" />
                <span>{t({ ar: 'ضمان سنتين · لمبة LED بقوة 4 واط دافئة 2700 كلفن مرفقة مجاناً', fr: 'Garantie atelier 24 mois · Ampoule LED 4 W 2700 K incluse', en: '24-month warranty · LED 4 W 2700 K bulb included' })}</span>
              </div>
            </div>

            {/* Accordions: Specifications, Care, Shipping */}
            <div style={{ borderTop: '1px solid var(--border-light)', marginTop: '0.5rem' }}>
              {/* Specs Accordion */}
              <div style={{ borderBottom: '1px solid var(--border-subtle)' }}>
                <button
                  onClick={() => setOpenAccordion(openAccordion === 'specs' ? null : 'specs')}
                  style={{
                    width: '100%',
                    padding: '1.1rem 0',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    background: 'none',
                    border: 'none',
                    fontSize: '0.9rem',
                    fontWeight: 700,
                    letterSpacing: isAr ? 'normal' : '0.08em',
                    textTransform: isAr ? 'none' : 'uppercase',
                    color: 'var(--text-primary)',
                    cursor: 'pointer'
                  }}
                >
                  <span>{t({ ar: 'المواصفات الفنية التفصيلية', fr: 'Spécifications complètes', en: 'Full Specifications' })}</span>
                  {openAccordion === 'specs' ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                </button>

                {openAccordion === 'specs' && (
                  <div style={{ paddingBottom: '1.2rem', display: 'flex', flexDirection: 'column', gap: '0.6rem', fontSize: '0.86rem' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                      <span style={{ color: 'var(--text-muted)' }}>{t({ ar: 'النوع', fr: 'Type', en: 'Type' })}</span>
                      <span style={{ fontWeight: 600 }}>{t(product.specifications.type)}</span>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                      <span style={{ color: 'var(--text-muted)' }}>{t({ ar: 'المادة', fr: 'Matière', en: 'Material' })}</span>
                      <span style={{ fontWeight: 600 }}>{t(product.specifications.material)}</span>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                      <span style={{ color: 'var(--text-muted)' }}>{t({ ar: 'التشطيب واللون', fr: 'Finition', en: 'Finish' })}</span>
                      <span style={{ fontWeight: 600 }}>{t(product.specifications.finish)}</span>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                      <span style={{ color: 'var(--text-muted)' }}>{t({ ar: 'الأبعاد', fr: 'Dimensions', en: 'Dimensions' })}</span>
                      <span style={{ fontWeight: 600 }}>{product.specifications.dimensions}</span>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                      <span style={{ color: 'var(--text-muted)' }}>{t({ ar: 'نوع المقبس', fr: 'Douille / Culot', en: 'Socket' })}</span>
                      <span style={{ fontWeight: 600 }}>{product.specifications.socket}</span>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                      <span style={{ color: 'var(--text-muted)' }}>{t({ ar: 'اللمبة', fr: 'Ampoule', en: 'Bulb' })}</span>
                      <span style={{ fontWeight: 600 }}>{t(product.specifications.bulb)}</span>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                      <span style={{ color: 'var(--text-muted)' }}>{t({ ar: 'حرارة الضوء', fr: 'Température de couleur', en: 'Color Temperature' })}</span>
                      <span style={{ fontWeight: 600 }}>{product.specifications.colorTemperature}</span>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                      <span style={{ color: 'var(--text-muted)' }}>{t({ ar: 'السلك', fr: 'Câble', en: 'Cable' })}</span>
                      <span style={{ fontWeight: 600 }}>{t(product.specifications.cable)}</span>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                      <span style={{ color: 'var(--text-muted)' }}>{t({ ar: 'المفتاح', fr: 'Interrupteur', en: 'Switch' })}</span>
                      <span style={{ fontWeight: 600 }}>{t(product.specifications.switch)}</span>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                      <span style={{ color: 'var(--text-muted)' }}>{t({ ar: 'مدة الضمان', fr: 'Garantie', en: 'Warranty' })}</span>
                      <span style={{ fontWeight: 600 }}>{product.specifications.warranty}</span>
                    </div>
                  </div>
                )}
              </div>

              {/* Care Accordion (Section 38) */}
              <div style={{ borderBottom: '1px solid var(--border-subtle)' }}>
                <button
                  onClick={() => setOpenAccordion(openAccordion === 'care' ? null : 'care')}
                  style={{
                    width: '100%',
                    padding: '1.1rem 0',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    background: 'none',
                    border: 'none',
                    fontSize: '0.9rem',
                    fontWeight: 700,
                    letterSpacing: isAr ? 'normal' : '0.08em',
                    textTransform: isAr ? 'none' : 'uppercase',
                    color: 'var(--text-primary)',
                    cursor: 'pointer'
                  }}
                >
                  <span>{t({ ar: 'إرشادات العناية والتنظيف', fr: 'Conseils d’entretien', en: 'Care Guide' })}</span>
                  {openAccordion === 'care' ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                </button>

                {openAccordion === 'care' && (
                  <ul style={{ padding: isAr ? '0 1.2rem 1.2rem 0' : '0 0 1.2rem 1.2rem', display: 'flex', flexDirection: 'column', gap: '0.6rem', fontSize: '0.86rem', color: 'var(--text-secondary)' }}>
                    {CARE_GUIDE.map((c, i) => (
                      <li key={i}>{t(c.rule)}</li>
                    ))}
                  </ul>
                )}
              </div>

              {/* Shipping & Delivery Accordion */}
              <div style={{ borderBottom: '1px solid var(--border-subtle)' }}>
                <button
                  onClick={() => setOpenAccordion(openAccordion === 'shipping' ? null : 'shipping')}
                  style={{
                    width: '100%',
                    padding: '1.1rem 0',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    background: 'none',
                    border: 'none',
                    fontSize: '0.9rem',
                    fontWeight: 700,
                    letterSpacing: isAr ? 'normal' : '0.08em',
                    textTransform: isAr ? 'none' : 'uppercase',
                    color: 'var(--text-primary)',
                    cursor: 'pointer'
                  }}
                >
                  <span>{t({ ar: 'التصنيع والتوصيل بالمغرب', fr: 'Fabrication & Livraison', en: 'Production & Shipping' })}</span>
                  {openAccordion === 'shipping' ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                </button>

                {openAccordion === 'shipping' && (
                  <div style={{ paddingBottom: '1.2rem', fontSize: '0.86rem', color: 'var(--text-secondary)', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                    <p>{t({ ar: 'كل مصباح يُصنع على الطلب في ورشتنا بالمغرب.', fr: 'Chaque luminaire est fabriqué sur commande dans notre atelier au Maroc.', en: 'Every lamp is produced to order in our Moroccan workshop.' })}</p>
                    <p>• {t({ ar: 'الشحن والتسليم خلال 3 إلى 5 أيام عمل.', fr: 'Expédition sous 3 à 5 jours ouvrés.', en: 'Dispatched in 3 to 5 business days.' })}</p>
                    <p>• {t({ ar: 'رابط تتبع مباشر يرسل عبر البريد الإلكتروني أو الواتساب.', fr: 'Un e-mail de suivi est envoyé dès le départ du colis.', en: 'Live tracking link emailed upon departure.' })}</p>
                    <p>• {t({ ar: 'توصيل مجاني في جميع المدن المغربية ابتداءً من 700 درهم.', fr: 'Livraison offerte dans toutes les villes du Maroc dès 700 DH.', en: 'Free delivery across all Moroccan cities from 700 DH.' })}</p>
                    <p>• {t({ ar: 'الدفع نقداً عند استلام الشحنة وتفقدها.', fr: 'Paiement à la livraison (Cash on Delivery).', en: 'Cash on delivery accepted.' })}</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Related Warda Variants */}
        <div style={{ marginTop: '7rem', paddingTop: '4rem', borderTop: '1px solid var(--border-light)' }}>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <span className="text-eyebrow">
              {t({ ar: 'تشكيلات وردة الأخرى', fr: 'AUTRES DÉCLINAISONS', en: 'OTHER EXPRESSIONS' })}
            </span>
            <h3
              style={{
                fontFamily: isAr ? 'var(--font-arabic-serif)' : 'var(--font-serif)',
                fontSize: isAr ? '2.4rem' : '2.2rem',
                fontWeight: isAr ? 700 : 400,
                color: 'var(--text-primary)',
                marginTop: '0.4rem'
              }}
            >
              {t({ ar: 'اكتشف ألوان وتجليات وردة', fr: 'Complétez votre intérieur', en: 'Explore the Warda Family' })}
            </h3>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
              gap: '2rem'
            }}
          >
            {relatedProducts.map((p) => (
              <div
                key={p.id}
                onClick={() => {
                  navigateTo(`/fr/product/${p.slug}`);
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                style={{
                  backgroundColor: 'var(--bg-card)',
                  borderRadius: '3px',
                  border: '1px solid var(--border-light)',
                  padding: '1rem',
                  cursor: 'pointer'
                }}
              >
                <div style={{ width: '100%', aspectRatio: '1 / 1.1', overflow: 'hidden', borderRadius: '2px', backgroundColor: 'var(--bg-secondary)' }}>
                  <img src={p.images.coverLight} alt={p.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
                <div style={{ marginTop: '0.8rem' }}>
                  <div style={{ fontSize: '0.74rem', textTransform: 'uppercase', color: 'var(--text-muted)' }}>{t(p.variantLabel)}</div>
                  <div style={{ fontFamily: isAr ? 'var(--font-arabic-serif)' : 'var(--font-serif)', fontSize: '1.25rem', fontWeight: 600, color: 'var(--text-primary)' }}>
                    {isAr ? (p.nameAr || p.name) : p.name}
                  </div>
                  <div style={{ fontSize: '0.95rem', fontWeight: 700, color: 'var(--text-primary)', marginTop: '0.2rem' }}>
                    799 {isAr ? 'درهم' : 'DH'}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Sticky Mobile Purchase Bar (Section 56 & Mobile Optimization) */}
      <div
        className="mobile-sticky-buy-bar"
        style={{
          position: 'fixed',
          bottom: 0,
          left: 0,
          right: 0,
          zIndex: 90,
          backgroundColor: 'var(--bg-glass)',
          backdropFilter: 'blur(16px)',
          WebkitBackdropFilter: 'blur(16px)',
          borderTop: '1px solid var(--border-light)',
          padding: '0.85rem 1.2rem calc(0.85rem + env(safe-area-inset-bottom, 0px)) 1.2rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '1rem',
          boxShadow: '0 -6px 20px rgba(0, 0, 0, 0.15)',
          direction: dir
        }}
      >
        <div>
          <div style={{ fontSize: '0.74rem', textTransform: 'uppercase', color: 'var(--text-muted)' }}>
            {isAr ? (product.nameAr || product.shortName) : product.shortName}
          </div>
          <div style={{ fontSize: '1.15rem', fontWeight: 700, color: 'var(--text-primary)' }}>
            {price} {isAr ? 'درهم' : 'DH'}
          </div>
        </div>

        <button
          onClick={handleAddToCart}
          className="btn-noular-primary"
          style={{ padding: '0.8rem 1.4rem', fontSize: '0.76rem', flex: 1, maxWidth: '240px' }}
        >
          <ShoppingBag size={16} />
          {addedNotice
            ? t({ ar: 'تمت الإضافة !', fr: 'AJOUTÉ !', en: 'ADDED!' })
            : t({ ar: 'أضف للسلة', fr: 'AJOUTER', en: 'ADD TO BASKET' })}
        </button>
      </div>

      <style>{`
        @media (min-width: 960px) {
          .pdp-gallery-col {
            grid-column: span 6 !important;
          }
          .pdp-info-col {
            grid-column: span 6 !important;
          }
          .mobile-sticky-buy-bar {
            display: none !important;
          }
        }
      `}</style>
    </div>
  );
};
