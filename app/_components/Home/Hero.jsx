"use client";
import { useState } from "react";
import PrimaryButton from "../PrimaryButton";
import { motion } from "framer-motion";
import HeroBgPickerNumber from "../HeroBgPickerNumber";
const HeroVariants = [
  {
    order: "01",
    heroBg: "bg-hero-1-mobile md:bg-hero-1-tablet xl:bg-hero-1-desktop",
    title: "Project Paramour ",
    subTitle:
      "Project made for an art museum near Southwest London. Project Paramour is a statement of bold, modern architecture.",
  },
  {
    order: "02",

    heroBg: "bg-hero-2-mobile md:bg-hero-2-tablet xl:bg-hero-2-desktop",
    title: "Seraph Station",
    subTitle:
      "The Seraph Station project challenged us to design a unique station that would transport people through time. The result is a fresh and futuristic model inspired by space stations.",
  },
  {
    order: "03",

    heroBg: "bg-hero-3-mobile md:bg-hero-3-tablet xl:bg-hero-3-desktop",
    title: "Federal II Tower",
    subTitle:
      "A sequel theme project for a tower originally built in the 1800s. We achieved this with a striking look of brutal minimalism with modern touches.",
  },
  {
    order: "04",
    heroBg: "bg-hero-4-mobile md:bg-hero-4-tablet xl:bg-hero-4-desktop",
    title: "Trinity Bank Tower",
    subTitle:
      "Trinity Bank challenged us to make a concept for a 84 story building located in the middle of a city with a high earthquake frequency. For this project we used curves to blend design and stability to meet our objectives.",
  },
];
export default function Hero() {
  const [activeHero, setActiveHero] = useState(HeroVariants[0]);
  return (
    <div
      className={`w-full relative flex flex-col px-8 md:px-[58px] xl:px-[190px] items-center justify-center gap-[83px] h-[560px] md:h-[720px] ${activeHero.heroBg} bg-no-repeat bg-cover`}
    >
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-30 z-10"></div>
      <motion.div
        viewport={{ once: true }}
        initial={{ opacity: 0, scale: 0.5 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="relative z-10 w-full flex-col items-center justify-center gap-10"
      >
        <div className="flex flex-col gap-3 mb-[83px] md:mb-[41px]">
          <h1 className="text-[3rem] font-bold leading-10 tracking-tight xl:text-headingL text-white max-w-[80vw] ">
            {activeHero.title}
          </h1>
          <p className=" text-body text-white">{activeHero.subTitle}</p>
        </div>
        <PrimaryButton>See Our Portfolio</PrimaryButton>
      </motion.div>
      <motion.div
        viewport={{ once: true }}
        initial={{ x: -200, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="absolute bottom-0 -left-[79px]  items-center justify-center z-20 hidden xl:flex"
      >
        {HeroVariants.map((HeroVariant) => (
          <HeroBgPickerNumber
            HeroVariants={HeroVariants}
            key={HeroVariant.order}
            number={HeroVariant.order}
            activeHero={activeHero}
            setActiveHero={setActiveHero}
          />
        ))}
      </motion.div>
    </div>
  );
}
