import React from "react";
import { useNavigate } from "react-router-dom";
import { Icon } from "@iconify/react";
import { footerOptions } from "../store/helper/NavbarOptions";

const Footer = () => {
  const logo = require("./assets/faoTech.png");
  const navigate = useNavigate();
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <div className="px-[8vw] py-6 md:py-12 bg-white text-base-content border-t-2 ">
      <footer className="footer flex flex-wrap justify-between items-start">
        <div className="w-4/6">
          <h1 className="font-bold text-3xl text-primary-100 shadowit flex justify-center items-center">
            <img src={logo} className="w-7 h-7 items-center mr-1" /> faoTech.
          </h1>
          <p className="text-footer-100">© 2023. All rights reserved.</p>
          <p className="text-footer-100">Lets’s</p>
          <div className="flex justify-start items-center ">
            <a
              href="https://www.google.com"
              rel="noreferrer"
              target="_blank"
              className="transition-all transform hover:scale-110"
            >
              <Icon
                icon="mdi:linkedin"
                color="#757575"
                width="26"
                height="26"
              />
            </a>
            <a
              href="https://www.google.com"
              rel="noreferrer"
              target="_blank"
              className="ml-0.5 transition-all transform hover:scale-110"
            >
              <Icon
                icon="mdi:instagram"
                color="#757575"
                width="26"
                height="26"
              />
            </a>
          </div>
        </div>
        <div className="w-96 md:w-96 lg:w-32 pr-12 lg:space-y-4">
          <span className="text-lg">Features</span>
          {footerOptions.map((e) => {
            return (
              <a
                href
                onClick={() => {
                  navigate(`${e.to}`);
                  scrollToTop();
                }}
                className=" text-footer-100 link link-hover"
              >
                {e.label}
              </a>
            );
          })}
        </div>
        <div className="w-42 lg:space-y-4 items-center">
          <span className="text-lg">Contact</span>
          <div className="flex justify-center items-start">
            <Icon
              icon="material-symbols:mail-outline"
              color="#757575"
              width="24"
              height="24"
            />
            <a
              rel="noreferrer"
              target="_blank"
              href="mailto:contact@faotech.com"
              className="link link-hover text-gray-500 ml-2"
            >
              contact@faotech.com
            </a>
          </div>
          <div className="flex justify-center items-start">
            <Icon
              icon="material-symbols:call"
              color="#757575"
              width="24"
              height="24"
            />
            <a
              href="tel:+6287762023382"
              rel="noreferrer"
              target="_blank"
              className="link link-hover text-gray-500 ml-2"
            >
              +62 877-6202-3382
            </a>
          </div>
          <div className="flex justify-center items-start">
            <Icon
              icon="mdi:home-city-outline"
              color="#757575"
              width="24"
              height="24"
            />
            <a href className="link link-hover text-gray-500 ml-2">
              Jl. Bima Citra 16 No. 2,
              <br />
              Tambun, Bekasi,
              <br />
              West Java, Indonesia
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
