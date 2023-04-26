import React from "react";

const Team = () => {
  return (
    <div className="w-11/12  md:w-3/4 mx-auto mt-20">
      <h1 className="text-white text-xl md:text-2xl mb-8">Our Team</h1>
      <div className="grid grid-cols-2 lg:grid-cols-4">
        <div className="flex flex-col items-center md:justify-center mb-12">
          <div className="w-32 h-32  md:w-52 md:h-52 rounded-full overflow-hidden">
            <img src="https://toggletechlab.s3.us-east-2.amazonaws.com/Team/sukhi.jpeg" alt="Toggle Tech Lab Team" />
          </div>
          <h1 className="text-white text-xl mt-4 mb-1 text-center">Sukhwinder</h1>
          <p className="text-gold text-base md:text-lg text-center">Founder / CEO</p>
        </div>
        <div className="flex flex-col items-center md:justify-center mb-12">
          <div className="w-32 h-32  md:w-52 md:h-52 rounded-full overflow-hidden">
            <img src="https://toggletechlab.s3.us-east-2.amazonaws.com/Team/Team-2.png" alt="Toggle Tech Lab Team" />
          </div>
          <h1 className="text-white text-xl mt-4 mb-1 text-center">Gurfariyad</h1>
          <p className="text-gold text-base md:text-lg text-center">Co-Founder</p>
        </div>
        <div className="flex flex-col items-center md:justify-center mb-12">
          <div className="w-32 h-32  md:w-52 md:h-52 rounded-full overflow-hidden">
            <img src="https://toggletechlab.s3.us-east-2.amazonaws.com/Team/bikram.jpg" alt="Toggle Tech Lab Team" />
          </div>
          <h1 className="text-white text-xl mt-4 mb-1 text-center">Bikram</h1>
          <p className="text-gold text-base md:text-lg text-center">VR & AR Developer</p>
        </div>
        <div className="flex flex-col items-center md:justify-center mb-12">
          <div className="w-32 h-32  md:w-52 md:h-52 rounded-full overflow-hidden">
            <img src="https://toggletechlab.s3.us-east-2.amazonaws.com/Team/venky.jpg" alt="Toggle Tech Lab Team" />
          </div>
          <h1 className="text-white text-xl mt-4 mb-1 text-center">Venkatdari</h1>
          <p className="text-gold text-base md:text-lg text-center">VR & AR  Developer</p>
        </div>
        <div className="flex flex-col items-center md:justify-center mb-12">
          <div className="w-32 h-32  md:w-52 md:h-52 rounded-full overflow-hidden">
            <img src="https://toggletechlab.s3.us-east-2.amazonaws.com/Team/brian.jpg" alt="Toggle Tech Lab Team" />
          </div>
          <h1 className="text-white text-xl mt-4 mb-1 text-center">Brian</h1>
          <p className="text-gold text-base md:text-lg text-center">Game developer</p>
        </div>
        <div className="flex flex-col items-center md:justify-center mb-12">
          <div className="w-32 h-32  md:w-52 md:h-52 rounded-full overflow-hidden">
            <img src="/https://toggletechlab.s3.us-east-2.amazonaws.com/Team/sonya.jpg" alt="Toggle Tech Lab Team" />
          </div>
          <h1 className="text-white text-xl mt-4 mb-1 text-center">Sonya</h1>
          <p className="text-gold text-base md:text-lg text-center">XR User Experience Designer</p>
        </div>
        <div className="flex flex-col items-center md:justify-center mb-12">
          <div className="w-32 h-32  md:w-52 md:h-52 rounded-full overflow-hidden">
            <img src="https://toggletechlab.s3.us-east-2.amazonaws.com/Team/rohit.PNG" alt="Toggle Tech Lab Team" />
          </div>
          <h1 className="text-white text-xl mt-4 mb-1 text-center">Rohit</h1>
          <p className="text-gold text-base md:text-lg text-center">3D Designer</p>
        </div>
        <div className="flex flex-col items-center md:justify-center mb-12">
          <div className="w-32 h-32  md:w-52 md:h-52 rounded-full overflow-hidden flex justify-center items-center bg-gray-900">
            <img className="w-10 h-10" src="/icons/Plus.svg" alt="" />
          </div>
          <h1 className="text-white text-xl mt-4 mb-1 text-center">Join Our Team</h1>
          <p className="text-gold text-base md:text-lg text-center">Contact Us</p>
        </div>
      </div>
    </div>
  );
};

export default Team;
