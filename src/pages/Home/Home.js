import React from "react";
import { Helmet } from "react-helmet";
import DigitalProduct from "./components/DigitalProduct";
import Header from "./components/Header";
import HeroContent from "./components/HeroContent";
import OurWorkSector from "./components/OurWorkSector";
import TechStack from "./components/TechStack";

const Home = ({ title }) => {
  return (
    <div>
      <Helmet>
        <title>{title}</title>
      </Helmet>
      {/* BACKGROUND */}
      {/* <div className="header-bg1"></div>
      <div className="header-bg2"></div>
      <div className="header-bg3"></div> */}
      <div className="from-white via-white to-blue-100 bg-gradient-to-br">
        <Header />
        <HeroContent />
      </div>
      <div className="from-white via-white to-blue-100 bg-gradient-to-tr">
        <OurWorkSector />
      </div>
      <div className="from-white via-white to-[#e7f0f7] bg-gradient-to-bl">
        <DigitalProduct /> <TechStack />{" "}
      </div>
    </div>
  );
};

export default Home;
