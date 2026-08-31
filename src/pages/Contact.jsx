import React from 'react';
import { Sparkles, MapPin, Phone, Mail, Clock, MessageCircle, PhoneCall } from 'lucide-react';
import SectionTitle from '../components/SectionTitle';
import BookingForm from '../components/BookingForm';
import FAQAccordion from '../components/FAQAccordion';
import { businessData } from '../data/business';

const Contact = () => {
  return (
    <div>
      {/* Header Banner */}
      <section style={styles.headerBanner}>
        <div className="container" style={{ textAlign: 'center' }}>
          <span className="badge-luxury" style={{ backgroundColor: '#2c1f1d', color: '#d4af37', borderColor: '#d4af37' }}>
            <Sparkles size={13} /> GET IN TOUCH
          </span>
          <h1 style={styles.headerTitle}>Let's Make You Feel Beautiful</h1>
          <p style={styles.headerDesc}>
            Book an appointment online, call our reception desk, or visit our studio in Pune.
          </p>
        </div>
      </section>

      {/* Contact Grid & Booking Form */}
      <section className="section-padding" style={{ backgroundColor: '#fffdfa' }}>
        <div className="container">
          <div style={styles.contactGrid}>
            {/* Left: Contact Info & Action Buttons */}
            <div>
              <span className="section-subtitle">VISIT US IN PUNE</span>
              <h2 className="section-title" style={{ textAlign: 'left', margin: '0 0 1.2rem 0' }}>
                Contact & Studio Details
              </h2>
              <p style={{ color: '#5c4642', fontSize: '0.98rem', lineHeight: '1.7', marginBottom: '2rem' }}>
                Whether you need a quick haircut, a relaxing gold facial, or full HD bridal makeup planning, our friendly salon concierge is ready to assist you.
              </p>

              <div style={styles.infoCardsGroup}>
                <div className="glass-card" style={styles.infoCard}>
                  <MapPin size={24} color="#9c6644" style={{ flexShrink: 0 }} />
                  <div>
                    <h4 style={styles.infoTitle}>Location Address</h4>
                    <p style={styles.infoText}>{businessData.address}</p>
                  </div>
                </div>

                <div className="glass-card" style={styles.infoCard}>
                  <Phone size={24} color="#9c6644" style={{ flexShrink: 0 }} />
                  <div>
                    <h4 style={styles.infoTitle}>Call / WhatsApp Booking</h4>
                    <p style={styles.infoText}>
                      <a href={`tel:${businessData.phoneRaw}`} style={{ color: 'inherit' }}>{businessData.phone}</a>
                    </p>
                  </div>
                </div>

                <div className="glass-card" style={styles.infoCard}>
                  <Mail size={24} color="#9c6644" style={{ flexShrink: 0 }} />
                  <div>
                    <h4 style={styles.infoTitle}>Email Inquiries</h4>
                    <p style={styles.infoText}>
                      <a href={`mailto:${businessData.email}`} style={{ color: 'inherit' }}>{businessData.email}</a>
                    </p>
                  </div>
                </div>

                <div className="glass-card" style={styles.infoCard}>
                  <Clock size={24} color="#9c6644" style={{ flexShrink: 0 }} />
                  <div>
                    <h4 style={styles.infoTitle}>Opening Hours</h4>
                    <p style={styles.infoText}>{businessData.openingHours.weekdays}</p>
                    <p style={styles.infoText}>{businessData.openingHours.sunday}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Booking Form */}
            <div>
              <BookingForm />
            </div>
          </div>
        </div>
      </section>

      {/* Google Maps Embed Section */}
      <section style={{ backgroundColor: '#f9f3ef', paddingBottom: '4rem' }}>
        <div className="container">
          <SectionTitle
            subtitle="FIND US ON THE MAP"
            title="Google Maps Location"
            description="Easily locate Glow & Grace Beauty Studio on FC Road, Shivaji Nagar, Pune."
          />

          <div style={styles.mapContainer}>
            <iframe
              title="Glow & Grace Studio Location Map"
              src={businessData.googleMapsEmbed}
              width="100%"
              height="450"
              style={{ border: 0, borderRadius: '24px' }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding" style={{ backgroundColor: '#fffdfa' }}>
        <div className="container">
          <SectionTitle
            subtitle="HELP & GUIDANCE"
            title="Frequently Asked Questions"
            description="Find answers to common questions about salon visits, hygiene, and payments."
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
  contactGrid: {
    display: 'grid',
    gridTemplateColumns: '0.9fr 1.1fr',
    gap: '3rem',
    alignItems: 'start',
  },
  infoCardsGroup: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1.2rem',
  },
  infoCard: {
    padding: '1.5rem',
    display: 'flex',
    gap: '1.2rem',
    alignItems: 'flex-start',
    backgroundColor: '#fffdfa',
  },
  infoTitle: {
    fontFamily: "'Playfair Display', serif",
    fontSize: '1.15rem',
    color: '#2c1f1d',
    marginBottom: '0.2rem',
  },
  infoText: {
    fontSize: '0.9rem',
    color: '#5c4642',
    lineHeight: '1.5',
  },
  mapContainer: {
    borderRadius: '24px',
    overflow: 'hidden',
    boxShadow: 'var(--shadow-lg)',
    border: '2px solid #ebdcd5',
  },
};

if (typeof document !== 'undefined') {
  const contactStyle = document.createElement('style');
  contactStyle.innerHTML = `
    @media (max-width: 991px) {
      div[style*="contactGrid"] { grid-template-columns: 1fr !important; }
    }
  `;
  document.head.appendChild(contactStyle);
}

export default Contact;
