import React from "react";
import { Icon } from "@iconify/react";

const ReachUs = () => {
  return (
    <div class="w-full">
      <div class="my-16 md:mx-[5rem] lg:mx-[9.5rem] mx-10 px-12 flex justify-center md:lg:justify-between content-center flex-wrap items-center rounded-xl h-52 md:h-48 lg:h-[120px] bg-[#4C6BDC] ">
        <div class="flex justify-between items-center">
          <div class="md:text-lg w-full mr-6">
            <p class="text-[#FEFEFF] font-bold ">
              Already have a plan or do You need consultation?
            </p>
            <p class="mt-2 text-[#FEFEFF] font-bold"> You know where to go</p>
          </div>
        </div>
        <button class="mt-4 lg:mt-0 btn text-sm lg:text-base  hover:bg-white normal-case font-semibold rounded-lg border-none bg-white text-[#4C6BDC] w-40 group">
          Reach Us{" "}
          <span class="ml-1.5 animate-pulse">
            <Icon
              icon="mdi:customer-service"
              color="#4c6bdc"
              width="24"
              height="24"
            />
          </span>
        </button>
      </div>
    </div>
  );
};

export default ReachUs;
