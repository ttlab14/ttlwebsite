
import React from "react";

const Team = () => {
  return (
    <div className="w-11/12  md:w-3/4 mx-auto mt-20">
      <h1 className="text-white text-xl md:text-2xl mb-8">Our Team</h1>
      <div className="grid grid-cols-2 lg:grid-cols-4">
        <div className="flex flex-col items-center md:justify-center mb-12">
          <div className="w-32 h-32  md:w-52 md:h-52 rounded-full overflow-hidden">
            <img
              src="https://toggletechlab.s3.us-east-2.amazonaws.com/Team/sukhi.jpeg"
              alt="Toggle Tech Lab Team"
            />
          </div>
          <h1 className="text-white text-xl mt-4 mb-1 text-center">
            Team
          </h1>
          <p className="text-gold text-base md:text-lg text-center">
            Dedicated, talented and hard working team members consisting of developers, designers,Ml, UX and UI  experts
          </p>
        </div>

        
       
  );
};

export default Team;
