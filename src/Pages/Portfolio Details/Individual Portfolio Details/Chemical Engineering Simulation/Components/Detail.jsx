import React from "react";

const Detail = () => {
  return (
    <div>
      <div className="mb-16">
        <h1 className="text-white text-xl md:text-2xl mb-8">
        Chemical Engineering Simulation
          </h1>
        <div  className="w-full sm:h-72 lg:h-96  2xl:h-100  3xl:h-110">
        <img
          className="w-full h-full object-contain"
          src="https://toggletechlab.s3.us-east-2.amazonaws.com/ChemicalEngineeringSimulation/cover_chemengg.PNG"
          alt=""
        />
        </div>
        <p className="text-grey text-base md:text-lg mt-6">
        This product is a 3D lab built for Undergraduate chemical engineering students during Covid to provide 
        access and engage learners in a 3D lab. These simulations are:
          <ol>
            <li>1. Heat Exchange (HEX) Lab</li>
            <li>Thermal Chamber (CR) Lab</li>
            <li>Friction loss (PF) Lab</li>
            <li>Pumps & Compressors (PC) Lab</li>
          </ol>
        </p>
        <p className="text-grey text-base md:text-lg mt-6">
        The project runs on PCs which means it is downloaded and then the .exe file executes.  A user performs 
        the experiments with the help of their keyboard and mouse. 
        </p>
        <p className="text-grey text-base md:text-lg mt-6">
        Web-based 3D learning can be a highly effective way to engage learners and facilitate the acquisition of complex knowledge and skills. Unlike traditional learning methods, which often rely on static 2D images and text, web-based 3D learning can create dynamic and
         interactive learning experiences that simulate real-world situations.
        </p>
        <p className="text-grey text-base md:text-lg mt-6">
        One of the key advantages of web-based 3D learning is that it allows learners to visualize and interact with complex concepts and structures in three dimensions. This can improve understanding and retention of information, particularly in subjects such as science, technology, engineering, and mathematics (STEM), where visualizing 3D structures is often crucial to understanding key concepts.
          </p>
          <p className="text-grey text-base md:text-lg mt-6">
          Web-based 3D learning can also provide learners with opportunities to experiment and explore different scenarios and outcomes. This can enhance critical thinking and problem-solving skills, as learners can test different hypotheses and see the effects of their decisions in a safe and controlled environment.
          </p>
          <p className="text-grey text-base md:text-lg mt-6">
          Moreover, web-based 3D learning can be accessed from anywhere with an internet connection, making it a convenient and flexible way to learn. This can be particularly useful for learners who have limited access to traditional learning resources, such as those in remote or underserved areas.
          </p>
          <p className="text-grey text-base md:text-lg mt-6">
          In conclusion, web-based 3D learning can be a highly effective tool for engaging learners and facilitating the acquisition of complex knowledge and skills. Its ability to create dynamic and interactive learning experiences, improve understanding and retention of information, enhance critical thinking and problem-solving skills, and provide flexibility and accessibility make it an increasingly popular approach to learning in a variety of fields.
          </p>
          <p className="text-grey text-base md:text-lg mt-6">
          
          </p>
      </div>
      <div className="mb-16">
        <h1 className="text-white text-xl md:text-2xl mb-8">
          Built for the Web using Unity Engine
        </h1>
        <h1 className="text-white text-xl md:text-2xl mb-8">Results</h1>
      </div>
      <div className="flex sm:flex-row flex-col gap-5 items-center my-5">
        <video 
          controls
          poster="https://toggletechlab.s3.us-east-2.amazonaws.com/ChemicalEngineeringSimulation/chemical_engg_game-thumbnail.PNG"
          className="cursor-pointer"
        >
          <source 
            src="https://toggletechlab.s3.us-east-2.amazonaws.com/ChemicalEngineeringSimulation/VirtualLab.mp4" 
            type="video/mp4" 
          />
        </video>
      </div>     
      </div>
  
  );
};

export default Detail;
