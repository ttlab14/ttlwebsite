import React from "react";

const Detail = () => {
  return (
    <div>
      <div className="mb-16">
        <h1 className="text-white text-xl md:text-2xl mb-8">
                    Learn the Alphabet in Sign Language in VR

        </h1>
        <div  className="w-full sm:h-72 lg:h-96  2xl:h-100  3xl:h-110">
        <img
          className="w-full h-full object-contain"
          src="https://toggletechlab.s3.us-east-2.amazonaws.com/SignLanguageVR/signlang1.PNG"
          alt=""
        />
        </div>
        <p className="text-grey text-base md:text-lg mt-6">
        Who said learning has to be boring? Not us! 
        This project has been done for a VR education startup based out of Florida, USA. This pre-seed startup showcased this Harry Potter style training 
        simulation for an Ed Tech grant. They ended up getting 75K in return and have mad more simulations geared towards the homeschooling market.
The main goal of this Harry Potter style training is to immerse learners in an environment which facilitates a more productive and fun learning experience to learn the alphabet in sign language  . 
A user is presented with alphabets of the sign language and must copy the gesture for an alphabet, before being presented with the next one. If the user’s gesture does not match that of the alphabet then they must re-try.  This is good practice!
        </p>
        <p className="text-grey text-base md:text-lg mt-6">
        Learning in virtual reality (VR) can be effective for several reasons:
        </p>
        <p className="text-grey text-base md:text-lg mt-6">
        <ol>
<li>1. Immersion: VR creates an immersive environment that can engage multiple senses, such as sight, sound, and touch. This can make the learning experience more memorable
   and engaging, which can increase the retention of information.</li> <br></br>
<li>2. Personalization: VR can allow learners to personalize their learning
   experience by choosing their own path, pace, and content. This can increase motivation
    and engagement, which can lead to better learning outcomes.</li> <br></br>
<li>3. Interactivity: VR can provide a highly interactive learning environment where 
  learners can actively engage with the content and practice skills in a safe and controlled setting.
   This can facilitate learning by doing, which is often more effective than passive learning.</li><br></br>
<li>4. Realism: VR can simulate real-world scenarios, which can help learners apply their knowledge and skills to real-life situations. This can increase the transfer of learning to the real world and enhance the practical application of skills.
</li> <br></br>

</ol>
Overall, VR can be an effective tool for learning because it provides an engaging, personalized, interactive, and realistic learning environment.

The psychological distance between the learner and the teacher is greater than in real life. This makes also makes learning in VR more effective as it allows for a user to make mistakes and learn from them more freely as
        </p>
      </div>
      <div className="mb-16">
        <h1 className="text-white text-xl md:text-2xl mb-8">
          Built for Meta Quest 1 & 2 using Unity Engine
        </h1>
        <div  className="w-full sm:h-72">
        <img
          className="w-full h-full object-contain"
          src="https://toggletechlab.s3.us-east-2.amazonaws.com/SignLanguageVR/space2.png"
           alt=""
        />
        </div>
        
      </div>
      <div className="flex sm:flex-row flex-col gap-5 items-center my-5">
          <img
            className="lg:w-7/12 sm:w-6/12 xs:w-9/12 h-full object-contain"
            src="https://toggletechlab.s3.us-east-2.amazonaws.com/SignLanguageVR/signlang3.PNG"
            alt=""
          />
          <img
            className="lg:w-7/12 sm:w-6/12 xs:w-9/12 h-full object-contain"
            src="https://toggletechlab.s3.us-east-2.amazonaws.com/SignLanguageVR/signlang4.PNG"
            alt=""
          />
        </div>

        <div className="flex sm:flex-row flex-col gap-5 items-center">
          <img
            className="lg:w-7/12 sm:w-6/12 xs:w-9/12 h-full object-contain"
            src="https://toggletechlab.s3.us-east-2.amazonaws.com/SignLanguageVR/signlang2.PNG"
            alt=""
          />
          <img
            className="lg:w-7/12 sm:w-6/12 xs:w-9/12 h-full object-contain"
            src="https://toggletechlab.s3.us-east-2.amazonaws.com/SignLanguageVR/signlang5.PNG"
            alt=""
          />
        </div>

       

        <div className="flex sm:flex-row flex-col gap-5 items-center">
        <iframe
          src="https://toggletechlab.s3.us-east-2.amazonaws.com/SignLanguageVR/signlanggif1.gif"
          width="650"
          height="650"
allowFullScreen
/>
<iframe
          src="https://toggletechlab.s3.us-east-2.amazonaws.com/SignLanguageVR/signlanggif2.gif"
          width="650"
          height="650"
allowFullScreen
/>
        </div>
          
      </div>
  );
};

export default Detail;



