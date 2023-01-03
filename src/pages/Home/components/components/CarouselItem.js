import React from "react";

const CarouselItem = ({ carouselPictureProps }) => {
  return (
    <div class="carousel-item">
      <img alt="" src={carouselPictureProps} class="rounded-box w-96" />
    </div>
  );
};

export default CarouselItem;
