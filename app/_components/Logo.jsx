import Image from "next/image";
import Logos from "@/public/logo.svg";

export default function Logo() {
  return (
    <div className="relative w-[77px] h-[32.03px] md:w-[96.16px] md:h-[40px] cursor-pointer">
      <Image src={Logos} fill className="object-cover" alt="logo" />
    </div>
  );
}
