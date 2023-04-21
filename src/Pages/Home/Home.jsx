import React from "react";
import Hero from "./Components/Hero";
import Partners from "../../Common/Partners";
import Build from "./Components/Build";
import ProptypeProduct from "./Components/ProptypeProduct";
import Services from "./Components/Services";
import Contact from "./Components/Contact";
import CaseStudy from "./Components/CaseStudy";
import ServicesCopy from "./Components/ServicesCopy";
import Testimonials from "./Components/Testimonials";
import ScheduleCall from "../../Common/ScheduleCall";
import LetsTalk from "../../Common/LetsTalk";
// import HeaderVideo from "./Components/HeaderVideo";

const Home = () => {
  const handleClickScroll = () => {
    const element = document.getElementById('build-section');
    if (element) {
      // 👇 Will scroll smoothly to the top of the next section
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (
    <>
      <Hero handleClickScroll={handleClickScroll}/>
      <Partners />
      <Build />
      {/* <HeaderVideo /> */}
      <ProptypeProduct />
      <Services />
      <Contact />
      <CaseStudy />
      <ServicesCopy />
      <Testimonials />
      <ScheduleCall />
      <LetsTalk />
    </>
  );
};

export default Home;
