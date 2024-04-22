import React from "react";
const Productbanner = () => {
  return (
    <div className="  flex   h-12 sm:h-16 md:h-20 mx-0  xl:mx-12">
      <div className="flex justify-center py-3 sm:py-6 md:py-8 space-x-5 ml-8 sm:ml-28 lg:ml-10 2xl:ml-24">
        <p className="prod_1 !text-black">Home </p>
        <svg
          className="mt-1"
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
        >
          <path d="M6 15L11 10L6 5L7 3L14 10L7 17L6 15Z" fill="black" />
        </svg>
        <p className=" prod_1 !text-black">Shop</p>
        <svg
          className="mt-1"
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
        >
          <path d="M6 15L11 10L6 5L7 3L14 10L7 17L6 15Z" fill="black" />
        </svg>
        {/* <svg
          className="mt-0.5"
          height="25"
          width="4"
          xmlns="http://www.w3.org/2000/svg"
        >
          <line
            x1="0"
            y1="0"
            x2="0"
            y2="200"
            style={{ stroke: "black", strokeWidth: 4 }}
          />
          Sorry, your browser does not support inline SVG.
        </svg> */}
        <p className="font-medium font-sans !text-black">Asgaard sofa</p>
      </div>
    </div>
  );
};

export default Productbanner;
