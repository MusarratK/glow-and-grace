import React from 'react';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const ThemeToggle = ({ compact = false }) => {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <button
      onClick={toggleTheme}
      style={{
        ...styles.toggleBtn,
        backgroundColor: isDark ? '#2a1d1b' : '#fdf5f2',
        borderColor: isDark ? '#ebdcd5' : '#ebdcd5',
        padding: compact ? '0.4rem 0.6rem' : '0.45rem 0.9rem',
      }}
      aria-label={`Switch to ${isDark ? 'Light' : 'Dark'} Mode`}
      title={`Switch to ${isDark ? 'Light' : 'Dark'} Mode`}
    >
      <div style={styles.iconBox}>
        {isDark ? (
          <Sun size={17} color="#d4af37" className="theme-icon-rotate" />
        ) : (
          <Moon size={17} color="#9c6644" className="theme-icon-rotate" />
        )}
      </div>
      {!compact && (
        <span style={{
          ...styles.label,
          color: isDark ? '#fbf6f0' : '#2c1f1d'
        }}>
          {isDark ? 'Light' : 'Dark'}
        </span>
      )}
    </button>
  );
};

const styles = {
  toggleBtn: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '0.45rem',
    borderRadius: '9999px',
    border: '1px solid #ebdcd5',
    cursor: 'pointer',
    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
    outline: 'none',
    boxShadow: 'var(--shadow-sm)',
  },
  iconBox: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  label: {
    fontSize: '0.78rem',
    fontWeight: '600',
    letterSpacing: '0.5px',
    textTransform: 'uppercase',
  }
};

export default ThemeToggle;
