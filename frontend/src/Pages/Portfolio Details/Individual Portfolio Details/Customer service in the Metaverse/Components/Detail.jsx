import React from "react";

const Detail = () => {
  return (
    <div>
      <div className="mb-16">
        <h1 className="text-white text-xl md:text-2xl mb-8">
        Customer service in the Metaverse
        </h1>
        <div  className="w-full sm:h-72 lg:h-96  2xl:h-100  3xl:h-110">
        <img
          className="w-full h-full object-contain"
          src="https://toggletechlab.s3.us-east-2.amazonaws.com/CustomerServiceMetaverse/voctivlogo.png"
          alt=""
          style={{ width: '600px' }}
        />
        </div>
        <p className="text-grey text-base md:text-lg mt-6">
        Our team has implemented a customer service system in the
         Metaverse using AI-powered voice agents provided by Voctiv. Voctiv’s  
         agents are so advanced that 99% of people cannot distinguish them from 
         human agents, as they can change intonation, make pauses, and 
        follow the conversation flow to sound natural and logical.
        </p>
        <p className="text-grey text-base md:text-lg mt-6">
        To create this system, we built a 3D scene on a parcel of land in 
        Decentraland and placed a Non-Player Character (NPC) as the customer
         service representative. When a user visits the parcel of land and says
          something to the NPC, the data and sound are extracted from Decentraland
           and sent to the Voctiv AI platform. The voice is then converted into text, 
           and a command 
        is issued and sent back to the Decentraland parcel as sound.
        </p>
        <p className="text-grey text-base md:text-lg mt-6">
        The process of the user giving voice commands through their device
         microphone and the audio stream traveling to the Voctiv AI platform
          is followed by the platform passing the audio stream to a Speech-to-Text
           engine of choice (Voctive ASR, Google ASR, or other). The voice command 
           is then converted to text on the ASR engine, and the converted
         text is processed by the NLP and NLU of the Voctiv AI platform.
        </p>
   
<p className="text-grey text-base md:text-lg mt-6">
The extracted actions/commands (with entities and intents) are then passed to the middleware/connector, which converts the intents and entities into API calls for Decentraland. Finally, the middleware/connector sends API
 calls to the Decentraland scene.
</p>
<p className="text-grey text-base md:text-lg mt-6">
Our team had a great time working on this engaging and fun project,
 and we give kudos to our 
developers for making it possible!
</p>
      </div>
      <div className="mb-16">
        <h1 className="text-white text-xl md:text-2xl mb-8">
          Built for the web using Unity Engine, JavaScript and Python
        </h1>
        <div className="flex sm:flex-row flex-col gap-5 items-center my-5">
        <video controls className="cursor-pointer">
            <source src="https://toggletechlab.s3.us-east-2.amazonaws.com/CustomerServiceMetaverse/DCL_Voctiv_Talk.mp4" type="video/mp4" />
          </video>
        </div>

        
        
      
    </div>
    </div>
  );
};

export default Detail;
