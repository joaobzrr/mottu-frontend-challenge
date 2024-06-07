/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        "background-primary": "hsl(var(--background-primary))",
        "background-secondary": "hsl(var(--background-secondary))",
        "border": "hsl(var(--border))",
        "foreground": "hsl(var(--foreground))",
        "foreground-muted": "hsl(var(--foreground-muted))"
      },
      fontFamily: {
        "poppins": ["Poppins", "sans-serif"],
        "creepster": ["Creepster", "system-ui"]
      }
    },
  },
  plugins: [],
}
