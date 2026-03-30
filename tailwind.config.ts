/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    extend: {
      fontFamily: {
        headline: ["Space Grotesk", "sans-serif"],
        body: ["Manrope", "sans-serif"],
        label: ["Inter", "sans-serif"],
      },
      colors: {
        bg: "#050505",
        "primary-white": "#F9F9F9",
        "accent-blue": "#0070F3",
        "accent-green": "#00C853",
        "accent-amber": "#FFB000",
      },
    },
  },
  plugins: [],
}
