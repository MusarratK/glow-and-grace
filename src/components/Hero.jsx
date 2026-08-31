import React from 'react';
import { NavLink } from 'react-router-dom';
import { Calendar, Sparkles, Award, Users, Heart } from 'lucide-react';
import { businessData } from '../data/business';

const Hero = ({ onOpenBooking }) => {
  return (
    <section style={styles.heroSection}>
      <div style={styles.bgOverlay} />

      <div className="container" style={styles.heroContainer}>
        {/* Left Column: Copywriting & CTAs */}
        <div style={styles.leftCol}>
          <span className="badge-luxury" style={{ marginBottom: '1.2rem' }}>
            <Sparkles size={13} /> {businessData.city}'S PREMIER BEAUTY STUDIO
          </span>

          <h1 style={styles.heading}>
            Enhance Your Beauty, <br />
            <span style={styles.highlightText}>Celebrate Yourself</span>
          </h1>

          <p style={styles.subheading}>
            Professional beauty, hair, skincare, and makeup services designed to make you look and feel your absolute best in a luxury hygienic space.
          </p>

          <div style={styles.btnGroup}>
            <button onClick={onOpenBooking} className="btn btn-gold btn-lg">
              <Calendar size={18} /> Book an Appointment
            </button>

            <NavLink to="/services" className="btn btn-outline btn-lg">
              Explore Services
            </NavLink>
          </div>

          {/* Trust Indicators */}
          <div style={styles.trustRow}>
            <div style={styles.trustBadge}>
              <div style={styles.trustIcon}><Award size={20} color="#9c6644" /></div>
              <div>
                <strong style={styles.trustVal}>5+ Years</strong>
                <span style={styles.trustLbl}>Experience</span>
              </div>
            </div>

            <div style={styles.trustBadge}>
              <div style={styles.trustIcon}><Users size={20} color="#9c6644" /></div>
              <div>
                <strong style={styles.trustVal}>1,000+</strong>
                <span style={styles.trustLbl}>Happy Clients</span>
              </div>
            </div>

            <div style={styles.trustBadge}>
              <div style={styles.trustIcon}><Sparkles size={20} color="#9c6644" /></div>
              <div>
                <strong style={styles.trustVal}>30+</strong>
                <span style={styles.trustLbl}>Services</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Visual Showcase Frame */}
        <div style={styles.rightCol}>
          <div style={styles.imageFrame} className="animate-float">
            <img
              src="https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&q=80&w=1000"
              alt="Glow & Grace Beauty Studio Interior"
              style={styles.heroImage}
            />
            <div style={styles.decorativeBadge}>
              <Heart size={16} color="#d4af37" fill="#d4af37" />
              <span>4.9★ Rated Salon in Pune</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const styles = {
  heroSection: {
    position: 'relative',
    padding: '4rem 0 5rem 0',
    backgroundColor: '#f9f3ef',
    overflow: 'hidden',
  },
  bgOverlay: {
    position: 'absolute',
    top: 0,
    right: 0,
    width: '45%',
    height: '100%',
    background: 'radial-gradient(circle at center, rgba(247, 214, 205, 0.4) 0%, rgba(249, 243, 239, 0) 70%)',
    pointerEvents: 'none',
  },
  heroContainer: {
    display: 'grid',
    gridTemplateColumns: '1.1fr 0.9fr',
    alignItems: 'center',
    gap: '3rem',
  },
  leftCol: {},
  heading: {
    fontFamily: "'Playfair Display', serif",
    fontSize: '3.6rem',
    fontWeight: '700',
    color: '#2c1f1d',
    lineHeight: '1.15',
    marginBottom: '1.2rem',
  },
  highlightText: {
    fontStyle: 'italic',
    color: '#9c6644',
    position: 'relative',
  },
  subheading: {
    fontSize: '1.1rem',
    color: '#5c4642',
    maxWidth: '560px',
    lineHeight: '1.7',
    marginBottom: '2.2rem',
  },
  btnGroup: {
    display: 'flex',
    alignItems: 'center',
    gap: '1.2rem',
    flexWrap: 'wrap',
    marginBottom: '3rem',
  },
  trustRow: {
    display: 'flex',
    alignItems: 'center',
    gap: '2rem',
    flexWrap: 'wrap',
    paddingTop: '1.5rem',
    borderTop: '1px solid #ebdcd5',
  },
  trustBadge: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.8rem',
  },
  trustIcon: {
    width: '40px',
    height: '40px',
    borderRadius: '50%',
    backgroundColor: '#fffdfa',
    border: '1px solid #ebdcd5',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  trustVal: {
    fontFamily: "'Playfair Display', serif",
    fontSize: '1.1rem',
    fontWeight: '700',
    color: '#2c1f1d',
    display: 'block',
    lineHeight: '1',
  },
  trustLbl: {
    fontSize: '0.78rem',
    color: '#5c4642',
  },
  rightCol: {
    position: 'relative',
  },
  imageFrame: {
    position: 'relative',
    borderRadius: '30px',
    overflow: 'hidden',
    boxShadow: '0 25px 50px rgba(44, 31, 29, 0.15)',
    border: '4px solid #fffdfa',
  },
  heroImage: {
    width: '100%',
    height: '520px',
    objectFit: 'cover',
  },
  decorativeBadge: {
    position: 'absolute',
    bottom: '20px',
    left: '20px',
    backgroundColor: 'rgba(255, 253, 250, 0.95)',
    backdropFilter: 'blur(10px)',
    padding: '0.6rem 1.2rem',
    borderRadius: '9999px',
    display: 'inline-flex',
    alignItems: 'center',
    gap: '0.5rem',
    fontSize: '0.85rem',
    fontWeight: '600',
    color: '#2c1f1d',
    boxShadow: '0 8px 20px rgba(0,0,0,0.1)',
  },
};

// Responsive style adjustment
if (typeof document !== 'undefined') {
  const heroStyle = document.createElement('style');
  heroStyle.innerHTML = `
    @media (max-width: 991px) {
      div[style*="gridTemplateColumns: '1.1fr 0.9fr'"] {
        grid-template-columns: 1fr !important;
      }
      h1[style*="fontSize: '3.6rem'"] {
        font-size: 2.6rem !important;
      }
    }
  `;
  document.head.appendChild(heroStyle);
}

export default Hero;
