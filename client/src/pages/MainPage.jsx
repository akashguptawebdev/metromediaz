import React from "react";
import Hero from "../components/Hero/Hero";
import Service from "../components/Service/Service";
import About from "../components/About/About";
import Contact from "../components/contactUs/Contact";

const MainPage = () => {
  return (
    <div className="">
      <Hero />
      <Service />
      <About />
      <Contact />
    </div>
  );
};

export default MainPage;
