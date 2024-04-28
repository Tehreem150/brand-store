import React from "react";
import banner1 from "../images/banner1.jpg";
import banner2 from "../images/banner2.jpg";
import banner3 from "../images/banner3.jpg";
import banner4 from "../images/banner4.jpg";
import banner5 from "../images/banner5.jpg";

const ContinueShoping = () => {
  return (
    <div className=" ">
      <h3 className="flex justify-center  mt-10 lg:mt-28">
        <hr className="w-8 sm:w-12 h-0.5 mt-4 bg-[#ff0911] mx-2 sm:mx-6" />
        <span className="font-serif text-[16px] md:text-2xl font-semibold uppercase">
          Continue Shopping
        </span>
        <hr className=" w-8 sm:w-12 h-0.5 mt-4 bg-[#ff0911] mx-2 sm:mx-6" />
      </h3>
      <p className="block  !text-center text-black !text-[12px] sm:!text-[15px]  mt-2 mx-8 sm:mx-0">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </p>

      <div className=" grid grid-cols-1 md:grid-cols-3  mx-12 sm:mx-24 md:mx-12  lg:mx-20   xl:mx-32 gap-10 md:gap-6 lg:gap-7 mt-20 ">
        <div className=" continue rounded-xl transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
          <img src={banner1} alt="banner" className="rounded-t-xl" />
          <p className="  text-center font-semibold my-4">SAVE MONEY</p>
        </div>
        <div className=" continue rounded-xl transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
          <img src={banner2} alt="banner" className="rounded-t-xl" />
          <p className="  text-center font-semibold my-4">ONLINE ORDER</p>
        </div>
        <div className=" continue rounded-xl transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
          <img src={banner3} alt="banner" className="rounded-t-xl" />
          <p className="  text-center font-semibold my-4">PROMOTIONS</p>
        </div>
      </div>
      <div className=" grid grid-cols-1 md:grid-cols-2 mx-12 sm:mx-24 md:mx-12  lg:mx-20 xl:mx-64 gap-10 md:gap-6 lg:gap-8 my-8 ">
        <div className=" continue rounded-xl transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
          <img src={banner4} alt="banner" className="rounded-t-xl" />
          <p className="  text-center font-semibold my-4">SAVE MONEY</p>
        </div>
        <div className=" continue rounded-xl transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
          <img src={banner5} alt="banner" className="rounded-t-xl" />
          <p className="  text-center font-semibold my-4">ONLINE ORDER</p>
        </div>
      </div>
    </div>
  );
};

export default ContinueShoping;
