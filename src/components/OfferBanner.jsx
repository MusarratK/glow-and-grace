import React, { useState, useEffect } from 'react';
import { Sparkles, Clock, Tag, Gift } from 'lucide-react';
import { specialOfferData } from '../data/offers';

const OfferBanner = ({ onClaimOffer }) => {
  // Countdown Timer State in seconds (48 hours)
  const [timeLeft, setTimeLeft] = useState(specialOfferData.countdownHours * 3600);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const hours = Math.floor(timeLeft / 3600);
  const minutes = Math.floor((timeLeft % 3600) / 60);
  const seconds = timeLeft % 60;

  return (
    <div style={styles.banner}>
      <div style={styles.content}>
        {/* Badge & Heading */}
        <div style={styles.leftCol}>
          <span className="badge-luxury" style={{ backgroundColor: '#2c1f1d', color: '#d4af37', borderColor: '#d4af37' }}>
            <Gift size={13} /> {specialOfferData.discountBadge}
          </span>
          <h2 style={styles.title}>{specialOfferData.title}</h2>
          <p style={styles.desc}>{specialOfferData.description}</p>
          
          <div style={styles.codeRow}>
            <span style={styles.codeLabel}>Use Promo Code:</span>
            <span style={styles.codeBox}><Tag size={14} /> {specialOfferData.code}</span>
          </div>
        </div>

        {/* Timer & Action */}
        <div style={styles.rightCol}>
          <div style={styles.timerTitle}>
            <Clock size={16} color="#d4af37" /> Offer Expires In:
          </div>

          <div style={styles.timerRow}>
            <div style={styles.timeBox}>
              <span style={styles.timeNum}>{String(hours).padStart(2, '0')}</span>
              <span style={styles.timeLabel}>HOURS</span>
            </div>
            <span style={styles.colon}>:</span>
            <div style={styles.timeBox}>
              <span style={styles.timeNum}>{String(minutes).padStart(2, '0')}</span>
              <span style={styles.timeLabel}>MINS</span>
            </div>
            <span style={styles.colon}>:</span>
            <div style={styles.timeBox}>
              <span style={styles.timeNum}>{String(seconds).padStart(2, '0')}</span>
              <span style={styles.timeLabel}>SECS</span>
            </div>
          </div>

          <button
            onClick={() => onClaimOffer(specialOfferData.code)}
            className="btn btn-gold btn-lg"
            style={{ width: '100%', marginTop: '1.2rem' }}
          >
            <Sparkles size={18} /> {specialOfferData.buttonText}
          </button>
        </div>
      </div>
    </div>
  );
};

const styles = {
  banner: {
    background: 'linear-gradient(135deg, #2c1f1d 0%, #4a3532 100%)',
    borderRadius: '24px',
    padding: '3rem 2.5rem',
    color: '#fffdfa',
    boxShadow: '0 20px 50px rgba(44, 31, 29, 0.25)',
    border: '1px solid rgba(212, 175, 55, 0.4)',
    position: 'relative',
    overflow: 'hidden',
  },
  content: {
    display: 'grid',
    gridTemplateColumns: '1.2fr 0.8fr',
    gap: '2.5rem',
    alignItems: 'center',
  },
  leftCol: {},
  title: {
    fontFamily: "'Playfair Display', serif",
    fontSize: '2.4rem',
    color: '#fffdfa',
    marginTop: '0.8rem',
    marginBottom: '0.5rem',
  },
  desc: {
    fontSize: '1rem',
    color: 'rgba(255, 253, 250, 0.85)',
    marginBottom: '1.5rem',
    lineHeight: '1.6',
  },
  codeRow: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.8rem',
    flexWrap: 'wrap',
  },
  codeLabel: {
    fontSize: '0.85rem',
    color: '#d4a373',
  },
  codeBox: {
    backgroundColor: 'rgba(212, 175, 55, 0.15)',
    border: '1px dashed #d4af37',
    color: '#d4af37',
    fontSize: '0.95rem',
    fontWeight: '700',
    padding: '0.35rem 0.9rem',
    borderRadius: '6px',
    display: 'inline-flex',
    alignItems: 'center',
    gap: '0.4rem',
    letterSpacing: '1px',
  },
  rightCol: {
    backgroundColor: 'rgba(255, 255, 255, 0.06)',
    padding: '2rem',
    borderRadius: '16px',
    border: '1px solid rgba(255, 255, 255, 0.12)',
    textAlign: 'center',
  },
  timerTitle: {
    fontSize: '0.88rem',
    fontWeight: '600',
    color: 'rgba(255, 253, 250, 0.9)',
    textTransform: 'uppercase',
    letterSpacing: '1px',
    marginBottom: '1rem',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '0.4rem',
  },
  timerRow: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '0.6rem',
  },
  timeBox: {
    backgroundColor: '#fffdfa',
    color: '#2c1f1d',
    padding: '0.6rem 0.9rem',
    borderRadius: '10px',
    minWidth: '65px',
  },
  timeNum: {
    fontFamily: "'Playfair Display', serif",
    fontSize: '1.8rem',
    fontWeight: '800',
    lineHeight: '1',
    display: 'block',
  },
  timeLabel: {
    fontSize: '0.62rem',
    fontWeight: '700',
    color: '#9c6644',
    letterSpacing: '1px',
  },
  colon: {
    fontSize: '1.5rem',
    fontWeight: '700',
    color: '#d4af37',
  },
};

// Responsive style adjustment
if (typeof document !== 'undefined') {
  const offerStyle = document.createElement('style');
  offerStyle.innerHTML = `
    @media (max-width: 850px) {
      div[style*="gridTemplateColumns: '1.2fr 0.8fr'"] {
        grid-template-columns: 1fr !important;
      }
    }
  `;
  document.head.appendChild(offerStyle);
}

export default OfferBanner;
