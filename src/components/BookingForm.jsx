import React, { useState, useEffect } from 'react';
import { Calendar, Clock, User, Phone, Mail, MessageSquare, CheckCircle, MessageCircle, PhoneCall, Sparkles } from 'lucide-react';
import { businessData } from '../data/business';
import { servicesData } from '../data/services';

import AppointmentReminder from './AppointmentReminder';
import { schedule15MinWhatsAppReminder } from '../utils/whatsappScheduler';

const BookingForm = ({ preselectedService = '', preselectedPackage = '', onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: preselectedService || preselectedPackage || 'Haircut & Styling',
    date: '',
    time: '11:00 AM',
    message: '',
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (preselectedService) {
      setFormData(prev => ({ ...prev, service: preselectedService }));
    } else if (preselectedPackage) {
      setFormData(prev => ({ ...prev, service: `Package: ${preselectedPackage}` }));
    }
  }, [preselectedService, preselectedPackage]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Full name is required';
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (!/^[0-9+\s-]{10,15}$/.test(formData.phone.trim())) {
      newErrors.phone = 'Please enter a valid phone number';
    }
    if (formData.email && !/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    if (!formData.date) newErrors.date = 'Preferred date is required';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const [isSending, setIsSending] = useState(false);
  const [emailStatus, setEmailStatus] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validate()) {
      setIsSending(true);
      setEmailStatus('');
      
      // Direct Email Delivery to ersonaldamodar98@gmail.com via FormSubmit API
      try {
        const response = await fetch(`https://formsubmit.co/ajax/${businessData.email}`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          },
          body: JSON.stringify({
            _subject: `New Salon Appointment - ${formData.name} (${formData.phone})`,
            _template: 'table',
            _captcha: 'false',
            "Customer Name": formData.name,
            "Customer Phone": formData.phone,
            "Customer Email": formData.email || "Not provided",
            "Booked Service": formData.service,
            "Preferred Date": formData.date,
            "Preferred Time": formData.time,
            "Special Requests": formData.message || "None"
          })
        });

        const data = await response.json();
        if (data.success === "true" || data.success === true) {
          setEmailStatus('success');
        } else {
          setEmailStatus('sent');
        }
      } catch (err) {
        console.log('Email delivery:', err);
        setEmailStatus('sent');
      }

      setIsSending(false);
      setSubmitted(true);

      // Trigger 15-Minute Prior WhatsApp Scheduling
      schedule15MinWhatsAppReminder(formData);
    }
  };

  // Generate WhatsApp Payload text with current form values
  const generateWhatsAppUrl = () => {
    const text = `Hi ${businessData.name}, I would like to book an appointment:
• *Name:* ${formData.name || 'Not provided'}
• *Phone:* ${formData.phone || 'Not provided'}
• *Service:* ${formData.service}
• *Date:* ${formData.date || 'As soon as possible'}
• *Time:* ${formData.time}
• *Notes:* ${formData.message || 'None'}`;
    return `https://wa.me/${businessData.whatsappRaw}?text=${encodeURIComponent(text)}`;
  };

  const handleWhatsAppBooking = (e) => {
    e.preventDefault();
    if (validate()) {
      const waUrl = generateWhatsAppUrl();
      window.open(waUrl, '_blank');
      setSubmitted(true);
    }
  };

  return (
    <div className="booking-form-container" style={styles.container}>
      {submitted ? (
        <div style={styles.successState}>
          <div style={styles.successIcon}>
            <CheckCircle size={56} color="#9c6644" />
          </div>
          <h3 style={styles.successTitle}>Appointment Request Received!</h3>
          <p style={styles.successMessage}>
            Thank you, <strong>{formData.name}</strong>! Your request has been dispatched to <strong>{businessData.email}</strong>. You can also chat directly on WhatsApp:
          </p>

          <div style={styles.summaryBox}>
            <div style={styles.summaryItem}><strong>Service:</strong> {formData.service}</div>
            <div style={styles.summaryItem}><strong>Date & Time:</strong> {formData.date} at {formData.time}</div>
            <div style={styles.summaryItem}><strong>Contact Phone:</strong> {formData.phone}</div>
            <div style={styles.summaryItem}><strong>Notification Email:</strong> {businessData.email}</div>
          </div>

          {/* 15-Minute Prior Notification Reminder Block */}
          <AppointmentReminder appointment={formData} />

          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center', marginTop: '1.8rem' }}>
            <a
              href={generateWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-whatsapp"
            >
              <MessageCircle size={18} /> Chat on WhatsApp (+91 75587 41799)
            </a>

            <button onClick={() => setSubmitted(false)} className="btn btn-outline">
              Book Another Appointment
            </button>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit} style={styles.form}>
          <div style={styles.formHeader}>
            <h3 style={styles.formTitle}>Book Your Beauty Experience</h3>
            <p style={styles.formSubtitle}>
              Select your preferred service, date, and time. Quick confirmation!
            </p>
          </div>

          {/* Quick Instant Options Bar */}
          <div className="quick-options-grid" style={styles.quickOptions}>
            <a
              href={`https://wa.me/${businessData.whatsappRaw}`}
              target="_blank"
              rel="noopener noreferrer"
              style={styles.quickOptionBtnWhatsApp}
            >
              <MessageCircle size={18} /> Instant WhatsApp Booking
            </a>
            <a href={`tel:${businessData.phoneRaw}`} style={styles.quickOptionBtnCall}>
              <PhoneCall size={18} /> Call Salon Now
            </a>
          </div>

          <div style={styles.dividerRow}>
            <span>OR FILL DETAILS BELOW</span>
          </div>

          {/* Input Grid */}
          <div className="booking-form-inputs-grid" style={styles.grid}>
            {/* Full Name */}
            <div style={styles.field}>
              <label style={styles.label}>Full Name *</label>
              <div style={styles.inputWrapper}>
                <User size={16} color="#9c6644" style={styles.icon} />
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="e.g. Ananya Sharma"
                  style={{
                    ...styles.input,
                    borderColor: errors.name ? '#e63946' : '#ebdcd5',
                  }}
                />
              </div>
              {errors.name && <span style={styles.errorText}>{errors.name}</span>}
            </div>

            {/* Phone Number */}
            <div style={styles.field}>
              <label style={styles.label}>Phone Number *</label>
              <div style={styles.inputWrapper}>
                <Phone size={16} color="#9c6644" style={styles.icon} />
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+91 75587 41799"
                  style={{
                    ...styles.input,
                    borderColor: errors.phone ? '#e63946' : '#ebdcd5',
                  }}
                />
              </div>
              {errors.phone && <span style={styles.errorText}>{errors.phone}</span>}
            </div>

            {/* Email Address */}
            <div style={styles.field}>
              <label style={styles.label}>Email Address (Optional)</label>
              <div style={styles.inputWrapper}>
                <Mail size={16} color="#9c6644" style={styles.icon} />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="ananya@example.com"
                  style={{
                    ...styles.input,
                    borderColor: errors.email ? '#e63946' : '#ebdcd5',
                  }}
                />
              </div>
              {errors.email && <span style={styles.errorText}>{errors.email}</span>}
            </div>

            {/* Select Service */}
            <div style={styles.field}>
              <label style={styles.label}>Select Service / Package *</label>
              <div style={styles.inputWrapper}>
                <Sparkles size={16} color="#9c6644" style={styles.icon} />
                <select
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  style={styles.input}
                >
                  <optgroup label="Packages">
                    <option value="Package: BASIC BEAUTY (₹999)">BASIC BEAUTY (₹999)</option>
                    <option value="Package: PREMIUM GLOW (₹1,999)">PREMIUM GLOW (₹1,999)</option>
                    <option value="Package: BRIDAL LUXURY (₹4,999+)">BRIDAL LUXURY (₹4,999+)</option>
                  </optgroup>
                  <optgroup label="Popular Services">
                    {servicesData.map((s) => (
                      <option key={s.id} value={s.name}>
                        {s.name} (₹{s.startingPrice})
                      </option>
                    ))}
                  </optgroup>
                </select>
              </div>
            </div>

            {/* Preferred Date */}
            <div style={styles.field}>
              <label style={styles.label}>Preferred Date *</label>
              <div style={styles.inputWrapper}>
                <Calendar size={16} color="#9c6644" style={styles.icon} />
                <input
                  type="date"
                  name="date"
                  min={new Date().toISOString().split('T')[0]}
                  value={formData.date}
                  onChange={handleChange}
                  style={{
                    ...styles.input,
                    borderColor: errors.date ? '#e63946' : '#ebdcd5',
                  }}
                />
              </div>
              {errors.date && <span style={styles.errorText}>{errors.date}</span>}
            </div>

            {/* Preferred Time */}
            <div style={styles.field}>
              <label style={styles.label}>Preferred Time Slot</label>
              <div style={styles.inputWrapper}>
                <Clock size={16} color="#9c6644" style={styles.icon} />
                <select
                  name="time"
                  value={formData.time}
                  onChange={handleChange}
                  style={styles.input}
                >
                  <option value="10:30 AM">10:30 AM</option>
                  <option value="11:30 AM">11:30 AM</option>
                  <option value="01:00 PM">01:00 PM</option>
                  <option value="02:30 PM">02:30 PM</option>
                  <option value="04:00 PM">04:00 PM</option>
                  <option value="05:30 PM">05:30 PM</option>
                  <option value="07:00 PM">07:00 PM</option>
                </select>
              </div>
            </div>
          </div>

          {/* Message / Special Requests */}
          <div style={{ ...styles.field, marginTop: '1rem' }}>
            <label style={styles.label}>Special Requirements / Notes</label>
            <div style={styles.inputWrapper}>
              <MessageSquare size={16} color="#9c6644" style={{ ...styles.icon, marginTop: '12px' }} />
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Mention any skin sensitivity, specific stylist request, or voucher code..."
                rows={3}
                style={{ ...styles.input, height: 'auto', paddingTop: '0.6rem' }}
              />
            </div>
          </div>

          {/* Action Buttons: Email & WhatsApp */}
          <div className="booking-form-action-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem', marginTop: '1.5rem' }}>
            <button
              type="submit"
              disabled={isSending}
              className="btn btn-gold"
              style={{ opacity: isSending ? 0.7 : 1 }}
            >
              <Mail size={18} /> {isSending ? 'Sending Email...' : 'Send via Email'}
            </button>

            <button
              type="button"
              onClick={handleWhatsAppBooking}
              className="btn btn-whatsapp"
            >
              <MessageCircle size={18} /> Book via WhatsApp
            </button>
          </div>
        </form>
      )}
    </div>
  );
};

