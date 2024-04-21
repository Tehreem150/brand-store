import React from "react";
import shoe from "../images/shoe.webp";
const ShoeComponents = () => {
  return (
    <div>
      <img src={shoe} className="p-0 sm:p-5" alt="shoes" />
      <div>
        <p className="text-center text-[#878787]">PU</p>
        <p className="text-center font-semibold text-[16px] text-[#222]">
          Pink Formal Sandal PU4902
        </p>
        <p className="text-center text-[#696969]">Rs.6,000</p>
      </div>
    </div>
  );
};

export default ShoeComponents;
