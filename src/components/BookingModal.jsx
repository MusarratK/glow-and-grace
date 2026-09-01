import React, { useEffect } from 'react';
import { X } from 'lucide-react';
import BookingForm from './BookingForm';

const BookingModal = ({ isOpen, onClose, preselectedService, preselectedPackage }) => {
  if (!isOpen) return null;

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  return (
    <div className="modal-overlay" style={styles.overlay} onClick={onClose}>
      <div className="modal-content" style={styles.modal} onClick={(e) => e.stopPropagation()}>
        <button style={styles.closeBtn} onClick={onClose} aria-label="Close Booking Modal">
          <X size={22} color="#2c1f1d" />
        </button>

        <BookingForm
          preselectedService={preselectedService}
          preselectedPackage={preselectedPackage}
          onClose={onClose}
        />
      </div>
    </div>
  );
};

const styles = {
  overlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100vw',
    height: '100vh',
    backgroundColor: 'rgba(44, 31, 29, 0.75)',
    backdropFilter: 'blur(8px)',
    zIndex: 99999,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '1rem',
  },
  modal: {
    position: 'relative',
    maxWidth: '650px',
    width: '100%',
    maxHeight: '90vh',
    overflowY: 'auto',
    borderRadius: '24px',
  },
  closeBtn: {
    position: 'absolute',
    top: '18px',
    right: '18px',
    backgroundColor: '#fdf5f2',
    border: '1px solid #ebdcd5',
    width: '36px',
    height: '36px',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    zIndex: 10,
  },
};

export default BookingModal;
