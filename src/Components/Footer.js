import React from "react";
import { Link } from "react-router-dom";
import logo from "../images/logo.png";

const Footer = () => {
  return (
    <div className="footer mt-10   lg:mt-20 bg-[#1b1b1c] ">
      <footer className="flex mx-0 lg:ml-8 xl:mx-16 py-8 flex-col   lg:flex-row justify-around  mb-2 px-5 lg:px-0">
        <div className="w-full lg:w-1/4 mr-0 lg:mr-10 ">
          <div className="">
            <img
              src={logo}
              className="w-32 mt-4 p-4 rounded   bg-white   "
              alt="logo"
            />
          </div>

          <p className="prod_1 !text-white mt-5 ">
            BrankMarkt ist ein Brand Store in St. Gallen mit einer exklusiven
            Kollektion. Wir haben verschiedene Kollektionen für Herren,
            Damen,eine große Auswahl an Schuhen,Taschen und Parfüms.
          </p>
          <p className="prod_1 !text-white ">
            {/* <strong className="nav_items">Address:</strong> */}
            <br /> Rosenbergstrasse 46, 9000 St.Gallen <br />
            071 223 16 36 <br />
            store@brandmarkt.ch
          </p>
        </div>

        <div className="mx-0 lg:mx-auto mt-6 md:mt-5 lg:mt-10 xl:mt-5">
          <p className="prod_2 mt-5 md:mt-0 ">Support</p>
          <div className="mt-6  md:mt-6">
            {" "}
            <Link to="/" className="nav_items   ">
              Payment Options
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
        <div className="mx-0 lg:mx-auto mt-6 md:mt-5 lg:mt-10 xl:mt-5">
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
        <div className="mx-0 lg:mx-auto mt-6 md:mt-5 lg:mt-10 xl:mt-5">
          <p className="prod_2">Links</p>
          <ul>
            <li className="nav_items mt-6  md:mt-6">
              <Link to="/">Home</Link>
            </li>
            <li className="nav_items mt-6 md:mt-6">
              <Link to="/shop">Shop</Link>
            </li>
            <li className="nav_items mt-6 md:mt-6">
              <Link to="/about">About</Link>
            </li>
            <li className="nav_items mt-6 md:mt-6">
              <Link to="/contact">Blog</Link>
            </li>
            <li className="nav_items mt-6 md:mt-6">
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </div>

        <div className="mx-0 lg:mx-auto mt-6 md:mt-5 lg:mt-5 xl:mt-0">
          <p className="prod_2 mt-5 md:mt-5   ">Newsletter</p>
          <p className="prod_1 mt-2  md:mt-[46px] ">
            {" "}
            Enter Your Email Address
            <hr className="bg-[#000] mr-16 lg:mr-0" />
          </p>
          <div className="mt-2  md:mt-[46px]">
            <p className="nav_items "> Subscribe</p>
            <hr className="bg-[#000]  w-[80px]" />
          </div>
        </div>
      </footer>
      <div className="border-t-2 ">
        <p className="prod_1 mr-8 py-2 ml-2 lg:ml-16 !text-white ">
          Copyright 2024. All rights reserved
        </p>
      </div>
    </div>
  );
};

export default Footer;
