import React from "react";
import { Link } from "react-router-dom";

const ServicesCopy = () => {
  return (
      <div className="w-11/12  md:w-3/4 mx-auto my-20">
      <h1 className="text-gold text-base uppercase mb-4">Reasons to choose us?</h1>
      <div className="md:flex justify-between items-center  mb-8">
        <h1 className="text-white text-xl md:text-2xl">Why work with Toggle Tech?</h1>

      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
        <div className="bg-gradient-to-br from-card-bg to-transparent rounded-2xl">
          <div className=" py-10 px-8">
            <img className="w-14 h-14" src="https://toggletechlab.s3.us-east-2.amazonaws.com/Icons/Why+Choose-3.svg" alt="" />
            <h1 className="text-white text-xl my-4">Flexible and personal, like a
great freelancer</h1>
            <p className="text-grey text-base md:text-lg">
            Quick deployment time, clear guidance and individual focus.
            </p>
          </div>
        </div>
        <div className="bg-gradient-to-br from-card-bg to-transparent rounded-2xl">
          <div className="py-10 px-8">
            <img className="w-14 h-14" src="https://toggletechlab.s3.us-east-2.amazonaws.com/Icons/Why+Choose-3.svg" alt="" />
            <h1 className="text-white text-xl my-4">The reliable
expertise of an
agency</h1>
            <p className="text-grey text-base md:text-lg">
              The faces behind Toggle Tech Lab are seasoned professionals
            </p>
          </div>
        </div>
        <div className="bg-gradient-to-br from-card-bg to-transparent rounded-2xl">
          <div className="py-10 px-8">
            <img className="w-14 h-14" src="https://toggletechlab.s3.us-east-2.amazonaws.com/Icons/Why+Choose-3.svg" alt="" />
            <h1 className="text-white text-xl my-4">Focused on
business growth</h1>
            <p className="text-grey text-base md:text-lg">
              Our past record shows that we have played  vital role in helping startups get funding and companies improve their training/marketing
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesCopy;

