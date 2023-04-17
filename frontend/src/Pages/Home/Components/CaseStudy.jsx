import React from "react";
import ProjectsList from "../../../Common/ProjectsList";
import { Link } from 'react-router-dom'
const projects = [
  {
    name:"portfolio",
    type: "Virtual Reality",
    img: "/images/Portfolio/vr.png",
    icon:"vr"
  },
  {
    name:"portfolio",
    type: "Augmented Reality",
    img: "/images/Portfolio/ar.png",
    icon:"ar"
  },
  {
    name:"portfolio",
    type: "Medical Simulations",
    img: "/images/Portfolio/medical.png",
    icon:"vr"
  },
  {
    name:"portfolio",
    type: "Training Simulations",
    img: "/images/Portfolio/training.png",
    icon:"vr"
  },

  {
    name:"portfolio",
    type: "AI, Metaverse",
    img: "/images/Portfolio/metaverse.png",
    icon:"metaverse"
  },

  {
    name:"portfolio",
    type: "3D and 2D Games",
    img: "/images/Portfolio/games.png",
    icon:"games"
  },
];
const CaseStudy = () => {
  return (
    <div className="w-11/12  md:w-3/4 mx-auto my-20">
      <h1 className="text-gold text-base uppercase mb-4">Case Study</h1>
      <div className="md:flex justify-between items-center  mb-8">
        <h1 className="text-white text-xl md:text-2xl">
          Our Works
          <br /> Speaks For Itself
        </h1>
        <Link to="/service">
        <button className="text-gold text-base md:text-lg border-2 border-gray-400 rounded-3xl py-2 px-5 mt-4">
          View All Services
        </button>
        </Link>
      </div>
      <ProjectsList sorted={projects} />
    </div>
  );
};

export default CaseStudy;
