import React from "react";
import { CgWebsite } from 'react-icons/cg'
import {MdOutlineSettingsApplications} from 'react-icons/md'
import {CgIfDesign} from 'react-icons/cg'
import {BsCode} from 'react-icons/bs'
import {SiMediafire} from 'react-icons/si'
import {BiBookContent} from 'react-icons/bi'

export default function Card() {
  return (
    <>
    <div className="sm:pb-20 bg-[#FCFAF2] id='Card' ">

    
    <div className="flex justify-center ">
    <h1 className="text-[#1e1b4b] text-4xl mt-4 md:text-7xl  w-fit font-bold  sm:mb-16 ">
        Our Domains
      </h1>
    </div>

      <div className="flex  jusftify-center items-center">
        <div className="md:flex md:flex-row flex flex-col jusftify-center items-center mx-auto">

          <div className=" p-6 text-black mb-4 lg:ml-10 xl:ml-12 ">
            <div className=" flex justify-center">
              <CgWebsite className='lg:h-32 lg:w-32 md:w-[6.3rem] md:h-28 h-28 w-28 text-[#1e1b4b]'/></div>
            <div className="mt-6 justify-center ">
              <h1 className="mt-2 text-2xl md:text-xl font-bold ml-4 md:ml-3 text-[#1e1b4b]">Developers</h1>
            </div>
          
          </div>

          <div className=" p-6 text-black mb-4 lg:ml-10 xl:ml-12 ">
            <div className=" flex justify-center"><SiMediafire className=' lg:h-32 lg:w-32 md:w-[6.3rem] md:h-28 h-28 w-28 text-[#1e1b4b]'/></div>
            <div className="mt-6 justify-center">
            <h1 className="mt-2 text-2xl md:text-xl font-bold ml-4 md:ml-7  text-[#1e1b4b]">Creators</h1>
            </div>
            
          </div>

          <div className=" p-6 text-black mb-4 lg:ml-10 xl:ml-12 ">
            <div className=" flex justify-center"><BsCode className=' lg:h-32 lg:w-32 md:w-[6.3rem] md:h-28 h-28 w-28 text-[#1e1b4b]'/></div>
            <div className="mt-6 justify-center">
            <h1 className="mt-2 text-2xl md:text-xl font-bold ml-4 md:ml-7  text-[#1e1b4b]">Coders</h1>
            </div>
            
          </div>

          <div className=" p-6 text-black mb-4 lg:ml-10 xl:ml-12 ">
            <div className=" flex justify-center"><BiBookContent className=' lg:h-32 lg:w-32 md:w-[6.3rem] md:h-28 h-28 w-28 text-[#1e1b4b]'/></div>
            <div className="mt-6 justify-center">
            <h1 className="mt-2 text-2xl md:text-xl font-bold md:ml-4  text-[#1e1b4b]">Marketers</h1>
            </div>
            
          </div>

          
          <div className=" p-6 text-black mb-4 lg:ml-10 xl:ml-12 ">
            <div className=" flex justify-center"><CgIfDesign className=' lg:h-32 lg:w-32 md:w-[6.3rem] md:h-28 h-28 w-28 text-[#1e1b4b]'/> </div>
            <div className="mt-6 justify-center">
            <h1 className="mt-2 text-2xl md:text-xl font-bold md:ml-5  text-[#1e1b4b]">Designers</h1>
            </div>
           
          </div>

        </div>
      </div>

    </div>
    </>
  );
}
