import React from "react";
import banner2 from "../images/banner2.jpg";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const Recommended = () => {
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
    infinite: true,
    speed: 2000,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 1010,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
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
          nextArrow: false,
          prevArrow: false,
        },
      },
    ],
  };
  return (
    <div className="  flex flex-col    bg-cover bg-no-repeat   mx-auto  justify-center ">
      <h3 className="flex justify-center mt-10 lg:mt-28 xl:mt-16">
        <hr className="w-8 sm:w-12 h-0.5 mt-4 bg-[#ff0911] mx-2 sm:mx-6" />
        <span className="font-serif text-[16px] md:text-2xl font-semibold uppercase">
          Recommended for you
        </span>
        <hr className=" w-8 sm:w-12 h-0.5 mt-4 bg-[#ff0911] mx-2 sm:mx-6" />
      </h3>
      <p className="block  !text-center text-black !text-[12px] sm:!text-[15px]  mt-2 mx-8 sm:mx-0">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </p>
      <div className=" transition ease-in-out delay-150  hover:-translate-y-3 hover:scale-116 duration-300 grid  grid-cols-1 gap-0 justify-center items-center  lg:gap-0 my-12 sm:my-20 lg:my-20 mx-8 sm:mx-32 xl:mx-28 ">
        <Slider {...settings}>
          <div className="   border-gray-900  p-2   ">
            <div className="bg-white dropdowncontent">
              <div className="flex justify-center items-center"></div>
              <div className="flex flex-col justify-center items-center mx-2 sm:mx-10">
                <img src={banner2} alt="banner" className="mt-10" />
                <p className=" text-2xl text-center my-2 font-semibold ">
                  CONFIDENTLY TRAVEL SOLO
                </p>
                <p className=" text-xl text-center my-2 font-light journey">
                  Wondering where you should go on your next trip? Take this fun
                  &amp; free quiz to discover unique experiences
                </p>
                <button className="bg-[#ff0911] text-white text-xl w-40 p-2 mt-8 mb-16">
                  LEARN MORE
                </button>
              </div>
            </div>
          </div>
          <div className="   border-gray-900  p-2   ">
            <div className="bg-white dropdowncontent">
              <div className="flex justify-center items-center"></div>
              <div className="flex flex-col justify-center items-center mx-2 sm:mx-10">
                <img src={banner2} alt="banner" className="mt-10" />
                <p className=" text-2xl text-center my-2 font-semibold ">
                  CONFIDENTLY TRAVEL SOLO
                </p>
                <p className=" text-xl text-center my-2 font-light journey">
                  Wondering where you should go on your next trip? Take this fun
                  &amp; free quiz to discover unique experiences
                </p>
                <button className="bg-[#ff0911] text-white text-xl w-40 p-2 mt-8 mb-16">
                  LEARN MORE
                </button>
              </div>
            </div>
          </div>
          <div className="   border-gray-900  p-2   ">
            <div className="bg-white dropdowncontent">
              <div className="flex justify-center items-center"></div>
              <div className="flex flex-col justify-center items-center mx-2 sm:mx-10">
                <img src={banner2} alt="banner" className="mt-10" />
                <p className=" text-2xl text-center my-2 font-semibold ">
                  CONFIDENTLY TRAVEL SOLO
                </p>
                <p className=" text-xl text-center my-2 font-light journey">
                  Wondering where you should go on your next trip? Take this fun
                  &amp; free quiz to discover unique experiences
                </p>
                <button className="bg-[#ff0911] text-white text-xl w-40 p-2 mt-8 mb-16">
                  LEARN MORE
                </button>
              </div>
            </div>
          </div>
          <div className="   border-gray-900  p-2   ">
            <div className="bg-white dropdowncontent">
              <div className="flex justify-center items-center"></div>
              <div className="flex flex-col justify-center items-center mx-2 sm:mx-10">
                <img src={banner2} alt="banner" className="mt-10" />
                <p className=" text-2xl text-center my-2 font-semibold ">
                  CONFIDENTLY TRAVEL SOLO
                </p>
                <p className=" text-xl text-center my-2 font-light journey">
                  Wondering where you should go on your next trip? Take this fun
                  &amp; free quiz to discover unique experiences
                </p>
                <button className="bg-[#ff0911] text-white text-xl w-40 p-2 mt-8 mb-16">
                  LEARN MORE
                </button>
              </div>
            </div>
          </div>
          <div className="   border-gray-900  p-2   ">
            <div className="bg-white dropdowncontent">
              <div className="flex justify-center items-center"></div>
              <div className="flex flex-col justify-center items-center mx-2 sm:mx-10">
                <img src={banner2} alt="banner" className="mt-10" />
                <p className=" text-2xl text-center my-2 font-semibold ">
                  CONFIDENTLY TRAVEL SOLO
                </p>
                <p className=" text-xl text-center my-2 font-light journey">
                  Wondering where you should go on your next trip? Take this fun
                  &amp; free quiz to discover unique experiences
                </p>
                <button className="bg-[#ff0911] text-white text-xl w-40 p-2 mt-8 mb-16">
                  LEARN MORE
                </button>
              </div>
            </div>
          </div>
          <div className="   border-gray-900  p-2   ">
            <div className="bg-white dropdowncontent">
              <div className="flex justify-center items-center"></div>
              <div className="flex flex-col justify-center items-center mx-2 sm:mx-10">
                <img src={banner2} alt="banner" className="mt-10" />
                <p className=" text-2xl text-center my-2 font-semibold ">
                  CONFIDENTLY TRAVEL SOLO
                </p>
                <p className=" text-xl text-center my-2 font-light journey">
                  Wondering where you should go on your next trip? Take this fun
                  &amp; free quiz to discover unique experiences
                </p>
                <button className="bg-[#ff0911] text-white text-xl w-40 p-2 mt-8 mb-16">
                  LEARN MORE
                </button>
              </div>
            </div>
          </div>
          <div className="   border-gray-900  p-2   ">
            <div className="bg-white dropdowncontent">
              <div className="flex justify-center items-center"></div>
              <div className="flex flex-col justify-center items-center mx-2 sm:mx-10">
                <img src={banner2} alt="banner" className="mt-10" />
                <p className=" text-2xl text-center my-2 font-semibold ">
                  CONFIDENTLY TRAVEL SOLO
                </p>
                <p className=" text-xl text-center my-2 font-light journey">
                  Wondering where you should go on your next trip? Take this fun
                  &amp; free quiz to discover unique experiences.
                </p>
                <button className="bg-[#ff0911] text-white text-xl w-40 p-2 mt-8 mb-16">
                  LEARN MORE
                </button>
              </div>
            </div>
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default Recommended;
