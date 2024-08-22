import Image from "next/image";
import React from "react";
import IconArrow from "@/public/icons/icon-arrow-dark.svg";
export default function SecondaryButton({ children, className }) {
  return (
    <button
      className={`${className}  text-body flex items-center justify-center gap-6 hover:underline text-very-dark-blue transition-all duration-150 active:scale-95`}
    >
      {children}
      <span>
        <Image src={IconArrow} alt="Icon Arrow" />
      </span>
    </button>
  );
}
