import React from "react";
import Hero from "./Components/Hero";
import SidebarDetailWrapper from "./Components/SidebarDetailWrapper";

const BlogDetail = ({ Blog }) => {
  return (
    <>
      <Hero Blog={Blog}/>
      <SidebarDetailWrapper Blog={Blog} />
    </>
  );
};

export default BlogDetail;
