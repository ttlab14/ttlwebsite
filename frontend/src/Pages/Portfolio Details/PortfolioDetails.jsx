import React from "react";
import LetsTalk from "../../Common/LetsTalk";
import { useLocation } from "react-router-dom";
import RNTraining from "./Individual Portfolio Details/RN Training/RNTraining";
import DegreeMusicvVideo from "./Individual Portfolio Details/360 degree music video/DegreeMusicvVideo";
import BodywalkthroughinVR from "./Individual Portfolio Details/Body walkthrough in VR/BodywalkthroughinVR";
import ChemicalEngineeringSimulation from "./Individual Portfolio Details/Chemical Engineering Simulation/ChemicalEngineeringSimulation";
import ChesterCheetos from "./Individual Portfolio Details/Chester Cheetos/ChesterCheetos";
import ComprehensiveTherapyForChildren from "./Individual Portfolio Details/Comprehensive Therapy For Children/ComprehensiveTherapyForChildren";
import CustomerserviceintheMetaverse from "./Individual Portfolio Details/Customer service in the Metaverse/CustomerserviceintheMetaverse";
import Doffleinandouttraining from "./Individual Portfolio Details/Doffle in and out training/Doffleinandouttraining";
import EcoPod from "./Individual Portfolio Details/EcoPod/EcoPod";
import InverseSurveillance from "./Individual Portfolio Details/Inverse Surveillance/InverseSurveillance";
import ImmersiveMind from "./Individual Portfolio Details/Immersive Mind/ImmersiveMind";
import LearntheSignLanguageinVR from "./Individual Portfolio Details/Learn the Sign Language in VR/LearntheSignLanguageinVR";
import NoblePharmaApp from "./Individual Portfolio Details/Noble Pharma App/NoblePharmaApp";
import PoliceSimulator from "./Individual Portfolio Details/Police Simulator/PoliceSimulator";
import SprintAR from "./Individual Portfolio Details/Sprint AR/SprintAR";
import TeachingSolarEnergySystemsDesign from "./Individual Portfolio Details/Teaching Solar Energy Systems Design/TeachingSolarEnergySystemsDesign";
import TheARTRoomUkraine from "./Individual Portfolio Details/The ART Room - Ukraine/TheARTRoomUkraine";
import TheUnitedProspectorsGuild from "./Individual Portfolio Details/The United Prospectors Guild/TheUnitedProspectorsGuild";
import WaajooAfricaMetaversePrototype from "./Individual Portfolio Details/Waajoo Africa Metaverse Prototype/WaajooAfricaMetaversePrototype";

const PortfolioDetails = () => {
  const projectDetailDirectory = [
    {
      name: "RN Training",
      component: RNTraining,
    },
    {
      name: "360 degree music video",
      component: DegreeMusicvVideo,
    },
    {
      name: "Body walkthrough in VR",
      component: BodywalkthroughinVR,
    },
    {
      name: "Chemical Engineering Simulation",
      component: ChemicalEngineeringSimulation,
    },
    {
      name: "Chester Cheetos",
      component: ChesterCheetos,
    },
    {
      name: "Providing Comprehensive Therapy For Children With Autism Spectrum Disorder",
      component: ComprehensiveTherapyForChildren,
    },
    {
      name: "Customer service in the Metaverse",
      component: CustomerserviceintheMetaverse,
    },
    {
      name: "Doffle in and out training",
      component: Doffleinandouttraining,
    },
    {
      name: "EcoPod",
      component: EcoPod,
    },
    {
      name: "Inverse Surveillance",
      component: InverseSurveillance,
    },
    {
      name: "Immersive Mind",
      component: ImmersiveMind,
    },
    {
      name: "Learn the Sign Language in VR",
      component: LearntheSignLanguageinVR,
    },
    {
      name: "Noble Pharma App",
      component: NoblePharmaApp,
    },
    {
      name: "Police Simulator",
      component: PoliceSimulator,
    },
    {
      name: "Sprint AR",
      component: SprintAR,
    },
    {
      name: "Teaching Solar Energy Systems Design using Game-Based Virtual Reality",
      component: TeachingSolarEnergySystemsDesign,
    },
    {
      name: "The ART Room - Ukraine",
      component: TheARTRoomUkraine,
    },
    {
      name: "The United Prospectors Guild",
      component: TheUnitedProspectorsGuild,
    },
    {
      name: "Waajoo Africa Metaverse Prototype",
      component: WaajooAfricaMetaversePrototype,
    },
  ];
  const location = useLocation();
  const paths = location.pathname.split("/");
  const currentPath = paths[paths.length - 1].replace(/_/g, " ");
  let CurrentComponent;
  projectDetailDirectory.map((component) => {
    if (
      component.name.toLocaleLowerCase() === currentPath.toLocaleLowerCase()
    ) {
      CurrentComponent = component.component;
    }
    return null;
  });
  return (
    <>
      {CurrentComponent && <CurrentComponent />}
      <LetsTalk />
    </>
  );
};

export default PortfolioDetails;
