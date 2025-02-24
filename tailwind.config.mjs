/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        background: '#FAF9F6', // Cream background
        primary: '#3A625C', // Sage green
        secondary: '#4A7A73', // Lighter sage for hover
        accent: '#343B34', // Dark green text
        dark: {
          background: '#2C3830', // Dark mode background
          accent: '#E6EBE4', // Dark mode accents
          text: '#F5F7F4', // Dark mode text
        },
      },
      fontFamily: {
        sans: ['Source Sans Pro', 'system-ui', 'sans-serif'],
        serif: ['Roboto Slab', 'Georgia', 'serif'],
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}