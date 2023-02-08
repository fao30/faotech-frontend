import React from "react";
import belinsky1 from "../assets/belinsky1.jpg";
import belinsky2 from "../assets/belinsky2.jpg";
import b2b1 from "../assets/b2b1.jpg";
import b2b2 from "../assets/b2b2.jpg";

export const portfolioData = [
  {
    img1: belinsky1,
    img2: belinsky2,
    title: "Belinsky Production",
    desc: "Given that Belinsky is both a production house and a creative studio, its areas of expertise include producing both photography and filmmaking",
    label: "UI Design & Web Development",
    link: "https://belinskyproduction.com",
  },
  {
    img1: b2b1,
    img2: b2b2,
    title: "B2B-ONE",
    desc: "B2B-ONE.COM is an efficient communication platform for exporters and importers, sellers and buyers of goods and services around the world",
    label: "Big Data & Market Place",
    link: "https://b2b-digital-platform.sector.show/",
  },
];

const CardPortfolio = ({ img1, img2, title, desc, label, link, index }) => {
  return (
    <section
      className={`gap-6 flex flex-wrap justify-between ${
        index % 2 === 0 ? "flex-row" : "flex-row-reverse"
      }`}
    >
      <div className="w-full md:w-[47.5%]">
        <img className="object-cover h-full w-full rounded-2xl" src={img1} />
      </div>
      <div className="w-full md:w-[47.5%] flex flex-col gap-6 justify-between">
        <img
          className="object-cover rounded-2xl h-[65%] shadow-[4px_4px_12px_#c9c9c9]"
          src={img2}
        />
        <div className="gap-2 max-md:px-8  max-md:py-6 px-10 py-8 flex flex-col bg-white rounded-xl shadow-[0px_0px_24px_0px_#bfdbfe] ">
          <h1 className="text-2xl lg:text-3xl text-black font-bold">{title}</h1>
          <p className="text-[#858282] lg:text-xl font-normal">{desc}</p>
          <div className="flex justify-between items-center">
            <label className="text-[#1361DE] lg:text-xl font-semibold">
              {label}
            </label>
            <a
              rel="noreferrer"
              target="_blank"
              href={link}
              className="max-lg:hidden text-white bg-[#1361DE] hover:bg-[#1361DE] border-none normal-case rounded-xl shadow-md font-semibold text-lg px-5 py-2"
            >
              Visit Website
            </a>
          </div>
          <div className="lg:hidden flex justify-center">
            <a
              rel="noreferrer"
              target="_blank"
              href={link}
              className="text-white bg-[#1361DE] hover:bg-[#1361DE] border-none normal-case rounded-xl shadow-md font-semibold text-lg px-5 py-2 w-full text-center mt-2"
            >
              Visit Website
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CardPortfolio;
