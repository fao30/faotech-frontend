import React from "react";

const Card = ({ cardDescProps, cardIconProps, cardTitleProps }) => {
  return (
    <div class="card w-32 xl:w-96 lg:w-64 md:w-52 sm:w-52 shadow-xl mt-2 from-accent to-white bg-gradient-to-t">
      <div class="card-body text-left text-primary-content">
        <h2 class="font-bold text-center md:text-left lg:text-left text-sm md:text-xl lg:text-2xl">
          {cardTitleProps}
        </h2>
        <p class="hidden md:flex lg:flex">{cardDescProps}</p>
        <div class="card-actions justify-center lg:justify-end">
          <img src={cardIconProps} class="w-12 rounded-md" />
        </div>
      </div>
    </div>
  );
};

export default Card;
