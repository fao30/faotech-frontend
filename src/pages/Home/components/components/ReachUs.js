import React from "react";
import { Icon } from "@iconify/react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const ReachUs = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  const navigate = useNavigate();
  return (
    <motion.div
      className="mt-12 w-full"
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
          <div className="md: w-full mr-6 flex flex-col gap-2">
            <p className="text-[#FEFEFF] font-bold pBigger">
              Already have a plan or do you need consultation?
            </p>
            <p className="text-[#FEFEFF] font-bold pBigger">
              You know where to go
            </p>
          </div>
          <button
            onClick={() => {
              navigate("/contact");
              scrollToTop();
            }}
            className="hidden md:flex mt-4 lg:mt-0 btn  hover:bg-white normal-case  rounded-lg border-none bg-white #4C6BDC] w-40 group"
          >
            <p className="text-primary-100">Reach Us</p>
            <span className="ml-1.5 animate-pulse">
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
          <button
            onClick={() => {
              navigate("/contact");
              scrollToTop();
            }}
            className=" mt-4 lg:mt-0 btn   lg:  hover:bg-white normal-case  rounded-lg border-none bg-white #4C6BDC] w-40 group"
          >
            <p className="text-primary-100">Reach Us</p>
            <span className="ml-1.5 animate-pulse">
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
    </motion.div>
  );
};

export default ReachUs;
