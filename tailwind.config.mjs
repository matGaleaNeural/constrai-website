export default {
  content: ['./src/**/*.{astro,html,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        accent: '#00b4d8',
        'accent-dim': '#0090aa',
        surface: '#0d1626',
        'surface-2': '#111f35',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
