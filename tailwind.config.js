/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        void: '#030306',
        surface: {
          darker: '#06070c',
          DEFAULT: '#0a0c16',
          card: '#0f1222',
          cardHover: '#14182e',
          border: 'rgba(255, 255, 255, 0.08)',
          borderHover: 'rgba(0, 240, 255, 0.3)',
        },
        brand: {
          cyan: '#00f0ff',
          cyanGlow: 'rgba(0, 240, 255, 0.4)',
          blue: '#0070f3',
          indigo: '#6366f1',
          violet: '#8b5cf6',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
        display: ['Space Grotesk', 'Inter', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      animation: {
        'pulse-slow': 'pulse 6s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
        'glow-pulse': 'glowPulse 4s ease-in-out infinite',
        'spin-slow': 'spin 20s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        glowPulse: {
          '0%, 100%': { opacity: '0.4', filter: 'blur(20px)' },
          '50%': { opacity: '0.8', filter: 'blur(30px)' },
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'cyber-grid': 'radial-gradient(circle at center, rgba(0, 240, 255, 0.08) 1px, transparent 1px)',
      },
    },
  },
  plugins: [],
};
