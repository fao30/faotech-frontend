import { motion } from "framer-motion";
import React from "react";

const HeaderAbout = () => {
  return (
    <div className="px-[8vw] py-[6vw] lg:py-[6vw] w-full z-10 ">
      <div className="flex justify-between flex-wrap items-center w-full ">
        {/* HEADER TITLE, Digital Product Made By Us*/}
        <div className="w-full md:w-[50%] text-[#757575] text-[16px] md:text-[20px]">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 1 }}
            transition={{ delay: 0.25, duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, y: -50 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            <h1 className="md:lg:text-5xl text-4xl font-bold text-[#1363DF]">
              About Us
            </h1>
            <br />
            <p className="text-[16px] md:text-[20px]">
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

        <div className="w-full md:w-[40%] max-md:mt-6">
          <img alt="coding" src={require("./alvinAbout.jpeg")} />
        </div>
      </div>
      {/* IMG FOR MOBILE DEVICES */}
      {/* <div className="flex justify-center">
        <img
          alt="coding"
          className="max-[1280px]:flex hidden shadow-xl w-[80%] md:mt-8"
          src={require("./alvinAbout.jpeg")}
        ></img>
      </div> */}
    </div>
  );
};

export default HeaderAbout;
