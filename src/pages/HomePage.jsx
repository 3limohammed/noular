import React from 'react';
import { HeroCinematicScroller } from '../components/HeroCinematicScroller';
import { ProductCollection } from '../components/ProductCollection';
import { ProductComparison } from '../components/ProductComparison';
import { CraftSection } from '../components/CraftSection';
import { MadeToOrderSection } from '../components/MadeToOrderSection';
import { ProcessSection } from '../components/ProcessSection';
import { FinalCTA } from '../components/FinalCTA';

export const HomePage = ({ navigateTo }) => {
  const handleExploreCollection = () => {
    const el = document.getElementById('collection');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const handleSelectProduct = (slug) => {
    navigateTo(`/fr/product/${slug}`);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleExploreAtelier = () => {
    navigateTo('/fr/atelier');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <main>
      {/* 01 BREATHTAKING HERO CINEMATIC SCROLL-DRIVEN VIDEO SECTION */}
      <HeroCinematicScroller
        onExploreCollection={handleExploreCollection}
        onProductSelect={handleSelectProduct}
      />

      {/* 02 THE WARDA COLLECTION (Four Real Expressions) */}
      <ProductCollection onSelectProduct={handleSelectProduct} />

      {/* 03 EDITORIAL FINISH COMPARISON */}
      <ProductComparison onSelectProduct={handleSelectProduct} />

      {/* 04 WHY 799 DH? (18 Hours Craftsmanship) */}
      <CraftSection />

      {/* 05 MADE TO ORDER (The Moroccan Workshop Story) */}
      <MadeToOrderSection onExploreAtelier={handleExploreAtelier} />

      {/* 06 HOW IT’S MADE (3-Stage Journey) */}
      <ProcessSection />

      {/* 07 FINAL PEACEFUL CALL TO ACTION */}
      <FinalCTA onExploreCollection={() => navigateTo('/fr/shop')} />
    </main>
  );
};
