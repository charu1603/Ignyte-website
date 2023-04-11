import React from 'react'
import discord from '../images/discord.png';



export default function Hero() {
  return (
   
<div className="flex flex-col md:flex-row h-screen justify-center items-center mx-20 mt-20">
      {/* Content */}
      <div className="w-full md:w-7/12 px-4 py-8 order-2 md:order-1 ">
      <h1 className="text-5xl font-bold lg:text-7xl md:text-6xl  mb-10 text-[#1e1b4b] ">Ignyte <br></br> Community </h1>
        <p className="text-lg mb-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eget massa ut libero interdum ultrices. 
          Donec ut tellus vel purus faucibus fermentum id eget mi. Nunc ullamcorper mauris nec ex fringilla 
          lobortis.
        </p>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Learn More
        </button>
      </div>
      
      {/* Image */}
      <div className="w-full md:w-5/12 order-1 md:order-2 ">
        <img src={discord} alt="placeholder" className="w-full h-96" />
      </div>
    </div>


  
  )
}

