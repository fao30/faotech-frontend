import React from "react";

const CardProfileBelinsky = ({
  cardDescProps,
  cardTitleProps,
  cardNameProps,
}) => {
  return (
    <div class="p-6 w-[40%] h-[11rem] my-5 flex flex-col space-x-4 flex-wrap justify-around items-center bg-[#FFFFFF] text-ourWork-100 font-bold shadow-xl shadow-blue-100 rounded-2xl">
      <div class="text-s sm:text-base md:lg:text-base font-normal">
        <div class="mr-5 text-s sm:text-base md:lg:text-base font-normal ">
          <h1 class="text-[#363636] text-start text-2xl font-[600] mb-2">
            {cardTitleProps}
          </h1>
          <p class="font-[400] text-[15px] text-[#858282] text-center ">
            {cardDescProps}
          </p>
          <div class=" flex justify-between mt-5">
            <h2 className=" text-lg text-[#1361DE] text-start">
              {cardNameProps}
            </h2>
            <button className="btn hover-none bg-[#1361DE] text-end rounded-2xl mb-5 h-[]">
              Visit Website
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default CardProfileBelinsky;
