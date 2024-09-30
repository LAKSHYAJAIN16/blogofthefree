"use client";

import Image from "next/image";
import React, { useRef, useState } from "react";
import { useEffect } from "react";

export default function Nav() {
  const [ofForBy, setOfForBy] = useState(0);
  const [displayNavUI, setDisplayNavUI] = useState(false);
  const navUI = useRef();

  function ofForByToText(number) {
    if (number % 3 == 0) {
      return "of";
    } else if (number % 3 == 1) {
      return "by";
    } else {
      return "for";
    }
  }

  function openMenu() {
    if(displayNavUI === false){
      setDisplayNavUI(true);
      navUI.current?.classList.remove("hidden");
      navUI.current?.classList.remove("opacity-0");
      navUI.current?.classList.add("opacity-90");
      navUI.current?.classList.add("block");
      navUI.current?.classList.add("animation-fade");
    }
    else{
      setDisplayNavUI(false);
      navUI.current?.classList.add("opacity-0");
      navUI.current?.classList.add("hidden");
      navUI.current?.classList.remove("opacity-90");
      navUI.current?.classList.remove("animation-fade");
      navUI.current?.classList.remove("block");
    }
  }

  useEffect(() => {
    setTimeout(() => {
      setOfForBy(ofForBy + 1);
    }, 4000);
  }, [ofForBy]);

  return (
    <>
      <div
        ref={navUI}
        className="hidden opacity-0 bg-slate-100 fixed mt-10 ml-0 w-full h-full z-10 transition-all"
      >
        <div className="z-30 cursor-pointer">
          <h1 className="text-center font-bold text-xl text-red-900 z-[30] opacity-100 mb-10">
            Choose Tab
          </h1>
          <h2 className="text-center transition-all hover:scale-125  font-bold text-6xl text-blue-900 z-[30] opacity-100 mb-10">
            {" "}
            <a href="/articles">Articles</a>
          </h2>
          <h2 className="text-center transition-all hover:scale-125  font-bold text-6xl text-blue-900 z-[30] opacity-100 mb-10">
            {" "}
            <a href="/contributors">Contributors</a>
          </h2>
          <h2 className="text-center transition-all hover:scale-125  font-bold text-6xl text-blue-900 z-[30] opacity-100 mb-10">
            {" "}
            <a href="/join">Join</a>
          </h2>
        </div>
      </div>
      <div className="sticky ml-3 mr-3 sm:ml-12 sm:mr-12 mt-3 items-center border-b-[#002868] border-2 border-t-0 border-l-0 border-r-0">
        <div className="text-2xl main-font w-full pb-2">
          <a href="/">
            <span>
              <span className="font-bold">blog</span>
              <span className="font-bold">{ofForByToText(ofForBy)}</span>
              <span className="text-american-red font-bold">the</span>
              <span className="text-american-blue font-bold">free</span>
            </span>
          </a>

          <div className="float-right mr-5">
            <div className="md:hidden -mt-1 cursor-pointer">
              <Image
                src="/menu.png"
                width={40}
                height={40}
                onClick={() => openMenu()}
              />
            </div>

            <div className="hidden md:block">
              <div className="text-right text-xl main-font flex mt-0 cursor-pointer">
                <a href="/articles">
                  <p className="text-american-red mr-4 hover:scale-110 transition-all">
                    articles
                  </p>
                </a>
                <a href="/contributors">
                  <p className="text-american-blue mr-4 hover:scale-110 transition-all">
                    contributors
                  </p>
                </a>
                <a href="/join">
                  <p className="text-american-blue mr-4 hover:scale-110 transition-all">
                    join
                  </p>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
