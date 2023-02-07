import React from "react";

const CardProfileBelinsky = ({
  cardDescProps,
  cardTitleProps,
  cardNameProps,
}) => {
  return (
    <div class="bg-[#FEFEFF] w-[40%] text-ourWork-100 font-bold mx-5 my-3 shadow-xl rounded-2xl">
      <div class="flex flex-col space-x-4flex-wrap justify-around items-center w-80 lg:w-[25rem] h-32 ml-4">
        <div class="mr-5 text-s sm:text-base md:lg:text-base font-normal ">
          <h1 class="font-intern text-[#363636] text-start text-xl">
            {cardTitleProps}
          </h1>
          <p class="font-inter text-[#858282] text-center mt-4 text-xs">
            {cardDescProps}
          </p>
          <h2 className="font-inter text-[#1361DE] text-end">
            {cardNameProps}
          </h2>
        </div>
      </div>
    </div>
  );
};
export default CardProfileBelinsky;
