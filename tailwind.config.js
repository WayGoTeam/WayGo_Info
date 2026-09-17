/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        night: "#061410",
        forest: "#092C25",
        grove: "#064E3B",
        leaf: "#D3EC88",
        paper: "#F7F8F5",
        sky: "#0284C7",
        neon: "#D3EC88",
      },
      fontFamily: {
        display: ["Manrope", "Inter", "system-ui", "sans-serif"],
        sans: ["Inter", "system-ui", "sans-serif"],
      },
      boxShadow: {
        glow: "0 0 24px rgba(211, 236, 136, 0.28), 0 0 64px rgba(5, 150, 105, 0.16)",
        "glow-lg":
          "0 0 40px rgba(211, 236, 136, 0.32), 0 0 120px rgba(6, 78, 59, 0.35)",
      },
    },
  },
  plugins: [],
};
