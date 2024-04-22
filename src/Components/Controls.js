import React from "react";
import { useControls } from "react-zoom-pan-pinch";
import zoomin from "./../images/zoomin.png";
import zoomout from "./../images/zoomout.png";
import undo from "./../images/undo.png";
export default function Controls() {
  const { zoomIn, zoomOut, resetTransform } = useControls();

  return (
    <div className="flex flex-col w-8 text-black p-2 space-y-2 bg-white font-bold text-xl">
      <button onClick={() => resetTransform()}>
        <img src={undo} alt="undo" />
      </button>
      <button onClick={() => zoomIn()}>
        <img src={zoomin} alt="zoomin" />
      </button>
      <button onClick={() => zoomOut()}>
        {" "}
        <img src={zoomout} alt="zoomout" />
      </button>
    </div>
  );
}
