import React from "react";
import { Icon } from "@iconify/react";
import { motion } from "framer-motion";
import CardTech from "./CardTech";
// import CTA from './CTA';

const TechStack = () => {
  return (
    <div
      id="ourWorkSelector"
      class="text-primary-content grid place-items-center items-end from-white to-primary-300 bg-gradient-to-r"
    >
      <div class="my-6 mb-8 lg:mt-20 lg:mb-80 z-10 md:w-4/5 lg:w-full">
        <div>
          <div class=" flex flex-col justify-center flex-wrap items-center mb-6">
            <h1 class="text-5xl  text-black font-bold mb-8">Tech Stack</h1>
            <p className="text-l text-gray-500 ">
              There is no right answer when choosing the right tech stack for
              you. We take into account
            </p>
            <p className="text-l text-gray-500">
            your long term goal, development timeline, speed and budget.
            </p>

          </div>
          <div class="flex flex-wrap justify-center items-center mb-5">
            <CardTech
              cardIconProps={
                <Icon
                  icon="mdi:language-kotlin"
                  color="#4c6bdc"
                  width="30"
                  height="30"
                />
              }
              cardTitleProps={"Kotlin"}
            />
            <CardTech
              cardIconProps={
                <Icon
                  icon="tabler:brand-react-native"
                  color="#4c6bdc"
                  width="30"
                  height="30"
                />
              }
              cardTitleProps={"React Native"}
            />
            <CardTech
              cardIconProps={
                <Icon
                  icon="file-icons:flutter"
                  color="#4c6bdc"
                  width="30"
                  height="30"
                />
              }
              cardTitleProps={"Flutter"}
            />
            <div></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechStack;
