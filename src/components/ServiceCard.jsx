import React from 'react';
import { Calendar, Clock, Sparkles } from 'lucide-react';

const ServiceCard = ({ service, onSelectService }) => {
  return (
    <div className="glass-card" style={styles.card}>
      {/* Service Image */}
      <div style={styles.imageWrapper}>
        <img src={service.image} alt={service.name} style={styles.image} loading="lazy" />
        {service.popular && (
          <span className="badge-luxury" style={styles.popularBadge}>
            <Sparkles size={12} /> POPULAR
          </span>
        )}
        <span style={styles.categoryBadge}>{service.categoryLabel}</span>
      </div>

      {/* Card Content */}
      <div style={styles.body}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '0.5rem' }}>
          <h3 style={styles.title}>{service.name}</h3>
          {service.duration && (
            <span style={styles.duration}>
              <Clock size={12} /> {service.duration}
            </span>
          )}
        </div>
        
        <p style={styles.desc}>{service.description}</p>

        {/* Card Footer: Price & CTA */}
        <div style={styles.footer}>
          <div>
            <span style={styles.priceLabel}>Starting from</span>
            <div style={styles.price}>₹{service.startingPrice.toLocaleString()}</div>
          </div>
          <button
            onClick={() => onSelectService(service)}
            className="btn btn-primary btn-sm"
          >
            <Calendar size={14} /> Book Now
          </button>
        </div>
      </div>
    </div>
  );
};

const styles = {
  card: {
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    overflow: 'hidden',
    transition: 'all 0.35s ease',
  },
  imageWrapper: {
    position: 'relative',
    height: '210px',
    overflow: 'hidden',
    backgroundColor: '#ebdcd5',
  },
  image: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    transition: 'transform 0.5s ease',
  },
  popularBadge: {
    position: 'absolute',
    top: '12px',
    left: '12px',
    zIndex: 2,
  },
  categoryBadge: {
    position: 'absolute',
    bottom: '12px',
    right: '12px',
    backgroundColor: 'rgba(44, 31, 29, 0.75)',
    color: '#fffdfa',
    fontSize: '0.72rem',
    fontWeight: '500',
    padding: '0.2rem 0.6rem',
    borderRadius: '4px',
    backdropFilter: 'blur(4px)',
  },
  body: {
    padding: '1.5rem',
    display: 'flex',
    flexDirection: 'column',
    flexGrow: 1,
  },
  title: {
    fontFamily: "'Playfair Display', serif",
    fontSize: '1.25rem',
    color: 'var(--color-dark)',
    lineHeight: '1.3',
    marginBottom: '0.4rem',
  },
  duration: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '0.2rem',
    fontSize: '0.75rem',
    color: '#d4af37',
    fontWeight: '500',
    flexShrink: 0,
  },
  desc: {
    fontSize: '0.88rem',
    color: 'var(--color-dark-muted)',
    lineHeight: '1.6',
    marginBottom: '1.5rem',
    flexGrow: 1,
  },
  footer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingTop: '1rem',
    borderTop: '1px solid var(--color-border)',
  },
  priceLabel: {
    fontSize: '0.72rem',
    color: 'var(--color-dark-muted)',
    textTransform: 'uppercase',
    letterSpacing: '0.5px',
    display: 'block',
  },
  price: {
    fontFamily: "'Playfair Display', serif",
    fontSize: '1.35rem',
    fontWeight: '700',
    color: '#d4af37',
  },
};

export default ServiceCard;
