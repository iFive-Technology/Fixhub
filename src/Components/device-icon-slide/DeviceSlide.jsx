import React from 'react'

import { Slides } from './SlideData'
import bg from './bg.svg'

const DeviceSlide = () => {
  return (
    <>
       <div className=' h-36 w-full flex items-center justify-around px-5 ' style={{
backgroundImage: `url(${bg})`,
backgroundRepeat: "no-repeat",
backgroundSize: "cover",
backgroundPosition: "center",
backgroundColor: '#f7f7f7',

}}>

        {Slides.map((slide) =>(
 <div className='flex flex-col items-center gap-2'>
 <div style={{
backgroundImage: `url(${slide.img})`,
backgroundRepeat: "no-repeat",
backgroundSize: "contain",
backgroundPosition: "center",

}} className='w-32 h-20'></div>
 <p>{slide.name}</p>
</div>
        ))}
       
        </div> 
    </>
  )
}

export default DeviceSlide