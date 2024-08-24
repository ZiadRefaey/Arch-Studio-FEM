import SectionWrapper from "../SectionWrapper";
import HomeFeaturedComponentCard from "../HomeFeaturedComponentCard";
import PrimaryButton from "../PrimaryButton";

export default function FeaturedSection() {
  return (
    <SectionWrapper className={"pt-[72px] pb-[132px] md:py-[200px]"}>
      <div className="flex items-center justify-between mb-[43px] xl:mb-[86px]">
        <h4 className="text-[3rem] font-bold leading-[52px] tracking-[-1.71px] md:text-headingM ">
          Featured
        </h4>
        <PrimaryButton className={"hidden md:flex"}>See All</PrimaryButton>
      </div>
      <div className="flex flex-col gap-6 xl:flex-row xl:gap-[30px]">
        <HomeFeaturedComponentCard
          delay={0}
          title={"Project Del Sol"}
          bg={"bg-del-sol-mobile md:bg-del-sol-tablet xl:bg-del-sol-desktop"}
          order={"1"}
        />

        <HomeFeaturedComponentCard
          delay={0.75}
          title={"228B Tower"}
          bg={"bg-228b-mobile md:bg-228b-tablet xl:bg-228b-desktop"}
          order={"2"}
        />

        <HomeFeaturedComponentCard
          delay={1.5}
          title={"Le Prototype"}
          bg={
            "bg-prototype-mobile md:bg-prototype-tablet xl:bg-prototype-desktop"
          }
          order={"3"}
        />
      </div>
      <PrimaryButton className={"mt-6 w-full md:hidden"}>See All</PrimaryButton>
    </SectionWrapper>
  );
}
