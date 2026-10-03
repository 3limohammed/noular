import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { BRAND } from '../data/noularData';

export const LegalPage = ({ initialTab = 'privacy' }) => {
  const { t, isAr, dir } = useLanguage();
  const [tab, setTab] = useState(initialTab);

  return (
    <div style={{ backgroundColor: 'var(--bg-primary)', padding: '3.5rem 0 7rem 0', direction: dir }}>
      <div className="container-narrow">
        {/* Tab Switcher */}
        <div style={{ display: 'flex', gap: '1.5rem', borderBottom: '1px solid var(--border-light)', paddingBottom: '1rem', marginBottom: '3rem' }}>
          <button
            onClick={() => setTab('privacy')}
            style={{
              background: 'none',
              border: 'none',
              fontFamily: isAr ? 'var(--font-arabic-serif)' : 'var(--font-serif)',
              fontSize: isAr ? '1.5rem' : '1.4rem',
              color: tab === 'privacy' ? 'var(--text-primary)' : 'var(--text-muted)',
              cursor: 'pointer',
              borderBottom: tab === 'privacy' ? '2px solid var(--color-terracotta)' : 'none',
              paddingBottom: '0.4rem',
              fontWeight: tab === 'privacy' ? 700 : 400
            }}
          >
            {t({ ar: 'سياسة الخصوصية', fr: 'Politique de confidentialité', en: 'Privacy Policy' })}
          </button>

          <button
            onClick={() => setTab('terms')}
            style={{
              background: 'none',
              border: 'none',
              fontFamily: isAr ? 'var(--font-arabic-serif)' : 'var(--font-serif)',
              fontSize: isAr ? '1.5rem' : '1.4rem',
              color: tab === 'terms' ? 'var(--text-primary)' : 'var(--text-muted)',
              cursor: 'pointer',
              borderBottom: tab === 'terms' ? '2px solid var(--color-terracotta)' : 'none',
              paddingBottom: '0.4rem',
              fontWeight: tab === 'terms' ? 700 : 400
            }}
          >
            {t({ ar: 'شروط البيع والاستخدام', fr: 'Conditions de vente & d’utilisation', en: 'Terms of Sale & Use' })}
          </button>
        </div>

        {tab === 'privacy' ? (
          /* Privacy Policy Content (Real NOULAR Terms) */
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.8rem', color: 'var(--text-secondary)', lineHeight: 1.7, fontSize: '0.94rem', fontFamily: isAr ? 'var(--font-arabic-sans)' : 'var(--font-sans)' }}>
            <h1 style={{ fontFamily: isAr ? 'var(--font-arabic-serif)' : 'var(--font-serif)', fontSize: isAr ? '2.6rem' : '2.4rem', fontWeight: isAr ? 700 : 400, color: 'var(--text-primary)' }}>
              {t({ ar: 'سياسة الخصوصية وحماية البيانات', fr: 'Politique de confidentialité', en: 'Privacy Policy' })}
            </h1>
            <p>
              {t({
                ar: 'في نولار، نولي أهمية بالغة للخصوصية والهدوء وحماية بياناتك الشخصية. توضح هذه الوثيقة بوضوح كيفية التعامل مع معلوماتك عند زيارة موقعنا أو طلب أحد مصابيحنا.',
                fr: 'Chez NOULAR, nous attachons une grande importance à la discrétion et à la protection de vos données personnelles. Cette politique décrit la manière dont vos informations sont recueillies et utilisées lorsque vous visitez notre site ou commandez une pièce.',
                en: 'At NOULAR, we value quiet discretion and the protection of your personal information. This policy describes how your data is collected and handled when browsing or ordering.'
              })}
            </p>

            <div>
              <h3 style={{ fontFamily: isAr ? 'var(--font-arabic-serif)' : 'var(--font-serif)', fontSize: '1.35rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '0.4rem' }}>
                {t({ ar: '1. بيانات الطلب والتوصيل في المغرب', fr: '1. Données de commande et livraison', en: '1. Order and Delivery Data' })}
              </h3>
              <p>
                {t({
                  ar: 'عند تقديم طلب عبر الموقع أو عبر الواتساب، نجمع فقط البيانات الضرورية لتصنيع القطعة وتوصيلها بأمان: الاسم الكامل، رقم الهاتف، المدينة والعنوان بالمغرب. هذه البيانات لا تُشارك سوى مع شركاء الشحن لتسليم طردك.',
                  fr: 'Lorsque vous effectuez une commande sur le site ou via WhatsApp, nous collectons les données strictement nécessaires au façonnage et à l’acheminement de votre pièce : votre nom complet, numéro de téléphone, ville et adresse de livraison au Maroc. Ces informations ne sont transmises qu’aux transporteurs partenaires pour l’exécution de la livraison.',
                  en: 'When you place an order on the site or via WhatsApp, we collect only the strictly necessary data to craft and deliver your piece: your full name, phone number, city, and delivery address in Morocco.'
                })}
              </p>
            </div>

            <div>
              <h3 style={{ fontFamily: isAr ? 'var(--font-arabic-serif)' : 'var(--font-serif)', fontSize: '1.35rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '0.4rem' }}>
                {t({ ar: '2. حفظ السلة محلياً (التخزين المحلي)', fr: '2. Stockage local du panier (Local Storage)', en: '2. Local Cart Storage' })}
              </h3>
              <p>
                {t({
                  ar: 'لضمان تجربة تصفح هادئة وسلسة بدون إجبارك على إنشاء حساب، تُحفظ عناصر السلة وتفضيلات اللغة والوضع الليلي محلياً على متصفحك. لا نستخدم أي ملفات تتبع إعلانية خارجية مزعجة.',
                  fr: 'Pour garantir une navigation fluide sans obligation de création de compte, les articles ajoutés à votre panier et votre préférence linguistique sont enregistrés localement dans votre navigateur web (Local Storage). Aucun cookie publicitaire tiers de pistage n’est utilisé dans cette configuration.',
                  en: 'To ensure smooth navigation without requiring an account, items added to your basket and language/theme preferences are stored locally in your browser (Local Storage). No advertising tracking cookies are used.'
                })}
              </p>
            </div>

            <div>
              <h3 style={{ fontFamily: isAr ? 'var(--font-arabic-serif)' : 'var(--font-serif)', fontSize: '1.35rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '0.4rem' }}>
                {t({ ar: '3. حقوقك والتواصل مع الورشة', fr: '3. Vos droits et contact', en: '3. Your Rights & Contact' })}
              </h3>
              <p>
                {t({
                  ar: 'يحق لك في أي وقت تعديل أو حذف بياناتك. لأي استفسار، تواصل معنا مباشرة عبر البريد الإلكتروني: ',
                  fr: 'Conformément à la législation en vigueur, vous disposez d’un droit d’accès, de rectification et de suppression des données vous concernant. Pour toute demande, contactez notre atelier à : ',
                  en: 'In accordance with applicable law, you have the right to access, rectify, or delete your data. Contact our workshop directly at: '
                })}
                <a href={`mailto:${BRAND.contact.email}`} style={{ color: 'var(--color-terracotta)' }}>{BRAND.contact.email}</a>
                {t({ ar: ' أو عبر الواتساب على ', fr: ' ou via WhatsApp au ', en: ' or via WhatsApp at ' })}
                {BRAND.contact.whatsapp}.
              </p>
            </div>
          </div>
        ) : (
          /* Terms of Sale & Use Content */
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.8rem', color: 'var(--text-secondary)', lineHeight: 1.7, fontSize: '0.94rem', fontFamily: isAr ? 'var(--font-arabic-sans)' : 'var(--font-sans)' }}>
            <h1 style={{ fontFamily: isAr ? 'var(--font-arabic-serif)' : 'var(--font-serif)', fontSize: isAr ? '2.6rem' : '2.4rem', fontWeight: isAr ? 700 : 400, color: 'var(--text-primary)' }}>
              {t({ ar: 'شروط البيع والاستخدام العامة', fr: 'Conditions générales de vente', en: 'Terms and Conditions' })}
            </h1>

            <div>
              <h3 style={{ fontFamily: isAr ? 'var(--font-arabic-serif)' : 'var(--font-serif)', fontSize: '1.35rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '0.4rem' }}>
                {t({ ar: '1. طبيعة الصنع الحرفي والإنتاج على الطلب', fr: '1. Nature artisanale & fabrication sur commande', en: '1. Made to Order & Craft Nature' })}
              </h3>
              <p>
                {t({
                  ar: 'كل قطعة من نولار تُصنع خصيصاً على الطلب في ورشتنا بالمغرب. تستغرق مدة التجهيز والتشطيب اليدوي من 3 إلى 5 أيام عمل قبل الشحن. الفروقات الملمسية الرقيقة هي علامة الأصالة الحرفية.',
                  fr: 'Chaque luminaire NOULAR est fabriqué sur commande dans notre atelier au Maroc. Le délai moyen de confection avant expédition est de 3 à 5 jours ouvrés. En raison de la méthode d’impression et d’assemblage manuel, de légères variations d’aspect ou de texture peuvent exister : elles témoignent de l’authenticité de chaque pièce et ne constituent pas un défaut de fabrication.',
                  en: 'Every NOULAR piece is made to order in our Moroccan workshop. Hand-finishing and quality control take 3 to 5 business days before dispatch.'
                })}
              </p>
            </div>

            <div>
              <h3 style={{ fontFamily: isAr ? 'var(--font-arabic-serif)' : 'var(--font-serif)', fontSize: '1.35rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '0.4rem' }}>
                {t({ ar: '2. الأسعار وشروط الدفع عند الاستلام', fr: '2. Prix et règlement à la livraison', en: '2. Pricing & Cash on Delivery' })}
              </h3>
              <p>
                {t({
                  ar: 'الأسعار محددة بالدرهم المغربي (799 درهم للمصباح الفردي، أو 1,499 درهم لعرض الثنائي لغرفة النوم). الدفع يتم نقداً عند الاستلام (COD) بعد استلام ومعاينة الطرد عند باب بيتك.',
                  fr: 'Les prix affichés sont exprimés en Dirhams marocains (DH / MAD). Le prix promotionnel actuel d’une lampe Warda est de 799 DH (au lieu de 899 DH) et l’offre duo chambre pour 2 lampes est de 1 499 DH (au lieu de 1 598 DH). Le paiement s’effectue en espèces à la livraison (Cash on Delivery) directement auprès du livreur.',
                  en: 'Prices are in Moroccan Dirhams (799 DH for single lamp, 1,499 DH for bedroom duo bundle). Payment is Cash on Delivery (COD) upon receiving your package.'
                })}
              </p>
            </div>

            <div>
              <h3 style={{ fontFamily: isAr ? 'var(--font-arabic-serif)' : 'var(--font-serif)', fontSize: '1.35rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '0.4rem' }}>
                {t({ ar: '3. التوصيل والتتبع المجاني', fr: '3. Livraison & Suivi', en: '3. Shipping & Live Tracking' })}
              </h3>
              <p>
                {t({
                  ar: 'التوصيل مجاني في كافة مدن المغرب للطلبات ابتداءً من 700 درهم. يُرسل رابط تتبع مباشر وفوري عبر البريد الإلكتروني أو الواتساب فور انطلاق شحنتك من الورشة.',
                  fr: 'La livraison est offerte partout au Maroc dès 700 DH de commande. Dès l’expédition du colis, un lien de suivi est transmis par e-mail ou WhatsApp.',
                  en: 'Free shipping throughout Morocco on orders from 700 DH. A live tracking link is emailed or sent via WhatsApp upon dispatch.'
                })}
              </p>
            </div>

            <div>
              <h3 style={{ fontFamily: isAr ? 'var(--font-arabic-serif)' : 'var(--font-serif)', fontSize: '1.35rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '0.4rem' }}>
                {t({ ar: '4. الضمان الشامل لمدة 24 شهراً', fr: '4. Garantie 24 mois', en: '4. 24-Month Warranty' })}
              </h3>
              <p>
                {t({
                  ar: 'تحظى جميع مصابيح نولار بضمان شامل لمدة 24 شهراً يغطي أي عيب مصنعي أو كهربائي (مقبس E14، السلك القماشي المجدول، وقاطع الدائرة) في ظروف الاستخدام العادي.',
                  fr: 'Toutes nos lampes bénéficient d’une garantie atelier de 24 mois couvrant tout défaut de matière ou de fonctionnement électrique (douille E14, câble tressé, interrupteur) dans des conditions normales d’utilisation intérieure.',
                  en: 'All NOULAR creations are covered by a 24-month manufacturer warranty on structural and electrical parts under normal home use.'
                })}
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
