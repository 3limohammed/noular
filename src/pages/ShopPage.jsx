import React, { useState, useMemo } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { PRODUCTS, CATEGORIES } from '../data/noularData';
import { ProductCard } from '../components/ProductCard';
import { SlidersHorizontal, Sparkles } from 'lucide-react';

export const ShopPage = ({ navigateTo }) => {
  const { t, isAr, dir } = useLanguage();
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [sortBy, setSortBy] = useState('featured');

  const filteredProducts = useMemo(() => {
    let list = [...PRODUCTS];

    if (selectedCategory !== 'all') {
      list = list.filter((p) => p.categories && p.categories.includes(selectedCategory));
    }

    if (sortBy === 'price-asc') {
      list.sort((a, b) => a.price - b.price);
    } else if (sortBy === 'price-desc') {
      list.sort((a, b) => b.price - a.price);
    }

    return list;
  }, [selectedCategory, sortBy]);

  return (
    <div style={{ padding: '3.5rem 0 7rem 0', backgroundColor: 'var(--bg-primary)', direction: dir }}>
      <div className="container-noular">
        {/* Header */}
        <div style={{ marginBottom: '3.5rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
            <span style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: 'var(--color-terracotta)' }} />
            <span className="text-eyebrow">
              {t({
                ar: 'الكتالوج الرسمي لنولار · المغرب',
                fr: 'CATALOGUE OFFICIEL NOULAR',
                en: 'OFFICIAL NOULAR CATALOG'
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
            {t({ ar: 'المتجر والقطع المتاحة', fr: 'Boutique', en: 'Shop' })}
          </h1>

          <p
            style={{
              fontFamily: isAr ? 'var(--font-arabic-sans)' : 'var(--font-sans)',
              fontSize: '1.1rem',
              color: 'var(--text-secondary)',
              marginTop: '0.6rem',
              maxWidth: '620px',
              lineHeight: 1.6
            }}
          >
            {t({
              ar: 'مصابيح نحتية وقطع ديكور، تُصنع بالطلب في ورشتنا بالمغرب لنشر السكينة والدفء في بيتك.',
              fr: 'Luminaires et pièces design, disponibles aujourd’hui.',
              en: 'Lighting and sculptural design pieces, crafted to order.'
            })}
          </p>
        </div>

        {/* Category Tabs & Sorting Bar */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '1.5rem',
            paddingBottom: '2rem',
            marginBottom: '3rem',
            borderBottom: '1px solid var(--border-light)'
          }}
        >
          {/* Categories */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.6rem' }}>
            {CATEGORIES.map((cat) => {
              const active = selectedCategory === cat.slug;
              return (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.slug)}
                  style={{
                    padding: '0.55rem 1.2rem',
                    borderRadius: '25px',
                    fontSize: '0.78rem',
                    fontWeight: 700,
                    letterSpacing: isAr ? 'normal' : '0.08em',
                    textTransform: isAr ? 'none' : 'uppercase',
                    border: active ? '1px solid var(--text-primary)' : '1px solid var(--border-light)',
                    backgroundColor: active ? 'var(--text-primary)' : 'var(--bg-card)',
                    color: active ? 'var(--bg-primary)' : 'var(--text-secondary)',
                    cursor: 'pointer',
                    transition: 'all 200ms ease'
                  }}
                >
                  {t(cat.name)}
                </button>
              );
            })}
          </div>

          {/* Sort Selector */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
            <span style={{ fontSize: '0.78rem', textTransform: isAr ? 'none' : 'uppercase', letterSpacing: isAr ? 'normal' : '0.1em', color: 'var(--text-muted)' }}>
              {t({ ar: 'ترتيب حسب :', fr: 'Trier par :', en: 'Sort by:' })}
            </span>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              style={{
                padding: '0.45rem 0.9rem',
                borderRadius: '2px',
                border: '1px solid var(--border-light)',
                backgroundColor: 'var(--bg-card)',
                color: 'var(--text-primary)',
                fontFamily: isAr ? 'var(--font-arabic-sans)' : 'var(--font-sans)',
                fontSize: '0.82rem',
                cursor: 'pointer'
              }}
            >
              <option value="featured">{t({ ar: 'المميزة', fr: 'Mis en avant', en: 'Featured' })}</option>
              <option value="price-asc">{t({ ar: 'السعر: من الأقل للأعلى', fr: 'Prix croissant', en: 'Price: Low to High' })}</option>
              <option value="price-desc">{t({ ar: 'السعر: من الأعلى للأقل', fr: 'Prix décroissant', en: 'Price: High to Low' })}</option>
            </select>
          </div>
        </div>

        {/* Product Cards Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '2.5rem'
          }}
        >
          {filteredProducts.map((p) => (
            <ProductCard
              key={p.id}
              product={p}
              onSelect={(slug) => {
                navigateTo(`/fr/product/${slug}`);
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
            />
          ))}
        </div>

        {/* Free Shipping Note */}
        <div
          style={{
            marginTop: '5rem',
            textAlign: 'center',
            padding: '2.5rem',
            borderRadius: '4px',
            backgroundColor: 'var(--bg-secondary)',
            border: '1px solid var(--border-light)'
          }}
        >
          <div
            style={{
              fontSize: isAr ? '1.5rem' : '1.35rem',
              fontFamily: isAr ? 'var(--font-arabic-serif)' : 'var(--font-serif)',
              fontWeight: isAr ? 700 : 500,
              color: 'var(--text-primary)'
            }}
          >
            {t({
              ar: 'توصيل مجاني لجميع مدن المغرب للطلبات ابتداءً من 700 درهم',
              fr: 'Livraison offerte partout au Maroc dès 700 DH',
              en: 'Free shipping throughout Morocco on orders from 700 DH'
            })}
          </div>
          <p
            style={{
              fontSize: '0.92rem',
              fontFamily: isAr ? 'var(--font-arabic-sans)' : 'var(--font-sans)',
              color: 'var(--text-secondary)',
              marginTop: '0.5rem',
              lineHeight: 1.6
            }}
          >
            {t({
              ar: 'جميع قطعنا تُصنع خصيصاً على الطلب في ورشتنا بالمغرب وتُشحن خلال 3 إلى 5 أيام عمل، مع الدفع عند الاستلام.',
              fr: 'Toutes nos pièces sont réalisées sur commande et expédiées sous 3 à 5 jours ouvrés.',
              en: 'All pieces are produced to order and dispatched within 3 to 5 business days.'
            })}
          </p>
        </div>
      </div>
    </div>
  );
};

