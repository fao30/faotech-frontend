import React from "react";

const CarouselItem = ({ carouselPictureProps }) => {
  return (
    <div class="carousel-item">
      <img alt="" src={carouselPictureProps} class="rounded-box w-[36rem]" />
    </div>
  );
};

export default CarouselItem;
