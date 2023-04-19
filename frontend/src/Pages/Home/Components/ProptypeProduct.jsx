import React from "react";
import { Link } from 'react-router-dom'
const ProptypeProduct = () => {
  return (
    
    <div className="bg-light-grey">
      <div className="w-11/12  md:w-3/4 mx-auto grid lg:grid-cols-2 gap-12 items-center py-20">
        <div className="">
          <img src="https://toggletechlab.s3.us-east-2.amazonaws.com/PageAssets/2nd+Section-min.png" alt="" />
        </div>
        <div className="md:w-11/12">
          <h1 className="text-gold text-base uppercase mb-2">About Us</h1>
          <h1 className="text-white text-xl md:text-2xl mb-8">
            Prototypes And Products That Get It
          </h1>
          <p className="text-grey text-base md:text-lg mb-4">
          Introducing our innovative company, AR/VR Funding Solutions. We specialize in helping startups secure funding through the use of cutting-edge AR/VR proof of concepts.
</p>
<p className="text-grey text-base md:text-lg mb-4">
We understand that startups often struggle to secure funding due to the lack of tangible proof of their product or service. That's where we come in. Using our expertise in AR/VR technology, we create immersive and interactive proof of concepts that bring your startup's vision to life.
</p>
<p className="text-grey text-base md:text-lg mb-4">
Our team of experienced developers, designers, and investors work closely with you to ensure that your proof of concept effectively showcases the potential of your product or service. We then leverage our extensive network of investors to connect you with the right people to fund your startup.
</p>
<p className="text-grey text-base md:text-lg mb-4">
Our proven track record speaks for itself. We have helped numerous startups secure funding and turn their ideas into reality. With AR/VR Funding Solutions, you can rest assured that you are in good hands.
</p>          
<p className="text-grey text-base md:text-lg mb-4">
Don't let a lack of funding hold your startup back. Contact us today to learn how our AR/VR proof of concepts can help you secure the funding you need to succeed.
          </p>
          <p className="text-grey text-base md:text-lg mb-4">
          When you partner with us, you'll gain access to our expertise and know-how,
           ensuring that your project is executed with precision and excellence.
            Let us show you the power of virtual and augmented reality - join us today and 
            experience the difference for yourself!
          </p>

          <div className="grid grid-cols-2 gap-12 items-center my-12">
        <div className="md:mb-2">
          <img className="w-3/4" src="https://toggletechlab.s3.us-east-2.amazonaws.com/AboutPage/Upwork-min.png" alt="" />
        </div>
        <div className="md:mb-2">
          <img className="w-3/4" src="https://toggletechlab.s3.us-east-2.amazonaws.com/AboutPage/XR+Today-min.png" alt="" />
        </div>
        <div className="md:mb-2">
          <img className="w-3/4" src="https://toggletechlab.s3.us-east-2.amazonaws.com/AboutPage/Rising+Star-min.png" alt="" />
        </div>
        <div className="md:mb-2">
          <img className="w-3/4" src="https://toggletechlab.s3.us-east-2.amazonaws.com/AboutPage/Venture+Labs-min.png" alt="" />
        </div>
      </div>

          <Link to="/about">
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

