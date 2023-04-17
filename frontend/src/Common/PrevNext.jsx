import React from "react";

const PrevNext = () => {
  return (
    <div className="flex justify-between border-t border-dark-grey mt-8 py-16">
      <div>
        <p className="text-gold text-base uppercase">Prev</p>
        <h2 className="text-white text-xl">Augmented Reality</h2>
      </div>
      <div>
        <p className="text-gold text-right text-base uppercase">Next</p>
        <h2 className="text-white text-xl">Immersive Training</h2>
      </div>
    </div>
  );
};

export default PrevNext;
