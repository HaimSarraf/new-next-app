"use client";

import Link from "next/link";

function Footer() {
  return (
    <div className="grid grid-cols-3 p-4 bg-gradient-to-l from-stone-400 to-gray-800">
      <div className="flex flex-row-reverse items-center justify-center gap-10">
        <Link href={"https://en.wikipedia.org/wiki/Bodybuilding"} target="_blank">
          <button className="shadow-md shadow-[#c4ff70] text-[#c4ff70] p-4 hover:bg-[#c4ff70] hover:text-black hover:rounded-lg hover:shadow-none">
            Read More about Bodybuiling on Wikipedia
          </button>
        </Link>
        <button
          onClick={() =>
            window.scrollTo({ top: 0, left: 0, behavior: "smooth" })
          }
          className="absolute left-2 -bottom-40 shadow-[#c4ff70]  text-[#c4ff70] rounded-3xl p-2 shadow-lg hover:shadow-none hover:bg-[#c4ff70] hover:text-black"
        >
          ⇑
        </button>
      </div>

      <div className="flex flex-col items-center justify-center"></div>

      <div className=" flex flex-col gap-4 text-center">
        <div className="shadow-sm shadow-[#c4ff70] text-[#c4ff70] p-2  hover:scale-x-105 hover:cursor-pointer hover:bg-[#c4ff70] hover:text-black hover:rounded-lg flex flex-row justify-around items-center ">
          <h3 className="">Contact Us</h3>
          <span className="text-sm mx-14 lg:text-center font-light font-mono">
            info@example.com
          </span>
        </div>
        <div className="shadow-sm shadow-[#c4ff70] text-[#c4ff70] p-2  hover:scale-x-105 hover:cursor-pointer hover:bg-[#c4ff70] hover:text-black hover:rounded-lg flex flex-row justify-around items-center ">
          <h3 className="">Phone</h3>
          <span className="text-sm mx-10 font-light font-mono">
            +98-21-55558888
          </span>
        </div>
        <div className="shadow-sm shadow-[#c4ff70] text-[#c4ff70] p-2  hover:scale-x-105 hover:cursor-pointer hover:bg-[#c4ff70] hover:text-black hover:rounded-lg flex flex-row justify-around  items-center ">
          <h3 className="">Address</h3>
          <span className="text-xs mx-1 font-light font-mono">
            Iran-Tehran
          </span>
        </div>
      </div>
    </div>
  );
}
export default Footer;
