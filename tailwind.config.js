module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      screens: {
        '2xl': '1440px',
      },
      colors: {
        // 灰色
        primary: {
          DEFAULT: '#614fdb',
          500: '#3f299c',
        },
      },
    },
  },
  plugins: [],
};
