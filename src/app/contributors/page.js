import Image from "next/image";
import React from "react";

function Contributors() {
  return (
    <div>
      <div className="mt-5">
        <h1 className="text-center font-bold text-4xl main-font">
          Contributors
        </h1>
        <h2 className="text-center mt-12">Leadership Team</h2>
      </div>
      <div className="flex flex-wrapitems-center justify-evenly w-full mt-7">
        <div>
          <Image
            src={"/lj.jpeg"}
            width={120}
            height={120}
            className="rounded-xl"
          />
          <p className="text-center">Lakshya Jain</p>
        </div>
      </div>

      <h2 className="text-center mt-12">Organizations</h2>
      <div className="flex flex-wrapitems-center justify-evenly w-full mt-7">
        <div>
          <Image
            src={"sfl.svg"}
            width={400}
            height={400}
            className="rounded-xl"
          />
        </div>
      </div>
    </div>
  );
}

export default Contributors;
