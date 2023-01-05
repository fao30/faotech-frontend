import { motion } from "framer-motion";
import { React } from "react";
import CarouselItem from "./components/CarouselItem";

// from-white to-blue-200  bg-gradient-to-r

const Header = () => {
  return (
    <div class="grid place-items-center items-end">
      <div class="my-6 lg:my-40 z-10">
        <div class="flex lg:justify-around justify-center flex-wrap items-center">
          {/* HEADER TITLE */}
          <div class="z-20 mx-10 lg:pl-[3.7rem] w-full lg:w-[39rem] md:w-4/5">
            <motion.div
              initial={{ x: "-20%" }}
              animate={{ x: "calc(100% - 100%)" }}
            >
              <h1 class="text-[30px] my-2 text-primary-100 font-bold">
                Fast, Trust, Number 1
              </h1>
              <h1 class="md:lg:text-6xl text-4xl font-bold text-black">
                We Help You Develop Through Digitalization
              </h1>
              <h1 class="text-l my-6 text-[#757575] text-[16px] lg:text-[20px]">
                FaoTech — a technology company engaged in industrial
                digitization located in Kazan. We focus on helping you to
                digitalize your business from the first scratch until a digital
                product ready to use!
              </h1>
            </motion.div>
            <div class="flex justify-start">
              <button class="text-white  hover:bg-primary-400 rounded-2xl bg-primary-100 shadow-xl btn border-none normal-case w-full lg:w-[32rem] mb-12 lg:mb-0">
                Start Your Journey
              </button>
            </div>
          </div>
          {/* DON'T DELETE CODES BELOW */}
          {/* BACKGROUND */}
          {/* <div class="hidden lg:md:sm:flex absolute w-7/12 top-20 h-full right-0 bg-primary-300 blur-3xl rounded-tl-full"></div>
          <div class="md:lg:hidden w-1/5 h-2/5 top-3/4 right-0 absolute rounded-2xl bg-blue-100 blur-3xl"></div> */}
          {/* carousel */}
          <div class="z-10 mx-10 rounded-box w-full md:w-4/5 lg:w-2/5 bg-transparent transition-all transform hover:scale-110 hover:cursor-ew-resize">
            <div class=" carousel carousel-center w-full  rounded-box space-x-4">
              <CarouselItem
                carouselPictureProps={require("./components/screenHeader.jpeg")}
              />
              <CarouselItem
                carouselPictureProps={require("./components/screenHeader.jpeg")}
              />
              <CarouselItem
                carouselPictureProps={require("./components/screenHeader.jpeg")}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
