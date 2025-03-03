import React from "react";
import Trending from "./Trending";
const TrendingShoe = () => {
  return (
    <div className="mb-8    bg-cover bg-no-repeat   mx-auto  justify-center mt-0 md:mt-28   lg:mx-16 xl:mx-32">
      <h3 className="flex justify-center">
        <hr className="w-8 sm:w-12 h-0.5 mt-4 bg-[#ff0911] mx-2 sm:mx-6" />
        <span className="font-serif text-[16px] md:text-2xl font-semibold uppercase">
          Trending
        </span>
        <hr className=" w-8 sm:w-12 h-0.5 mt-4 bg-[#ff0911] mx-2 sm:mx-6" />
      </h3>
      <p className="block  !text-center text-black !text-[12px] sm:!text-[15px]  mt-2 mx-8 sm:mx-0">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </p>

      <Trending />
    </div>
  );
};

export default TrendingShoe;
