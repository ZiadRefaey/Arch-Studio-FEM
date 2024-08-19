import Image from "next/image";
import Logo from "@/public/logo-light.svg";
import PrimaryButton from "./PrimaryButton";
import NavItem from "./NavItem";

export default function Footer() {
  return (
    <footer className="bg-light-gray relative pt-[93px] pb-12 md:flex md:py-0 md:w-[calc(100vw-123.85px)] max-w-[986.15px] xl:translate-x-[-61.925px] xl:m-auto">
      <div className="pb-[46.87px] pt-[49px] pr-[30px] pl-8 bg-very-dark-blue inline-block absolute top-0 left-[50%] -translate-x-[50%] translate-y-[-50%] xl:py-20 xl:px-[52px] md:translate-x-0 md:translate-y-0 md:static md:mr-10 xl:mr-[85px]">
        <Image src={Logo} alt="Arch Logo" className="text-white" />
      </div>
      <ul className="flex flex-col items-center justify-center gap-8 md:flex-row md:mt-2 ">
        <NavItem linkTo="/portfolio">Portfolio</NavItem>
        <NavItem>About Us</NavItem>
        <NavItem>Contact</NavItem>
      </ul>
      <PrimaryButton
        className={
          "m-auto mt-8 md:absolute top-[50%] right-0 md:translate-y-[-95%] md:translate-x-[50%]"
        }
      >
        See Our Portfolio
      </PrimaryButton>
    </footer>
  );
}
