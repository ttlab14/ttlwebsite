import React from "react";
import { Link } from "react-router-dom";

const ScheduleCall = () => {
  return (
    <div
      className="bg-top bg-no-repeat bg-cover py-28"
      style={{ backgroundImage: "url('https://toggletechlab.s3.us-east-2.amazonaws.com/ScheduleCallSection/background-min.png')" }}
    >
      <div className="lg:flex justify-between items-center w-3/4 mx-auto">
        <div className="lg:w-1/2">
          <p className="text-gold uppercase text-base">Quick Contact</p>
          <h1 className="ml-2 text-white text-2xl md:text-3xl mt-4 mb-8">Got An Idea?</h1>
          <p className="ml-2 text-grey text-base md:text-lg">
            Send us a message on whatsapp, email us at talk@toggletechlab.com or through the contact form here. We will get back to you within 24 hours.{" "}
          </p>
        </div>
        <div className="mt-4 lg:mt-0 lg:w-2/5 flex items-center lg:justify-end">
          <Link to="/contact" className="flex items-center lg:justify-end">
            <h1 className="text-xl md:text-2xl text-gold mr-4 underline">
              Schedule a Call
            </h1>
            <img src="https://toggletechlab.s3.us-east-2.amazonaws.com/Icons/arrow.svg" alt="" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ScheduleCall;
