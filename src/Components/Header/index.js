import React from "react";
import MobIndex from "../Header/MobileNav/MobIndex";
import { useWindowSize } from "../../hooks/windowSize";
import DeskIndex from "../Header/DesktopNav/DeskIndex";
export default function Navbar() {
  const [width] = useWindowSize();
  console.log("===", width);

  if (width === 0) return null;

  return <div>{width > 1023 ? <DeskIndex /> : <MobIndex />}</div>;
}
