import React from "react";
import AboutContactTopSection from "../_components/AboutContactTopSection";
import HeroMobile from "@/public/about/mobile/image-hero.jpg";
import HeroTablet from "@/public/about/tablet/image-hero.jpg";
import HeroDesktop from "@/public/about/desktop/image-hero.jpg";
import OurHeritageSection from "../_components/About/OurHeritageSection";
import LeadersSection from "../_components/About/LeadersSection";
const TopSectionData = {
  imgMobile: HeroMobile,
  imgTablet: HeroTablet,
  imgDesktop: HeroDesktop,
  pageTitle: "About",
  title: "Your team of professionals",
  paragraph:
    "Our small team of world-class professionals will work with you every step of the way. Strong relationships are at the core of everything we do. This extends to the relationship our projects have with their surroundings.",
};

export default function AboutUs() {
  return (
    <>
      <AboutContactTopSection
        imgDesktop={TopSectionData.imgDesktop}
        imgMobile={TopSectionData.imgMobile}
        imgTablet={TopSectionData.imgTablet}
        paragraph={TopSectionData.paragraph}
        title={TopSectionData.title}
        pageTitle={TopSectionData.pageTitle}
      />
      <OurHeritageSection />
      <LeadersSection />
    </>
  );
}
