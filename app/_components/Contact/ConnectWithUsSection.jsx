import React from "react";
import SectionWrapper from "../SectionWrapper";
import Form from "../Form";

export default function ConnectWithUsSection() {
  return (
    <SectionWrapper
      className={
        "mb-[132px] md:mb-[200px] xl:mb-[160px] xl:flex xl:items-start xl:justify-between "
      }
    >
      <h3 className="text-MobileHeadingM md:text-headingM max-w-[300px] md:max-w-[475px] xl:  mb-10">
        Contact Details
      </h3>
      <Form />
    </SectionWrapper>
  );
}
