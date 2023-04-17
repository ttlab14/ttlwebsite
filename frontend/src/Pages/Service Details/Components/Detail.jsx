import React from "react";

const Detail = () => {
  return (
    <div className="pt-10 pb-8">
      <div className="flex flex-col justify-between md:flex-row my-14 items-center">
        <div className="md:w-1/2">
          <img src="/images/Service Details/service-1.png" alt="" />
        </div>
        <div className="md:w-1/2 md:ml-8 lg:w-2/5">
          <h1 className="text-white text-xl md:text-2xl">
            Prototypes And Products That Get It
          </h1>
          <p className="text-base md:text-lg text-grey my-8">
            We specialize in creating virtual and augmented reality prototypes
            that allow startups to visualize their concepts in a fully immersive
            environment.
          </p>
          <button className="text-gold text-base md:text-lg border-2 border-white rounded-3xl py-2 px-5">
            Watch Video
          </button>
        </div>
      </div>
      <div className="flex flex-col-reverse justify-between my-14 md:flex-row-reverse items-center">
        <div className="md:w-1/2">
          <img src="/images/Service Details/service-2.png" alt="" />
        </div>
        <div className="md:w-1/2 md:ml-8 lg:w-2/5 ">
          <h1 className="text-white text-xl md:text-2xl">
            Prototypes And Products That Get It
          </h1>
          <p className="text-grey text-base md:text-lg my-8">
            We specialize in creating virtual and augmented reality prototypes
            that allow startups to visualize their concepts in a fully immersive
            environment.
          </p>
        </div>
      </div>
      <div className="flex flex-col md:flex-row justify-between my-14  items-center">
        <div className="md:w-1/2">
          <img src="/images/Service Details/service-3.png" alt="" />
        </div>
        <div className="md:w-1/2 md:ml-8 lg:w-2/5">
          <h1 className="text-white text-xl md:text-2xl">
            Prototypes And Products That Get It
          </h1>
          <p className="text-grey text-base md:text-lg my-8">
            We specialize in creating virtual and augmented reality prototypes
            that allow startups to visualize their concepts in a fully immersive
            environment.
          </p>
        </div>
      </div>
      <div className="flex flex-col-reverse justify-between my-14 md:flex-row-reverse items-center">
        <div className="md:w-1/2">
          <img src="/images/Service Details/service-4.png" alt="" />
        </div>
        <div className="md:w-1/2 md:ml-8 lg:w-2/5 ">
          <h1 className="text-white text-xl md:text-2xl">
            Prototypes And Products That Get It
          </h1>
          <p className="text-grey text-base md:text-lg my-8">
            We specialize in creating virtual and augmented reality prototypes
            that allow startups to visualize their concepts in a fully immersive
            environment.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Detail;
