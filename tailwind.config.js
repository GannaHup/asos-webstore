module.exports = {
  content: [
    './src/assets/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/layouts/**/*.{js,ts,jsx,tsx}',
    './src/screens/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#014FA2',
        secondary: '#F34E4E',
        grey: {
          DEFAULT: '#B4ABA8',
          1: '#B4ABA8',
          2: '#4d4d4d',
        },
        blue: {
          DEFAULT: '#0a4c91',
          1: '#0a4c91',
        },
      },
      width: {
        160: '40rem',
      },
      height: {
        125: '31.25rem',
      },
      maxWidth: {
        125: '31.25rem',
      },
    },
  },
  plugins: [],
}
