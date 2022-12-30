import React from "react";
import CardMini from "./CardMini";

const Benefits = () => {
  return (
    <div class="from-accent to-base-200 text-primary-content grid place-items-center items-end bg-gradient-to-b pb-20">
      <div>
        <div class=" text-center">
          <div>
            <div class="flex justify-center items-center">
              <img
                class="mt-12 max-w-l sm:max-w-xl lg:max-w-3xl rounded-lg shadow-2xl"
                src={require("./photos/screen2.png")}
              />
            </div>
          </div>
          <div class="flex flex-wrap justify-center items-center gap-4 mt-16">
            <CardMini
              cardTitleProps={"Attractive Interface"}
              cardIconProps={require("./photos/screensupport1.png")}
            ></CardMini>
            <CardMini
              cardTitleProps={"Express Development"}
              cardIconProps={require("./photos/screensupport2.png")}
            ></CardMini>
            <CardMini
              cardTitleProps={"Smart Budget Allocations"}
              cardIconProps={require("./photos/screensupport3.png")}
            ></CardMini>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Benefits;
