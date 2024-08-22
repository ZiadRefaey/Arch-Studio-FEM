import React from "react";
import SectionWrapper from "../SectionWrapper";
import LeaderCard from "./LeaderCard";
import AvatarJake from "@/public/about/desktop/avatar-jake.jpg";
import AvatarThompson from "@/public/about/desktop/avatar-thompson.jpg";
import AvatarJackson from "@/public/about/desktop/avatar-jackson.jpg";
import AvatarMaria from "@/public/about/desktop/avatar-maria.jpg";

const LeadersInfo = [
  { avatar: AvatarJake, name: "Jake Richards", title: "Chief Architect" },
  { avatar: AvatarThompson, name: "Thompson Smith", title: "Head of Finance" },
  { avatar: AvatarJackson, name: "Jackson Rourke", title: "Lead Designer" },
  { avatar: AvatarMaria, name: "Maria Simpson", title: "Senior Architect" },
];

export default function LeadersSection() {
  return (
    <SectionWrapper
      className={
        "mb-[171px] md:mb-[240px] xl:mb[160px] xl:flex xl:items-start xl:justify-between max-w-[450px] md:max-w-full"
      }
    >
      <h3 className=" text-MobileHeadingM md:text-headingM mb-[55px] md:mb-[50px] xl:max-w-[270px]">
        The Leaders
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-y-20 md:gap-x-3 md:gap-y-[103px] xl:gap-y-[63px] xl:gap-x-[30px] w-full xl:w-[730px]">
        {LeadersInfo.map((LeaderInfo) => (
          <LeaderCard
            key={LeaderInfo.name}
            name={LeaderInfo.name}
            avatar={LeaderInfo.avatar}
            title={LeaderInfo.title}
          />
        ))}
      </div>
    </SectionWrapper>
  );
}
