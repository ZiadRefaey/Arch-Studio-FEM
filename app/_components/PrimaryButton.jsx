import Image from "next/image";
import React from "react";
import IconArrow from "@/public/icons/icon-arrow.svg";
export default function PrimaryButton({ children, className }) {
  return (
    <button
      className={`${className} bg-very-dark-blue pl-[37px] pr-[32px] pb-[22px] pt-[25px] text-body flex items-center justify-center gap-6 hover:bg-dark-gray transition-all duration-150 active:bg-light-gray text-white`}
    >
      {children}
      <span>
        <Image src={IconArrow} className="text-white" alt="Icon Arrow" />
      </span>
    </button>
  );
}
