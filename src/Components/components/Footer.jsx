import React from 'react'
import { FaLinkedinIn , FaInstagram , FaYoutube , FaFacebook} from "react-icons/fa";

export default function Footer() {
  return (
    <>
      <div className=' bg-slate-800 text-white mt-20 '>

<div className='grid grid-cols-1 sm:grid-cols-3 gap-12 ml-20 mr-20'>
    <div className='md:mb-20'>
       <p className='mt-20 mb-12'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Similique tenetur exercitationem, obcaecati reiciendis sit dolorem.</p>
       <div className='flex '>
       <a href='https://instagram.com/theasperteam?igshid=YmMyMTA2M2Y=' target='blank' className='bg-white text-black p-2 w-fit rounded-full mr-2'><FaInstagram/></a>
       <a href='https://www.linkedin.com/company/theasperteam/' target='blank' className='bg-white text-black p-2 w-fit rounded-full mr-2'><FaLinkedinIn/></a>
       </div>
    </div>

    <div className='flex flex-col mt-0 sm:mt-20  list-none '>
        <h2 className='text-2xl  font-bold flex justify-center sm:justify-start md:justify-center'>Company</h2>
        <li className='leading-10 mt-4'>
            <ul className='flex justify-center sm:justify-start md:justify-center'><a href="">About Us</a></ul>
            <ul className='flex justify-center sm:justify-start md:justify-center'><a href="">Privacy Policy</a></ul>
            <ul className='flex justify-center sm:justify-start md:justify-center'><a href="">Terms and Condition</a></ul>
        </li>
    </div>

    <div className='flex flex-col mt-0 sm:mt-20  list-none'>
        <h2 className='text-2xl font-bold flex justify-center sm:justify-start md:justify-center'>Quick Links</h2>
        <li className='leading-10 mt-4'>
            <ul className='flex justify-center sm:justify-start md:justify-center'><a href="">Events</a></ul>
            <ul className='flex justify-center sm:justify-start md:justify-center'><a href="">Blog</a></ul>
            <ul className='flex justify-center sm:justify-start md:justify-center'><a href="">Join now</a></ul>
        </li>
     </div>

</div>

<div className='lg:h-[13rem] md:h-[9.3rem] h-[7.5rem] sm:h-40'>
    <h1 className='flex justify-center text-slate-700 mt-4 text-[2.2rem] font-bold sm:text-[3.8rem] md:mt-0 md:text-[4.6rem] lg:text-[8rem] sm:font-extrabold'>IGNYTECOMMUNITY</h1>
    
</div>


</div>
    </>
  )
}
