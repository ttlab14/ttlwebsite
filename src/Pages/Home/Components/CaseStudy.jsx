import React from "react";
import ProjectsList from "../../../Common/ProjectsList";
import { Link } from 'react-router-dom'
const projects = [
  {
    name:"portfolio",
    type: "Virtual Reality",
    img: "https://toggletechlab.s3.us-east-2.amazonaws.com/PortfolioPage/vr-min.png",
    icon:"vr"
  },
  {
    name:"portfolio",
    type: "Augmented Reality",
    img: "https://toggletechlab.s3.us-east-2.amazonaws.com/PortfolioPage/ar-min.png",
    icon:"ar"
  },
  {
    name:"portfolio",
    type: "Medical Simulations",
    img: "https://toggletechlab.s3.us-east-2.amazonaws.com/PortfolioPage/medical-min.png",
    icon:"vr"
  },
  {
    name:"portfolio",
    type: "Training Simulations",
    img: "https://toggletechlab.s3.us-east-2.amazonaws.com/PortfolioPage/training-min.png",
    icon:"vr"
  },

  {
    name:"portfolio",
    type: "AI, Metaverse",
    img: "https://toggletechlab.s3.us-east-2.amazonaws.com/PortfolioPage/metaverse-min.png",
    icon:"metaverse"
  },

  {
    name:"portfolio",
    type: "3D and 2D Games",
    img: "https://toggletechlab.s3.us-east-2.amazonaws.com/PortfolioPage/games-min.png",
    icon:"games"
  },
];
const CaseStudy = () => {
  return (
    <div className="w-11/12  md:w-3/4 mx-auto my-20">
      <h1 className="text-gold text-base uppercase mb-4">Case Study</h1>
      <div className="md:flex justify-between items-center  mb-8">
        <h1 className="text-white text-xl md:text-2xl">
         AR & VR Work </h1>
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

