import React from 'react';
import { Sparkles, ShieldCheck, Heart, Award, CheckCircle, Users } from 'lucide-react';
import SectionTitle from '../components/SectionTitle';
import FAQAccordion from '../components/FAQAccordion';
import { businessData } from '../data/business';

const About = ({ onOpenBooking }) => {
  const teamMembers = [
    {
      name: "Ritu Sharma",
      role: "Senior Bridal & HD Makeup Artist",
      experience: "8+ Years Experience",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400"
    },
    {
      name: "Pooja Verma",
      role: "Master Hair Stylist & Color Specialist",
      experience: "6+ Years Experience",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=400"
    },
    {
      name: "Ananya Deshmukh",
      role: "Skincare & Aesthetician Specialist",
      experience: "5+ Years Experience",
      image: "https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?auto=format&fit=crop&q=80&w=400"
    }
  ];

  return (
    <div>
      {/* Page Header */}
      <section className="page-header-banner" style={styles.headerBanner}>
        <div className="container" style={{ textAlign: 'center' }}>
          <span className="badge-luxury" style={{ backgroundColor: '#2c1f1d', color: '#d4af37', borderColor: '#d4af37' }}>
            <Sparkles size={13} /> ABOUT GLOW & GRACE
          </span>
          <h1 className="page-header-title" style={styles.headerTitle}>Empowering Your Confidence Through Beauty</h1>
          <p className="page-header-desc" style={styles.headerDesc}>
            Discover Pune's most trusted luxury beauty studio where passion, hygiene, and art converge.
          </p>
        </div>
      </section>

      {/* Brand Story & Philosophy */}
      <section className="section-padding" style={{ backgroundColor: '#fffdfa' }}>
        <div className="container">
          <div className="story-grid" style={styles.storyGrid}>
            <div>
              <span className="section-subtitle">OUR PHILOSOPHY</span>
              <h2 className="section-title" style={{ textAlign: 'left', margin: '0 0 1.2rem 0' }}>
                Crafting Timeless Elegance with Personal Care
              </h2>
              <p style={styles.textParagraph}>
                Founded with a mission to bring high-end salon pampering within an accessible, warm, and comforting environment, <strong>{businessData.name}</strong> has become a hallmark of beauty excellence in Pune.
              </p>
              <p style={styles.textParagraph}>
                We believe true beauty radiates from within when you feel cared for and valued. Our certified beauty experts do not just apply products—we consult, analyze, and craft personalized treatments that accentuate your unique features.
              </p>

              <div style={styles.highlightsList}>
                <div style={styles.highlightItem}>
                  <CheckCircle size={20} color="#9c6644" />
                  <span>Dermatologist-approved & premium professional cosmetics only</span>
                </div>
                <div style={styles.highlightItem}>
                  <CheckCircle size={20} color="#9c6644" />
                  <span>100% sanitized tools, disposable kits, and hospital-grade hygiene</span>
                </div>
                <div style={styles.highlightItem}>
                  <CheckCircle size={20} color="#9c6644" />
                  <span>Transparent upfront pricing with zero hidden charges</span>
                </div>
              </div>
            </div>

            <div>
              <div style={styles.aboutImgFrame}>
                <img
                  src="https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&q=80&w=800"
                  alt="Glow & Grace Studio Pune Interior"
                  style={styles.aboutImg}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Banner */}
      <section style={styles.statsSection}>
        <div className="container">
          <div style={styles.statsGrid}>
            {businessData.stats.map((st, i) => (
              <div key={i} style={styles.statBox}>
                <div style={styles.statValue}>{st.value}</div>
                <div style={styles.statLabel}>{st.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="section-padding" style={{ backgroundColor: '#f9f3ef' }}>
        <div className="container">
          <SectionTitle
            subtitle="MEET OUR EXPERTS"
            title="Passionate Beauty Specialists"
            description="Our team of certified professionals brings years of industry mastery and creative flair to every service."
          />

          <div className="team-grid" style={styles.teamGrid}>
            {teamMembers.map((member, i) => (
              <div key={i} className="glass-card" style={styles.teamCard}>
                <div style={styles.teamImgWrapper}>
                  <img src={member.image} alt={member.name} style={styles.teamImg} />
                </div>
                <div style={{ padding: '1.5rem', textAlign: 'center' }}>
                  <h3 style={styles.teamName}>{member.name}</h3>
                  <p style={styles.teamRole}>{member.role}</p>
                  <span style={styles.teamExp}>{member.experience}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding" style={{ backgroundColor: '#fffdfa' }}>
        <div className="container">
          <SectionTitle
            subtitle="COMMON QUESTIONS"
            title="Frequently Asked Questions"
            description="Have questions about our salon, services, or bookings? We're here to help."
          />
          <FAQAccordion />
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
  storyGrid: {
    display: 'grid',
    gridTemplateColumns: '1.1fr 0.9fr',
    gap: '3.5rem',
    alignItems: 'center',
  },
  textParagraph: {
    fontSize: '1.02rem',
    color: '#5c4642',
    lineHeight: '1.75',
    marginBottom: '1rem',
  },
  highlightsList: {
    display: 'flex',
    flexDirection: 'column',
    gap: '0.8rem',
    marginTop: '1.5rem',
  },
  highlightItem: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.8rem',
    fontSize: '0.95rem',
    color: '#2c1f1d',
    fontWeight: '500',
  },
  aboutImgFrame: {
    borderRadius: '24px',
    overflow: 'hidden',
    boxShadow: 'var(--shadow-lg)',
  },
  aboutImg: {
    width: '100%',
    height: '450px',
    objectFit: 'cover',
  },
  statsSection: {
    backgroundColor: '#9c6644',
    padding: '3rem 0',
    color: '#fffdfa',
  },
  statsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
    gap: '2rem',
    textAlign: 'center',
  },
  statBox: {},
  statValue: {
    fontFamily: "'Playfair Display', serif",
    fontSize: '3rem',
    fontWeight: '800',
    color: '#d4af37',
    lineHeight: '1',
  },
  statLabel: {
    fontSize: '0.9rem',
    color: 'rgba(255, 253, 250, 0.85)',
    marginTop: '0.4rem',
  },
  teamGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
    gap: '2rem',
  },
  teamCard: {
    overflow: 'hidden',
    backgroundColor: '#fffdfa',
  },
  teamImgWrapper: {
    height: '300px',
    overflow: 'hidden',
  },
  teamImg: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  },
  teamName: {
    fontFamily: "'Playfair Display', serif",
    fontSize: '1.3rem',
    color: '#2c1f1d',
    marginBottom: '0.2rem',
  },
  teamRole: {
    fontSize: '0.88rem',
    color: '#9c6644',
    fontWeight: '600',
    marginBottom: '0.5rem',
  },
  teamExp: {
    fontSize: '0.78rem',
    color: '#5c4642',
    backgroundColor: '#fdf5f2',
    padding: '0.2rem 0.6rem',
    borderRadius: '4px',
  },
};

export default About;
