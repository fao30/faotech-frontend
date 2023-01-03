import { motion } from "framer-motion";
import React from "react";

const DigitalProduct = () => {
  return (
    <div class="grid place-items-center items-end">
      <div class="my-6 z-10 w-full">
        <div class="flex justify-between flex-wrap items-center mx-10 md:mx-20 lg:mx-[9.5rem] mb-12 md:mb-24">
          {/* HEADER TITLE, Digital Product Made By Us*/}
          <div class="w-full lg:w-[45%] md:w-4/5">
            <h1 class="md:lg:text-5xl text-4xl font-bold text-black">
              Digital Product Made By Us For Your Business Transformation
            </h1>
          </div>
          <div class="w-72 text-[#757575] text-[16px] mt-6">
            <motion.div
              initial={{ x: "-20%" }}
              animate={{ x: "calc(100% - 100%)" }}
            >
              <h1>
                We experienced in digitalizing various business and enterprises
                across industries with our product.
              </h1>
            </motion.div>
          </div>
        </div>
        {/* Communication Platform for Business to Business Partners */}
        <div class="flex justify-center lg:justify-between flex-wrap items-center mx-10 md:mx-20 lg:mx-[9.5rem]">
          {/* HEADER TITLE */}
          <div class="w-full lg:w-2/5 md:w-4/5">
            <h1 class="md:lg:text-3xl text-xl font-semibold text-black">
              Communication Platform for Business to Business Partners
            </h1>
            <div class=" text-[#757575] mt-6">
              <h1>
                B2B-ONE.COM - it is an effective platform for communication
                between exporters and importers, sellers and buyers of goods and
                services around the world. Find a partner, conduct video
                negotiations and agree on a good deal!
              </h1>
            </div>
          </div>
          <img
            class="hidden lg:flex w-full lg:w-6/12 transition-all transform hover:scale-125 hover:cursor-zoom-in mt-12 lg:mt-0"
            src={require("./components/b2b.png")}
          ></img>
        </div>
        {/* IMG FOR MOBILE PHONES */}
        <div class="flex justify-center">
          <img
            class="md:lg:hidden w-11/12 transition-all transform hover:scale-125 hover:cursor-zoom-in mt-12"
            src={require("./components/b2b.png")}
          ></img>
        </div>
      </div>
    </div>
  );
};

export default DigitalProduct;
