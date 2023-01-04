import React from "react";
import { Icon } from "@iconify/react";
import CardTech from "./components/CardTech";
import "./custom.css";
import ReadyToStart from "./components/ReadyToStart";

const TechStack = () => {
  return (
    <div id="ourWorkSelector" class=" grid place-items-center items-end">
      <div class="mt-6 lg:my-36  z-10 md:w-4/5 lg:w-full">
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
          <ReadyToStart />
        </div>
      </div>
    </div>
  );
};

export default TechStack;
