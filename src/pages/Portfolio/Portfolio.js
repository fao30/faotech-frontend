import { motion } from "framer-motion";
import React from "react";
import Header from "../Home/components/Header";
import CardProfileBelinsky from "./components/CardProfileBelinsky";

const Portfolio = () => {
  return (
    <div className="flex flex-col justify-around">
      <div class="flex lg:justify-around justify-center flex-wrap items-center">
        <h1 class="text-2xl  font-intern text-[#393737] text-center">
          Our Portofolio
          <h2 className="text-3xl font-intern text-[#1362DE] text-center">
            Product Made by Us
          </h2>
        </h1>
      </div>
      <CardProfileBelinsky
        cardDescProps={
          "Given that Belinsky is both a production house and a creative studio, its areas of expertise include producing both photography and filmmaking"
        }
        cardTitleProps={"Turun Tangan"}
        cardNameProps={"UI Design & Development"}
      />
      <CardProfileBelinsky
        cardDescProps={
          "Given that Belinsky is both a production house and a creative studio, its areas of expertise include producing both photography and filmmaking"
        }
        cardTitleProps={"Belinsky Production"}
        cardNameProps={"UI Design & Development"}
      />
    </div>
  );
};

export default Portfolio;
