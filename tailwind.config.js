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
        "hero-1-desktop": "url('/home/desktop/image-hero-paramour.jpg')",
        "hero-1-tablet": "url('/home/tablet/image-hero-paramour.jpg')",
        "hero--mobile": "url('/home/mobile/image-hero-paramour.jpg')",

        "hero-2-desktop": "url('/home/desktop/image-hero-seraph.jpg')",
        "hero-2-tablet": "url('/home/tablet/image-hero-seraph.jpg')",
        "hero-2-mobile": "url('/home/mobile/image-hero-seraph.jpg')",

        "hero-3-desktop": "url('/home/desktop/image-hero-federal.jpg')",
        "hero-3-tablet": "url('/home/tablet/image-hero-federal.jpg')",
        "hero-3-mobile": "url('/home/mobile/image-hero-federal.jpg')",

        "hero-4-desktop": "url('/home/desktop/image-hero-trinity.jpg')",
        "hero-4-tablet": "url('/home/tablet/image-hero-trinity.jpg')",
        "hero-4-mobile": "url('/home/mobile/image-hero-trinity.jpg')",

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

        "seraph-desktop": "url('/portfolio/desktop/image-seraph.jpg')",
        "seraph-tablet": "url('/portfolio/tablet/image-seraph.jpg')",
        "seraph-mobile": "url('/portfolio/mobile/image-seraph.jpg')",

        "eebox-desktop": "url('/portfolio/desktop/image-eebox.jpg')",
        "eebox-tablet": "url('/portfolio/tablet/image-eebox.jpg')",
        "eebox-mobile": "url('/portfolio/mobile/image-eebox.jpg')",

        "federal-desktop": "url('/portfolio/desktop/image-federal.jpg')",
        "federal-tablet": "url('/portfolio/tablet/image-federal.jpg')",
        "federal-mobile": "url('/portfolio/mobile/image-federal.jpg')",

        "edelweiss-desktop": "url('/portfolio/desktop/image-edelweiss.jpg')",
        "edelweiss-tablet": "url('/portfolio/tablet/image-edelweiss.jpg')",
        "edelweiss-mobile": "url('/portfolio/mobile/image-edelweiss.jpg')",

        "netcry-desktop": "url('/portfolio/desktop/image-netcry.jpg')",
        "netcry-tablet": "url('/portfolio/tablet/image-netcry.jpg')",
        "netcry-mobile": "url('/portfolio/mobile/image-netcry.jpg')",

        "hypers-desktop": "url('/portfolio/desktop/image-hypers.jpg')",
        "hypers-tablet": "url('/portfolio/tablet/image-hypers.jpg')",
        "hypers-mobile": "url('/portfolio/mobile/image-hypers.jpg')",

        "sxiv-desktop": "url('/portfolio/desktop/image-sxiv.jpg')",
        "sxiv-tablet": "url('/portfolio/tablet/image-sxiv.jpg')",
        "sxiv-mobile": "url('/portfolio/mobile/image-sxiv.jpg')",

        "paramour-desktop": "url('/portfolio/desktop/image-paramour.jpg')",
        "paramour-tablet": "url('/portfolio/tablet/image-paramour.jpg')",
        "paramour-mobile": "url('/portfolio/mobile/image-paramour.jpg')",

        "prototype-desktop": "url('/portfolio/desktop/image-prototype.jpg')",
        "prototype-tablet": "url('/portfolio/tablet/image-prototype.jpg')",
        "prototype-mobile": "url('/portfolio/mobile/image-prototype.jpg')",

        "trinity-desktop": "url('/portfolio/desktop/image-trinity.jpg')",
        "trinity-tablet": "url('/portfolio/tablet/image-trinity.jpg')",
        "trinity-mobile": "url('/portfolio/mobile/image-trinity.jpg')",
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
        MobileHeadingM: [
          "3rem",
          {
            lineHeight: "3.25rem",
            letterSpacing: "-1.2px",
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
