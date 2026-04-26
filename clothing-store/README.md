# 👕 StyleVault — Fashion Store

A full-featured clothing e-commerce app built with React.

## 🆕 FitRoom — Virtual Try-On Studio

**FitRoom** is a virtual fitting room that lets users see clothes on an avatar before buying.

### Features
- **Step 1 – Avatar Builder**: Choose body type (Slim / Athletic / Regular / Heavy), skin tone, height & weight. Get an instant size recommendation.
- **Step 2 – Try-On**: Browse all product categories (Tops, Bottoms, Outerwear). Click any item to "wear" it on the avatar. Change colors in real-time. See the full outfit together.
- **Add to Cart**: Add individual items or the entire outfit with one click.
- **Outfit Summary**: Running total of all worn items.

### Files Added / Modified
| File | Status | Purpose |
|------|--------|---------|
| `src/pages/FitRoom.js` | ✅ NEW | Main FitRoom page component |
| `src/pages/FitRoom.css` | ✅ NEW | FitRoom styles |
| `src/App.js` | ✅ UPDATED | Added `/fitroom` route |
| `src/components/Header.js` | ✅ UPDATED | Added 🧍 FitRoom nav link |
| `src/components/Header.css` | ✅ UPDATED | FitRoom nav highlight style |

### Route
```
/fitroom
```

## Getting Started

```bash
npm install
npm start
```

## Project Structure

```
clothing-store/
├── public/images/          # Product images
├── src/
│   ├── components/         # Header, Footer, ProductCard
│   ├── pages/              # Home, Products, Categories, ProductDetails,
│   │                       # Login, Register, FitRoom ✅
│   ├── data/products.js    # All product data
│   ├── App.js              # Router with all routes
│   └── index.css           # Global styles & CSS variables
└── package.json
```

## Tech Stack
- React 18
- React Router v6
- CSS Variables for theming
- Google Fonts (Poppins, Playfair Display)
