import { Icon } from "@iconify/react";
import { motion } from "framer-motion";
import { React } from "react";
import CardHero from "./components/CardHero";

const HeroContent = () => {
  return (
    <div className="paddingX paddingBottom w-full z-10">
      <div className="flex w-full justify-between flex-wrap items-center gap-y-6 md:gap-y-12">
        {/* HERO TITLE */}
        <div className="w-full lg:w-[55%] flex flex-col gap-2">
          <h2 className="text-primary-100">For Your Business Future</h2>
          <h1>
            We are building the best for your Digital Product as comfortable as
            you wish!
          </h1>
          <p className="text-[#757575] lg:mt-6">
            Everything's in our service like you need.
          </p>
        </div>
        {/* CARDS */}
        <div className="w-full lg:w-[40%] flex flex-wrap justify-center items-center">
          <motion.div
            className="flex justify-center w-full"
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
            className="flex justify-center w-full"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 1 }}
            transition={{ delay: 0.4, duration: 0.4 }}
            variants={{
              hidden: { opacity: 0, scale: 0.5 },
              visible: { opacity: 1, scale: 1 },
            }}
          >
            <CardHero
              cardDescProps={
                "Every project includes free bug fixing up to 1 month after the handover time."
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
            className="flex justify-center w-full"
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
