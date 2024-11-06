const keyframes = {
  'slide-down': {
    '0%': { opacity: '0', transform: 'translateY(-10px)' },
    '100%': { opacity: '1', transform: 'translateY(0)' },
  },
  'slide-up': {
    '0%': { opacity: '1', transform: 'translateY(0)' },
    '100%': { opacity: '0', transform: 'translateY(-10px)' },
  },
  'open': {
    from: { opacity: '0%', transform: 'translateY(-20px)' },
    to: { opacity: '100%', transform: 'translateY(0)' },
  },
  'close': {
    from: { opacity: '100%', transform: 'translateY(0)' },
    to: { opacity: '0%', transform: 'translateY(-20px)' },
  },
  'fade-in-dropdown': {
    '0%': { opacity: '0', transform: 'translateY(-10px)' },
    '100%': { opacity: '1', transform: 'translateY(0)' },
  },
  'fade-out-dropdown': {
    '0%': { opacity: '1', transform: 'translateY(0)' },
    '100%': { opacity: '0', transform: 'translateY(-20px)' },
  },
  'skeleton': {
    '0%': { opacity: '1' },
    '50%': { opacity: '0.5' },
    '100%': { opacity: '1' },
  },
  'ping': {
    '0%': {
      opacity: '1',
      transform: 'scale(1)',
    },
    '75%': {
      opacity: '0',
      transform: 'scale(2)',
    },
    '100%': {
      opacity: '0',
      transform: 'scale(2)',
    },
  },
  'slideInFromLeft': {
    from: {
      opacity: '0',
      transform: 'translateX(10px)',
    },
    to: {
      opacity: '1',
      transform: 'translateX(0)',
    },
  },
};

export default keyframes;
