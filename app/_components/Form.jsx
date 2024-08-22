import React from "react";
import Arrow from "@/public/icons/icon-arrow.svg";
import Image from "next/image";
export default function Form() {
  return (
    <form className="flex flex-col gap-[22px] xl:w-[730px]">
      <input
        className="px-8 py-5 placeholder:text-light-gray border-b-very-dark-blue w-full border-b-[1px] focus:border-b-[3px]  text-[1.25rem] tracking-[-0.31px] font-bold outline-none"
        placeholder="Name"
        type="text"
      />
      <input
        className="px-8 py-5 placeholder:text-light-gray border-b-very-dark-blue w-full border-b-[1px] focus:border-b-[3px]  text-[1.25rem] tracking-[-0.31px] font-bold outline-none"
        placeholder="Email"
        type="email"
      />
      <textarea
        className="px-8 py-5 placeholder:text-light-gray border-b-very-dark-blue w-full border-b-[1px] focus:border-b-[3px]  text-[1.25rem] tracking-[-0.31px] font-bold outline-none h-[114px]"
        placeholder="Message here..."
      />
      <button className="px-7 py-[31px] bg-very-dark-blue inline-block max-w-20 self-end mt-[-22px] hover:bg-dark-gray duration-300 transition-all">
        <Image src={Arrow} alt="arrow icon" />
      </button>
    </form>
  );
}
