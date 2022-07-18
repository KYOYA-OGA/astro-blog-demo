module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: '#1E293B',
        secondary: '#272727',
        'dark-subtle': 'rgba(255,255,255,0.5)',
        'light-subtle': 'rgba(39,39,39,0.5)',
      },
    },
  },
  plugins: [],
};
