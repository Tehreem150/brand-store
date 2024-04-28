import React from "react";
import { Link } from "react-router-dom";
import Marquee from "react-fast-marquee";
const MainBar = () => {
  return (
    <div className="bg-[#ff0911] h-10 sm:h-10 flex justify-center text-white">
      <Marquee>
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
      </Marquee>
    </div>
  );
};

export default MainBar;
