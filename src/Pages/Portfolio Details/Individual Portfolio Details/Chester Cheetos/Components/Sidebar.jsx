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
               Phaser.js Game Engine
              </div>
            </li>
            <li className="text-gold">
              <div className="text-grey">API Development</div>
            </li>
            <li className="text-gold">
              <div className="text-grey">AdobeXD</div>
            </li>
          </ul>
        </div>
      </div>
      <div className="mb-10">
        <h1 className="text-white text-md mb-4 pb-4 border-b border-dark-grey">
Web Game        </h1>
        <div>
          <ul className="text-grey text-base md:text-lg marker:text-red-800 list-disc ml-4">
            <li className="text-gold">
              <div className="text-grey">
PC, Tablet and Mobile              
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
                <a href="https://www.tastyrewards.com/en-ca" rel="noreferrer" target="_blank">
                Tasty Rewards</a> 

              </div>
            </li>
            
            <li className="text-gold">
              <div className="text-grey">
                <a href="https://chestergame.netlify.app/" rel="noreferrer" target="_blank">
                Play the game here </a> 
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
