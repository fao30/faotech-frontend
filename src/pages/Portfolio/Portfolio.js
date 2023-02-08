import { motion } from "framer-motion";
import React from "react";
import CardPortfolio, { portfolioData } from "./components/CardPortfolio";

const Portfolio = () => {
  return (
    <section className="paddingX paddingBottomLonger z-10">
      <motion.div
        className="w-full items-center text-center paddingYShorter"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 1 }}
        transition={{ delay: 0.3, duration: 0.4 }}
        variants={{
          hidden: { opacity: 0, y: -50 },
          visible: { opacity: 1, y: 0 },
        }}
      >
        <h2 className="text-[28px] text-black font-bold">Our Portfolio</h2>
        <h1 className="md:lg:text-5xl text-4xl font-bold text-[#1363DF]">
          Product Made by Us
        </h1>
      </motion.div>
      <div className="flex flex-col gap-16">
        {portfolioData?.map((e, index) => {
          return (
            <CardPortfolio
              index={index}
              img1={e?.img1}
              img2={e?.img2}
              title={e?.title}
              desc={e?.desc}
              link={e?.link}
              label={e?.label}
            />
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
