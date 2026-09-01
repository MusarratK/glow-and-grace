import React from 'react';
import { Sparkles, Gift, Tag, Calendar, CheckCircle } from 'lucide-react';
import SectionTitle from '../components/SectionTitle';
import OfferBanner from '../components/OfferBanner';
import { activeVouchers } from '../data/offers';

const Offers = ({ onClaimOffer }) => {
  return (
    <div>
      {/* Header Banner */}
      <section className="page-header-banner" style={styles.headerBanner}>
        <div className="container" style={{ textAlign: 'center' }}>
          <span className="badge-luxury" style={{ backgroundColor: '#2c1f1d', color: '#d4af37', borderColor: '#d4af37' }}>
            <Gift size={13} /> SPECIAL DISCOUNTS & DEALS
          </span>
          <h1 className="page-header-title" style={styles.headerTitle}>Glow More, Spend Less</h1>
          <p className="page-header-desc" style={styles.headerDesc}>
            Enjoy exclusive promotional offers, seasonal discount vouchers, and package deals.
          </p>
        </div>
      </section>

      {/* Main Countdown Offer Section */}
      <section className="section-padding" style={{ backgroundColor: '#f9f3ef' }}>
        <div className="container">
          <OfferBanner onClaimOffer={onClaimOffer} />
        </div>
      </section>

      {/* Active Vouchers Grid */}
      <section className="section-padding" style={{ backgroundColor: '#fffdfa' }}>
        <div className="container">
          <SectionTitle
            subtitle="PROMO CODES"
            title="Active Seasonal Vouchers"
            description="Use any of the valid promo codes below when requesting your salon appointment."
          />

          <div className="vouchers-grid" style={styles.vouchersGrid}>
            {activeVouchers.map(v => (
              <div key={v.id} className="glass-card" style={styles.voucherCard}>
                <div style={styles.discountBadge}>
                  <Tag size={16} /> {v.discount}
                </div>
                <h3 style={styles.voucherTitle}>{v.title}</h3>
                <p style={styles.validOn}><strong>Valid On:</strong> {v.validOn}</p>
                
                <div style={styles.codeContainer}>
                  <span style={styles.codeLbl}>PROMO CODE:</span>
                  <span style={styles.codeValue}>{v.code}</span>
                </div>

                <p style={styles.expiry}>{v.expiry}</p>

                <button
                  onClick={() => onClaimOffer(v.code)}
                  className="btn btn-gold btn-sm"
                  style={{ width: '100%', marginTop: '1.2rem' }}
                >
                  <Calendar size={14} /> Claim Voucher
                </button>
              </div>
            ))}
          </div>
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
  vouchersGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
    gap: '2rem',
  },
  voucherCard: {
    padding: '2rem',
    backgroundColor: '#fffdfa',
    display: 'flex',
    flexDirection: 'column',
    position: 'relative',
    border: '1px dashed #d4af37',
  },
  discountBadge: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '0.4rem',
    backgroundColor: '#fdf5f2',
    color: '#9c6644',
    padding: '0.3rem 0.8rem',
    borderRadius: '6px',
    fontSize: '0.8rem',
    fontWeight: '700',
    marginBottom: '1rem',
    width: 'fit-content',
  },
  voucherTitle: {
    fontFamily: "'Playfair Display', serif",
    fontSize: '1.35rem',
    color: '#2c1f1d',
    marginBottom: '0.5rem',
  },
  validOn: {
    fontSize: '0.88rem',
    color: '#5c4642',
    marginBottom: '1.2rem',
  },
  codeContainer: {
    backgroundColor: '#f9f3ef',
    border: '1px solid #ebdcd5',
    padding: '0.6rem 1rem',
    borderRadius: '8px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '0.8rem',
  },
  codeLbl: {
    fontSize: '0.72rem',
    color: '#5c4642',
    fontWeight: '600',
  },
  codeValue: {
    fontFamily: "'Playfair Display', serif",
    fontSize: '1.1rem',
    fontWeight: '700',
    color: '#2c1f1d',
    letterSpacing: '1px',
  },
  expiry: {
    fontSize: '0.78rem',
    color: '#9c6644',
    fontStyle: 'italic',
  },
};

export default Offers;
