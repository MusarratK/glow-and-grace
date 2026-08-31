import React, { useState, useEffect } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { testimonialsData } from '../data/testimonials';

const TestimonialSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto slide every 6 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonialsData.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonialsData.length) % testimonialsData.length);
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonialsData.length);
  };

  const current = testimonialsData[currentIndex];

  return (
    <div style={styles.container}>
      <div className="glass-card" style={styles.card}>
        <div style={styles.quoteIcon}>
          <Quote size={40} color="#f7d6cd" />
        </div>

        {/* Rating Stars */}
        <div style={styles.starRow}>
          {[...Array(current.rating)].map((_, i) => (
            <Star key={i} size={20} color="#d4af37" fill="#d4af37" />
          ))}
        </div>

        {/* Comment Quote */}
        <p style={styles.comment}>"{current.comment}"</p>

        {/* Client Author Info */}
        <div style={styles.authorRow}>
          <img src={current.avatar} alt={current.name} style={styles.avatar} />
          <div>
            <h4 style={styles.authorName}>{current.name}</h4>
            <p style={styles.authorDetails}>{current.location} • <span style={{ color: '#9c6644' }}>{current.service}</span></p>
          </div>
        </div>

        {/* Controls */}
        <div style={styles.controlsRow}>
          <button onClick={prevSlide} style={styles.arrowBtn} aria-label="Previous Testimonial">
            <ChevronLeft size={20} color="#2c1f1d" />
          </button>
          
          <div style={styles.dotsRow}>
            {testimonialsData.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                style={{
                  ...styles.dot,
                  backgroundColor: idx === currentIndex ? '#9c6644' : '#ebdcd5',
                  width: idx === currentIndex ? '24px' : '8px',
                }}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>

          <button onClick={nextSlide} style={styles.arrowBtn} aria-label="Next Testimonial">
            <ChevronRight size={20} color="#2c1f1d" />
          </button>
        </div>
      </div>
    </div>
  );
};

const styles = {
  container: {
    maxWidth: '800px',
    margin: '0 auto',
    padding: '0 1rem',
  },
  card: {
    padding: '3rem 2.5rem 2rem 2.5rem',
    textAlign: 'center',
    position: 'relative',
    backgroundColor: '#fffdfa',
  },
  quoteIcon: {
    position: 'absolute',
    top: '20px',
    left: '30px',
    opacity: 0.8,
  },
  starRow: {
    display: 'flex',
    justifyContent: 'center',
    gap: '0.25rem',
    marginBottom: '1.2rem',
  },
  comment: {
    fontSize: '1.15rem',
    fontStyle: 'italic',
    color: '#2c1f1d',
    lineHeight: '1.7',
    marginBottom: '2rem',
  },
  authorRow: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '1rem',
    textAlign: 'left',
    marginBottom: '2rem',
  },
  avatar: {
    width: '54px',
    height: '54px',
    borderRadius: '50%',
    objectFit: 'cover',
    border: '2px solid #d4a373',
  },
  authorName: {
    fontFamily: "'Playfair Display', serif",
    fontSize: '1.15rem',
    fontWeight: '700',
    color: '#2c1f1d',
  },
  authorDetails: {
    fontSize: '0.82rem',
    color: '#5c4642',
  },
  controlsRow: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingTop: '1.2rem',
    borderTop: '1px solid #ebdcd5',
  },
  arrowBtn: {
    width: '40px',
    height: '40px',
    borderRadius: '50%',
    backgroundColor: '#fdf5f2',
    border: '1px solid #ebdcd5',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    transition: 'all 0.2s ease',
  },
  dotsRow: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.4rem',
  },
  dot: {
    height: '8px',
    borderRadius: '4px',
    border: 'none',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
  },
};

export default TestimonialSlider;
