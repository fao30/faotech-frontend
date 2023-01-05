import { React } from "react";
import CompanyProfile from "./components/CompanyProfile";
import HeaderAbout from "./components/HeaderAbout";
import StartHere from "./components/StartHere";

const About = () => {
  return (
    <div>
      {/* BACKGROUND */}
      <div class="flex blur-3xl absolute rounded-full rounded-r-2xl sm:w-[20rem] w-[10rem] h-[0rem] sm:h-[42rem] lg:w-[45rem] lg:h-[42rem] top-[28rem] lg:top-[8rem] right-0  bg-[#eaf0fa] -z-10 "></div>
      <div class="flex blur-3xl absolute rounded-full w-full lg:top-[60rem] lg:w-full lg:h-[w-96]  h-[40rem] top-[65rem] md:top-[75rem]   bg-[#eaf0fa] -z-10"></div>
      <HeaderAbout />
      <CompanyProfile />
      <StartHere />
    </div>
  );
};

export default About;
