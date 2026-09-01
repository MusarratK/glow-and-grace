import React from 'react';
import { Sparkles } from 'lucide-react';
import SectionTitle from '../components/SectionTitle';
import GalleryGrid from '../components/GalleryGrid';
import BeforeAfter from '../components/BeforeAfter';

const Gallery = () => {
  return (
    <div>
      {/* Header Banner */}
      <section className="page-header-banner" style={styles.headerBanner}>
        <div className="container" style={{ textAlign: 'center' }}>
          <span className="badge-luxury" style={{ backgroundColor: '#2c1f1d', color: '#d4af37', borderColor: '#d4af37' }}>
            <Sparkles size={13} /> STUDIO PORTFOLIO
          </span>
          <h1 className="page-header-title" style={styles.headerTitle}>Beauty Photo Gallery</h1>
          <p className="page-header-desc" style={styles.headerDesc}>
            Filter through our high-definition portfolio of bridal makeups, hair color balayage, gold facials, and gel nail art.
          </p>
        </div>
      </section>

      {/* Main Gallery Section */}
      <section className="section-padding" style={{ backgroundColor: '#f9f3ef' }}>
        <div className="container">
          <SectionTitle
            subtitle="FILTER BY CATEGORY"
            title="Explore Work by Category"
            description="Click on any image to launch full-screen high resolution lightbox viewer."
          />
          <GalleryGrid />
        </div>
      </section>

      {/* Before & After Transformations */}
      <section className="section-padding" style={{ backgroundColor: '#fffdfa' }}>
        <div className="container">
          <SectionTitle
            subtitle="SIDE-BY-SIDE RESULTS"
            title="Client Transformation Showcase"
            description="Real before and after results delivered at Glow & Grace Beauty Studio Pune."
          />
          <BeforeAfter />
        </div>
      </section>
    </div>
  );
};

const styles = {
  headerBanner: {
    backgroundColor: '#2c1f1d',
    color: '#fffdfa',
    padding: '4.5rem 0 4rem 0',
  },
  headerTitle: {
    fontFamily: "'Playfair Display', serif",
    fontSize: '3rem',
    color: '#fffdfa',
    marginTop: '0.8rem',
    marginBottom: '0.5rem',
  },
  headerDesc: {
    fontSize: '1.1rem',
    color: 'rgba(255, 253, 250, 0.8)',
    maxWidth: '650px',
    margin: '0 auto',
  },
};

export default Gallery;
