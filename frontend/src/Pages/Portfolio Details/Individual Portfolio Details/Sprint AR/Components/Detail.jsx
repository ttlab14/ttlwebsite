import React from "react";

const Detail = () => {
  return (
    <div>
      <div className="mb-16">
        <h1 className="text-white text-xl md:text-2xl mb-8">
          Sprint AR
        </h1>
        <div  className="w-full h-72 lg:h-96  2xl:h-100  3xl:h-110">
        <img
          className="w-full h-full object-contain"
          src="https://toggletechlab.s3.us-east-2.amazonaws.com/SprintAR/sprintarlogo.png"
          alt=""
        />
        </div>
        <p className="text-grey text-base md:text-lg mt-6">
        Training for a race?  The Sprint AR app offers a challenge where you compete with an augmented reality runner in the widely popular 40-yard dash, a test of speed in sports. This experience enables you to gain a sense of what it's like to match the speed of professional athletes who typically finish the race in 4-5 seconds. Whether you're aiming to set a benchmark for your personal development or curious to know how it feels to achieve high speeds, this AR application can provide you with the visual representation of that experience.
        </p>
        <p className="text-grey text-base md:text-lg mt-6">
        The core features of the app include, timed races, the ability to race against a NPC (Non Player character), race against characters with their own accelerations/top speeds for example fast zombies to simulate them chasing the runner, or horses/dolphins/cheetah. The ability to line up multiple AR opponents to race simultaneously
        </p>
        <p className="text-grey text-base md:text-lg mt-6">
        This AR app also includes monetization features such as app ads and a Premium option to pay $1.99 to go ad-free (along with access to future items)
        </p>
        <p className="text-grey text-base md:text-lg mt-6">
        As with most apps there are also social features such as the ability for a user to invite other users in exchange for the Premium option, the ability to post race results to social media ("I just ran 40-yards in 4.8 seconds!") and . adding basic race history and a personal best
          </p>
          <p className="text-grey text-base md:text-lg mt-6">
          Want to start racing?
          <ul>
        <li>Scan the area in front of you, aim your device's camera at it and gradually move it. </li>
        <li>Once the surface has been detected, a white mesh will appear over it, and you will see an indicator to mark the starting point.</li>
        <li>To confirm the placement of the starting line, click the "Place" button. If you are not satisfied with the placement, you can redo it by clicking the "Redo" button.</li>
        <li>After the placement, you can slowly adjust your position along the racing environment to capture the race from your preferred angle.</li>

          </ul>
          </p>
          <p className="text-grey text-base md:text-lg mt-6">
          App can be found <a href="https://apps.apple.com/us/app/sprint-ar/id1618259372?platform=iphone">here</a>
          </p>
      </div>
      <div className="mb-16">
        <h1 className="text-white text-xl md:text-2xl mb-8">
          Built for iPhone
        </h1>
        <div  className="flex sm:flex-row flex-col gap-5 items-center">
        <img
          className="lg:w-7/12 sm:w-6/12 xs:w-9/12 h-full object-contain"
          src="https://toggletechlab.s3.us-east-2.amazonaws.com/SprintAR/sprint0.PNG"
          alt=""
        />
        <img
          className="lg:w-7/12 sm:w-6/12 xs:w-9/12 h-full object-contain"
          src="https://toggletechlab.s3.us-east-2.amazonaws.com/SprintAR/sprint5.PNG"
          alt=""
        />
        </div>

         <div  className="flex sm:flex-row flex-col gap-5 items-center">
        <img
          className="lg:w-7/12 sm:w-6/12 xs:w-9/12 h-full object-contain"
          src="https://toggletechlab.s3.us-east-2.amazonaws.com/SprintAR/sprint1.PNG"
          alt=""
        />
        <img
          className="lg:w-7/12 sm:w-6/12 xs:w-9/12 h-full object-contain"
          src="https://toggletechlab.s3.us-east-2.amazonaws.com/SprintAR/sprint4.PNG"
          alt=""
        />
        </div> 
      </div>
      <div className="mb-16">
      <div  className="flex items-center">
        <img
          className="w-full h-full object-contain"
          src="https://toggletechlab.s3.us-east-2.amazonaws.com/SprintAR/sprint3.PNG"
          alt=""
        />
        </div>
        
      </div>
    </div>
  );
};

export default Detail;

