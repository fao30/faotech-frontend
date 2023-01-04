import { Icon } from "@iconify/react";
import React from "react";

const ReadyToStart = () => {
  return (
    <div class="w-full">
      <div class="my-16 md:mx-[5rem] lg:mx-[9.5rem] mx-10 px-12 flex sm:justify-start md:lg:justify-between content-center flex-wrap items-center rounded-xl h-60 md:h-48 lg:h-[120px] bg-[#4C6BDC] ">
        <div class="flex justify-between items-center w-full">
          <div class="md:text-lg w-full mr-6">
            <p class="text-[#FCFDFF] font-bold text-2xl">Ready to Start?</p>
            <p class="mt-2 text-[#FCFDFF] font-light text-sm">
              Let's get connected and discuss about your project and possible
              partnerships.
            </p>
          </div>
          <button
            class="hidden md:flex mt-4 lg:mt-0 btn text-[1rem] lg:text-[1.3rem]  hover:bg-white normal-case font-semibold rounded-lg border-none bg-white text-[#4C6BDC] w-40 group 
relative items-center overflow-hidden"
          >
            <span class="relative group-hover:-translate-x-2 ease duration-300 group-hover:transform">
              Go!
            </span>
            <span class="pl-[0.5rem] invisible group-hover:visible scale-0 group-hover:scale-110 absolute right-[2.2rem] flex items-center justify-start  w-10 h-10 duration-300 transform">
              {" "}
              <Icon
                icon="mdi:rocket-launch"
                color="#4c6bdc"
                width="24"
                height="24"
              />
            </span>
          </button>
        </div>
        <div className=" items-center justify-end flex w-full">
          <button
            class=" md:hidden mt-4 lg:mt-0 btn text-[1rem] lg:text-[1.3rem]  hover:bg-white normal-case font-semibold rounded-lg border-none bg-white text-[#4C6BDC] w-40 group 
relative items-center overflow-hidden"
          >
            <span class=" relative group-hover:-translate-x-2 ease duration-300 group-hover:transform">
              Go!
            </span>
            <span class="pl-[0.5rem] invisible group-hover:visible scale-0 group-hover:scale-110 absolute right-[2.2rem] flex items-center justify-start  w-10 h-10 duration-300 transform">
              {" "}
              <Icon
                icon="mdi:rocket-launch"
                color="#4c6bdc"
                width="24"
                height="24"
              />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ReadyToStart;