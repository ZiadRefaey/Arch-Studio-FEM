import React from "react";

export default function HeroBgPickerNumber({
  number,
  activeHero,
  setActiveHero,
  HeroVariants,
}) {
  return (
    <div
      onClick={() => {
        setActiveHero(HeroVariants.find((obj) => obj.order === number));
      }}
      className={`${
        activeHero.order === number
          ? "bg-very-dark-blue text-white"
          : "text-dark-gray bg-white hover:bg-light-gray"
      } pl-[31px] pr-[32px] pt-[28px] pb-[27px] transition-all duration-150 text-body font-bold  cursor-pointer`}
    >
      {number}
    </div>
  );
}
