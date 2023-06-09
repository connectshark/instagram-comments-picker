/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: 'rgb(var(--primary) / <alpha-value>)',
        secondary: 'rgb(var(--secondary) / <alpha-value>)',
        'primary-button': 'rgb(var(--primary-button) / <alpha-value>)',
        'background': 'rgb(var(--background) / <alpha-value>)',
        accent: 'rgb(var(--accent) / <alpha-value>)',
      },
      minHeight: {
        hh: 'calc(100svh - 80px - 157px)'
      }
    },
    fontFamily: {
      unito: [`'Ubuntu'`, `'Noto Sans TC'`, 'sans-serif', 'ui-monospace', 'SFMono-Regular', 'Menlo', 'Monaco', 'Consolas']
    }
  },
  plugins: [],
}
