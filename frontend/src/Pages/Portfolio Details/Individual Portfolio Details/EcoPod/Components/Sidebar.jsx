import React from "react";

const Sidebar = () => {
  return (
    <div className="lg:w-1/4">
      <div className="mb-10">
        <h1 className="text-white text-md mb-4 pb-4 border-b border-dark-grey">
          Application Development
        </h1>
        <div>
          <ul className="text-grey text-base md:text-lg list-disc ml-4">
            <li className="text-gold">
              <div className="text-grey">
             Unreal Game Engine
              </div>
            </li>
            <li className="text-gold">
              <div className="text-grey">PC VR</div>
            </li>
            <li className="text-gold">
              <div className="text-grey">3DS Max</div>
            </li>
            <li className="text-gold">
              <div className="text-grey">Cinema 4D</div>
            </li>
          </ul>
        </div>
      </div>
      <div className="mb-10">
        <h1 className="text-white text-md mb-4 pb-4 border-b border-dark-grey">
          VR (Virtual Reality)
        </h1>
        <div>
          <ul className="text-grey text-base md:text-lg marker:text-red-800 list-disc ml-4">
            <li className="text-gold">
              <div className="text-grey">
               Meta Quest 1 & 2
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div className="mb-10">
        <h1 className="text-white text-md mb-4 pb-4 border-b border-dark-grey">
          From The Experts
        </h1>
        <div>
          <ul className="text-grey text-base md:text-lg marker:text-red-800 list-disc ml-4">

          <li className="text-gold">
            <div className="text-grey">
                <a href="https://oceanbuilders.com/" target="_blank">
                   Ocean Builders</a>
              </div>
            </li>   
            
            <li className="text-gold">
            <div className="text-grey">
                <a href="https://www.businessinsider.com/take-a-look-floating-pods-panama-costing-millions-2022-8#ocean-builders-uses-steel-tubes-to-create-the-floating-homes-3-meters-above-the-water-in-panamas-linton-bay-marina-5" target="_blank">
                Want to live in a home that seems to float above the sea? Take a look at these 'living pods' being built in Panama</a>
              </div>
            </li>   

          </ul>
        </div>
      </div>
      <div className="mb-10">
        <h1 className="text-white text-md mb-4 pb-4 border-b border-dark-grey">
          Questions?
        </h1>
        <div>
          <ul className="text-grey text-base md:text-lg marker:text-red-800 list-disc ml-4">
            <li className="text-gold">
              <div className="text-grey">
                Feel free to reach out.
                <br />{" "}
                <span className="font-medium text-white"> Contact Us</span>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
