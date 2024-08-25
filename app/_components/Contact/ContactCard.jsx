"use client";
import { motion } from "framer-motion";
import SecondaryButton from "../SecondaryButton";

export default function ContactCard({
  title,
  mail,
  address,
  phone,
  className,
  delay,
}) {
  return (
    <motion.div
      viewport={{ once: true }}
      initial={{ x: -200, opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.5, delay: delay }}
      className={`${className} flex flex-col gap-11 md:flex-row md:justify-between md:items-center text-dark-gray xl:flex-col`}
    >
      <div>
        <p className="text-body leading-[35px] font-bold mb-[14px]">{title}</p>
        <p className="text-body">Mail : {mail}</p>
        <p className="text-body">Address : {address}</p>
        <p className="text-body">Phone : {phone}</p>
      </div>
      <SecondaryButton
        className={"font-bold self-start md:self-center xl:self-start"}
      >
        View on Map
      </SecondaryButton>
    </motion.div>
  );
}
