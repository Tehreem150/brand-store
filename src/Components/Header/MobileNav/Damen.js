import React from "react";
import nav1 from "../../../images/nav1";
import acessory from "../../../images/acessory";
const Damen = () => {
  return (
    <div className=" grid grid-cols-2 gap-2 my-4">
      <div className="">
        <img src={nav1} className="" />
        <p className=" font-semibold text-center my-2">Accessoires</p>
      </div>
      <div>
        <img src={acessory} className="" />
        <p className=" font-semibold text-center my-2">Sport</p>
      </div>
      <div className="">
        <img src={nav1} className="" />
        <p className=" font-semibold text-center my-2">Accessoires</p>
      </div>
      <div>
        <img src={acessory} className="" />
        <p className=" font-semibold text-center my-2">Sport</p>
      </div>
      <div className="">
        <img src={nav1} className="" />
        <p className=" font-semibold text-center my-2">Accessoires</p>
      </div>
      <div>
        <img src={acessory} className="" />
        <p className=" font-semibold text-center my-2">Sport</p>
      </div>
      <div className="">
        <img src={nav1} className="" />
        <p className=" font-semibold text-center my-2">Accessoires</p>
      </div>
      <div>
        <img src={acessory} className="" />
        <p className=" font-semibold text-center my-2">Sport</p>
      </div>
    </div>
  );
};

export default Damen;
