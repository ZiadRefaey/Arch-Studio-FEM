import PrimaryButton from "../PrimaryButton";

export default function Hero() {
  return (
    <div className="w-full relative flex flex-col px-8 md:px-[58px] xl:px-[190px] items-center justify-center gap-[83px] h-[560px] md:h-[720px] bg-hero-mobile md:bg-hero-tablet xl:bg-hero-desktop bg-no-repeat bg-cover">
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-30 z-10"></div>
      <div className="relative z-10 w-full flex-col items-center justify-center gap-10">
        <div className="flex flex-col gap-3 mb-[83px] md:mb-[41px]">
          <h1 className="text-[3rem] font-bold leading-10 tracking-tight xl:text-headingL text-white max-w-[80vw] ">
            Project Paramour
          </h1>
          <p className=" text-body text-white">
            Project made for an art museum near Southwest London. Project
            Paramour is a statement of bold, modern architecture.
          </p>
        </div>
        <PrimaryButton>See Our Portfolio</PrimaryButton>
      </div>
      <div className="absolute bottom-0 -left-[79px]  items-center justify-center z-20 hidden xl:flex">
        <div className="bg-very-dark-blue pl-[31px] pr-[32px] pt-[28px] pb-[27px] text-white text-body font-bold">
          01
        </div>
        <div className="bg-white pl-[31px] pr-[32px] pt-[28px] pb-[27px] transition-all duration-150 text-dark-gray text-body font-bold hover:bg-light-gray cursor-pointer">
          02
        </div>
        <div className="bg-white pl-[31px] pr-[32px] pt-[28px] pb-[27px] transition-all duration-150 text-dark-gray text-body font-bold hover:bg-light-gray cursor-pointer ">
          03
        </div>
        <div className="bg-white pl-[31px] pr-[32px] pt-[28px] pb-[27px] transition-all duration-150 text-dark-gray text-body font-bold hover:bg-light-gray cursor-pointer ">
          04
        </div>
      </div>
    </div>
  );
}
