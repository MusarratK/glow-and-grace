import React from 'react';
import { Check, Sparkles, Calendar } from 'lucide-react';

const PackageCard = ({ pkg, onSelectPackage }) => {
  return (
    <div
      className="glass-card"
      style={{
        ...styles.card,
        border: pkg.highlight ? '2px solid #d4af37' : '1px solid #ebdcd5',
        transform: pkg.highlight ? 'scale(1.02)' : 'none',
        boxShadow: pkg.highlight ? '0 20px 45px rgba(212, 175, 55, 0.25)' : 'var(--shadow-md)',
      }}
    >
      {/* Featured Badge Header */}
      {pkg.badge && (
        <div style={styles.badgeContainer}>
          <span className="badge-luxury" style={styles.badge}>
            <Sparkles size={13} /> {pkg.badge}
          </span>
        </div>
      )}

      {/* Header */}
      <div style={styles.header}>
        <h3 style={styles.title}>{pkg.name}</h3>
        <p style={styles.subtitle}>{pkg.subtitle}</p>
        
        <div style={styles.priceRow}>
          <span style={styles.currency}>₹</span>
          <span style={styles.price}>{pkg.price.toLocaleString()}</span>
          {pkg.priceSuffix && <span style={styles.priceSuffix}>{pkg.priceSuffix}</span>}
          {pkg.originalPrice && (
            <span style={styles.originalPrice}>₹{pkg.originalPrice.toLocaleString()}</span>
          )}
        </div>
        <p style={styles.desc}>{pkg.description}</p>
      </div>

      {/* Features List */}
      <div style={styles.featureSection}>
        <h4 style={styles.featureHeading}>Includes:</h4>
        <ul style={styles.featureList}>
          {pkg.features.map((feat, i) => (
            <li key={i} style={styles.featureItem}>
              <div style={styles.checkIcon}>
                <Check size={14} color="#9c6644" />
              </div>
              <span>{feat}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Footer CTA */}
      <div style={styles.cardFooter}>
        <button
          onClick={() => onSelectPackage(pkg)}
          className={`btn ${pkg.highlight ? 'btn-gold' : 'btn-primary'}`}
          style={{ width: '100%' }}
        >
          <Calendar size={16} /> {pkg.ctaText || 'Book Package'}
        </button>
      </div>
    </div>
  );
};

const styles = {
  card: {
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    padding: '2rem 1.8rem',
    position: 'relative',
    transition: 'all 0.35s ease',
    backgroundColor: 'var(--color-card-solid)',
  },
  badgeContainer: {
    position: 'absolute',
    top: '-15px',
    left: '50%',
    transform: 'translateX(-50%)',
  },
  badge: {
    padding: '0.4rem 1.1rem',
    fontSize: '0.78rem',
    letterSpacing: '1px',
    boxShadow: '0 4px 15px rgba(212, 175, 55, 0.3)',
  },
  header: {
    textAlign: 'center',
    marginBottom: '1.5rem',
    paddingBottom: '1.5rem',
    borderBottom: '1px solid var(--color-border)',
  },
  title: {
    fontFamily: "'Playfair Display', serif",
    fontSize: '1.6rem',
    color: 'var(--color-dark)',
    letterSpacing: '1px',
  },
  subtitle: {
    fontSize: '0.82rem',
    color: '#d4af37',
    fontWeight: '500',
    marginTop: '0.2rem',
    marginBottom: '1rem',
  },
  priceRow: {
    display: 'flex',
    alignItems: 'baseline',
    justifyContent: 'center',
    gap: '0.2rem',
    margin: '0.8rem 0',
  },
  currency: {
    fontFamily: "'Playfair Display', serif",
    fontSize: '1.5rem',
    fontWeight: '600',
    color: 'var(--color-dark)',
  },
  price: {
    fontFamily: "'Playfair Display', serif",
    fontSize: '3rem',
    fontWeight: '800',
    color: 'var(--color-dark)',
    lineHeight: '1',
  },
  priceSuffix: {
    fontFamily: "'Playfair Display', serif",
    fontSize: '1.8rem',
    fontWeight: '700',
    color: '#d4af37',
  },
  originalPrice: {
    fontSize: '1.1rem',
    color: '#888888',
    textDecoration: 'line-through',
    marginLeft: '0.5rem',
  },
  desc: {
    fontSize: '0.85rem',
    color: 'var(--color-dark-muted)',
    marginTop: '0.5rem',
  },
  featureSection: {
    flexGrow: 1,
    marginBottom: '2rem',
  },
  featureHeading: {
    fontSize: '0.85rem',
    textTransform: 'uppercase',
    letterSpacing: '1px',
    color: '#d4af37',
    marginBottom: '1rem',
  },
  featureList: {
    listStyle: 'none',
    display: 'flex',
    flexDirection: 'column',
    gap: '0.8rem',
  },
  featureItem: {
    display: 'flex',
    alignItems: 'flex-start',
    gap: '0.7rem',
    fontSize: '0.9rem',
    color: 'var(--color-dark)',
  },
  checkIcon: {
    width: '22px',
    height: '22px',
    borderRadius: '50%',
    backgroundColor: 'var(--color-input-bg)',
    border: '1px solid var(--color-border)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexShrink: 0,
    marginTop: '2px',
  },
  cardFooter: {
    marginTop: 'auto',
  },
};

export default PackageCard;
