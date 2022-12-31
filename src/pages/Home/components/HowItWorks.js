import React from "react";
import Card from "./Card";

const HowItWorks = () => {
  return (
    <div class="from-secondary to-accent text-primary-content  grid place-items-center items-end bg-gradient-to-b pt-12">
      <div class=" w-11/12 md:w-4/5 lg:w-6/12 px-4">
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
              cardIconProps={
                "https://cdn-icons-png.flaticon.com/512/3585/3585991.png"
              }
            />
            <Card
              cardDescProps={"Activity description"}
              cardTitleProps={"Scrutinize"}
              cardIconProps={
                "https://cdn-icons-png.flaticon.com/512/3212/3212050.png"
              }
            />
            <Card
              cardDescProps={"Activity description"}
              cardTitleProps={"UI/UX"}
              cardIconProps={
                "https://cdn-icons-png.flaticon.com/512/5202/5202983.png"
              }
            />
            <Card
              cardDescProps={"Activity description"}
              cardTitleProps={"Back End"}
              cardIconProps={
                "https://cdn-icons-png.flaticon.com/512/2166/2166796.png"
              }
            />
            <Card
              cardDescProps={"Activity description"}
              cardTitleProps={"Front End"}
              cardIconProps={
                "https://cdn-icons-png.flaticon.com/512/752/752420.png"
              }
            />
            <Card
              cardDescProps={"Activity description"}
              cardTitleProps={"Maintenance"}
              cardIconProps={
                "https://cdn-icons-png.flaticon.com/512/2942/2942690.png"
              }
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
