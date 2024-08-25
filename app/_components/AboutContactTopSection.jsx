"use client";
import { motion } from "framer-motion";
import Image from "next/image";

import SeperatorLine from "./SeperatorLine";
export default function AboutContactTopSection({
  imgMobile,
  imgTablet,
  imgDesktop,
  title,
  paragraph,
  pageTitle,
}) {
  return (
    <>
      <div className="relative w-full h-[240px] xl:max-w-[635px] md:h-[720px] mb-[365px] md:mb-[200px]">
        <div className="absolute top-0 left-0 w-full h-full bg-black/30 z-10"></div>
        <Image
          src={imgMobile}
          fill
          className="w-full h-full object-cover md:hidden"
          alt="About hero image"
        />
        <Image
          src={imgTablet}
          fill
          className="w-full h-full object-cover hidden md:block xl:hidden"
          alt="About hero image"
        />
        <Image
          src={imgDesktop}
          fill
          className="w-full h-full object-cover hidden xl:block"
          alt="About hero image"
        />
        <motion.p
          viewport={{ once: true }}
          initial={{ x: -200, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="hidden md:block absolute top-[204px] right-0 text-[120px] md:text-[160px] xl:top-[130px] xl:-right-[475px] tracking-[-3px] leading-[200px] font-bold text-very-light-gray xl:text-[250px] xl:trackign-[-5px] z-30"
        >
          {pageTitle}
        </motion.p>
        <motion.div
          viewport={{ once: true }}
          initial={{ x: 200, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className=" bg-white  pr-8 pl-8 pt-[65px] md:pt-[88px] md:pl-[59px] xl:pl-[182px] xl:pt-[160px] absolute left-0 bottom-0 w-[343px] z-20 translate-y-[calc(100%-45px)] md:w-[572px] md:bottom-0 md:translate-y-0 md:left-auto md:right-[-57px] xl:right-[-640px] xl:w-[793px] xl:top-[217px] "
        >
          <SeperatorLine className={"mb-[73px] xl:mb-[57px] hidden"} />
          <h1 className="text-black text-MobileHeadingM md:text-headingM mb-[21px]">
            {title}
          </h1>
          <p className="text-body max-w-[445px]">{paragraph}</p>
        </motion.div>
      </div>
    </>
  );
}
