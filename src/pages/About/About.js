import { React } from "react";
import CompanyProfile from "./components/CompanyProfile";
import HeaderAbout from "./components/HeaderAbout";
import StartHere from "./components/StartHere";

const About = () => {
  return (
    <div>
      {/* BACKGROUND */}
      <div class="about-bg1 "></div>
      <div class="about-bg2"></div>
      <HeaderAbout />
      <CompanyProfile />
      <StartHere />
    </div>
  );
};

export default About;
