# NOULAR — Complete Real E-Commerce Redesign (2026)
### نـولار · بيتٌ أكثر هدوءاً | Une maison plus calme | A calmer kind of home

A luxury, production-grade e-commerce experience designed and engineered for **NOULAR** ([noular.com](https://noular.com)), an artisanal lighting and sculptural design studio handcrafted in Morocco.

---

## ✨ Key Features & Architectural Highlights

### 1. 🎬 Scroll-Driven Video Hero & Cinematic Storytelling
- **Hardware-Accelerated 60 FPS Canvas Engine**: Seamlessly composites real high-resolution NOULAR photography across 6 narrative chapters.
- **Volumetric 2700K Warm Light Bloom**: Real-time radial amber illumination reacting dynamically to scroll depth.
- **Interactive Light Switch**: Tactile Day/Night toggle with physical acoustic click synthesized via Web Audio API.
- **Ambient Atelier Soundscape**: Calming 108Hz / 216Hz harmonic drone recreating the peaceful Moroccan workshop atmosphere.
- **Video Player HUD**: Live timecode (`00:00 / 00:18`), scrubber timeline with chapter pins, auto-play film mode, and fullscreen theater mode.

### 2. 📱 Mobile-First Luxury Ergonomics
- **Dedicated Thumb Navigation Bar (`MobileBottomBar`)**: Safe-area compliant fixed bar for Home, Shop, Atelier, WhatsApp, and Cart.
- **Sticky Purchase Bar (`ProductDetailPage`)**: Direct 1-tap ordering with live price calculation (799 DH / 1,499 DH Duo Bundle).
- **Touch Swipe Gestures**: Glide smoothly left and right between story beats.
- **Mobile Share & QR Code Modal**: Instant QR code scanner for mobile devices to test live previews immediately.

### 3. 🌍 Full Arabic Localization & RTL (`dir="rtl"`)
- Complete poetic copywriting in authentic Moroccan Arabic alongside French and English.
- Typography with Google Fonts: `Tajawal` (Modern Arabic Sans), `Amiri` (Traditional Arabic Serif), `Cormorant Garamond`, and `Plus Jakarta Sans`.
- RTL-aware sliding drawers, layout mirroring, and currency formatting (`799 درهم` / `1 499 درهم`).

### 4. 🛒 Authentic Commercial Engine & Checkout
- **4 Real NOULAR Table Lamps**:
  - **Warda Sienna**: Dark base, terracotta body (799 DH / 899 DH)
  - **Warda Basalt**: Dark base, black finish (799 DH / 899 DH)
  - **Warda Neige**: Monochromatic pure white (799 DH / 899 DH)
  - **Warda Soleil**: Full orange sunshine (799 DH / 899 DH)
- **Duo Bedroom Bundle**: Automatic 99 DH discount when ordering 2 lamps (1,499 DH instead of 1,598 DH).
- **Cash on Delivery (COD)** checkout modal across all Moroccan cities.
- **1-Click WhatsApp Ordering** pre-formatted with order details, items, and delivery address.

---

## 🚀 Quick Start & Development

### Prerequisites
- Node.js (v18 or higher)
- npm or pnpm

### Installation
```bash
# Clone the repository
git clone <YOUR_GITHUB_REPO_URL>
cd noular-ecommerce

# Install dependencies
npm install

# Start local dev server
npm run dev
```

### Production Build
```bash
# Build optimized static production bundle
npm run build

# Preview production build locally
npm run preview
```

---

## 📁 Project Structure

```
noular-ecommerce/
├── public/
│   └── assets/
│       └── noular/
│           ├── brand/       # Vector logos & insignia
│           ├── process/     # Workshop & artisanal lineart
│           └── products/    # Authentic Warda lamp photography (Day/Night/Angles)
├── src/
│   ├── components/          # Reusable UI components
│   │   ├── HeroCinematicScroller.jsx # 60 FPS Canvas Video Engine
│   │   ├── MobileBottomBar.jsx       # Mobile thumb navigation
│   │   ├── MobileShareModal.jsx      # QR code & share links
│   │   ├── Navigation.jsx            # Header & trilingual switcher
│   │   ├── ProductCard.jsx           # Editorial hover & quick add
│   │   ├── ProductCollection.jsx     # 4 Warda expressions
│   │   ├── ProductComparison.jsx     # Finish selector & specs
│   │   ├── CraftSection.jsx          # 18 atelier hours story
│   │   ├── MadeToOrderSection.jsx    # Made after you say yes
│   │   ├── ProcessSection.jsx        # 3-stage journey
│   │   ├── CartDrawer.jsx            # Slide-out bag & bundle math
│   │   ├── CheckoutModal.jsx         # Morocco COD checkout
│   │   └── Footer.jsx                # WhatsApp, email & policies
│   ├── context/             # React Contexts (Language, Cart, Theme)
│   ├── data/
│   │   └── noularData.js    # Centralized source of truth
│   ├── hooks/               # Custom React hooks
│   ├── pages/               # Multi-page views (Shop, Atelier, Product, etc.)
│   ├── App.jsx              # Main routing & layout shell
│   └── index.css            # Master Design System (2026)
├── index.html
├── package.json
└── vite.config.js
```

---

## 🔒 Source of Truth & Brand Notice
All product names, dimensions (H 24 × Ø 14 cm), E14 specifications, biobased PLA materials, and pricing are preserved from the official NOULAR studio ([noular.com](https://noular.com)). Free shipping across Morocco on orders from 700 DH.
