import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../Pages/Home/Home";
import About from "../Pages/About/About";
import Contact from "../Pages/Contact/Contact";
import Portfolio from "../Pages/Portfolio/Portfolio";
import PortfolioDetails from "../Pages/Portfolio Details/PortfolioDetails";
import Services from "../Pages/Services/Services";
import ServiceDetails from "../Pages/Service Details/ServiceDetails";
import Layout from "../Layout/Layout";
import ScrollToTop from "../Common/ScrollToTop";

const WebRoutes = () => {
  return (
    <BrowserRouter>
    <ScrollToTop/>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/portfolio-details/:id" element={<PortfolioDetails />} />
          <Route path="/service" element={<Services />} />
          <Route path="/service-details/:id" element={<ServiceDetails />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

export default WebRoutes;
