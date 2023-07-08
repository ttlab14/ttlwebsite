import React, { useMemo } from "react";
import Link from "next/link";

const BlogList = ({ AllBlogs }) => {
  return (
    <div className="w-11/12  md:w-3/4 mx-auto">
      <div
        className="w-11/12 md:w-full grid grid-cols-1 md:grid-cols-2
  gap-8 mt-8 mb-12 max-w-screen-xxl mx-auto"
      >
        {AllBlogs.blog.map((item, index) => (
          <Link key={index} href={`/blog/${item._id}`}>
            <div className="mb-4 cursor-pointer">
              <div className="relative">
                <img
                  className="object-fill
    xxl:h-74
    xl:h-74  
    lg:h-64  
    md:w-full md:h-80
    w-full h-full"
                  src={item.blogMainImage.url}
                  alt={item.mainImageAlt}
                />
              </div>

              <p className="text-white text-lg md:text-md mt-4">
                {item.blogTitle}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default BlogList;
