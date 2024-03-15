/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        balls: 'url(./assets/balls.webp)',
        noise: 'url(./assets/nnoise.svg)',
      },
      colors: {
        'primary-green': '#007934',
        'secondary-green': '#388E3C',
        'primary-gray': '#696969',
        'primary-white': '#fffcec',
      },
      animation: {
        marquee: 'marquee 50s linear infinite',
      },
      keyframes: {
        marquee: {
          from: {
            transform: 'translateX(0)',
          },
          to: {
            transform: 'translateX(calc(-100% - 2.5rem))',
          },
        },
      },
    },
  },

  plugins: [],
};
