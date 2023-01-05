import React from "react";
import { Icon } from "@iconify/react";

const StartHere = () => {
  return (
    <div class="w-full lg:my-72 mb-40">
      <div class="my-16 md:mx-[5rem] lg:mx-[9.5rem] mx-10 px-6 flex justify-center content-center flex-wrap items-center rounded-xl  bg-white border-2 shadow-xl ">
        <div className="mt-8 lg:mt-3 px-[2rem] md:px-2 mb-2 flex justify-center flex-col items-center">
          <h1 class="mt-4 md:lg:text-5xl text-4xl  font-[700] leading-[36px] md:leading-[48px] lg:leading-[48px] text-[#1363DF]  pb-1 sm:text-center text-left">
            Let’s create something amazing together
          </h1>
          <p class=" text-[#757575] text-[16px] md:text-[21px] font-[400] mt-3 text-left">
            Hit the button, we are there waiting for you!
          </p>
          <button class="md:w-72 w-48 mt-12 mb-8 font-[500] hover:bg-[#4C6BDC] hover:text-white normal-case text-[15px] lg:text-[20px] btn border-none relative inline-flex items-center overflow-hidden text-md text-[white] shadow-md bg-[#4C6BDC] group">
            <span class=" h-full w-0 group-hover:w-full absolute block transition-all bg-[#3F58B5] opacity-100 duration-500 ease"></span>
            <span class="pl-[0.5rem] invisible group-hover:visible scale-0 group-hover:scale-110 absolute right-[2.2rem] md:right-[4.7rem] flex items-center justify-start  w-10 h-10 duration-300 transform">
              {" "}
              <Icon
                icon="material-symbols:emoji-people"
                color="white"
                width="24"
                height="24"
              />
            </span>
            <span class="text-[16px] md:text-[20px] relative group-hover:-translate-x-5 ease duration-300 group-hover:transform">
              Start Here
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default StartHere;
