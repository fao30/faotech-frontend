import { React, useState, useRef, useEffect } from "react";
import useReadingProgress from "./UseReadingProgress";
import { NavLink, useNavigate, useLocation } from "react-router-dom";
import {
  dropdownOptions,
  navbarWithoutContact,
} from "../store/helper/NavbarOptions";

const Navbar = () => {
  const [dropdownOpened, setDropdownOpened] = useState(false);
  const dropdownMenu = useRef(null);
  const dropdownMenuButton = useRef(null);
  useEffect(() => {
    if (!dropdownOpened) {
      document.activeElement.blur();
    } else if (
      dropdownOpened &&
      !dropdownMenu.current.contains(document.activeElement)
    ) {
      setDropdownOpened(false);
    }
  }, [dropdownOpened]);
  const logo = require("./assets/faoTech.png");
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
    "pSmaller btn bg-transparent hover:bg-transparent border-none rounded-2xl text-primary-100 mx-0.5 normal-case";
  let activeClassNameDropdown =
    "pSmaller bg-transparent text-primary-100 my-0.5";
  return (
    <div
      className={`md:paddingX z-30 sticky top-0 h-16 bg-white  shadow navbar flex justify-center ${
        location.pathname === "/contact" ? "paddingX" : ""
      }`}
    >
      <div className="navbar-start">
        <div
          className={`${
            location.pathname === "/contact" ? "hidden" : "dropdown md:hidden"
          }`}
          ref={dropdownMenu}
        >
          <label
            ref={dropdownMenuButton}
            onBlur={(e) => {
              setDropdownOpened(false);
            }}
            onClick={(e) => {
              if (dropdownOpened) {
                setDropdownOpened(false);
              } else {
                setDropdownOpened(true);
              }
            }}
            tabindex="0"
            className="btn px-5 btn-ghost rounded-2xl hover:bg-transparent"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
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
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-white hover:bg-white rounded-box w-52 "
            onBlur={(e) => {
              dropdownMenuButton.current.focus();
            }}
            onFocus={(e) => {
              setDropdownOpened(true);
            }}
          >
            <li>
              {dropdownOptions?.map((e) => {
                return (
                  <NavLink
                    to={e.to}
                    className={({ isActive }) =>
                      isActive
                        ? activeClassNameDropdown
                        : "my-0.5 #393737] active:bg-primary-100 pSmaller"
                    }
                    onClick={() => {
                      scrollToTop();
                      if (dropdownOpened) {
                        setDropdownOpened(false);
                      } else {
                        setDropdownOpened(true);
                      }
                    }}
                    ref={dropdownMenuButton}
                  >
                    {e.label}
                  </NavLink>
                );
              })}
            </li>
          </ul>
        </div>
        <p
          className={`
          ${location.pathname === "/contact" ? "" : "md:flex hidden"} `}
        >
          <label className="text-3xl font-bold  text-primary-100 shadowit flex justify-center items-center">
            <img src={logo} className="w-7 h-7 items-center mr-1" /> faoTech.
          </label>
        </p>
        <a
          onClick={() => {
            navigate("/");
            scrollToTop();
          }}
          className={` ${
            location.pathname === "/contact"
              ? "hidden"
              : "btn btn-ghost md:hidden normal-case px-0 hover:bg-transparent"
          }`}
        >
          <label className="text-3xl font-bold   text-primary-100 shadowit flex justify-center items-center">
            <img src={logo} className="w-7 h-7 items-center mr-1" /> faoTech.
          </label>
        </a>
      </div>
      <div className="navbar-end">
        <div className={`${location.pathname === "/contact" ? "hidden" : ""}`}>
          <div className="hidden md:flex lg:flex">
            <ul className=" menu-horizontal">
              <li>
                {navbarWithoutContact?.map((e) => {
                  return (
                    <NavLink
                      to={e.to}
                      className={({ isActive }) =>
                        isActive
                          ? activeClassName
                          : "pSmaller btn btn-ghost hover:bg-transparent border-none rounded-2xl mx-0.5 normal-case #393737] "
                      }
                      onClick={() => {
                        scrollToTop();
                      }}
                    >
                      {e.label}
                    </NavLink>
                  );
                })}
                <li
                  href
                  className="pSmaller btn btn-ghost rounded-2xl mx-0.5 normal-case border-none  text-[#393737] hover:bg-primary-100 hover:text-white active:bg-primary-200 hover:shadow-xl"
                  onClick={() => {
                    navigate("/contact");
                    scrollToTop();
                  }}
                >
                  Contact Us
                </li>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <span
        style={{ transform: `translateX(${completion - 100.1}%)` }}
        className="absolute bg-primary-100 h-1 w-full bottom-0"
      />
    </div>
  );
};

export default Navbar;
