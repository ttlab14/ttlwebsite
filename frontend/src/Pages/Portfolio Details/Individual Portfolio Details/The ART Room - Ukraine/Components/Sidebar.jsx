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
               Unity Game Engine
              </div>
            </li>
            <li className="text-gold">
              <div className="text-grey">Web AR</div>
            </li>
            <li className="text-gold">
              <div className="text-grey">Sketch</div>
            </li>
          </ul>
        </div>
      </div>
      <div className="mb-10">
        <h1 className="text-white text-md mb-4 pb-4 border-b border-dark-grey">
          AR (Augmented Reality)
        </h1>
        <div>
          <ul className="text-grey text-base md:text-lg marker:text-red-800 list-disc ml-4">
            <li className="text-gold">
              <div className="text-grey">
               Browser based AR
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
                <a href="https://sketchfab.com/3d-models/art-hostel-in-kyiv-ukraine-d4611805a2874e23afb0ee438fdbec45" target="_blank">
                Art-hostel in Kyiv, Ukraine                </a>

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
