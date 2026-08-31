import React, { useEffect } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

const Lightbox = ({ item, items, onClose, onNavigate }) => {
  if (!item) return null;

  const currentIndex = items.findIndex((i) => i.id === item.id);

  const handlePrev = () => {
    const prevIdx = (currentIndex - 1 + items.length) % items.length;
    onNavigate(items[prevIdx]);
  };

  const handleNext = () => {
    const nextIdx = (currentIndex + 1) % items.length;
    onNavigate(items[nextIdx]);
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') handlePrev();
      if (e.key === 'ArrowRight') handleNext();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentIndex, items]);

  return (
    <div style={styles.overlay} onClick={onClose}>
      <div style={styles.content} onClick={(e) => e.stopPropagation()}>
        {/* Close Button */}
        <button style={styles.closeBtn} onClick={onClose} aria-label="Close Lightbox">
          <X size={26} color="#ffffff" />
        </button>

        {/* Previous Button */}
        <button style={styles.prevBtn} onClick={handlePrev} aria-label="Previous Image">
          <ChevronLeft size={32} color="#ffffff" />
        </button>

        {/* Main Image Container */}
        <div style={styles.imageBox}>
          <img src={item.image} alt={item.title} style={styles.image} />
          <div style={styles.captionBar}>
            <h4 style={styles.captionTitle}>{item.title}</h4>
            {item.subtitle && <p style={styles.captionSubtitle}>{item.subtitle}</p>}
            <span style={styles.counter}>{currentIndex + 1} of {items.length}</span>
          </div>
        </div>

        {/* Next Button */}
        <button style={styles.nextBtn} onClick={handleNext} aria-label="Next Image">
          <ChevronRight size={32} color="#ffffff" />
        </button>
      </div>
    </div>
  );
};

const styles = {
  overlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100vw',
    height: '100vh',
    backgroundColor: 'rgba(20, 14, 13, 0.92)',
    backdropFilter: 'blur(10px)',
    zIndex: 10000,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '1.5rem',
  },
  content: {
    position: 'relative',
    maxWidth: '1000px',
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  closeBtn: {
    position: 'absolute',
    top: '-45px',
    right: 0,
    backgroundColor: 'rgba(255,255,255,0.15)',
    border: 'none',
    width: '42px',
    height: '42px',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    zIndex: 2,
  },
  prevBtn: {
    position: 'absolute',
    left: '-60px',
    backgroundColor: 'rgba(255,255,255,0.15)',
    border: 'none',
    width: '50px',
    height: '50px',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    zIndex: 2,
  },
  nextBtn: {
    position: 'absolute',
    right: '-60px',
    backgroundColor: 'rgba(255,255,255,0.15)',
    border: 'none',
    width: '50px',
    height: '50px',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    zIndex: 2,
  },
  imageBox: {
    borderRadius: '16px',
    overflow: 'hidden',
    backgroundColor: '#000',
    maxHeight: '80vh',
    display: 'flex',
    flexDirection: 'column',
    boxShadow: '0 25px 60px rgba(0,0,0,0.5)',
  },
  image: {
    maxHeight: '70vh',
    maxWidth: '100%',
    objectFit: 'contain',
  },
  captionBar: {
    backgroundColor: '#2c1f1d',
    padding: '1rem 1.5rem',
    color: '#fffdfa',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: '1rem',
  },
  captionTitle: {
    fontFamily: "'Playfair Display', serif",
    fontSize: '1.2rem',
    color: '#d4af37',
  },
  captionSubtitle: {
    fontSize: '0.85rem',
    color: 'rgba(255,253,250,0.75)',
  },
  counter: {
    fontSize: '0.8rem',
    color: '#d4a373',
    fontWeight: '500',
  },
};

export default Lightbox;
