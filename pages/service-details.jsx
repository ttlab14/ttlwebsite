import React from "react";
import Head from "next/head";
import Hero from "../Components/service-details/Hero";
import DetailPrevNextWrapper from "../Components/service-details/DetailPrevNextWrapper";
import ScheduleCall from "../Common/ScheduleCall";
import LetsTalk from "../Common/LetsTalk";

const ServiceDetails = () => {
  return (
    <>
      <Head>
        <title>Toggle Tech Lab</title>
        <meta name="description" content="" />
      </Head>
      <Hero />
      <DetailPrevNextWrapper />
      <ScheduleCall />
      <LetsTalk />
    </>
  );
};

export default ServiceDetails;
