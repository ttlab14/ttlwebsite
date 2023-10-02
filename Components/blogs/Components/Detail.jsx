import React from "react";

const Detail = ({ Blog }) => {
  return (
    <div>
      {Blog.detail.map((item) => (
        <div className="mb-16" key={item._id}>
          <h1 className="text-white text-xl md:text-2xl mb-8 leading-[48px]">
            {item.subTitle}
          </h1>
          <div className="w-full sm:h-72 lg:h-96  2xl:h-100  3xl:h-110">
            <img
              className="w-full h-full object-contain"
              src={item.subImage.url}
              alt={item.imageAlt}
            />
          </div>
          <p className="text-grey text-base md:text-lg mt-6">{item.subText}</p>
        </div>
      ))}
    </div>
  );
};

export default Detail;
