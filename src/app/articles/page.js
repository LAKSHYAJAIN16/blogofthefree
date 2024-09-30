import { createClient } from "next-sanity";
import Image from "next/image";
import React from "react";

const client = createClient({
  projectId: "dv3tiz24",
  dataset: "production",
  apiVersion: "2022-03-25",
  useCdn: false,
});

export default async function Articles({ params }) {
  const articles = await client.fetch(`*[_type == "post"]`);

  return (
    <div className="main-font">
      <h1 className="main-font font-bold text-3xl text-center text-black mt-2">
        The Blog
      </h1>
      <div className="flex justify-center items-center mt-3">
        <div className="cursor-pointer bg-white rounded-2xl flex items-center pl-4 pt-4 pb-4 h-6 pr-4 border-dotted text-center border-2 border-red-300 mr-2">
          <Image
            src={"/US-flag.webp"}
            height={30}
            width={30}
            className="rounded-sm pr-1"
          />
          Election {"    "}{" "}
          <span className="text-american-blue ml-1"> {"   "} 2</span>
          <span className="text-american-red">0</span>
          <span className="text-american-blue">2</span>
          <span className="text-american-red">4</span>
        </div>
        <div className="cursor-pointer bg-white rounded-2xl flex items-center pl-4 pt-4 pb-4 h-6 pr-4 border-dotted text-center border-2 border-red-300 mr-2">
          <Image
            src={"/US-flag.webp"}
            height={30}
            width={30}
            className="rounded-sm pr-1"
          />
          Global Politics
        </div>
        <div className="cursor-pointer bg-white rounded-2xl flex items-center pl-4 pt-4 pb-4 h-6 pr-4 border-dotted text-center border-2 border-red-300 mr-2">
          <Image
            src={"/US-flag.webp"}
            height={30}
            width={30}
            className="rounded-sm pr-1"
          />
          Economics
        </div>
        <div className="cursor-pointer bg-white rounded-2xl flex items-center pl-4 pt-4 pb-4 h-6 pr-4 border-dotted text-center border-2 border-red-300 mr-2">
          <Image
            src={"/US-flag.webp"}
            height={30}
            width={30}
            className="rounded-sm pr-1"
          />
          News
        </div>
      </div>
      <p>{JSON.stringify(articles)}</p>
    </div>
  );
}
