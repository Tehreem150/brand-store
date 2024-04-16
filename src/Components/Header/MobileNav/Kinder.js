import React from "react";
import nav2 from "../../../images/nav2";
import acessory1 from "../../../images/acessory1";
import nav1 from "../../../images/nav1";
import acessory from "../../../images/acessory";
const Kinder = () => {
  return (
    <div className="bg-white grid grid-cols-2 gap-2 my-4">
      <div className="">
        <img src={nav2} className="" />
        <p className=" font-semibold text-center my-2">Accessoires</p>
      </div>
      <div>
        <img src={acessory1} className="" />
        <p className=" font-semibold text-center my-2">Sport</p>
      </div>
      <div className="">
        <img src={nav2} className="" />
        <p className=" font-semibold text-center my-2">Accessoires</p>
      </div>
      <div>
        <img src={acessory1} className="" />
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

export default Kinder;
