import React from "react";

import bg1 from "../images/bg1.png";
import bg2 from "../images/bg2.png";
import bg5 from "../images/bg5.png";

export default function Hero() {
  return (
    <div
      className="flex flex-col lg:flex-row justify-center items-center  md:mt-0 bg-[#fff7ed] "
      id="About"
    >
      <div className="w-full lg:w-1/2  pl-10 pr-10 order-2 lg:order-1  flex flex-col text-[#1e1b4b]  ">
        <h1 className="text-5xl font-bold text-center lg:text-9xl md:text-7xl lg:mb-10 sm:text-left ">
          {" "}
          ignyte{" "}
        </h1>
        <p className="my-5 text-black text-xm">
          Contribute to our website and make your first pull request ⏭
        </p>
        <p className="text-black text-xm sm:leading-7 ">
          {" "}
          We're a tight-knit community of{" "}
          <span className="sm:bg-[#f97316] sm:text-white  sm:p-1 sm:rounded-lg sm:mx-2 ">
            developers
          </span>
          , coders, and designers who are here to learn and teach with the power
          of{" "}
          <span className="sm:bg-[#10b981] sm:text-white sm:p-1 sm:rounded-lg sm:mx-2">
            open-source
          </span>
          , with a mission to spread the fire of knowledge and empower each
          other without any bounds!
        </p>

        {/* <a
          href="https://discord.gg/43gn4PsUhx"
          className="bg-[#11271d] text-white w-[120px] font-medium my-6 mx-auto md:mx-4 py-3 text-center rounded-lg"
          style={{
            transition: "background-color 0.3s ease",
            textDecoration: "none",
            backgroundColor: "#dc2626",
          }}
          onMouseOver={(e) => (e.target.style.backgroundColor = "#11271d")}
          onMouseOut={(e) => (e.target.style.backgroundColor = "#dc2626")}
        >
          Get started
        </a> */}

<button className="relative inline-flex border-2 border-slate-600 items-center justify-center p-2  m-5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 hover:border-white rounded-lg group hover:bg-gradient-to-br w-[100px] from-pink-500 to-orange-400 group-hover:from-pink-500 group-hover:to-orange-400 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800">Get Started</button>
<span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0"></span>

        
      </div>
      <div className="grid order-1 w-full grid-cols-2 pt-8 lg:w-1/2 lg:order-2 sm:none md:grid-row-3 lg:grid-row-3 ">
        <div className="bg-[#fff7ed] h-54 w-full ">
          <img className="w-full h-full " src={bg1}></img>
        </div>
        <div className="bg-[#fff7ed] h-54 w-full ">
          <img className="w-full h-full " src={bg5}></img>
        </div>

        <div className="bg-[#fff7ed] h-54 w-full hidden lg:block"></div>

        <div className=" bg-[#fff7ed] h-54 w-full hidden lg:block ">
          <img className="w-full h-full " src={bg2}></img>{" "}
        </div>
      </div>
    </div>
  );
}
