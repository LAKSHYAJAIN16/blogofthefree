import React from "react";

export default function Nav() {
  return (
    <div className="ml-12 mt-3 items-center">
      <div className="text-4xl main-font w-full">
        <span className="font-bold">blogof</span>
        <span className="text-american-red font-bold">the</span>
        <span className="text-american-blue font-bold">free</span>

        <div className="float-right mr-12">
          <div className="text-right text-xl main-font flex mt-2 cursor-pointer" >
            <p className="text-american-red mr-4">monthly recaps</p>
            <p className="text-american-red mr-4">articles</p>
            <p className="text-american-blue mr-4">contributors</p>
          </div>
        </div>
      </div>
    </div>
  );
}
