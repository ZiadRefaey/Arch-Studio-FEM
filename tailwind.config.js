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
        "hero-desktop": "url('/home/desktop/image-hero-paramour.jpg')",
        "hero-tablet": "url('/home/tablet/image-hero-paramour.jpg')",
        "hero-mobile": "url('/home/mobile/image-hero-paramour.jpg')",
        "small-team-desktop": "url('/home/desktop/image-small-team.jpg')",
        "small-team-tablet": "url('/home/tablet/image-small-team.jpg')",
        "small-team-mobile": "url('/home/mobile/image-small-team.jpg')",

        "228b-desktop": "url('/portfolio/desktop/image-228b.jpg')",
        "228b-tablet": "url('/portfolio/tablet/image-228b.jpg')",
        "228b-mobile": "url('/portfolio/mobile/image-228b.jpg')",

        "del-sol-desktop": "url('/portfolio/desktop/image-del-sol.jpg')",
        "del-sol-tablet": "url('/portfolio/tablet/image-del-sol.jpg')",
        "del-sol-mobile": "url('/portfolio/mobile/image-del-sol.jpg')",

        "prototype-desktop": "url('/portfolio/desktop/image-prototype.jpg')",
        "prototype-tablet": "url('/portfolio/tablet/image-prototype.jpg')",
        "prototype-mobile": "url('/portfolio/mobile/image-prototype.jpg')",
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
