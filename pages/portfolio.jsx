import React from "react";
import Head from "next/head";
import Hero from "../Components/portfolio/Hero";
import Projects from "../Components/portfolio/Projects";
import ScheduleCall from "../Common/ScheduleCall";
import LetsTalk from "../Common/LetsTalk";

const Portfolio = () => {
  return (
    <>
      <Head>
        <title>Toggle Tech Lab</title>
        <meta name="description" content="" />
      </Head>
      <Hero />
      <Projects />
      <ScheduleCall />
      <LetsTalk />
    </>
  );
};

export default Portfolio;
