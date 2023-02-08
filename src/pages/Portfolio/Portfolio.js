import React from "react";
import Header from "../Home/components/Header";
import CardPortofolio, { cardImage } from "./components/CardPortofolio";
import CardProfileBelinsky from "./components/CardProfileBelinsky";

const Portfolio = () => {
  return (
    <section className="paddingX z-10">
      <div class="  w-full items-center text-center">
        <h1 class="text-2xl  font-bold text-[#393737] text-center">
          Our Portofolio
          <h2 className="text-3xl font-bold text-[#1362DE] text-center">
            Product Made by Us
          </h2>
        </h1>
      </div>
      {cardImage?.map((e) => {
        return (
          <CardPortofolio
            img1={e?.img1}
            img2={e?.img2}
            title={e?.title}
            desc={e?.desc}
            label={e?.label}
          />
        );
      })}
    </section>
  );
};

export default Portfolio;
