import { Icon } from "@iconify/react";
import { motion } from "framer-motion";
import { React } from "react";
import { useNavigate } from "react-router-dom";
import CarouselItem from "./components/CarouselItem";

const Header = () => {
  const navigate = useNavigate();
  return (
    <div class="px-[8vw] my-[6vw] lg:my-[8vw] w-full z-10">
      <div class="w-full flex justify-between flex-wrap items-center">
        {/* HEADER TITLE */}
        <motion.div
          class="w-full md:w-[40%]"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 1 }}
          transition={{ delay: 0.25, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: -50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <h2 class="text-[28px] mb-2 text-primary-100 font-bold">
            Fast, Trust, Number 1
          </h2>
          <h1 class="md:lg:text-5xl text-4xl font-bold text-black">
            We Help You Develop Through Digitalization
          </h1>
          <h1 class="text-l my-6 text-[#757575] text-[16px] md:text-[20px]">
            faoTech — a technology company engaged in industrial digitization
            located in Kazan. We focus on helping you to digitalize your
            business from the first scratch until a digital product ready to
            use!
          </h1>
          <div class="flex justify-center">
            <button
              onClick={() => {
                navigate("/contact");
              }}
              class="text-white  hover:bg-primary-400 rounded-2xl bg-primary-100 shadow-xl btn border-none normal-case w-full mb-12 md:mb-0"
            >
              Start Your Journey
            </button>
          </div>
        </motion.div>

        {/* CAROUSEL */}
        <div class="w-full md:w-[55%] transition-all transform hover:scale-110 hover:cursor-ew-resize">
          <div class="carousel carousel-center rounded-box space-x-4">
            {" "}
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
  );
};

export default Header;
