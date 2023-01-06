import React from "react";
import { Icon } from "@iconify/react";
import CardTech from "./components/CardTech";
import "./custom.css";
import ReadyToStart from "./components/ReadyToStart";

const TechStack = () => {
  return (
    <div class="px-[8vw] my-[4vw] lg:my-[8vw] w-full z-10">
      <div>
        <div class="flex flex-col justify-center flex-wrap items-center mb-6">
          <h1 class="md:lg:text-5xl text-4xl  font-bold text-black text-center">
            Tech Stack
          </h1>
          <h2 class="text-center text-[#757575] w-full md:w-10/12 lg:w-[45%] mt-4 text-[16px] lg:text-[20px]">
            There is no right answer when choosing the right tech stack for you.
            We take into account your long term goal, development timeline,
            speed and budget.
          </h2>
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
  );
};

export default TechStack;
