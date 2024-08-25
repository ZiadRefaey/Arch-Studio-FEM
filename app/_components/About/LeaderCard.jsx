"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Twitter from "@/public/icons/icon-twitter.svg";
import LinkedIn from "@/public/icons/icon-linkedin.svg";
export default function LeaderCard({ avatar, name, title }) {
  return (
    <motion.div
      viewport={{ once: true }}
      initial={{ y: -200, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="group w-full aspect-square relative md:max-w-[280px] xl:max-w-[350px] mb-[15px] cursor-pointer">
        <div className="w-full h-full top-0 left-0 absolute bg-black/30   opacity-0 group-hover:opacity-100 transition-all duration-300 z-20 flex items-center justify-center gap-8">
          <a href="https://twitter.com" target="_blank">
            <Image
              src={Twitter}
              alt="Twitter Icon"
              className="hover:-translate-y-2 duration-300 transition-all text-white"
            />
          </a>
          <a href="https://www.linkedin.com">
            <Image
              src={LinkedIn}
              alt="Linkedin Icon"
              className="hover:-translate-y-3 duration-300 transition-all"
            />
          </a>
        </div>
        <Image
          src={avatar}
          alt={`${name}'s avatar`}
          className=" object-cover"
          fill
        />
      </div>
      <p className=" text-headingS">{name}</p>
      <p className="body opacity-75">{title}</p>
    </motion.div>
  );
}
