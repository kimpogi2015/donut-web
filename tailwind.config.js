/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx,html}"],
  // content: ["./src/**/*.{js,jsx,ts,tsx}"],
  corePlugins: { preflight: false },
  theme: {
    // screens: {
    //   xs: "440px",
    //   sm: "640px",
    //   md: "768px",
    //   lg: "1024px",
    //   xl: "1280px",
    //   "2xl": "1536px",
    // },
    extend: {
      colors: {
        headerblue: "#1C4E84",
        // defblue: '#4993E0',
      },
      backgroundImage: {
        // bgfront: "url('./assets/images/background/bgfront.png')",
      },
    },
  },
  plugins: [],
};
