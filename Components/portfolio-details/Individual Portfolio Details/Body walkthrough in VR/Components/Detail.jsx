import React from "react";

const Detail = () => {
  return (
    <div>
      <div className="mb-16">
        <h1 className="text-white text-xl md:text-2xl mb-8">
        Body Walkthrough in VR
        </h1>
        <div  className="w-full sm:h-72 lg:h-96  2xl:h-100  3xl:h-110">
        <img
          className="w-full h-full object-contain"
          src="https://toggletechlab.s3.us-east-2.amazonaws.com/BodyWalkThrough/walkthrough_cover2.png"
          alt=""
        />
        </div>
        <p className="text-grey text-base md:text-lg mt-6">
          Imagine learning about your diagnosis in VR as the doctor in the office walks you
          through your body, layer by layer. This is what this proof of concept aim to do.
          Made for a medical company that offers
          patients a way to learn more about their diagnosis in VR.
        </p>
        <p className="text-grey text-base md:text-lg mt-6">
          Unlike other 3The 3D model used is one of a real patient.  A scan of a patient 
          has been converted into a 3D model which is then projected in VR.
        </p>
        <p className="text-grey text-base md:text-lg mt-6">
        The initial proof of concept went through iterations in order to
        finesse the scan into a 3D model which could then be used in VR.
    Eventually coming to a stage where each layer of the body such as the
    skin, muscles, tissue could be unmasked to zoom in and
    out into key organs of the body relevant to the patient’s diagnosis.
        </p>
      </div>
      <div className="mb-3">
        <h1 className="text-white text-xl md:text-2xl mb-8">
          Built for Meta Quest 1 & 2 using Unreal Engine 4
        </h1>

        <div className="flex sm:flex-row flex-col gap-3 items-center">
          <img
            className="lg:w-7/12 sm:w-6/12 xs:w-9/12 object-contain"
            src="https://toggletechlab.s3.us-east-2.amazonaws.com/BodyWalkThrough/bodywalkthrough2.PNG"
            alt=""
            ContentType = "image/jpeg"
          />
          <img
            className="lg:w-7/12 sm:w-6/12 xs:w-9/12 object-contain"
            src="https://toggletechlab.s3.us-east-2.amazonaws.com/BodyWalkThrough/bodywalkthrough3.PNG"
            alt=""
          />
        </div>
      </div>
      <div  className="flex flex-row space-x-2.5 justify-start">
        <div>
        {/* <iframe
          src="https://toggletechlab.s3.us-east-2.amazonaws.com/BodyWalkThrough/walkthroughgif1.gif"
          width="650"
          height="650"
          allowFullScreen
          title="walkthroughgif1"
        /> */}
        <img 
          src="https://toggletechlab.s3.us-east-2.amazonaws.com/BodyWalkThrough/walkthroughgif1.gif"
          alt="gif"
          width="650"
          height="650" 
        />
        </div> 
      </div>

      <div className="flex items-center">

        </div>

 
      </div>
  );
};
export default Detail;

