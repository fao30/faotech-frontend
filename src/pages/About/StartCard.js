import React from "react";

const StartCard = () => {
  return (
    <div className="flex justify-between items-center transition-all transform hover:scale-105 hover:cursor-pointer">
      <div className="bg-[#FFFFFF] text-ourWork-100 font-bold mx-5 my-3 shadow-xl rounded-2xl">
        <div className="flex flex-col flex-wrap justify-center items-center  lg:w-[1149px] lg:h-[301px] h-32 ml-4">
          <div className="ml-24 text-s sm:text-base md:lg:text-base font-normal mr-5">
            <h1 className="text-2xl md:lg:text-2xl font-bold text-[#1363DF] text-center lg:w;[976px] lg:h[87px] my-20">
              Let’s create something amazing together
            </h1>
            <p className="font-inter text-sm text-[#757575] lg:w-[451.78px] lg:h-[34px] my-10">
              Hit the button, we are there waiting for you!
            </p>
            <button className="btn bg-[#4C6BDC] position:absolute justify-center ">
              Start Here{" "}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StartCard;
