import React from "react";

const Detail = () => {
  return (
    <div>
      <div className="mb-16">
        <h1 className="text-white text-xl md:text-2xl mb-8">
          EcoPod Walk Through in VR
        </h1>
        <div  className="w-full sm:h-72 lg:h-96  2xl:h-100  3xl:h-110">
          <img
            className="w-full h-full object-contain"
            src="https://toggletechlab.s3.us-east-2.amazonaws.com/EcoPod/oceanb_logo-removebg-preview.png"
            style={{ width: '55%' }}
            alt=""
          />
        </div>
        <p className="text-grey text-base md:text-lg mt-6">
          Virtual tour of an Ecopod made for  OceanBuilders with our agency partner Top Innovation
          Lab in Panama.  In the words of OceanBuilders, Ecopods are high tech floating *homes*
          in the shape of Pods. They are futuristic & allows you to Live Just Above the Waves
        </p>
        <p className="text-grey text-base md:text-lg mt-6">
          On February 3th, 2019 we made history. We successfully launched a full
          size prototype floating home suitable for life on
          the ocean. It was launched in international waters 13 miles off 
          the coast of Thailand. After only a few months in the water it had become 
          a habitat for a thriving community for tens of thousands of fish and other sea 
          life where there was no life before. It was an eco-restoration success story.
          We have received significant international media coverage from around the world 
          and our story is being written into a book and possibly a screenplay for a movie 
          that will tell the full story that has never been told.
          *You can find us now working in co-operation with the government of Panama to 
          create what we believe will be a very special floating community of eco-restorative
          floating smart-homes in Panama(from: https://oceanbuilders.com/press/)
        </p>
        <p className="text-grey text-base md:text-lg mt-6">
          Toggle Tech Lab had the pleasure of working on this product for Ecopod’s launch
          party in Panama city, Panama. We developed a PC VR experience with  high fidelity 
          graphics of the interior of an Ecopod coupled with sounds of the waves 
          and birds chirping, to allow for a more  immersive experience. The user
          can teleport through  various parts of the EcoPod to explore it.
        </p>
      </div>
      <div className="mb-16">
        <h1 className="text-white text-xl md:text-2xl mb-8">
          Built for PC VR using Unreal Engine
        </h1>

        <div  className="flex flex-col gap-5">
          <img
            className="w-full h-full object-contain"
            src="https://toggletechlab.s3.us-east-2.amazonaws.com/EcoPod/ecopod6.jpeg"
            alt=""
          />
          <img
            className="w-full h-full object-contain"
            src="https://toggletechlab.s3.us-east-2.amazonaws.com/EcoPod/ecopod5.jpeg"
            alt=""
          />
          </div>
      
        <p className="text-grey text-base md:text-lg mt-6"></p>
        <p className="text-grey text-base md:text-lg mt-6"></p>
      </div>
      <div className="mb-16">
        <h1 className="text-white text-xl md:text-2xl mb-8">Event</h1>
        <div  className="flex flex-col gap-5">

          {/* This is the Ecopod videos */}
          <>
            <div className="flex sm:flex-row flex-col items-center gap-5 w-full h-full">
              <video 
                controls
                poster="https://toggletechlab.s3.us-east-2.amazonaws.com/EcoPod/ocean_builders_thumbnail_1.PNG"
                className="cursor-pointer sm:w-1/2 w-9/12 h-full object-contain"
              >
                <source 
                  src="https://toggletechlab.s3.us-east-2.amazonaws.com/EcoPod/ecopodvd2.mp4" 
                  type="video/mp4" 
                />
              </video>
              <video 
                controls
                poster="https://toggletechlab.s3.us-east-2.amazonaws.com/EcoPod/ocean_builders_thumbnail_2.PNG"
                className="cursor-pointer sm:w-1/2 w-9/12 h-full object-contain"
              >
                <source 
                  src="https://toggletechlab.s3.us-east-2.amazonaws.com/EcoPod/ecopodvd4.mp4" 
                  type="video/mp4" 
                />
              </video>
            </div>
            <div className="flex sm:flex-row flex-col items-center w-full h-full">
              <video 
                controls
                poster="https://toggletechlab.s3.us-east-2.amazonaws.com/EcoPod/ocean_builders_thumbnail_3.PNG" 
                className="cursor-pointer sm:w-1/2 w-9/12 h-1/2 object-contain"
              >
                <source 
                  src="https://toggletechlab.s3.us-east-2.amazonaws.com/EcoPod/ecopodvd3.mp4" 
                  type="video/mp4" 
                />
              </video>
            </div>
          </>
          <div className="xxl:w-6/12 xl:w-7/12 sm:w-8/12 w-full lg:h-72 h-68">
            <img
              className="w-full h-full object-fill"
              src="https://toggletechlab.s3.us-east-2.amazonaws.com/EcoPod/ecopod1.jpeg"
              alt=""
            />
          </div>
        </div>
        <p className="text-grey text-base md:text-lg mt-6"></p>
        <p className="text-grey text-base md:text-lg mt-6">
        </p>
      </div>
      <div className="mb-16">
        <h1 className="text-white text-xl md:text-2xl mb-8">Results</h1>
        <div className="w-full">
          {/* video here: ecopodvr.mp4 */}
          <video 
            controls
            className="cursor-pointer"
            poster="https://toggletechlab.s3.us-east-2.amazonaws.com/EcoPod/ocean_builders_thumbnail_4.PNG"
          >
            <source 
              src="https://toggletechlab.s3.us-east-2.amazonaws.com/EcoPod/ecopodvr.mp4" 
              type="video/mp4" 
            />
          </video>
        </div>
        
        <p className="text-grey text-base md:text-lg mt-6">
        </p>
      </div>
    </div>
  );
};

export default Detail;

