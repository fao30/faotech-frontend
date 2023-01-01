import React from "react";
import { useNavigate } from "react-router-dom";

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
            <img
              class="w-6 h-auto"
              src="https://cdn-icons-png.flaticon.com/512/542/542689.png"
            />
            <a href class="link link-hover text-gray-500 ml-2">
              contact@faotech.com
            </a>
          </div>
          <div class="flex justify-center items-start">
            <img
              class="w-6"
              src="https://cdn-icons-png.flaticon.com/512/455/455705.png"
            />
            <a href class="link link-hover text-gray-500 ml-2">
              +79246246378
            </a>
          </div>
          <div class="flex justify-center items-start">
            <img
              class="w-6"
              src="https://cdn-icons-png.flaticon.com/512/5616/5616461.png"
            />
            <a href class="link link-hover text-gray-500 ml-2">
              Jl. Meridiannaya No.3, Sovetsky Rayon, Kota Kazan, Respublik
              Tatarstan, Russia
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
