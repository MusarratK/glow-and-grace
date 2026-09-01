import React from 'react';
import { Sparkles, Check, HelpCircle } from 'lucide-react';
import SectionTitle from '../components/SectionTitle';
import PackageCard from '../components/PackageCard';
import { packagesData } from '../data/packages';

const Packages = ({ onSelectPackage }) => {
  return (
    <div>
      {/* Header Banner */}
      <section className="page-header-banner" style={styles.headerBanner}>
        <div className="container" style={{ textAlign: 'center' }}>
          <span className="badge-luxury" style={{ backgroundColor: '#2c1f1d', color: '#d4af37', borderColor: '#d4af37' }}>
            <Sparkles size={13} /> CURATED VALUE BUNDLES
          </span>
          <h1 className="page-header-title" style={styles.headerTitle}>Beauty & Wellness Packages</h1>
          <p className="page-header-desc" style={styles.headerDesc}>
            Save up to 35% with our transparent head-to-toe beauty pampering packages.
          </p>
        </div>
      </section>

      {/* Main Packages Grid */}
      <section className="section-padding" style={{ backgroundColor: '#f9f3ef' }}>
        <div className="container">
          <SectionTitle
            subtitle="CHOOSE YOUR EXPERIENCE"
            title="Popular Pricing Packages"
            description="Select the perfect pampering tier for your personal beauty goals."
          />

          <div className="packages-grid" style={styles.grid}>
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

      {/* Comparison Table Section */}
      <section className="section-padding" style={{ backgroundColor: '#fffdfa' }}>
        <div className="container">
          <SectionTitle
            subtitle="FEATURE COMPARISON"
            title="Package Inclusions at a Glance"
            description="Detailed comparison of included treatments across all package tiers."
          />

          <div style={{ overflowX: 'auto' }}>
            <table style={styles.table}>
              <thead>
                <tr>
                  <th style={styles.th}>Included Treatment</th>
                  <th style={styles.th}>BASIC BEAUTY (₹999)</th>
                  <th style={styles.th}>PREMIUM GLOW (₹1,999)</th>
                  <th style={styles.th}>BRIDAL LUXURY (₹4,999+)</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td style={styles.td}>Express Cleanup / Facial</td>
                  <td style={styles.td}><Check size={16} color="#d4af37" /> Cleanup</td>
                  <td style={styles.td}><Check size={16} color="#d4af37" /> Gold / Pearl Facial</td>
                  <td style={styles.td}><Check size={16} color="#d4af37" /> Diamond Polish Facial</td>
                </tr>
                <tr>
                  <td style={styles.td}>Eyebrows & Upper Lip Threading</td>
                  <td style={styles.td}><Check size={16} color="#d4af37" /> Included</td>
                  <td style={styles.td}><Check size={16} color="#d4af37" /> Included</td>
                  <td style={styles.td}><Check size={16} color="#d4af37" /> Full Face Threading</td>
                </tr>
                <tr>
                  <td style={styles.td}>Manicure & Pedicure</td>
                  <td style={styles.td}><Check size={16} color="#d4af37" /> Classic</td>
                  <td style={styles.td}><Check size={16} color="#d4af37" /> Aromatherapy</td>
                  <td style={styles.td}><Check size={16} color="#d4af37" /> Spa + Gel Extensions</td>
                </tr>
                <tr>
                  <td style={styles.td}>Waxing Treatments</td>
                  <td style={styles.td}>-</td>
                  <td style={styles.td}><Check size={16} color="#d4af37" /> Full Hand & Leg</td>
                  <td style={styles.td}><Check size={16} color="#d4af37" /> Full Body Rica Wax</td>
                </tr>
                <tr>
                  <td style={styles.td}>Haircare & Styling</td>
                  <td style={styles.td}>-</td>
                  <td style={styles.td}><Check size={16} color="#d4af37" /> Hair Spa</td>
                  <td style={styles.td}><Check size={16} color="#d4af37" /> Extensions & Styling</td>
                </tr>
                <tr>
                  <td style={styles.td}>HD Makeup Application</td>
                  <td style={styles.td}>-</td>
                  <td style={styles.td}>-</td>
                  <td style={styles.td}><Check size={16} color="#d4af37" /> Full HD Bridal Makeup</td>
                </tr>
              </tbody>
            </table>
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
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(310px, 1fr))',
    gap: '2rem',
    alignItems: 'stretch',
  },
  table: {
    width: '100%',
    borderCollapse: 'collapse',
    backgroundColor: 'var(--color-card-solid)',
    borderRadius: '16px',
    overflow: 'hidden',
    border: '1px solid var(--color-border)',
    boxShadow: 'var(--shadow-md)',
  },
  th: {
    fontFamily: "'Playfair Display', serif",
    fontSize: '1.05rem',
    backgroundColor: 'var(--color-dark)',
    color: 'var(--color-nude)',
    padding: '1.2rem 1.5rem',
    textAlign: 'left',
  },
  td: {
    padding: '1.1rem 1.5rem',
    borderBottom: '1px solid var(--color-border)',
    fontSize: '0.9rem',
    color: 'var(--color-dark)',
  },
};

export default Packages;
