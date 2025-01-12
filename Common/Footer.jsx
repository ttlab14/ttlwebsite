import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="w-11/12  md:w-3/4 mx-auto lg:flex justify-between text-grey text-sm py-8 border-t border-dark-grey">
      <div className="flex flex-wrap md:w-3/4 xl:w-auto">
        <Link href="/about">
          <a className="mr-4">
          About Us
          </a>
        </Link>
        <Link href="/contact" >
        <a className="mr-4">
          Contact
          </a>
        </Link>
        <Link href="/services" >
        <a className="mr-4">
          Services
          </a>
        </Link>
        {/* <Link href='/' className="mr-4">Privacy Policy</Link>
        <Link href='/' className="mr-4">Terms & Conditions</Link> */}
        <div className="rounded-full border border-dark-grey mr-3 w-10 h-10 flex items-center justify-center">
          <a
            href="https://twitter.com/toggletechlab"
            rel="noreferrer"
            target="_blank"
          >
            <img className="w-2/2" src="/icons/twitter.svg" alt="" />
          </a>
        </div>
        {/* 
          <div className="rounded-full border border-dark-grey mr-3 w-12 h-12 flex items-center justify-center">
            <img className="w-1/2" src="/icons/insta.svg" alt="" />
          </div>
           */}
        <div className="rounded-full border border-dark-grey mr-3 w-10 h-10 flex items-center justify-center">
          <a
            href="https://www.linkedin.com/company/toggle-tech-lab"
            rel="noreferrer"
            target="_blank"
          >
            <img className="w-2/2" src="/icons/linkedIn.svg" alt="" />
          </a>
        </div>
        <div className="rounded-full border border-dark-grey mr-3 w-10 h-10 flex items-center justify-center">
          <a href="https://wa.me/+16044045571" rel="noreferrer" target="_blank">
            <img className="w-2/2" src="/icons/whatsapp.svg" alt="" />
          </a>
        </div>
      </div>
      <div>
        <p className="mt-2 lg:mt-0">
         // Copyright 2017-2023 Let's JavaScript Corp.
        </p>
      </div>
    </div>
  );
};

export default Footer;
