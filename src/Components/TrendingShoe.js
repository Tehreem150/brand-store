import React from "react";
import shoes from "../images/shoes";
import Slider from "react-slick";
import product1 from "../images/product1";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ShoeComponent from "./ShoeComponent";
const TrendingShoe = () => {
  function SampleNextArrow(props) {
    const { className, onClick } = props;
    return (
      <button className={className} onClick={onClick} type="button">
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M10 7l5 5-5 5"
            stroke="#d60000"
            stroke-width="2"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
        </svg>
      </button>
    );
  }
  function SamplePrevArrow(props) {
    const { className, onClick } = props;
    return (
      <button className={className} onClick={onClick} type="button">
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M13 7l-5 5 5 5"
            stroke="#d60000"
            stroke-width="2"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
        </svg>
      </button>
    );
  }
  var settings = {
    dots: true,
    infinite: false,
    speed: 2000,
    slidesToShow: 5,
    slidesToScroll: 2,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="mb-20 mt-20 mx-auto">
      <h3 className="flex justify-center mt-20">
        <hr className="w-12 h-0.5 mt-4 bg-[#ff0911] mx-6" />
        <span className="font-serif text-2xl font-semibold uppercase">
          Trending
        </span>
        <hr className="w-12 h-0.5 mt-4 bg-[#ff0911] mx-6" />
      </h3>
      <div className="flex justify-center mt-5">
        <ul className="flex space-x-16 2xl:space-x-10">
          <li className="font-serif text-xl  text-[#ff0911] underline  ">
            <a href=""> Sandals</a>
          </li>
          <li className="font-serif text-xl hover:text-[#ff0911] hover:underline text-[#222] ">
            <a href=""> Slippers</a>
          </li>
          <li className="font-serif text-xl hover:text-[#ff0911] hover:underline text-[#222] ">
            <a href="">Chappals</a>
          </li>
          <li className="font-serif text-xl hover:text-[#ff0911] hover:underline text-[#222] ">
            <a href="">Court Shoes</a>
          </li>
          <li className="font-serif text-xl hover:text-[#ff0911] hover:underline text-[#222] ">
            <a href=""> Sandals</a>
          </li>
          <li className="font-serif text-xl hover:text-[#ff0911] hover:underline text-[#222] ">
            <a href=""> Slippers</a>
          </li>
          <li className="font-serif text-xl hover:text-[#ff0911] hover:underline text-[#222] ">
            <a href="">Chappals</a>
          </li>
        </ul>
      </div>
      <div className="grid grid-cols-1 gap-10 mt-12 mb-20 mx-12 ">
        <Slider {...settings}>
          <ShoeComponent />
          <ShoeComponent />
          <ShoeComponent />
          <ShoeComponent />
          <ShoeComponent />
          <ShoeComponent />
          <ShoeComponent />
          <ShoeComponent />
          <ShoeComponent />
          <ShoeComponent />
          <ShoeComponent />
          <ShoeComponent />
          <ShoeComponent />
          <ShoeComponent />
        </Slider>
      </div>
    </div>
  );
};

export default TrendingShoe;
