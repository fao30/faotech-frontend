import React from "react";
import UseReadingProgress from "./UseReadingProgress";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const completion = UseReadingProgress();
  let activeClassName =
    "btn bg-primary-100 hover:bg-primary-200 border-none rounded-2xl hover:bg-primary-200 text-white mx-0.5 normal-case";
  let activeClassNameDropdown =
    "bg-primary-100 text-white hover:bg-primary-200 my-0.5";
  return (
    <div
      class="
    sticky top-0 z-30  h-16 backdrop-blur bg-white 
    text-black shadow
    "
    >
      <div
        class="navbar flex justify-center lg:px-34 md:px-8 px-2
      "
      >
        <div class="navbar-start">
          <div class="dropdown">
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
                <NavLink
                  to="/"
                  end
                  className={({ isActive }) =>
                    isActive ? activeClassNameDropdown : "my-0.5"
                  }
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/about"
                  className={({ isActive }) =>
                    isActive ? activeClassNameDropdown : "my-0.5"
                  }
                >
                  About
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/portfolio"
                  className={({ isActive }) =>
                    isActive ? activeClassNameDropdown : "my-0.5"
                  }
                >
                  Portfolio
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/contact"
                  className={({ isActive }) =>
                    isActive ? activeClassNameDropdown : "my-0.5"
                  }
                >
                  Contact Us
                </NavLink>
              </li>
            </ul>
          </div>
          <a class="ml-3 normal-case lg:text-2xl sm:text-2xl text-2xl font-extrabold ">
            Fao<span className="font-semibold normal-case">Tech</span>
          </a>
        </div>
        <div class="navbar-end">
          <div class="hidden md:flex lg:flex">
            <ul class=" menu-horizontal">
              <li>
                <NavLink
                  to="/"
                  end
                  className={({ isActive }) =>
                    isActive
                      ? activeClassName
                      : "btn btn-ghost border-none rounded-2xl mx-0.5 normal-case"
                  }
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/about"
                  className={({ isActive }) =>
                    isActive
                      ? activeClassName
                      : "btn btn-ghost border-none rounded-2xl mx-0.5 normal-case"
                  }
                >
                  About
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/portfolio"
                  className={({ isActive }) =>
                    isActive
                      ? activeClassName
                      : "btn btn-ghost border-none rounded-2xl mx-0.5 normal-case"
                  }
                >
                  Portfolio
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/contact"
                  className={({ isActive }) =>
                    isActive
                      ? activeClassName
                      : "btn btn-ghost border-none rounded-2xl mx-0.5 normal-case"
                  }
                >
                  Contact Us
                </NavLink>
              </li>
            </ul>
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
