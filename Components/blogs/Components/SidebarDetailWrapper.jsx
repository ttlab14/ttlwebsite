import React from "react";
import Sidebar from "./Sidebar";
// import PrevNext from "../../../Common/PrevNext";
import Detail from "./Detail";

const SidebarDetailWrapper = ({ Blog }) => {
  return (
    // <div className="w-11/12  md:w-3/4 mx-auto lg:flex justify-between mt-16">
    <div className="w-11/12  md:w-3/4 mx-auto lg:flex item-center justify-center mt-16">
      {/* <Sidebar /> */}
      <div className="lg:w-4/6">
        <Detail Blog={Blog} />
        {/* <PrevNext /> */}
      </div>
    </div>
  );
};

export default SidebarDetailWrapper;
