exports.typography_components = ({ addComponents }) => {
    addComponents({
      // Desktop (Original Scale)
      '.hero-header': {
        fontSize: '96px',
        letterSpacing: '-1px',
        lineHeight: '1',
        marginBottom: '32px',
      },
      '.alt-hero-header': {
        fontSize: '72px',
        letterSpacing: '-0.8px',
        lineHeight: '1.25',
        marginBottom: '28px',
      },
      '.heading-1': {
        fontSize: '56px',
        letterSpacing: '-0.5px',
        lineHeight: '1.25',
        marginBottom: '24px',
      },
      '.heading-2': {
        fontSize: '40px',
        letterSpacing: '-0.3px',
        lineHeight: '1.5',
        marginBottom: '20px',
      },
      '.heading-3': {
        fontSize: '28px',
        letterSpacing: '0px',
        lineHeight: '1.5',
        marginBottom: '16px',
      },
      '.heading-4': {
        fontSize: '20px',
        letterSpacing: '0px',
        lineHeight: '1.75',
        marginBottom: '12px',
      },
      '.body-large': {
        fontSize: '20px',
        letterSpacing: '0px',
        lineHeight: '1.5',
        marginBottom: '16px',
      },
      '.body-small': {
        fontSize: '16px',
        letterSpacing: '0px',
        lineHeight: '1.5',
        marginBottom: '12px',
      },
      '.caption': {
        fontSize: '12px',
        letterSpacing: '0.3px',
        lineHeight: '1.75',
        marginBottom: '8px',
      },
      '.tiny-text': {
        fontSize: '8px',
        letterSpacing: '0.3px',
        lineHeight: '1.75',
        marginBottom: '6px',
      },

      // Responsive Adjustments
      '@media (max-width: 1280px)': {
        '.hero-header': { fontSize: '80px', marginBottom: '28px' },
        '.alt-hero-header': { fontSize: '64px', marginBottom: '24px' },
        '.heading-1': { fontSize: '48px', marginBottom: '20px' },
        '.heading-2': { fontSize: '36px', marginBottom: '18px' },
        '.heading-3': { fontSize: '26px', marginBottom: '14px' },
        '.heading-4': { fontSize: '18px', marginBottom: '10px' },
        '.body-large': { fontSize: '18px', marginBottom: '14px' },
      },
      '@media (max-width: 1024px)': {
        '.hero-header': { fontSize: '64px', marginBottom: '24px' },
        '.alt-hero-header': { fontSize: '48px', marginBottom: '20px' },
        '.heading-1': { fontSize: '36px', marginBottom: '18px' },
        '.heading-2': { fontSize: '28px', marginBottom: '16px' },
        '.heading-3': { fontSize: '22px', marginBottom: '12px' },
        '.heading-4': { fontSize: '16px', marginBottom: '10px' },
        '.body-large': { fontSize: '18px', marginBottom: '12px' },
      },
      '@media (max-width: 768px)': {
        '.hero-header': { fontSize: '48px', marginBottom: '20px' },
        '.alt-hero-header': { fontSize: '36px', marginBottom: '16px' },
        '.heading-1': { fontSize: '28px', marginBottom: '14px' },
        '.heading-2': { fontSize: '24px', marginBottom: '12px' },
        '.heading-3': { fontSize: '20px', marginBottom: '10px' },
        '.heading-4': { fontSize: '16px', marginBottom: '8px' },
        '.body-large': { fontSize: '16px', marginBottom: '10px' },
        '.body-small': { fontSize: '14px', marginBottom: '8px' },
      },
    });
  }