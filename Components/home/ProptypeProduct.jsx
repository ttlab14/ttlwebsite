import React from "react";
import Link from "next/link";
const ProptypeProduct = () => {
  return (
    <div className="bg-light-grey">
      <div className="w-11/12  md:w-3/4 mx-auto grid lg:grid-cols-2 gap-12 items-center py-20">
        <div className="">
          <img
            src="https://toggletechlab.s3.us-east-2.amazonaws.com/PageAssets/2nd+Section-min.png"
            alt=""
          />
        </div>
        <div className="md:w-11/12">
          <h1 className="text-gold text-base uppercase mb-2">
            Augmented reality development Virtual reality development
          </h1>
          <h1 className="text-white text-xl md:text-2xl mb-8">
            Prototypes And Products That Get It
          </h1>
          <p className="text-grey text-base md:text-lg mb-4">
            Looking for XR solutions provider for your startup or SME? Look no
            further than our company, AR/VR Funding Solutions. We specialize in
            providing affordable XR development services, including augmented
            reality development, virtual reality development, and rapid
            prototyping XR.
          </p>

          <p className="text-grey text-base md:text-lg mb-4">
            Our extended reality services also include custom AR/VR solutions,
            mixed reality development, immersive technology solutions, and
            holographic experiences. We can help you develop XR prototypes and
            provide XR solutions for investor presentations, training and
            education, health tech, corporate real estate, and edutech.
          </p>

          <p className="text-grey text-base md:text-lg mb-4">
            As an XR solutions provider, we offer XR app development, as well as
            XR training solutions. Our innovative company is dedicated to
            helping startups secure funding through the use of cutting-edge
            AR/VR proof of concepts. We understand that startups often struggle
            to secure funding due to the lack of tangible proof of their product
            or service.
          </p>

          <p className="text-grey text-base md:text-lg mb-4">
            That's why we create immersive and interactive proof of concepts
            that bring your startup's vision to life. Our team of experienced
            developers, designers, and investors work closely with you to ensure
            that your proof of concept effectively showcases the potential of
            your product or service. We then leverage our extensive network of
            investors to connect you with the right people to fund your startup.
          </p>
          <p className="text-grey text-base md:text-lg mb-4">
            Don't let a lack of funding hold your startup back. Contact us today
            to learn how our AR/VR proof of concepts can help you secure the
            funding you need to succeed.
          </p>
          <p className="text-grey text-base md:text-lg mb-4">
            With our proven track record, you can trust that we will help you
            turn your ideas into reality. Don't let a lack of funding hold your
            startup back. Contact us today to learn how our XR solutions can
            help you secure the funding you need to succeed.
          </p>

          <div className="grid grid-cols-2 gap-12 items-center my-12">
            <div className="md:mb-2">
              <img
                className="w-3/4"
                src="https://toggletechlab.s3.us-east-2.amazonaws.com/AboutPage/Upwork-min.png"
                alt=""
              />
            </div>
            <div className="md:mb-2">
              <img
                className="w-3/4"
                src="https://toggletechlab.s3.us-east-2.amazonaws.com/AboutPage/XR+Today-min.png"
                alt=""
              />
            </div>
            <div className="md:mb-2">
              <img
                className="w-3/4"
                src="https://toggletechlab.s3.us-east-2.amazonaws.com/AboutPage/Rising+Star-min.png"
                alt=""
              />
            </div>
            <div className="md:mb-2">
              <img
                className="w-3/4"
                src="https://toggletechlab.s3.us-east-2.amazonaws.com/AboutPage/Venture+Labs-min.png"
                alt=""
              />
            </div>
          </div>

          <Link href="/about">
            <button className="text-gold text-base md:text-lg border-2 border-gray-400 rounded-3xl py-2 px-5 ">
              Read More
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProptypeProduct;
