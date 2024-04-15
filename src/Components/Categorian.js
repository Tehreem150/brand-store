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
          className="mt-0 sm:mt-[-95px] md:mt-0"
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
          className="mt-0 sm:mt-[-59px] md:mt-0"
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
      <div className=" mt-6 xl:mt-10 ">
        <p className="browse_text !text-3xl text-center">Browse The Range</p>
        <p className="lorem_text mt-2">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
      </div>

      <div className=" grid grid-cols-1 gap-0 lg:gap-2 mt-6 mx-16 lg:mx-32  ">
        <Slider {...settings}>
          <div className="w-[324px] border-gray-900  px-2 ">
            <div className="flex justify-center items-center">
              <img src={dining} alt="Dining" />
            </div>
            <div className="content"></div>
            <p className=" bed_text mt-[-50px] text-center ml-20  sm:ml-56 md:ml-28 lg:ml-20 2xl:ml-24">
              Dining
            </p>
          </div>
          <div className="w-[324px] border-gray-900  px-2 ">
            <div className="flex justify-center items-center">
              <img src={bedroom} alt="Bedroom" />
            </div>
            <div className="content"></div>
            <p className=" bed_text mt-[-50px] text-center ml-20  sm:ml-56 md:ml-28 lg:ml-20 2xl:ml-24">
              Bedroom
            </p>
          </div>
          <div className="w-[324px] border-gray-900  px-2 ">
            <div className="flex justify-center items-center">
              <img src={living} alt="Living" />
            </div>
            <div className="content"></div>
            <p className=" bed_text mt-[-50px] text-center  ml-20  sm:ml-56  md:ml-28 lg:ml-20 2xl:ml-24">
              Living
            </p>
          </div>
          <div className="w-[324px] border-gray-900  px-2 ">
            <div className="flex justify-center items-center">
              <img src={dining} alt="Dining" />
            </div>
            <div className="content"></div>
            <p className=" bed_text mt-[-50px] text-center ml-20  sm:ml-56 md:ml-28 lg:ml-20 2xl:ml-24">
              Dining
            </p>
          </div>
          <div className="w-[324px] border-gray-900  px-2 ">
            <div className="flex justify-center items-center">
              <img src={bedroom} alt="Bedroom" />
            </div>
            <div className="content"></div>
            <p className=" bed_text mt-[-50px] text-center ml-20  sm:ml-56 md:ml-28 lg:ml-20 2xl:ml-24">
              Bedroom
            </p>
          </div>
          <div className="w-[324px] border-gray-900  px-2 ">
            <div className="flex justify-center items-center">
              <img src={living} alt="Living" />
            </div>
            <div className="content"></div>
            <p className=" bed_text mt-[-50px] text-center  ml-20  sm:ml-56  md:ml-28 lg:ml-20 2xl:ml-24">
              Living
            </p>
          </div>
          <div className="w-[324px] border-gray-900  px-2 ">
            <div className="flex justify-center items-center">
              <img src={dining} alt="Dining" />
            </div>
            <div className="content"></div>
            <p className=" bed_text mt-[-50px] text-center ml-20  sm:ml-56 md:ml-28 lg:ml-20 2xl:ml-24">
              Dining
            </p>
          </div>
          <div className="w-[324px] border-gray-900  px-2 ">
            <div className="flex justify-center items-center">
              <img src={bedroom} alt="Bedroom" />
            </div>
            <div className="content"></div>
            <p className=" bed_text mt-[-50px] text-center ml-20  sm:ml-56 md:ml-28 lg:ml-20 2xl:ml-24">
              Bedroom
            </p>
          </div>
          <div className="w-[324px] border-gray-900  px-2 ">
            <div className="flex justify-center items-center">
              <img src={living} alt="Living" />
            </div>
            <div className="content"></div>
            <p className=" bed_text mt-[-50px] text-center  ml-20  sm:ml-56  md:ml-28 lg:ml-20 2xl:ml-24">
              Living
            </p>
          </div>
        </Slider>
      </div>
      <div className=" grid grid-cols-1 gap-0 lg:gap-2 mt-6 lg:mt-20 mx-16 lg:mx-32  ">
        <Slider {...settings}>
          <div className="w-[324px] h-[400px] sm:h-[600px] md:h-[500px] lg:h-[450px] border-gray-900  px-2 ">
            <div className="flex justify-center items-center">
              <img src={bedroom} className="bed_img" alt="Bedroom" />
            </div>

            <div className="content"></div>
            <p className=" bed_text mt-6 text-center ml-20  sm:ml-56 md:ml-28 lg:ml-20 2xl:ml-24">
              Bedroom
            </p>
          </div>
          <div className="w-[324px] h-[400px] border-gray-900  px-2 ">
            <div className="flex justify-center items-center">
              <img src={dining} className="bed_img" alt="Dining" />
            </div>
            <div className="content"></div>
            <p className=" bed_text mt-6 text-center ml-20  sm:ml-56 md:ml-28 lg:ml-20 2xl:ml-24">
              Dining
            </p>
          </div>
          <div className="w-[324px] h-[400px] border-gray-900  px-2 ">
            <div className="flex justify-center items-center">
              <img src={living} className="bed_img" alt="Living" />
            </div>
            <div className="content"></div>
            <p className=" bed_text mt-6 text-center ml-20  sm:ml-56 md:ml-28 lg:ml-20 2xl:ml-24">
              Living
            </p>
          </div>
          <div className="w-[324px] h-[400px] sm:h-[600px] md:h-[500px] lg:h-[450px] border-gray-900  px-2 ">
            <div className="flex justify-center items-center">
              <img src={bedroom} className="bed_img" alt="Bedroom" />
            </div>

            <div className="content"></div>
            <p className=" bed_text mt-6 text-center ml-20  sm:ml-56 md:ml-28 lg:ml-20 2xl:ml-24">
              Bedroom
            </p>
          </div>
          <div className="w-[324px] h-[400px] border-gray-900  px-2 ">
            <div className="flex justify-center items-center">
              <img src={dining} className="bed_img" alt="Dining" />
            </div>
            <div className="content"></div>
            <p className=" bed_text mt-6 text-center ml-20  sm:ml-56 md:ml-28 lg:ml-20 2xl:ml-24">
              Dining
            </p>
          </div>
          <div className="w-[324px] h-[400px] border-gray-900  px-2 ">
            <div className="flex justify-center items-center">
              <img src={living} className="bed_img" alt="Living" />
            </div>
            <div className="content"></div>
            <p className=" bed_text mt-6 text-center ml-20  sm:ml-56 md:ml-28 lg:ml-20 2xl:ml-24">
              Living
            </p>
          </div>
          <div className="w-[324px] h-[400px] sm:h-[600px] md:h-[500px] lg:h-[450px] border-gray-900  px-2 ">
            <div className="flex justify-center items-center">
              <img src={bedroom} className="bed_img" alt="Bedroom" />
            </div>

            <div className="content"></div>
            <p className=" bed_text mt-6 text-center ml-20  sm:ml-56 md:ml-28 lg:ml-20 2xl:ml-24">
              Bedroom
            </p>
          </div>
          <div className="w-[324px] h-[400px] border-gray-900  px-2 ">
            <div className="flex justify-center items-center">
              <img src={dining} className="bed_img" alt="Dining" />
            </div>
            <div className="content"></div>
            <p className=" bed_text mt-6 text-center ml-20  sm:ml-56 md:ml-28 lg:ml-20 2xl:ml-24">
              Dining
            </p>
          </div>
          <div className="w-[324px] h-[400px] border-gray-900  px-2 ">
            <div className="flex justify-center items-center">
              <img src={living} className="bed_img" alt="Living" />
            </div>
            <div className="content"></div>
            <p className=" bed_text mt-6 text-center ml-20  sm:ml-56 md:ml-28 lg:ml-20 2xl:ml-24">
              Living
            </p>
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default Categorian;
