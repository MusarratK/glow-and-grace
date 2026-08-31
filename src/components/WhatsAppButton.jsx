import React from 'react';
import { MessageCircle } from 'lucide-react';
import { businessData } from '../data/business';

const WhatsAppButton = () => {
  const message = encodeURIComponent(`Hi ${businessData.name}, I would like to book an appointment.`);
  const whatsappUrl = `https://wa.me/${businessData.whatsappRaw}?text=${message}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      style={styles.floatingBtn}
      aria-label="Chat on WhatsApp"
      title="Book on WhatsApp"
    >
      <div style={styles.pulseBg} />
      <MessageCircle size={28} color="#ffffff" fill="#ffffff" />
      <span style={styles.tooltip}>Book via WhatsApp</span>
    </a>
  );
};

const styles = {
  floatingBtn: {
    position: 'fixed',
    bottom: '32px',
    right: '24px',
    width: '60px',
    height: '60px',
    backgroundColor: '#25D366',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    boxShadow: '0 8px 25px rgba(37, 211, 102, 0.45)',
    zIndex: 99999,
    cursor: 'pointer',
    transition: 'all 0.3s ease',
  },
  pulseBg: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    borderRadius: '50%',
    backgroundColor: '#25D366',
    opacity: 0.6,
    zIndex: -1,
    animation: 'pulseGlow 2s infinite',
  },
  tooltip: {
    position: 'absolute',
    right: '70px',
    backgroundColor: '#2c1f1d',
    color: '#fffdfa',
    padding: '0.4rem 0.8rem',
    borderRadius: '6px',
    fontSize: '0.8rem',
    fontWeight: '500',
    whiteSpace: 'nowrap',
    boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
    pointerEvents: 'none',
    opacity: 0.9,
  }
};

export default WhatsAppButton;
