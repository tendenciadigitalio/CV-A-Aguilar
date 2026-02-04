/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ['"Inter"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
        tech: ['"JetBrains Mono"', 'monospace'],
      },
      colors: {
        background: '#FFFFFF',
        foreground: '#000000',
        neutral: '#F3F4F6',
        accent: '#FF0000', // International Typographic Style Red
        subtle: '#9CA3AF',
      },
      borderWidth: {
        '3': '3px',
      }
    },
  },
  plugins: [],
}

