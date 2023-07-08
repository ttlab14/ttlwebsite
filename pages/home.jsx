import Head from "next/head";
import Hero from "../Components/home/Hero";
import Partners from "../Common/Partners";
import Build from "../Components/home/Build";
import ProptypeProduct from "../Components/home/ProptypeProduct";
import Services from "../Components/home/Services";
import Contact from "../Components/home/Contact";
import CaseStudy from "../Components/home/CaseStudy";
import ServicesCopy from "../Components/home/ServicesCopy";
import Testimonials from "../Components/home/Testimonials";
import ScheduleCall from "../Common/ScheduleCall";
import LetsTalk from "../Common/LetsTalk";
import HeaderVideo from "../Components/home/HeaderVideo";

const Home = () => {
  const handleClickScroll = () => {
    const element = document.getElementById("build-section");
    if (element) {
      // 👇 Will scroll smoothly to the top of the next section
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  const handleHeaderVideo = () => {
    const videoElement = document.getElementById("headerVideo-section");
    if (videoElement) {
      // 👇 Will scroll smoothly to the top of the next section
      videoElement.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <>
      <Head>
        <title>Toggle Tech Lab</title>
        <meta
          name="description"
          content="Transforming Ideas into Reality with XR Technology"
        />
        <meta
          name="description"
          content="Toggle Tech lab, Virtual Reality, VR, Augmented Reality, AR, Mixed Reality, MR,
      immersive marketing strategies,affordable VR solutions, innovative AR campaigns,
      VR and AR for marketing agencies, immersive event experiences, virtual reality in real estate marketing,
      augmented reality for product launches, managing client expectations with VR and AR,
      successful VR and AR agency partnerships, immersive marketing project management,
      virtual reality for event planning, creative AR applications for marketing, real estate virtual tours,
      virtual reality for corporate events, augmented reality in advertising, VR and AR for North American brands,time-saving immersive marketing tips,
      award-winning VR and AR campaigns, VR and AR tools for marketers, leveraging AR and VR in marketing"
        />
      </Head>
      <Hero
        handleClickScroll={handleClickScroll}
        handleHeaderVideo={handleHeaderVideo}
      />
      <Partners />
      <Build />
      <HeaderVideo />
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
