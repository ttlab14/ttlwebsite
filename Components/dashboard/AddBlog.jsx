import React, { useState } from "react";

const AddBlog = ({ blogs, setBlogs }) => {
  const [images, setImages] = useState([]);
  const [subFields, setSubFields] = useState([
    { subtitle: "", subindex: "", imageAlt: "" },
  ]);
  const [blog, setBlog] = useState("");
  const [metaTitle, setMetaTitle] = useState("");
  const [metaDesc, setMetaDesc] = useState("");
  const [mainImageAlt, setMainImageAlt] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState("");

  const handleAddSubField = () => {
    setSubFields([...subFields, { subtitle: "", subindex: "", imageAlt: "" }]);
  };

  const handleDeleteSubField = (index) => {
    setSubFields(subFields.filter((item, ind) => ind !== index));
  };

  const handleSubFieldChange = (e, index, field) => {
    const newSubFields = [...subFields];
    newSubFields[index][field] = e.target.value;
    setSubFields(newSubFields);
  };

  const handleImageUpload = (e, index) => {
    const newImages = [...images];
    newImages[index] = e.target.files[0];
    setImages(newImages);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData();
    formData.append("blogTitle", blog);
    formData.append("metaTitle", metaTitle);
    formData.append("metaDesc", metaDesc);
    formData.append("mainImageAlt", mainImageAlt);

    subFields.forEach((detail, index) => {
      formData.append(`detail[${index}][imageAlt]`, detail.imageAlt);
      formData.append(`detail[${index}][subTitle]`, detail.subtitle);
      formData.append(`detail[${index}][subText]`, detail.subindex);
    });

    images.forEach((detail, index) => {
      formData.append(`pictures`, detail);
    });

    fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/blog`, {
      method: "POST",
      body: formData,
    })
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        setBlogs([...blogs, json.blog]);
        setLoading(false);
        if (json.success) {
          setMessage("Blog created successfully");
          setBlog("");
          setMetaTitle("");
          setMetaDesc("");
          setMainImageAlt("");
          setImages([]);
          setSubFields([]);
        } else {
          setMessage(json.message);
        }
      })
      .catch(() => {
        setLoading(false);
      });
  };

  return (
    <div className="mx-auto min-h-[calc(100vh-105px)]">
      <h1 className="text-white text-xl md:text-2xl text-center mb-8">
        Create Blog
      </h1>
      <p className="text-white text-center text-base mb-4">{message}</p>
      <form
        onSubmit={handleSubmit}
        className="flex text-white flex-col items-center justify-center"
      >
        <div className="md:flex justify-between mb-4 w-full">
          <div className="flex flex-col w-full md:w-[48%]">
            <label className="mb-1" htmlFor="blog">
              Blog Title
            </label>
            <input
              required
              type="text"
              className="w-full text-base md:text-lg mb-2 md:mb-0 md:mr-8 text-white bg-transparent border border-dark-grey rounded-lg py-1 px-3"
              value={blog}
              onChange={(e) => setBlog(e.target.value)}
              id="blog"
            />
          </div>
          <div className="flex flex-col w-full md:w-[48%]">
            <p>Thumbnail Image</p>
            <input
              required
              type="file"
              className="w-full text-base md:text-lg mb-2 md:mb-0 md:mr-8 text-white bg-transparent border border-dark-grey rounded-lg py-1 px-3"
              onChange={(e) => handleImageUpload(e, 0)}
            />
          </div>
        </div>
        <div className="md:flex justify-between mb-4 w-full">
          <div className="flex flex-col w-full md:w-[48%]">
            <label className="mb-1" htmlFor="metaTitle">
              Meta Title
            </label>
            <input
              required
              className="w-full text-base md:text-lg mb-2 md:mb-0 md:mr-8 text-white bg-transparent border border-dark-grey rounded-lg py-1 px-3"
              type="text"
              value={metaTitle}
              onChange={(e) => setMetaTitle(e.target.value)}
              id="metaTitle"
            />
          </div>
          <div className="flex flex-col w-full md:w-[48%]">
            <label className="mb-1" htmlFor="alt">
              Alt Text
            </label>
            <input
              required
              type="text"
              className="w-full text-base md:text-lg mb-2 md:mb-0 md:mr-8 text-white bg-transparent border border-dark-grey rounded-lg py-1 px-3"
              value={mainImageAlt}
              onChange={(e) => setMainImageAlt(e.target.value)}
              id="alt"
            />
          </div>
        </div>
        <div className="md:flex flex-col mb-4 w-full">
          <label className="mb-1" htmlFor="metDesc">
            Meta Description
          </label>
          <textarea
            required
            className="resize-none w-full text-base md:text-lg mb-2 md:mb-0 md:mr-8 text-white bg-transparent border border-dark-grey rounded-lg py-1 px-3"
            rows={3}
            value={metaDesc}
            onChange={(e) => setMetaDesc(e.target.value)}
            id="metDesc"
          />
        </div>
        <div className="w-full">
          {subFields.map((subField, index) => (
            <div key={index} className="my-6 border border-white p-4">
              <div className="flex justify-between items-center">
                <h1 className="mb-4 text-2xl">Section {index + 1}</h1>
                <button
                  onClick={() => {
                    handleDeleteSubField(index);
                  }}
                  className="text-gold text-base md:text-lg border border-white rounded-3xl py-0.5 px-4"
                >
                  Delete Section
                </button>
              </div>
              <div className="md:flex justify-between mb-4 w-full">
                <div className="flex flex-col w-full md:w-[48%]">
                  <label className="mb-1" htmlFor={`subtitle${index}`}>
                    Sub Title
                  </label>
                  <input
                    required
                    className="w-full text-base md:text-lg mb-2 md:mb-0 md:mr-8 text-white bg-transparent border border-dark-grey rounded-lg py-1 px-3"
                    type="text"
                    id={`subtitle${index}`}
                    value={subField.subtitle}
                    onChange={(e) => handleSubFieldChange(e, index, "subtitle")}
                  />
                </div>
                <div className="flex flex-col w-full md:w-[48%]">
                  <p>Section Image</p>
                  <input
                    required
                    type="file"
                    className="w-full text-base md:text-lg mb-2 md:mb-0 md:mr-8 text-white bg-transparent border border-dark-grey rounded-lg py-1 px-3"
                    onChange={(e) => handleImageUpload(e, index + 1)}
                  />
                </div>
              </div>
              <div className="md:flex flex-col mb-4 w-full">
                <label className="mb-1" htmlFor={`subtitle${index}`}>
                  Alt Text
                </label>
                <input
                  required
                  type="text"
                  className="w-full text-base md:text-lg mb-2 md:mb-0 md:mr-8 text-white bg-transparent border border-dark-grey rounded-lg py-1 px-3"
                  id={`imageAlt${index}`}
                  value={subField.imageAlt}
                  onChange={(e) => handleSubFieldChange(e, index, "imageAlt")}
                />
              </div>
              <div className="md:flex flex-col w-full">
                <label className="mb-1" htmlFor={`subindex${index}`}>
                  Sub Text
                </label>
                <textarea
                  required
                  className=" resize-none w-full text-base md:text-lg mb-2 md:mb-0 md:mr-8 text-white bg-transparent border border-dark-grey rounded-lg py-1 px-3"
                  id={`subindex${index}`}
                  rows={4}
                  value={subField.subindex}
                  onChange={(e) => handleSubFieldChange(e, index, "subindex")}
                />
              </div>
            </div>
          ))}
        </div>

        <div className="w-full flex justify-end">
          <button
            className="text-gold text-base md:text-lg border border-white rounded-3xl py-1 px-6"
            type="button"
            onClick={handleAddSubField}
          >
            Add Another Section
          </button>
        </div>
        <button
          type="submit"
          disabled={loading}
          className="text-gold mt-4 mb-8 text-base md:text-lg border-2 border-white rounded-3xl py-2 px-16"
        >
          {loading ? "Submitting..." : "Submit"}
        </button>
      </form>
    </div>
  );
};

export default AddBlog;
