import React from "react";
import Partner from "./Partner";

const BrandPartner = () => {
  return (
    <div className="">
      <h3 className="flex justify-center  mt-20 lg:mt-28">
        <hr className="w-8 sm:w-12 h-0.5 mt-4 bg-[#ff0911] mx-2 sm:mx-6" />
        <span className="font-serif text-[16px] md:text-2xl font-semibold uppercase">
          Our Brands
        </span>
        <hr className=" w-8 sm:w-12 h-0.5 mt-4 bg-[#ff0911] mx-2 sm:mx-6" />
      </h3>
      <p className="block  !text-center text-black !text-[12px] sm:!text-[15px]  mt-2 mx-8 sm:mx-0">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </p>
      <div className="my-20">
        <Partner />
      </div>
    </div>
  );
};

export default BrandPartner;
