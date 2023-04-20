import React from "react";
import Hero from "./Components/Hero";
import Detail from "./Components/Detail";
import MissionVision from "./Components/MissionVision";
import WhyChoose from "./Components/WhyChoose";
import ServicesCopy from "./Components/ServicesCopy";
import Team from "./Components/Team";
import ScheduleCall from "../../Common/ScheduleCall";
import LetsTalk from "../../Common/LetsTalk";

const About = () => {
  return (
    <>
      <Hero />
      <Detail />
      <MissionVision />
      <ServicesCopy />
      <WhyChoose />
      <Team />
      <ScheduleCall />
      <LetsTalk />
    </>
  );
};

export default About;
