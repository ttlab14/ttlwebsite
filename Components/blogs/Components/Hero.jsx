import React from "react";

const Hero = ({ Blog }) => {
  console.log(Blog);
  return (
    <div className="relative">
      <img
        className="w-full hidden sm:block"
        src="https://toggletechlab.s3.us-east-2.amazonaws.com/Mobile/Hero-min.png"
        alt=""
      />
      <img
        className="w-full sm:hidden"
        src="https://toggletechlab.s3.us-east-2.amazonaws.com/Mobile/Hero+Mobile.png"
        alt=""
      />
      {/* <div className="absolute top-1/3 mt-8 w-full"> */}
      <div className="absolute top-1/3 w-full">
        <h1 className="w-11/12  md:w-3/4 mx-auto text-2xl md:text-4xl md:leading-12 text-white">
          {Blog.blogTitle}
          <br />
        </h1>
      </div>
    </div>
  );
};

export default Hero;
