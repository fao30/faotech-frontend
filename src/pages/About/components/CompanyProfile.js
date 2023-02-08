import { motion } from "framer-motion";
import { React } from "react";
import CardCompany from "./CardCompany";

const CompanyProfile = () => {
  return (
    <div className="paddingX paddingBottomLonger w-full z-10">
      <motion.div
        className="flex justify-center flex-col items-center text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ delay: 0.3, duration: 0.3 }}
        variants={{
          hidden: { opacity: 0.5, scale: 0.5 },
          visible: { opacity: 1, scale: 1 },
        }}
      >
        <h1 className="md:lg:text-5xl text-4xl font-bold text-[#1363DF] ">
          Our Company Philosophy
        </h1>
        <p className=" lg:w-[70%] text-[#757575] mt-4 text-[16px] md:text-[20px]">
          We are obliged to fulfill the maximum potential of your enterprises
          and business. Conduct research on every variable that exists,
          determine the direction in solving problems, generate ideas in
          progress development, and create digital products as a complete
          solution.
        </p>
      </motion.div>
      <motion.div
        className="w-full mt-4 lg:mt-24 flex justify-around flex-wrap items-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 1 }}
        transition={{ delay: 0.3, duration: 0.3 }}
        variants={{
          hidden: { opacity: 0, y: 50 },
          visible: { opacity: 1, y: 0 },
        }}
      >
        <CardCompany
          cardDescProps={
            "Creating era of digitalization for industry at any level of society in order to develop together and living the  best future together"
          }
          cardTitleProps={"Vision"}
        />
        <CardCompany
          cardDescProps={
            "Becoming client partner in technology reformation in achieving the highest potential of company performance"
          }
          cardTitleProps={"Mission"}
        />
      </motion.div>
    </div>
  );
};

export default CompanyProfile;
