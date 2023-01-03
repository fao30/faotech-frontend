import React from "react";
import useReadingProgress from "./UseReadingProgress";
import { NavLink, useNavigate, useLocation } from "react-router-dom";
import {
  dropdownOptions,
  navbarWithoutContact,
} from "../store/helper/NavbarOptions";

const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  const completion = useReadingProgress();
  let activeClassName =
    "btn bg-transparent hover:bg-transparent border-none rounded-2xl text-primary-100 mx-0.5 normal-case";
  let activeClassNameDropdown = "bg-transparent text-primary-100 my-0.5";
  return (
    <div class="sticky top-0 z-30 h-16 bg-white text-black shadow ">
      <div
        class="navbar flex justify-center lg:px-34 md:px-18 px-2  
      "
      >
        <div class="navbar-start">
          <div
            class={`${
              location.pathname === "/contact"
                ? "hidden"
                : "dropdown lg:hidden md:hidden ml-4"
            }`}
          >
            <label
              tabindex="0"
              class="btn btn-ghost rounded-2xl lg:hidden md:hidden"
            >
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
                        isActive ? activeClassNameDropdown : "my-0.5"
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
            class={`${
              location.pathname === "/contact"
                ? "ml-8 md:ml-3 sm:lg:ml-3 normal-case lg:text-2xl sm:text-2xl text-2xl font-extrabold md:flex lg:flex"
                : "ml-3 normal-case lg:text-2xl sm:text-2xl text-2xl font-extrabold hidden md:flex lg:flex"
            } `}
          >
            Fao<span className="font-semibold normal-case">Tech</span>
          </p>
          <p
            onClick={() => {
              navigate("/");
              scrollToTop();
            }}
            class={`${
              location.pathname === "/contact"
                ? "hidden"
                : "mr-3 normal-case lg:text-2xl sm:text-2xl text-2xl font-extrabold btn btn-ghost md:hidden lg:hidden"
            }`}
          >
            Fao<span className="font-semibold normal-case">Tech</span>
          </p>
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
                            : "btn btn-ghost border-none rounded-2xl mx-0.5 normal-case"
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
                    // href="/#/contact"
                    class="btn btn-ghost rounded-2xl mx-0.5 normal-case border-none  text-black hover:bg-primary-100 hover:text-white active:bg-primary-200 hover:shadow-xl"
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
        <span
          style={{ transform: `translateX(${completion - 100}%)` }}
          class="absolute bg-primary-100 h-1 w-full bottom-0"
        />
      </div>
    </div>
  );
};

export default Navbar;
