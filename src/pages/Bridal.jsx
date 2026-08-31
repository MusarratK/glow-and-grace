import React from 'react';
import { Sparkles, Calendar, Heart, Award, CheckCircle, ArrowRight } from 'lucide-react';
import SectionTitle from '../components/SectionTitle';
import GalleryGrid from '../components/GalleryGrid';

const Bridal = ({ onOpenBooking }) => {
  const bridalServices = [
    {
      title: "Royal HD Bridal Makeup",
      desc: "Light-reflecting, sweatproof high-definition makeup crafted for flawless photography and long 18+ hour wear.",
      price: "₹9,999",
      img: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&q=80&w=600"
    },
    {
      title: "Airbrush Luxury Bridal Look",
      desc: "Micro-mist airbrush formula delivering porcelain skin finish with lightweight weightless comfort.",
      price: "₹12,999",
      img: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80&w=600"
    },
    {
      title: "Engagement / Roka Makeup",
      desc: "Semi-bridal soft glam with custom eye shading, lip tint, and soft contour for pre-wedding functions.",
      price: "₹4,999",
      img: "https://images.unsplash.com/photo-1516914943479-89db7d9ae7f2?auto=format&fit=crop&q=80&w=600"
    },
    {
      title: "Complete Pre-Bridal Package",
      desc: "3-Month skin prep schedule: Gold Facials, Body Polishing, Rica Waxing, Hair Spa & Gel Nails.",
      price: "₹14,999",
      img: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&q=80&w=600"
    }
  ];

  return (
    <div>
      {/* Header Banner */}
      <section style={styles.headerBanner}>
        <div className="container" style={{ textAlign: 'center' }}>
          <span className="badge-luxury" style={{ backgroundColor: '#fffdfa', color: '#2c1f1d', borderColor: '#d4af37' }}>
            <Sparkles size={13} /> ROYAL BRIDAL STUDIO PUNE
          </span>
          <h1 style={styles.headerTitle}>Your Big Day Deserves Your Best Look</h1>
          <p style={styles.headerDesc}>
            From glowing skin preparation to flawless bridal makeup and elegant hairstyling, our bridal beauty services are designed to make you feel unforgettable on your special day.
          </p>

          <div style={{ marginTop: '2rem' }}>
            <button onClick={() => onOpenBooking('Bridal Experience')} className="btn btn-gold btn-lg">
              <Calendar size={18} /> Book Bridal Consultation
            </button>
          </div>
        </div>
      </section>

      {/* Bridal Treatments Cards */}
      <section className="section-padding" style={{ backgroundColor: '#fffdfa' }}>
        <div className="container">
          <SectionTitle
            subtitle="LUXURY PACKAGES"
            title="Bridal Makeup & Styling Menu"
            description="Customized looks for Wedding Day, Sangeet, Engagement, and Reception."
          />

          <div style={styles.grid}>
            {bridalServices.map((item, idx) => (
              <div key={idx} className="glass-card" style={styles.card}>
                <div style={styles.imgBox}>
                  <img src={item.img} alt={item.title} style={styles.img} />
                </div>
                <div style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
                  <h3 style={styles.cardTitle}>{item.title}</h3>
                  <p style={styles.cardDesc}>{item.desc}</p>

                  <div style={styles.cardFooter}>
                    <span style={styles.price}>{item.price}</span>
                    <button
                      onClick={() => onOpenBooking(item.title)}
                      className="btn btn-primary btn-sm"
                    >
                      Book Look
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pre-Bridal Care Timeline */}
      <section className="section-padding" style={{ backgroundColor: '#fdf5f2' }}>
        <div className="container">
          <SectionTitle
            subtitle="THE BRIDAL JOURNEY"
            title="Pre-Bridal Skin & Hair Prep Schedule"
            description="Our structured countdown plan to ensure your skin achieves peak radiance for the wedding."
          />

          <div style={styles.timelineGrid}>
            <div className="glass-card" style={styles.timelineBox}>
              <span style={styles.stepBadge}>1 MONTH BEFORE</span>
              <h3 style={styles.stepTitle}>Skin Analysis & Deep Hydration</h3>
              <p style={styles.stepDesc}>Dermatological skin type assessment, diamond polishing facial, and hair nourishment spa.</p>
            </div>

            <div className="glass-card" style={styles.timelineBox}>
              <span style={styles.stepBadge}>2 WEEKS BEFORE</span>
              <h3 style={styles.stepTitle}>24K Gold Facial & Body Polish</h3>
              <p style={styles.stepDesc}>Collagen boosting 24K gold facial, full body Rica waxing, tan removal, and eyebrow shaping.</p>
            </div>

            <div className="glass-card" style={styles.timelineBox}>
              <span style={styles.stepBadge}>3 DAYS BEFORE</span>
              <h3 style={styles.stepTitle}>Nails & Pre-Wedding Glow</h3>
              <p style={styles.stepDesc}>Designer gel nail extensions, spa pedicure, hair gloss treatment, and final look trial.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Bridal Gallery */}
      <section className="section-padding" style={{ backgroundColor: '#fffdfa' }}>
        <div className="container">
          <SectionTitle
            subtitle="REAL BRIDES"
            title="Bridal Portfolio Gallery"
            description="Take a glance at our real brides who trusted Glow & Grace Studio for their wedding day."
          />
          <GalleryGrid limit={6} />
        </div>
      </section>
    </div>
  );
};

const styles = {
  headerBanner: {
    backgroundColor: '#9c6644',
    color: '#fffdfa',
    padding: '5rem 0 4.5rem 0',
  },
  headerTitle: {
    fontFamily: "'Playfair Display', serif",
    fontSize: '3.2rem',
    color: '#fffdfa',
    marginTop: '0.8rem',
    marginBottom: '0.8rem',
  },
  headerDesc: {
    fontSize: '1.15rem',
    color: 'rgba(255, 253, 250, 0.9)',
    maxWidth: '700px',
    margin: '0 auto',
    lineHeight: '1.7',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
    gap: '2rem',
  },
  card: {
    overflow: 'hidden',
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: '#fffdfa',
  },
  imgBox: {
    height: '220px',
    overflow: 'hidden',
  },
  img: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  },
  cardTitle: {
    fontFamily: "'Playfair Display', serif",
    fontSize: '1.3rem',
    color: '#2c1f1d',
    marginBottom: '0.4rem',
  },
  cardDesc: {
    fontSize: '0.88rem',
    color: '#5c4642',
    lineHeight: '1.6',
    marginBottom: '1.5rem',
    flexGrow: 1,
  },
  cardFooter: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: '1rem',
    borderTop: '1px solid #ebdcd5',
  },
  price: {
    fontFamily: "'Playfair Display', serif",
    fontSize: '1.3rem',
    fontWeight: '700',
    color: '#9c6644',
  },
  timelineGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '2rem',
  },
  timelineBox: {
    padding: '2rem',
    backgroundColor: '#fffdfa',
  },
  stepBadge: {
    fontSize: '0.75rem',
    fontWeight: '700',
    color: '#9c6644',
    letterSpacing: '1.5px',
    display: 'block',
    marginBottom: '0.5rem',
  },
  stepTitle: {
    fontFamily: "'Playfair Display', serif",
    fontSize: '1.3rem',
    color: '#2c1f1d',
    marginBottom: '0.5rem',
  },
  stepDesc: {
    fontSize: '0.88rem',
    color: '#5c4642',
    lineHeight: '1.6',
  },
};

export default Bridal;
