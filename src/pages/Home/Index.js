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
      <Header />
      <HeroContent />
      <OurWorkSector />
      <DigitalProduct /> <TechStack />
    </div>
  );
};

export default Index;
