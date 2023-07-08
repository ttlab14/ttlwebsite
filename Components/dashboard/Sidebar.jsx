import React from "react";
import Link from "next/link";

const Sidebar = ({ setToken, setTab }) => {
  const handleLogout = () => {
    sessionStorage.removeItem("secret-token-7k@zR");
    setToken("");
  };
  return (
    <aside
      id="sidebar-multi-level-sidebar"
      className="fixed top-0 left-0 z-40 bg-black bg-opacity-40 w-64 h-screen transition-transform -translate-x-full lg:translate-x-0"
      aria-label="Sidebar"
    >
      <div className="h-full px-3 py-4 overflow-y-auto ">
        <Link href="/">
          <img
            className="w-[160px]"
            src="https://toggletechlab.s3.us-east-2.amazonaws.com/logo/Toggle.png"
            alt="logo"
          />
        </Link>
        <ul className="space-y-2 font-medium mt-6">
          <li
            onClick={() => {
              setTab("blogs");
            }}
            className="cursor-pointer"
          >
            <span className="flex items-center p-2 text-white rounded-lg  hover:bg-gray-600 ">
              <svg
                aria-hidden="true"
                className="flex-shrink-0 w-6 h-6 text-white transition duration-75  group-hover:text-white "
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"></path>
              </svg>
              <span className="flex-1 ml-3 whitespace-nowrap">Blogs</span>
            </span>
          </li>
          <li
            onClick={() => {
              setTab("add blog");
            }}
            className="cursor-pointer"
          >
            <span className="flex items-center p-2 text-white rounded-lg  hover:bg-gray-600 ">
              <svg
                aria-hidden="true"
                className="flex-shrink-0 w-6 h-6 text-white transition duration-75  group-hover:text-white "
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M8.707 7.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l2-2a1 1 0 00-1.414-1.414L11 7.586V3a1 1 0 10-2 0v4.586l-.293-.293z"></path>
                <path d="M3 5a2 2 0 012-2h1a1 1 0 010 2H5v7h2l1 2h4l1-2h2V5h-1a1 1 0 110-2h1a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2V5z"></path>
              </svg>
              <span className="flex-1 ml-3 whitespace-nowrap">Add Blog</span>
            </span>
          </li>
          <li
            onClick={() => {
              setTab("add admin");
            }}
            className="cursor-pointer"
          >
            <span className="flex items-center p-2 text-white rounded-lg  hover:bg-gray-600 ">
              <svg
                aria-hidden="true"
                className="flex-shrink-0 w-6 h-6 text-white transition duration-75  group-hover:text-white "
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                  clip-rule="evenodd"
                ></path>
              </svg>
              <span className="flex-1 ml-3 whitespace-nowrap">Add Admin</span>
            </span>
          </li>

          <li onClick={handleLogout} className="cursor-pointer">
            <span className="flex items-center p-2 text-white rounded-lg  hover:bg-gray-600 ">
              <svg
                aria-hidden="true"
                className="flex-shrink-0 w-6 h-6 text-white transition duration-75  group-hover:text-white "
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M3 3a1 1 0 00-1 1v12a1 1 0 102 0V4a1 1 0 00-1-1zm10.293 9.293a1 1 0 001.414 1.414l3-3a1 1 0 000-1.414l-3-3a1 1 0 10-1.414 1.414L14.586 9H7a1 1 0 100 2h7.586l-1.293 1.293z"
                  clip-rule="evenodd"
                ></path>
              </svg>
              <span className="flex-1 ml-3 whitespace-nowrap">Logout</span>
            </span>
          </li>
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;
