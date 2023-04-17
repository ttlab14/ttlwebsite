import React from "react";
import Locations from "./Locations";
import Form from "./Form";

const LocationFormWrapper = () => {
  return (
    <div className="w-11/12  md:w-3/4 mx-auto lg:flex justify-between mt-20 border-b border-dark-grey pb-4 mb-16">
      <Locations />
      <Form />
    </div>
  );
};

export default LocationFormWrapper;
