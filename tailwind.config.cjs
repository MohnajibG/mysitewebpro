/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{ts,tsx,js,jsx}"],
  theme: {
    extend: {
      colors: {
        "photon-magenta": "#ff33cc",
        "neon-cyan": "#00ffff",
        "dark-matter-indigo": "#2e2b5f",
        "ion-yellow": "#fff700",
        "glitch-teal": "#00ffd5",
        "black-hole-gray": "#121212",
      },
      boxShadow: {
        "neon-sm":
          "0 2px 8px rgba(255,51,204,0.08), 0 0 18px rgba(0,255,213,0.04)",
        "neon-lg":
          "0 10px 40px rgba(46,43,95,0.6), 0 0 48px rgba(255,51,204,0.14)",
        "glow-magenta":
          "0 0 18px rgba(255,51,204,0.18), 0 0 60px rgba(255,51,204,0.08)",
        "glow-cyan":
          "0 0 18px rgba(0,255,255,0.18), 0 0 60px rgba(0,255,255,0.06)",
      },
      keyframes: {
        "neon-flicker": {
          "0%, 19%, 21%, 23%, 25%, 54%, 56%, 100%": {
            opacity: 1,
            filter: "drop-shadow(0 0 6px rgba(255,51,204,0.9))",
          },
          "20%, 24%, 55%": { opacity: 0.6, filter: "none" },
        },
        "gradient-move": {
          "0%": { "background-position": "0% 50%" },
          "50%": { "background-position": "100% 50%" },
          "100%": { "background-position": "0% 50%" },
        },
      },
      animation: {
        "neon-flicker": "neon-flicker 3.5s linear infinite",
        "gradient-move": "gradient-move 8s ease infinite",
      },
      backgroundImage: {
        "cyber-gradient":
          "linear-gradient(120deg, rgba(46,43,95,0.92) 0%, rgba(255,51,204,0.12) 30%, rgba(0,255,213,0.06) 60%, rgba(0,255,255,0.06) 100%)",
      },
    },
  },
  plugins: [],
};
