import React from 'react';
import { NavLink } from 'react-router-dom';
import { Sparkles, Award, ShieldCheck, Heart, Sparkle, Smile, ArrowRight, Instagram, MapPin, Phone, Mail, Clock, Calendar } from 'lucide-react';
import Hero from '../components/Hero';
import SectionTitle from '../components/SectionTitle';
import ServiceCard from '../components/ServiceCard';
import PackageCard from '../components/PackageCard';
import TestimonialSlider from '../components/TestimonialSlider';
import GalleryGrid from '../components/GalleryGrid';
import BeforeAfter from '../components/BeforeAfter';
import OfferBanner from '../components/OfferBanner';
import BookingForm from '../components/BookingForm';

import { servicesData } from '../data/services';
import { packagesData } from '../data/packages';
import { businessData } from '../data/business';

const Home = ({ onOpenBooking, onSelectService, onSelectPackage, onClaimOffer }) => {
  // Take 6 featured services for homepage
  const featuredServices = servicesData.filter(s => s.popular).slice(0, 6);

  const whyChooseItems = [
    {
      icon: Award,
      title: "Experienced Professionals",
      desc: "Skilled beauty experts who understand your unique style and skin requirements."
    },
    {
      icon: Sparkles,
      title: "Premium Products",
      desc: "We use carefully selected quality beauty products from top international brands."
    },
    {
      icon: Heart,
      title: "Personalized Care",
      desc: "Every treatment is tailored to your individual beauty needs and comfort."
    },
    {
      icon: ShieldCheck,
      title: "Hygienic Environment",
      desc: "Enjoy a clean, sanitized, comfortable, and relaxing salon experience."
    },
    {
      icon: Sparkle,
      title: "Affordable Luxury",
      desc: "Premium beauty treatments at competitive prices you'll absolutely love."
    },
    {
      icon: Smile,
      title: "Customer Satisfaction",
      desc: "Your complete comfort, confidence, and satisfaction always come first."
    }
  ];

  const instagramPosts = [
    "https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&q=80&w=400",
    "https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&q=80&w=400",
    "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&q=80&w=400",
    "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&q=80&w=400",
    "https://images.unsplash.com/photo-1604654894610-df63bc536371?auto=format&fit=crop&q=80&w=400",
    "https://images.unsplash.com/photo-1516914943479-89db7d9ae7f2?auto=format&fit=crop&q=80&w=400",
  ];

  return (
    <div>
      {/* Hero Section */}
      <Hero onOpenBooking={onOpenBooking} />

      {/* Beauty Introduction Section */}
      <section className="section-padding" style={{ backgroundColor: '#fffdfa' }}>
        <div className="container">
          <div className="intro-grid" style={styles.introGrid}>
            <div style={styles.introImageCol}>
              <div style={styles.introImageFrame}>
                <img
                  src="https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&q=80&w=800"
                  alt="Beauty Meets Confidence at Glow & Grace Studio"
                  style={styles.introImg}
                />
                <div style={styles.badgeFloat}>
                  <Sparkles size={16} color="#d4af37" />
                  <span>Trusted Beauty Salon in Pune</span>
                </div>
              </div>
            </div>

            <div style={styles.introTextCol}>
              <span className="section-subtitle">WELCOME TO GLOW & GRACE</span>
              <h2 className="section-title" style={{ textAlign: 'left', margin: '0 0 1.2rem 0' }}>
                Where Beauty Meets Confidence
              </h2>
              <p style={styles.introParagraph}>
                At Glow & Grace Beauty Studio, we believe beauty is about feeling confident, comfortable, and completely yourself. Our experienced professionals provide personalized beauty treatments using quality products in a relaxing and hygienic environment.
              </p>
              <p style={styles.introParagraph}>
                From glowing skin prep to flawless HD bridal makeup, haircuts, and pampering spa sessions, every detail of our studio is designed around your wellbeing.
              </p>

              <div style={{ marginTop: '2rem' }}>
                <NavLink to="/about" className="btn btn-primary btn-lg">
                  Discover Our Story <ArrowRight size={16} />
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Showcase */}
      <section className="section-padding" style={{ backgroundColor: '#f9f3ef' }}>
        <div className="container">
          <SectionTitle
            subtitle="OUR BEAUTY SERVICES"
            title="Everything You Need to Look & Feel Your Best"
            description="Explore our wide range of professional hair, skin, facial, makeup, nail, and body grooming treatments."
          />

          <div className="cards-grid" style={styles.cardsGrid}>
            {featuredServices.map(service => (
              <ServiceCard
                key={service.id}
                service={service}
                onSelectService={onSelectService}
              />
            ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: '3rem' }}>
            <NavLink to="/services" className="btn btn-gold btn-lg">
              View All Services <ArrowRight size={18} />
            </NavLink>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding" style={{ backgroundColor: '#fffdfa' }}>
        <div className="container">
          <SectionTitle
            subtitle="THE GLOW & GRACE DIFFERENCE"
            title="Why Choose Glow & Grace?"
            description="Experience luxury beauty treatments engineered around safety, hygiene, skill, and pure relaxation."
          />

          <div className="why-grid" style={styles.whyGrid}>
            {whyChooseItems.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div key={idx} className="glass-card" style={styles.whyCard}>
                  <div style={styles.whyIconBox}>
                    <Icon size={24} color="#9c6644" />
                  </div>
                  <h3 style={styles.whyTitle}>{item.title}</h3>
                  <p style={styles.whyDesc}>{item.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Packages Section */}
      <section className="section-padding" style={{ backgroundColor: '#fdf5f2' }}>
        <div className="container">
          <SectionTitle
            subtitle="VALUE COMBOS"
            title="Beauty Packages"
            description="Curated value bundles designed to give you comprehensive head-to-toe pampering at attractive rates."
          />

          <div className="packages-grid" style={styles.packagesGrid}>
            {packagesData.map(pkg => (
              <PackageCard
                key={pkg.id}
                pkg={pkg}
                onSelectPackage={onSelectPackage}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Bridal Showcase Banner */}
      <section style={styles.bridalBannerSection}>
        <div className="container">
          <div className="bridal-grid" style={styles.bridalGrid}>
            <div>
              <span className="badge-luxury" style={{ backgroundColor: '#2c1f1d', color: '#d4af37', borderColor: '#d4af37', marginBottom: '1rem' }}>
                <Sparkles size={14} /> ROYAL BRIDAL EXPERTISE
              </span>
              <h2 style={styles.bridalHeading}>Your Big Day Deserves Your Best Look</h2>
              <p style={styles.bridalText}>
                From glowing skin preparation to flawless bridal makeup and elegant hairstyling, our bridal beauty services are designed to make you feel unforgettable on your special day.
              </p>

              <div style={styles.bridalPillsGroup}>
                <span>✨ Bridal HD Makeup</span>
                <span>✨ Airbrush Look</span>
                <span>✨ Pre-Bridal Skin Prep</span>
                <span>✨ Designer Hairstyling</span>
                <span>✨ Saree Draping</span>
                <span>✨ Bridal Nail Extensions</span>
              </div>

              <div style={{ marginTop: '2rem' }}>
                <NavLink to="/bridal" className="btn btn-gold btn-lg">
                  Explore Bridal Services <ArrowRight size={18} />
                </NavLink>
              </div>
            </div>

            <div>
              <div style={styles.bridalImgFrame}>
                <img
                  src="https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&q=80&w=800"
                  alt="Bridal Makeup at Glow & Grace Studio"
                  style={styles.bridalImg}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Promotional Offer Banner */}
      <section className="section-padding">
        <div className="container">
          <OfferBanner onClaimOffer={onClaimOffer} />
        </div>
      </section>

      {/* Before & After Transformations */}
      <section className="section-padding" style={{ backgroundColor: '#fffdfa' }}>
        <div className="container">
          <SectionTitle
            subtitle="REAL RESULTS"
            title="Beautiful Transformations"
            description="Witness the impressive transformations crafted by our senior hair, skin, and makeup stylists."
          />
          <BeforeAfter />
        </div>
      </section>

      {/* Gallery Showcase */}
      <section className="section-padding" style={{ backgroundColor: '#f9f3ef' }}>
        <div className="container">
          <SectionTitle
            subtitle="PORTFOLIO"
            title="Our Beauty Gallery"
            description="Browse through our recent bridal looks, haircuts, glowing facials, and nail art creations."
          />
          <GalleryGrid limit={6} />
          
          <div style={{ textAlign: 'center', marginTop: '2.5rem' }}>
            <NavLink to="/gallery" className="btn btn-outline btn-lg">
              View Full Gallery
            </NavLink>
          </div>
        </div>
      </section>

      {/* Client Testimonials */}
      <section className="section-padding" style={{ backgroundColor: '#fffdfa' }}>
        <div className="container">
          <SectionTitle
            subtitle="REVIEWS & RATINGS"
            title="Loved by Our Clients"
            description="Read what our satisfied clients have to say about their experience at Glow & Grace Studio."
          />
          <TestimonialSlider />
        </div>
      </section>

      {/* Instagram Feed Section */}
      <section className="section-padding" style={{ backgroundColor: '#fdf5f2' }}>
        <div className="container">
          <SectionTitle
            subtitle="SOCIAL MEDIA"
            title="Follow Our Beauty Journey"
            description="Stay connected on Instagram for daily beauty tips, behind-the-scenes transformations, and special announcements."
          />

          <div className="insta-grid" style={styles.instaGrid}>
            {instagramPosts.map((imgUrl, i) => (
              <a
                key={i}
                href={businessData.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                style={styles.instaCard}
              >
                <img src={imgUrl} alt="Instagram Post" style={styles.instaImg} loading="lazy" />
                <div style={styles.instaOverlay}>
                  <Instagram size={24} color="#ffffff" />
                </div>
              </a>
            ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: '2.5rem' }}>
            <a
              href={businessData.socials.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary btn-lg"
            >
              <Instagram size={18} /> Follow Us on Instagram
            </a>
          </div>
        </div>
      </section>

      {/* Direct Contact & Booking Section */}
      <section className="section-padding" style={{ backgroundColor: '#fffdfa' }}>
        <div className="container">
          <SectionTitle
            subtitle="RESERVE YOUR SLOT"
            title="Let's Make You Feel Beautiful"
            description="Book your appointment online or reach out directly to our team in Pune."
          />

          <div className="booking-section-grid" style={styles.bookingSectionGrid}>
            <div>
              <div className="glass-card" style={styles.contactInfoCard}>
                <h3 style={styles.contactCardTitle}>Visit Our Studio</h3>
                <p style={styles.contactCardDesc}>
                  We welcome you to visit our tranquil beauty oasis in Pune for consultations and pampering sessions.
                </p>

                <div style={styles.infoList}>
                  <div style={styles.infoItem}>
                    <MapPin size={22} color="#9c6644" style={{ flexShrink: 0 }} />
                    <div>
                      <strong>Address:</strong>
                      <p style={{ color: '#5c4642', fontSize: '0.9rem' }}>{businessData.address}</p>
                    </div>
                  </div>

                  <div style={styles.infoItem}>
                    <Phone size={22} color="#9c6644" style={{ flexShrink: 0 }} />
                    <div>
                      <strong>Phone & WhatsApp:</strong>
                      <p style={{ color: '#5c4642', fontSize: '0.9rem' }}>{businessData.phone}</p>
                    </div>
                  </div>

                  <div style={styles.infoItem}>
                    <Mail size={22} color="#9c6644" style={{ flexShrink: 0 }} />
                    <div>
                      <strong>Email:</strong>
                      <p style={{ color: '#5c4642', fontSize: '0.9rem' }}>{businessData.email}</p>
                    </div>
                  </div>

                  <div style={styles.infoItem}>
                    <Clock size={22} color="#9c6644" style={{ flexShrink: 0 }} />
                    <div>
                      <strong>Opening Hours:</strong>
                      <p style={{ color: '#5c4642', fontSize: '0.88rem' }}>{businessData.openingHours.weekdays}</p>
                      <p style={{ color: '#5c4642', fontSize: '0.88rem' }}>{businessData.openingHours.sunday}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <BookingForm />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

const styles = {
  introGrid: {
    display: 'grid',
    gridTemplateColumns: '0.9fr 1.1fr',
    gap: '3.5rem',
    alignItems: 'center',
  },
  introImageCol: {},
  introImageFrame: {
    position: 'relative',
    borderRadius: '24px',
    overflow: 'hidden',
    boxShadow: 'var(--shadow-lg)',
  },
  introImg: {
    width: '100%',
    height: '460px',
    objectFit: 'cover',
  },
  badgeFloat: {
    position: 'absolute',
    bottom: '20px',
    right: '20px',
    backgroundColor: '#fffdfa',
    padding: '0.6rem 1.2rem',
    borderRadius: '9999px',
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
    fontSize: '0.85rem',
    fontWeight: '600',
    color: '#2c1f1d',
    boxShadow: '0 8px 20px rgba(0,0,0,0.12)',
  },
  introTextCol: {},
  introParagraph: {
    fontSize: '1.02rem',
    color: '#5c4642',
    lineHeight: '1.75',
    marginBottom: '1rem',
  },
  cardsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(310px, 1fr))',
    gap: '2rem',
  },
  whyGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
    gap: '2rem',
  },
  whyCard: {
    padding: '2rem',
    backgroundColor: '#fffdfa',
    transition: 'transform 0.3s ease',
  },
  whyIconBox: {
    width: '52px',
    height: '52px',
    borderRadius: '16px',
    backgroundColor: '#fdf5f2',
    border: '1px solid #f7d6cd',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: '1.2rem',
  },
  whyTitle: {
    fontFamily: "'Playfair Display', serif",
    fontSize: '1.3rem',
    color: '#2c1f1d',
    marginBottom: '0.5rem',
  },
  whyDesc: {
    fontSize: '0.9rem',
    color: '#5c4642',
    lineHeight: '1.6',
  },
  packagesGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(310px, 1fr))',
    gap: '2rem',
    alignItems: 'stretch',
  },
  bridalBannerSection: {
    backgroundColor: '#9c6644',
    color: '#fffdfa',
    padding: '5rem 0',
  },
  bridalGrid: {
    display: 'grid',
    gridTemplateColumns: '1.1fr 0.9fr',
    gap: '3rem',
    alignItems: 'center',
  },
  bridalHeading: {
    fontFamily: "'Playfair Display', serif",
    fontSize: '2.8rem',
    color: '#fffdfa',
    marginBottom: '1rem',
  },
  bridalText: {
    fontSize: '1.05rem',
    color: 'rgba(255, 253, 250, 0.9)',
    lineHeight: '1.7',
    marginBottom: '1.8rem',
  },
  bridalPillsGroup: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '0.6rem',
    fontSize: '0.85rem',
    color: '#d4af37',
    fontWeight: '500',
  },
  bridalImgFrame: {
    borderRadius: '24px',
    overflow: 'hidden',
    boxShadow: '0 20px 40px rgba(0,0,0,0.3)',
    border: '3px solid rgba(255,255,255,0.2)',
  },
  bridalImg: {
    width: '100%',
    height: '420px',
    objectFit: 'cover',
  },
  instaGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))',
    gap: '1.2rem',
  },
  instaCard: {
    position: 'relative',
    height: '200px',
    borderRadius: '16px',
    overflow: 'hidden',
    display: 'block',
  },
  instaImg: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    transition: 'transform 0.4s ease',
  },
  instaOverlay: {
    position: 'absolute',
    inset: 0,
    backgroundColor: 'rgba(44, 31, 29, 0.5)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    opacity: 0,
    transition: 'opacity 0.3s ease',
  },
  bookingSectionGrid: {
    display: 'grid',
    gridTemplateColumns: '0.9fr 1.1fr',
    gap: '2.5rem',
    alignItems: 'start',
  },
  contactInfoCard: {
    padding: '2.2rem',
    backgroundColor: '#fffdfa',
  },
  contactCardTitle: {
    fontFamily: "'Playfair Display', serif",
    fontSize: '1.6rem',
    color: '#2c1f1d',
    marginBottom: '0.5rem',
  },
  contactCardDesc: {
    fontSize: '0.9rem',
    color: '#5c4642',
    marginBottom: '1.8rem',
  },
  infoList: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1.3rem',
  },
  infoItem: {
    display: 'flex',
    gap: '1rem',
    alignItems: 'flex-start',
  },
};

// Hover CSS rules for Instagram feed
if (typeof document !== 'undefined') {
  const homeStyle = document.createElement('style');
  homeStyle.innerHTML = `
    a[style*="instaCard"]:hover img { transform: scale(1.1); }
    a[style*="instaCard"]:hover div[style*="instaOverlay"] { opacity: 1 !important; }
    @media (max-width: 991px) {
      div[style*="introGrid"] { grid-template-columns: 1fr !important; }
      div[style*="bridalGrid"] { grid-template-columns: 1fr !important; }
      div[style*="bookingSectionGrid"] { grid-template-columns: 1fr !important; }
    }
  `;
  document.head.appendChild(homeStyle);
}

export default Home;
