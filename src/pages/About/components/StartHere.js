import React from "react";
import { Icon } from "@iconify/react";
import { motion } from "framer-motion";

const StartHere = () => {
  return (
    <motion.div
      className="px-[8vw] mb-24 lg:my-[8vw] w-full z-10"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 1 }}
      transition={{ delay: 0.25, duration: 0.5 }}
      variants={{
        hidden: { opacity: 0.5, scale: 0.8 },
        visible: { opacity: 1, scale: 1 },
      }}
    >
      <div className="flex justify-center w-full flex-wrap items-end rounded-xl  bg-white border-2 shadow-xl p-12">
        <div className="flex justify-center flex-col items-center w-full">
          <h1 className=" md:lg:text-5xl text-4xl  font-[700] leading-[36px]  text-[#1363DF]  sm:text-center text-left">
            Let’s create something amazing together
          </h1>
          <p className=" text-[#757575] text-[16px] md:text-[20px] font-[400] text-left my-6">
            Hit the button, we are there waiting for you!
          </p>
          <button className=" mt-6 md:w-72 w-48 font-[500] hover:bg-[#4C6BDC] hover:text-white normal-case text-[15px] lg:text-[20px] btn border-none relative inline-flex items-center overflow-hidden text-md text-[white] shadow-md bg-[#4C6BDC] group">
            <span className=" h-full w-0 group-hover:w-full absolute block transition-all bg-[#3F58B5] opacity-100 duration-500 ease"></span>
            <span className="invisible group-hover:visible scale-0 group-hover:scale-110 absolute right-[2.2rem] md:right-[4.7rem] flex items-center justify-start  w-10 h-10 duration-300 transform">
              {" "}
              <Icon
                icon="material-symbols:emoji-people"
                color="white"
                width="24"
                height="24"
              />
            </span>
            <span className="text-[16px] md:text-[20px] relative group-hover:-translate-x-5 ease duration-300 group-hover:transform">
              Start Here
            </span>
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default StartHere;
