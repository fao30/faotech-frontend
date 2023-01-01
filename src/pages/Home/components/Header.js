import { motion } from "framer-motion";
import { React } from "react";
// from-white to-blue-200  bg-gradient-to-r

const Header = () => {
  return (
    <div class="text-primary-content grid place-items-center items-end">
      <div class="my-10 lg:my-20">
        <div class="flex lg:justify-around justify-center flex-wrap items-center">
          <div class="mx-10 w-full lg:w-96">
            <motion.div
              initial={{ x: "-20%" }}
              animate={{ x: "calc(100% - 100%)" }}
            >
              <h1 class="text-xl my-2 text-primary-100 font-bold">
                Fast, Trust, Number 1
              </h1>
              <h1 class="text-5xl font-bold text-black">
                We Help You Develop Through Digitalization
              </h1>
              <h1 class="text-l my-6 text-gray-500">
                FaoTech - Technology Company engaged in industrial digitization
                located in Kazan. We focus on helping you to digitalize your
                business from the first scratch until a digital product ready to
                use!
              </h1>
            </motion.div>
            <div class="flex justify-start">
              <button class="text-white  hover:bg-primary-200 rounded-2xl bg-primary-100 shadow-xl btn border-none normal-case w-full lg:w-full mb-12 lg:mb-0">
                Start Your Journey
              </button>
            </div>
          </div>
          {/* carousel */}
          <div class="z-10 mx-10 rounded-box w-full lg:w-2/5 transition-all transform hover:scale-110 hover:cursor-ew-resize">
            <div class="carousel carousel-center w-full  rounded-box space-x-4">
              <div class="carousel-item">
                <img
                  src="https://preview.redd.it/ouodm9z9ycp51.png?auto=webp&s=51b2940b6d7fb31275465303a10fa104192e003f"
                  class="rounded-box w-96"
                />
              </div>
              <div class="carousel-item">
                <img
                  src="https://preview.redd.it/ouodm9z9ycp51.png?auto=webp&s=51b2940b6d7fb31275465303a10fa104192e003f"
                  class="rounded-box w-96"
                />
              </div>
              <div class="carousel-item">
                <img
                  src="https://preview.redd.it/ouodm9z9ycp51.png?auto=webp&s=51b2940b6d7fb31275465303a10fa104192e003f"
                  class="rounded-box w-96"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
