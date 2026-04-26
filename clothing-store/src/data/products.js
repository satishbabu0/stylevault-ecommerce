// ==========================================
// PRODUCTS DATA - clothing-store/src/data/products.js
// ==========================================

export const categories = [
  { id: "tshirts", name: "T-Shirts", icon: "👕", image: "/images/tshirt2.webp" },
  { id: "shirts", name: "Shirts", icon: "👔", image: "/images/shirt.webp" },
  { id: "hoodies", name: "Hoodies", icon: "🧥", image: "/images/hoodie.webp" },
  { id: "jackets", name: "Jackets", icon: "🧣", image: "/images/jacket.jpg" },
  { id: "jeans", name: "Jeans", icon: "👖", image: "/images/jeans.jpg" },
  { id: "trousers", name: "Trousers", icon: "👗", image: "/images/trousers.jpg" },
  { id: "shorts", name: "Shorts", icon: "🩳", image: "/images/shorts1.jpg" },
  { id: "casual", name: "Casual Wear", icon: "😎", image: "/images/tshirt8.jpg" },
  { id: "formal", name: "Formal Wear", icon: "💼", image: "/images/tshirt10.jpg" },
  { id: "ethnic", name: "Ethnic Wear", icon: "🎎", image: "/images/ethnic.webp" },
  { id: "sportswear", name: "Sportswear", icon: "⚽", image: "/images/tshirt11.webp" },
  { id: "accessories", name: "Accessories", icon: "👜", image: "/images/accessorie1.webp" },
];

