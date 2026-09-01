import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

const ScrollToTop = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisible = () => {
      if (window.scrollY > 300) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };
    window.addEventListener('scroll', toggleVisible);
    return () => window.removeEventListener('scroll', toggleVisible);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  if (!visible) return null;

  return (
    <button
      onClick={scrollToTop}
      className="scroll-top-btn"
      style={styles.scrollBtn}
      aria-label="Scroll to top"
      title="Back to top"
    >
      <ArrowUp size={20} color="#2c1f1d" />
    </button>
  );
};

const styles = {
  scrollBtn: {
    position: 'fixed',
    bottom: '24px',
    left: '24px',
    width: '46px',
    height: '46px',
    backgroundColor: '#fffdfa',
    border: '2px solid #ebdcd5',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    boxShadow: '0 6px 20px rgba(44, 31, 29, 0.12)',
    zIndex: 999,
    cursor: 'pointer',
    transition: 'all 0.3s ease',
  },
};

export default ScrollToTop;
