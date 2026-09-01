import React from 'react';
import { Sparkles, ArrowRight } from 'lucide-react';
import { beforeAfterTransformations } from '../data/gallery';

const BeforeAfter = () => {
  return (
    <div style={styles.grid}>
      {beforeAfterTransformations.map((item) => (
        <div key={item.id} className="glass-card" style={styles.card}>
          {/* Service Tag */}
          <div style={styles.header}>
            <span className="badge-luxury" style={{ fontSize: '0.7rem' }}>
              <Sparkles size={11} /> {item.service}
            </span>
            <h3 style={styles.title}>{item.title}</h3>
            <p style={styles.desc}>{item.description}</p>
          </div>

          {/* Visual Comparison Split */}
          <div className="before-after-visual-container" style={styles.visualContainer}>
            <div style={styles.imageBox}>
              <span style={styles.labelBefore}>BEFORE</span>
              <img src={item.beforeImg} alt={`${item.title} Before`} style={styles.img} loading="lazy" />
            </div>

            <div className="before-after-arrow" style={styles.arrowDivider}>
              <ArrowRight size={20} color="#9c6644" />
            </div>

            <div style={styles.imageBox}>
              <span style={styles.labelAfter}>AFTER</span>
              <img src={item.afterImg} alt={`${item.title} After`} style={styles.img} loading="lazy" />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

const styles = {
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
    gap: '2rem',
  },
  card: {
    padding: '1.8rem',
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: '#fffdfa',
  },
  header: {
    marginBottom: '1.2rem',
  },
  title: {
    fontFamily: "'Playfair Display', serif",
    fontSize: '1.3rem',
    color: '#2c1f1d',
    marginTop: '0.5rem',
    marginBottom: '0.3rem',
  },
  desc: {
    fontSize: '0.85rem',
    color: '#5c4642',
  },
  visualContainer: {
    display: 'grid',
    gridTemplateColumns: '1fr auto 1fr',
    alignItems: 'center',
    gap: '0.6rem',
    marginTop: 'auto',
  },
  imageBox: {
    position: 'relative',
    height: '180px',
    borderRadius: '12px',
    overflow: 'hidden',
    backgroundColor: '#ebdcd5',
  },
  img: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  },
  labelBefore: {
    position: 'absolute',
    top: '8px',
    left: '8px',
    backgroundColor: 'rgba(44, 31, 29, 0.8)',
    color: '#ffffff',
    fontSize: '0.65rem',
    fontWeight: '700',
    padding: '0.15rem 0.5rem',
    borderRadius: '4px',
    zIndex: 2,
  },
  labelAfter: {
    position: 'absolute',
    top: '8px',
    right: '8px',
    backgroundColor: '#d4af37',
    color: '#2c1f1d',
    fontSize: '0.65rem',
    fontWeight: '800',
    padding: '0.15rem 0.5rem',
    borderRadius: '4px',
    zIndex: 2,
  },
  arrowDivider: {
    width: '32px',
    height: '32px',
    borderRadius: '50%',
    backgroundColor: '#fdf5f2',
    border: '1px solid #ebdcd5',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
};

export default BeforeAfter;
