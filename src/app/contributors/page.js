import Image from "next/image";
import React from "react";

function Contributors() {
  return (
    <div>
      <div className="mt-5">
        <h1 className="text-center font-bold text-4xl main-font">
          Contributors
        </h1>
        <h2 className="ml-20">Leadership Team</h2>
      </div>
      <div className="flex flex-wrapitems-center justify-evenly w-full">
        <div>
          <p>Lakshya Jain</p>
        </div>
        <div>
          <img />
        </div>
      </div>
    </div>
  );
}

export default Contributors;
