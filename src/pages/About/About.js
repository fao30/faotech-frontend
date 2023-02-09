import { React } from "react";
import { Helmet } from "react-helmet";
import CompanyProfile from "./components/CompanyProfile";
import HeaderAbout from "./components/HeaderAbout";
import StartHere from "./components/StartHere";

const About = ({ title }) => {
  return (
    <div>
      <Helmet>
        <title>{title}</title>
      </Helmet>
      {/* BACKGROUND */}
      {/* <div className="about-bg1 "></div>
      <div className="about-bg2"></div> */}
      <div className="from-white via-white to-blue-100 bg-gradient-to-br">
        <HeaderAbout />
      </div>
      <div className="from-white via-white to-blue-100 bg-gradient-to-tr">
        <CompanyProfile />
        <StartHere />
      </div>
    </div>
  );
};

export default About;
