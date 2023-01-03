import { React } from "react";
import ReachUs from "./components/components/ReachUs";
import Header from "./components/Header";
import HeroContent from "./components/HeroContent";
import OurWorkSector from "./components/OurWorkSector";
import TechStack from "./components/TechStack";

const Index = () => {
  return (
    <div>
      <Header />
      <HeroContent />
      <OurWorkSector />
      <ReachUs />
      <TechStack />
    </div>
  );
};

export default Index;
