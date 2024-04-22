import React from "react";
const Contact = () => {
  return (
    <div className="container float mx-auto justify-center">
      <p className="getin !text-2xl text-center mt-4">Get In Touch With Us</p>
      <p className="text-center prod_1 mt-1 mx-8 lg:mx-48 xl:mx-96">
        For More Information About Our Product & Services. Please Feel Free To
        Drop Us An Email. Our Staff Always Be There To Help You Out. Do Not
        Hesitate!
      </p>
      <div className="flex flex-col  items-center mt-6">
        <div>
          <label className="text-left !text-black nav_items font-semibold">
            Your name <br></br>
          </label>
          <input
            type="text"
            placeholder="Abc"
            className="prod_1 my-4 w-80 sm:w-96 border-2 rounded-lg px-6 py-4"
          />
        </div>
        <div className="mt-3">
          <label className="text-left nav_items !text-black font-semibold">
            Email address <br></br>
          </label>
          <input
            type="text"
            placeholder="Abc@def.com"
            className="prod_1 my-4 w-80 sm:w-96 border-2 rounded-lg px-6 py-4"
          />
        </div>
        {/* <div className="mt-4">
          <label className="text-left nav_items !text-black font-semibold">
            Subject <br></br>
          </label>
          <input
            type="text"
            placeholder="This is an optional"
            className="prod_1 my-4 w-80 sm:w-96 border-2 rounded-lg px-6 py-4"
          />
        </div> */}
        <div className="mt-3">
          <label className="text-left nav_items !text-black font-semibold">
            Review<br></br>
          </label>
          <input
            type="text"
            placeholder="Hi! i’d like to write about"
            className="prod_1 my-4 px-6 pb-8 w-80 sm:w-96 h-28 border-2 rounded-lg "
          />
        </div>
        <button className="bg-[#ff0911] text-white text-xl px-14 py-3 mt-8 mb-16 rounded-lg">
          Submit
        </button>
      </div>
    </div>
  );
};

export default Contact;
