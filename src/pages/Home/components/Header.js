import { React } from "react";

const Header = () => {
  return (
    <div class="from-white to-blue-200 text-primary-content -mt-[5rem] grid place-items-center items-end bg-gradient-to-r pt-20">
      <div class="my-20">
        <div class=" flex lg:justify-around justify-center flex-wrap items-center">
          <div class="mx-20 w-full lg:w-96">
            <h1 class="text-xl my-2 text-indigo-500 font-bold">
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
            <div class="flex justify-start">
              <button class="text-white  shadow-xl btn border-none hover:bg-indigo-600 bg-indigo-500 normal-case w-72 lg:w-80 mb-12 lg:mb-0">
                Start Your Journey
              </button>
            </div>
          </div>
          {/* carousel */}
          <div class="mx-10 rounded-box w-full lg:w-2/5 transition-all transform hover:scale-110 hover:cursor-ew-resize">
            <div class="carousel carousel-center w-full  rounded-box space-x-4">
              <div class="carousel-item">
                <img
                  src="https://placeimg.com/500/500/arch"
                  class="rounded-box "
                />
              </div>
              <div class="carousel-item">
                <img
                  src="https://placeimg.com/500/500/arch"
                  class="rounded-box"
                />
              </div>
              <div class="carousel-item">
                <img
                  src="https://placeimg.com/500/500/arch"
                  class="rounded-box"
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
