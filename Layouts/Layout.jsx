import React from "react";
import Navbar from "../Common/Navbar";
import Footer from "../Common/Footer";
import { useRouter } from "next/router";

const Layout = ({ children }) => {
  const router = useRouter();

  return (
    <div className="bg-dark">
      <div className="">
        {!router.pathname.includes("/dashboard") && <Navbar />}
        {children}
        {!router.pathname.includes("/dashboard") && <Footer />}
      </div>
    </div>
  );
};

export default Layout;
