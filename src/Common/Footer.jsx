import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="w-11/12  md:w-3/4 mx-auto lg:flex justify-between text-grey text-sm py-8 border-t border-dark-grey">
      <div className="flex flex-wrap md:w-3/4 xl:w-auto">
        <Link to='/about' className="mr-4">About Us</Link>
        <Link to='/contact' className="mr-4">Contact</Link>
        <Link to='/service' className="mr-4">Services</Link>
        {/* <Link to='/' className="mr-4">Privacy Policy</Link>
        <Link to='/' className="mr-4">Terms & Conditions</Link> */}
        <div className="rounded-full border border-dark-grey mr-3 w-10 h-10 flex items-center justify-center">
          <a href="https://twitter.com/toggletechlab" rel="noreferrer" target="_blank" >
 <img className="w-2/2" src="/icons/twitter.svg" alt="" />
      </a> 
          </div>
       {/* 
          <div className="rounded-full border border-dark-grey mr-3 w-12 h-12 flex items-center justify-center">
            <img className="w-1/2" src="/icons/insta.svg" alt="" />
          </div>
           */} 
          <div className="rounded-full border border-dark-grey mr-3 w-10 h-10 flex items-center justify-center">
          <a href="https://www.linkedin.com/company/toggle-tech-lab" rel="noreferrer" target="_blank" >
            <img className="w-2/2" src="/icons/linkedIn.svg" alt="" />
            </a>
          </div>
          <div className="rounded-full border border-dark-grey mr-3 w-10 h-10 flex items-center justify-center">
          <a href="https://wa.me/+16044045571"
          rel="noreferrer" 
          target="_blank" >
            <img className="w-2/2" src="/icons/whatsapp.svg" alt="" />
            </a>

          </div>
      </div>
      <div>
        <p className="mt-2 lg:mt-0">
          Copyright 2017-2023 Toggle Tech Lab Canada Ltd.
        </p>
        
      </div>
    </div>
  );
};

export default Footer;
