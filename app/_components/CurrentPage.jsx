"use client";

import React from "react";
import { usePathname } from "next/navigation";

export default function CurrentPage() {
  const pathname = usePathname();
  return (
    <div className="hidden md:flex absolute -left-[35px] xl:-left-[78px] md:flex-col top-0">
      <div className="w-[1px] h-[104px] bg-light-gray rounded-full relative ">
        <p className="whitespace-nowrap uppercase translate-y-[calc(100%+48px)] rotate-90 text-body text-light-gray tracking-[18px] origin-top-left translate-x-[12px] absolute bottom-0 w-full">
          {pathname === "/" ? "home" : pathname.replace("-", " ").slice(1)}
        </p>
      </div>
    </div>
  );
}
