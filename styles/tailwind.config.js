module.exports = {
  purge: {
    content: ['_site/**/*.html'],
    options: {
      safelist: [],
    },
  },
  theme: {
    extend: {
      colors: {
        primary: '#222629',
        secondary: '#68A408',
        'high-emphasis': 'rgba(0,0,0,0.87)',
        'medium-emphasis': 'rgba(0,0,0,0.60)',
        disabled: 'rgba(0,0,0,0.38)',
        divider: 'rgba(0,0,0,0.12)',
        light: {
          'high-emphasis': 'rgba(255,255,255,0.87)',
          'medium-emphasis': 'rgba(255,255,255,0.60)',
          disabled: 'rgba(255,255,255,0.38)',
        },
      },
      spacing: {
        13: '3.25rem',
      },
    },
  },
  variants: {},
  plugins: [],
};
