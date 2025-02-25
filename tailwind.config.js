module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        green: {
          700: "#1B5E20",
          800: "#1B4332",
          900: "#0A3622",
        },
        red: {
          400: "#EF5350",
          500: "#F44336",
          600: "#E53935",
          700: "#D32F2F",
        },
      },
    },
  },
  plugins: [],
}

