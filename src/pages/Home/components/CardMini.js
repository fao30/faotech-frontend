import React from "react";
import "./custom.css";

const CardMini = ({ cardDescProps, cardIconProps, cardTitleProps }) => {
  return (
    <div class=" card w-36 xl:w-96 lg:w-64 md:w-52 sm:w-52 shadow-xl my-4 mx-4 from-accent to-base-200 bg-gradient-to-b">
      <div class="card-body text-left text-primary-content">
        <div class="card-actions justify-center lg:justify-center">
          <img src={cardIconProps} class="w-32 rounded-md" />
        </div>
        <div class="flex justify-center items-center">
          <h2 class="font-bold text-center text-base-content text-s md:text-xl lg:text-xl mb-2">
            {cardTitleProps}
          </h2>
        </div>
      </div>
    </div>
  );
};

export default CardMini;
