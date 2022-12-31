import React from "react";
import Card from "./Card";

const HowItWorks = () => {
  return (
    <div class="from-secondary to-accent text-primary-content  grid place-items-center items-end bg-gradient-to-b">
      <div class=" w-11/12 md:w-4/5 lg:w-6/12 px-4 mt-14">
        <h1 class="text-2xl sm:text-4xl lg:text-4xl font-bold mb-6 text-center ">
          How it works?
        </h1>
        <h1 class="text-3xl sm:text-5xl lg:text-5xl font-bold text-center">
          All-in-one solution for efficient applications (UI/UX, Full Stack)
        </h1>
        <h1 class="mt-6 text-xl sm:text-4xl lg:text-4xl font-bold mb-6 text-center ">
          A one-stop shop that delivers your application across all platforms
        </h1>
      </div>
      <div class="hero">
        <div class="hero-content text-center text-base-content">
          <div class="flex justify-center flex-wrap items-center">
            <Card
              cardDescProps={"Activity description"}
              cardTitleProps={"Planning"}
              cardIconProps={require("./icons/planning.png")}
            />
            <Card
              cardDescProps={"Activity description"}
              cardTitleProps={"Scrutinize"}
              cardIconProps={require("./icons/planning.png")}
            />
            <Card
              cardDescProps={"Activity description"}
              cardTitleProps={"UI/UX"}
              cardIconProps={require("./icons/ui.png")}
            />
            <Card
              cardDescProps={"Activity description"}
              cardTitleProps={"Back End"}
              cardIconProps={require("./icons/backend.png")}
            />
            <Card
              cardDescProps={"Activity description"}
              cardTitleProps={"Front End"}
              cardIconProps={require("./icons/frontend.png")}
            />
            <Card
              cardDescProps={"Activity description"}
              cardTitleProps={"Maintenance"}
              cardIconProps={require("./icons/maintenance.png")}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
