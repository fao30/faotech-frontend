import React from "react";
import DigitalProduct from "./components/DigitalProduct";
import Header from "./components/Header";
import HeroContent from "./components/HeroContent";
import OurWorkSector from "./components/OurWorkSector";
import TechStack from "./components/TechStack";

const Index = () => {
  return (
    <div>
      {/* BACKGROUND */}
      {/* <div class="flex absolute blur-3xl rounded-full rounded-br-2xl sm:w-[30rem] w-[10rem] h-[70rem] sm:h-[42rem] lg:w-[60rem] lg:h-[60rem] top-[24rem] lg:top-[8rem] right-0  bg-[#eaf0fa] -z-10 "></div>
      <div class="flex absolute blur-3xl rounded-bl-2xl rounded-tl-2xl rounded-full w-[50%] md:w-[15rem] md:top-[100rem] h-[60rem] top-[115rem] left-0  bg-[#e7f0f7] -z-10"></div>
      <div class="flex absolute blur-3xl rounded-full w-full md:top-[185rem] top-[225rem] h-[26rem] lg:h-[20rem] lg:top-[215rem]   bg-[#eaf0fa] -z-10"></div> */}
      <Header />
      <HeroContent />
      <OurWorkSector />
      <DigitalProduct /> <TechStack />
    </div>
  );
};

export default Index;
