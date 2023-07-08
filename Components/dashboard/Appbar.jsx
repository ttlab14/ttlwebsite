import React, { useEffect, useState } from "react";
import Link from "next/link";

const Appbar = ({ tab, setTab, setToken }) => {
  const [showOptions, setShowOptions] = useState(false);

  const handleLogout = () => {
    sessionStorage.removeItem("secret-token-7k@zR");
    setToken("");
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      if (showOptions && window) {
        document.body.style.overflow = "hidden";
      } else {
        document.body.style.overflow = "auto";
      }
    }
  }, [showOptions]);

  return (
    <>
      <div className="w-full bg-navbar-gredient fixed z-10  mx-auto ">
        <div className="hidden md:flex w-11/12 mx-auto justify-between items-center pt-3 pb-2 ">
          <Link href="/">
            <img
              className="w-[160px] cursor-pointer"
              src="https://toggletechlab.s3.us-east-2.amazonaws.com/logo/Toggle.png"
              alt="logo"
            />
          </Link>
          <div className="flex items-center text-base md:text-lg">
            <span
              className={
                tab === "blogs"
                  ? "mr-4 lg:mr-6 pb-2 text-white border-b border-white cursor-pointer"
                  : "mr-4 lg:mr-6 pb-2 text-grey cursor-pointer"
              }
              onClick={() => {
                setTab("blogs");
              }}
            >
              Blogs
            </span>

            <span
              className={
                tab === "add blog"
                  ? "mr-4 lg:mr-6 pb-2 text-white border-b border-white cursor-pointer"
                  : "mr-4 lg:mr-6 pb-2 text-grey cursor-pointer"
              }
              onClick={() => {
                setTab("add blog");
              }}
            >
              Add Blog
            </span>
            <span
              className={
                tab === "add admin"
                  ? "mr-4 lg:mr-6 pb-2 text-white border-b border-white cursor-pointer"
                  : "mr-4 lg:mr-6 pb-2 text-grey cursor-pointer"
              }
              onClick={() => {
                setTab("add admin");
              }}
            >
              Add Admin
            </span>
            <span
              className={
                tab === "logout"
                  ? "mr-4 lg:mr-6 pb-2 text-white border-b border-white cursor-pointer"
                  : "mr-4 lg:mr-6 pb-2 text-grey cursor-pointer"
              }
              onClick={handleLogout}
            >
              Logout
            </span>
          </div>
        </div>
      </div>
      <div className="w-full fixed bg-dark z-10  mx-auto">
        <div className="md:hidden  w-11/12 mx-auto">
          <div className="flex justify-between pt-4 pb-2">
            <Link href="/">
              <img className="w-36" src="/icons/Logo.svg" alt="" />
            </Link>
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
              <span
                className={tab === "blogs" ? "mb-4 text-white" : "mb-4 text-grey"}
                onClick={() => {
                  setShowOptions(!showOptions);
                    setTab("blogs");
                }}
              >
                Blogs
              </span>

              <span
                className={
                  tab === "add blog" ? "mb-4 text-white" : "mb-4 text-grey"
                }
                onClick={() => {
                  setShowOptions(!showOptions);
                  setTab("add blog");
                }}
              >
                Add Blog
              </span>

              <span
                className={
                  tab === "add admin" ? "mb-4 text-white" : "mb-4 text-grey"
                }
                onClick={() => {
                  setShowOptions(!showOptions);
                  setTab("add admin");
                }}
              >
                Add Admin
              </span>

              <span
                className={
                  tab === "logout" ? "mb-4 text-white" : "mb-4 text-grey"
                }
                onClick={() => {
                  setShowOptions(!showOptions);
                  handleLogout()
                }}
              >
                Logout
              </span>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Appbar;
