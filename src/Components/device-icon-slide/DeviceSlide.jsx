import React, { useState } from 'react'

import { Slides } from './SlideData'
import bg from './bg.svg'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const DeviceSlide = () => {

const deviceType = window.innerWidth;
  


  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 7 
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 6
    },
    tablet: {
      breakpoint: { max: 768, min: 768 },
      items: 4
    },
    mobile: {
      breakpoint: { max: 375, min: 0 },
      items: 2
    }
  };

  return (
    <>
    <div className='w-full flex flex-col items-center'style={{
backgroundImage: `url(${bg})`,
backgroundRepeat: "no-repeat",
backgroundSize: "cover",
backgroundPosition: "center",
backgroundColor: '#f7f7f7',

}}>
  <h1 className='text-center mt-20 font-bold md:text-5xl'>Get Your Repair Started</h1>
       <div className='"w-11/12 md:w-10/12 gap-y-10 gap-x-5 place-self-center mt-10 grid grid-cols-2 sm:grid-cols-3 place-items-center md:grid-cols-3 lg:grid-cols-4 py-20 ' >


        {Slides.map((slide) =>(

   <div className='w-32 overflow-hidden h-36 md:h-40  bg-white md:w-40 lg:w-52 flex flex-col items-center border-none outline-none justify-center rounded  ' key={slide.id}>
   <div className="w-52 md:w-60 lg:w-72 flex justify-center">
<img src={slide.img} alt='earpic' className='w-16'/>
</div>
       <h4 className='font-medium text-center text-1xl md:text-xl mt-2'>{slide.name}</h4>
 
   </div>
        ))}

        </div> 
        </div>
    </>
  )
}

export default DeviceSlide