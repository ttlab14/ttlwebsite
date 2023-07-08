import React from "react";
import Head from "next/head";
import Hero from "../Components/services/Hero";
import ComponentsWrapper from "../Components/services/ComponentsWrapper";
import ScheduleCall from "../Common/ScheduleCall";
import LetsTalk from "../Common/LetsTalk";
import Partners from "../Common/Partners";
import Detail from "../Components/services/Detail";

const Services = () => {
  return (
    <>
      <Head>
        <title>Toggle Tech Lab</title>
        <meta name="description" content="" />
      </Head>
      <Hero />
      <Detail />
      <ComponentsWrapper />
      <Partners />
      <ScheduleCall />
      <LetsTalk />
    </>
  );
};

export default Services;
