import { motion } from "framer-motion";
import { React } from "react";
import CardWork from "./components/CardWork";
import { Icon } from "@iconify/react";
// from-white to-blue-200  bg-gradient-to-r

const OurWorkSelector = () => {
  return (
    <div
      id="ourWorkSelector"
      class="text-primary-content grid place-items-center items-end from-white to-primary-300 bg-gradient-to-r"
    >
      <div class="my-6 lg:mt-20 lg:mb-80 z-10 md:w-4/5 lg:w-full">
        <div>
          <div class="flex flex-col justify-center flex-wrap items-center mb-6">
            <h1 class="text-xl my-2 text-primary-100 font-bold">
              Solutions is Here!
            </h1>
            <h1 class="text-4xl md:lg:text-5xl font-bold text-black text-center">
              Our Work Selector
            </h1>
          </div>
          <div class="flex flex-wrap justify-center items-center">
            <CardWork
              cardIconProps={
                <Icon
                  icon="icon-park-outline:blockchain"
                  color="#4c6bdc"
                  width="30"
                  height="30"
                />
              }
              cardTitleProps={"Blockchain"}
            />
            <CardWork
              cardIconProps={
                <Icon
                  icon="icon-park-outline:blockchain"
                  color="#4c6bdc"
                  width="30"
                  height="30"
                />
              }
              cardTitleProps={"Software Architecture"}
            />
            <CardWork
              cardIconProps={
                <Icon
                  icon="icon-park-outline:blockchain"
                  color="#4c6bdc"
                  width="30"
                  height="30"
                />
              }
              cardTitleProps={"Blockchain Development"}
            />
            <CardWork
              cardIconProps={
                <Icon
                  icon="icon-park-outline:blockchain"
                  color="#4c6bdc"
                  width="30"
                  height="30"
                />
              }
              cardTitleProps={"Blockchain Development"}
            />
            <CardWork
              cardIconProps={
                <Icon
                  icon="icon-park-outline:blockchain"
                  color="#4c6bdc"
                  width="30"
                  height="30"
                />
              }
              cardTitleProps={"Blockchain Development"}
            />
            <CardWork
              cardIconProps={
                <Icon
                  icon="icon-park-outline:blockchain"
                  color="#4c6bdc"
                  width="30"
                  height="30"
                />
              }
              cardTitleProps={"Blockchain Development"}
            />
            <CardWork
              cardIconProps={
                <Icon
                  icon="icon-park-outline:blockchain"
                  color="#4c6bdc"
                  width="30"
                  height="30"
                />
              }
              cardTitleProps={"Blockchain Development"}
            />
            <CardWork
              cardIconProps={
                <Icon
                  icon="icon-park-outline:blockchain"
                  color="#4c6bdc"
                  width="30"
                  height="30"
                />
              }
              cardTitleProps={"Blockchain Development"}
            />
            <CardWork
              cardIconProps={
                <Icon
                  icon="icon-park-outline:blockchain"
                  color="#4c6bdc"
                  width="30"
                  height="30"
                />
              }
              cardTitleProps={"Blockchain Development"}
            />
            <CardWork
              cardIconProps={
                <Icon
                  icon="icon-park-outline:blockchain"
                  color="#4c6bdc"
                  width="30"
                  height="30"
                />
              }
              cardTitleProps={"Blockchain Development"}
            />
            <CardWork
              cardIconProps={
                <Icon
                  icon="icon-park-outline:blockchain"
                  color="#4c6bdc"
                  width="30"
                  height="30"
                />
              }
              cardTitleProps={"Blockchain Development"}
            />
            <CardWork
              cardIconProps={
                <Icon
                  icon="icon-park-outline:blockchain"
                  color="#4c6bdc"
                  width="30"
                  height="30"
                />
              }
              cardTitleProps={"Blockchain Development"}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurWorkSelector;
