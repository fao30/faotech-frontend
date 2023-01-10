import { React } from "react";
import useReadingProgress from "./UseReadingProgress";
import { NavLink, useNavigate, useLocation } from "react-router-dom";
import {
  dropdownOptions,
  navbarWithoutContact,
} from "../store/helper/NavbarOptions";
import "../custom.css";

const Navbar = () => {
  const logo = require("./assets/faoTech.png");
  const location = useLocation();
  const navigate = useNavigate();
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  // const completion = useReadingProgress();
  let activeClassName =
    "btn bg-transparent hover:bg-transparent border-none rounded-2xl text-primary-100 mx-0.5 normal-case";
  let activeClassNameDropdown = "bg-transparent text-primary-100 my-0.5";
  return (
    <div class="px-[3vw] md:px-[8vw] z-30 sticky top-0 h-16 bg-white text-black shadow navbar flex justify-center ">
      <div class="navbar-start">
        <div
          class={`${
            location.pathname === "/contact" ? "hidden" : "dropdown md:hidden"
          }`}
        >
          <label tabindex="0" class="btn btn-ghost rounded-2xl">
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
            class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-white hover:bg-white rounded-box w-52 "
          >
            <li>
              {dropdownOptions.map((e) => {
                return (
                  <NavLink
                    to={e.to}
                    className={({ isActive }) =>
                      isActive
                        ? activeClassNameDropdown
                        : "my-0.5 text-[#393737] active:bg-primary-100 active:text-white"
                    }
                    onClick={() => {
                      scrollToTop();
                    }}
                  >
                    {e.label}
                  </NavLink>
                );
              })}
            </li>
          </ul>
        </div>
        <p
          class={`
          ${
            location.pathname === "/contact"
              ? "max-md:ml-[4.5vw]"
              : "md:flex hidden"
          } `}
        >
          <h1 class="font-bold text-3xl text-primary-100 shadowit flex justify-center items-center">
            <img src={logo} class="w-7 h-7 items-center mr-1" /> faoTech.
          </h1>
        </p>
        <a
          onClick={() => {
            navigate("/");
            scrollToTop();
          }}
          class={` ${
            location.pathname === "/contact"
              ? "hidden"
              : "btn btn-ghost md:hidden normal-case"
          }`}
        >
          <h1 class="font-bold text-3xl text-primary-100 shadowit flex justify-center items-center">
            <img src={logo} class="w-7 h-7 items-center mr-1" /> faoTech.
          </h1>
        </a>
      </div>
      <div class="navbar-end">
        <div class={`${location.pathname === "/contact" ? "hidden" : ""}`}>
          <div class="hidden md:flex lg:flex">
            <ul class=" menu-horizontal">
              <li>
                {navbarWithoutContact.map((e) => {
                  return (
                    <NavLink
                      to={e.to}
                      className={({ isActive }) =>
                        isActive
                          ? activeClassName
                          : "btn btn-ghost hover:bg-transparent border-none rounded-2xl mx-0.5 normal-case text-[#393737] "
                      }
                      onClick={() => {
                        scrollToTop();
                      }}
                    >
                      {e.label}
                    </NavLink>
                  );
                })}
                <a
                  href
                  class="btn btn-ghost rounded-2xl mx-0.5 normal-case border-none  text-[#393737] hover:bg-primary-100 hover:text-white active:bg-primary-200 hover:shadow-xl"
                  onClick={() => {
                    navigate("/contact");
                    scrollToTop();
                  }}
                >
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      {/* <span
        style={{ transform: `translateX(${completion - 100.1}%)` }}
        class="absolute bg-primary-100 h-1 w-full bottom-0"
      /> */}
    </div>
  );
};

export default Navbar;
