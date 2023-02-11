import { Icon } from "@iconify/react";
import { motion } from "framer-motion";
import React from "react";
import { useNavigate } from "react-router-dom";

const ReadyToStart = () => {
  const navigate = useNavigate();
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
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
      <div className="p-8 md:p-12 flex sm:justify-start md:lg:justify-between content-center flex-wrap items-center rounded-xl bg-[#4C6BDC] ">
        <div className="flex justify-between items-center w-full">
          <div className="flex flex-col gap-2">
            <h2 className="text-[#FCFDFF]  font-bold">Ready to Start?</h2>
            <p className="text-[#FCFDFF] font-light">
              Let's get connected and discuss about your project and possible
              partnerships.
            </p>
          </div>
          <button
            onClick={() => {
              navigate("/contact");
              scrollToTop();
            }}
            className="hidden md:flex lg:mt-0 btn hover:bg-white normal-case  rounded-lg border-none bg-white #4C6BDC] w-40 group 
relative items-center overflow-hidden"
          >
            <span className="relative group-hover:-translate-x-2 ease duration-300 group-hover:transform">
              <p className="text-primary-100">Go!</p>
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
            onClick={() => {
              navigate("/contact");
              scrollToTop();
            }}
            className="md:hidden mt-4 lg:mt-0 btn hover:bg-white normal-case  rounded-lg border-none bg-white #4C6BDC] w-40 group 
relative items-center overflow-hidden"
          >
            <span className="relative group-hover:-translate-x-2 ease duration-300 group-hover:transform">
              <p className="text-primary-100">Go!</p>
            </span>
            <span className="pl-[0.5rem] invisible group-hover:visible scale-0 group-hover:scale-110 absolute right-[2.2rem] flex items-center justify-start  w-10 h-10 duration-300 transform">
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