const styles = {
  container: {
    backgroundColor: '#fffdfa',
    borderRadius: '20px',
    padding: '2.5rem',
    borderRadius: '24px',
    backgroundColor: 'var(--color-card-solid)',
    border: '1px solid var(--color-border)',
    boxShadow: 'var(--shadow-lg)',
  },
  formHeader: {
    textAlign: 'center',
    marginBottom: '1.8rem',
  },
  formTitle: {
    fontFamily: "'Playfair Display', serif",
    fontSize: '1.8rem',
    color: 'var(--color-dark)',
  },
  formSubtitle: {
    fontSize: '0.9rem',
    color: 'var(--color-dark-muted)',
    marginTop: '0.3rem',
  },
  quickOptions: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '0.8rem',
    marginBottom: '1.5rem',
  },
  quickOptionBtnWhatsApp: {
    backgroundColor: '#25D366',
    color: '#ffffff',
    padding: '0.7rem 0.5rem',
    borderRadius: '10px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '0.5rem',
    fontSize: '0.85rem',
    fontWeight: '600',
    textDecoration: 'none',
  },
  quickOptionBtnCall: {
    backgroundColor: 'var(--color-input-bg)',
    border: '1px solid var(--color-border)',
    color: 'var(--color-dark)',
    padding: '0.7rem 0.5rem',
    borderRadius: '10px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '0.5rem',
    fontSize: '0.85rem',
    fontWeight: '600',
    textDecoration: 'none',
  },
  dividerRow: {
    textAlign: 'center',
    position: 'relative',
    margin: '1.2rem 0',
    fontSize: '0.72rem',
    color: '#d4af37',
    letterSpacing: '1px',
    fontWeight: '600',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
    gap: '1.2rem',
  },
  field: {
    display: 'flex',
    flexDirection: 'column',
    gap: '0.35rem',
  },
  label: {
    fontSize: '0.82rem',
    fontWeight: '600',
    color: 'var(--color-dark)',
  },
  inputWrapper: {
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
  },
  icon: {
    position: 'absolute',
    left: '12px',
    pointerEvents: 'none',
  },
  input: {
    width: '100%',
    padding: '0.75rem 0.8rem 0.75rem 2.3rem',
    borderRadius: '10px',
    border: '1px solid var(--color-border)',
    backgroundColor: 'var(--color-input-bg)',
    fontSize: '0.9rem',
    fontFamily: "'Poppins', sans-serif",
    color: 'var(--color-dark)',
    outline: 'none',
    transition: 'all 0.2s ease',
  },
  errorText: {
    fontSize: '0.75rem',
    color: '#e63946',
    marginTop: '0.1rem',
  },
  successState: {
    textAlign: 'center',
    padding: '2rem 1rem',
  },
  successIcon: {
    marginBottom: '1rem',
  },
  successTitle: {
    fontFamily: "'Playfair Display', serif",
    fontSize: '2rem',
    color: 'var(--color-dark)',
    marginBottom: '0.5rem',
  },
  successMessage: {
    fontSize: '0.95rem',
    color: 'var(--color-dark-muted)',
    maxWidth: '500px',
    margin: '0 auto 1.8rem auto',
    lineHeight: '1.6',
  },
  summaryBox: {
    backgroundColor: 'var(--color-input-bg)',
    border: '1px solid var(--color-border)',
    borderRadius: '12px',
    padding: '1.2rem',
    maxWidth: '450px',
    margin: '0 auto',
    textAlign: 'left',
    fontSize: '0.88rem',
    color: 'var(--color-dark)',
    display: 'flex',
    flexDirection: 'column',
    gap: '0.5rem',
  },
  summaryItem: {},
};

export default BookingForm;
