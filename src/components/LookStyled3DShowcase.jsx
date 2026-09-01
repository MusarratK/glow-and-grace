import React, { useState, useRef } from 'react';
import { Play, Pause, Sparkles, Eye, Volume2, VolumeX, RotateCcw, Maximize2, ShieldCheck, Calendar, ArrowRight, Sun, Moon, Zap } from 'lucide-react';

const lookStyledItems = [
  {
    id: 'bridal-3d',
    title: 'Royal HD Bridal Glam',
    subtitle: '3D High-Definition Bridal Makeup & Draping',
    tag: '3D BRIDAL LOOK',
    description: 'Experience 3D radiance with sweatproof 18+ hour HD airbrush makeup, gold leaf eyeshadow, and designer hair drape.',
    videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-beautiful-woman-putting-on-makeup-41221-large.mp4',
    posterUrl: 'https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&q=80&w=1000',
    glowColor: 'rgba(212, 175, 55, 0.45)',
    accentColor: '#d4af37',
    badge: '3D Spotlight Mode',
    features: ['18+ Hr Waterproof', 'Airbrush Porcelain Finish', 'Custom Eye Shading']
  },
  {
    id: 'hair-3d',
    title: 'Silk Keratin & Balayage',
    subtitle: '3D Motion Hair Gloss Transformation',
    tag: '3D HAIR MOTION',
    description: 'Watch hair fluid motion with deep protein restructuring, caramel balayage dimension, and glass shine texture.',
    videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-hairdresser-brushing-a-womans-long-hair-41209-large.mp4',
    posterUrl: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&q=80&w=1000',
    glowColor: 'rgba(156, 102, 68, 0.45)',
    accentColor: '#9c6644',
    badge: '3D Hair Dynamics',
    features: ['Zero Frizz Guarantee', 'Pure Keratin Protein', '3D Color Depth']
  },
  {
    id: 'facial-3d',
    title: '24K Gold Glass Skin Facial',
    subtitle: '3D Cellular Hydration & Collagen Polish',
    tag: '3D SKIN RADIANCE',
    description: 'Intense 3D collagen infusion and pure gold leaf absorption for poreless, luminous glass skin finish.',
    videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-woman-receiving-a-facial-massage-at-a-spa-41225-large.mp4',
    posterUrl: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&q=80&w=1000',
    glowColor: 'rgba(244, 232, 193, 0.5)',
    accentColor: '#b8860b',
    badge: '3D Glow Matrix',
    features: ['24K Pure Gold Foil', 'Lymphatic Detox Spa', 'Instant Dewy Skin']
  },
  {
    id: 'nails-3d',
    title: 'French Ombre Gel Extensions',
    subtitle: '3D Sparkle & Nail Architecture',
    tag: '3D NAIL ART',
    description: 'Sculpted gel nail extensions with 3D crystal embellishments, chrome powder reflections, and anti-chip seal.',
    videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-applying-nail-polish-on-a-womans-hands-41215-large.mp4',
    posterUrl: 'https://images.unsplash.com/photo-1604654894610-df63bc536371?auto=format&fit=crop&q=80&w=1000',
    glowColor: 'rgba(247, 214, 205, 0.5)',
    accentColor: '#f7d6cd',
    badge: '3D Crystal Reflection',
    features: ['Non-Yellowing Gel', '3D Swarovski Accents', '4-Week Chip-Free']
  }
];

const lightingModes = [
  { id: 'gold', name: 'Studio Gold', icon: Sun, shadow: '0 25px 60px rgba(212, 175, 55, 0.35)', bg: 'linear-gradient(135deg, rgba(212,175,55,0.15) 0%, rgba(44,31,29,0.95) 100%)' },
  { id: 'spotlight', name: 'HD Spotlight', icon: Zap, shadow: '0 25px 60px rgba(255, 255, 255, 0.25)', bg: 'linear-gradient(135deg, rgba(255,255,255,0.12) 0%, rgba(20,20,25,0.95) 100%)' },
  { id: 'rose', name: 'Rose Sunset', icon: Moon, shadow: '0 25px 60px rgba(247, 214, 205, 0.35)', bg: 'linear-gradient(135deg, rgba(247,214,205,0.15) 0%, rgba(55,30,35,0.95) 100%)' },
];

