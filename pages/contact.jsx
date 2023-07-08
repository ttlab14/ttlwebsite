import React from "react";
import Head from "next/head";
import Hero from "../Components/contact/Hero";
import LocationFormWrapper from "../Components/contact/LocationFormWrapper";
import Maps from "../Components/contact/Maps";
const Contact = () => {
  return (
    <>
      <Head>
        <title>Toggle Tech Lab</title>
        <meta name="description" content="" />
      </Head>
      <Hero />
      <LocationFormWrapper />
      <Maps />
    </>
  );
};

export default Contact;
