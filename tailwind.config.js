/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './screens/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',

    // Or if using `src` directory:
    './src/**/*.{js,ts,jsx,tsx}',
  ],

  darkMode: ['class'],
  theme: {
    extend: {
      fontFamily: {},
      colors: {
        primary: '#3366FF',
        'bg-dark': '#000000',
        'bg-card': '#08274B',
        'bg-card-2': '#020F1D',
        'text-primary-dark': '#fff',
        'text-secondary-dark': 'rgba(255, 255, 255, 0.7)',
        'text-disabled-dark': 'rgba(255, 255, 255, 0.5)',
        'divider-dark': 'rgba(255, 255, 255, 0.12)',
        bg: '#F1F2F4',
        // 'bg-card': '#F7F8F9',
        'text-primary': '#ffffff',
        'text-secondary': '#22272B',
        'text-disabled': '#738496',
        divider: '#B3B9C4',
        body: '#0F2132',
      },
      screens: {
        xs: '440px',
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        '2xl': '1536px',
        '3xl': '1850px',
        '4xl': '2100px',
      },
    },
  },
  plugins: [],
};
