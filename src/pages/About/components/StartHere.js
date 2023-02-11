import React from "react";
import { Icon } from "@iconify/react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const StartHere = () => {
  const navigate = useNavigate();
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <motion.div
      className="paddingX marginBottomLonger w-full z-10"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 1 }}
      transition={{ delay: 0.3, duration: 0.3 }}
      variants={{
        hidden: { opacity: 0.5, scale: 0.8 },
        visible: { opacity: 1, scale: 1 },
      }}
    >
      <div className="flex justify-center w-full flex-wrap items-end rounded-xl  bg-white border-2 shadow-xl p-12">
        <div className="justify-center items-center w-full flex flex-col gap-6">
          <h1 className="text-[#1363DF]  h1Smaller sm:text-center text-left">
            Let’s create something amazing together
          </h1>
          <p className="text-[#757575] sm:text-center text-left">
            Hit the button, we are there waiting for you!
          </p>
          <button
            onClick={() => {
              navigate("/contact");
              scrollToTop();
            }}
            className="md:w-72 w-48  hover:bg-[#4C6BDC] hover: normal-case btn border-none relative inline-flex items-center overflow-hidden shadow-md bg-[#4C6BDC] group"
          >
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
            <span className="16px] md:20px] relative group-hover:-translate-x-5 ease duration-300 group-hover:transform">
              <p>Start Here</p>
            </span>
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default StartHere;
