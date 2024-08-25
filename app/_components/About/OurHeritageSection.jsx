"use client";
import SeperatorLine from "../SeperatorLine";
import Image from "next/image";
import HeritageImg from "@/public/about/desktop/image-heritage.jpg";
import SectionWrapper from "../SectionWrapper";
import { motion } from "framer-motion";
export default function OurHeritageSection() {
  return (
    <SectionWrapper className="flex items-center justify-between gap-[124px] mb-[112px] md:mb-[207px]">
      <motion.div
        viewport={{ once: true }}
        initial={{ x: -200, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="w-[558px]"
      >
        <SeperatorLine
          className={"mb-[68px] md:mb-[49px] xl:mb-[82px] max-w-[300px"}
        />
        <h2 className="text-MobileHeadingM md:text-headingM mb-[22px] md:mb-[62px] xl:mb-[51px]">
          Our Heritage
        </h2>
        <p className="text-body">
          Founded in 2007, we started as a trio of architects. Our complimentary
          skills and relentless attention to detail turned Arch into one of the
          most sought after boutique firms in the country.
          <br />
          <br />
          Speciliazing in Urban Design allowed us to focus on creating
          exceptional structures that live in harmony with their surroundings.
          We consider every detail from every surrounding element to inform our
          designs.
          <br />
          <br />
          Our small team of world-class professionals provides input on every
          project.
        </p>
      </motion.div>
      <motion.div
        viewport={{ once: true }}
        initial={{ x: 200, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="hidden xl:block w-[540px] h-[568px] relative"
      >
        <Image
          src={HeritageImg}
          alt="Heritage Image"
          fill
          className="w-full h-full object-cover"
        />
      </motion.div>
    </SectionWrapper>
  );
}
