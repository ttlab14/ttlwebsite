import React from "react";
import Head from "next/head";
import Hero from "../Components/about/Hero";
import Detail from "../Components/about/Detail";
import MissionVision from "../Components/about/MissionVision";
import WhyChoose from "../Components/about/WhyChoose";
import ServicesCopy from "../Components/about/ServicesCopy";
import Team from "../Components/about/Team";
import ScheduleCall from "../Common/ScheduleCall";
import LetsTalk from "../Common/LetsTalk";

const About = () => {
  return (
    <>
      <Head>
        <title>Toggle Tech Lab</title>
        <meta name="description" content="" />
      </Head>
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
