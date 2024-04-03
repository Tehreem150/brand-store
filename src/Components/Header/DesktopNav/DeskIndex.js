import React from "react";
import Main_Bar from "../DesktopNav/Main_bar";
import Main_nav from "../DesktopNav/Main_nav";
import Main_menu from "../DesktopNav/Main_menu";
const Header = () => {
  return (
    <div className="hidden md:block">
      <Main_Bar />
      <Main_nav />
      <Main_menu />
    </div>
  );
};

export default Header;
