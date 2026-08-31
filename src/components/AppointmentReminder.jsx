import React from 'react';
import { Bell, Calendar, MessageCircle, Clock } from 'lucide-react';
import { businessData } from '../data/business';

const AppointmentReminder = ({ appointment }) => {
  // Generate Google Calendar Link with 15-min prior alert
  const getGoogleCalendarLink = () => {
    try {
      const dateStr = appointment.date || new Date().toISOString().split('T')[0];
      let timeStr = appointment.time || '16:00';
      
      // Parse time string e.g. "4:00 PM" -> 16:00
      let hours = 16;
      let minutes = 0;
      if (timeStr.includes('AM') || timeStr.includes('PM')) {
        const [hM, period] = timeStr.split(' ');
        const [h, m] = hM.split(':');
        hours = parseInt(h, 10);
        minutes = parseInt(m, 10) || 0;
        if (period === 'PM' && hours < 12) hours += 12;
        if (period === 'AM' && hours === 12) hours = 0;
      } else if (timeStr.includes(':')) {
        const [h, m] = timeStr.split(':');
        hours = parseInt(h, 10);
        minutes = parseInt(m, 10) || 0;
      }

      const start = new Date(`${dateStr}T${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:00`);
      const end = new Date(start.getTime() + 60 * 60 * 1000); // 1 hour duration

      const formatIso = (d) => d.toISOString().replace(/-|:|\.\d+/g, '');

      const title = `Appointment: ${appointment.service} at ${businessData.name}`;
      const details = `Beauty Parlour Appointment at ${businessData.name}\nService: ${appointment.service}\nClient: ${appointment.name}\nPhone: ${appointment.phone}\nNotes: ${appointment.message || 'None'}`;
      const location = businessData.address;

      return `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(title)}&details=${encodeURIComponent(details)}&location=${encodeURIComponent(location)}&dates=${formatIso(start)}/${formatIso(end)}`;
    } catch (e) {
      return 'https://calendar.google.com';
    }
  };

  // Generate 15-min prior WhatsApp reminder link
  const getWhatsAppReminderLink = () => {
    const text = `⏰ *REMINDER (15 Mins Before Appointment)*:
Hi ${appointment.name}, your appointment for *${appointment.service}* at ${businessData.name} is scheduled today at *${appointment.time}* (${businessData.address}).`;
    return `https://wa.me/${businessData.whatsappRaw}?text=${encodeURIComponent(text)}`;
  };

  return (
    <div style={styles.reminderCard}>
      <div style={styles.header}>
        <Bell size={20} color="#d4af37" />
        <h4 style={styles.title}>15-Minute Prior Notification Reminder</h4>
      </div>

      <p style={styles.desc}>
        Never miss your appointment! Click below to add this appointment to your Google / Phone Calendar. It will automatically trigger a <strong>15-minute prior reminder notification</strong> (e.g. at 3:45 PM for a 4:00 PM appointment).
      </p>

      <div style={styles.actionsGroup}>
        <a
          href={getGoogleCalendarLink()}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-gold btn-sm"
          style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem' }}
        >
          <Calendar size={16} /> Add to Calendar (15-Min Prior Alert)
        </a>

        <a
          href={getWhatsAppReminderLink()}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-whatsapp btn-sm"
          style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem' }}
        >
          <MessageCircle size={16} /> Send WhatsApp Reminder (+91 75587 41799)
        </a>
      </div>
    </div>
  );
};

const styles = {
  reminderCard: {
    backgroundColor: '#f9f3ef',
    border: '1px solid #d4af37',
    borderRadius: '16px',
    padding: '1.2rem 1.5rem',
    marginTop: '1.5rem',
    textAlign: 'left',
  },
  header: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.6rem',
    marginBottom: '0.4rem',
  },
  title: {
    fontFamily: "'Playfair Display', serif",
    fontSize: '1.1rem',
    color: '#2c1f1d',
  },
  desc: {
    fontSize: '0.85rem',
    color: '#5c4642',
    lineHeight: '1.5',
    marginBottom: '1rem',
  },
  actionsGroup: {
    display: 'flex',
    gap: '0.8rem',
    flexWrap: 'wrap',
  },
};

export default AppointmentReminder;
