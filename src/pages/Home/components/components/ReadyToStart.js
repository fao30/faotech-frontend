import { Icon } from "@iconify/react";
import { motion } from "framer-motion";
import React from "react";

const ReadyToStart = () => {
  return (
    <motion.div
      className="w-full"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 1 }}
      transition={{ delay: 0.3, duration: 0.3 }}
      variants={{
        hidden: { opacity: 0.5, scale: 0.8 },
        visible: { opacity: 1, scale: 1 },
      }}
    >
      <div className="p-12 my-16 flex sm:justify-start md:lg:justify-between content-center flex-wrap items-center rounded-xl bg-[#4C6BDC] ">
        <div className="flex justify-between items-center w-full">
          <div className="md:text-lg w-full">
            <p className="text-[#FCFDFF] font-bold text-3xl">Ready to Start?</p>
            <p className="mt-2 text-[#FCFDFF] font-light text-[16px] lg:text-[20px]">
              Let's get connected and discuss about your project and possible
              partnerships.
            </p>
          </div>
          <button
            className="hidden md:flex lg:mt-0 btn text-[1rem] lg:text-[1.3rem]  hover:bg-white normal-case font-semibold rounded-lg border-none bg-white text-[#4C6BDC] w-40 group 
relative items-center overflow-hidden"
          >
            <span className="relative group-hover:-translate-x-2 ease duration-300 group-hover:transform">
              Go!
            </span>
            <span className="pl-[0.5rem] invisible group-hover:visible scale-0 group-hover:scale-110 absolute right-[2.2rem] flex items-center justify-start  w-10 h-10 duration-300 transform">
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
            className="md:hidden mt-4 lg:mt-0 btn text-[1rem] lg:text-[1.3rem]  hover:bg-white normal-case font-semibold rounded-lg border-none bg-white text-[#4C6BDC] w-40 group 
relative items-center overflow-hidden"
          >
            <span className=" relative group-hover:-translate-x-2 ease duration-300 group-hover:transform">
              Go!
            </span>
            <span className="pl-[0.5rem] invisible group-hover:visible scale-0 group-hover:scale-110 absolute right-[2.2rem] flex items-center justify-start  w-10 h-10 duration-300 transform">
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
    </motion.div>
  );
};

export default ReadyToStart;
