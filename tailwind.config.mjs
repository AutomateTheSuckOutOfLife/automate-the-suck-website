/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Base colors
        background: '#FAF9F6', // Cream background
        primary: '#3A625C', // Sage green
        secondary: '#4A7A73', // Lighter sage for hover
        accent: '#343B34', // Dark green text
        
        // Link colors
        link: {
          base: '#3A625C', // Same as primary
          hover: '#4A7A73', // Same as secondary
          dark: {
            base: '#FFCEF1', // Pink link in dark mode
            hover: '#FFE5F4', // Light pink hover in dark mode
          }
        },
        
        // Button colors
        button: {
          light: '#F0FFF3', // Light button background
          hover: '#FFCEF1', // Button hover state
          primary: '#3A625C', // Same as primary - added for consistency with docs
        },
        
        // Highlight/callout colors
        highlight: {
          light: '#FFE5F4', // Light pink highlight background
          dark: '#984F83', // Dark mode highlight (same as dark-primary)
        },
        
        // Dark mode colors
        dark: {
          background: '#2C3830', // Dark mode background
          accent: '#E6EBE4', // Dark mode accents
          text: '#FAFFFB', // Dark mode text (from global CSS)
          primary: '#984F83', // Dark mode primary color (used in some components)
          secondary: '#3A625C', // Dark mode secondary color
          tertiary: '#2C3830', // Dark mode tertiary color
          button: '#984F83', // Dark mode button - added for consistency with docs
          'button-hover': '#FFCEF1', // Dark mode button hover - added for consistency
        },
      },
      fontFamily: {
        sans: ['Roboto', 'system-ui', 'sans-serif'],
        serif: ['Roboto Slab', 'Georgia', 'serif'],
        mono: ['Roboto Mono', 'monospace'],
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}