import React from "react";
import { useNavigate } from "react-router-dom";
import { Icon } from "@iconify/react";

const Footer = () => {
  const navigate = useNavigate();
  return (
    <div class="bg-base-300 text-base-content">
      <footer class="footer px-12 lg:px-38 py-12 flex flex-wrap justify-between md:px-12">
        <div class="w-4/6">
          <div class="font-title text-black inline-flex text-3xl">
            <span class="font-extrabold">Fao</span> <span>Tech</span>
          </div>
          <p class="text-footer-100">© 2023. All rights reserved.</p>
          <p class="text-footer-100">
            Lets’s create future for your better business
          </p>
        </div>
        <div class="w-96 md:w-96 lg:w-32 pr-12">
          <span class="text-lg">Features</span>
          <a
            onClick={() => {
              navigate("/");
            }}
            class="link link-hover text-footer-100"
          >
            Home
          </a>
          <a
            onClick={() => {
              navigate("/portfolio");
            }}
            class="link link-hover text-footer-100"
          >
            Portfolio
          </a>
          <a
            onClick={() => {
              navigate("/about");
            }}
            class="link link-hover text-footer-100"
          >
            About
          </a>
          <a
            onClick={() => {
              navigate("/contact");
            }}
            class="link link-hover text-footer-100"
          >
            Contact Us
          </a>
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
            <a href class="link link-hover text-gray-500 ml-2">
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
            <a href class="link link-hover text-gray-500 ml-2">
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
              Sovetskiy District, Kazan,
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
