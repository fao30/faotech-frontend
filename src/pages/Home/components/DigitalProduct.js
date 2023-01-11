import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const DigitalProduct = () => {
  const { scrollYProgress } = useScroll();
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.8]);
  return (
    // <motion.div style={{ scale }}>
    //   <motion.div
    //     style={{
    //       scaleY: scrollYProgress,
    //     }}
    //   />
    <div className="px-[8vw] my-[6vw] lg:my-[8vw] w-full z-10">
      {/* HEADER TITLE, Digital Product Made By Us*/}
      <motion.div
        className="flex justify-between flex-wrap items-center mb-12 md:mb-24"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 1 }}
        transition={{ delay: 0.2, duration: 0.3 }}
        variants={{
          hidden: { opacity: 0, y: 50 },
          visible: { opacity: 1, y: 0 },
        }}
      >
        <div className="w-full md:w-[40%] max-sm:mt-6">
          <h1 className="md:lg:text-5xl text-4xl font-bold text-black">
            Digital Product Made By Us For Your Business Transformation
          </h1>
        </div>
        <div className=" w-80 text-[#757575] text-[16px] max-md:mt-6">
          <h3 className="text-[16px] md:text-[20px]">
            We experienced in digitalizing various business and enterprises
            across industries with our product.
          </h3>
        </div>
      </motion.div>
      {/* Communication Platform for Business to Business Partners */}
      <div className="flex justify-center lg:justify-between flex-wrap items-center">
        {/* HEADER TITLE */}
        <motion.div
          className="w-full lg:w-[40%]"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 1 }}
          transition={{ delay: 0.2, duration: 0.3 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <h3 className="md:lg:text-3xl text-xl font-semibold text-black">
            Communication Platform for Business to Business Partners
          </h3>
          <div className=" text-[#757575] mt-6">
            <h3 className="text-[16px] md:text-[20px] ">
              B2B-ONE.COM — it's an effective platform for communication between
              exporters and importers, sellers and buyers of goods and services
              around the world. Find a partner, conduct video negotiations and
              agree on a good deal!
            </h3>
          </div>
        </motion.div>
        <img
          alt="b2b"
          className="hidden lg:flex w-full lg:w-6/12 transition-all transform hover:scale-125 hover:cursor-zoom-in mt-12 lg:mt-0"
          src={require("./components/b2b.png")}
        ></img>
      </div>
      {/* IMG FOR MOBILE PHONES */}
      <div className="flex justify-center">
        <img
          alt="b2b"
          className="md:lg:hidden w-full transition-all transform hover:scale-[1.15] hover:cursor-zoom-in mt-12"
          src={require("./components/b2b.png")}
        ></img>
      </div>
    </div>
  );
};

export default DigitalProduct;
