import React from "react";
import banner1 from "../images/banner1.jpg";
import banner2 from "../images/banner2.jpg";
import banner3 from "../images/banner3.jpg";
import banner4 from "../images/banner4.jpg";
import banner5 from "../images/banner5.jpg";

const ContinueShoping = () => {
  return (
    <div className=" ">
      <h3 className="flex justify-center  mt-10 lg:mt-20">
        <hr className="w-8 sm:w-12 h-0.5 mt-4 bg-[#ff0911] mx-2 sm:mx-6" />
        <span className="font-serif text-[20px] md:text-2xl font-semibold uppercase">
          Continue Shopping
        </span>
        <hr className=" w-8 sm:w-12 h-0.5 mt-4 bg-[#ff0911] mx-2 sm:mx-6" />
      </h3>
      <p className=" !text-center text-black !text-[15px]  mt-2 mx-8 sm:mx-0">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </p>

      <div className=" grid grid-cols-1 lg:grid-cols-3 mx-20  lg:mx-20 xl:mx-32 gap-7 mt-16 ">
        <div className=" continue rounded-xl">
          <img src={banner1} alt="banner" className="rounded-t-xl" />
          <p className="  text-center font-semibold my-4">SAVE MONEY</p>
        </div>
        <div className=" continue rounded-xl">
          <img src={banner2} alt="banner" className="rounded-t-xl" />
          <p className="  text-center font-semibold my-4">ONLINE ORDER</p>
        </div>
        <div className=" continue rounded-xl">
          <img src={banner3} alt="banner" className="rounded-t-xl" />
          <p className="  text-center font-semibold my-4">PROMOTIONS</p>
        </div>
      </div>
      <div className=" grid grid-cols-1 lg:grid-cols-2 mx-20  lg:mx-20 xl:mx-64 gap-4 my-8 ">
        <div className=" continue rounded-xl">
          <img src={banner4} alt="banner" className="rounded-t-xl" />
          <p className="  text-center font-semibold my-4">SAVE MONEY</p>
        </div>
        <div className=" continue rounded-xl">
          <img src={banner5} alt="banner" className="rounded-t-xl" />
          <p className="  text-center font-semibold my-4">ONLINE ORDER</p>
        </div>
      </div>
    </div>
  );
};

export default ContinueShoping;
