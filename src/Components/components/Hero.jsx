import React from 'react'
import Hero1 from '../images/hero.png' ;
import pattern from '../images/pattern1.png' ;
import ignyteLogo from '../images/logo.png';


export default function Hero() {
  return (
   
<div className="flex flex-col md:flex-row  justify-center items-center ">
      {/* Content */}
      <div className="w-full md:w-1/2 px-4 py-8 order-2 md:order-1  md:ml-20">
      <h1 className="text-5xl font-bold lg:text-7xl md:text-6xl  mb-10 text-[#1e1b4b] ">
        {/* Ignyte */}
      <img src={ignyteLogo} alt="" className='h-[7rem] md:h-[10.5rem] ml-[-30px] mb-[-20px]' />
       Community 
       </h1>
        <p className="text-lg mb-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eget massa ut libero interdum ultrices. 
          Donec ut tellus vel purus faucibus fermentum id eget mi. Nunc ullamcorper mauris nec ex fringilla 
          lobortis.
        </p>
        <button className="bg-[#dc2626]  text-white font-bold py-3 px-5 rounded">
          <a href="https://discord.gg/43gn4PsUhx">Join Discord</a>
        </button>
      </div>
      
      {/* Image */}
      <div className="w-full md:w-1/2 order-1 md:order-2 ">
        <img src={pattern} alt="placeholder" className="w-full md:h-screen h-3/5" />
      </div>
    </div>


  
  )
}

