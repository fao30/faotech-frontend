import { Icon } from "@iconify/react";
import { motion } from "framer-motion";
import { React } from "react";
import CardHero from "./components/CardHero";

const HeroContent = () => {
  return (
    <div class="px-[8vw] my-[6vw] lg:my-[8vw] w-full z-10">
      <div class="flex w-full justify-between flex-wrap items-center">
        {/* HERO TITLE */}
        <div class="w-full md:w-[40%]">
          <h2 class="text-[28px] my-2 text-primary-100 font-bold">
            For Your Business Future
          </h2>
          <h1 class="md:lg:text-5xl text-4xl font-bold text-black">
            We are building the best for your Digital Product as comfortable as
            you wish!
          </h1>
          <h3 class="my-6 text-[#757575] text-[16px] md:text-[20px]">
            Everything's in our service like you need.
          </h3>
        </div>
        {/* CARDS */}
        <div class="rounded-box w-full md:w-[55%] flex flex-wrap justify-center items-center">
          <motion.div
            class="flex justify-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, scale: 0.5 },
              visible: { opacity: 1, scale: 1 },
            }}
          >
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
          </motion.div>
          <motion.div
            class="flex justify-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, scale: 0.5 },
              visible: { opacity: 1, scale: 1 },
            }}
          >
            <CardHero
              cardDescProps={
                "Every project includes free bug fixing up to 3 months after the handover time."
              }
              cardTitleProps={"Bug Free Waranty"}
              cardIconProps={
                <Icon
                  icon="mdi:shield-bug"
                  color="#4C6BDC"
                  width="62px"
                  height="67px"
                />
              }
            />
          </motion.div>
          <motion.div
            class="flex justify-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.7, duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, scale: 0.5 },
              visible: { opacity: 1, scale: 1 },
            }}
          >
            <CardHero
              cardDescProps={
                "Help enterprises to improve business operation through digitalization by increasing visibility."
              }
              cardTitleProps={"Visibility"}
              cardIconProps={
                <Icon
                  icon="ic:round-remove-red-eye"
                  color="#4C6BDC"
                  width="62px"
                  height="67px"
                />
              }
            />
          </motion.div>
        </div>
      </div>
    </div>

    // </motion.div>
  );
};

export default HeroContent;
