import React from "react";
function MainSlider() {
  return (
    <div>
      <div className="  flex my-image bg-cover bg-no-repeat   mx-auto justify-start">
        <div className=" flex  mt-64 ml-64 h-96 rounded-md   ">
          {/* <div className=" hidden lg:block ml-24 mr-8 md:ml-12 md:mr-12">
            <p className=" pt-5 text-xl ">New Arrival</p>
            <p className="text-4xl font-extrabold text-black mt-3 italic">
              Taking you beyond <br />
              the guidebook
            </p>
            <p className="text-3xl font-thin text-black mt-4">
              To inspire you to live your best <br></br> life through Shopping
            </p>
            <button className="bg-[#ff0911] text-white text-xl w-48 p-3 mt-6 mb-16">
              SHOP WITH ME!
            </button>
          </div> */}
        </div>
      </div>
      <div className=" flex hidden  bg-pink-100  h-96    ">
        <div className="  ml-24 mr-8 md:ml-32 md:mr-12">
          <p className=" pt-8 text-xl">New Arrival</p>
          <p className="text-5xl font-extrabold text-black mt-4 italic">
            Taking you beyond <br />
            the guidebook
          </p>
          <p className="text-3xl font-thin text-black mt-6">
            To inspire you to live your best <br></br> life through travel
          </p>
          <button className="bg-pink-500 text-white text-xl w-48 p-3 mt-8 mb-16">
            SHOP WITH US!
          </button>
        </div>
      </div>
    </div>
  );
}

export default MainSlider;
