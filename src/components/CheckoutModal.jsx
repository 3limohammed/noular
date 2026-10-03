import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import { useLanguage } from '../context/LanguageContext';
import { X, CheckCircle, Truck, MessageCircle, ShieldCheck } from 'lucide-react';

export const CheckoutModal = () => {
  const {
    currentTotal,
    totalUnits,
    isCheckoutOpen,
    setIsCheckoutOpen,
    clearCart,
    getWhatsAppOrderUrl
  } = useCart();
  const { t, isAr, dir } = useLanguage();

  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    city: '',
    address: '',
    notes: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [orderId, setOrderId] = useState('');

  if (!isCheckoutOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.fullName || !formData.phone || !formData.city || !formData.address) {
      alert(t({
        ar: 'يرجى ملء جميع الحقول المطلوبة.',
        fr: 'Veuillez remplir tous les champs obligatoires.',
        en: 'Please complete all required fields.'
      }));
      return;
    }

    const generatedId = 'NLR-' + Math.floor(100000 + Math.random() * 900000);
    setOrderId(generatedId);
    setSubmitted(true);
  };

  const handleFinish = () => {
    clearCart();
    setSubmitted(false);
    setIsCheckoutOpen(false);
  };

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 300,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '1rem',
        backgroundColor: 'rgba(0, 0, 0, 0.7)',
        backdropFilter: 'blur(8px)',
        direction: dir
      }}
    >
      <div
        style={{
          width: '100%',
          maxWidth: '560px',
          maxHeight: '90vh',
          overflowY: 'auto',
          backgroundColor: 'var(--bg-primary)',
          borderRadius: '4px',
          border: '1px solid var(--border-light)',
          padding: 'clamp(1.5rem, 4vw, 2.4rem)',
          boxShadow: '0 25px 60px rgba(0, 0, 0, 0.4)',
          position: 'relative'
        }}
      >
        {/* Close Button */}
        <button
          onClick={() => setIsCheckoutOpen(false)}
          style={{
            position: 'absolute',
            top: '1.2rem',
            [isAr ? 'left' : 'right']: '1.2rem',
            background: 'none',
            border: 'none',
            color: 'var(--text-primary)',
            cursor: 'pointer'
          }}
          aria-label="Fermer"
        >
          <X size={22} />
        </button>

        {submitted ? (
          /* Confirmation View */
          <div style={{ textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1.2rem', padding: '1rem 0' }}>
            <div
              style={{
                width: '60px',
                height: '60px',
                borderRadius: '50%',
                backgroundColor: 'rgba(37, 211, 102, 0.15)',
                color: '#25D366',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
              <CheckCircle size={32} />
            </div>

            <span className="text-eyebrow" style={{ color: '#25D366' }}>
              {t({ ar: 'تم تسجيل طلبك بنجاح', fr: 'COMMANDE ENREGISTRÉE', en: 'ORDER CONFIRMED' })}
            </span>

            <h3
              style={{
                fontFamily: isAr ? 'var(--font-arabic-serif)' : 'var(--font-serif)',
                fontSize: isAr ? '2.2rem' : '2rem',
                fontWeight: isAr ? 700 : 500,
                color: 'var(--text-primary)'
              }}
            >
              {t({ ar: 'شكراً لثقتكم بنولار.', fr: 'Merci pour votre confiance.', en: 'Thank you for your order.' })}
            </h3>

            <p style={{ color: 'var(--text-secondary)', fontSize: '0.92rem', lineHeight: 1.6, maxWidth: '440px' }}>
              {t({
                ar: `طلبكم رقم ${orderId} قيد الإعداد في ورشتنا المغربية. يتم تصنيع القطعة خصيصاً لأجلكم وتوصيلها خلال 3 إلى 5 أيام عمل، والدفع نقداً عند الاستلام.`,
                fr: `Votre commande N° ${orderId} a bien été reçue. Notre atelier marocain prépare votre luminaire sur commande. Livraison sous 3 à 5 jours ouvrés avec paiement à la réception.`,
                en: `Your order #${orderId} has been registered. Our Moroccan workshop is preparing your lamp to order. Delivery in 3–5 working days with payment on delivery.`
              })}
            </p>

            <div
              style={{
                width: '100%',
                padding: '1.2rem',
                backgroundColor: 'var(--bg-secondary)',
                borderRadius: '3px',
                textAlign: isAr ? 'right' : 'left',
                fontSize: '0.85rem',
                lineHeight: 1.7
              }}
            >
              <div><strong>{t({ ar: 'العميل :', fr: 'Client :', en: 'Customer:' })}</strong> {formData.fullName} ({formData.phone})</div>
              <div><strong>{t({ ar: 'وجهة التوصيل :', fr: 'Destination :', en: 'Destination:' })}</strong> {formData.address}، {formData.city}</div>
              <div><strong>{t({ ar: 'المبلغ عند الاستلام :', fr: 'Total à régler :', en: 'Total on delivery:' })}</strong> {currentTotal} {isAr ? 'درهم' : 'DH'} ({t({ ar: 'توصيل مجاني', fr: 'Livraison offerte', en: 'Free Shipping' })})</div>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem', width: '100%', marginTop: '0.5rem' }}>
              <a
                href={getWhatsAppOrderUrl(`تأكيد الطلب ${orderId} للعميل ${formData.fullName}`)}
                target="_blank"
                rel="noreferrer"
                className="btn-whatsapp"
                style={{ width: '100%', padding: '0.85rem' }}
              >
                <MessageCircle size={18} />
                {t({ ar: 'تأكيد إضافي عبر واتساب', fr: 'CONFIRMER ÉGALEMENT SUR WHATSAPP', en: 'CONFIRM ALSO ON WHATSAPP' })}
              </a>

              <button
                onClick={handleFinish}
                className="btn-noular-secondary"
                style={{ width: '100%', padding: '0.85rem' }}
              >
                {t({ ar: 'العودة للمتجر', fr: 'RETOURNER À LA BOUTIQUE', en: 'RETURN TO SHOP' })}
              </button>
            </div>
          </div>
        ) : (
          /* Form View */
          <div>
            <span className="text-eyebrow">
              {t({ ar: 'تأكيد الطلب السريع', fr: 'FINALISATION DE COMMANDE', en: 'CHECKOUT' })}
            </span>
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
              {t({ ar: 'بيانات التوصيل في المغرب', fr: 'Informations de livraison', en: 'Delivery Details' })}
            </h3>

            {/* Summary preview */}
            <div
              style={{
                padding: '0.9rem 1.2rem',
                backgroundColor: 'var(--bg-secondary)',
                borderRadius: '3px',
                marginBottom: '1.5rem',
                fontSize: '0.85rem',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center'
              }}
            >
              <span>{totalUnits} {t({ ar: 'مصباح وردة', fr: 'lampe(s) Warda', en: 'Warda lamp(s)' })}</span>
              <span style={{ fontWeight: 700, fontSize: '0.95rem' }}>{currentTotal} {isAr ? 'درهم' : 'DH'} ({t({ ar: 'توصيل مجاني', fr: 'Livraison offerte', en: 'Free' })})</span>
            </div>

            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.1rem' }}>
              <div>
                <label style={{ display: 'block', fontSize: '0.76rem', fontWeight: 600, marginBottom: '0.35rem', color: 'var(--text-secondary)' }}>
                  {t({ ar: 'الاسم الكامل *', fr: 'Nom complet *', en: 'Full Name *' })}
                </label>
                <input
                  type="text"
                  required
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  placeholder={t({ ar: 'مثال: كريم البناني', fr: 'Ex : Karim Bennani', en: 'e.g. Karim Bennani' })}
                  style={{
                    width: '100%',
                    padding: '0.75rem 1rem',
                    borderRadius: '2px',
                    border: '1px solid var(--border-light)',
                    backgroundColor: 'var(--bg-card)',
                    color: 'var(--text-primary)',
                    fontFamily: isAr ? 'var(--font-arabic-sans)' : 'var(--font-sans)',
                    fontSize: '0.9rem'
                  }}
                />
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '0.76rem', fontWeight: 600, marginBottom: '0.35rem', color: 'var(--text-secondary)' }}>
                  {t({ ar: 'رقم الهاتف (واتساب) للتنسيق *', fr: 'Numéro de téléphone (WhatsApp) *', en: 'Phone Number (WhatsApp) *' })}
                </label>
                <input
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  placeholder="06 XX XX XX XX / +212 ..."
                  style={{
                    width: '100%',
                    padding: '0.75rem 1rem',
                    borderRadius: '2px',
                    border: '1px solid var(--border-light)',
                    backgroundColor: 'var(--bg-card)',
                    color: 'var(--text-primary)',
                    fontFamily: 'monospace',
                    fontSize: '0.9rem'
                  }}
                />
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '0.76rem', fontWeight: 600, marginBottom: '0.35rem', color: 'var(--text-secondary)' }}>
                    {t({ ar: 'المدينة بالمغرب *', fr: 'Ville au Maroc *', en: 'City in Morocco *' })}
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.city}
                    onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                    placeholder={t({ ar: 'الدار البيضاء، الرباط، مراكش، طنجة...', fr: 'Casablanca, Rabat, Marrakech...', en: 'Casablanca, Rabat...' })}
                    style={{
                      width: '100%',
                      padding: '0.75rem 1rem',
                      borderRadius: '2px',
                      border: '1px solid var(--border-light)',
                      backgroundColor: 'var(--bg-card)',
                      color: 'var(--text-primary)',
                      fontFamily: isAr ? 'var(--font-arabic-sans)' : 'var(--font-sans)',
                      fontSize: '0.9rem'
                    }}
                  />
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.76rem', fontWeight: 600, marginBottom: '0.35rem', color: 'var(--text-secondary)' }}>
                    {t({ ar: 'طريقة الدفع', fr: 'Mode de règlement', en: 'Payment' })}
                  </label>
                  <div
                    style={{
                      padding: '0.75rem 1rem',
                      borderRadius: '2px',
                      border: '1px solid var(--border-light)',
                      backgroundColor: 'var(--bg-secondary)',
                      fontSize: '0.82rem',
                      fontWeight: 700,
                      color: 'var(--text-primary)'
                    }}
                  >
                    {t({ ar: 'نقداً عند الاستلام', fr: 'À la livraison (Cash)', en: 'Cash on Delivery' })}
                  </div>
                </div>
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '0.76rem', fontWeight: 600, marginBottom: '0.35rem', color: 'var(--text-secondary)' }}>
                  {t({ ar: 'العنوان التفصيلي للتوصيل *', fr: 'Adresse de livraison détaillée *', en: 'Street Address *' })}
                </label>
                <textarea
                  required
                  rows={2}
                  value={formData.address}
                  onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                  placeholder={t({ ar: 'الحي، الشارع، رقم العمارة أو الإقامة...', fr: 'Quartier, rue, immeuble, étage...', en: 'Neighborhood, street, building...' })}
                  style={{
                    width: '100%',
                    padding: '0.75rem 1rem',
                    borderRadius: '2px',
                    border: '1px solid var(--border-light)',
                    backgroundColor: 'var(--bg-card)',
                    color: 'var(--text-primary)',
                    fontFamily: isAr ? 'var(--font-arabic-sans)' : 'var(--font-sans)',
                    fontSize: '0.9rem',
                    resize: 'none'
                  }}
                />
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '0.76rem', fontWeight: 600, marginBottom: '0.35rem', color: 'var(--text-secondary)' }}>
                  {t({ ar: 'ملاحظة خاصة (اختياري)', fr: 'Note facultative', en: 'Special Notes (Optional)' })}
                </label>
                <input
                  type="text"
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  placeholder={t({ ar: 'وقت مفضل للتسليم، توجيهات...', fr: 'Précisions de livraison...', en: 'Delivery instructions...' })}
                  style={{
                    width: '100%',
                    padding: '0.75rem 1rem',
                    borderRadius: '2px',
                    border: '1px solid var(--border-light)',
                    backgroundColor: 'var(--bg-card)',
                    color: 'var(--text-primary)',
                    fontFamily: isAr ? 'var(--font-arabic-sans)' : 'var(--font-sans)',
                    fontSize: '0.9rem'
                  }}
                />
              </div>

              <div style={{ marginTop: '0.6rem' }}>
                <button
                  type="submit"
                  className="btn-noular-primary"
                  style={{ width: '100%', padding: '1rem', fontSize: '0.8rem' }}
                >
                  {t({
                    ar: `تأكيد الطلب الآن (${currentTotal} درهم)`,
                    fr: `CONFIRMER LA COMMANDE (${currentTotal} DH)`,
                    en: `CONFIRM ORDER (${currentTotal} DH)`
                  })}
                </button>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1.2rem', marginTop: '0.5rem', color: 'var(--text-muted)', fontSize: '0.74rem' }}>
                <span style={{ display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
                  <ShieldCheck size={14} color="var(--color-terracotta)" />
                  {t({ ar: 'ضمان 24 شهراً', fr: 'Garantie 24 mois', en: '24-Month Warranty' })}
                </span>
                <span style={{ display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
                  <Truck size={14} color="var(--color-terracotta)" />
                  {t({ ar: 'توصيل مجاني', fr: 'Livraison offerte', en: 'Free Delivery' })}
                </span>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};
