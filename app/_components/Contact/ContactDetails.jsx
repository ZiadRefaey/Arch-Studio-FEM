import React from "react";
import SectionWrapper from "../SectionWrapper";
import ContactCard from "./ContactCard";

export default function ContactDetails() {
  return (
    <SectionWrapper
      className={
        "mb-[71px] md:mb-[226px] xl:mb-[200px] xl:flex xl:items-center xl:justify-between "
      }
    >
      <h2 className="text-MobileHeadingM md:text-headingM max-w-[300px] mb-10">
        Contact Details
      </h2>
      <ContactCard
        className={"mb-10 xl:mb-0"}
        title={"Main Office"}
        mail={"archone@mail.com"}
        address={"1892  Chenoweth Drive TN"}
        phone={"123-456-3451"}
      />
      <ContactCard
        title={"Main Office"}
        mail={"archone@mail.com"}
        address={"1892  Chenoweth Drive TN"}
        phone={"123-456-3451"}
      />
    </SectionWrapper>
  );
}
