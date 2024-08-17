/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "hero-desktop": "url('/public/home/desktop/image-hero-paramour.jpg')",
        "footer-texture": "url('/img/footer-texture.png')",
      },
      colors: {
        "very-dark-blue": "#1B1D23",
        "dark-gray": "#60636D",
        "medium-gray": "#7D828F",
        "light-gray": "#C8CCD8",
        "very-light-gray": "#EEEFF4",
        error: "#DF5656",
      },
      fontSize: {
        headingXL: [
          "15.625rem",
          {
            lineHeight: "12.5rem",
            letterSpacing: "-0.313rem",
            fontWeight: "700",
          },
        ],
        headingL: [
          "6rem",
          {
            lineHeight: "5rem",
            letterSpacing: "-0.125rem",
            fontWeight: "700",
          },
        ],
        headingM: [
          "4.5rem",
          {
            lineHeight: "4rem",
            letterSpacing: "-0.125rem",
            fontWeight: "700",
          },
        ],
        headingS: [
          "2rem",
          {
            lineHeight: "2.5rem",
            fontWeight: "700",
          },
        ],
        body: [
          "1.125rem",
          {
            lineHeight: "1.5rem",
            fontWeight: "500",
          },
        ],
      },
    },
  },
  plugins: [],
};
