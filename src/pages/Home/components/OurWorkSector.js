import { React, useState, useEffect } from "react";
import CardWork from "./components/CardWork";
import { Icon } from "@iconify/react";
import { motion, useScroll, useTransform } from "framer-motion";

// from-white to-blue-200  bg-gradient-to-r

// const BASE_URL =

const OurWorkSector = () => {
  // const [cardWork, setCardWork] = useState([])
  // useEffect(() => {
  //   fetch(BASE_URL)
  //   .then (res => res.json())
  //   .then (data => {
  //     setCardWork(data)
  //   })
  // }, [])
  const { scrollYProgress } = useScroll();
  const scale = useTransform(scrollYProgress, [0, 0.5], [0.75, 0.99]);

  return (
    <motion.div style={{ scale }}>
      {" "}
      <motion.div
        style={{
          scaleY: scrollYProgress,
        }}
      />
      <div class="px-[1rem] md:px-[4rem] lg:px-[8rem] grid place-items-center items-end">
        <div class="mt-6 lg:mb-2 lg:mt-[4rem] z-10 lg:w-full">
          <div>
            <div class="flex flex-col justify-center flex-wrap items-center mb-6">
              <h1 class="text-[28px] text-primary-100 font-bold">
                Solutions are Here!
              </h1>
              <h1 class="text-4xl md:lg:text-5xl font-bold text-black text-center">
                Our Work Sector
              </h1>
            </div>

            <div class="w-full flex flex-wrap justify-center items-center">
              {/* {cardWork.map((e)=>{
                return (
                  <CardWork cardIconProps={
                    <Icon icon={e.icon}   color="#4c6bdc"
                    width="30"
                    height="30"
                  />
                  } cardTitleProps={e.label} />
                )
              })} */}
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
    </motion.div>
  );
};

export default OurWorkSector;
