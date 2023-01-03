import React from "react";
import { Icon } from "@iconify/react";
// import Card from "./Card";

const hero = () => {
  return (
    <div class="from-white to-blue-200 text-primary-content -mt-[5rem] grid place-items-center items-end bg-gradient-to-r pt-20">
      <div class="my-10 lg:my-20 z-10">
        <div class=" flex lg:justify-around justify-center flex-wrap items-center static">
          <div class="mx-20 w-full lg:w-96">
            <h1 class="text-xl my-2 text-indigo-500 font-bold">
              For Your Business Future
            </h1>
            <h1 class="text-4xl font-bold text-black">
              We are building the best for your Digital Product as comfortable
              as you wish!{" "}
            </h1>
            <h1 class="text-l my-6 text-gray-500">
              Everything's in our service like you need.
            </h1>
            {/* <div class="flex justify-start"></div> */}
          </div>
        </div>
      </div>

      {/* <== Card ==> */}

      {/* <div class=" flex lg:justify-around justify-center flex-wrap items-center"> */}
      <div class="flex justify-between items-center transition-all transform hover:scale-105 hover:cursor-pointer">
        <div class="flex flex-col space-y-4 object-right">
          <div class="bg-white text-ourWork-100 font-bold mx-5 my-3 shadow-2xl rounded-2xl object-left-top inline-block">
            <div class="flex flex-row justify-start items-center w-37 h-16 sm:h-16 sm:w-60 lg:h-16 lg:w-72 ml-4 object-right-top">
              <div class="fixed">
                <Icon icon="ic:round-remove-red-eye black-bold" />
              </div>
              <div class="ml-10 text-s md:lg:text-base font-normal">
                <h2 className="font-bold text-left md:text-left lg:text-left text-xl md:text-xl lg:text-xl text-black">
                  <div className="flex items-left justify-left"></div>
                  Automation{" "}
                </h2>
                <p className="flex-col space-y-4 text-sm text-gray-500">
                  Every project includes free bug fixing up to 3 months after
                  the handover time.
                </p>
              </div>
            </div>
          </div>
          <div class="bg-white text-ourWork-100 font-bold mx-5 my-2 shadow-2xl rounded-2xl">
            <div class="flex flex-row justify-start items-center w-37 h-16 sm:h-16 sm:w-60 lg:h-16 lg:w-72 ml-4 object-right-top">
              <div class="fixed">
                <Icon icon="mdi:shield-bug" />
              </div>
              <div class="ml-10 text-s md:lg:text-base font-normal">
                <h2 className="font-bold text-left md:text-left lg:text-left text-xl md:text-xl lg:text-xl text-black">
                  <div className="flex items-left justify-left"></div>
                  Bug Free Warranty
                </h2>
                <p className="flex-col space-y-4 text-sm text-gray-500">
                  Every project includes free bug fixing up to 3 months after
                  the handover time.
                </p>
              </div>
            </div>
          </div>
          <div class="bg-white text-ourWork-100 font-bold mx-5 my-2 shadow-2xl rounded-2xl">
            <div class="flex flex-row justify-start items-center w-37 h-16 sm:h-16 sm:w-60 lg:h-16 lg:w-72 ml-4 object-right-top">
              <div class="fixed">
                <Icon icon="fluent-mdl2:connect-virtual-machine" />
              </div>
              <div class="ml-10 text-s md:lg:text-base font-normal">
                <h2 className="font-bold text-left md:text-left lg:text-left text-xl md:text-xl lg:text-xl text-black">
                  <div className="flex items-left justify-left"></div>
                  Visibility
                </h2>
                <p className="flex-col space-y-4 text-sm text-gray-500">
                  Help enterprises to improve business operation through
                  digitalization by increasing visibility.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default hero;
