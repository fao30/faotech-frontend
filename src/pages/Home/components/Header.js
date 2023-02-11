import { Icon } from "@iconify/react";
import { motion } from "framer-motion";
import { React } from "react";
import { useNavigate } from "react-router-dom";
import CarouselItem from "./components/CarouselItem";

const Header = () => {
  const navigate = useNavigate();
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <div className="paddingX paddingTop paddingBottom xl:paddingTopShorter xl:paddingBottomLonger w-full z-10">
      <div className="w-full flex justify-between flex-wrap items-center gap-y-8">
        {/* HEADER TITLE */}
        <motion.div
          className="w-full lg:w-[45%] flex flex-col gap-2"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 1 }}
          transition={{ delay: 0.3, duration: 0.4 }}
          variants={{
            hidden: { opacity: 0, y: -50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <h2 className="text-primary-100 ">Fast, Trust, Number 1</h2>
          <label className="text-4xl md:text-5xl xl:text-6xl font-bold">
            We Help You Develop Through Digitalization
          </label>
          <p className="text-[#757575] md:mt-4 ">
            faoTech — a technology company engaged in industrial digitization
            located in Kazan. We focus on helping you to digitalize your
            business from the first scratch until a digital product ready to
            use!
          </p>
          <div className="flex justify-center mt-2 md:mt-6">
            <button
              onClick={() => {
                navigate("/contact");
                scrollToTop();
              }}
              className="hover:bg-primary-400 lg:h-16 rounded-2xl bg-primary-100 shadow-xl btn border-none normal-case w-full"
            >
              <p>Start Your Journey</p>
            </button>
          </div>
        </motion.div>

        {/* CAROUSEL */}
        <div className="w-full lg:w-[50%] hover:cursor-ew-resize">
          <div className="carousel carousel-center rounded-box space-x-4">
            <CarouselItem
              carouselPictureProps={require("./components/1.jpg")}
            />
            <CarouselItem
              carouselPictureProps={require("./components/2.jpg")}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
