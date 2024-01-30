import React , {useState,useRef , useEffect} from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/all'
gsap.registerPlugin(ScrollTrigger);
import logo from '../images/logo.png'
import {GiHamburgerMenu} from 'react-icons/gi'

export default function Navbar() {
  const content1 = React.createRef(); 

  useEffect(() => {
      const el2 = content1.current;
      gsap.fromTo(el2 , {delay:1, opacity:0, translateY:"-10px"} , {delay:1, opacity:1,translateY:"1px", duration: 1, scrollTrigger:{
        trigger: el2,
      }})
    }, [ ] )

  const [toggleNav , setToggleNav] = useState(false);
  const handleNavToggle = () => {
    setToggleNav(!toggleNav);
    console.log("Toggle nav =>>" , toggleNav);
  }
  
  return (
    <>
    <div className='flex w-screen items-center justify-between p-4 py-8 shadow-md h-12 text-black fixed top-0 z-50 backdrop-blur-xl bg-white/30' ref={content1}>
    <span className='text-2xl font-bold'>
        <img src={logo} alt="" className='w-20 h-12 mb-1 ml-0 md:ml-12'/>
        {/* <h1 className='text-black text-3xl ml-0 md:ml-12'>IGNYTE</h1> */}
        </span>
    <span onClick={handleNavToggle} className='flex md:hidden text-2xl cursor-pointer'>
        <GiHamburgerMenu/>
    </span>
    <div className='hidden md:flex items-center justify-end'>
      <ul className='flex items-center justify-end  mr-12 text-lg'>
              <li className='ml-4 lg:ml-12'><a href="#Home">Home</a></li>
              <li className='ml-4 lg:ml-12'><a href="#About">About Us</a></li>
              <li className='ml-4 lg:ml-12'><a href="#Card">Our Domains</a></li>
              <li className='ml-4 lg:ml-12'><a href="#Feature">Features</a></li>
              <li className='ml-4 lg:ml-12'><a href="#Workshop">Workshop</a></li>
              <li className='ml-4 lg:ml-12'><a href="#Open-source">Open-source</a></li>
              <li className='ml-4 lg:ml-12'><a href="#Contact">Contact</a></li>
      </ul>
    </div>
    </div>


    {toggleNav ? (
        <div className='flex md:hidden bg-white shadow-md p-4 mt-12 z-40 fixed w-full'>
        <ul className='flex flex-col items-start justify-center gap-4 text-lg'>
            <li><a href="#Home">Home</a></li>
            <li><a href="#About">About Us</a></li>
            <li><a href="#Card">Our Domains</a></li>
            <li><a href="#Feature">Features</a></li>
            <li><a href="#Workshop">Workshop</a></li>
            <li><a href="#Open-source">Open-source</a></li>
            <li><a href="#Contact">Contact</a></li>
        </ul> 
        </div>
    )
 : null}
    
    </>

  )
}