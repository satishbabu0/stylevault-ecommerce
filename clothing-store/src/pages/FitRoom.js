// ==========================================
// FIT ROOM PAGE - src/pages/FitRoom.js
// ==========================================

import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { products } from '../data/products';
import './FitRoom.css';

const BODY_TYPES = [
  { id: 'slim', label: 'Slim', icon: '🧍', desc: 'Lean & tall build' },
  { id: 'athletic', label: 'Athletic', icon: '💪', desc: 'Muscular & fit' },
  { id: 'regular', label: 'Regular', icon: '🙂', desc: 'Average build' },
  { id: 'heavy', label: 'Heavy', icon: '🙋', desc: 'Broad & stocky' },
];

const SKIN_TONES = [
  { id: 'fair', label: 'Fair', color: '#f5d5b8' },
  { id: 'medium', label: 'Medium', color: '#c68642' },
  { id: 'tan', label: 'Tan', color: '#8d5524' },
  { id: 'dark', label: 'Dark', color: '#4a2c0a' },
];

const AVATAR_CLOTHES = {
  tshirts:    { shape: 'tshirt',   label: 'T-Shirt' },
  shirts:     { shape: 'shirt',    label: 'Shirt' },
  hoodies:    { shape: 'hoodie',   label: 'Hoodie' },
  jackets:    { shape: 'jacket',   label: 'Jacket' },
  jeans:      { shape: 'pants',    label: 'Jeans' },
  trousers:   { shape: 'pants',    label: 'Trousers' },
  shorts:     { shape: 'shorts',   label: 'Shorts' },
  ethnic:     { shape: 'kurta',    label: 'Kurta' },
  casual:     { shape: 'tshirt',   label: 'Casual' },
  formal:     { shape: 'shirt',    label: 'Formal' },
  sportswear: { shape: 'tshirt',   label: 'Sports' },
  accessories:{ shape: 'belt',     label: 'Belt' },
};

const COLOR_MAP = {
  'Black': '#1a1a1a', 'White': '#f5f5f5', 'Navy': '#1a2c5b',
  'Grey': '#888', 'Blue': '#2e6da4', 'Red': '#c0392b',
  'Maroon': '#7b0000', 'Beige': '#d9b99b', 'Khaki': '#c3a882',
  'Olive': '#6b6b2a', 'Charcoal': '#444', 'Brown': '#6d4c41',
  'Cream': '#f5e6c8', 'Sky Blue': '#7ec8e3', 'Light Blue': '#a8d5ea',
  'Lavender': '#b48ecf', 'Multiple': '#c084fc', 'Blue/White': '#4a90d9',
};

function getClothColor(product, selectedColor) {
  const col = selectedColor || (product.colors && product.colors[0]);
  return COLOR_MAP[col] || '#3b82f6';
}

