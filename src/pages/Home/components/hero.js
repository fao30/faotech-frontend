import React from "react";
import { Icon } from "@iconify/react";
import Card from "./Card";

const hero = () => {
  return (
    <div class="from-white to-blue-200 text-primary-content -mt-[5rem] grid place-items-center items-end bg-gradient-to-r pt-20">
      <div class="my-20">
        <div class=" flex lg:justify-around justify-center flex-wrap items-center">
          <div class="mx-20 w-full lg:w-96">
            <h1 class="text-xl my-2 text-indigo-500 font-bold">
              For Your Business Future
            </h1>
            <h1 class="text-5xl font-bold text-black">
              We Help You Develop Through Digitalization
            </h1>
            <h1 class="text-l my-6 text-gray-500">
              We are building the best for your Digital Product as comfortable
              as you wish!
            </h1>
            <div class="flex justify-start"></div>
          </div>
          <div class="mx-10 rounded-box w-full lg:w-2/5 transition-all transform hover:scale-110 hover:cursor-ew-resize object-right-top ">
            <div class="card card-center w-full  rounded-box space-x-4">
              <div className="card w-30 bg-white 8px">
                <div className="card-body icon-start">
                  <h2 className="font-bold text-left md:text-left lg:text-left text-xl md:text-xl lg:text-xl text-black">
                    <Icon icon="ic:round-remove-red-eye" />
                    Automation
                  </h2>
                  <p className="text-sm text-gray-500">
                    Bring business operation productivity and efficiency by
                    implementing an automation engine.
                  </p>
                  <div className="card-actions justify-end"></div>
                </div>
              </div>
            </div>
          </div>
          <div class="mx-10 rounded-box w-full lg:w-2/5 transition-all transform hover:scale-110 hover:cursor-ew-resize object-right">
            <div class="card card-center w-full  rounded-box space-x-4 object-top">
              <div className="flex flex-col space-y-4"></div>
              <div className="card w-30 bg-white 8px">
                <div className="card-body icon-start">
                  <h2 className="font-bold text-left md:text-left lg:text-left text-xl md:text-xl lg:text-xl text-black">
                    <Icon className="w-10" icon="mdi:shield-bug" /> Bug Free
                    Warranty
                  </h2>
                  <p className="text-sm text-gray-500">
                    Every project includes free bug fixing up to 3 months after
                    the handover time.
                  </p>
                  <div className="card-actions justify-end"></div>
                </div>
              </div>
            </div>
            <div class="card card-center w-full  rounded-box space-x-4 object-right-bottom">
              <div className="card w-30 bg-white 8px">
                <div className="card-body icon-start">
                  <h2 className="font-bold text-left md:text-left lg:text-left text-xl md:text-xl lg:text-xl text-black">
                    <Icon icon="fluent-mdl2:connect-virtual-machine" />{" "}
                    Visibility
                  </h2>
                  <p className="text-sm text-gray-500">
                    Help enterprises to improve business operation through
                    digitalization by increasing visibility.
                  </p>
                  <div className="card-actions justify-end"></div>
                  {/* </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default hero;
