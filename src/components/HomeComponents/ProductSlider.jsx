// Product slider, which is the carousel components, see the settings array below
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ProductCards from "./ProductCards"; // Assuming you have this import

export default function ProductSlider({ products = [] }) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplay: true,
    autoplaySpeed: 2000,
    // ...other settings
  };

  return (
    //
    <Slider {...settings}>
      {products.map((product, index) => (
        <div key={index} className="max-w-full h-auto">
          <ProductCards
            img={product.img}
            title={product.title}
            description={product.description}
          />
        </div>
      ))}
    </Slider>
  );
}
