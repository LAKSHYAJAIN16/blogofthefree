import Image from "next/image";
import Nav from "./components/Nav";

export default function Home() {
  return (
    <>
      <div className="ml-20 mt-6 mr-20 ">
        <h1 className="text-center main-font font-semibold text-6xl">
          for the lovers of <span className="text-american-red">lib</span>
          <span className="text-american-blue">erty</span>
        </h1>
        <h2 className="text-center main-font font-normal">
          the libertarian blog. bullshit free journalism of the people, by the
          people, for the people.
        </h2>
        <br />
        {/* <p className=" text-2xl italic">
          <span className="fancy-font">
          " We hold these truths to be self-evident, that all men are created
          equal, that they are endowed by their Creator with certain unalienable
          Rights, that among these are{" "}
          <b>
            <span className="text-american-red">Life, </span>
            <span className="text-american-blue">
              Liberty and the pursuit of happiness
            </span>
          </b>
          </span>
          ." - <span className="main-font text-lg">a bunch of slaveholders</span>
        </p> */}

        <h2 className="text-center main-font font-bold">Sponsored by</h2>
        <div className="flex flex-wrapitems-center justify-evenly w-full">
          <div>
            <Image src={"sfl.svg"} width={400} height={400} />
          </div>
        </div>

        {/* <div className="flex justify-evenly w-full mt-7 animate-bounce">
          <Image src={"/arrow-down.png"} width={40} height={40} />
        </div> */}
      </div>
    </>
  );
}