// SVG Avatar + Clothes
function Avatar({ bodyType, skinTone, wornItems }) {
  const skin = skinTone?.color || '#c68642';
  const hairColor = skinTone?.id === 'fair' ? '#5c3d1e' : '#1a1a1a';
  const isHeavy = bodyType?.id === 'heavy';
  const isSlim = bodyType?.id === 'slim';
  const isAthletic = bodyType?.id === 'athletic';

  const shoulderW = isHeavy ? 80 : isAthletic ? 74 : isSlim ? 58 : 68;
  const waistW = isHeavy ? 74 : isAthletic ? 60 : isSlim ? 44 : 58;
  const hipW = isHeavy ? 78 : isAthletic ? 66 : isSlim ? 52 : 64;
  const torsoH = isSlim ? 95 : 88;

  const top = wornItems.find(i => ['tshirts','shirts','hoodies','jackets','casual','formal','sportswear','ethnic'].includes(i.category));
  const bottom = wornItems.find(i => ['jeans','trousers','shorts'].includes(i.category));

  const topColor = top ? getClothColor(top.product, top.selectedColor) : null;
  const bottomColor = bottom ? getClothColor(bottom.product, bottom.selectedColor) : skin;
  const pantsColor = bottomColor === skin ? '#1a3a5c' : bottomColor;

  const isShorts = bottom?.category === 'shorts';
  const isKurta = top?.category === 'ethnic';

  return (
    <svg viewBox="0 0 200 400" xmlns="http://www.w3.org/2000/svg" className="avatar-svg">
      {/* Shadow */}
      <ellipse cx="100" cy="395" rx="40" ry="6" fill="rgba(0,0,0,0.12)" />

      {/* LEGS */}
      {/* Left leg */}
      <rect x={100 - hipW/2} y={240} width={hipW/2 - 2} height={isShorts ? 40 : 110} rx="8" fill={pantsColor} />
      {/* Right leg */}
      <rect x="102" y={240} width={hipW/2 - 2} height={isShorts ? 40 : 110} rx="8" fill={pantsColor} />

      {/* Shoes */}
      {!isShorts && <>
        <ellipse cx={100 - hipW/4} cy="354" rx="18" ry="8" fill="#2c2c2c" />
        <ellipse cx={100 + hipW/4} cy="354" rx="18" ry="8" fill="#2c2c2c" />
      </>}
      {isShorts && <>
        {/* Bare legs */}
        <rect x={100 - hipW/2} y={280} width={hipW/2 - 2} height="74" rx="8" fill={skin} />
        <rect x="102" y={280} width={hipW/2 - 2} height="74" rx="8" fill={skin} />
        <ellipse cx={100 - hipW/4} cy="354" rx="18" ry="8" fill="#2c2c2c" />
        <ellipse cx={100 + hipW/4} cy="354" rx="18" ry="8" fill="#2c2c2c" />
      </>}

      {/* TORSO / BODY */}
      {topColor ? (
        <>
          {/* Shirt body */}
          <path
            d={`M${100 - shoulderW/2},155 
               C${100 - shoulderW/2 - 10},160 ${100 - waistW/2 - 6},${155 + torsoH*0.4} ${100 - waistW/2},${155 + torsoH}
               L${100 + waistW/2},${155 + torsoH}
               C${100 + waistW/2 + 6},${155 + torsoH*0.4} ${100 + shoulderW/2 + 10},160 ${100 + shoulderW/2},155 Z`}
            fill={topColor}
          />
          {/* Collar */}
          {isKurta ? (
            <path d={`M92,155 L100,178 L108,155`} fill="none" stroke="rgba(255,255,255,0.6)" strokeWidth="2"/>
          ) : top?.category === 'hoodies' || top?.category === 'jackets' ? (
            <path d={`M88,155 L100,170 L112,155`} fill="rgba(0,0,0,0.2)" />
          ) : (
            <path d={`M93,155 L100,165 L107,155`} fill="rgba(255,255,255,0.3)" />
          )}
          {/* Sleeves */}
          <path
            d={`M${100 - shoulderW/2},155 L${100 - shoulderW/2 - 22},${top?.category === 'hoodies' || top?.category === 'jackets' ? 210 : 195} L${100 - shoulderW/2 - 10},${top?.category === 'hoodies' || top?.category === 'jackets' ? 212 : 196} L${100 - shoulderW/2},158 Z`}
            fill={topColor} stroke="rgba(0,0,0,0.08)" strokeWidth="1"
          />
          <path
            d={`M${100 + shoulderW/2},155 L${100 + shoulderW/2 + 22},${top?.category === 'hoodies' || top?.category === 'jackets' ? 210 : 195} L${100 + shoulderW/2 + 10},${top?.category === 'hoodies' || top?.category === 'jackets' ? 212 : 196} L${100 + shoulderW/2},158 Z`}
            fill={topColor} stroke="rgba(0,0,0,0.08)" strokeWidth="1"
          />
          {/* Hoodie pocket */}
          {(top?.category === 'hoodies') && (
            <rect x="86" y="215" width="28" height="18" rx="4" fill="rgba(0,0,0,0.15)" />
          )}
          {/* Jacket zip/buttons */}
          {top?.category === 'jackets' && (
            <>
              <line x1="100" y1="165" x2="100" y2="248" stroke="rgba(0,0,0,0.2)" strokeWidth="2" />
              <rect x="83" y="157" width="14" height={torsoH} rx="2" fill="rgba(0,0,0,0.1)" />
              <rect x="103" y="157" width="14" height={torsoH} rx="2" fill="rgba(0,0,0,0.1)" />
            </>
          )}
          {/* Kurta length extension */}
          {isKurta && (
            <path
              d={`M${100 - waistW/2},${155 + torsoH} L${100 - waistW/2 - 4},${155 + torsoH + 40} L${100 + waistW/2 + 4},${155 + torsoH + 40} L${100 + waistW/2},${155 + torsoH} Z`}
              fill={topColor}
            />
          )}
        </>
      ) : (
        /* Bare torso */
        <path
          d={`M${100 - shoulderW/2},155 
             C${100 - shoulderW/2 - 10},160 ${100 - waistW/2 - 6},${155 + torsoH*0.4} ${100 - waistW/2},${155 + torsoH}
             L${100 + waistW/2},${155 + torsoH}
             C${100 + waistW/2 + 6},${155 + torsoH*0.4} ${100 + shoulderW/2 + 10},160 ${100 + shoulderW/2},155 Z`}
          fill={skin}
        />
      )}

      {/* Bare arms if no top */}
      {!topColor && <>
        <path d={`M${100 - shoulderW/2},158 L${100 - shoulderW/2 - 18},210 L${100 - shoulderW/2 - 8},211 L${100 - shoulderW/2},160 Z`} fill={skin} />
        <path d={`M${100 + shoulderW/2},158 L${100 + shoulderW/2 + 18},210 L${100 + shoulderW/2 + 8},211 L${100 + shoulderW/2},160 Z`} fill={skin} />
      </>}

      {/* NECK */}
      <rect x="91" y="135" width="18" height="25" rx="5" fill={skin} />

      {/* HEAD */}
      <ellipse cx="100" cy="118" rx="32" ry="35" fill={skin} />

      {/* Hair */}
      <ellipse cx="100" cy="90" rx="32" ry="18" fill={hairColor} />
      <rect x="68" y="88" width="64" height="12" fill={hairColor} />
      <ellipse cx="68" cy="102" rx="8" ry="14" fill={hairColor} />
      <ellipse cx="132" cy="102" rx="8" ry="14" fill={hairColor} />

      {/* Face */}
      {/* Eyes */}
      <ellipse cx="89" cy="118" rx="5" ry="5.5" fill="white" />
      <ellipse cx="111" cy="118" rx="5" ry="5.5" fill="white" />
      <ellipse cx="89" cy="119" rx="3" ry="3" fill="#2c2c2c" />
      <ellipse cx="111" cy="119" rx="3" ry="3" fill="#2c2c2c" />
      <ellipse cx="90" cy="118" rx="1.2" ry="1.2" fill="white" />
      <ellipse cx="112" cy="118" rx="1.2" ry="1.2" fill="white" />

      {/* Eyebrows */}
      <path d="M83,112 Q89,109 95,112" stroke={hairColor} strokeWidth="2" fill="none" strokeLinecap="round" />
      <path d="M105,112 Q111,109 117,112" stroke={hairColor} strokeWidth="2" fill="none" strokeLinecap="round" />

      {/* Nose */}
      <path d="M100,122 Q97,130 100,132 Q103,130 100,122" fill="rgba(0,0,0,0.1)" />

      {/* Smile */}
      <path d="M91,138 Q100,145 109,138" stroke="#c0695e" strokeWidth="2" fill="none" strokeLinecap="round" />

      {/* Ears */}
      <ellipse cx="68" cy="118" rx="6" ry="9" fill={skin} />
      <ellipse cx="132" cy="118" rx="6" ry="9" fill={skin} />
    </svg>
  );
}

