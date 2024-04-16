import React, { useState } from "react";
import ToggleNav from "./ToggleNav";
import MainBar from "./MainBar";
import MainNav from "./MainNav";
import { Link } from "react-router-dom";

const MainMenu = () => {
  const [togglemenu, setToggleMenu] = useState(false);
  return (
    <div>
      {!togglemenu && (
        <div>
          <MainBar />
          <MainNav />
          <div className="flex h-12 mt-1.5 border-x space-x-3 border-y border-gray-300">
            <Link to="/nav">
              <div
                className="h-6 flex flex-col ml-4  justify-between my-3"
                onClick={() => setToggleMenu(true)}
              >
                <span className="block h-0.5 w-7 bg-black rounded-full"></span>
                <span className="block h-0.5 w-5 bg-black rounded-full"></span>
                <span className="block h-0.5 w-7 bg-black rounded-full"></span>
              </div>
            </Link>
            <form className="w-full ">
              <input
                type="text"
                placeholder="Search"
                className="search border-l border-gray-300 w-full bg-no-repeat bg-left  h-12  pl-8 text-black border-[1px] flex  "
              />
            </form>
          </div>
        </div>
      )}
      {/* {togglemenu && (
        <ToggleNav togglemenu={togglemenu} setToggleMenu={setToggleMenu} />
      )} */}
    </div>
  );
};

export default MainMenu;
