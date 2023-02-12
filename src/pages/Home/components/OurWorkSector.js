import { React } from "react";
import CardWork from "./components/CardWork";
import { Icon } from "@iconify/react";
import { motion, useScroll, useTransform } from "framer-motion";
import ReachUs from "./components/ReachUs";
import { ourWorkData } from "../../../store/helper/OurWork";

const OurWorkSector = () => {
  // const [cardWork, setCardWork] = useState([])
  // useEffect(() => {
  //   fetch("BASE_URL")
  //   .then (res => res.json())
  //   .then (data => {
  //     setCardWork(data)
  //   })
  // }, [])
  // const { scrollYProgress } = useScroll();
  // const scale = useTransform(scrollYProgress, [0, 0.5], [0.8, 1]);

  return (
    // <motion.div style={{ scale }}>
    //   <motion.div
    //     style={{
    //       scaleY: scrollYProgress,
    //     }}
    //   />
    <div className="paddingX paddingBottom w-full z-10">
      <div className="flex flex-col gap-6 md:gap-12">
        <div className="flex flex-col justify-center flex-wrap items-center gap-2">
          <h2 className="text-primary-100">Solutions are Here!</h2>
          <h1 className="">Our Work Sector</h1>
        </div>
        <motion.div
          className="flex flex-wrap justify-around items-center w-full"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 1 }}
          transition={{ delay: 0.3, duration: 0.3 }}
          variants={{
            hidden: { opacity: 0.75, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          {ourWorkData?.map((e) => {
            return (
              <CardWork
                cardIconProps={
                  <Icon icon={e.icon} color="#4c6bdc" width="30" height="30" />
                }
                cardTitleProps={e.label}
              />
            );
          })}
        </motion.div>
      </div>
      <ReachUs />
    </div>
  );
};

export default OurWorkSector;