// ---- Main FitRoom Component ----
export default function FitRoom({ onAddToCart }) {
  const navigate = useNavigate();
  const [step, setStep] = useState(1); // 1=build avatar, 2=try clothes
  const [bodyType, setBodyType] = useState(BODY_TYPES[2]);
  const [skinTone, setSkinTone] = useState(SKIN_TONES[1]);
  const [height, setHeight] = useState(175);
  const [weight, setWeight] = useState(70);
  const [wornItems, setWornItems] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('tshirts');
  const [selectedColors, setSelectedColors] = useState({});
  const [addedToCart, setAddedToCart] = useState({});
  const [notification, setNotification] = useState('');
  const [activeTab, setActiveTab] = useState('top'); // top | bottom | outerwear

  const filteredProducts = products.filter(p => p.category === selectedCategory);

  const categoryTabs = {
    top: ['tshirts', 'shirts', 'ethnic', 'casual', 'formal', 'sportswear'],
    bottom: ['jeans', 'trousers', 'shorts'],
    outerwear: ['hoodies', 'jackets'],
  };

  const handleWear = (product) => {
    const cat = product.category;
    const isTop = categoryTabs.top.includes(cat) || categoryTabs.outerwear.includes(cat);
    const isBottom = categoryTabs.bottom.includes(cat);

    setWornItems(prev => {
      // Remove same slot type first
      const filtered = prev.filter(item => {
        const iC = item.category;
        const iIsTop = categoryTabs.top.includes(iC) || categoryTabs.outerwear.includes(iC);
        const iIsBottom = categoryTabs.bottom.includes(iC);
        if (isTop && iIsTop) return false;
        if (isBottom && iIsBottom) return false;
        return true;
      });

      // Toggle off if already wearing same product
      if (prev.find(i => i.product.id === product.id)) {
        return filtered;
      }
      return [...filtered, { product, category: cat, selectedColor: selectedColors[product.id] || product.colors[0] }];
    });
  };

  const isWorn = (productId) => wornItems.some(i => i.product.id === productId);

  const handleColorChange = (productId, color) => {
    setSelectedColors(prev => ({ ...prev, [productId]: color }));
    setWornItems(prev => prev.map(item =>
      item.product.id === productId ? { ...item, selectedColor: color } : item
    ));
  };

  const handleAddToCart = (product) => {
    if (onAddToCart) {
      onAddToCart({ ...product, selectedSize: product.sizes[0], selectedColor: selectedColors[product.id] || product.colors[0] });
    }
    setAddedToCart(prev => ({ ...prev, [product.id]: true }));
    setNotification(`✅ ${product.name} added to cart!`);
    setTimeout(() => setNotification(''), 2500);
  };

  const handleAddAllToCart = () => {
    wornItems.forEach(({ product }) => {
      if (onAddToCart) {
        onAddToCart({ ...product, selectedSize: product.sizes[0], selectedColor: selectedColors[product.id] || product.colors[0] });
      }
    });
    setNotification(`🛒 ${wornItems.length} item${wornItems.length > 1 ? 's' : ''} added to cart!`);
    setTimeout(() => setNotification(''), 2500);
  };

  const getSizeRecommendation = () => {
    if (weight < 55 || height < 163) return 'S';
    if (weight < 70 || height < 170) return 'M';
    if (weight < 85 || height < 178) return 'L';
    if (weight < 100) return 'XL';
    return 'XXL';
  };

  const recommendedSize = getSizeRecommendation();

  return (
    <div className="fitroom-page">
      {/* Header */}
      <div className="fitroom-header">
        <div className="fitroom-header-inner container">
          <div className="fitroom-title-group">
            <span className="fitroom-badge-label">NEW</span>
            <h1 className="fitroom-title">🧍 FitRoom</h1>
            <p className="fitroom-subtitle">Virtual Try-On Studio — see clothes on your avatar before you buy</p>
          </div>
          <div className="fitroom-steps">
            <div className={`fitroom-step ${step >= 1 ? 'active' : ''} ${step > 1 ? 'done' : ''}`}>
              <span className="step-num">1</span>
              <span className="step-label">Build Avatar</span>
            </div>
            <div className="step-connector" />
            <div className={`fitroom-step ${step >= 2 ? 'active' : ''}`}>
              <span className="step-num">2</span>
              <span className="step-label">Try Clothes</span>
            </div>
          </div>
        </div>
      </div>

      {/* Toast notification */}
      {notification && <div className="fitroom-toast">{notification}</div>}

      <div className="fitroom-body container">

        {/* ======= STEP 1: Avatar Builder ======= */}
        {step === 1 && (
          <div className="fitroom-step1">
            <div className="step1-left">
              <div className="avatar-preview-card">
                <div className="avatar-preview-label">Your Avatar</div>
                <Avatar bodyType={bodyType} skinTone={skinTone} wornItems={[]} />
                <div className="avatar-meta">
                  <span>{height} cm · {weight} kg</span>
                  <span className="size-tag">Recommended: <strong>{recommendedSize}</strong></span>
                </div>
              </div>
            </div>

            <div className="step1-right">
              <div className="builder-section">
                <h3 className="builder-heading">👤 Body Type</h3>
                <div className="body-type-grid">
                  {BODY_TYPES.map(bt => (
                    <button
                      key={bt.id}
                      className={`body-type-btn ${bodyType.id === bt.id ? 'selected' : ''}`}
                      onClick={() => setBodyType(bt)}
                    >
                      <span className="bt-icon">{bt.icon}</span>
                      <span className="bt-label">{bt.label}</span>
                      <span className="bt-desc">{bt.desc}</span>
                    </button>
                  ))}
                </div>
              </div>

              <div className="builder-section">
                <h3 className="builder-heading">🎨 Skin Tone</h3>
                <div className="skin-tone-row">
                  {SKIN_TONES.map(st => (
                    <button
                      key={st.id}
                      className={`skin-btn ${skinTone.id === st.id ? 'selected' : ''}`}
                      style={{ background: st.color }}
                      onClick={() => setSkinTone(st)}
                      title={st.label}
                    >
                      {skinTone.id === st.id && <span className="skin-check">✓</span>}
                    </button>
                  ))}
                  <span className="skin-label">{skinTone.label}</span>
                </div>
              </div>

              <div className="builder-section">
                <h3 className="builder-heading">📏 Measurements</h3>
                <div className="measurements-grid">
                  <div className="measure-group">
                    <label>Height: <strong>{height} cm</strong></label>
                    <input type="range" min="150" max="200" value={height}
                      onChange={e => setHeight(Number(e.target.value))} className="measure-slider" />
                    <div className="measure-range"><span>150 cm</span><span>200 cm</span></div>
                  </div>
                  <div className="measure-group">
                    <label>Weight: <strong>{weight} kg</strong></label>
                    <input type="range" min="40" max="130" value={weight}
                      onChange={e => setWeight(Number(e.target.value))} className="measure-slider" />
                    <div className="measure-range"><span>40 kg</span><span>130 kg</span></div>
                  </div>
                </div>
                <div className="size-recommendation">
                  <span>📐 Based on your measurements, we recommend size:</span>
                  <strong className="rec-size">{recommendedSize}</strong>
                </div>
              </div>

              <button className="btn-next" onClick={() => setStep(2)}>
                Continue to Try-On →
              </button>
            </div>
          </div>
        )}

        {/* ======= STEP 2: Try Clothes ======= */}
        {step === 2 && (
          <div className="fitroom-step2">
            {/* Left: Avatar */}
            <div className="tryon-left">
              <div className="avatar-tryon-card">
                <div className="avatar-preview-label">
                  🧍 Your Look
                  <button className="edit-avatar-btn" onClick={() => setStep(1)}>✏️ Edit Avatar</button>
                </div>
                <Avatar bodyType={bodyType} skinTone={skinTone} wornItems={wornItems} />
                <div className="avatar-meta">
                  <span>{bodyType.label} · {skinTone.label}</span>
                  <span className="size-tag">Size: <strong>{recommendedSize}</strong></span>
                </div>

                {/* Worn items summary */}
                {wornItems.length > 0 && (
                  <div className="worn-summary">
                    <div className="worn-summary-title">Wearing {wornItems.length} item{wornItems.length > 1 ? 's' : ''}</div>
                    {wornItems.map(({ product, selectedColor }) => (
                      <div key={product.id} className="worn-item-row">
                        <img src={product.image} alt={product.name} className="worn-thumb" />
                        <div className="worn-item-info">
                          <span className="worn-name">{product.name}</span>
                          <span className="worn-price">₹{product.price.toLocaleString()}</span>
                        </div>
                        <button className="worn-remove" onClick={() => setWornItems(prev => prev.filter(i => i.product.id !== product.id))}>✕</button>
                      </div>
                    ))}
                    <div className="worn-total">
                      Total: ₹{wornItems.reduce((s, { product }) => s + product.price, 0).toLocaleString()}
                    </div>
                    <button className="btn-add-all" onClick={handleAddAllToCart}>
                      🛒 Add All to Cart
                    </button>
                  </div>
                )}

                {wornItems.length === 0 && (
                  <div className="worn-empty">
                    <span>👆 Select clothes from the right to try them on</span>
                  </div>
                )}
              </div>
            </div>

            {/* Right: Clothes selector */}
            <div className="tryon-right">
              {/* Category tabs */}
              <div className="category-tab-group">
                {Object.keys(categoryTabs).map(tab => (
                  <button
                    key={tab}
                    className={`cat-tab-btn ${activeTab === tab ? 'active' : ''}`}
                    onClick={() => { setActiveTab(tab); setSelectedCategory(categoryTabs[tab][0]); }}
                  >
                    {tab === 'top' ? '👕 Tops' : tab === 'bottom' ? '👖 Bottoms' : '🧥 Outerwear'}
                  </button>
                ))}
              </div>

              {/* Sub-category pills */}
              <div className="sub-cat-pills">
                {categoryTabs[activeTab].map(cat => (
                  <button
                    key={cat}
                    className={`sub-cat-pill ${selectedCategory === cat ? 'active' : ''}`}
                    onClick={() => setSelectedCategory(cat)}
                  >
                    {AVATAR_CLOTHES[cat]?.label || cat}
                  </button>
                ))}
              </div>

              {/* Product grid */}
              <div className="tryon-product-grid">
                {filteredProducts.map(product => {
                  const worn = isWorn(product.id);
                  const selectedColor = selectedColors[product.id] || product.colors[0];
                  const added = addedToCart[product.id];
                  const discount = Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100);

                  return (
                    <div key={product.id} className={`tryon-product-card ${worn ? 'worn' : ''}`}>
                      {product.badge && <span className="tryon-badge">{product.badge}</span>}
                      {worn && <span className="wearing-tag">✓ Wearing</span>}

                      <div className="tryon-img-wrap" onClick={() => handleWear(product)}>
                        <img src={product.image} alt={product.name} />
                        <div className="tryon-overlay">
                          <span>{worn ? '✕ Remove' : '👕 Try On'}</span>
                        </div>
                      </div>

                      <div className="tryon-card-body">
                        <h4 className="tryon-name">{product.name}</h4>
                        <div className="tryon-price-row">
                          <span className="tryon-price">₹{product.price.toLocaleString()}</span>
                          <span className="tryon-discount">{discount}% off</span>
                        </div>

                        {/* Color selector */}
                        {product.colors.length > 1 && (
                          <div className="tryon-colors">
                            {product.colors.map(color => (
                              <button
                                key={color}
                                className={`color-dot ${selectedColor === color ? 'active' : ''}`}
                                style={{ background: COLOR_MAP[color] || '#999' }}
                                title={color}
                                onClick={() => handleColorChange(product.id, color)}
                              />
                            ))}
                          </div>
                        )}

                        <div className="tryon-actions">
                          <button
                            className={`btn-tryon ${worn ? 'btn-remove' : ''}`}
                            onClick={() => handleWear(product)}
                          >
                            {worn ? '✕ Remove' : '👕 Try On'}
                          </button>
                          <button
                            className={`btn-cart-small ${added ? 'added' : ''}`}
                            onClick={() => handleAddToCart(product)}
                          >
                            {added ? '✓' : '🛒'}
                          </button>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Bottom CTA */}
      <div className="fitroom-footer-bar">
        <div className="container fitroom-footer-inner">
          <span>💡 <strong>Pro tip:</strong> Mix & match tops and bottoms to build your complete outfit!</span>
          <button className="btn-go-shop" onClick={() => navigate('/products')}>Browse All Products →</button>
        </div>
      </div>
    </div>
  );
}
