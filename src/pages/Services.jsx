import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Sparkles, Search } from 'lucide-react';
import SectionTitle from '../components/SectionTitle';
import ServiceCard from '../components/ServiceCard';
import { serviceCategories, servicesData } from '../data/services';

const Services = ({ onSelectService }) => {
  const [searchParams] = useSearchParams();
  const catParam = searchParams.get('cat');

  const [activeTab, setActiveTab] = useState(catParam || 'all');
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    if (catParam) {
      setActiveTab(catParam);
    }
  }, [catParam]);

  const filteredServices = servicesData.filter(service => {
    const matchesTab = activeTab === 'all' || service.category === activeTab;
    const matchesSearch = service.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          service.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesTab && matchesSearch;
  });

  return (
    <div>
      {/* Header Banner */}
      <section style={styles.headerBanner}>
        <div className="container" style={{ textAlign: 'center' }}>
          <span className="badge-luxury" style={{ backgroundColor: '#2c1f1d', color: '#d4af37', borderColor: '#d4af37' }}>
            <Sparkles size={13} /> COMPLETE SERVICE MENU
          </span>
          <h1 style={styles.headerTitle}>Our Beauty & Wellness Services</h1>
          <p style={styles.headerDesc}>
            Explore our curated menu of hair styling, skin facials, HD makeup, gel nails, and waxing treatments.
          </p>
        </div>
      </section>

      {/* Main Filter & Services Section */}
      <section className="section-padding" style={{ backgroundColor: '#f9f3ef' }}>
        <div className="container">
          {/* Category Tabs & Search Bar */}
          <div style={styles.filterControls}>
            <div style={styles.tabsRow}>
              {serviceCategories.map(cat => (
                <button
                  key={cat.id}
                  onClick={() => setActiveTab(cat.id)}
                  style={{
                    ...styles.tabBtn,
                    backgroundColor: activeTab === cat.id ? '#2c1f1d' : '#fffdfa',
                    color: activeTab === cat.id ? '#fffdfa' : '#2c1f1d',
                    borderColor: activeTab === cat.id ? '#2c1f1d' : '#ebdcd5',
                  }}
                >
                  {cat.label}
                </button>
              ))}
            </div>

            {/* Search input */}
            <div style={styles.searchBox}>
              <Search size={18} color="#9c6644" style={{ flexShrink: 0 }} />
              <input
                type="text"
                placeholder="Search services (e.g. Facial, Keratin, Makeup)..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                style={styles.searchInput}
              />
            </div>
          </div>

          {/* Results Counter */}
          <div style={styles.resultCount}>
            Showing <strong>{filteredServices.length}</strong> beauty services
          </div>

          {/* Services Grid */}
          {filteredServices.length > 0 ? (
            <div style={styles.grid}>
              {filteredServices.map(service => (
                <ServiceCard
                  key={service.id}
                  service={service}
                  onSelectService={onSelectService}
                />
              ))}
            </div>
          ) : (
            <div style={styles.emptyState}>
              <h3>No matching services found</h3>
              <p>Try clearing your search query or selecting another category tab.</p>
              <button
                onClick={() => { setActiveTab('all'); setSearchQuery(''); }}
                className="btn btn-primary"
                style={{ marginTop: '1rem' }}
              >
                Reset Filters
              </button>
            </div>
          )}
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
  filterControls: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '1.5rem',
    marginBottom: '2.5rem',
  },
  tabsRow: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    gap: '0.6rem',
  },
  tabBtn: {
    padding: '0.6rem 1.4rem',
    borderRadius: '9999px',
    border: '1px solid #ebdcd5',
    fontSize: '0.9rem',
    fontWeight: '500',
    cursor: 'pointer',
    transition: 'all 0.25s ease',
    boxShadow: 'var(--shadow-sm)',
  },
  searchBox: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.6rem',
    backgroundColor: '#fffdfa',
    border: '1px solid #ebdcd5',
    borderRadius: '9999px',
    padding: '0.5rem 1.2rem',
    maxWidth: '450px',
    width: '100%',
    boxShadow: 'var(--shadow-sm)',
  },
  searchInput: {
    border: 'none',
    outline: 'none',
    width: '100%',
    fontSize: '0.9rem',
    fontFamily: "'Poppins', sans-serif",
    backgroundColor: 'transparent',
    color: '#2c1f1d',
  },
  resultCount: {
    marginBottom: '1.5rem',
    fontSize: '0.88rem',
    color: '#5c4642',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(310px, 1fr))',
    gap: '2rem',
  },
  emptyState: {
    textAlign: 'center',
    padding: '4rem 1rem',
    backgroundColor: '#fffdfa',
    borderRadius: '16px',
    border: '1px solid #ebdcd5',
  },
};

export default Services;
