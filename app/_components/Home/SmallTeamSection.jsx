import React from "react";
import SectionWrapper from "../SectionWrapper";
import PrimaryButton from "../PrimaryButton";

export default function SmallTeamSection() {
  return (
    <SectionWrapper
      className={
        "bg-small-team-mobile md:bg-small-team-tablet xl:bg-small-team-desktop px-8 py-[180px] md:px-[58px] md:py-[167px] xl:px-[190px] bg-no-repeat bg-cover relative "
      }
    >
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-60 z-10"></div>
      <div className="relative z-20 text-white">
        <h3 className="text-[3rem] font-bold leading-[52px] tracking-[-1.71px] md:text-headingM max-w-[300px] md:max-w-[440px] mb-[23px] xl:mb-[27px]">
          Small team, big ideas
        </h3>
        <PrimaryButton>About Us</PrimaryButton>
      </div>
    </SectionWrapper>
  );
}
