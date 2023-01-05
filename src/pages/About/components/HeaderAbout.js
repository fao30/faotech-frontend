import { motion } from "framer-motion";
import React from "react";

const HeaderAbout = () => {
  return (
    <div class="px-[2rem] md:px-[4rem] lg:px-[8rem] grid place-items-center items-end">
      <div class="my-10 lg:my-[6.5rem] z-10 w-full">
        <div class="flex justify-between flex-wrap items-center mb-12 md:mb-0">
          {/* HEADER TITLE, Digital Product Made By Us*/}
          {/* <motion.div
            initial={{ x: "-20%" }}
            animate={{ x: "calc(100% - 100%)" }}
          > */}

          <div class="md:w-full lg:w-[27.7rem] text-[#757575] text-[16px] md:text-[20px] mt-6">
            <h1 class="w-full md:lg:text-5xl text-4xl font-bold text-[#1363DF]">
              About Us
            </h1>
            <br />
            <h1>
              We are a technology company that is moving forward to build a
              technology ecosystem to help humanity maximize its work. we
              prioritize the realization of the best technology in any kind of
              work you need.
            </h1>
            <h1>
              <br />
              We analyze every detail of your work needs, strive for the best
              way to solve problems with measurable analysis. creating not only
              solutions but also technological wonders. no more conventional, be
              more digital.
            </h1>
          </div>

          {/* </motion.div> */}
          <img
            alt="coding"
            class="hidden min-[1280px]:flex  w-3/4 min-[1280px]:w-5/12  shadow-xl md:ml-6 md:mt-6 ml-0 mt-12 lg:mt-0"
            src={require("./alvinAbout.jpeg")}
          />
        </div>
        {/* IMG FOR MOBILE DEVICES */}
        <div class="flex justify-center">
          <img
            alt="coding"
            class="max-[1280px]:flex hidden shadow-xl w-[80%] md:mt-8"
            src={require("./alvinAbout.jpeg")}
          ></img>
        </div>
      </div>
    </div>
  );
};

export default HeaderAbout;
