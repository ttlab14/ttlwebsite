import React from "react";

const HeaderVideo = () => {
  return (
    <div className="w-11/12 lg:w-7/12 md:w-9/12 mx-auto mb-16 pt-20 sm:hidden block" id="headerVideo-section">
      <video 
        autoPlay
        controls
        loop
        poster="/images/thumnails/headerVideo-thumb.PNG"
      >
        <source 
          src="https://toggletechlab.s3.us-east-2.amazonaws.com/header_video.mp4" 
          type="video/mp4" 
        />
      </video>
    </div>
  );
};

export default HeaderVideo;
