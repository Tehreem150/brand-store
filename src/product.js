import React from "react";
import product1 from "./images/product1";

const Product = () => {
  return (
    <div className=" flex justify-center  relative   cursor-pointer">
      <div className="hover:border-2">
        <div className="px-10 py-6 justify-center">
          <img
            src={product1}
            className="h-50 flex justify-center items-center"
            alt="product"
          />
          <div className="my-4 ">
            <p className=" prod_1 pl-[16px]">
              <b className="!text-black text-xl">Salomon </b>XA PRO V8
              WATERPROOF
            </p>
            <p className="bed_text pl-[16px]">89.90</p>
          </div>
        </div>
      </div>
      <div className="group absolute w-[285px] h-[446px]  text-center ">
        <div className="hidden group-hover:block w-[285px] mt-4 h-[446px] group-hover:bg-[#3A3A3A] group-hover:opacity-95">
          <button className="bg-[rgba(255,255,255)]  mt-44 text-[#ff0911] font-medium  w-52 h-12 ">
            Add to Cart
          </button>

          <div className="flex space-x-2 my-2 justify-center text-xl">
            <div className="flex">
              <svg
                className="my-2 mr-1"
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
              >
                <path
                  d="M12 10.6667C11.4747 10.6667 11 10.8733 10.644 11.2047L5.94 8.46667C5.97333 8.31334 6 8.16 6 8C6 7.84 5.97333 7.68667 5.94 7.53334L10.64 4.79334C11 5.12667 11.4733 5.33334 12 5.33334C13.1067 5.33334 14 4.44 14 3.33334C14 2.22667 13.1067 1.33334 12 1.33334C10.8933 1.33334 10 2.22667 10 3.33334C10 3.49334 10.0267 3.64667 10.06 3.8L5.36 6.54C5 6.20667 4.52667 6 4 6C2.89333 6 2 6.89334 2 8C2 9.10667 2.89333 10 4 10C4.52667 10 5 9.79333 5.36 9.46L10.0587 12.2053C10.0211 12.3563 10.0014 12.5111 10 12.6667C10 13.0622 10.1173 13.4489 10.3371 13.7778C10.5568 14.1067 10.8692 14.3631 11.2346 14.5144C11.6001 14.6658 12.0022 14.7054 12.3902 14.6282C12.7781 14.5511 13.1345 14.3606 13.4142 14.0809C13.6939 13.8012 13.8844 13.4448 13.9616 13.0568C14.0387 12.6689 13.9991 12.2668 13.8478 11.9013C13.6964 11.5358 13.44 11.2235 13.1111 11.0037C12.7822 10.784 12.3956 10.6667 12 10.6667Z"
                  fill="white"
                />
              </svg>
              {/* <p className="text-white">Share</p> */}
            </div>
            <div className="flex">
              <svg
                className="my-2 mr-1"
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
              >
                <path
                  d="M10.08 7L11.08 8L14.52 4.55L11 1L10 2L11.8 3.8H2.00001V5.2H11.82L10.08 7ZM5.86001 9L4.86001 8L1.42001 11.5L4.91001 15L5.91001 14L4.10001 12.2H14V10.8H4.10001L5.86001 9Z"
                  fill="white"
                />
              </svg>
              {/* <p className="text-white">Compare</p> */}
            </div>
            <div className="flex">
              <svg
                className="my-2 mr-1"
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
              >
                <path
                  d="M7.99973 14.0361C-5.33333 6.66667 3.99999 -1.33333 7.99973 3.72537C12 -1.33334 21.3333 6.66667 7.99973 14.0361Z"
                  stroke="white"
                  stroke-width="1.8"
                />
              </svg>
              {/* <p className="text-white">Like</p> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
