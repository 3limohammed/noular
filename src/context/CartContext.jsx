import React, { createContext, useContext, useState, useEffect } from 'react';
import { PRODUCTS, BRAND } from '../data/noularData';

const CartContext = createContext(null);

const STORAGE_KEY = 'noular_cart_v2';

export const CartProvider = ({ children }) => {
  const [items, setItems] = useState(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
    } catch (err) {
      console.warn('Failed to persist cart:', err);
    }
  }, [items]);

  const addToCart = (product, quantity = 1, isBundle = false) => {
    setItems((prev) => {
      const existingIndex = prev.findIndex((item) => item.product.id === product.id);
      if (existingIndex > -1) {
        const next = [...prev];
        const nextQty = next[existingIndex].quantity + quantity;
        next[existingIndex] = {
          ...next[existingIndex],
          quantity: nextQty,
          isBundle: isBundle || nextQty >= 2
        };
        return next;
      }
      return [...prev, { product, quantity, isBundle }];
    });
    setIsDrawerOpen(true);
  };

  const updateQuantity = (productId, delta) => {
    setItems((prev) => {
      return prev
        .map((item) => {
          if (item.product.id === productId) {
            const newQty = item.quantity + delta;
            return newQty > 0 ? { ...item, quantity: newQty } : null;
          }
          return item;
        })
        .filter(Boolean);
    });
  };

  const removeFromCart = (productId) => {
    setItems((prev) => prev.filter((item) => item.product.id !== productId));
  };

  const clearCart = () => {
    setItems([]);
  };

  // Pricing calculations:
  // Single lamp: 799 DH (originally 899 DH)
  // Two lamps bundle: 1,499 DH (originally 1,598 DH) -> Save 99 DH per pair
  const totalUnits = items.reduce((sum, item) => sum + item.quantity, 0);

  // Bundle logic: Each complete pair of 2 lamps costs 1,499 DH, remaining odd lamp costs 799 DH
  const pairsCount = Math.floor(totalUnits / 2);
  const remainderUnits = totalUnits % 2;

  const originalTotal = totalUnits * 899;
  const currentTotal = pairsCount * 1499 + remainderUnits * 799;
  const totalSavings = originalTotal - currentTotal;
  const bundleDiscountApplied = pairsCount > 0;

  const freeShipping = currentTotal >= BRAND.shipping.freeThreshold;
  const shippingCost = totalUnits > 0 ? 0 : 0; // Free delivery across Morocco

  // WhatsApp Order message generator
  const getWhatsAppOrderUrl = (customNote = '') => {
    if (items.length === 0) {
      return `https://wa.me/${BRAND.contact.whatsappRaw}?text=${encodeURIComponent(
        'Bonjour Noular, je souhaite me renseigner sur la collection de luminaires Warda.'
      )}`;
    }

    const itemsText = items
      .map((item) => `• ${item.quantity}× ${item.product.name} (${item.quantity * 799} DH)`)
      .join('\n');

    const message = [
      'Bonjour Noular,',
      'Je souhaite commander sur votre boutique :',
      itemsText,
      bundleDiscountApplied ? `(Offre duo chambre appliquée : 1 499 DH les 2 lampes)` : '',
      `Total : ${currentTotal} DH`,
      `Livraison offerte partout au Maroc`,
      customNote ? `Note client : ${customNote}` : '',
      'Merci !'
    ]
      .filter(Boolean)
      .join('\n');

    return `https://wa.me/${BRAND.contact.whatsappRaw}?text=${encodeURIComponent(message)}`;
  };

  const getSingleProductWhatsAppUrl = (product, quantity = 1, isBundle = false) => {
    const price = isBundle || quantity === 2 ? 1499 : product.price * quantity;
    const msg = [
      'Bonjour Noular,',
      'Je souhaite commander :',
      `• ${quantity}× ${product.name}`,
      isBundle || quantity === 2 ? '• Offre duo chambre (2 lampes) : 1 499 DH' : `• Prix : ${price} DH`,
      '• Livraison offerte partout au Maroc',
      'Merci !'
    ].join('\n');
    return `https://wa.me/${BRAND.contact.whatsappRaw}?text=${encodeURIComponent(msg)}`;
  };

  return (
    <CartContext.Provider
      value={{
        items,
        totalUnits,
        currentTotal,
        originalTotal,
        totalSavings,
        bundleDiscountApplied,
        freeShipping,
        shippingCost,
        isDrawerOpen,
        setIsDrawerOpen,
        isCheckoutOpen,
        setIsCheckoutOpen,
        addToCart,
        updateQuantity,
        removeFromCart,
        clearCart,
        getWhatsAppOrderUrl,
        getSingleProductWhatsAppUrl
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within CartProvider');
  }
  return context;
};
