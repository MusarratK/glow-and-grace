import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { businessData } from '../data/business';

const FAQAccordion = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <div style={styles.container}>
      {businessData.faqs.map((faq, index) => {
        const isOpen = openIndex === index;
        return (
          <div key={index} className="glass-card" style={styles.item}>
            <button
              onClick={() => toggleFAQ(index)}
              style={styles.headerBtn}
              aria-expanded={isOpen}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
                <HelpCircle size={18} color="#d4af37" style={{ flexShrink: 0 }} />
                <span style={styles.question}>{faq.question}</span>
              </div>
              <ChevronDown
                size={20}
                color="#d4af37"
                style={{
                  transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                  transition: 'transform 0.3s ease',
                  flexShrink: 0,
                }}
              />
            </button>

            {isOpen && (
              <div style={styles.body}>
                <p style={styles.answer}>{faq.answer}</p>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

const styles = {
  container: {
    maxWidth: '850px',
    margin: '0 auto',
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
  },
  item: {
    backgroundColor: 'var(--color-card-solid)',
    border: '1px solid var(--color-border)',
    overflow: 'hidden',
  },
  headerBtn: {
    width: '100%',
    padding: '1.25rem 1.5rem',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    textAlign: 'left',
    cursor: 'pointer',
    backgroundColor: 'transparent',
    border: 'none',
  },
  question: {
    fontFamily: "'Playfair Display', serif",
    fontSize: '1.1rem',
    fontWeight: '600',
    color: 'var(--color-dark)',
  },
  body: {
    padding: '0 1.5rem 1.3rem 3.1rem',
    borderTop: '1px solid var(--color-border)',
    paddingTop: '0.8rem',
  },
  answer: {
    fontSize: '0.92rem',
    color: 'var(--color-dark-muted)',
    lineHeight: '1.65',
  },
};

export default FAQAccordion;
