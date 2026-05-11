/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        // New primary fonts
        Space:   ["Space Grotesk", "sans-serif"],
        Mono:    ["JetBrains Mono", "monospace"],
        Outfit:  ["Space Grotesk", "sans-serif"],  // alias kept
        // Legacy — still used in some components
        Ovo:     ["Ovo", "serif"],
      },
      animation: {
        spin_slow: 'spin 6s linear infinite',
        floatY:    'floatY 4s ease-in-out infinite',
        gradientShift: 'gradientShift 4s ease infinite',
      },
      keyframes: {
        floatY: {
          '0%,100%': { transform: 'translateY(0)' },
          '50%':     { transform: 'translateY(-10px)' },
        },
        gradientShift: {
          '0%,100%': { backgroundPosition: '0% center' },
          '50%':     { backgroundPosition: '200% center' },
        },
      },
      gridTemplateColumns: {
        auto: 'repeat(auto-fit, minmax(200px, 1fr))',
      },
      colors: {
        lightHover: '#f5f0ff',
        darkHover:  '#2a004a',
        darkTheme:  '#0a0014',
      },
      boxShadow: {
        black: '4px 4px 0 #000',
        white: '4px 4px 0 #fff',
        violet: '0 4px 24px rgba(139,92,246,0.35)',
        
      },
    },
  },
  darkMode: 'selector',
  plugins: [],
}
