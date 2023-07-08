import React from "react";
import Link from "next/link";

const Services = () => {
  return (
    <div className="w-11/12  md:w-3/4 mx-auto my-20">
      <h1 className="text-gold text-base uppercase mb-4">Services</h1>
      <div className="md:flex justify-between items-center  mb-8">
        <h1 className="text-white text-xl md:text-2xl">What We Do</h1>
        <Link href="/services">
          <button className="text-gold text-base md:text-lg border-2 border-gray-400 rounded-3xl py-2 px-5 mt-4">
            View All Services
          </button>
        </Link>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
        <div className="bg-gradient-to-br from-card-bg to-transparent rounded-2xl">
          <div className=" py-10 px-8">
            <img
              className="w-14 h-14"
              src="https://toggletechlab.s3.us-east-2.amazonaws.com/Icons/Why+Choose-1.svg"
              alt=""
            />
            <h1 className="text-white text-xl my-4">XR Prototyping</h1>
            <p className="text-grey text-base md:text-lg">
              We specialize in creating virtual and augmented reality prototypes
              that allow startups to visualize their concepts in a fully
              immersive environment.
            </p>
            <Link href="/about">
              <p className="text-gold text-base md:text-lg mt-4">Read More</p>
            </Link>
          </div>
        </div>
        <div className="bg-gradient-to-br from-card-bg to-transparent rounded-2xl">
          <div className="py-10 px-8">
            <img
              className="w-14 h-14"
              src="https://toggletechlab.s3.us-east-2.amazonaws.com/Icons/Why+Choose-2.svg"
              alt=""
            />
            <h1 className="text-white text-xl my-4">XR Experiences</h1>
            <p className="text-grey text-base md:text-lg">
              We create XR experiences such as immersive tours, meditative
              experiences and more
            </p>
            <Link href="/about">
              <p className="text-gold text-base md:text-lg mt-4">Read More</p>
            </Link>
          </div>
        </div>
        <div className="bg-gradient-to-br from-card-bg to-transparent rounded-2xl">
          <div className="py-10 px-8">
            <img
              className="w-14 h-14"
              src="https://toggletechlab.s3.us-east-2.amazonaws.com/Icons/Why+Choose-3.svg"
              alt=""
            />
            <h1 className="text-white text-xl my-4">XR Training</h1>
            <p className="text-grey text-base md:text-lg">
              Over 9 years of experience in creating training simulations across
              various industries such as healthcare, engineering & education.
            </p>
            <Link href="/about">
              <p className="text-gold text-base md:text-lg mt-4">Read More</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
