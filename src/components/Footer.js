import React from "react";
import { useNavigate } from "react-router-dom";
import { Icon } from "@iconify/react";
import { footerOptions } from "../store/helper/NavbarOptions";

const Footer = () => {
  const navigate = useNavigate();
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <div class="bg-white text-base-content border-t-2 ">
      <footer class="footer py-12 pl-12 lg:px-40 md:px-[5rem] flex flex-wrap justify-between">
        <div class="w-4/6">
          <div class="font-title text-black inline-flex text-3xl">
            <span class="font-extrabold">Fao</span> <span>Tech</span>
          </div>
          <p class="text-footer-100">© 2023. All rights reserved.</p>
          <p class="text-footer-100">Lets’s</p>
          <div class="flex justify-start items-center ">
            <a
              href="https://www.google.com"
              rel="noreferrer"
              target="_blank"
              class="transition-all transform hover:scale-110"
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
              class="ml-0.5 transition-all transform hover:scale-110"
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
        <div class="w-96 md:w-96 lg:w-32 pr-12 lg:space-y-4">
          <span class="text-lg">Features</span>
          {footerOptions.map((e) => {
            return (
              <a
                href
                onClick={() => {
                  navigate(`${e.to}`);
                  scrollToTop();
                }}
                class=" text-footer-100 link link-hover"
              >
                {e.label}
              </a>
            );
          })}
        </div>
        <div class="w-42 lg:space-y-4">
          <span class="text-lg">Contact</span>
          <div class="flex justify-center items-start">
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
              class="link link-hover text-gray-500 ml-2"
            >
              contact@faotech.com
            </a>
          </div>
          <div class="flex justify-center items-start">
            <Icon
              icon="material-symbols:call"
              color="#757575"
              width="24"
              height="24"
            />
            <a
              href
              rel="noreferrer"
              target="_blank"
              class="link link-hover text-gray-500 ml-2"
            >
              +6287762023382
            </a>
          </div>
          <div class="flex justify-center items-start">
            <Icon
              icon="mdi:home-city-outline"
              color="#757575"
              width="24"
              height="24"
            />
            <a href class="link link-hover text-gray-500 ml-2">
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
