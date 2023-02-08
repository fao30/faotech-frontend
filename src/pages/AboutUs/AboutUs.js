import { motion } from "framer-motion";
import { React } from "react";
// import Header from "../Home/components/Header";
import CompanyProfile from "./CompanyProfile";

const AboutUs = () => {
  return (
    <div class="grid place-items-center items-end">
      <div class="my-10 lg:my-16 z-10 w-full">
        <div class="flex justify-between flex-wrap items-center mx-10 md:mx-20 lg:mx-[9.5rem] mb-12 md:mb-0">
          {/* HEADER TITLE, Digital Product Made By Us*/}
          <motion.div
            initial={{ x: "-20%" }}
            animate={{ x: "calc(100% - 100%)" }}
          >
            <div class="w-full lg:w-[60%] md:w-4/5">
              <h1 class="md:lg:text-5xl text-4xl font-bold text-[#1363DF]">
                About Us
              </h1>
            </div>
            <div class="md:w-96 lg:w-[27.7rem] text-[#757575] text-[16px] mt-6 ">
              <h1>
                We are a technology company that is moving forward to build a
                technology ecosystem to help humanity maximize its work. we
                prioritize the realization of the best technology in any kind of
                work you need.
              </h1>
              <h1>
                <br />
                We analyze every detail of your work needs, strive for the best
                way to solve problems with measurable analysis. creating not
                only solutions but also technological wonders. no more
                conventional, be more digital.
              </h1>
            </div>
          </motion.div>
          <img
            alt="coding"
            class="hidden lg:flex w-full lg:w-5/12  shadow-xl md:ml-6 md:mt-6 ml-0 mt-12 lg:mt-0"
            src={require("./components/alvinAbout.jpeg")}
          />
        </div>
        {/* IMG FOR MOBILE DEVICES */}
        <div class="flex justify-center">
          <img
            alt="coding"
            class="md:lg:hidden  shadow-xl w-[80%] md:mt-8"
            src={require("./components/alvinAbout.jpeg")}
          ></img>
        </div>
      </div>

      {/* card */}

      <div>
        <CompanyProfile />
      </div>
    </div>
  );
};

export default AboutUs;
