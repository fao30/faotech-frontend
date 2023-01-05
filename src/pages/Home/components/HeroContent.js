import { Icon } from "@iconify/react";
import { motion } from "framer-motion";
import { React } from "react";
import CardHero from "./components/CardHero";
// from-white to-blue-200  bg-gradient-to-r

const HeroContent = () => {
  return (
    <div class="flex flex-col justify-around">
      <div class="my-6 lg:my-[10rem] z-10">
        <div class="flex lg:justify-around justify-center flex-wrap items-center">
          {/* HERO TITLE */}
          <div class="z-20 mx-10 lg:pl-[3.7rem] w-full lg:w-[39rem] md:w-4/5">
            <motion.div
              initial={{ x: "-20%" }}
              animate={{ x: "calc(100% - 100%)" }}
            >
              <h1 class="text-xl my-2 text-primary-100 font-bold">
                For Your Business Future
              </h1>
              <h1 class="md:lg:text-5xl text-4xl font-bold text-black">
                We are building the best for your Digital Product as comfortable
                as you wish!
              </h1>
              <h1 class="text-l my-6 text-[#757575] text-[16px] lg:text-[20px]">
                Everything's in our service like you need.
              </h1>
            </motion.div>
          </div>

          {/* DON'T DELETE CODES BELOW */}
          {/* <div class="hidden lg:md:sm:flex absolute w-7/12 h-3/4 right-0 bg-primary-300 blur-3xl"></div>
          <div class="md:lg:hidden w-1/5 h-2/5 top-3/4 right-0 absolute rounded-2xl bg-blue-100 blur-3xl rounded-tl-full"></div> */}
          <div class="lg:pr-12 z-10 mx-10 rounded-box w-full md:w-4/5 sm:w-full lg:w-2/5 bg-transparent flex justify-center lg:justify-end flex-wrap items-center">
            <CardHero
              cardDescProps={
                "Bring business operation productivity and efficiency by implementing an automation engine."
              }
              cardTitleProps={"Automation"}
              cardIconProps={
                <Icon
                  icon="fluent-mdl2:connect-virtual-machine"
                  color="#4C6BDC"
                  width="62px"
                  height="67px"
                />
              }
            />
            <CardHero
              cardDescProps={
                "Every project includes free bug fixing up to 3 months after the handover time."
              }
              cardTitleProps={"Bug Free Waranty"}
              cardIconProps={
                <Icon
                  icon="mdi:shield-bug"
                  color="#4C6BDC"
                  width="56.25px"
                  height="68.75px"
                />
              }
            />
            <CardHero
              cardDescProps={
                "Help enterprises to improve business operation through digitalization by increasing visibility."
              }
              cardTitleProps={"Visibility"}
              cardIconProps={
                <Icon
                  icon="ic:round-remove-red-eye"
                  color="#4C6BDC"
                  width="56.25px"
                  height="68.75px"
                />
              }
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroContent;
