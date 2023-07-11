import React from "react";
import Feature1 from '../images/Feature1.png'
import Feature3 from '../images/Feature3.png'

export default function Workshop() {
  return (
    <>
      <div className="flex flex-col md:flex-row justify-evenly items-center mx-auto w-5/6 bg-gradient-to-r from-cyan-300 to-blue-500 rounded-2xl p-4">

        <div className="flex flex-col justify-center">

          <h1 className="text-5xl font-bold pl-8 mt-0 sm:mt-5 text-white">
            Workshops
          </h1>
          <p className="p-8 text-white font-medium">
            100+ community-contributed,self-guided coding tutorials and
            ideas.Learn to code by building,one project at a time. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          </p>
          
          <div className="flex flex-col justify-start items-start">
            <button className="bg-white ml-8  text-cyan-600 font-bold py-3 px-5 rounded-full">
              <a href="/">Browse a Workshops</a>
            </button>
            <button className="backdrop-blur-sm bg-white/30 ml-8 mt-2 mb-20 text-white font-bold py-3 px-5 rounded-full">
              <a href="/">Build a Workshops</a>
            </button>
          </div>

        </div>

        <div className="flex flex-col sm:flex-row justify-between items-center ">
          
          <div className="flex flex-col bg-white  text-slate-800 rounded-xl pt-2 mr-0 sm:mr-4">
            <h2 className="text-xl font-semibold text-black pl-4 ">Event 1</h2>
            <p className="pl-4 leading-6">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Harum,
              corporis!
            </p>
            <img src={Feature1} alt="" className="h-64 sm:h-48 pt-4 rounded-xl" />
          </div>
          
          <div className="flex flex-col bg-white text-slate-800 rounded-xl pt-2 mt-4 sm:mt-0">
            <h2 className="text-xl font-semibold text-black pl-4 ">Event 2</h2>
            <p className="pl-4 leading-6">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Harum,
              corporis!
            </p>
            <img src={Feature3} alt="" className="h-64 sm:h-48 pt-4 rounded-xl" />
          </div>

        </div>

      </div>
    </>
  );
}
