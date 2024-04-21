import React from "react";
import Trending from "./Trending";
const TrendingShoe = () => {
  return (
    <div className="mb-8 mt-4 md:mt-20 mx-0 lg:mx-32">
      <h3 className="flex justify-center">
        <hr className="w-8 sm:w-12 h-0.5 mt-4 bg-[#ff0911] mx-2 sm:mx-6" />
        <span className="font-serif text-[20px] md:text-2xl font-semibold uppercase">
          Trending
        </span>
        <hr className=" w-8 sm:w-12 h-0.5 mt-4 bg-[#ff0911] mx-2 sm:mx-6" />
      </h3>

      <Trending />
    </div>
  );
};

export default TrendingShoe;
