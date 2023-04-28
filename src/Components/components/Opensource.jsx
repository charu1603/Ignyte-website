import React from 'react';

import snippet from '../images/snippet.jpg';

export default function Opensource() {
  return (
    <>
    <div className="mx-auto mt-20 mb-24 mr-0 flex flex-col md:flex-row "id='Open-source'>

          {/* Content */}
          <div className=" md:w-4/6 px-4 py-8 order-2 md:order-2  mt-8 sm:ml-0  md:ml-16 mx-6 ">


              <h1 className="text-5xl font-bold lg:text-7xl md:text-5xl sm:text-4xl mb-10 text-[#1e1b4b]  ">Dive deep into  the world of  open-source  </h1>

              <p className="text-lg mb-4  "> 
              We also function on the open source platform, and as part of our society, we have a separate open source block to spread the word about this.
              </p>

          </div>

      
          <div className="w-full md:w-2/6 order-1 md:order-1 ">


              <div className="flex flex-row flex-wrap justify-center">

                  <div className="flex flex-col rounded-lg bg-[#1e1b4b] m-4 rotate-6">
                      <div className="w-80 h-14 rounded-lg bg-[#1e1b4b]"><p className="text-center text-white my-2">Google Summer of Code</p> </div>
                     
                  </div>
                  <div className="flex flex-col rounded-lg  bg-[#dc2626] m-4 -rotate-6">
                      <div className="w-80 h-14 rounded-lg  bg-[#dc2626]"><p className="text-center text-white my-2">Social Summer of Code</p> </div>
                     
                  </div>
                  <div className="flex flex-col rounded-lg   bg-[#f97316] m-4 rotate-6">
                      <div className="w-80 h-14 rounded-lg  bg-[#f97316]"><p className="text-center text-white my-2">GirlScript Summer Of Code</p> </div>
                  
                  </div>
                  <div className="flex flex-col rounded-lg     bg-[#10b981] m-4 -rotate-6">
                      <div className="w-80 h-14 rounded-lg      bg-[#10b981]"><p className="text-center text-white my-2">JGEC Winter of Code</p> </div>
                      
                  </div>
                
                  <div className="flex flex-col rounded-lg  bg-[#fcd34d] m-4 rotate-6">
                      <div className="w-80 h-14 rounded-lg  bg-[#fcd34d]"><p className="text-center text-white my-2">Hacktoberfest</p> </div>
                  
                  </div>

              </div>
          </div>




      </div></>
  )
}


