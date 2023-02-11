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
    <div className="paddingX paddingBottom w-full z-10 flex flex-col gap-y-6 md:gap-y-12">
      {/* HEADER TITLE, Digital Product Made By Us*/}
      <motion.div
        className="gap-2 flex justify-between flex-wrap items-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 1 }}
        transition={{ delay: 0.3, duration: 0.3 }}
        variants={{
          hidden: { opacity: 0, y: 50 },
          visible: { opacity: 1, y: 0 },
        }}
      >
        <h1 className="w-full md:w-[50%]">
          Digital Product Made By Us For Your Business Transformation
        </h1>
        <p className="text-[#757575] w-full md:w-[30%]">
          We experienced in digitalizing various business and enterprises across
          industries with our product.
        </p>
      </motion.div>
      {/* Communication Platform for Business to Business Partners */}
      {/* IMG FOR MOBILE PHONES */}
      <div className="flex justify-center">
        <img
          alt="b2b"
          className="md:lg:hidden w-full transition-all transform hover:scale-[1.15] hover:cursor-zoom-in"
          src={require("./components/b2b.png")}
        ></img>
      </div>
      <div className="flex justify-center lg:justify-between flex-wrap items-center">
        {/* HEADER TITLE */}
        <motion.div
          className="w-full lg:w-[40%]"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 1 }}
          transition={{ delay: 0.3, duration: 0.3 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <div className=" flex flex-col gap-2">
            <h2>Communication Platform for Business to Business Partners</h2>
            <p className="text-[#757575]">
              B2B-ONE.COM — it's an effective platform for communication between
              exporters and importers, sellers and buyers of goods and services
              around the world. Find a partner, conduct video negotiations and
              agree on a good deal!
            </p>
          </div>
        </motion.div>
        <img
          alt="b2b"
          className="hidden lg:flex w-full lg:w-6/12 transition-all transform hover:scale-125 hover:cursor-zoom-in mt-12 lg:mt-0"
          src={require("./components/b2b.png")}
        ></img>
      </div>
    </div>
  );
};

export default DigitalProduct;
