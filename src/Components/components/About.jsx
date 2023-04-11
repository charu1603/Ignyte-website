import pic from '../images/pic.jpg';
import React from 'react';
import design from '../images/design.png';
import design3 from '../images/Feature3.png';
import design2 from '../images/Feature2.png';
import design1 from '../images/Feature1.png';
import os from '../images/os.png';

export default function About() {
  return (
    <div className="flex flex-col sm:flex-row justify-center items-center bg-[#1e1b4b]">
      
      <div className="w-3/10 sm:w-1/2 lg:w-2/5 grid grid-cols-2">
     
      <div className='bg-teal-300 h-54 w-full'><img className=" h-full w-full  " src={pic} ></img></div>
       <div className='bg-teal-200 h-54 w-full'><img className="  h-full w-full" src={design3} ></img></div>
       <div className='bg-[#10b981] h-54 w-full flex justify-center items-center'>
         <div className='bg-[#e7e5e4] h-48 w-48 rounded-full flex items-center justify-center'> 
        </div></div>
       <div className='bg-teal-300 h-54 w-full'><img className=" h-full w-full  " src={pic} ></img></div>
       <div className=" bg-[#fcd34d] h-54 w-full ">
         
            <img src={design1} alt="Your Image" className="h-full w-full rounded-full hover:rounded-none "></img> </div>

       <div className=" bg-teal-300 h-54 w-full ">
       <img className=" h-full w-full relative " src={design} ></img> </div>
     </div>
      
  

     
      <div className="w-7/10 sm:w-1/2 lg:w-3/5 pl-20 pr-10 flex flex-col text-white ">
      <p className='font-bold text-[#00df9a]'>DATA ANALYTICS DASHBOARD</p>
        <h1 className="text-5xl font-bold lg:text-7xl md:text-6xl  mb-10 "> Journey </h1>
        
        <p className="text-xm leading-relaxed mb-5 text-[#E7E5E5]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eget
          magna vitae nisi aliquet dictum. Fusce imperdiet quam vel felis
          ultrices, a vestibulum justo fringilla. Donec euismod sapien ac
          mauris facilisis posuere. Sed euismod, metus nec lobortis gravida,
          odio massa bibendum urna, vel suscipit arcu magna ac orci. Sed euismod
          tempor erat, eu ultricies velit rhoncus eget. Duis vehicula
          vestibulum sapien eu consectetur.Fusce imperdiet quam vel felis
          ultrices, a vestibulum justo fringilla.
        </p>
        <button className='bg-[#1e40af] text-[#E7E5E5] w-[200px] rounded-lg font-medium my-6 mx-auto md:mx-0 py-3 '>Learn more about ignyte</button>
      </div>
   </div>
  




  )
}