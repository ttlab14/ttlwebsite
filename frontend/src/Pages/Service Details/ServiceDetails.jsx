import React from "react";
import Hero from "./Components/Hero";
import DetailPrevNextWrapper from "./Components/DetailPrevNextWrapper";
import ScheduleCall from "../../Common/ScheduleCall";
import LetsTalk from "../../Common/LetsTalk";

const ServiceDetails = () => {
  return (
    <>
      <Hero />
      <DetailPrevNextWrapper />
      <ScheduleCall />
      <LetsTalk />
    </>
  );
};

export default ServiceDetails;
