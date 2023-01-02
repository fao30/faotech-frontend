import React from "react";

const Products = () => {
  return (
    <div class="from-white to-blue-200 text-primary-content -mt-[5rem] grid place-items-center items-end bg-gradient-to-r pt-20">
      {/* <div class="from-base-200 to-base-300 text-primary-content grid place-items-center items-end bg-gradient-to-b pt-20 pb-20"> */}
      <div class="hero">
        <div class="hero-content text-center">
          <div>
            <h1 class="text-5xl font-bold text-black">
              Digital Product Made By Us For Your Business Transformation{" "}
            </h1>
            <h1 class="text-4xl sm:text-5xl lg:text-5xl font-bold  text-base-content">
              Build, manage and deliver
              <br />
              application with FaoTech
            </h1>
            <button class="mt-10 btn btn-warning font-bold normal-case">
              Learn More
            </button>
            <div class="flex justify-center items-center">
              <img
                class="mt-12 max-w-l sm:max-w-xl lg:max-w-3xl rounded-lg shadow-2xl"
                src="https://static.wixstatic.com/media/c837a6_604c6b86faf247e3b1060fdc0a80d6dc~mv2.png/v1/fill/w_1598,h_900,al_c,q_90,usm_0.66_1.00_0.01,enc_auto/screen%201.png"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
