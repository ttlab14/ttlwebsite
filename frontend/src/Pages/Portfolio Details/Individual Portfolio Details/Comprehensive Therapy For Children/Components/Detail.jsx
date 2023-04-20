import React from "react";

const Detail = () => {
  return (
    <div>
      <div className="mb-16">
        <h1 className="text-white text-xl md:text-2xl mb-8">
          Providing Comprehensive Therapy For Children With Autism Spectrum
          Disorder by Using a Virtual Reality Application
        </h1>
        <div  className="w-full sm:h-72 lg:h-96  2xl:h-100  3xl:h-110">
        <img
          className="w-full h-full object-contain"
          src="https://toggletechlab.s3.us-east-2.amazonaws.com/ASU/asulogo.jpg"
          alt=""
          style={{ width: '75%' }}
        />
        </div>
        <p className="text-grey text-base md:text-lg mt-6">
          We helped a lab at the Arizona State University, Fulton School of
          Engineering develop a virtual reality prototype to submit to the
          National Science Foundation (NSF).
        </p>
        <p className="text-grey text-base md:text-lg mt-6">
          Studies have shown that many children with ASD prefer immersive
          interactive technologies, and this preference can be explored to
          develop systems that may inspire creative learning through immersive
          play. The proposed solution consists of an immersive VR program
          integrated with biometric feedback modules which allow users to
          explore, learn, and tackle new challenges within the safety of a
          virtual environment. Additionally, this could be done with no time
          constraints, as many times as that individual desires to use the
          program, while reformatting mundane material in a manner that is more
          consistent with their hyper-focused topic of interest (from{" "}
          <a href="https://furi.engineering.asu.edu/wp-content/uploads/2022/03/Gil-Ruiz.pdf">
            here
          </a>
          )
        </p>
        <p className="text-grey text-base md:text-lg mt-6">
          The virtual reality prototype tests whether children across the autism
          spectrum disorder (ASD) respond in VR. Any interaction/response is
          stored in a database which can then be accessed by the lab. The
          researcher provides a voice command via Google Cloud to the NPC (Non
          Player Character) asking the child to pick up the object. There are 2
          types of responses that the lab wanted to test:
          <ol>
            <li>If an object/toy was picked up</li>
            <li>If so, then what kind of object/toy was picked up</li>
          </ol>
        </p>
      </div>
      <div className="mb-16">
        <h1
          className="text-white text-xl md:text-2xl mb-8"
        >
          Built for Meta Quest 1 & 2 using Unity Engine
        </h1>
        <h1 className="text-white text-xl md:text-2xl mb-8">Results</h1>
        <div className="flex sm:flex-row flex-col gap-5 items-center">
          <img
            className="lg:w-7/12 sm:w-6/12 xs:w-9/12 h-full object-contain"
            src="https://toggletechlab.s3.us-east-2.amazonaws.com/ASU/ASU3.PNG"
            alt=""
          />
          <img
            className="lg:w-7/12 sm:w-6/12 xs:w-9/12 h-full object-contain"
            src="https://toggletechlab.s3.us-east-2.amazonaws.com/ASU/ASU2.PNG"
            alt=""
          />
        </div>
        {/* <p className="text-grey text-base md:text-lg mt-6"></p> */}
        <p className="text-grey text-base md:text-lg mt-6">
          All participants were very receptive towards the VR system and the
          environment which was created for this trial. Therefore, successfully
          confirming the lab's initial hypothesis that children diagnosed with
          ASD respond in VR more willingly.
        </p>
      </div>
      <div className="mb-16">
        <h1 className="text-white text-xl md:text-2xl mb-8">Future direction</h1>
        <div className="flex items-center">
          <img
            className="w-full h-full object-contain"
            src="https://toggletechlab.s3.us-east-2.amazonaws.com/ASU/ASU1.PNG"
            alt=""
          />
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

