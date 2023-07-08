import React from "react";
import Link from "next/link";

const ProjectsList = ({ sorted }) => {
  return (
    <div
      className="w-11/12 md:w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 
      gap-8 mt-8 mb-12 max-w-screen-xxl mx-auto"
    >
      {sorted &&
        sorted.map((item, index) => (
          <Link
            key={index}
            href={
              item.name === "portfolio"
                ? `/portfolio?type=${item.type.replace(/ /g, "_")}`
                : `/portfolio-details/${item.name.replace(/ /g, "_")}`
            }
          >
            <div className="mb-4 cursor-pointer">
              <div className="relative">
                <img
                  className="object-fill
                xxl:h-74
                xl:h-74  
                lg:h-64  
                md:w-full md:h-80
                w-full h-full"
                  src={item.img}
                  alt=""
                />
                {/* <img 
                className='w-full h-80 
                lg:w-80 lg:h-80 
                xxl:w-96 xxl:h-96 
                2xl:w-100 2xl:h-100 
                3xl:w-110 3xl:h-110 
                object-fill' 
                src={item.img} 
                alt="" 
              /> */}
                <div className="absolute bottom-3 right-3 p-3 bg-white rounded-lg">
                  <img
                    className="w-10 h-11 "
                    src={`/icons/${item.icon}.svg`}
                    alt=""
                  />
                </div>
              </div>
              {item.name !== "portfolio" && (
                <p className="text-white text-lg md:text-xl mt-4">
                  {item.name}
                </p>
              )}
              <p className="text-white text-lg md:text-xl">{item.type}</p>
            </div>
          </Link>
        ))}
    </div>
  );
};

export default ProjectsList;
