import React from "react";
import Session1 from "../images/session1.jpg";
import Session2 from "../images/session2.jpg";
import "../css/Workshop.css";

export default function Workshop() {
  return (
    <>
      <div className="flex flex-col md:flex-row justify-evenly items-center mx-auto w-11/12 bg-[#1e1b4b] rounded-2xl p-4">
        <div className="flex flex-col justify-center">
          <h1 className="text-5xl font-bold pl-8 mt-0 sm:mt-5 text-white">
            Workshops
          </h1>
          <p className="p-8 text-white font-medium max-w-xl">
            100+ community-contributed,self-guided coding tutorials and
            ideas.Learn to code by building,one project at a time. Lorem ipsum
            dolor sit amet, consectetur adipisicing elit.
          </p>

          <div className="flex flex-col justify-start items-start">
            <button className="bg-white ml-8 text-cyan-600 font-bold py-3 px-5 rounded-full hover:bg-sky-700 hover:scale-105 hover:text-white transition-transform duration-300 ease-in-out">
              <a href="/">Browse Workshops</a>
            </button>

            <button className="backdrop-blur-sm bg-white/30 ml-8 mt-2 mb-20 text-white font-bold py-3 px-7 rounded-full hover:bg-sky-700 hover:scale-105 transition-transform duration-300 ease-in-out">
              <a href="/">Build Workshops</a>
            </button>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row justify-between items-center ">
          <div className="session flex flex-col bg-white text-slate-800 rounded-xl pt-2  mr-0 sm:mr-4 w-72 h-80">
            <h2 className="text-xl font-semibold text-black pl-4 ">
              Panel Discussion
            </h2>
            {/* <p className="pl-4 leading-6">
            Ignyte session under Anjali Chouhan(GATE-AIR 13) and Umang Sandhwani(GATE-AIR 200). 
            </p> */}
            <img
              src={Session2}
              alt=""
              className="session_img h-72 pt-4 rounded-xl"
            />
          </div>

          <div className="session flex flex-col bg-white  text-slate-800 rounded-xl pt-2 mt-4 sm:mt-0 w-72 h-80">
            <h2 className="text-xl font-semibold text-black pl-4 ">
              Placement Guidance
            </h2>
            {/* <p className="pl-4 leading-6">
            Ignyte session under Mr. Gaurav Tiwari, founder of Sai Campus Recruitment Training. 
            </p> */}
            <img
              src={Session1}
              alt=""
              className="session_img h-72 pt-4 rounded-xl"
            />
          </div>
        </div>
      </div>
    </>
  );
}
