import React from "react";
import managemnet from "../images/managemnet.jpg";

const Management = () => {
  return (
    <div>
      <div className="grid grid-cols-1 gap-8 mt-2  rounded-xl">
        <div className="col-span-1">
          <img src={managemnet} className="rounded-l-lg" />
        </div>
      </div>
    </div>
  );
};

export default Management;
