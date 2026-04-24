/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"DM Sans"', 'sans-serif'],
        serif: ['"DM Serif Display"', 'serif'],
      },
      colors: {
        bg: {
          DEFAULT: '#0a0a0f',
          2: '#111118',
          3: '#1a1a26',
        },
        accent: {
          DEFAULT: '#7c6dfa',
          2: '#a78bfa',
          3: '#c4b5fd',
        },
        teal: '#2dd4bf',
        coral: '#f87171',
        card: {
          DEFAULT: '#161624',
          2: '#1e1d30',
        },
        border: {
          DEFAULT: '#2a2545',
          2: '#3d3660',
        },
      },
    },
  },
  plugins: [],
}
