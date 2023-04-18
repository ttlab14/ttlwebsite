/*import React from "react";
import { Link } from 'react-router-dom'
const Detail = () => {
  return (
    <div className="grid grid-cols-3 gap-8 my-28 text-xl text-white">
      <Link to="/service-details/Virtual-Reality">
      <div className="mb-9">
        <img src="/images/Services/Virtual Reality.png" alt="" />
        <p className="mt-6">Virtual Reality</p>
      </div>
      </Link>
      <Link to="/service-details/Virtual-Reality">
      <div className="mb-9">
        <img src="images/Services/Augmented Reality.png" alt="" />
        <p className="mt-6">Immersive Training (VR & Mixed Reality)</p>
      </div>
      </Link>
      <Link to="/service-details/Virtual-Reality">
      <div className="mb-9">
        <img src="images/Services/Immersive Training.png" alt="" />
        <p className="mt-6">Augmented Reality Immersive Training</p>
      </div>
      </Link>
      <Link to="/service-details/Virtual-Reality">
      <div className="mb-9">
        <img src="images/Services/XR Marketing.png" alt="" />
        <p className="mt-6">2D & 3D Games</p>
      </div>
      </Link>
      <Link to="/service-details/Virtual-Reality">
      <div className="mb-9">
        <img src="images/Services/3D Modeling.png" alt="" />
        <p className="mt-6">3D Modeling</p>
      </div>
      </Link>
      <Link to="/service-details/Virtual-Reality">
      <div>
        <img src="images/Services/Retail Store Virtualization.png" alt="" />
        <p className="mt-6">Retail Store Virtualization, Metaverse</p>
      </div>
      </Link>
    </div>
  );
};
*/

import React from "react"

const Detail = () => {
  return (
    <div className="w-11/12  md:w-3/4 mx-auto mt-20">
      <h1 className="text-white text-xl md:text-2xl mb-8">What We Do</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12 md:mb-16">
        <div className="bg-gradient-to-br from-card-bg to-transparent rounded-2xl ">
          <div className="py-10 px-8">
            <img className="w-14 h-14" src="/icons/Why-Choose-1.svg" alt="" />
            <h1 className="text-white text-xl my-4">
              Strategic Consulting, and Development for XR Technologies
            </h1>
            <p className="text-grey text-base md:text-lg">
              AR (Augmented Reality), VR (Virtual Reality) and XR (Extended
              Reality) consulting. Unsure of the direction to take? Want to
              create an effective prototype? Talk to us.
            </p>
          </div>
        </div>
        <div className="bg-gradient-to-br from-card-bg to-transparent rounded-2xl">
          <div className="py-10 px-8">
            <img className="w-14 h-14" src="/icons/Why-Choose-2.svg" alt="" />
            <h1 className="text-white text-xl my-4">
              Application Development for VR HMD Platforms
            </h1>
            <p className="text-grey text-base md:text-lg">
              We develop for Meta Quest, HTC Vive, Pico, Varjo and others
            </p>
          </div>
        </div>
        <div className="bg-gradient-to-br from-card-bg to-transparent rounded-2xl">
          <div className="py-10 px-8">
            <img className="w-14 h-14" src="/icons/Why-Choose-3.svg" alt="" />
            <h1 className="text-white text-xl my-4">
              Camera AR Lens and Photo Filters
            </h1>
            <p className="text-grey text-base md:text-lg">
              Facebook, Snapchat, Instagram
            </p>
            <ul className="list-disc ml-6 text-base md:text-lg">
              <li className="mt-2 text-gold">
                <div className="text-grey">
                  Web AR SDKs (DeepAR, and 8th Wall)
                </div>
              </li>
              <li className="mt-2 text-gold">
                <div className="text-grey">
                  Design and Animation for filters
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div className="bg-gradient-to-br from-card-bg to-transparent rounded-2xl ">
          <div className="py-10 px-8">
            <img className="w-14 h-14" src="/icons/Why-Choose-4.svg" alt="" />
            <h1 className="text-white text-xl my-4">Mobile AR</h1>
            <p className="text-grey text-base md:text-lg">
              iOS ARKit, Android ARCore and AR Foundation
            </p>
            <ul className="list-disc ml-6 text-base md:text-lg">
              <li className="mt-2 text-gold">
                <div className="text-grey">Experential AR andAR training</div>
              </li>
              <li className="mt-2 text-gold">
                <div className="text-grey">
                  AR for marketing and influencers
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div className="bg-gradient-to-br from-card-bg to-transparent rounded-2xl ">
          <div className="py-10 px-8">
            <img className="w-14 h-14" src="/icons/Why-Choose-5.svg" alt="" />
            <h1 className="text-white text-xl my-4">
              360º Content Creation Videos
            </h1>
            <p className="text-grey text-base md:text-lg">
              360º video and picture creation suitable for VR and 3D web
              experiences.
            </p>
          </div>
        </div>
        <div className="bg-gradient-to-br from-card-bg to-transparent rounded-2xl">
          <div className="py-10 px-8">
            <img className="w-14 h-14" src="/icons/Why-Choose-6.svg" alt="" />
            <h1 className="text-white text-xl my-4">Haptics</h1>
            <p className="text-grey text-base md:text-lg">
              We work with Haptics and sensors
            </p>
          </div>
        </div>

        <div className="bg-gradient-to-br from-card-bg to-transparent rounded-2xl">
          <div className="py-10 px-8">
            <img className="w-14 h-14" src="/icons/Why-Choose-3.svg" alt="" />
            <h1 className="text-white text-xl my-4">2D and 3D Games</h1>
            <p className="text-grey text-base md:text-lg">
              Company engagement and Brand recognition games
            </p>
            <ul className="list-disc ml-6 text-base md:text-lg">
              <li className="mt-2 text-gold">
                <div className="text-grey">Browser, PC and mobile games</div>
              </li>
              <li className="mt-2 text-gold">
                <div className="text-grey">
                  Phaser.js, three.js, Bablyon.js, PlayCanvas & Unity
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div className="bg-gradient-to-br from-card-bg to-transparent rounded-2xl">
          <div className="py-10 px-8">
            <img className="w-14 h-14" src="/icons/Why-Choose-7.svg" alt="" />
            <h1 className="text-white text-xl my-4">3D Design and Modelling</h1>
            <p className="text-grey text-base md:text-lg">
              Blender, 3ds Max and Cinema4D
            </p>
            <ul className="list-disc ml-6 text-base md:text-lg">
              <li className="mt-2 text-gold">
                <div className="text-grey">
                  Low poly and High poly asset creation
                </div>
              </li>
              <li className="mt-2 text-gold">
                <div className="text-grey">2D and 3D animation</div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Detail
