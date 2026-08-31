import React from 'react';
import { NavLink } from 'react-router-dom';
import { Sparkles, MapPin, Phone, Mail, Clock, Instagram, Facebook, Youtube, Heart } from 'lucide-react';
import { businessData } from '../data/business';

const Footer = ({ onOpenBooking }) => {
  return (
    <footer style={styles.footer}>
      {/* Upper Footer Decor */}
      <div style={styles.topBanner}>
        <div className="container" style={styles.topBannerContent}>
          <div>
            <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: '1.8rem', color: '#fffdfa' }}>
              Ready for a Stunning Beauty Transformation?
            </h3>
            <p style={{ color: 'rgba(255, 253, 250, 0.8)', fontSize: '0.95rem', marginTop: '0.3rem' }}>
              Book your appointment today or call our experts in Pune!
            </p>
          </div>
          <div>
            <button onClick={onOpenBooking} className="btn btn-gold btn-lg">
              Book Appointment Now
            </button>
          </div>
        </div>
      </div>

      {/* Main Footer Grid */}
      <div className="container" style={{ padding: '4rem 1.5rem 3rem 1.5rem' }}>
        <div style={styles.grid}>
          {/* Column 1: Brand Info */}
          <div style={styles.col}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '1rem' }}>
              <div style={styles.logoIcon}>
                <Sparkles size={18} color="#d4af37" />
              </div>
              <div>
                <span style={styles.logoTitle}>Glow & Grace</span>
                <span style={styles.logoSubtitle}>BEAUTY STUDIO</span>
              </div>
            </div>
            <p style={{ color: 'rgba(255, 253, 250, 0.75)', fontSize: '0.9rem', lineHeight: '1.7', marginBottom: '1.5rem' }}>
              "{businessData.tagline}"
            </p>
            <p style={{ color: 'rgba(255, 253, 250, 0.65)', fontSize: '0.85rem' }}>
              Pune’s premier luxury beauty studio offering personalized skincare, HD bridal makeup, and hair transformations in a spotless hygienic space.
            </p>
            
            <div style={styles.socialGroup}>
              <a href={businessData.socials.instagram} target="_blank" rel="noopener noreferrer" style={styles.socialBtn} aria-label="Instagram">
                <Instagram size={18} />
              </a>
              <a href={businessData.socials.facebook} target="_blank" rel="noopener noreferrer" style={styles.socialBtn} aria-label="Facebook">
                <Facebook size={18} />
              </a>
              <a href={businessData.socials.youtube} target="_blank" rel="noopener noreferrer" style={styles.socialBtn} aria-label="YouTube">
                <Youtube size={18} />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div style={styles.col}>
            <h4 style={styles.colTitle}>Quick Links</h4>
            <ul style={styles.linkList}>
              <li><NavLink to="/" style={styles.link}>Home</NavLink></li>
              <li><NavLink to="/about" style={styles.link}>About Us</NavLink></li>
              <li><NavLink to="/services" style={styles.link}>Our Services</NavLink></li>
              <li><NavLink to="/packages" style={styles.link}>Beauty Packages</NavLink></li>
              <li><NavLink to="/bridal" style={styles.link}>Bridal Experience</NavLink></li>
              <li><NavLink to="/gallery" style={styles.link}>Photo Gallery</NavLink></li>
              <li><NavLink to="/offers" style={styles.link}>Special Offers</NavLink></li>
              <li><NavLink to="/contact" style={styles.link}>Contact Us</NavLink></li>
            </ul>
          </div>

          {/* Column 3: Featured Services */}
          <div style={styles.col}>
            <h4 style={styles.colTitle}>Services</h4>
            <ul style={styles.linkList}>
              <li><NavLink to="/services?cat=hair" style={styles.link}>Haircare & Keratin</NavLink></li>
              <li><NavLink to="/services?cat=skin" style={styles.link}>24K Gold & Diamond Facial</NavLink></li>
              <li><NavLink to="/services?cat=makeup" style={styles.link}>HD Bridal Makeup</NavLink></li>
              <li><NavLink to="/services?cat=nails" style={styles.link}>Gel Nail Extensions & Art</NavLink></li>
              <li><NavLink to="/services?cat=beauty" style={styles.link}>Full Body Rica Waxing</NavLink></li>
              <li><NavLink to="/bridal" style={styles.link}>Pre-Bridal Packages</NavLink></li>
            </ul>
          </div>

          {/* Column 4: Contact & Hours */}
          <div style={styles.col}>
            <h4 style={styles.colTitle}>Salon Location</h4>
            <div style={styles.contactList}>
              <div style={styles.contactItem}>
                <MapPin size={18} color="#d4a373" style={{ flexShrink: 0, marginTop: '2px' }} />
                <span>{businessData.address}</span>
              </div>
              <div style={styles.contactItem}>
                <Phone size={18} color="#d4a373" style={{ flexShrink: 0 }} />
                <a href={`tel:${businessData.phoneRaw}`} style={{ color: 'inherit' }}>{businessData.phone}</a>
              </div>
              <div style={styles.contactItem}>
                <Mail size={18} color="#d4a373" style={{ flexShrink: 0 }} />
                <a href={`mailto:${businessData.email}`} style={{ color: 'inherit' }}>{businessData.email}</a>
              </div>
              <div style={styles.contactItem}>
                <Clock size={18} color="#d4a373" style={{ flexShrink: 0, marginTop: '2px' }} />
                <div>
                  <div>{businessData.openingHours.weekdays}</div>
                  <div>{businessData.openingHours.sunday}</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div style={styles.bottomBar}>
          <p>© {new Date().getFullYear()} {businessData.name}. All Rights Reserved.</p>
          <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap' }}>
            <span style={{ cursor: 'pointer' }}>Privacy Policy</span>
            <span>|</span>
            <span style={{ cursor: 'pointer' }}>Terms & Conditions</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

