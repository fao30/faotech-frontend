import React from "react";
import { Icon } from "@iconify/react";
import CardTech from "./components/CardTech";
import ReadyToStart from "./components/ReadyToStart";

const TechStack = () => {
  return (
    <div className="paddingX paddingBottomLonger w-full z-10">
      <div className="flex flex-col gap-12">
        <div className="flex flex-col justify-center flex-wrap items-center gap-2">
          <h1>Tech Stack</h1>
          <p className="text-center text-[#757575] w-full md:w-10/12 lg:w-[50%] mt-4 16px] md:20px] ">
            There is no right answer when choosing the right tech stack for you.
            We take into account your long term goal, development timeline,
            speed and budget.
          </p>
        </div>
        <div className="flex flex-wrap justify-center items-center">
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
