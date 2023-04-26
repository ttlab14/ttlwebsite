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
        img: "/images/Portfolio/Immersive_Env/360music.png",
        icon: "vr",
      },

      //education
      {
        type: "Training",
        name: "Learn the Sign Language in VR",
        img: "/images/Portfolio/Training/alphabet.png",
        icon: "vr",
      },
      {
        type: "Training",
        name: "Teaching Solar Energy Systems Design using Game-Based Virtual Reality",
        img: "/images/Portfolio/Training/solar.png",
        icon: "vr",
      },

      {
        type: "Training",
        name: "Chemical Engineering Simulation",
        img: "/images/Portfolio/Games/engineering.png",
        icon: "vr",
      },
      //medical

      {
        type: "Medical Simulations",
        name: "Providing Comprehensive Therapy For Children With Autism Spectrum Disorder",
        img: "/images/Portfolio/Medical/ASU.png",
        icon: "vr",
      },
      {
        type: "Medical Simulations",
        name: "Body walkthrough in VR",
        img: "/images/Portfolio/Medical/UE_MedicalWalkthrough.png",
        icon: "vr",
      },
      {
        type: "Medical Simulations",
        name: "Noble Pharma App",
        img: "/images/Portfolio/Medical/noble.png",
        icon: "vr",
      },
      {
        type: "Medical Simulations",
        name: "RN Training",
        img: "/images/Portfolio/Medical/VRRN.png",
        icon: "vr",
      },

      //Brand activation

      {
        type: "Brand Activations",
        name: "The ART Room - Ukraine",
        img: "/images/Portfolio/AR/ukraine_ar.jpeg",
        icon: "vr",
      },
      //games
      {
        type: "Games",
        name: "Chester Cheetos",
        img: "/images/Portfolio/Games/chester.png",
        icon: "games",
      },
      {
        type: "Games",
        name: "Police Simulator",
        img: "/images/Portfolio/Games/policesim.png",
        icon: "games",
      },
      {
        type: "Games",
        name: "Chemical Engineering Simulation",
        img: "/images/Portfolio/Games/engineering.png",
        icon: "games",
      },

      //AI
      {
        type: "AI",
        name: "Customer service in the Metaverse",
        img: "/images/Portfolio/AI/DCL_voctiv.png",
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
        img: "/images/Portfolio/AR/sprintAR.png",
        icon: "ar",
      },
      {
        type: "AR",
        name: "Noble Pharma App",
        img: "/images/Portfolio/Medical/noble.png",
        icon: "ar",
      },
      {
        type: "AR",
        name: "The ART Room - Ukraine",
        img: "/images/Portfolio/AR/ukraine_ar.jpeg",
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
        img: "/images/Portfolio/Training/immersivemind.png",
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
