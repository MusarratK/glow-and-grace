// Automated WhatsApp & Notification Scheduler Module for Salon Owner (+91 75587 41799)
// Calculates 15-minute prior timestamps and dispatches automated alerts to WhatsApp APIs & Web Notifications.

import { businessData } from '../data/business';

export const schedule15MinWhatsAppReminder = (appointment) => {
  try {
    const dateStr = appointment.date || new Date().toISOString().split('T')[0];
    let timeStr = appointment.time || '16:00';

    // Parse appointment time e.g. "4:00 PM" -> 16:00
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

    // Appointment Target Date
    const apptDate = new Date(`${dateStr}T${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:00`);
    
    // 15 Minutes prior target timestamp
    const reminderTime = new Date(apptDate.getTime() - 15 * 60 * 1000);
    const now = new Date();

    const delayMs = reminderTime.getTime() - now.getTime();

    const formattedTime = reminderTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

    console.log(`[WhatsApp Scheduler] 15-Min Reminder set for ${reminderTime.toLocaleString()} (Delay: ${delayMs}ms)`);

    // 1. If reminder time is in the future within current browser session, set local JS timer
    if (delayMs > 0 && delayMs < 2147483647) {
      setTimeout(() => {
        triggerOwnerWhatsAppAlert(appointment);
      }, delayMs);
    }

    // 2. Dispatch to Meta Cloud API / Twilio WhatsApp / UltraMsg Gateway if configured
    if (businessData.whatsappGatewayUrl) {
      fetch(businessData.whatsappGatewayUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          to: businessData.whatsappRaw, // 917558741799
          scheduled_at: reminderTime.toISOString(),
          message: `⏰ UPCOMING SALON APPOINTMENT IN 15 MINUTES!\n\nClient: ${appointment.name}\nPhone: ${appointment.phone}\nService: ${appointment.service}\nTime: ${appointment.time}\nDate: ${appointment.date}\nNotes: ${appointment.message || 'None'}`
        })
      }).catch(err => console.log('WhatsApp Gateway dispatch:', err));
    }

    return {
      scheduledFor: formattedTime,
      reminderTimestamp: reminderTime,
      ownerPhone: businessData.phone
    };
  } catch (e) {
    console.error('Error scheduling 15-min WhatsApp reminder:', e);
    return null;
  }
};

export const triggerOwnerWhatsAppAlert = (appointment) => {
  const text = `⏰ *UPCOMING SALON APPOINTMENT IN 15 MINS!*

• *Client Name:* ${appointment.name}
• *Client Phone:* ${appointment.phone}
• *Service:* ${appointment.service}
• *Scheduled Time:* ${appointment.time}
• *Notes:* ${appointment.message || 'None'}`;

  const url = `https://wa.me/${businessData.whatsappRaw}?text=${encodeURIComponent(text)}`;
  window.open(url, '_blank');
};
