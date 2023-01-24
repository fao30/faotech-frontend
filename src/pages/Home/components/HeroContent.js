import { Icon } from "@iconify/react";
import { motion } from "framer-motion";
import { React } from "react";
import CardHero from "./components/CardHero";

const HeroContent = () => {
  return (
    <div className="px-[8vw] pb-[6vw] lg:pb-[8vw] w-full z-10">
      <div className="flex w-full justify-between flex-wrap items-center">
        {/* HERO TITLE */}
        <div className="w-full md:w-[40%]">
          <h2 className="text-[28px] my-2 text-primary-100 font-bold">
            For Your Business Future
          </h2>
          <h1 className="md:lg:text-5xl text-4xl font-bold text-black">
            We are building the best for your Digital Product as comfortable as
            you wish!
          </h1>
          <h3 className="my-6 text-[#757575] text-[16px] md:text-[20px]">
            Everything's in our service like you need.
          </h3>
        </div>
        {/* CARDS */}
        <div className="w-full md:w-[55%] flex flex-wrap justify-center items-center">
          <motion.div
            className="flex justify-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 1 }}
            transition={{ delay: 0.3, duration: 0.3 }}
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
            className="flex justify-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 1 }}
            transition={{ delay: 0.3, duration: 0.3 }}
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
            className="flex justify-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
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