const styles = {
  footer: {
    backgroundColor: '#2c1f1d',
    color: '#fffdfa',
    position: 'relative',
    overflow: 'hidden',
  },
  topBanner: {
    backgroundColor: '#9c6644',
    borderBottom: '1px solid rgba(212, 175, 55, 0.3)',
    padding: '2.5rem 0',
  },
  topBannerContent: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexWrap: 'wrap',
    gap: '1.5rem',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
    gap: '2.5rem',
  },
  col: {},
  logoIcon: {
    width: '34px',
    height: '34px',
    borderRadius: '50%',
    backgroundColor: 'rgba(255,255,255,0.1)',
    border: '1px solid rgba(212,175,55,0.4)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoTitle: {
    fontFamily: "'Playfair Display', serif",
    fontSize: '1.35rem',
    fontWeight: '700',
    color: '#fffdfa',
    lineHeight: '1',
    display: 'block',
  },
  logoSubtitle: {
    fontSize: '0.58rem',
    letterSpacing: '2px',
    color: '#d4a373',
    fontWeight: '600',
    display: 'block',
  },
  socialGroup: {
    display: 'flex',
    gap: '0.8rem',
    marginTop: '1.5rem',
  },
  socialBtn: {
    width: '38px',
    height: '38px',
    borderRadius: '50%',
    backgroundColor: 'rgba(255,255,255,0.08)',
    color: '#fffdfa',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    transition: 'all 0.3s ease',
  },
  colTitle: {
    fontFamily: "'Playfair Display', serif",
    fontSize: '1.2rem',
    color: '#d4a373',
    marginBottom: '1.3rem',
    position: 'relative',
  },
  linkList: {
    listStyle: 'none',
    display: 'flex',
    flexDirection: 'column',
    gap: '0.7rem',
  },
  link: {
    color: 'rgba(255, 253, 250, 0.75)',
    fontSize: '0.9rem',
    transition: 'color 0.2s ease',
  },
  contactList: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
    fontSize: '0.88rem',
    color: 'rgba(255, 253, 250, 0.8)',
  },
  contactItem: {
    display: 'flex',
    alignItems: 'flex-start',
    gap: '0.7rem',
    lineHeight: '1.5',
  },
  bottomBar: {
    marginTop: '3.5rem',
    paddingTop: '1.5rem',
    borderTop: '1px solid rgba(255, 253, 250, 0.1)',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexWrap: 'wrap',
    gap: '1rem',
    fontSize: '0.82rem',
    color: 'rgba(255, 253, 250, 0.6)',
  },
};

export default Footer;
