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
      items: 7
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 5
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 2
    }
  };

  return (
    <>
       <div className=' h-36 w-full  px-5 ' style={{
backgroundImage: `url(${bg})`,
backgroundRepeat: "no-repeat",
backgroundSize: "cover",
backgroundPosition: "center",
backgroundColor: '#f7f7f7',

}}>
  <Carousel 
  responsive={responsive} 
  autoPlay={deviceType == "mobile" ? false : true}
  autoPlaySpeed={3000}
  infinite={true}
  removeArrowOnDeviceType={["tablet", "mobile"]}
  transitionDuration={500}
  arrows={false} 

  >

        {Slides.map((slide) =>(
 <div className='flex flex-col mt-5 items-center gap-2'>
 <div style={{
backgroundImage: `url(${slide.img})`,
backgroundRepeat: "no-repeat",
backgroundSize: "contain",
backgroundPosition: "center",

}} className='w-32 h-20'></div>
 <p>{slide.name}</p>
</div>
        ))}
        
       </Carousel>  
        </div> 
    </>
  )
}

export default DeviceSlide