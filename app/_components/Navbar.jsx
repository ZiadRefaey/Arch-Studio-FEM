"use client";
import React, { useEffect, useState } from "react";
import iconNav from "@/public/icons/icon-hamburger.svg";

import { usePathname } from "next/navigation";
import Image from "next/image";
import Logo from "./Logo";
import NavItem from "./NavItem";
import Link from "next/link";
import CurrentPage from "./CurrentPage";
export default function Navbar() {
  const [isActive, setIsActive] = useState(false);

  return (
    <>
      <div className="w-full px-8 py-[32px] md:py-[56px] flex items-center justify-between md:justify-start md:gap-20 xl:gap-[96px] relative z-20 bg-white  md:max-w-[573px] xl:max-w-[1110px] m-auto">
        <CurrentPage />
        <Link href={"/"}>
          <Logo />
        </Link>
        <ul className="hidden md:flex items-center justify-center gap-[60px] xl:gap-20 text-white text-2xl">
          <NavItem linkTo={"/portfolio"}>Portfolio</NavItem>
          <NavItem linkTo={"/about-us"}>About Us</NavItem>
          <NavItem linkTo={"/contact"}>Contact</NavItem>
        </ul>
        <Image
          onClick={() => setIsActive(!isActive)}
          width={24}
          height={17}
          alt="image"
          src={iconNav}
          className="block md:hidden"
        />
        <div
          className={`absolute overflow-hidden top-0 translate-y-[96px] -translate-x-8 transition-all duration-300 z-50 ${
            isActive ? "w-full  px-12  " : " w-[0%] px-0"
          }  bg-very-light-gray py-10 md:hidden`}
        >
          <ul className="flex flex-col items-start justify-center w-full gap-4">
            <li className=" text-headingS active:text-error">Portifolio</li>
            <li className=" text-headingS active:text-error">AboutUs</li>
            <li className=" text-headingS active:text-error">Contact</li>
          </ul>
        </div>
      </div>
      <div
        className={`fixed top-0 left-0 z-[15] bg-black transition-all duration-300 ${
          isActive ? "block opacity-30" : "opacity-0 hidden"
        } w-[100vw] h-[100vh] md:hidden`}
      ></div>
    </>
  );
}
