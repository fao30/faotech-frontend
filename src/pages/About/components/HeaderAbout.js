import { motion } from "framer-motion";
import React from "react";

const HeaderAbout = () => {
  return (
    <div class="px-[8vw] my-[6vw] lg:my-[6vw] w-full z-10 ">
      <div class="flex justify-between flex-wrap items-center w-full ">
        {/* HEADER TITLE, Digital Product Made By Us*/}
        <div class="w-full md:w-[50%] text-[#757575] text-[16px] md:text-[20px]">
          <motion.div
            initial={{ y: "20%" }}
            animate={{ y: "calc(100% - 100%)" }}
          >
            <h1 class="md:lg:text-5xl text-4xl font-bold text-[#1363DF]">
              About Us
            </h1>
            <br />
            <p class="text-[16px] md:text-[20px]">
              We are a technology company that is moving forward to build a
              technology ecosystem to help humanity maximize its work. we
              prioritize the realization of the best technology in any kind of
              work you need.
            </p>
            <p>
              <br />
              We analyze every detail of your work needs, strive for the best
              way to solve problems with measurable analysis. creating not only
              solutions but also technological wonders. no more conventional, be
              more digital.
            </p>
          </motion.div>
        </div>
        <div class="w-full md:w-[40%] max-md:mt-6">
          <img alt="coding" src={require("./alvinAbout.jpeg")} />
        </div>
      </div>
      {/* IMG FOR MOBILE DEVICES */}
      {/* <div class="flex justify-center">
        <img
          alt="coding"
          class="max-[1280px]:flex hidden shadow-xl w-[80%] md:mt-8"
          src={require("./alvinAbout.jpeg")}
        ></img>
      </div> */}
    </div>
  );
};

export default HeaderAbout;
