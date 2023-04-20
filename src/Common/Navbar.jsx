import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [showOptions, setShowOptions] = useState(false);

  useEffect(() => {
    const body = document.getElementById("body");

    if (showOptions) {
      body.style.overflow = "hidden";
    } else {
      body.style.overflow = "auto";
    }
  }, [showOptions]);

  return (
    <>
      <div className="w-full bg-navbar-gredient fixed z-10  mx-auto">
        <div className="hidden md:flex w-11/12 mx-auto justify-between items-center pt-3 pb-2 ">
          <NavLink to="/">
            <img className="w-4/5" src="https://toggletechlab.s3.us-east-2.amazonaws.com/Icons/Logo.svg" alt="" />
          </NavLink>
          <div className="flex items-center text-base md:text-lg">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "mr-4 lg:mr-6 pb-2 text-white border-b border-white"
                  : "mr-4 lg:mr-6 pb-2 text-grey"
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive
                  ? "mr-4 lg:mr-6 pb-2 text-white border-b border-white"
                  : "mr-4 lg:mr-6 pb-2 text-grey"
              }
            >
              About
            </NavLink>
            <NavLink
              to="/service"
              className={({ isActive }) =>
                isActive
                  ? "mr-4 lg:mr-6 pb-2 text-white border-b border-white"
                  : "mr-4 lg:mr-6 pb-2 text-grey"
              }
            >
              Services
            </NavLink>
            <NavLink
              to="/portfolio"
              className={({ isActive }) =>
                isActive
                  ? "mr-4 lg:mr-6 pb-2 text-white border-b border-white"
                  : "mr-4 lg:mr-6 pb-2 text-grey"
              }
            >
              Case Studies
            </NavLink>
            <NavLink
              to="/contact"
              className="mb-2 text-white border-2 border-gray-400 rounded-3xl py-1 px-6"
            >
              Contact
            </NavLink>
          </div>
        </div>
      </div>
      <div className="w-full fixed bg-dark z-10  mx-auto">
        <div className="md:hidden  w-11/12 mx-auto">
          <div className="flex justify-between pt-4 pb-2">
            <NavLink to="/">
              <img className="w-36" src="/icons/Logo.svg" alt="" />
            </NavLink>
            {!showOptions && (
              <img
                onClick={() => {
                  setShowOptions(!showOptions);
                }}
                className=""
                src="https://toggletechlab.s3.us-east-2.amazonaws.com/Icons/Navbar+Toggle.svg"
                alt=""
              />
            )}
            {showOptions && (
              <img
                onClick={() => {
                  setShowOptions(!showOptions);
                }}
                className=""
                src="https://toggletechlab.s3.us-east-2.amazonaws.com/Icons/Navbar+Close.svg"
                alt=""
              />
            )}
          </div>
          <div
            className={`${showOptions ? "h-screen" : "h-0 overflow-hidden"}`}
          >
            <ul className="inline-flex flex-col mt-6">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? "mb-4 text-white" : "mb-4 text-grey"
                }
                onClick={() => {
                  setShowOptions(!showOptions);
                }}
              >
                Home
              </NavLink>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  isActive ? "mb-4 text-white" : "mb-4 text-grey"
                }
                onClick={() => {
                  setShowOptions(!showOptions);
                }}
              >
                About
              </NavLink>
              <NavLink
                to="/service"
                className={({ isActive }) =>
                  isActive ? "mb-4 text-white" : "mb-4 text-grey"
                }
                onClick={() => {
                  setShowOptions(!showOptions);
                }}
              >
                Services
              </NavLink>
              <NavLink
                to="/portfolio"
                className={({ isActive }) =>
                  isActive ? "mb-4 text-white" : "mb-4 text-grey"
                }
                onClick={() => {
                  setShowOptions(!showOptions);
                }}
              >
                Case Studies
              </NavLink>
              <NavLink
                to="/contact"
                className="inline-block mt-4 text-white border-2 border-gray-400 rounded-3xl py-1 px-6"
                onClick={() => {
                  setShowOptions(!showOptions);
                }}
              >
                Contact
              </NavLink>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
