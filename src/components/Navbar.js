import React from "react";
import { useNavigate } from "react-router-dom";
import ThemeChanger from "./ThemeChanger";
import UseReadingProgress from "./UseReadingProgress";

const Navbar = () => {
  const navigate = useNavigate();
  const completion = UseReadingProgress();
  return (
    <div
      class="
    sticky top-0 z-30  h-16  bg-opacity-90 backdrop-blur transition-all duration-100 
    text-black shadow
    "
    >
      <div class="navbar flex justify-center">
        <div class="navbar-start">
          <div class="dropdown">
            <label tabindex="0" class="btn btn-ghost lg:hidden md:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabindex="0"
              class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-white rounded-box w-52 "
            >
              <li>
                <a
                  onClick={() => {
                    navigate("/");
                  }}
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  onClick={() => {
                    navigate("/about");
                  }}
                >
                  About
                </a>
              </li>
              <li>
                <a
                  onClick={() => {
                    navigate("/portfolio");
                  }}
                >
                  Portfolio
                </a>
              </li>
              <li>
                <a
                  onClick={() => {
                    navigate("/contact");
                  }}
                >
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
          <a
            onClick={() => {
              navigate("/");
            }}
            class="btn btn-ghost normal-case lg:text-2xl sm:text-2xl text-xl font-extrabold font-title"
          >
            Fao<span className="font-semibold">Tech</span>
          </a>
        </div>
        <div class="navbar-end">
          <div class="hidden md:flex lg:flex">
            <ul class="menu menu-horizontal px-1">
              <li>
                <a
                  className="btn btn-ghost normal-case"
                  onClick={() => {
                    navigate("/");
                  }}
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  className="btn btn-ghost normal-case"
                  onClick={() => {
                    navigate("/about");
                  }}
                >
                  About
                </a>
              </li>
              <li>
                <a
                  className="btn btn-ghost normal-case"
                  onClick={() => {
                    navigate("/portfolio");
                  }}
                >
                  Portfolio
                </a>
              </li>
              <li>
                <a
                  className="btn btn-ghost normal-case"
                  onClick={() => {
                    navigate("/contact");
                  }}
                >
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
          {/* <ThemeChanger /> */}
        </div>
        <span
          style={{ transform: `translateX(${completion - 100}%)` }}
          class="absolute bg-black h-1 w-full bottom-0"
        />
      </div>
    </div>
  );
};

export default Navbar;
