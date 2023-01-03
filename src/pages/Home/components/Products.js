import React from "react";
// import photos from "./photos/1.png";

const Products = () => {
  return (
    <div class="from-white to-blue-200 text-primary-content -mt-[5rem] grid place-items-center items-end bg-gradient-to-r pt-20">
      <div class="my-20">
        <div class=" flex lg:justify-around justify-center flex-wrap items-center">
          <div class="mx-20 w-full lg:w-96">
            <h1 class="text-2xl font-bold text-black text-left">
              Digital Product Made By Us For Your Business Transformation{" "}
            </h1>
          </div>
          <div class=" flex lg:justify-around justify-center flex-wrap items-center text-center">
            <p class="text-sm my-10 text-gray-500 text-right-top sm:text-center lg:text-left">
              We experienced in digitalizing various business and enterprises
              across industries with our product
            </p>
          </div>
        </div>
      </div>
      <div class=" flex lg:justify-around justify-start flex-wrap items-right text-right-top">
        <div class="my-20">
          <div class="mx-20 w-full lg:w-96">
            <h1 class="text-xl my-2 text-  text-black">
              Communication Platform for Business to Business Partners
              application with FaoTech
            </h1>
            <p class="text-l my-6 text-gray-500">
              B2B-ONE.COM - it is an effective platform for communication
              between exporters and importers, sellers and buyers of goods and
              services around the world. Find a partner, conduct video
              negotiations and agree on a good deal!
            </p>
          </div>
        </div>
        <div class="flex flex-wrap justify-center h-120 w-130">
          <img
            class=" sm:w-full lg:w-96 transition-shadow ease-in-out duration-300 shadow-none hover:shadow-xl"
            src="https://media.discordapp.net/attachments/1058456820236161144/1059435314822774864/1.png"
          />
        </div>
      </div>
    </div>
  );
};

export default Products;
