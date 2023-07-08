import React from "react";

const LetsTalk = () => {
  return (
    <div className="w-11/12  md:w-3/4 mx-auto block lg:flex justify-between py-28">
      <div className="lg:w-2/5">
        <p className="text-gold text-base uppercase">Contact Us</p>
        <h1 className="text-white text-2xl md:text-3xl mt-2">Let’s Talk</h1>
      </div>
      <div className="lg:w-1/2 grid grid-cols-1 md:grid-cols-2 gap-12 text-white mt-8">
        <div>
          <h1 className="text-xl mb-3 ">Office (Canada)</h1>
          <div className="flex items-start">
            <img
              className="mr-2"
              src="https://toggletechlab.s3.us-east-2.amazonaws.com/Icons/location.svg"
              alt=""
            />
            <p className="text-grey text-base md:text-lg">
              810 Quayside Dr #205, New Westminster, BC V3M 6B9
            </p>
          </div>
        </div>

        <div>
          <h1 className="text-xl mb-3 ">India</h1>
          <div className="flex items-start">
            <img
              className="mr-2"
              src="https://toggletechlab.s3.us-east-2.amazonaws.com/Icons/location.svg"
              alt=""
            />
            <p className="text-grey text-base md:text-lg">
              52 Johal Market, Zira, Punjab 142047
            </p>
          </div>
        </div>
        <div>
          <h1 className="text-xl mb-3 ">Qatar </h1>
          <div className="flex items-start">
            <img
              className="mr-2"
              src="https://toggletechlab.s3.us-east-2.amazonaws.com/Icons/location.svg"
              alt=""
            />
            <p className="text-grey text-base md:text-lg">
              Al Mana Business Centre 02, Doha, Qatar
            </p>
          </div>
        </div>
        <div>
          <h1 className="text-xl mb-3 ">Social Media</h1>
          <div className="flex">
            <div>
              <div className="rounded-full border border-dark-grey mr-3 w-14 h-14 flex items-center justify-center">
                <a
                  href="https://twitter.com/toggletechlab"
                  rel="noreferrer"
                  target="_blank"
                >
                  <img
                    src="https://toggletechlab.s3.us-east-2.amazonaws.com/Icons/twitter.svg"
                    alt=""
                  />
                </a>
              </div>
            </div>
            <div>
              <div className="rounded-full border border-dark-grey mr-3 w-14 h-14 flex items-center justify-center">
                <a
                  href="https://wa.me/+16044045571"
                  rel="noreferrer"
                  target="_blank"
                >
                  <img
                    src="https://toggletechlab.s3.us-east-2.amazonaws.com/Icons/whatsapp.svg"
                    alt=""
                  />
                </a>
              </div>
            </div>
            <div>
              <div className="rounded-full border border-dark-grey mr-3 w-14 h-14 flex items-center justify-center">
                <a
                  href="https://www.linkedin.com/company/toggle-tech-lab"
                  rel="noreferrer"
                  target="_blank"
                >
                  <img
                    src="https://toggletechlab.s3.us-east-2.amazonaws.com/Icons/linkedIn.svg"
                    alt=""
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="md:flex justify-between md:mb-5">
          <h4 className="text-white text-xl md:text-xl mb-8">
            talk@toggletechlab.com
          </h4>
        </div>
      </div>
    </div>
  );
};

export default LetsTalk;
