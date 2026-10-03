import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { BRAND } from '../data/noularData';
import { Sparkles, Hammer, Leaf, ShieldCheck, ArrowRight, ArrowLeft } from 'lucide-react';

export const AtelierPage = ({ navigateTo }) => {
  const { t, isAr, dir } = useLanguage();

  return (
    <div style={{ backgroundColor: 'var(--bg-primary)', padding: '3.5rem 0 7rem 0', direction: dir }}>
      <div className="container-noular">
        {/* Header */}
        <div style={{ maxWidth: '780px', marginBottom: '4rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
            <span style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: 'var(--color-terracotta)' }} />
            <span className="text-eyebrow">
              {t({
                ar: 'قصتنا وحرفتنا في المغرب',
                fr: 'NOTRE HISTOIRE & SAVOIR-FAIRE',
                en: 'OUR STORY & CRAFT'
              })}
            </span>
          </div>

          <h1
            style={{
              fontFamily: isAr ? 'var(--font-arabic-serif)' : 'var(--font-serif)',
              fontSize: isAr ? '3rem' : 'clamp(2.6rem, 5vw, 4.2rem)',
              fontWeight: isAr ? 700 : 400,
              color: 'var(--text-primary)',
              marginTop: '0.8rem',
              lineHeight: 1.15
            }}
          >
            {t({ ar: 'ورشة نـولار بالمغرب.', fr: 'L’Atelier Noular.', en: 'The Noular Atelier.' })}
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
              ar: 'ورشة مغربية مستقلة مكرسة للتصميم الهادئ والإنارة النحتية. كل قطعة تولد على الطلب، تُشطب وتُجمع يدوياً بأيدي حرفيين بعد أن تختارها وتؤكد رغبتك.',
              fr: 'Un petit atelier marocain dédié au design calme et aux objets sculpturaux. Chaque pièce naît sur commande, façonnée et assemblée à la main après votre choix.',
              en: 'A small Moroccan studio dedicated to quiet design and sculptural lighting. Every piece is crafted to order, shaped and assembled by hand after your choice.'
            })}
          </p>
        </div>

        {/* Studio Visual Composition */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(12, 1fr)',
            gap: '2.5rem',
            alignItems: 'center',
            marginBottom: '6rem'
          }}
        >
          <div style={{ gridColumn: 'span 12' }} className="atelier-img-left">
            <div
              style={{
                borderRadius: '4px',
                overflow: 'hidden',
                backgroundColor: 'var(--bg-secondary)',
                border: '1px solid var(--border-light)',
                boxShadow: 'var(--shadow-soft)'
              }}
            >
              <img
                src="/assets/noular/process/workshop-print.webp"
                alt="Atelier Noular impression et façonnage"
                style={{ width: '100%', height: 'auto', display: 'block' }}
              />
            </div>
          </div>
        </div>

        {/* 3 Core Atelier Commitments */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '2.5rem',
            marginBottom: '6rem'
          }}
        >
          <div
            style={{
              backgroundColor: 'var(--bg-card)',
              borderRadius: '3px',
              border: '1px solid var(--border-light)',
              padding: '2.4rem',
              display: 'flex',
              flexDirection: 'column',
              gap: '1rem'
            }}
          >
            <div style={{ color: 'var(--color-terracotta)' }}>
              <Hammer size={24} />
            </div>
            <h3
              style={{
                fontFamily: isAr ? 'var(--font-arabic-serif)' : 'var(--font-serif)',
                fontSize: isAr ? '1.6rem' : '1.5rem',
                fontWeight: isAr ? 700 : 500,
                color: 'var(--text-primary)'
              }}
            >
              {t({ ar: '18 ساعة عمل في الورشة لكل قطعة', fr: '18 h d’atelier par pièce', en: '18 hours per lamp' })}
            </h3>
            <p
              style={{
                fontFamily: isAr ? 'var(--font-arabic-sans)' : 'var(--font-sans)',
                fontSize: '0.92rem',
                color: 'var(--text-secondary)',
                lineHeight: 1.65
              }}
            >
              {t({
                ar: 'التشكيل لا يتم باستعجال. كل غطاء وقاعدة يخضعان للمراقبة الدقيقة طبقة بطبقة، ثم يُشطبان يدوياً لضمان ملمس حريري ومظهر لا تشوبه شائبة.',
                fr: 'Le façonnage ne se fait pas à la hâte. Chaque abat-jour et chaque socle sont surveillés couche par couche, puis finis manuellement pour garantir une texture impeccable.',
                en: 'Shaping is never rushed. Each shade and base is monitored layer by layer, then hand-finished to ensure an authentic, tactile touch.'
              })}
            </p>
          </div>

          <div
            style={{
              backgroundColor: 'var(--bg-card)',
              borderRadius: '3px',
              border: '1px solid var(--border-light)',
              padding: '2.4rem',
              display: 'flex',
              flexDirection: 'column',
              gap: '1rem'
            }}
          >
            <div style={{ color: 'var(--color-terracotta)' }}>
              <Leaf size={24} />
            </div>
            <h3
              style={{
                fontFamily: isAr ? 'var(--font-arabic-serif)' : 'var(--font-serif)',
                fontSize: isAr ? '1.6rem' : '1.5rem',
                fontWeight: isAr ? 700 : 500,
                color: 'var(--text-primary)'
              }}
            >
              {t({ ar: 'مادة PLA حيوية نباتية مستدامة', fr: 'PLA végétal durable', en: 'Sustainable Biobased PLA' })}
            </h3>
            <p
              style={{
                fontFamily: isAr ? 'var(--font-arabic-sans)' : 'var(--font-sans)',
                fontSize: '0.92rem',
                color: 'var(--text-secondary)',
                lineHeight: 1.65
              }}
            >
              {t({
                ar: 'مادة حيوية تُستخلص من مصادر نباتية متجددة (نشا الذرة وقصب السكر). خفيفة الوزن، متينة وصديقة للبيئة بدون أي انبعاثات سامة.',
                fr: 'Une matière biosourcée issue de ressources végétales renouvelables. Légère, solide et écologique, elle permet des formes sculpturales sans empreinte toxique.',
                en: 'A biobased medium derived from renewable plant starches. Lightweight, durable, and environmentally mindful, enabling undulating silhouettes.'
              })}
            </p>
          </div>

          <div
            style={{
              backgroundColor: 'var(--bg-card)',
              borderRadius: '3px',
              border: '1px solid var(--border-light)',
              padding: '2.4rem',
              display: 'flex',
              flexDirection: 'column',
              gap: '1rem'
            }}
          >
            <div style={{ color: 'var(--color-terracotta)' }}>
              <ShieldCheck size={24} />
            </div>
            <h3
              style={{
                fontFamily: isAr ? 'var(--font-arabic-serif)' : 'var(--font-serif)',
                fontSize: isAr ? '1.6rem' : '1.5rem',
                fontWeight: isAr ? 700 : 500,
                color: 'var(--text-primary)'
              }}
            >
              {t({ ar: 'صفر تخزين فائض', fr: 'Zéro sur-stock', en: 'Zero Overstock' })}
            </h3>
            <p
              style={{
                fontFamily: isAr ? 'var(--font-arabic-sans)' : 'var(--font-sans)',
                fontSize: '0.92rem',
                color: 'var(--text-secondary)',
                lineHeight: 1.65
              }}
            >
              {t({
                ar: 'لا نصنع أي قطعة قبل أن تجد بيتها الذي ينتظرها. تتلقى قطعة فريدة كلياً، صُنعت خصيصاً لك مع تغليف ورقي فاخر وحماية فائقة أثناء الشحن.',
                fr: 'Nous ne produisons aucun objet qui n’a pas déjà trouvé sa maison. Vous recevez une pièce unique, faite pour vous, avec sa traçabilité et son emballage papier soigné.',
                en: 'We never produce items without an intended home. You receive a unique object made specifically for you, accompanied by delicate protective paper details.'
              })}
            </p>
          </div>
        </div>

        {/* CTA to Shop */}
        <div style={{ textAlign: 'center', padding: '3.5rem', backgroundColor: 'var(--bg-secondary)', borderRadius: '4px' }}>
          <h3
            style={{
              fontFamily: isAr ? 'var(--font-arabic-serif)' : 'var(--font-serif)',
              fontSize: isAr ? '2.2rem' : '2rem',
              fontWeight: isAr ? 700 : 500,
              color: 'var(--text-primary)'
            }}
          >
            {t({
              ar: 'استكشف القطع التي صُنعت بحب في ورشتنا.',
              fr: 'Découvrez les pièces créées dans notre atelier.',
              en: 'Discover the pieces crafted in our atelier.'
            })}
          </h3>
          <button
            onClick={() => navigateTo('/fr/shop')}
            className="btn-noular-primary"
            style={{ marginTop: '1.4rem' }}
          >
            {t({ ar: 'تصفح المتجر', fr: 'VOIR LA BOUTIQUE', en: 'BROWSE SHOP' })}
            {isAr ? <ArrowLeft size={16} /> : <ArrowRight size={16} />}
          </button>
        </div>
      </div>
    </div>
  );
};

