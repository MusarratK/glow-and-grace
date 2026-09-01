import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { Sparkles, Menu, X, Phone, Calendar } from 'lucide-react';
import { businessData } from '../data/business';
import ThemeToggle from './ThemeToggle';

const Navbar = ({ onOpenBooking }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on page navigate
  useEffect(() => {
    setMobileMenuOpen(false);
    window.scrollTo(0, 0);
  }, [location]);

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/services', label: 'Services' },
    { path: '/packages', label: 'Packages' },
    { path: '/bridal', label: 'Bridal' },
    { path: '/gallery', label: 'Gallery' },
    { path: '/offers', label: 'Offers' },
    { path: '/contact', label: 'Contact' },
  ];

  return (
    <>
      {/* Top Notification Bar */}
      <div style={styles.topBar}>
        <div className="container top-bar-container" style={styles.topBarContainer}>
          <div style={styles.topInfo}>
            <span>📍 {businessData.city}, Maharashtra</span>
            <span className="top-info-divider" style={styles.divider}>|</span>
            <span className="top-info-hours">🕐 Mon-Sat: 10AM-8PM, Sun: 11AM-6PM</span>
          </div>
          <div style={styles.topActions}>
            <a href={`tel:${businessData.phoneRaw}`} style={styles.phoneLink}>
              <Phone size={13} /> {businessData.phone}
            </a>
          </div>
        </div>
      </div>

      {/* Main Sticky Navbar */}
      <header
        style={{
          ...styles.header,
          padding: isScrolled ? '0.75rem 0' : '1.2rem 0',
          background: isScrolled ? 'var(--color-header-scrolled)' : 'var(--color-header-bg)',
          boxShadow: isScrolled ? 'var(--shadow-md)' : 'none',
        }}
      >
        <div className="container" style={styles.navContainer}>
          {/* Logo */}
          <NavLink to="/" style={styles.logo}>
            <div style={styles.logoIcon}>
              <Sparkles size={20} color="#d4af37" />
            </div>
            <div>
              <span className="logo-title" style={styles.logoTitle}>Glow & Grace</span>
              <span className="logo-subtitle" style={styles.logoSubtitle}>BEAUTY STUDIO</span>
            </div>
          </NavLink>

          {/* Desktop Nav Links */}
          <nav className="nav-desktop" style={styles.desktopNav}>
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) => (isActive ? 'active-nav-item' : '')}
                style={({ isActive }) => ({
                  ...styles.navLink,
                  color: isActive ? '#9c6644' : 'var(--color-dark)',
                  fontWeight: isActive ? '600' : '400',
                  borderBottom: isActive ? '2px solid #d4a373' : '2px solid transparent',
                })}
              >
                {link.label}
              </NavLink>
            ))}
          </nav>

          {/* Desktop CTA Button & Theme Toggle */}
          <div className="nav-desktop-cta" style={{ display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
            <ThemeToggle />
            <button
              onClick={() => onOpenBooking()}
              className="btn btn-gold btn-sm"
              style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem' }}
            >
              <Calendar size={15} /> Book Appointment
            </button>
          </div>

          {/* Mobile Actions: Theme Switcher & Hamburger Toggle */}
          <div className="nav-hamburger-btn" style={{ alignItems: 'center', gap: '0.5rem' }}>
            <ThemeToggle compact />
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              style={styles.hamburgerBtn}
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X size={26} color="var(--color-dark)" /> : <Menu size={26} color="var(--color-dark)" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="mobile-drawer-bg" style={styles.mobileDrawer}>
            <nav style={styles.mobileNavList}>
              {navLinks.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  style={({ isActive }) => ({
                    ...styles.mobileNavLink,
                    color: isActive ? '#9c6644' : 'var(--color-dark)',
                    fontWeight: isActive ? '600' : '400',
                    backgroundColor: isActive ? 'rgba(212, 163, 115, 0.12)' : 'transparent',
                  })}
                >
                  {link.label}
                </NavLink>
              ))}
              <div style={{ padding: '1rem 0', display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
                <ThemeToggle />
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenBooking();
                  }}
                  className="btn btn-gold"
                  style={{ width: '100%' }}
                >
                  <Calendar size={16} /> Book Appointment Now
                </button>
              </div>
            </nav>
          </div>
        )}
      </header>
    </>
  );
};

const styles = {
  topBar: {
    backgroundColor: '#2c1f1d',
    color: '#f7d6cd',
    fontSize: '0.8rem',
    padding: '0.4rem 0',
  },
  topBarContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexWrap: 'wrap',
    gap: '0.5rem',
  },
  topInfo: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.8rem',
  },
  divider: {
    color: 'rgba(247, 214, 205, 0.3)',
  },
  topActions: {
    display: 'flex',
    alignItems: 'center',
    gap: '1rem',
  },
  phoneLink: {
    color: '#fdf5f2',
    display: 'inline-flex',
    alignItems: 'center',
    gap: '0.3rem',
    fontWeight: '500',
  },
  header: {
    position: 'sticky',
    top: 0,
    left: 0,
    width: '100%',
    zIndex: 1000,
    backdropFilter: 'blur(12px)',
    WebkitBackdropFilter: 'blur(12px)',
    transition: 'all 0.35s ease',
    borderBottom: '1px solid rgba(235, 220, 213, 0.6)',
  },
  navContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  logo: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.6rem',
  },
  logoIcon: {
    width: '38px',
    height: '38px',
    borderRadius: '50%',
    backgroundColor: '#fdf5f2',
    border: '1px solid #ebdcd5',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoTitle: {
    fontFamily: "'Playfair Display', serif",
    fontSize: '1.45rem',
    fontWeight: '700',
    color: '#2c1f1d',
    lineHeight: '1',
    display: 'block',
    letterSpacing: '-0.3px',
  },
  logoSubtitle: {
    fontSize: '0.62rem',
    letterSpacing: '2px',
    color: '#9c6644',
    fontWeight: '600',
    display: 'block',
    marginTop: '2px',
  },
  desktopNav: {
    display: 'flex',
    alignItems: 'center',
    gap: '1.6rem',
  },
  navLink: {
    fontSize: '0.92rem',
    padding: '0.4rem 0',
    letterSpacing: '0.3px',
    transition: 'all 0.2s ease',
  },
  desktopCta: {
    display: 'flex',
    alignItems: 'center',
  },
  hamburgerBtn: {
    display: 'none',
    padding: '0.4rem',
  },
  mobileDrawer: {
    position: 'absolute',
    top: '100%',
    left: 0,
    width: '100%',
    backgroundColor: '#fffdfa',
    borderBottom: '2px solid #ebdcd5',
    boxShadow: '0 15px 30px rgba(44, 31, 29, 0.1)',
    padding: '1.2rem 1.5rem',
  },
  mobileNavList: {
    display: 'flex',
    flexDirection: 'column',
    gap: '0.4rem',
  },
  mobileNavLink: {
    padding: '0.75rem 1rem',
    borderRadius: '8px',
    fontSize: '1rem',
  },
};

export default Navbar;
