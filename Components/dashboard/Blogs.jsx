import React, { useState } from "react";

const Blogs = ({ blogs, setBlogs }) => {
  const [id, setId] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleDelete = (id) => {
    setLoading(true);
    fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/blog/delete/${id}`, {
      method: "DELETE",
    })
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        setLoading(false);
        if (json.messgae !== "Error") {
          setBlogs(blogs.filter((item) => item._id !== id));
          setMessage("Blog Deleted Successfully");
        } else {
          setMessage("Something went wrong, Please try again.");
        }
      })
      .catch(() => {
        setLoading(false);
      });
  };

  return (
    <div className="min-h-[calc(100vh-105px)]">
      <h1 className="text-white text-xl md:text-2xl text-center mb-8">Blogs</h1>
      <div className={"w-full"}>
        <div
          className="w-11/12 md:w-full grid grid-cols-1 md:grid-cols-2 
  gap-8 mt-8 mx-auto"
        >
          {blogs.map((item, index) => (
            <div className="mb-0 md:mb-8">
              <div className="relative">
                <img
                  className="object-fill
    xxl:h-74
    xl:h-74  
    lg:h-64  
    md:w-full md:h-80
    w-full h-full"
                  src={item.blogMainImage.url}
                  alt=""
                />
              </div>

              <p className="text-white text-lg md:text-md mt-4">
                {item.blogTitle}
              </p>
              <div className="flex justify-end">
                <button
                  className="bg-white py-2 px-4 rounded-full"
                  onClick={() => {
                    handleDelete(item._id);
                    setId(item._id);
                  }}
                >
                  {item._id === id && loading ? "Deleting" : "Delete"}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blogs;
