import React from "react";
import DigitalProduct from "./components/DigitalProduct";
import Header from "./components/Header";
import HeroContent from "./components/HeroContent";
import OurWorkSector from "./components/OurWorkSector";
import TechStack from "./components/TechStack";
import "../../custom.css";

const Index = () => {
  return (
    <div>
      {/* BACKGROUND */}
      <div className="header-bg1"></div>
      <div className="header-bg2"></div>
      <div className="header-bg3"></div>
      <div className="from-white via-white to-blue-100 max-lg:bg-gradient-to-br">
        <Header />
        <HeroContent />
      </div>
      <div className="from-white via-white to-blue-100 max-lg:bg-gradient-to-tr">
        <OurWorkSector />
      </div>
      <div className="from-white via-white to-blue-100 max-lg:bg-gradient-to-bl">
        <DigitalProduct /> <TechStack />{" "}
      </div>
    </div>
  );
};

export default Index;
