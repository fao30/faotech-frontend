import React from "react";
import useReadingProgress from "../../../components/UseReadingProgress";

const NavbarContact = () => {
  const completion = useReadingProgress();
  return (
    <div class="sticky top-0 z-30 h-16 bg-white text-black shadow ">
      <div
        class="navbar flex justify-center lg:px-34 md:px-9 px-9 
    "
      >
        <div class="navbar-start">
          <p class="ml-3 normal-case lg:text-2xl sm:text-2xl text-2xl font-extrabold">
            Fao<span className="font-semibold normal-case">Tech</span>
          </p>
        </div>
        <div class="navbar-end"></div>

        <span
          style={{ transform: `translateX(${completion - 100}%)` }}
          class="absolute bg-primary-100 h-1 w-full bottom-0"
        />
      </div>
    </div>
  );
};

export default NavbarContact;
