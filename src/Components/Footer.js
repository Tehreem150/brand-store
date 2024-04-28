import React from "react";
import { Link } from "react-router-dom";
import logo from "../images/logo.png";

const Footer = () => {
  return (
    <div className="footer mt-10   lg:mt-20 bg-[#1b1b1c] ">
      <footer className="grid grid-cols-1 md:grid-cols-3  lg:grid-cols-6 mx-0 lg:mx-12 xl:mx-28 py-8 flex-col   lg:flex-row justify-center  mb-2 px-5 lg:px-0">
        <div className=" mx-12 lg:mx-auto sm:col-span-1  md:col-span-2">
          <div className="">
            <img
              src={logo}
              className="w-24 h-24 mt-4 p-4 rounded-full   bg-white   "
              alt="logo"
            />
          </div>

          <p className="prod_1 !text-white mt-5 ">
            BrankMarkt ist ein Brand Store in St. Gallen mit einer exklusiven
            Kollektion.
          </p>
          <p className="prod_1 !text-white ">
            <br /> Rosenbergstrasse 46, 9000 St.Gallen <br />
            071 223 16 36 <br />
            store@brandmarkt.ch
          </p>
        </div>

        <div className="mx-12 lg:mx-auto mt-6 md:mt-5 lg:mt-10 xl:mt-5">
          <p className="prod_2 mt-5 md:mt-0 ">Support</p>

          <div className="mt-6 md:mb-6">
            {" "}
            <Link to="/" className="nav_items   ">
              Privacy Policies
            </Link>
          </div>
          <div className="mt-6 md:mb-6">
            {" "}
            <Link to="/" className="nav_items   ">
              Returns
            </Link>
          </div>
          <div className="mt-6 md:mb-6">
            {" "}
            <Link to="/" className="nav_items   ">
              Log In & Register
            </Link>
          </div>
          <div className="mt-6 md:mb-6">
            {" "}
            <Link to="/" className="nav_items   ">
              Privacy Policies
            </Link>
          </div>
        </div>
        <div className="mx-12 lg:mx-auto mt-6 md:mt-5 lg:mt-10 xl:mt-5">
          <p className="prod_2 mt-5 md:mt-0 ">Help</p>

          <div className="mt-6  md:mt-6">
            {" "}
            <Link to="/" className="nav_items   ">
              Payment Options
            </Link>
          </div>

          <div className="mt-6 md:mb-6">
            {" "}
            <Link to="/" className="nav_items   ">
              Privacy Policies
            </Link>
          </div>
          <div className="mt-6 md:mb-6">
            {" "}
            <Link to="/" className="nav_items   ">
              Log In & Register
            </Link>
          </div>
          <div className="mt-6 md:mb-6">
            {" "}
            <Link to="/" className="nav_items   ">
              Privacy Policies
            </Link>
          </div>
        </div>
        <div className="mx-12 lg:mx-auto mt-6 md:mt-5 lg:mt-10 xl:mt-5">
          <p className="prod_2 mt-5 md:mt-0 ">Support</p>

          <div className="mt-6 md:mb-6">
            {" "}
            <Link to="/" className="nav_items   ">
              Returns
            </Link>
          </div>
          <div className="mt-6 md:mb-6">
            {" "}
            <Link to="/" className="nav_items   ">
              Log In & Register
            </Link>
          </div>
          <div className="mt-6 md:mb-6">
            {" "}
            <Link to="/" className="nav_items   ">
              Privacy Policies
            </Link>
          </div>
          <div className="mt-6 md:mb-6">
            {" "}
            <Link to="/" className="nav_items   ">
              Privacy Policies
            </Link>
          </div>
        </div>
        <div className="mx-12 lg:mx-auto mt-6 md:mt-5 lg:mt-10 xl:mt-5">
          <p className="prod_2 mt-5 md:mt-0 ">Support</p>

          <div className="mt-6 md:mb-6">
            {" "}
            <Link to="/" className="nav_items   ">
              Returns
            </Link>
          </div>
          <div className="mt-6 md:mb-6">
            {" "}
            <Link to="/" className="nav_items   ">
              Privacy Policies
            </Link>
          </div>
          <div className="mt-6 md:mb-6">
            {" "}
            <Link to="/" className="nav_items   ">
              Log In & Register
            </Link>
          </div>
          <div className="mt-6 md:mb-6">
            {" "}
            <Link to="/" className="nav_items   ">
              Privacy Policies
            </Link>
          </div>
        </div>
      </footer>
      <div className="border-t-2 ">
        <p className="prod_1 mr-8 py-4 ml-16 lg:ml-16 xl:ml-24 2xl:ml-28 !text-white ">
          Copyright 2024. All rights reserved
        </p>
      </div>
    </div>
  );
};

export default Footer;
