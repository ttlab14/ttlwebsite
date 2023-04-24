import React from "react";
import { TwitterTweetEmbed } from 'react-twitter-embed';
const Detail = () => {
  return (
    <div>
      <div className="mb-16">
        <h1 className="text-white text-xl md:text-2xl mb-8">
         Noble Pharmaceutical AR App
        </h1>
        <div  className="w-full sm:h-72 lg:h-96  2xl:h-100  3xl:h-110">
        <img
          className="w-half h-half object-contain"
          src="https://toggletechlab.s3.us-east-2.amazonaws.com/Noble/NoblePharmaLogo.png"
          alt=""
        />
        </div>
        <p className="text-grey text-base md:text-lg mt-6">
        Noble is a well-known name in the medical device training solutions industry. 
        They specialize in developing patient on-boarding strategies and creating multi-sensory 
        product development for pharmaceutical brands. Recently, in collaboration with Aptar Pharma, 
        Noble has launched AdhereITTM, a patient on-boarding product specifically designed for 
        patients with chronic conditions who use auto injectors to self-administer their medications at home.
        </p>
        <p className="text-grey text-base md:text-lg mt-6">
        Patients with chronic conditions who require auto injectors to self-administer their medications often experience anxiety and apprehension. To help alleviate these fears, an AR training app has been developed by Noble. The app employs augmented reality to teach patients how to correctly use the auto injector, 
        allowing them to visualize the procedure and overcome any self-doubts they may have. (from{" "}
          <a href="https://noblepharmallc.com/">
            here
          </a>
          )
        </p>
        <h1 className="text-white text-xl md:text-2xl mb-8">
          Built for Android and iPhone Unity Engine
        </h1>
        <p className="text-grey text-base md:text-lg mt-6">
        The AdhereITTM product, developed by Noble and Aptar Pharma, is an innovative solution to the common
         issues faced by patients with chronic conditions. The app's user-friendly interface and engaging 
         visuals make it easy for patients to learn and master the correct technique for administering their
          medication. AdhereITTM is set to become a significant tool in the healthcare industry, 
        helping patients to manage their chronic conditions with greater ease and confidence.
        </p>
        <p className="text-grey text-base md:text-lg mt-6">
Tweet here
<TwitterTweetEmbed
  tweetId={'1620867127103078400'}
/>
</p>

      </div>
      <div className="mb-16">
 
        <h1 className="text-white text-xl md:text-2xl mb-1">Training on device #1</h1>

        <div  className="flex flex-row space-x-2.5">
        <div>
          <img
          className="w-full object-contain"
          src="https://toggletechlab.s3.us-east-2.amazonaws.com/Noble/splashscreen.PNG"
          alt=""
        />
        </div>

          <div>
          <img
          className="w-full object-contain"
          src="https://toggletechlab.s3.us-east-2.amazonaws.com/Noble/welcome.jpeg"
          alt=""
        />
          </div>
          <div>
          <img
          className="w-full object-contain"
          src="https://toggletechlab.s3.us-east-2.amazonaws.com/Noble/step_1_a.jpeg"
          alt=""
        />
          </div>

          <div>
          <img
          className="w-full object-contain"
          src="https://toggletechlab.s3.us-east-2.amazonaws.com/Noble/step_2_a.jpeg"
          alt=""
        />
          </div>
          </div>
          </div>


      <div className="mb-16">
        <h1 className="text-white text-xl md:text-2xl mb-8">
         </h1>
        <div  className="flex flex-row space-x-2.5">

          <div>
          <img
          className="w-full object-contain"
          src="https://toggletechlab.s3.us-east-2.amazonaws.com/Noble/step_3_a.jpeg"
          alt=""
        />
          </div>
           
          <div>
          <img
          className="w-full object-contain"
          src="https://toggletechlab.s3.us-east-2.amazonaws.com/Noble/step_4_a.jpeg"
          alt=""
        />
          </div>
          <div>
          <img
          className="w-full object-contain"
          src="https://toggletechlab.s3.us-east-2.amazonaws.com/Noble/step_5_a.jpeg"
          alt=""
        />
          </div>
          
          <div>
          <img
          className="w-full object-contain"
          src="https://toggletechlab.s3.us-east-2.amazonaws.com/Noble/step_5_a.jpeg"
          alt=""
        />
          </div>
        </div>
        <p className="text-grey text-base md:text-lg mt-6"></p>
        <p className="text-grey text-base md:text-lg mt-6"></p>
      </div>
      
      <div className="mb-16">
        <h1 className="text-white text-xl md:text-2xl mb-1">Training on device #2</h1>
        <div  className="flex flex-row space-x-2.5">
        <div>
          <img
          className="w-full object-contain"
          src="https://toggletechlab.s3.us-east-2.amazonaws.com/Noble/welcome.jpeg"
          alt=""
        />
          </div>
          <div>
          <img
          className="w-full object-contain"
          src="https://toggletechlab.s3.us-east-2.amazonaws.com/Noble/step1.jpeg"
          alt=""
        />
          </div>
          <div>
          <img
          className="w-full object-contain"
          src="https://toggletechlab.s3.us-east-2.amazonaws.com/Noble/step2.jpeg"
          alt=""
        />
          </div>
          <div>
          <img
          className="w-full object-contain"
          src="https://toggletechlab.s3.us-east-2.amazonaws.com/Noble/step3.jpeg"
          alt=""
        />
          </div>
          </div>
        <p className="text-grey text-base md:text-lg mt-6">

        </p>
      </div>
    </div>
  );
};

export default Detail;
