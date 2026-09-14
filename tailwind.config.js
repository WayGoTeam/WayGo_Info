/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        neon: "#34d399",
      },
      fontFamily: {
        display: ["Inter", "Manrope", "sans-serif"],
        sans: ["Manrope", "system-ui", "sans-serif"],
      },
      boxShadow: {
        neon: "0 0 24px rgba(52, 211, 153, 0.35), 0 0 64px rgba(52, 211, 153, 0.12)",
        "neon-lg":
          "0 0 40px rgba(52, 211, 153, 0.45), 0 0 120px rgba(52, 211, 153, 0.18)",
      },
    },
  },
  plugins: [],
};
