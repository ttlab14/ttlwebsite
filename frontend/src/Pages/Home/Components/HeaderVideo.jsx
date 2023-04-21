import React from "react";

const HeaderVideo = () => {
  return (
    <div className="w-11/12  md:w-3/4 mx-auto mb-16">
      <video autoPlay muted loop>
        <source src="https://toggletechlab.s3.us-east-2.amazonaws.com/header_video.mp4" type="video/mp4" />
      </video>
    </div>
  );
};

export default HeaderVideo;
