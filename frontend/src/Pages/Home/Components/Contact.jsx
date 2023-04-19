import React from "react";
import { Link } from 'react-router-dom'

const Contact = () => {
  return (
    <div
      className="bg-top bg-no-repeat bg-cover py-28"
      style={{ backgroundImage: "url('https://toggletechlab.s3.us-east-2.amazonaws.com/AboutPage/About+BG-min.png')" }}
    >
      <div className="md:flex justify-between items-center w-3/4 mx-auto">
        <div className="md:w-3/5">
          <p className="text-gold uppercase text-base">
            Bringing your vision to life
          </p>
          <h1 className="ml-2 text-white text-xl md:text-2xl mt-4 mb-8">
          Immerse yourself in the future of your startup with prototypes
           that showcase your vision and attract investors.
          </h1>
        </div>
        <div className="md:w-2/5 md:flex justify-end">
        <Link to="/contact">
          <button className="text-black font-medium text-base md:text-lg bg-gold rounded-3xl py-2 px-5 mr-4">
            Contact Us
          </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Contact;

