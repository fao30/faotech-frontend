import { Icon } from "@iconify/react";
import { motion } from "framer-motion";
import { React } from "react";
import { useNavigate } from "react-router-dom";
import CarouselItem from "./components/CarouselItem";

// from-white to-blue-200  bg-gradient-to-r

const Header = () => {
  const navigate = useNavigate();
  return (
    <div class="px-[8vw] my-[6vw] lg:my-[8vw] w-full z-10">
      <div class="w-full flex justify-between flex-wrap items-center">
        {/* HEADER TITLE */}
        <div class="w-full md:w-[40%]">
          <motion.div
            initial={{ y: "-20%" }}
            animate={{ y: "calc(100% - 100%)" }}
          >
            <h2 class="text-[28px] mb-2 text-primary-100 font-bold">
              Fast, Trust, Number 1
            </h2>
            <h1 class="md:lg:text-5xl text-4xl font-bold text-black">
              We Help You Develop Through Digitalization
            </h1>
            <h1 class="text-l my-6 text-[#757575] text-[16px] md:text-[20px]">
              FaoTech — a technology company engaged in industrial digitization
              located in Kazan. We focus on helping you to digitalize your
              business from the first scratch until a digital product ready to
              use!
            </h1>
          </motion.div>
          <div class="flex justify-center">
            <button
              onClick={() => {
                navigate("/contact");
              }}
              class="text-white  hover:bg-primary-400 rounded-2xl bg-primary-100 shadow-xl btn border-none normal-case w-full mb-12 lg:mb-0"
            >
              Start Your Journey
            </button>
          </div>
        </div>
        {/* DON'T DELETE CODES BELOW */}
        {/* BACKGROUND */}
        {/* <div class="hidden lg:md:sm:flex absolute w-7/12 top-20 h-full right-0 bg-primary-300 blur-3xl rounded-tl-full"></div>
          <div class="md:lg:hidden w-1/5 h-2/5 top-3/4 right-0 absolute rounded-2xl bg-blue-100 blur-3xl"></div> */}
        {/* carousel */}
        <div class="w-full md:w-[55%] transition-all transform hover:scale-110 hover:cursor-ew-resize">
          <div class="carousel carousel-center rounded-box space-x-4">
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
        {/* <div class="w-full  justify-center mt-1 max-md:flex hidden">
          <Icon
            icon="ic:outline-view-carousel"
            width="25"
            height="25"
            hFlip={true}
          />
        </div> */}
      </div>
    </div>
  );
};

export default Header;
