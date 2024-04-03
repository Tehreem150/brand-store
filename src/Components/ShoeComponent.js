import React from "react";
import product1 from "../images/product1";

const ShoeComponent = () => {
  return (
    <div>
      <img src={product1} className="p-5" alt="shoes" />
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

export default ShoeComponent;
