import React from "react";
import Hero from "./Components/Hero";
import ComponentsWrapper from "./Components/ComponentsWrapper";
import ScheduleCall from "../../Common/ScheduleCall";
import LetsTalk from "../../Common/LetsTalk";
import Partners from "../../Common/Partners";
import Detail from "./Components/Detail";

const Services = () => {
  return (
    <>
      <Hero />
      <Detail/>
      <ComponentsWrapper />
      <Partners/>
      <ScheduleCall />
      <LetsTalk />
    </>
  );
};

export default Services;
