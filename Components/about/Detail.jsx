import React from "react";
const Detail = () => {
  return (
    <div className="w-11/12 md:w-3/4 mx-auto">
      {" "}
      <div className="grid lg:grid-cols-2 gap-12 items-center mt-20">
        <div className="">
          <img
            src="https://toggletechlab.s3.us-east-2.amazonaws.com/PageAssets/2nd+Section-min.png"
            alt=""
          />
        </div>
        <div className="md:w-11/12">
          <h1 className="text-white text-xl md:text-2xl mb-8">
            Prototypes And Products That Get It
          </h1>
          <p className="text-grey text-base md:text-lg">
            Welcome to Toggle Tech Lab XR solutions, your go-to XR solutions
            provider for all your business needs. Our expert team specializes in
            Augmented reality development, Virtual reality development, and
            Mixed reality development to cater to a wide range of industries,
            including but not limited to, health tech, corporate real estate,
            and edutech.
          </p>
          <p className="text-grey text-base md:text-lg">
            We provide personalized guidance to startups and SMEs and offer
            affordable XR development solutions to turn your concepts into
            reality. Our rapid prototyping XR services enable you to test your
            ideas quickly and efficiently. We also offer custom AR/VR solutions
            to create immersive and interactive experiences for investor
            presentations and training and education purposes.
          </p>
          <p className="text-grey text-base md:text-lg">
            At Toggle Tech Lab XR solutions, we understand the importance of
            precision and excellence in the XR industry. That's why our highly
            skilled team of developers and designers uses the latest technology
            to deliver extended reality services, immersive technology
            solutions, and holographic experiences that exceed your
            expectations.
          </p>
          <p className="text-grey text-base md:text-lg">
            We are dedicated to helping both startups and established businesses
            achieve their goals by creating cutting-edge virtual and augmented
            reality prototypes. Don't settle for anything less than the best.
            Join us at Toggle Tech Lab and let us help you transform your ideas
            into reality.
          </p>
        </div>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-12 items-center my-20">
        <div>
          <img
            src="https://toggletechlab.s3.us-east-2.amazonaws.com/AboutPage/Upwork-min.png"
            alt=""
          />
        </div>
        <div>
          <img
            src="https://toggletechlab.s3.us-east-2.amazonaws.com/AboutPage/XR+Today-min.png"
            alt=""
          />
        </div>
        <div>
          <img
            src="https://toggletechlab.s3.us-east-2.amazonaws.com/AboutPage/Rising+Star-min.png"
            alt=""
          />
        </div>
        <div>
          {" "}
          <img
            src="https://toggletechlab.s3.us-east-2.amazonaws.com/AboutPage/Venture+Labs-min.png"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};
export default Detail;
