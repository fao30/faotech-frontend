import React from "react";
import ThemeChanger from "./ThemeChanger";

const Navbar = () => {
  return (
    <div
      class="
    sticky top-0 z-30 flex h-16 w-full justify-center bg-opacity-90 backdrop-blur transition-all duration-100 
    text-primary-content shadow
    "
    >
      <div class="navbar">
        <div class="navbar-start">
          <div class="dropdown">
            <label tabindex="0" class="btn btn-ghost lg:hidden">
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
              class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52  text-base-content"
            >
              <li>
                <a>Home</a>
              </li>
              <li>
                <a>About</a>
              </li>
              <li>
                <a>Jobs</a>
              </li>
            </ul>
          </div>
          <a class="btn btn-ghost normal-case lg:text-2xl sm:text-2xl text-xl font-extrabold font-title">
            Fao<span className="font-semibold">Tech</span>
          </a>
        </div>
        <div class="navbar-end">
          <div class="hidden lg:flex">
            <ul class="menu menu-horizontal px-1">
              <li>
                <a className="btn btn-ghost normal-case">Home</a>
              </li>
              <li>
                <a className="btn btn-ghost normal-case">About</a>
              </li>
              <li>
                <a className="btn btn-ghost normal-case">Jobs</a>
              </li>
            </ul>
          </div>
          <ThemeChanger />
          <a class="btn ml-2 btn-info font-bold normal-case">Book a Meeting</a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
