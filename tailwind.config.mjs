/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        background: '#FAFAFA', // Light mode background
        primary: '#561F76', // Purple primary
        secondary: '#6B2E91', // Slightly lighter purple for hover states
        accent: '#14071B', // Text color
        dark: {
          background: '#2C0F3C', // Dark mode background
          accent: '#F4E7FF', // Dark mode accents
          text: '#F5EEE9', // Dark mode text
        },
      },
      fontFamily: {
        sans: ['Source Sans Pro', 'system-ui', 'sans-serif'],
        serif: ['Playfair Display', 'Georgia', 'serif'],
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}