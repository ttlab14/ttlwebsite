import React from "react";

const Detail = () => {
  return (
    <div>
      <div className="mb-16">
        <h1 className="text-white text-xl md:text-2xl mb-8">
         Art Hostel, Kyiv, Ukraine
        </h1>
        
        <p className="text-grey text-base md:text-lg mt-6">
        Step into the world of a Ukrainian art studio with a new AR portal. The art
         studio has been transformed into a 3D experience that can be accessed 
         through a web AR walk-through. With just a quick scan of a QR code on 
         the artist’s webpage, you can immerse
         yourself in our art studio from anywhere in the world.
        </p>
        <p className="text-grey text-base md:text-lg mt-6">
        Using cutting-edge technology, we have scanned the studio in 3D and
         created a blender file that has been optimized for AR. This means 
         that you can experience the art studio as if you were physically
          standing within it. Explore the space, move around and interact 
          with the artworks in a whole new way. See the pieces from different
           angles, view them up close or step back and appreciate the
            space they occupy.
        
        </p>
        <p className="text-grey text-base md:text-lg mt-6">
        This web AR experience offers a unique way to explore the artist’s 
        studio and  art. It’s an exciting opportunity to connect with their 
        work in a way that was previously impossible. The portal offers an immersive
         and interactive experience that will transport you there.
        </p>
        <p className="text-grey text-base md:text-lg mt-6">
        We’re thrilled to offer this experience 
        to audiences, and we hope that it will inspire a new appreciation for 
        the beauty and intricacy of our work. Whether you’re an art enthusiast or
         just curious
         about new technology, this AR portal is an experience not to be missed.
         </p>
      </div>

      <div className="mb-8">
        <h1 className="text-white text-xl md:text-2xl mb-8">
          Try it out
        </h1>
      </div>
      <div 
        className="flex sm:flex-row flex-col gap-3 items-center mb-16"
      >
        <img
          className="sm:w-[57%] w-9/12 h-full object-contain"
          src="https://toggletechlab.s3.us-east-2.amazonaws.com/ArtStudio/ukraine_ar.jpeg"
          alt=""
        />
        <img
          className="sm:w-[43%] w-9/12 h-full object-contain"
          src="https://toggletechlab.s3.us-east-2.amazonaws.com/ArtStudio/QRCode.jpeg"
          alt=""
        />
      </div>

      <div className="mb-8">
      <h1 className="text-white text-xl md:text-2xl mb-8">
        Web AR experience built using Unity Engine
      </h1>
      </div>
      <div className="flex sm:flex-row flex-col gap-5 items-center my-5">
      <img
          className="w-full h-full object-fill"
          src="https://toggletechlab.s3.us-east-2.amazonaws.com/ArtStudio/art1-min.PNG"
          alt=""
        />
      </div>
      <div className="flex sm:flex-row flex-col gap-5 items-center my-5">
        <img
          className="w-full h-full object-fill"
          src="https://toggletechlab.s3.us-east-2.amazonaws.com/ArtStudio/art2-min.PNG"
          alt=""
        />
      </div>

      <div className="flex sm:flex-row flex-col gap-5 items-center my-5">
      <img
          className="w-full h-full object-fill"
          src="https://toggletechlab.s3.us-east-2.amazonaws.com/ArtStudio/art3-min.PNG"
          alt=""
        />
      </div>
    </div>
      
    
  );
};

export default Detail;

