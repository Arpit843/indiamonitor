/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        rajdhani: ['Rajdhani', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
        noto: ['Noto Sans', 'sans-serif'],
      },
      colors: {
        navy: {
          950: '#050C1A',
          900: '#070F1E',
          800: '#0C1829',
          700: '#0F2040',
          600: '#1A3050',
          500: '#1E3A5F',
          400: '#2A5080',
          300: '#3B6A9C',
          200: '#4A6D8C',
          100: '#6B8FAD',
        },
        ice: {
          100: '#D0E8FF',
          200: '#94C5FF',
          300: '#93C5FD',
          400: '#7BA8D4',
        },
      },
      animation: {
        pulse: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        ripple: 'ripple 2s ease-out infinite',
        ticker: 'ticker 40s linear infinite',
        scanline: 'scanline 8s linear infinite',
        'slide-in': 'slideIn 0.3s ease forwards',
      },
      keyframes: {
        ripple: {
          '0%': { transform: 'scale(1)', opacity: '0.8' },
          '100%': { transform: 'scale(3)', opacity: '0' },
        },
        ticker: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
        slideIn: {
          from: { opacity: '0', transform: 'translateY(-6px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}
