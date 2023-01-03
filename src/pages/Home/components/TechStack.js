import React from "react";
import { Icon } from "@iconify/react";
import CardTech from "./components/CardTech";

const TechStack = () => {
  return (
    <div id="ourWorkSelector" class="grid place-items-center items-end">
      <div class="mt-6 mb-20 z-10 md:w-4/5 lg:w-full">
        <div>
          <div class="flex flex-col justify-center flex-wrap items-center mb-6">
            <h1 class="text-4xl md:lg:text-5xl font-bold text-black text-center">
              Tech Stack
            </h1>
            <p class="text-center text-[#757575] w-96 sm:w-5/12 mt-4">
              There is no right answer when choosing the right tech stack for
              you. We take into account your long term goal, development
              timeline, speed and budget.
            </p>
          </div>
          <div class="flex flex-wrap justify-center items-center">
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
          </div>
          <div class="w-full">
            <div class="my-16 md:mx-[5rem] lg:mx-[9.5rem] mx-10 px-12 flex justify-center md:lg:justify-between content-center flex-wrap items-center rounded-xl h-56 md:h-48 lg:h-[120px] bg-[#4C6BDC] ">
              <div class="flex justify-between items-center">
                <div class="md:text-lg w-full mr-6">
                  <p class="text-[#FCFDFF] font-bold text-2xl">
                    Ready to Start?
                  </p>
                  <p class="mt-2 text-[#FCFDFF] font-light">
                    Let's get connected and discuss about your project and
                    possible partnerships.
                  </p>
                </div>
              </div>
              <button class="mt-4 lg:mt-0 btn text-sm lg:text-base  hover:bg-white normal-case font-semibold rounded-lg border-none bg-white text-[#4C6BDC] w-40 group">
                Go!
                <span
                  class="ml-1.5 invisible group-hover:visible
            group-hover:transition group:hover:duration-700 group-hover:ease-in-out"
                >
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
        </div>
      </div>
    </div>
  );
};

export default TechStack;