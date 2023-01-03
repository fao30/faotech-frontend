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
    <div class="bg-white text-base-content lg:mx-0 md:mx-9">
      <footer class="footer px-12 lg:px-56 py-12 flex flex-wrap justify-between md:px-12">
        <div class="w-4/6">
          <div class="font-title text-black inline-flex text-3xl">
            <span class="font-extrabold">Fao</span> <span>Tech</span>
          </div>
          <p class="text-footer-100">© 2023. All rights reserved.</p>
          <p class="text-footer-100">
            Lets’s create future for your better business
          </p>
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
        <div class="w-96 md:w-96 lg:w-32 pr-12">
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
        <div class="w-56">
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
              +79246246378
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
              Meridiannaya Street 3,
              <br />
              Sovetsky City District, Kazan,
              <br />
              Republic of Tatarstan, Russia
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
