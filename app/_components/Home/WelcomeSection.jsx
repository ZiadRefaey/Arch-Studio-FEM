import React from "react";
import SectionWrapper from "../SectionWrapper";
import Image from "next/image";
import ImageWelcome from "@/public/home/desktop/image-welcome.jpg";

export default function WelcomeSection() {
  return (
    <SectionWrapper className={"pt-[72px] pb-[117px] relative"}>
      <div className="h-[1px] w-[65px] bg-light-gray md:hidden"></div>
      <p className="hidden md:block absolute top-[72px] left-0 text-[120px] tracking-[-3px] leading-[200px] font-bold text-very-light-gray xl:text-[250px] xl:trackign-[-5px]">
        Welcome
      </p>
      <div className="flex items-center justify-end ">
        <div className="xl:max-w-[921px] flex items-center justify-center gap-[125px] ">
          <div>
            <h2 className="text-[48px] font-bold leading-[52px] tracking-[-1.71px] md:text-headingM max-w-[311px] md:max-w-[446px] mt-[68px] md:mt-[159px]">
              Welcome to Arch Studio
            </h2>
            <p className="mt-[22px] md:mt-[43px] ">
              We have a unique network and skillset to help bring your projects
              to life. Our small team of highly skilled individuals combined
              with our large network put us in a strong position to deliver
              exceptional results.
              <br />
              <br />
              Over the past 10 years, we have worked on all kinds of projects.
              From stations to high-rise buildings, we create spaces that
              inspire and delight.
              <br />
              <br />
              We work closely with our clients so that we understand the
              intricacies of each project. This allows us to work in harmony the
              surrounding area to create truly stunning projects that will stand
              the test of time.
            </p>
          </div>
          <Image
            src={ImageWelcome}
            alt="Image Welcome"
            className="hidden xl:block mt-[73px]"
          />
        </div>
      </div>
    </SectionWrapper>
  );
}
