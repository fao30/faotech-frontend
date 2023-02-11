import React from "react";

const CardCompany = ({ cardDescProps, cardTitleProps }) => {
  return (
    <div className="px-4 w-[100%] md:w-[45%] h-[12rem] md:h-[16rem] lg:h-[12rem] my-6 flex flex-row space-x-4 flex-wrap justify-start items-center bg-[#FEFEFF] text-ourWork-100  drop-shadow-[0px_4px_12px_rgba(117,117,117,0.2)] rounded-2xl">
      <div className="text-s sm: md:lg: flex flex-col gap-4 ">
        <h2 className="text-[#1363DF] text-center">{cardTitleProps}</h2>
        <p className="text-[#757575] text-center">{cardDescProps}</p>
      </div>
    </div>
  );
};

export default CardCompany;
