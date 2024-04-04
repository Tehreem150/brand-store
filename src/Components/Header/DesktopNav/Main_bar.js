import React from "react";
import { Link } from "react-router-dom";

const Main_Bar = () => {
  return (
    <div className="bg-[#ff0911] h-12 flex justify-center text-white">
      <span className="my-3">
        <b>Save 50%</b>
        <sup>
          <b>††</b>
        </sup>{" "}
        on select beauty. New deals every day. <sup>††</sup>Exclusions/terms
        apply.{" "}
        <Link>
          <b>SHOP NOW ▸</b>
        </Link>
      </span>
    </div>
  );
};

export default Main_Bar;
