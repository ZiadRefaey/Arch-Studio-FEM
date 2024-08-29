"use client";
import { motion } from "framer-motion";
export default function Map() {
  return (
    <motion.div
      viewport={{ once: true }}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="w-full h-[367px] md:h-[560px] mb-[73px] md:mb-[200px] xl:mb-[160px]"
    >
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d155255.71684752198!2d-79.51931765638405!3d43.69262087892192!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89d4cb90d7c63ba5%3A0x323555502ab4c477!2sToronto%2C%20ON%2C%20Canada!5e0!3m2!1sen!2seg!4v1724345494949!5m2!1sen!2seg"
        className="w-full h-full"
        loading="lazy"
      ></iframe>
    </motion.div>
  );
}
