import React from "react";
import bedroom from "../images/bedroom.png";
import living from "../images/living.png";
import dining from "../images/dining.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const Categorian = () => {
  function SampleNextArrow(props) {
    const { className, onClick } = props;
    return (
      <button className={className} onClick={onClick} type="button">
        <svg
          className="mt-[-95px] 2xl:mt-0"
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
          className="mt-[-95px] 2xl:mt-0"
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
    dots: false,
    infinite: false,
    speed: 2000,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
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
    <div className="mx-auto ">
      <div className=" mt-1 xl:mt-20 ">
        <p className="browse_text text-center">Browse The Range</p>
        <p className="lorem_text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
      </div>

      <div className=" grid grid-cols-1 gap-0 lg:gap-2 mx-16 lg:mx-32  ">
        <Slider {...settings}>
          <div className="w-[324px] border-gray-900 h-[500px] px-2 mt-[62.9px]">
            <img src={dining} className="" alt="Dining" />
            <div className="content"></div>
            <p className=" bed_text mt-[-40px] ml-20 2xl:ml-24">Dining</p>
          </div>
          <div className="  w-[324px] h-[362px] px-2 mt-[62.9px]">
            <img src={living} className="" alt="Living" />
            <div className="content"></div>
            <p className="bed_text mt-[-40px] ml-28">Living</p>
          </div>
          <div className=" w-[324px] h-[362px] px-2 mt-[62.9px]">
            <img src={bedroom} className="" alt="Bedroom" />
            <div className="content"></div>
            <p className="bed_text mt-[-40px] ml-28">Bedroom</p>
          </div>
          <div className="w-[324px] h-[362px] px-2 mt-[62.9px]">
            <img src={dining} className="" alt="Dining" />
            <div className="content"></div>
            <p className=" bed_text mt-[-40px] ml-28">Dining</p>
          </div>
          <div className="  w-[324px] h-[362px] px-2 mt-[62.9px]">
            <img src={living} className="" alt="Living" />
            <div className="content"></div>
            <p className="bed_text mt-[-40px] ml-28">Living</p>
          </div>
          <div className=" w-[324px] h-[362px] px-2 mt-[62.9px]">
            <img src={bedroom} className="" alt="Bedroom" />
            <div className="content"></div>
            <p className="bed_text mt-[-40px] ml-28">Bedroom</p>
          </div>
        </Slider>
      </div>
      <div className="grid grid-cols-1 gap-0 lg:gap-2 mx-16 lg:mx-32">
        <Slider {...settings}>
          <div className="w-[324px] h-[500px] px-1   mt-[62.9px]">
            <img src={dining} className="bed_img  " alt="Dining" />
            <p className="bed_text mt-[30px] ml-28 text-center">Dining</p>
          </div>
          <div className="  w-[324px] h-[362px] px-1 mt-[62.9px]">
            <img src={living} className="bed_img" alt="Living" />
            <p className="bed_text mt-[30px] ml-28 text-center">Living</p>
          </div>
          <div className=" w-[324px] h-[362px] px-1 mt-[62.9px]">
            <img src={bedroom} className="bed_img" alt="Bedroom" />
            <p className="bed_text mt-[30px] ml-28 text-center">Bedroom</p>
          </div>
          <div className="w-[324px] h-[362px] px-1 mt-[62.9px]">
            <img src={dining} className="bed_img" alt="Dining" />
            <p className="bed_text mt-[30px] ml-28 text-center">Dining</p>
          </div>
          <div className="  w-[324px] h-[362px] px-1 mt-[62.9px]">
            <img src={living} className="bed_img" alt="Living" />
            <p className="bed_text mt-[30px] ml-28 text-center">Living</p>
          </div>
          <div className=" w-[324px] h-[362px] px-1 mt-[62.9px]">
            <img src={bedroom} className="bed_img" alt="Bedroom" />
            <p className="bed_text mt-[30px] ml-28 text-center">Bedroom</p>
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default Categorian;
