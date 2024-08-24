"use client";
import React from "react";
import SectionWrapper from "../SectionWrapper";
import Image from "next/image";
import ImageWelcome from "@/public/home/desktop/image-welcome.jpg";
import { motion } from "framer-motion";
export default function WelcomeSection() {
  return (
    <SectionWrapper className={"pt-[72px] pb-[117px] relative"}>
      <div className="h-[1px] w-[65px] bg-light-gray md:hidden"></div>
      <motion.p
        viewport={{ once: true }}
        initial={{ x: -200 }}
        whileInView={{ x: 0 }}
        transition={{ duration: 0.5 }}
        className="hidden md:block absolute top-[72px] left-0 text-[120px] tracking-[-3px] leading-[200px] font-bold text-very-light-gray xl:text-[250px] xl:trackign-[-5px] z-20"
      >
        Welcome
      </motion.p>
      <div className="flex items-center justify-end ">
        <motion.div className="xl:max-w-[921px] flex items-center justify-center gap-[125px] ">
          <motion.div
            viewport={{ once: true }}
            initial={{ x: -200 }}
            whileInView={{ x: 0 }}
            transition={{ duration: 0.5 }}
          >
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
          </motion.div>
          <motion.div
            viewport={{ once: true }}
            initial={{ x: 200 }}
            whileInView={{ x: 0 }}
            transition={{ duration: 0.5 }}
            typeof="spring"
            className="w-[1050px] h-[568px] relative hidden xl:block mt-[73px] bg-black z-0"
          >
            <Image
              fill
              src={ImageWelcome}
              alt="Image Welcome"
              className=" w-full h-full object-cover"
            />
          </motion.div>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
