import React from "react";
import banner1 from "../images/banner1.jpg";
import banner2 from "../images/banner2.jpg";
import banner3 from "../images/banner3.jpg";
import banner4 from "../images/banner4.jpg";
import banner5 from "../images/banner5.jpg";

const ContinueShoping = () => {
  return (
    <div className="mx-auto ">
      <div className="flex justify-center mt-4 mr-5">
        <h3 className="flex justify-center mt-20">
          <hr className="w-12 h-0.5 mt-4  bg-[#ff0911] mx-6" />
          <span className="font-serif text-2xl font-semibold">
            Continue Shopping
          </span>
          <hr className="w-12 h-0.5 mt-4 bg-[#ff0911] mx-6" />
        </h3>
        {/* <p className="  text-center font-semibold text-xl">
          CONTINUE SHOPPING
          <hr className="h-1 mt-3 bg-[#ff0911] mx-4"></hr>
        </p> */}
      </div>

      <div className=" grid grid-cols-3  mx-64 gap-4 mt-10 ">
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
      <div className=" grid grid-cols-2  mx-64 gap-4 my-8 ">
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
