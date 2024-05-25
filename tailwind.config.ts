import type { Config } from 'tailwindcss'
import defaultTheme from 'tailwindcss/defaultTheme'

const config = {
  darkMode: ['class'],
  safelist: ['sh__line'],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
    'src/components/**/*.{js,ts,jsx,tsx,mdx,json}',
  ],
  prefix: '',
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        xs: '390px',
        sm: '435px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
      },
    },
    extend: {
      animation: {
        reveal: 'reveal 0.7s ease-in-out',
      },
      backgroundImage: {
        pinned:
          'linear-gradient(119deg, rgb(143 152 242) 0%, rgb(95 167 225) 30%, rgb(206 133 247) 47%, rgb(235 147 186) 69%, rgb(190 188 251) 80%)',
        'pinned-dark':
          'linear-gradient(119deg, rgb(75 87 196) 0%, rgb(31 133 206) 30%, rgb(125 20 166) 42%, rgb(134 15 60) 63%, rgb(18 8 45) 73%)',
        'nav-link-indicator':
          'radial-gradient(44.6% 825% at 50% 50%, rgb(255 133 133) 0%, rgb(255 72 109 / 0) 100%)',
        'nav-link-indicator-dark':
          'radial-gradient(44.6% 825% at 50% 50%, rgb(255 28 28) 0%, rgb(255 72 109 / 0) 100%)',
        'email-button': 'linear-gradient(180deg, rgb(210 10 30) 5%, rgb(239 90 90) 100%)',
      },
      boxShadow: {
        'feature-card': '0 -1px 3px 0 rgb(0 0 0 / 0.05)',
        'feature-card-dark': '0 0 0 1px rgb(255 255 255 / 0.06), 0 -1px rgb(255 255 255 / 0.1)',
      },
      fontFamily: {
        sans: ['var(--font-geist-sans)', ...defaultTheme.fontFamily.sans],
        mono: ['var(--font-geist-mono)', ...defaultTheme.fontFamily.mono],
      },
      keyframes: {
        reveal: {
          '0%': {
            opacity: '0',
            filter: 'brightness(1) blur(15px)',
            scale: '1.0125',
          },
          '10%': { opacity: '1', filter: 'brightness(1.25) blur(10px)' },
          '100%': { opacity: '1', filter: 'brightness(1) blur(0)', scale: '1' },
        },
      },
      lineHeight: {
        slacker: '1.75',
      },
      gridTemplateRows: {
        'max-1': 'repeat(1, minmax(0, max-content))',
      },
      height: {
        'dynamic-screen': '100dvh',
      },
      minHeight: {
        'dynamic-screen': '100dvh',
      },
      maxHeight: {
        'dynamic-screen': '100dvh',
      },
    },
  },
  plugins: [require('@tailwindcss/container-queries'), require('tailwindcss-animate')],
  future: {
    hoverOnlyWhenSupported: true,
  },
} satisfies Config

export default config
