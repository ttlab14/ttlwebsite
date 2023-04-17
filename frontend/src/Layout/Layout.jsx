import React from "react";
import Navbar from "../Common/Navbar";
import Footer from "../Common/Footer";

const Layout = ({children}) => {
  return (
    <div className="bg-dark">
      <div className="">
        <Navbar />
        {children}
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
