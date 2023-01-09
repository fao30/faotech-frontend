import { React } from "react";
import CardWork from "./components/CardWork";
import { Icon } from "@iconify/react";
import { motion, useScroll, useTransform } from "framer-motion";
import ReachUs from "./components/ReachUs";

const OurWorkSector = () => {
  // const [cardWork, setCardWork] = useState([])
  // useEffect(() => {
  //   fetch("BASE_URL")
  //   .then (res => res.json())
  //   .then (data => {
  //     setCardWork(data)
  //   })
  // }, [])
  const { scrollYProgress } = useScroll();
  const scale = useTransform(scrollYProgress, [0, 0.5], [0.8, 1]);

  return (
    // <motion.div style={{ scale }}>
    //   <motion.div
    //     style={{
    //       scaleY: scrollYProgress,
    //     }}
    //   />
    <div class="px-[8vw] my-[6vw] lg:my-[8vw] w-full z-10">
      <div class="flex flex-col justify-center flex-wrap items-center mb-12">
        <h2 class="text-[28px] text-primary-100 font-bold max-sm:mt-6">
          Solutions are Here!
        </h2>
        <h1 class="text-4xl md:lg:text-5xl font-bold text-black text-center">
          Our Work Sector
        </h1>
      </div>
      <div class="flex flex-wrap justify-around items-center w-full">
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
          cardTitleProps={"Mobile Development"}
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
      <ReachUs />
    </div>
  );
};

export default OurWorkSector;
