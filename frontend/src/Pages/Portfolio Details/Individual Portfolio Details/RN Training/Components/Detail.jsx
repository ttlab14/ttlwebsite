import React from "react";

const Detail = () => {
  return (
    <div>
      <div className="mb-16">
        <h1 className="text-white text-xl md:text-2xl mb-8">
          VR RN Training
        </h1>
        <div  className="w-full h-72 lg:h-96 2xl:h-100 3xl:h-110">
          <img
            className="w-full h-full object-contain"
            src="/images/Portfolio Details/VR_RN/vrrn0.png"
            alt=""
          />
        </div>
        <p className="text-grey text-base md:text-lg mt-6">
          VR-RN is a new start-up headed by a nurse who was taking classes 
          during COVID times. Online simulations were lacking when needed.
          In hopes to fill a void and help other students, the founder set
          out to create VR simulations for nursing students to better learn
          when other options are not readily available. From this idea, VR-RN was born!
        </p>
        <p className="text-grey text-base md:text-lg mt-6">
          This training simulation focuses on anterior and posterior breathing  patterns.  
          A user must first clarify the patient’s name and date of birth (two patient identifiers) 
          in the training simulation before moving on. Then the user places the stethoscope on each of 
          the anterior and posterior marks on the chest and back and checks the NPCs breathing.
        </p>
        <p className="text-grey text-base md:text-lg mt-6">
        
        </p>
      </div>
      <div className="mb-16">
        <h1 className="text-white text-xl md:text-2xl mb-8">
          Built for Meta Quest 1 & 2 using Unity Engine
        </h1>
        <h1 className="text-white text-xl md:text-2xl mb-8">Results</h1>
        <div 
          className="flex sm:flex-row flex-col gap-5 items-center"
        >
          <img
            className="lg:w-7/12 sm:w-6/12 xs:w-9/12 h-full object-contain"
            src="/images/Portfolio Details/VR_RN/vrrn1.jpeg"
            alt=""
          />
          <img
            className="lg:w-7/12 sm:w-6/12 xs:w-9/12 h-full object-contain"
            src="/images/Portfolio Details/VR_RN/vrrn3.jpeg"
            alt=""
          />
        </div>
        <p className="text-grey text-base md:text-lg mt-6"></p>
        <p className="text-grey text-base md:text-lg mt-6"></p>
      </div>
      <div className="mb-16">
        {/* <h1 className="text-white text-xl md:text-2xl mb-8">Results</h1> */}
        <div className="flex items-center sm:justify-start justify-center gap-5">
          <img
            className="xl:w-8/12 lg:w-9/12 md:w-8/12 sm:w-9/12 xs:w-8/12 w-full h-full object-contain"
            src="/images/Portfolio Details/VR_RN/vrrn2.jpg"
            alt=""
          />
          {/* This image latout like the above two images */}
          {/* <img
            className="lg:w-7/12 sm:w-6/12 xs:w-9/12 h-full object-contain"
            src="/images/Portfolio Details/VR_RN/vrrn2.jpg"
            alt=""
          /> */}
        </div>
        <p className="text-grey text-base md:text-lg mt-6">
          For the next step of the research the lab has decided to further the
          experience by enriching the enviornment with more objects that
          children can interact with in various different ways for example
          picking up a ball, bouncing the ball, squeezing it etc
        </p>
      </div>
    </div>
  );
};

export default Detail;
