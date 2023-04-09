import React from 'react'
import {Parallax} from 'react-parallax';
import pic from '../images/pic.jpg';


export default function Hero() {
  return (
    <div className='h-full'>
<Parallax strength={600} bgImage={pic} >
  <div className="content h-screen">

  </div>
</Parallax>




    </div>
  )
}

