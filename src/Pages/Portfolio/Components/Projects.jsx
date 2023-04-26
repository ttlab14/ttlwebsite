import React, { useCallback, useEffect, useMemo, useState } from "react"

import ProjectsList from "../../../Common/ProjectsList"
import { useLocation } from "react-router-dom"

const Projects = () => {
  const location = useLocation()
  const query = new URLSearchParams(location.search)
  let typeParam = query.get("type")
  if (typeParam) {
    typeParam = typeParam.replace(/_/g, " ")
  }
  if (typeParam === "Training Simulations") {
    typeParam = "Training"
  }
  if (typeParam === "Augmented Reality") {
    typeParam = "AR"
  }
  if (typeParam === "AI, Metaverse") {
    typeParam = "AI"
  }
  if (typeParam === "3D and 2D Games") {
    typeParam = "Games"
  }
  if (typeParam === "3D and 2D Games") {
    typeParam = "Games"
  }
  if (typeParam === "Virtual Reality") {
    typeParam = "All Projects"
  }
  const projects = useMemo(
    () => [
      //immersive enviornments
      {
        type: "Immersive Enviornments",
        name: "EcoPod",
        img: "https://toggletechlab.s3.us-east-2.amazonaws.com/EcoPod/ecopod1.jpeg",
        icon: "vr",
      },
      {
        type: "Immersive Enviornments",
        name: "360 degree music video",
        img: "https://toggletechlab.s3.us-east-2.amazonaws.com/360degvideo/360degmusicvideo.jpg",
        icon: "vr",
      },

      //education
      {
        type: "Training",
        name: "Learn the Sign Language in VR",
        img: "https://toggletechlab.s3.us-east-2.amazonaws.com/SignLanguageVR/signlang1.PNG",
        icon: "vr",
      },
      {
        type: "Training",
        name: "Teaching Solar Energy Systems Design using Game-Based Virtual Reality",
        img: "https://toggletechlab.s3.us-east-2.amazonaws.com/SolarPanel/solar1.png",
        icon: "vr",
      },

      {
        type: "Training",
        name: "Chemical Engineering Simulation",
        img: "https://toggletechlab.s3.us-east-2.amazonaws.com/ChemicalEngineeringSimulation/cover_chemengg.PNG",
        icon: "vr",
      },
      //medical

      {
        type: "Medical Simulations",
        name: "Providing Comprehensive Therapy For Children With Autism Spectrum Disorder",
        img: "https://toggletechlab.s3.us-east-2.amazonaws.com/ASU/ASU1.PNG",
        icon: "vr",
      },
      {
        type: "Medical Simulations",
        name: "Body walkthrough in VR",
        img: "https://toggletechlab.s3.us-east-2.amazonaws.com/BodyWalkThrough/bodywalkthrough3.PNG",
        icon: "vr",
      },
      {
        type: "Medical Simulations",
        name: "Noble Pharma App",
        img: "https://toggletechlab.s3.us-east-2.amazonaws.com/Noble/splashscreen.PNG",
        icon: "vr",
      },
      {
        type: "Medical Simulations",
        name: "RN Training",
        img: "https://toggletechlab.s3.us-east-2.amazonaws.com/VRRN/vrrn2.jpg",
        icon: "vr",
      },

      //Brand activation

      {
        type: "Brand Activations",
        name: "The ART Room - Ukraine",
        img: "https://toggletechlab.s3.us-east-2.amazonaws.com/ArtStudio/art2.PNG",
        icon: "vr",
      },
      //games
      {
        type: "Games",
        name: "Chester Cheetos",
        img: "https://toggletechlab.s3.us-east-2.amazonaws.com/CarnivalChester/cover-min.PNG",
        icon: "games",
      },
      {
        type: "Games",
        name: "Police Simulator",
        img: "https://toggletechlab.s3.us-east-2.amazonaws.com/PoliceSimulator+/pcover-min.PNG",
        icon: "games",
      },
      {
        type: "Games",
        name: "Chemical Engineering Simulation",
        img: "https://toggletechlab.s3.us-east-2.amazonaws.com/ChemicalEngineeringSimulation/cover_chemengg.PNG",
        icon: "games",
      },

      //AI
      {
        type: "AI",
        name: "Customer service in the Metaverse",
        img: "https://toggletechlab.s3.us-east-2.amazonaws.com/CustomerServiceMetaverse/decentraland_metaverse_thumbnail.PNG",
        icon: "metaverse",
      },
      /*
    {
      type: "AI",
      name: "Waajoo Africa Metaverse Prototype",
      img: "",
      icon: "metaverse",
    },
*/
      // Augmented reality
      {
        type: "AR",
        name: "Sprint AR",
        img: "https://toggletechlab.s3.us-east-2.amazonaws.com/SprintAR/sprintarlogo.png",
        icon: "ar",
      },
      {
        type: "AR",
        name: "Noble Pharma App",
        img: "https://toggletechlab.s3.us-east-2.amazonaws.com/Noble/splashscreen.PNG",
        icon: "ar",
      },
      {
        type: "AR",
        name: "The ART Room - Ukraine",
        img: "https://toggletechlab.s3.us-east-2.amazonaws.com/ArtStudio/art2.PNG",
        icon: "ar",
      },
      {
        type: "AR",
        name: "Inverse Surveillance",
        img: "/images/Portfolio/AR/inverse.png",
        icon: "ar",
      },
      {
        type: "Training",
        name: "Immersive Mind",
        img: "https://toggletechlab.s3.us-east-2.amazonaws.com/InverseSurveillance+/is_cover-min.PNG",
        icon: "vr",
      },
    ],
    []
  )

  const [sorted, setSorted] = useState(projects)
  const [selected, setSelected] = useState("All Projects")
  const handleSort = useCallback(
    (value) => {
      if (value === "All Projects") {
        setSorted(projects)
        setSelected("All Projects")
      } else {
        setSorted(projects.filter((item) => item.type === value))
        setSelected(value)
      }
    },
    [projects]
  )

  useEffect(() => {
    if (typeParam) {
      handleSort(typeParam)
    }
  }, [handleSort, typeParam])
  return (
    <>
      <div>
        <div className="w-11/12 md:w-3/4 mx-auto">
          <h1 className="text-white text-xl md:text-2xl mt-12">
            Prototypes And Products <br /> That Get It
          </h1>
          <p className="text-gold text-base my-4 uppercase">Sort Projects</p>
        </div>
        <div className="flex overflow-auto pb-4 w-11/12 ml-auto md:w-3/4  md:mx-auto">
          <div
            onClick={() => {
              handleSort("All Projects")
            }}
            className={`rounded-3xl cursor-pointer text-base  border whitespace-nowrap ${
              selected === "All Projects"
                ? "border-white text-white"
                : "border-grey text-grey"
            } py-1 px-3 mr-2`}
          >
            All Projects
          </div>
          <div
            onClick={() => {
              handleSort("Immersive Enviornments")
            }}
            className={`rounded-3xl cursor-pointer text-base  border whitespace-nowrap ${
              selected === "Immersive Enviornments"
                ? "border-white text-white"
                : "border-grey text-grey"
            } py-1 px-3 mr-2`}
          >
            Immersive Enviornments
          </div>
          <div
            onClick={() => {
              handleSort("Brand Activations")
            }}
            className={`rounded-3xl cursor-pointer text-base border  whitespace-nowrap ${
              selected === "Brand Activations"
                ? "border-white text-white"
                : "border-grey text-grey"
            } py-1 px-3 mr-2`}
          >
            Brand Activations
          </div>
          <div
            onClick={() => {
              handleSort("Training")
            }}
            className={`rounded-3xl cursor-pointer text-base  border whitespace-nowrap ${
              selected === "Training"
                ? "border-white text-white"
                : "border-grey text-grey"
            } py-1 px-3 mr-2`}
          >
            Training
          </div>
          <div
            onClick={() => {
              handleSort("Games")
            }}
            className={`rounded-3xl cursor-pointer text-base  border whitespace-nowrap ${
              selected === "Games"
                ? "border-white text-white"
                : "border-grey text-grey"
            } py-1 px-3 mr-2`}
          >
            2D & 3D Games
          </div>

          <div
            onClick={() => {
              handleSort("Medical Simulations")
            }}
            className={`rounded-3xl cursor-pointer text-base  border whitespace-nowrap ${
              selected === "Medical Simulations"
                ? "border-white text-white"
                : "border-grey text-grey"
            } py-1 px-3 mr-2`}
          >
            Medical Simulations
          </div>

          <div
            onClick={() => {
              handleSort("AI")
            }}
            className={`rounded-3xl cursor-pointer text-base  border whitespace-nowrap ${
              selected === "AI"
                ? "border-white text-white"
                : "border-grey text-grey"
            } py-1 px-3 mr-2`}
          >
            AI, Metaverse
          </div>

          <div
            onClick={() => {
              handleSort("AR")
            }}
            className={`rounded-3xl cursor-pointer text-base  border whitespace-nowrap ${
              selected === "AR"
                ? "border-white text-white"
                : "border-grey text-grey"
            } py-1 px-3 mr-2`}
          >
            Augmented Reality
          </div>
        </div>
      </div>
      <div className="w-11/12  md:w-3/4 mx-auto">
        <ProjectsList sorted={sorted} />
      </div>
    </>
  )
}

export default Projects
