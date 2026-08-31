import React, { useState } from 'react';
import { Sparkles, Eye } from 'lucide-react';
import { galleryCategories, galleryItems } from '../data/gallery';
import Lightbox from './Lightbox';

const GalleryGrid = ({ limit = 0 }) => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [activeLightboxItem, setActiveLightboxItem] = useState(null);

  const filteredItems = activeCategory === 'all'
    ? galleryItems
    : galleryItems.filter(item => item.category === activeCategory);

  const displayedItems = limit > 0 ? filteredItems.slice(0, limit) : filteredItems;

  return (
    <div>
      {/* Category Filter Tabs */}
      <div style={styles.filterBar}>
        {galleryCategories.map(cat => (
          <button
            key={cat.id}
            onClick={() => setActiveCategory(cat.id)}
            style={{
              ...styles.filterBtn,
              backgroundColor: activeCategory === cat.id ? '#2c1f1d' : 'transparent',
              color: activeCategory === cat.id ? '#fffdfa' : '#2c1f1d',
              borderColor: activeCategory === cat.id ? '#2c1f1d' : '#ebdcd5',
            }}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Gallery Grid */}
      <div style={styles.grid}>
        {displayedItems.map(item => (
          <div
            key={item.id}
            onClick={() => setActiveLightboxItem(item)}
            style={styles.gridItem}
            className="gallery-hover-card"
          >
            <img src={item.image} alt={item.title} style={styles.image} loading="lazy" />
            <div style={styles.overlay}>
              <div style={styles.eyeIcon}>
                <Eye size={22} color="#ffffff" />
              </div>
              <h4 style={styles.itemTitle}>{item.title}</h4>
              <p style={styles.itemSubtitle}>{item.subtitle}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox Viewer */}
      <Lightbox
        item={activeLightboxItem}
        items={filteredItems}
        onClose={() => setActiveLightboxItem(null)}
        onNavigate={(newItem) => setActiveLightboxItem(newItem)}
      />
    </div>
  );
};

const styles = {
  filterBar: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    gap: '0.6rem',
    marginBottom: '2.5rem',
  },
  filterBtn: {
    padding: '0.5rem 1.4rem',
    borderRadius: '9999px',
    border: '1px solid #ebdcd5',
    fontSize: '0.88rem',
    fontWeight: '500',
    cursor: 'pointer',
    transition: 'all 0.25s ease',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
    gap: '1.5rem',
  },
  gridItem: {
    position: 'relative',
    borderRadius: '16px',
    overflow: 'hidden',
    height: '280px',
    cursor: 'pointer',
    boxShadow: 'var(--shadow-sm)',
    backgroundColor: '#ebdcd5',
  },
  image: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    transition: 'transform 0.5s ease',
  },
  overlay: {
    position: 'absolute',
    inset: 0,
    backgroundColor: 'rgba(44, 31, 29, 0.65)',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-end',
    padding: '1.5rem',
    color: '#fffdfa',
    opacity: 0,
    transition: 'opacity 0.35s ease',
  },
  eyeIcon: {
    width: '44px',
    height: '44px',
    borderRadius: '50%',
    backgroundColor: 'rgba(212, 175, 55, 0.85)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 'auto',
  },
  itemTitle: {
    fontFamily: "'Playfair Display', serif",
    fontSize: '1.2rem',
    color: '#fffdfa',
    marginBottom: '0.2rem',
  },
  itemSubtitle: {
    fontSize: '0.82rem',
    color: 'rgba(255, 253, 250, 0.8)',
  },
};

// Hover CSS rules
if (typeof document !== 'undefined') {
  const galleryStyle = document.createElement('style');
  galleryStyle.innerHTML = `
    .gallery-hover-card:hover img { transform: scale(1.08); }
    .gallery-hover-card:hover div[style*="overlay"] { opacity: 1 !important; }
  `;
  document.head.appendChild(galleryStyle);
}

export default GalleryGrid;
