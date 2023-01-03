import React from "react";
import { Icon } from "@iconify/react";
import CardMini from "./CardMini";
// import CardMini from "./Card";

const hero = () => {
  return (
    <div class="from-white to-blue-200 row-start text-primary-content -mt-[5rem] grid place-items-center items-end bg-gradient-to-r pt-20">
      <div class="my-20 space-x-4 ">
        <div class=" flex lg:justify-around justify-start flex-wrap items-center grid-start">
          {/* <div class="my-10 lg:my-20 z-10"> */}
          <div class="my-20">
            <div class=" flex lg:justify-around justify-center flex-wrap items-center">
              <div class="mx-20 w-full lg:w-96">
                <h1 class="text-xl my-2 text-indigo-500 font-bold">
                  For Your Business Future
                </h1>
                <h1 class="text-4xl font-bold text-black">
                  We are building the best for your Digital Product as
                  comfortable as you wish!{" "}
                </h1>
                <h1 class="text-l my-6 text-gray-500">
                  Everything's in our service like you need.
                </h1>
                <div class="flex justify-start"></div>
              </div>
            </div>
          </div>
        </div>

        {/* <== Card ==> */}
        <div class=" grid grid-rows-3 lg:justify-end justify-around flex-wrap items-center">
          <div className="flex flex-wrap justify-end items-center grid-rows-1">
            <CardMini
              cardIconProps={
                <Icon
                  icon="fluent-mdl2:connect-virtual-machine"
                  color="#4C6BDC"
                  width="62px"
                  height="67px"
                />
              }
              cardTitleProps={
                <h1 class="text-sm font-bold text-black justify-end">
                  Automation
                </h1>
              }
              // cardDescProps={
              //   <h2 class="text-sm my-6 text-gray-500">
              //     Bring business operation productivity and efficiency by
              //     implementing an automation engine.
              //   </h2>
              // }
            />
          </div>
          <div className="flex flex-wrap  items-center grid-rows-2	">
            <CardMini
              cardIconProps={
                <Icon
                  icon="mdi:shield-bug"
                  color="#4C6BDC"
                  width="56.25px"
                  height="68.75px"
                />
              }
              cardTitleProps={
                <h1 class="text-sm font-bold text-black">Bug Free Warranty</h1>
              }
              // cardDescProps={
              //   <h2 class="text-l my-6 text-gray-500">
              //     Every project includes free bug fixing up to 3 months after the
              //     handover time.
              //   </h2>
              // }
            />
          </div>
          <div className="flex flex-wrap  items-center grid-rows-3">
            <CardMini
              cardIconProps={
                <Icon
                  icon="ic:round-remove-red-eye"
                  color="#4C6BDC"
                  width="56.25px"
                  height="68.75px"
                />
              }
              cardTitleProps={
                <h1 class="text-sm font-bold text-black">Visibility</h1>
              }
              // cardDescProps={
              //   <h2 class="text-l my-6 text-gray-500">
              //     Help enterprises to improve business operation through
              //     digitalization by increasing visibility.
              //   </h2>
              // }
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default hero;
