import React from "react";
import { TwitterTimelineEmbed, TwitterShareButton, TwitterFollowButton, TwitterHashtagButton, TwitterMentionButton, TwitterTweetEmbed, TwitterMomentShare, TwitterDMButton, TwitterVideoEmbed, TwitterOnAirButton } from 'react-twitter-embed';

const Detail = () => {
  return (
    <div>
      <div className="mb-16">
        <h1 className="text-white text-xl md:text-2xl mb-8">
        The Inverse Surveillance Project
        </h1>
        <div  className="w-full h-72 lg:h-96  2xl:h-100  3xl:h-110">
        <img
          className="w-full h-full object-contain"
          src="/images/Portfolio Details/is/is_cover.png"
          alt=""
        />
        </div>
        <p className="text-grey text-base md:text-lg mt-6">
        The Inverse Surveillance Project is titled after the idea of "citizen under-sight," which
         involves the individuals being monitored taking 
        action to observe and understand the surveillance systems that are in place.
        </p>
        <p className="text-grey text-base md:text-lg mt-6">
        It is an interactive artwork that has been collaboratively created by the Arab and Muslim 
        American communities in the Chicagoland region. This installation will be a life-sized maze
         that serves as a platform for an all-encompassing community archive. The archive  transforms
          countless documents, which were gathered during ten years of FBI surveillance,
         into a space for group healing and the reclamation of a communal narrative.
        </p>
       
       <p  className="text-grey text-base md:text-lg mt-6">
       <TwitterTweetEmbed
  tweetId={'1545589022239735808'}
/>
     
       </p>
      </div>
      <div className="mb-16">
        <h1 className="text-white text-xl md:text-2xl mb-8">
         Installation        
         </h1>
        <p className="text-grey text-base md:text-lg mt-6"></p>
        <p className="text-grey text-base md:text-lg mt-6"></p>
        <p className="text-grey text-base md:text-lg mt-6">
        An AR component was added to the installation. The installation is constructed as a complete, 
        life-size maze and contains over 33,000 pages of documents obtained through FOIA requests
         during ten years of FBI surveillance on the community. Augmented reality serves as a catalyst,
          initiating the community archive that exists within the maze, and granting access to the
           community's collective memory - including family videos and photographs - concealed between
            the redacted portions of the government's official records. The project has been designed 
            as an AR experience for mobile devices, repurposing a familiar surveillance tool and taking 
            participants on an immersive journey through a labyrinth of official 
        state narratives, communal memory, and the formation of an alternative narrative.
        </p>
      </div>
      <div className="mb-16">
        <h1 className="text-white text-xl md:text-2xl mb-8">Labyrinth</h1>
        </div>
      <div className="flex sm:flex-row flex-col gap-5 items-center">
      <img
          className="w-full h-full object-contain"style={{ width: '500px' }}
          src="/images/Portfolio Details/is/labyrinth.png"
          alt=""
        />
               <p className="text-grey text-base md:text-lg mt-6">
        The walls of the life-sized labyrinth will be comprised of more than 33,000 pages of
         FOIA documents collected during a decade of FBI surveillance of the community. Within the 
         labyrinth, the redacted spaces in the documents — white holes where the government has disappeared 
         information — will be transformed into spaces of possibility. The community archive, consisting 
         of fragments of collective memory in the form of home videos and photographs shared by the community, will live in between these redactions and will be mediated using augmented reality. Within the very center of the labyrinth, we invite people in the community to join us to boldly cross-stitch their names into the redacted records, using Palestinian “tatreez” embroidery. Together we’ll create an interconnected textile marking the 
        relationships that gives shape to a network of a tight-knit Arab and Muslim community (https://www.inversesurveillance.com/project/labyrinth)
        </p>
        </div>
      
    </div>
  );
};

export default Detail;
