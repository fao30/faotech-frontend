import { motion } from "framer-motion";
import React from "react";
import { Helmet } from "react-helmet";
import CardPortfolio, { portfolioData } from "./components/CardPortfolio";

const Portfolio = ({ title }) => {
  return (
    <section className="paddingBottomLonger z-10 from-white via-white to-[#e7f0f7] bg-gradient-to-tr">
      <Helmet>
        <title>{title}</title>
      </Helmet>
      <motion.div
        className="w-full items-center text-center paddingY md:paddingYShorter"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 1 }}
        transition={{ delay: 0.3, duration: 0.4 }}
        variants={{
          hidden: { opacity: 0, y: -50 },
          visible: { opacity: 1, y: 0 },
        }}
      >
        <h2>Our Portfolio</h2>
        <h1 className="text-[#1363DF]">Product Made by Us</h1>
      </motion.div>
      <div className="paddingX flex flex-col gap-16">
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
              alt={e?.alt}
            />
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
