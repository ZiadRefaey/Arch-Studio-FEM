import React from "react";

export default function FeaturedCard({ bg, title, date }) {
  return (
    <div
      className={`${bg} bg-seraph-tablet relative p-6 md:p-10 w-full h-[240px] xl:h-[560px] xl:max-w-[328px] flex items-end justify-start bg-no-repeat bg-cover text-white`}
    >
      <div className=" bg-gradient-to-b from-transparent to-black/50 absolute top-0 left-0 w-full h-full "></div>
      <div className="relative z-50">
        <p className=" text-headingS ">{title}</p>
        <p className=" text-body text-white/60">{date}</p>
      </div>
    </div>
  );
}