export const products = [
  // T-SHIRTS
  { id: 1, name: "Classic Black Tee", category: "tshirts", price: 599, originalPrice: 999, image: "/images/black-tshirt.webp", rating: 4.3, reviews: 214, description: "A timeless classic black t-shirt made from 100% breathable cotton. Perfect for any occasion — dress it up or down. Soft, comfortable, and built to last.", sizes: ["S", "M", "L", "XL", "XXL"], colors: ["Black"], badge: "Bestseller" },
  { id: 2, name: "Graphic Print Tee", category: "tshirts", price: 699, originalPrice: 1199, image: "/images/tshirt2.webp", rating: 4.1, reviews: 98, description: "Bold graphic print t-shirt with a modern street-style look. Made with premium cotton blend for all-day comfort.", sizes: ["S", "M", "L", "XL"], colors: ["White", "Grey"], badge: "" },
  { id: 3, name: "Striped Casual Tee", category: "tshirts", price: 549, originalPrice: 899, image: "/images/tshirt3.webp", rating: 4.0, reviews: 135, description: "Trendy striped tee with a relaxed fit. Ideal for weekends and casual outings.", sizes: ["M", "L", "XL"], colors: ["Blue/White"], badge: "Sale" },
  { id: 4, name: "Slim Fit Tee", category: "tshirts", price: 649, originalPrice: 1099, image: "/images/tshirt4.webp", rating: 4.2, reviews: 187, description: "A sharp slim fit t-shirt that hugs your body perfectly. Premium quality fabric for a stylish, modern look.", sizes: ["S", "M", "L", "XL", "XXL"], colors: ["Navy", "Black"], badge: "" },
  { id: 5, name: "Premium Round Neck", category: "tshirts", price: 799, originalPrice: 1399, image: "/images/tshirt5.webp", rating: 4.5, reviews: 320, description: "Premium quality round neck tee crafted from long-staple cotton. Ultra-soft and long-lasting with rich color retention.", sizes: ["S", "M", "L", "XL"], colors: ["Multiple"], badge: "Top Rated" },
  { id: 6, name: "Summer Breezy Tee", category: "tshirts", price: 499, originalPrice: 799, image: "/images/tshirt6.webp", rating: 3.9, reviews: 64, description: "Light and breezy summer t-shirt designed for hot days. Moisture-wicking fabric keeps you cool and fresh.", sizes: ["S", "M", "L"], colors: ["Light Blue", "White"], badge: "" },
  { id: 7, name: "Urban Street Tee", category: "tshirts", price: 749, originalPrice: 1249, image: "/images/tshirt7.jpg", rating: 4.3, reviews: 152, description: "Urban-inspired street tee with a dropped shoulder silhouette. A wardrobe staple for the modern trendsetter.", sizes: ["M", "L", "XL", "XXL"], colors: ["Charcoal", "White"], badge: "" },
  { id: 8, name: "Oversized Drop Tee", category: "tshirts", price: 849, originalPrice: 1499, image: "/images/tshirt9.webp", rating: 4.4, reviews: 203, description: "Trendy oversized drop-shoulder t-shirt. Perfect for a relaxed, laid-back look with maximum comfort.", sizes: ["M", "L", "XL"], colors: ["Beige", "Black"], badge: "Trending" },

  // SHIRTS
  { id: 9, name: "Classic Oxford Shirt", category: "shirts", price: 1299, originalPrice: 2199, image: "/images/shirt.webp", rating: 4.6, reviews: 287, description: "A must-have Oxford shirt crafted from premium twill fabric. Suitable for both formal and smart casual looks.", sizes: ["S", "M", "L", "XL", "XXL"], colors: ["White", "Light Blue", "Cream"], badge: "Bestseller" },
  { id: 10, name: "Linen Summer Shirt", category: "shirts", price: 1499, originalPrice: 2499, image: "/images/tshirt10.jpg", rating: 4.4, reviews: 142, description: "Breathable linen shirt perfect for summer. Stays cool in heat and looks effortlessly stylish.", sizes: ["S", "M", "L", "XL"], colors: ["Beige", "White", "Sky Blue"], badge: "" },
  { id: 11, name: "Formal White Shirt", category: "shirts", price: 999, originalPrice: 1699, image: "/images/tshirt12.jpg", rating: 4.2, reviews: 198, description: "Crisp formal white shirt with a slim fit. Ideal for office wear, interviews, and formal occasions.", sizes: ["S", "M", "L", "XL", "XXL"], colors: ["White"], badge: "" },

  // HOODIES
  { id: 12, name: "Virat Edition Hoodie", category: "hoodies", price: 1999, originalPrice: 3499, image: "/images/hoodie.webp", rating: 4.8, reviews: 512, description: "Limited edition hoodie inspired by sporty vibes. Premium French terry cotton with a relaxed fit and comfortable kangaroo pocket.", sizes: ["S", "M", "L", "XL", "XXL"], colors: ["Maroon", "Black"], badge: "Limited Edition" },
  { id: 13, name: "Classic Pullover Hoodie", category: "hoodies", price: 1599, originalPrice: 2799, image: "/images/tshirt11.webp", rating: 4.5, reviews: 334, description: "Warm and cozy pullover hoodie with a fleece-lined interior. Perfect for cool evenings and layering.", sizes: ["M", "L", "XL", "XXL"], colors: ["Grey", "Black", "Navy"], badge: "Bestseller" },

  // JACKETS
  { id: 14, name: "Denim Jacket", category: "jackets", price: 2499, originalPrice: 3999, image: "/images/jacket.jpg", rating: 4.5, reviews: 276, description: "Classic denim jacket with a structured fit and brass button detailing. A versatile wardrobe staple that goes with everything.", sizes: ["S", "M", "L", "XL"], colors: ["Blue", "Black"], badge: "" },

  // JEANS
  { id: 15, name: "Slim Fit Jeans", category: "jeans", price: 1799, originalPrice: 2999, image: "/images/jeans.jpg", rating: 4.3, reviews: 421, description: "Classic slim fit jeans with a mid-rise waist. Made with 98% cotton and 2% elastane for comfort and flexibility.", sizes: ["28", "30", "32", "34", "36"], colors: ["Blue", "Black", "Grey"], badge: "Bestseller" },

  // TROUSERS
  { id: 16, name: "Formal Trousers", category: "trousers", price: 1599, originalPrice: 2699, image: "/images/trousers.jpg", rating: 4.2, reviews: 178, description: "Sharp formal trousers with a tailored fit. Perfect for office and semi-formal occasions. Wrinkle-resistant fabric.", sizes: ["28", "30", "32", "34", "36", "38"], colors: ["Black", "Navy", "Charcoal"], badge: "" },

  // SHORTS
  { id: 17, name: "Cargo Shorts", category: "shorts", price: 899, originalPrice: 1499, image: "/images/shorts1.jpg", rating: 4.0, reviews: 156, description: "Comfortable cargo shorts with multiple pockets. Lightweight and durable — ideal for outdoor activities and casual wear.", sizes: ["S", "M", "L", "XL", "XXL"], colors: ["Khaki", "Olive", "Black"], badge: "" },

  // CASUAL WEAR
  { id: 18, name: "Weekend Casual Set", category: "casual", price: 1299, originalPrice: 2199, image: "/images/tshirt8.jpg", rating: 4.3, reviews: 189, description: "A relaxed casual look for the weekend. Soft fabric, easy-fit styling — your go-to for lazy Sundays and outings.", sizes: ["S", "M", "L", "XL"], colors: ["Multiple"], badge: "" },

  // FORMAL WEAR
  { id: 19, name: "Business Formal Shirt", category: "formal", price: 1499, originalPrice: 2499, image: "/images/tshirt10.jpg", rating: 4.5, reviews: 267, description: "Sharp business formal shirt with a slim fit and premium cotton blend. Stays crisp throughout the day.", sizes: ["S", "M", "L", "XL", "XXL"], colors: ["White", "Light Blue", "Lavender"], badge: "Office Pick" },

  // ETHNIC WEAR
  { id: 20, name: "Kurta Pyjama Set", category: "ethnic", price: 1999, originalPrice: 3299, image: "/images/ethnic.webp", rating: 4.6, reviews: 342, description: "Elegant cotton kurta pyjama set — perfect for festivals, weddings, and traditional occasions. Features intricate detailing.", sizes: ["S", "M", "L", "XL", "XXL"], colors: ["White", "Cream", "Sky Blue"], badge: "Festival Special" },

  // SPORTSWEAR
  { id: 21, name: "Performance Sports Tee", category: "sportswear", price: 999, originalPrice: 1699, image: "/images/tshirt11.webp", rating: 4.4, reviews: 398, description: "High-performance sports tee with moisture-wicking technology. Lightweight, breathable, and built for your active lifestyle.", sizes: ["S", "M", "L", "XL", "XXL"], colors: ["Red", "Black", "Blue"], badge: "" },

  // ACCESSORIES
  { id: 22, name: "Classic Leather Belt", category: "accessories", price: 699, originalPrice: 1199, image: "/images/accessorie1.webp", rating: 4.1, reviews: 213, description: "Genuine leather belt with a classic pin-buckle design. Pairs well with both formal and casual outfits.", sizes: ["32", "34", "36", "38", "40"], colors: ["Black", "Brown"], badge: "" },
];

export const featuredProducts = products.filter(p => p.badge !== "").slice(0, 6);
