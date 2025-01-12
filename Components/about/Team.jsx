
import React from "react";

const Team = () => {
  return (
      <h1 className="text-white text-xl md:text-2xl mb-8">Our Team</h1>
     
   <div className="w-11/12  md:w-3/4 mx-auto grid lg:grid-cols-2 gap-12 mb-20">
      <div>
        <h1 className="text-xl md:text-2xl text-white mb-8">Our mission</h1>
        <p className="text-grey text-base md:text-lg mb-4">
          Our mission is to empower startups to take their ideas to the next
          level by providing them with the tools and expertise to create amazing
          XR prototypes. We believe that XR technology has the power to
          transform the way we interact with the world, and we are committed to
          helping our clients leverage its full potential.
        </p>
        <p className="text-grey text-base md:text-lg">
          Whether you’re looking to create a virtual showroom for your product,
          a gamified educational experience, or a fully immersive training
          simulation, we’ve got you covered.
        </p>
      </div>
      <div>
    
  );
};

export default Team;
