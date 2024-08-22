import AboutContactTopSection from "../_components/AboutContactTopSection";
import HeroMobile from "@/public/contact/mobile/image-hero.jpg";
import HeroTablet from "@/public/contact/tablet/image-hero.jpg";
import HeroDesktop from "@/public/contact/desktop/image-hero.jpg";
import ContactDetails from "../_components/Contact/ContactDetails";
import Map from "../_components/Contact/Map";
import ConnectWithUsSection from "../_components/Contact/ConnectWithUsSection";
const TopSectionData = {
  imgMobile: HeroMobile,
  imgTablet: HeroTablet,
  imgDesktop: HeroDesktop,
  pageTitle: "Contact",
  title: "Tell us about your project",
  paragraph:
    "We’d love to hear more about your project. Please, leave a message below or give us a call. We have two offices, one in Texas and one in Tennessee. If you find yourself nearby, come say hello!",
};
export default function page() {
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
      <ContactDetails />
      <Map />
      <ConnectWithUsSection />
    </>
  );
}
