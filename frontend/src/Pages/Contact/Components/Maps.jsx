import React from "react";

const Maps = () => {
  return (
    <div className="w-11/12  md:w-3/4 mx-auto pb-24 2xl:pb-48">
      <h1 className="text-white text-xl md:text-2xl mb-10">Office Locations</h1>
      <div className="lg:mt-8 2xl:pt-24">
        <p className="text-white text-xl mb-8">Canada</p>
        <div className=" lg:h-64">
          <img className="h-40 md:h-auto" src="/images/Contact/Map1.png" alt=""/>
        </div>
      </div>
      <div className="lg:mt-8 2xl:pt-24">
        <p className="text-white pt-10 text-xl mb-8">India</p>
        <div className=" lg:h-64">
        <img className="h-40 md:h-auto" src="/images/Contact/Map2.png" alt=""/>
        </div>
      </div>
      <div className="lg:mt-8 2xl:pt-24">
        <p className="text-white pt-10 text-xl mb-8">Qatar</p>
        <div className=" lg:h-64">
        <img className="h-40 md:h-auto" src="/images/Contact/Map1.png" alt=""/>
        </div>
      </div>
    </div>
  );
};

export default Maps;
