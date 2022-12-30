import React from "react";
import Card from "./Card";

const Test2 = () => {
  return (
    <div class="from-secondary to-accent text-primary-content  grid place-items-center items-end bg-gradient-to-b pt-12">
      <div class="w-full lg:w-3/5 px-4">
        <h1 class="text-2xl sm:text-4xl lg:text-4xl font-bold mb-6 text-center ">
          How it works
        </h1>
        <h1 class="text-4xl sm:text-5xl lg:text-5xl font-bold text-center">
          All-in-one solution for efficient applications (UI/UX, Full Stack)
        </h1>
        <h1 class="mt-6 text-2xl sm:text-4xl lg:text-4xl font-bold mb-6 text-center ">
          A one-stop shop that delivers your application across all platforms
        </h1>
      </div>
      <div class="hero">
        <div class="hero-content text-center text-base-content">
          <div class="flex justify-center flex-wrap items-center gap-4">
            <Card
              cardDescProps={"Activity description"}
              cardTitleProps={"Planning"}
              cardIconProps={
                "https://atg.fas.harvard.edu/sites/hwpi.harvard.edu/files/fas-acadtech/files/zoom-icon-white-on-blue_01.png?m=1609960507"
              }
            />
            <Card
              cardDescProps={"Activity description"}
              cardTitleProps={"Analyze"}
              cardIconProps={
                "http://store-images.s-microsoft.com/image/apps.56950.13959754522315136.c4ea2415-8e3c-42bf-8f77-e885eb7c11a1.1c754ca1-130c-4a98-afb0-c50aed118ab8"
              }
            />
            <Card
              cardDescProps={"Activity description"}
              cardTitleProps={"UI/UX"}
              cardIconProps={
                "https://camo.githubusercontent.com/a86a8278da4c5b5a43330e1ea28e6ba050007a837128b5dff5b35d5ff0f1248a/68747470733a2f2f63646e2d696d616765732d312e6d656469756d2e636f6d2f6d61782f313630302f312a365867664443566e3831415958363858766432492d674032782e706e67"
              }
            />
            <Card
              cardDescProps={"Activity description"}
              cardTitleProps={"Back-End"}
              cardIconProps={
                "https://cdn-icons-png.flaticon.com/512/3668/3668474.png"
              }
            />
            <Card
              cardDescProps={"Activity description"}
              cardTitleProps={"Front-End"}
              cardIconProps={
                "https://cdn-icons-png.flaticon.com/512/2721/2721264.png"
              }
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Test2;
