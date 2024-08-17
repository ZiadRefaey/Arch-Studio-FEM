import Image from "next/image";
import ImageHeroDesktop from "@/public/home/desktop/image-hero-paramour.jpg";
import ImageHeroMobile from "@/public/home/mobile/image-hero-paramour.jpg";
export default function Hero() {
  return (
    <div className="w-full relative flex flex-col px-8 items-center justify-center gap-[83px] h-[560px] md:h-[720px] bg-hero-desktop">
      <div className="absolute top-0 left-0 -z-10">
        {/* <div className="w-full h-full bg-black opacity-50 absolute top-0 left-0"></div> */}
        {/* <Image src={ImageHeroMobile} alt="Hero Image" className="" /> */}
      </div>
      <div>
        <h1 className="text-headingL">Project Paramour</h1>
      </div>
    </div>
  );
}
