import type { Config } from 'tailwindcss';
import typography from '@tailwindcss/typography';

export default {
  content: ['./app/**/*.{ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        display: ['"Playfair Display"', 'serif'],
        sans: ['"Inter"', 'system-ui', 'sans-serif']
      },
      colors: {
        brand: {
          light: '#f1f5f9',
          DEFAULT: '#0f172a',
          accent: '#d97706'
        }
      },
      typography: {
        DEFAULT: {
          css: {
            color: '#0f172a',
            maxWidth: '65ch',
            h1: { fontFamily: '"Playfair Display", serif', color: '#0f172a' },
            h2: { fontFamily: '"Playfair Display", serif', color: '#0f172a' },
            h3: { color: '#0f172a' },
            strong: { color: '#0f172a' },
            a: { color: '#d97706' },
            blockquote: {
              fontStyle: 'normal',
              borderLeftColor: '#d97706',
              color: '#475569'
            }
          }
        }
      }
    }
  },
  plugins: [typography]
} satisfies Config;
