/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: {
          DEFAULT: '#FBF7F0',
          dark: '#F3ECE0',
        },
        ink: {
          DEFAULT: '#1D1B18',
          soft: '#4A4640',
          muted: '#7A746B',
        },
        coral: {
          light: '#FDE4DC',
          DEFAULT: '#E4572E',
          dark: '#C2411C',
        },
        butter: {
          light: '#FFF1C7',
          DEFAULT: '#FFD166',
        },
        line: '#E7DFD2',
      },
      fontFamily: {
        sans: ['Geist', 'system-ui', 'sans-serif'],
        display: ['"Bricolage Grotesque"', 'Geist', 'system-ui', 'sans-serif'],
        mono: ['"Geist Mono"', 'ui-monospace', 'monospace'],
      },
      boxShadow: {
        card: '0 1px 0 rgba(29,27,24,0.04), 0 12px 32px -16px rgba(29,27,24,0.18)',
        pop: '4px 4px 0 0 #1D1B18',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0) rotate(var(--r, 0deg))' },
          '50%': { transform: 'translateY(-6px) rotate(var(--r, 0deg))' },
        },
      },
      animation: {
        float: 'float 5s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
