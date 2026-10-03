import { useMemo } from 'react';
import { PRODUCTS } from '../data/noularData';

export const useProduct = (slugOrId) => {
  return useMemo(() => {
    if (!slugOrId) return null;
    const clean = slugOrId.toLowerCase().trim();
    return (
      PRODUCTS.find(
        (p) =>
          p.slug === clean ||
          p.id === clean ||
          (p.legacySlugs && p.legacySlugs.includes(clean))
      ) || null
    );
  }, [slugOrId]);
};

export const useAllProducts = () => {
  return PRODUCTS;
};
