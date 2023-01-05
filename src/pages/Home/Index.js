import { React, useEffect } from "react";
import ReachUs from "./components/components/ReachUs";
import DigitalProduct from "./components/DigitalProduct";
import Header from "./components/Header";
import HeroContent from "./components/HeroContent";
import OurWorkSector from "./components/OurWorkSector";
import TechStack from "./components/TechStack";
import "./components/custom.css";

const Index = () => {
  return (
    <div>
      <Header />
      <HeroContent /> <OurWorkSector />
      <ReachUs />
      <DigitalProduct /> <TechStack />
    </div>
  );
};

export default Index;
