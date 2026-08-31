import React, { useState, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import ScrollToTop from './components/ScrollToTop';
import BookingModal from './components/BookingModal';

import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Packages from './pages/Packages';
import Bridal from './pages/Bridal';
import Gallery from './pages/Gallery';
import Offers from './pages/Offers';
import Contact from './pages/Contact';

import { businessData } from './data/business';

function App() {
  const [bookingModalOpen, setBookingModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState('');
  const [selectedPackage, setSelectedPackage] = useState('');

  const location = useLocation();

  // Scroll to top on route change & dynamic page title
  useEffect(() => {
    window.scrollTo(0, 0);

    const pathTitles = {
      '/': `${businessData.name} | Best Beauty Parlour & Salon in Pune`,
      '/about': `About Us | ${businessData.name} Pune`,
      '/services': `Services & Pricing | ${businessData.name}`,
      '/packages': `Beauty Packages & Combos | ${businessData.name}`,
      '/bridal': `Royal Bridal Experience | ${businessData.name}`,
      '/gallery': `Portfolio & Photo Gallery | ${businessData.name}`,
      '/offers': `Offers & Vouchers | ${businessData.name}`,
      '/contact': `Contact Us & Book | ${businessData.name}`
    };

    document.title = pathTitles[location.pathname] || `${businessData.name} | Beauty Salon Pune`;
  }, [location]);

  // Inject Schema.org JSON-LD structured data for LocalBusiness / BeautySalon
  useEffect(() => {
    const jsonLd = {
      "@context": "https://schema.org",
      "@type": "BeautySalon",
      "name": businessData.name,
      "image": "https://images.unsplash.com/photo-1560066984-138dadb4c035",
      "@id": "https://glowandgrace.com",
      "url": "https://glowandgrace.com",
      "telephone": businessData.phone,
      "priceRange": "₹79 - ₹14,999",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Phoenix Marketcity, Viman Nagar",
        "addressLocality": "Pune",
        "addressRegion": "MH",
        "postalCode": "411014",
        "addressCountry": "IN"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": 18.5621,
        "longitude": 73.9143
      },
      "openingHoursSpecification": [
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
          "opens": "10:00",
          "closes": "20:00"
        },
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": "Sunday",
          "opens": "11:00",
          "closes": "18:00"
        }
      ],
      "sameAs": [
        businessData.socials.instagram,
        businessData.socials.facebook,
        businessData.socials.youtube
      ]
    };

    let scriptTag = document.getElementById('jsonld-schema');
    if (!scriptTag) {
      scriptTag = document.createElement('script');
      scriptTag.id = 'jsonld-schema';
      scriptTag.type = 'application/ld+json';
      document.head.appendChild(scriptTag);
    }
    scriptTag.text = JSON.stringify(jsonLd);
  }, []);

  const handleOpenBooking = (serviceName = '', packageName = '') => {
    setSelectedService(serviceName);
    setSelectedPackage(packageName);
    setBookingModalOpen(true);
  };

  const handleSelectServiceCard = (serviceObj) => {
    handleOpenBooking(serviceObj.name, '');
  };

  const handleSelectPackageCard = (pkgObj) => {
    handleOpenBooking('', pkgObj.name);
  };

  const handleClaimOffer = (codeStr) => {
    handleOpenBooking(`Promo Voucher: ${codeStr}`, '');
  };

  return (
    <div className="app-layout" style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      {/* Sticky Responsive Navigation Header */}
      <Navbar onOpenBooking={() => handleOpenBooking()} />

      {/* Main Content Router View */}
      <main style={{ flexGrow: 1 }}>
        <Routes>
          <Route
            path="/"
            element={
              <Home
                onOpenBooking={() => handleOpenBooking()}
                onSelectService={handleSelectServiceCard}
                onSelectPackage={handleSelectPackageCard}
                onClaimOffer={handleClaimOffer}
              />
            }
          />
          <Route
            path="/about"
            element={<About onOpenBooking={() => handleOpenBooking()} />}
          />
          <Route
            path="/services"
            element={<Services onSelectService={handleSelectServiceCard} />}
          />
          <Route
            path="/packages"
            element={<Packages onSelectPackage={handleSelectPackageCard} />}
          />
          <Route
            path="/bridal"
            element={<Bridal onOpenBooking={(s) => handleOpenBooking(s)} />}
          />
          <Route
            path="/gallery"
            element={<Gallery />}
          />
          <Route
            path="/offers"
            element={<Offers onClaimOffer={handleClaimOffer} />}
          />
          <Route
            path="/contact"
            element={<Contact />}
          />
        </Routes>
      </main>

      {/* Luxury Footer */}
      <Footer onOpenBooking={() => handleOpenBooking()} />

      {/* Floating Action Elements */}
      <WhatsAppButton />
      <ScrollToTop />

      {/* Global Booking Modal */}
      <BookingModal
        isOpen={bookingModalOpen}
        onClose={() => setBookingModalOpen(false)}
        preselectedService={selectedService}
        preselectedPackage={selectedPackage}
      />
    </div>
  );
}

export default App;
