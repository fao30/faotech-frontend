import { React, useEffect } from "react";
import Introduction from "./components/Introduction";
import HowItWorks from "./components/HowItWorks";
import Benefits from "./components/Benefits";
import Test4 from "./components/Test4";
import { themeChange } from "theme-change";

const Index = () => {
  return (
    <div>
      <Introduction />
      <HowItWorks />
      <Benefits />
      <Test4 />
    </div>
  );
};

export default Index;
