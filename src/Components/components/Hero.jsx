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
        <h1 className="text-5xl font-bold lg:text-9xl md:text-7xl lg:mb-10 text-center sm:text-left ">
          {" "}
          ignyte{" "}
        </h1>
        <p className="text-xm text-black my-5">
          Contribute to our website and make your first pull request ⏭
        </p>
        <p className="text-xm  sm:leading-7  text-black ">
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

        <a
          href="https://discord.gg/43gn4PsUhx"
          className="bg-[#dc2626] text-white w-[120px] font-medium my-6 mx-auto md:mx-4 py-3 text-center"
          style={{
            transition: "background-color 0.3s ease",
            textDecoration: "none",
            backgroundColor: "#dc2626",
          }}
          onMouseOver={(e) => (e.target.style.backgroundColor = "#e53e3e")}
          onMouseOut={(e) => (e.target.style.backgroundColor = "#dc2626")}
        >
          Get started
        </a>
      </div>
      <div className="w-full lg:w-1/2 order-1 lg:order-2 grid grid-cols-2 sm:none md:grid-row-3 lg:grid-row-3 pt-8  ">
        <div className="bg-[#fff7ed] h-54 w-full ">
          <img className=" h-full w-full " src={bg1}></img>
        </div>
        <div className="bg-[#fff7ed] h-54 w-full ">
          <img className=" h-full w-full  " src={bg5}></img>
        </div>

        <div className="bg-[#fff7ed] h-54 w-full hidden lg:block"></div>

        <div className=" bg-[#fff7ed] h-54 w-full hidden lg:block ">
          <img className="  h-full w-full" src={bg2}></img>{" "}
        </div>
      </div>
    </div>
  );
}
