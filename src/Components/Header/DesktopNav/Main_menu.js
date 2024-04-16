import React, { useState } from "react";
import { Link } from "react-router-dom";
import Skincare from "./Skincare";
import Brands from "../../Brands";
const Main_menu = () => {
  const [looksDrpdown, setLooksDropdown] = useState(false);
  const [brandsDrpdown, setBrandsDropdown] = useState(false);
  function handleMove() {
    setLooksDropdown(true);
  }
  function handleLeave() {
    setLooksDropdown(false);
  }
  function handleBrandMove() {
    setBrandsDropdown(true);
  }
  function handleBrandLeave() {
    setBrandsDropdown(false);
  }
  return (
    <div>
      <div className=" bg-white border-y-[1px]">
        <div className="hidden md:flex  font-semibold   uppercase  justify-center text-[13px]   text-black space-x-4 xl:space-x-7 2xl:space-x-11  mx-auto h-12">
          <Link
            to="/"
            className="hover:text-[#ff0911] hover:border-b-2 hover:border-[#ff0911]  flex items-center "
          >
            New
          </Link>
          <Link
            to="/shop"
            onMouseMove={handleBrandMove}
            onMouseOut={handleBrandLeave}
            className=" flex items-center hover:text-[#ff0911] hover:border-b-2 hover:border-[#ff0911]   px-2"
          >
            Brands
          </Link>
          <Link
            to="/about"
            className="  flex items-center hover:text-[#ff0911] hover:border-b-2 hover:border-[#ff0911] px-2"
          >
            Makeup
          </Link>
          <Link
            to="/contact"
            className="hover:text-[#ff0911] hover:border-b-2 hover:border-[#ff0911] flex items-center px-2"
          >
            Skincare
          </Link>
          <Link
            to="/contact"
            onMouseMove={handleMove}
            onMouseOut={handleLeave}
            className="hover:text-[#ff0911] hover:border-b-2 hover:border-[#ff0911] flex items-center px-2"
          >
            Looks
          </Link>
          <Link
            to="/"
            className="hover:text-[#ff0911] hover:border-b-2 hover:border-[#ff0911]  flex items-center "
          >
            Blog
          </Link>

          <Link
            to="/contact"
            className="hover:text-[#ff0911] hover:border-b-2 hover:border-[#ff0911] flex items-center px-2"
          >
            Bath & Body
          </Link>
          <Link
            to="/contact"
            className="hover:text-[#ff0911] hover:border-b-2 hover:border-[#ff0911] flex items-center px-2"
          >
            Mini Size
          </Link>
          <Link
            to="/contact"
            className="hover:text-[#ff0911] hover:border-b-2 hover:border-[#ff0911] flex items-center px-2"
          >
            Fragrance
          </Link>
          <Link
            to="/contact"
            className="hover:text-[#ff0911] hover:border-b-2 hover:border-[#ff0911] flex items-center px-2"
          >
            Sales & Offers
          </Link>
          <Link
            to="/contact"
            className="hover:text-[#ff0911] hover:border-b-2 hover:border-[#ff0911] flex items-center px-2"
          >
            Bath & Body
          </Link>
        </div>
      </div>
      {looksDrpdown && (
        <div
          className="  bg-[#f7f7f7]"
          onMouseMove={handleMove}
          onMouseLeave={handleLeave}
        >
          <Skincare />
        </div>
      )}
      {brandsDrpdown && (
        <div
          className="  bg-[#f7f7f7]"
          onMouseMove={handleBrandMove}
          onMouseLeave={handleBrandLeave}
        >
          <Brands />
        </div>
      )}
    </div>
  );
};

export default Main_menu;
