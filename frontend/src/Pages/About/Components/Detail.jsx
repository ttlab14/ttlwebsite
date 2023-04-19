import React from "react";

const Detail = () => {
  return (
    <div className="w-11/12  md:w-3/4 mx-auto">
      {" "}
      <div className="grid lg:grid-cols-2 gap-12 items-center mt-20">
        <div className="">
          <img src="https://toggletechlab.s3.us-east-2.amazonaws.com/PageAssets/2nd+Section-min.png" alt="" />
        </div>
        <div className="md:w-11/12">
          <h1 className="text-white text-xl md:text-2xl mb-8">
            Prototypes And Products That Get It
          </h1>
          <p className="text-grey text-base md:text-lg">
          Welcome to Toggle Tech Lab, the premier destination for turning your concepts into tangible 
          XR products or services. Since 2018 we have helped over 115 startups and businesses.
          </p> 
          <p className="text-grey text-base md:text-lg">

          At Toggle Tech Lab, we are dedicated to helping both 
          startups and established businesses achieve their goals by creating cutting-edge
           virtual and augmented reality prototypes. Our team of highly skilled developers 
           and designers utilizes the latest technology to deliver fully immersive experiences
            that bring your vision to life. With our expertise, you can be confident that your
             project will be executed with precision and excellence. Don't settle for anything less 
             than the best. Join us at Toggle Tech Lab and let us help you transform your ideas into reality.
          </p>
        </div>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-12 items-center my-20">
        <div>
          <img src="/images/About/Upwork.png" alt="" />
        </div>
        <div>
          <img src="/images/About/XR Today.png" alt="" />
        </div>
        <div>
          <img src="/images/About/Rising Star.png" alt="" />
        </div>
        <div>
          {" "}
          <img src="/images/About/Venture Labs.png" alt="" />
        </div>
      </div>
    </div>
    
  );
};

export default Detail;
