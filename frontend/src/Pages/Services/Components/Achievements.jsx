import React from "react";

const Achievements = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 border-t border-b border-dark-grey py-20">
      <div>
        <h1 className="text-white text-2xl md:text-4xl">85%</h1>
        <p className="text-grey text-base md:text-lg mt-3">Increased Brand Awareness</p>
      </div>
      <div>
        <h1 className="text-white text-2xl md:text-4xl">87%</h1>
        <p className="text-grey text-base md:text-lg mt-3">
          Pre-seed funding acquired
        </p>
      </div>
      <div>
        <h1 className="text-white text-2xl md:text-4xl">100%</h1>
        <p className="text-grey text-base md:text-lg mt-3">Clients refer us </p>
      </div>
      <div>
        <h1 className="text-white text-2xl md:text-4xl">35%</h1>
        <p className="text-grey text-base md:text-lg mt-3">Decrease in traditonal prototyping costs</p>
      </div>
    </div>
  );
};

export default Achievements;