const LookStyled3DShowcase = ({ onOpenBooking }) => {
  const [selectedLook, setSelectedLook] = useState(lookStyledItems[0]);
  const [activeLighting, setActiveLighting] = useState(lightingModes[0]);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const [rotX, setRotX] = useState(0);
  const [rotY, setRotY] = useState(0);

  const videoRef = useRef(null);
  const cardRef = useRef(null);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    setRotX((-y / rect.height) * 16);
    setRotY((x / rect.width) * 16);
  };

  const handleMouseLeave = () => {
    setRotX(0);
    setRotY(0);
  };

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  const toggleMute = () => {
    if (!videoRef.current) return;
    videoRef.current.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  const resetRotation = () => {
    setRotX(0);
    setRotY(0);
  };

  const handleSelectLook = (look) => {
    setSelectedLook(look);
    setIsPlaying(true);
    if (videoRef.current) {
      videoRef.current.load();
      videoRef.current.play().catch(err => console.log('Autoplay:', err));
    }
  };

  return (
    <section className="section-padding" style={styles.section}>
      <div className="container">
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <span className="badge-luxury" style={{ backgroundColor: '#2c1f1d', color: '#d4af37', borderColor: '#d4af37' }}>
            <Sparkles size={13} /> 3D VIRTUAL STYLING EXPERIENCE
          </span>
          <h2 className="section-title" style={{ marginTop: '0.8rem' }}>
            3D Video Look Styled Showcase
          </h2>
          <p className="section-desc">
            Interact with our immersive 3D beauty & hairstyling showcase. Rotate in 3D space, toggle studio lighting, and preview your makeover in high motion video.
          </p>
        </div>

        {/* Style Selector Tabs */}
        <div style={styles.tabBar} className="cards-grid">
          {lookStyledItems.map((look) => {
            const isSelected = selectedLook.id === look.id;
            return (
              <button
                key={look.id}
                onClick={() => handleSelectLook(look)}
                style={{
                  ...styles.tabBtn,
                  backgroundColor: isSelected ? '#2c1f1d' : '#fffdfa',
                  borderColor: isSelected ? look.accentColor : '#ebdcd5',
                  boxShadow: isSelected ? `0 8px 25px ${look.glowColor}` : 'var(--shadow-sm)',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                  <Sparkles size={16} color={isSelected ? look.accentColor : '#9c6644'} />
                  <div style={{ textAlign: 'left' }}>
                    <div style={{ fontSize: '0.88rem', fontWeight: '700', color: isSelected ? '#fffdfa' : '#2c1f1d' }}>
                      {look.title}
                    </div>
                    <div style={{ fontSize: '0.72rem', color: isSelected ? 'rgba(255,253,250,0.75)' : '#9c6644' }}>
                      {look.tag}
                    </div>
                  </div>
                </div>
              </button>
            );
          })}
        </div>

        {/* Main 3D Card & Video Player Grid */}
        <div style={styles.main3DGrid} className="intro-grid">
          {/* Left Column: 3D Video Card Stage */}
          <div style={styles.stageCol}>
            <div
              ref={cardRef}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              style={{
                ...styles.card3D,
                transform: `perspective(1000px) rotateX(${rotX}deg) rotateY(${rotY}deg)`,
                boxShadow: activeLighting.shadow,
                background: activeLighting.bg,
              }}
            >
              {/* Top Badge Overlay */}
              <div style={styles.topBadgeOverlay}>
                <span className="badge-luxury" style={{ backgroundColor: 'rgba(44,31,29,0.85)', color: '#d4af37', borderColor: '#d4af37' }}>
                  <Eye size={12} /> {selectedLook.badge}
                </span>
                <span style={styles.tiltInstruction}>
                  ✨ Move Cursor / Drag to Tilt 3D
                </span>
              </div>

              {/* Video Element with Fallback Poster */}
              <div style={styles.videoWrapper}>
                <video
                  ref={videoRef}
                  src={selectedLook.videoUrl}
                  poster={selectedLook.posterUrl}
                  autoPlay
                  loop
                  muted={isMuted}
                  playsInline
                  style={styles.videoElement}
                  onPlay={() => setIsPlaying(true)}
                  onPause={() => setIsPlaying(false)}
                />
              </div>

              {/* 3D Glass Control Toolbar */}
              <div style={styles.controlToolbar}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                  <button onClick={togglePlay} style={styles.toolBtn} aria-label="Play or Pause 3D Video">
                    {isPlaying ? <Pause size={18} color="#fffdfa" /> : <Play size={18} color="#fffdfa" />}
                  </button>
                  <button onClick={toggleMute} style={styles.toolBtn} aria-label="Mute or Unmute Video">
                    {isMuted ? <VolumeX size={18} color="#fffdfa" /> : <Volume2 size={18} color="#fffdfa" />}
                  </button>
                  <button onClick={resetRotation} style={styles.toolBtn} title="Reset 3D Angle" aria-label="Reset 3D Angle">
                    <RotateCcw size={16} color="#fffdfa" />
                  </button>
                </div>

                {/* Lighting Switchers */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                  {lightingModes.map((lm) => {
                    const Icon = lm.icon;
                    const isActive = activeLighting.id === lm.id;
                    return (
                      <button
                        key={lm.id}
                        onClick={() => setActiveLighting(lm)}
                        style={{
                          ...styles.lightingBtn,
                          backgroundColor: isActive ? '#d4af37' : 'rgba(255,255,255,0.15)',
                          color: isActive ? '#2c1f1d' : '#fffdfa',
                        }}
                        title={`Switch to ${lm.name} Lighting`}
                      >
                        <Icon size={14} />
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Look Details & Direct Booking */}
          <div style={styles.detailsCol}>
            <span style={{ ...styles.lookTag, color: selectedLook.accentColor }}>
              {selectedLook.tag}
            </span>
            <h3 style={styles.lookTitle}>{selectedLook.title}</h3>
            <p style={styles.lookSubtitle}>{selectedLook.subtitle}</p>
            <p style={styles.lookDesc}>{selectedLook.description}</p>

            {/* Key Features List */}
            <div style={styles.featuresGroup}>
              {selectedLook.features.map((feat, idx) => (
                <div key={idx} style={styles.featurePill}>
                  <ShieldCheck size={16} color={selectedLook.accentColor} />
                  <span>{feat}</span>
                </div>
              ))}
            </div>

            {/* CTA Box */}
            <div style={styles.ctaCard} className="glass-card">
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', marginBottom: '1rem' }}>
                <Sparkles size={20} color="#d4af37" />
                <div>
                  <h4 style={{ fontFamily: "'Playfair Display', serif", fontSize: '1.1rem', color: '#2c1f1d' }}>
                    Want This Exact 3D Look Styled for You?
                  </h4>
                  <p style={{ fontSize: '0.82rem', color: '#5c4642' }}>
                    Book an exclusive consultation with our master stylists in Pune.
                  </p>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '0.8rem', flexWrap: 'wrap' }}>
                <button
                  onClick={() => onOpenBooking(selectedLook.title)}
                  className="btn btn-gold btn-lg"
                  style={{ width: '100%' }}
                >
                  <Calendar size={18} /> Book {selectedLook.title}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const styles = {
  section: {
    backgroundColor: 'var(--color-nude)',
    position: 'relative',
    overflow: 'hidden',
  },
  tabBar: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
    gap: '1rem',
    marginBottom: '3rem',
  },
  tabBtn: {
    padding: '0.9rem 1.2rem',
    borderRadius: '16px',
    border: '1.5px solid var(--color-border)',
    cursor: 'pointer',
    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
    width: '100%',
  },
  main3DGrid: {
    display: 'grid',
    gridTemplateColumns: '1.1fr 0.9fr',
    gap: '3rem',
    alignItems: 'center',
  },
  stageCol: {
    display: 'flex',
    justifyContent: 'center',
  },
  card3D: {
    position: 'relative',
    width: '100%',
    maxWidth: '560px',
    borderRadius: '28px',
    padding: '1.2rem',
    border: '1px solid rgba(255, 255, 255, 0.25)',
    transition: 'transform 0.15s ease-out, box-shadow 0.3s ease',
    transformStyle: 'preserve-3d',
  },
  topBadgeOverlay: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '0.8rem',
    padding: '0 0.4rem',
  },
  tiltInstruction: {
    fontSize: '0.72rem',
    color: 'rgba(255, 253, 250, 0.75)',
    fontWeight: '500',
  },
  videoWrapper: {
    position: 'relative',
    width: '100%',
    height: '360px',
    borderRadius: '20px',
    overflow: 'hidden',
    backgroundColor: '#1a100f',
    boxShadow: 'inset 0 0 20px rgba(0,0,0,0.6)',
  },
  videoElement: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  },
  controlToolbar: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: '1rem',
    padding: '0.6rem 0.8rem',
    backgroundColor: 'rgba(0, 0, 0, 0.35)',
    backdropFilter: 'blur(10px)',
    WebkitBackdropFilter: 'blur(10px)',
    borderRadius: '16px',
    border: '1px solid rgba(255, 255, 255, 0.12)',
  },
  toolBtn: {
    width: '36px',
    height: '36px',
    borderRadius: '50%',
    backgroundColor: 'rgba(255, 255, 255, 0.15)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    transition: 'all 0.2s ease',
  },
  lightingBtn: {
    width: '32px',
    height: '32px',
    borderRadius: '50%',
    border: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    transition: 'all 0.2s ease',
  },
  detailsCol: {
    display: 'flex',
    flexDirection: 'column',
    gap: '0.8rem',
  },
  lookTag: {
    fontSize: '0.78rem',
    fontWeight: '700',
    letterSpacing: '2px',
    textTransform: 'uppercase',
  },
  lookTitle: {
    fontFamily: "'Playfair Display', serif",
    fontSize: '2.4rem',
    color: 'var(--color-dark)',
    lineHeight: '1.2',
  },
  lookSubtitle: {
    fontSize: '1rem',
    color: '#d4af37',
    fontWeight: '600',
  },
  lookDesc: {
    fontSize: '0.96rem',
    color: 'var(--color-dark-muted)',
    lineHeight: '1.7',
    marginTop: '0.3rem',
  },
  featuresGroup: {
    display: 'flex',
    flexDirection: 'column',
    gap: '0.6rem',
    margin: '1rem 0',
  },
  featurePill: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.6rem',
    fontSize: '0.88rem',
    color: 'var(--color-dark)',
    fontWeight: '500',
  },
  ctaCard: {
    padding: '1.5rem',
    marginTop: '1rem',
    backgroundColor: 'var(--color-card-solid)',
    border: '1px solid var(--color-border)',
  },
};

export default LookStyled3DShowcase;
