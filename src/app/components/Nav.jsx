"use client";

import Image from "next/image";
import React, { useState } from "react";
import { useEffect } from "react";

export default function Nav() {
  const [ofForBy, setOfForBy] = useState(0);

  function ofForByToText(number) {
    if (number % 3 == 0) {
      return "of";
    } else if (number % 3 == 1) {
      return "by";
    } else {
      return "for";
    }
  }

  useEffect(() => {
    setTimeout(() => {
      setOfForBy(ofForBy + 1);
    }, 4000);
  }, [ofForBy]);

  return (
    <div className="ml-12 mr-12 mt-3 items-center border-b-[#002868] border-2 border-t-0 border-l-0 border-r-0">
      <div className="text-2xl main-font w-full pb-2">
        <span>
          <span className="font-bold">blog</span>
          <span className="font-bold">{ofForByToText(ofForBy)}</span>
          <span className="text-american-red font-bold">the</span>
          <span className="text-american-blue font-bold">free</span>
        </span>

        <div className="float-right mr-12">
          <div className="hidden md:block">
            <div className="text-right text-xl main-font flex mt-0 cursor-pointer">
              <p className="text-american-red mr-4">monthly recaps</p>
              <p className="text-american-red mr-4">articles</p>
              <p className="text-american-blue mr-4">contributors</p>
              <p className="text-american-blue mr-4">join</p>
            </div>
          </div>
          <div className="inline-block md:hidden">
            <Image src="/menu.png" width={400} height={400} />
          </div>
        </div>
      </div>
    </div>
  );
}
