import React from "react";
import { Icon } from "@iconify/react";

const ReachUs = () => {
  return (
    <div class="w-full px-[2rem] md:px-[4rem] lg:px-[8rem]">
      <div class="mb-16 lg:mb-32 mt-16 px-12 flex sm:justify-start md:lg:justify-between content-center flex-wrap items-center rounded-xl h-60 md:h-48 lg:h-[120px] bg-[#4C6BDC] ">
        <div class="flex justify-between items-center w-full">
          <div class="md:text-lg w-full mr-6">
            <p class="text-[#FEFEFF] font-bold text-xl lg:text-2xl">
              Already have a plan or do you need consultation?
            </p>
            <p class="mt-2 text-[#FEFEFF] font-bold text-xl lg:text-2xl">
              You know where to go
            </p>
          </div>
          <button class="hidden md:flex mt-4 lg:mt-0 btn text-sm lg:text-xl  hover:bg-white normal-case font-semibold rounded-lg border-none bg-white text-[#4C6BDC] w-40 group">
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
        <div className="md:hidden items-center justify-end flex w-full">
          <button class=" mt-4 lg:mt-0 btn  text-lg lg:text-2xl  hover:bg-white normal-case font-semibold rounded-lg border-none bg-white text-[#4C6BDC] w-40 group">
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
    </div>
  );
};

export default ReachUs;
