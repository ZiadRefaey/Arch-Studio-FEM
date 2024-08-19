import React from "react";

export default function HomeFeaturedComponentCard({ bg, title, order }) {
  return (
    <div
      className={`${bg} bgdelso relative p-6 md:p-10 w-full h-[240px] xl:h-[560px] flex items-end justify-start bg-no-repeat bg-cover text-white`}
    >
      <p className="hidden md:block absolute top-[29px] right-4 text-white/60 z-50 text-[250px] leading-[200px] tracking-[-5px] font-bold xl:-right-4">
        {order}
      </p>
      <div className=" bg-gradient-to-b from-transparent to-black/50 absolute top-0 left-0 w-full h-full "></div>
      <div className="relative z-50">
        <p className=" text-headingS ">{title}</p>
        <p className=" text-body text-white/60">View All Projects</p>
      </div>
    </div>
  );
}
