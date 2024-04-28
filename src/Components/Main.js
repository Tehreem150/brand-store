import React from "react";
function Main() {
  return (
    <div className="px-24">
      <div className="  flex my-image  bg-no-repeat     mt-4 ">
        <div className=" flex   bg-pink-100 my-40 ml-32 mr-10  h-96    ">
          <div className=" hidden lg:block mr-8 md:ml-12 md:mr-12">
            <p className=" pt-8 text-xl">New Arrival</p>
            <p className="text-5xl font-extrabold text-black mt-4 italic">
              Taking you beyond <br />
              the guidebook
            </p>
            <p className="text-3xl font-thin text-black mt-6">
              To inspire you to live your best <br></br> life through travel
            </p>
            <button className="bg-pink-500 text-white text-xl w-48 p-3 mt-8 mb-16">
              COME JOIN ME!
            </button>
          </div>
        </div>
      </div>
      {/* <div className=" flex lg:hidden  bg-pink-100  h-96    ">
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
            COME JOIN ME!
          </button>
        </div>
      </div> */}
    </div>
  );
}

export default Main;
