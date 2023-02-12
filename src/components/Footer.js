import React from "react";
import { useNavigate } from "react-router-dom";
import { Icon } from "@iconify/react";
import { footerOptions } from "../store/helper/NavbarOptions";
import logo from "./assets/faoTech.png";

const Footer = () => {
  const contactData = [
    {
      icon: "material-symbols:mail-outline",
      label: "partnership@faotech.dev",
      href: "mailto:partnership@faotech.dev",
    },
    {
      icon: "material-symbols:call",
      label: "+62 877-6202-3382",
      href: "tel:+6287762023382",
    },
    {
      icon: "mdi:home-city-outline",
      label: "Jl. Bima Citra 16 No. 2, Tambun, Bekasi, West Java, Indonesia",
    },
  ];
  const navigate = useNavigate();
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <footer className="paddingX paddingY md:paddingX md:paddingYShorter2 border-t-2">
      <div className="flex justify-between flex-wrap gap-y-6">
        <div className="w-full lg:w-[50%] xl:w-[55%] 2xl:w-[60%] flex flex-col gap-y-2">
          <div className="flex items-center">
            <img src={logo} className="w-7 h-7 items-center mr-1" />
            <label className="text-3xl font-bold   text-primary-100 shadowit">
              faoTech.
            </label>
          </div>
          <p className="text-footer-100 pSmaller">
            © 2023. All rights reserved.
          </p>
          <div className="flex items-center">
            <a
              href="https://www.linkedin.com/company/faotech/"
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
              href="https://www.instagram.com/faotech/"
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
        <div className="flex justify-between gap-y-6 flex-wrap w-full lg:w-[45%] xl:w-[40%] 2xl:w-[35%]">
          <div className="flex flex-col gap-y-2 lg:gap-y-4 w-full md:w-[45%] lg:w-[30%] xl:w-[45%]">
            <p>Features</p>
            {footerOptions?.map((e) => {
              return (
                <a
                  className="text-footer-100 cursor-pointer hover:underline"
                  onClick={() => {
                    navigate(`${e.to}`);
                    scrollToTop();
                  }}
                >
                  {e.label}
                </a>
              );
            })}
          </div>
          <div className="flex flex-col  gap-y-2 lg:gap-y-4 w-[70%] md:w-[45%] lg:w-[55%] xl:w-[45%]">
            <p>Contact</p>
            {contactData?.map((e) => {
              return (
                <a
                  className={`flex flex-row gap-x-2 text-footer-100 ${
                    e?.href ? "hover:underline" : ""
                  }`}
                  rel="noreferrer"
                  target="_blank"
                  href={e?.href}
                >
                  <span>
                    <Icon
                      icon={e?.icon}
                      color="#757575"
                      width="24"
                      height="24"
                    />
                  </span>{" "}
                  {e?.label}
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
