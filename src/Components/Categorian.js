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
          className="mt-[-59px] md:mt-0"
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
          className="mt-[-59px] md:mt-0"
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
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
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
          slidesToShow: 2,
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
    <div className="mx-auto mt-6 lg:mt-28 ">
      <div className=" mt-8 xl:mt-10 ">
        <h3 className="flex justify-center">
          <hr className="w-8 sm:w-12 h-0.5 mt-4 bg-[#ff0911] mx-2 sm:mx-6" />
          <span className="font-serif text-[16px] md:text-2xl font-semibold uppercase">
            Browse The Range
          </span>
          <hr className=" w-8 sm:w-12 h-0.5 mt-4 bg-[#ff0911] mx-2 sm:mx-6" />
        </h3>
        <p className="block  !text-center text-black !text-[12px] sm:!text-[15px]  mt-2 mx-8 sm:mx-0">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
      </div>

      <div className=" grid grid-cols-1 gap-0 lg:gap-8 my-6 lg:my-20 mx-16 xl:mx-32  ">
        <Slider {...settings}>
          <div className="w-[324px]  border-gray-900  px-2 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105 duration-300 ">
            <div className="flex justify-center items-center">
              <img src={dining} alt="Dining" />
            </div>
            <div className="content"></div>
            <div className="flex justify-center items-center">
              <p className=" bed_text mt-[-50px] text-center absolute z-[999]">
                Dining
              </p>
            </div>
          </div>
          <div className="w-[324px] border-gray-900  px-2 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105 duration-300 ">
            <div className="flex justify-center items-center">
              <img src={bedroom} alt="Bedroom" />
            </div>
            <div className="content"></div>
            <div className="flex justify-center items-center">
              <p className=" bed_text mt-[-50px] text-center absolute z-[999]">
                Bedroom
              </p>
            </div>
          </div>
          <div className="w-[324px] border-gray-900 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105 duration-300  px-2 ">
            <div className="flex justify-center items-center">
              <img src={living} alt="Living" />
            </div>
            <div className="content"></div>
            <div className="flex justify-center items-center">
              <p className=" bed_text mt-[-50px] text-center absolute z-[999]">
                Living
              </p>
            </div>
          </div>
          <div className="w-[324px] border-gray-900  transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105 duration-300 px-2 ">
            <div className="flex justify-center items-center">
              <img src={dining} alt="Dining" />
            </div>
            <div className="content"></div>
            <div className="flex justify-center items-center">
              <p className=" bed_text mt-[-50px] text-center absolute z-[999]">
                {" "}
                Dining
              </p>
            </div>
          </div>
          <div className="w-[324px] border-gray-900 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105 duration-300 px-2 ">
            <div className="flex justify-center items-center">
              <img src={bedroom} alt="Bedroom" />
            </div>
            <div className="content"></div>
            <div className="flex justify-center items-center">
              <p className=" bed_text mt-[-50px] text-center absolute z-[999]">
                {" "}
                Bedroom
              </p>
            </div>
          </div>
          <div className="w-[324px] border-gray-900 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105 duration-300  px-2 ">
            <div className="flex justify-center items-center">
              <img src={living} alt="Living" />
            </div>
            <div className="content"></div>
            <div className="flex justify-center items-center">
              <p className=" bed_text mt-[-50px] text-center absolute z-[999]">
                {" "}
                Living
              </p>
            </div>
          </div>
          <div className="w-[324px] border-gray-900 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105 duration-300 px-2 ">
            <div className="flex justify-center items-center">
              <img src={dining} alt="Dining" />
            </div>
            <div className="content"></div>
            <div className="flex justify-center items-center">
              <p className=" bed_text mt-[-50px] text-center absolute z-[999]">
                {" "}
                Dining
              </p>
            </div>
          </div>
          <div className="w-[324px] border-gray-900 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105 duration-300  px-2 ">
            <div className="flex justify-center items-center">
              <img src={bedroom} alt="Bedroom" />
            </div>
            <div className="content"></div>
            <div className="flex justify-center items-center">
              <p className=" bed_text mt-[-50px] text-center absolute z-[999]">
                {" "}
                Bedroom
              </p>
            </div>
          </div>
          <div className="w-[324px] border-gray-900 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105 duration-300 px-2 ">
            <div className="flex justify-center items-center">
              <img src={living} alt="Living" />
            </div>
            <div className="content"></div>
            <div className="flex justify-center items-center">
              <p className=" bed_text mt-[-50px] text-center absolute z-[999]">
                {" "}
                Living
              </p>
            </div>
          </div>
          <div className="w-[324px] border-gray-900  transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105 duration-300 px-2 ">
            <div className="flex justify-center items-center">
              <img src={dining} alt="Dining" />
            </div>
            <div className="content"></div>
            <div className="flex justify-center items-center">
              <p className=" bed_text mt-[-50px] text-center absolute z-[999]">
                {" "}
                Dining
              </p>
            </div>
          </div>
          <div className="w-[324px] border-gray-900 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105 duration-300 px-2 ">
            <div className="flex justify-center items-center">
              <img src={bedroom} alt="Bedroom" />
            </div>
            <div className="content"></div>
            <div className="flex justify-center items-center">
              <p className=" bed_text mt-[-50px] text-center absolute z-[999]">
                {" "}
                Bedroom
              </p>
            </div>
          </div>
          <div className="w-[324px] border-gray-900 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105 duration-300 px-2 ">
            <div className="flex justify-center items-center">
              <img src={living} alt="Living" />
            </div>
            <div className="content"></div>
            <div className="flex justify-center items-center">
              <p className=" bed_text mt-[-50px] text-center absolute z-[999]">
                {" "}
                Living
              </p>
            </div>
          </div>
          <div className="w-[324px] border-gray-900 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105 duration-300 px-2 ">
            <div className="flex justify-center items-center">
              <img src={dining} alt="Dining" />
            </div>
            <div className="content"></div>
            <div className="flex justify-center items-center">
              <p className=" bed_text mt-[-50px] text-center absolute z-[999]">
                {" "}
                Dining
              </p>
            </div>
          </div>
          <div className="w-[324px] border-gray-900 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105 duration-300 px-2 ">
            <div className="flex justify-center items-center">
              <img src={bedroom} alt="Bedroom" />
            </div>
            <div className="content"></div>
            <div className="flex justify-center items-center">
              <p className=" bed_text mt-[-50px] text-center absolute z-[999]">
                {" "}
                Bedroom
              </p>
            </div>
          </div>
          <div className="w-[324px] border-gray-900 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105 duration-300  px-2 ">
            <div className="flex justify-center items-center">
              <img src={living} alt="Living" />
            </div>
            <div className="content"></div>
            <div className="flex justify-center items-center">
              <p className=" bed_text mt-[-50px] text-center absolute z-[999]">
                {" "}
                Living
              </p>
            </div>
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default Categorian;
