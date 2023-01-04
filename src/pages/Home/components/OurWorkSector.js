import { React } from "react";
import CardWork from "./components/CardWork";
import { Icon } from "@iconify/react";
// from-white to-blue-200  bg-gradient-to-r

const OurWorkSector = () => {
  return (
    <div>
      <div id="ourWorkSelector" class="grid place-items-center items-end">
        <div class="mt-6 lg:mb-2 lg:mt-[7rem] z-10 md:w-4/5 lg:w-full">
          <div>
            <div class="flex flex-col justify-center flex-wrap items-center mb-6">
              <h1 class="text-xl  text-primary-100 font-bold">
                Solutions are Here!
              </h1>
              <h1 class="text-4xl md:lg:text-5xl font-bold text-black text-center">
                Our Work Sector
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
    </div>
  );
};

export default OurWorkSector;
