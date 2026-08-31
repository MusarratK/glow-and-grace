import React from 'react';

const SectionTitle = ({ subtitle, title, description, center = true, light = false }) => {
  return (
    <div className={`section-title-wrapper ${center ? 'text-center' : 'text-left'}`}>
      {subtitle && <span className="section-subtitle">{subtitle}</span>}
      {title && (
        <h2 className={`section-title ${light ? 'text-white' : ''}`}>
          {title}
        </h2>
      )}
      {description && (
        <p className={`section-desc ${light ? 'text-white-80' : ''}`}>
          {description}
        </p>
      )}
    </div>
  );
};

export default SectionTitle;
