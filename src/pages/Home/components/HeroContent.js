import React from "react";
import Card from "./Card";

const HeroContent = () => {
  return (
    <div class="from-white to-blue-200 text-primary-content -mt-[5rem] grid place-items-center items-end bg-gradient-to-r pt-20">
      <div class="my-20">
        {/* <div class=" flex lg:justify-around justify-center flex-wrap items-center"> */}
        <div class="w-full lg:w-1/2">
          <div class=" flex lg:justify-around justify-center flex-wrap items-center">
            {/* <div className="hero min-h-screen mx-20 w-full lg:w-96 line-left ">
            <div className="hero-content flex-col lg:flex-row-reverse"> */}
            <div class="mx-20 w-full lg:w-96">
              <h1 className="text-xl my-2 text-indigo-500 font-bold">
                For Your Business Future
              </h1>
              <h1 className="text-5xl font-bold text-black">
                {" "}
                We are building the best for your Digital Product as comfortable
                as you wish!
              </h1>
              <h1 class="text-l my-6 text-gray-500">
                Everything's in our service like you need.
              </h1>
              {/* <p className="py-6"></p> */}
              <div className="flex justyf-start">
                {/* <button className="btn btn-primary">Get Started</button> */}
              </div>
            </div>
          </div>
        </div>
        {/* card */}
        <div class="hero">
          //{" "}
          <div class="hero-content text-center text-base-content">
            <div class="flex justify-center flex-wrap items-center">
              <Card
                cardDescProps={"Activity description"}
                cardTitleProps={"Planning"}
                cardIconProps={require("./icons/planning.png")}
              />{" "}
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
              {/* <div class="mx-10 rounded-box w-full lg:w-2/5 transition-all transform hover:scale-110 hover:cursor-ew-resize">
          <div class="mx-10 rounded-box w-full lg:w-2/5 transition-all transform hover:scale-110 hover:cursor-ew-resize">
            <div className="card w-80 card-center rounded-box space-x-3 bg-primary text-primary-content">
              <div className="card-body">
                <h2 className="card-title">Automation</h2>
                <p>
                  Bring business operation productivity and efficiency by
                  implementing an automation engine.
                </p>
                <div className="card-actions justify-end"></div>
              </div>
            </div> */}
            </div>
          </div>
          {/* </div>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default HeroContent;
