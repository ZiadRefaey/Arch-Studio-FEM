"use client";
import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";

export default function NavItem({ children, linkTo = "/" }) {
  const pathname = usePathname();

  return (
    <Link
      href={linkTo}
      className={` relative text-body font-bold duration-150 transition-all cursor-pointer ${
        pathname.slice(1) === children.toLowerCase()
          ? "text-very-dark-blue"
          : "text-medium-gray"
      } text-medium-gray hover:text-very-dark-blue`}
    >
      {children}
      <div
        className={`${
          pathname.slice(1).replace("-", " ") === children.toLowerCase()
            ? "block"
            : "hidden"
        } w-6 h-[1px] absolute ml-7 bg-very-dark-blue -bottom-[6px]`}
      ></div>
    </Link>
  );
}
