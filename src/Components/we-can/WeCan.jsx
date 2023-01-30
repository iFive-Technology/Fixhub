import React from 'react'
import {RiNumber1, RiNumber2, RiNumber3, RiNumber4, RiNumber5, RiNumber6, RiNumber7, RiNumber8, RiNumber9} from 'react-icons/ri'
import './WeCan.css'

const weCan = () => {
  return (
    <>
<div className='w-full md:mt-52 flex py-5 we-can'>
  
    <div className='w-full flex justify-center  text-white'>
        <div className=' relative'>
    <span className='bg-green-500 rounded-xl w-7 h-7 flex justify-center items-center absolute bottom-2 right-24'><RiNumber1 /></span>
    <span className='bg-green-500 rounded-xl w-7 h-7 flex justify-center items-center absolute bottom-6 right-12'><RiNumber2 /></span>
    <span className='bg-green-500 rounded-xl w-7 h-7 flex justify-center items-center absolute bottom-16 right-16 '><RiNumber3 /></span>
    <span className='bg-green-500 rounded-xl w-7 h-7 flex justify-center items-center absolute top-40 left-10'><RiNumber4 /></span>
    <span className='bg-green-500 rounded-xl w-7 h-7 flex justify-center items-center absolute top-9 left-14'><RiNumber5 /></span>
    <span className='bg-green-500 rounded-xl w-7 h-7 flex justify-center items-center absolute top-28 right-32'><RiNumber6 /></span>
    <span className='bg-green-500 rounded-xl w-7 h-7 flex justify-center items-center absolute top-32 left-24'><RiNumber7 /></span>
    <span className='bg-green-500 rounded-xl w-7 h-7 flex justify-center items-center absolute bottom-32 right-40 '><RiNumber8 /></span>
    <span className='bg-green-500 rounded-xl w-7 h-7 flex justify-center items-center absolute bottom-44 right-20'><RiNumber9 /></span>
        <img src="https://fixteam.ancorathemes.com/wp-content/uploads/2017/08/phone_2.png" alt="iphone-with-numbers" className='w-96'/>
        </div>
    </div>

    <div className='w-full flex  justify-center'>
        <div >
        <h3 className='text-5xl ml-32 w-full font-bold'>We Can Fix It!</h3>
<p className='mt-10 w-10/12 '>Our prices for iPhone repairs are competitive with anyone in the city. We repair cracked screens for all models of iPhones and
     repair broken buttons, speakers and cameras as well. Cracked screen on your new iPhone? We fix that.</p>

     <ol type='' className='grid grid-cols-2 leading-10 mt-10 font-medium text-lg '>
        <li className='flex items-center gap-3'><span ><RiNumber1 /></span> Headphones Plug</li>
        <li  className='flex items-center gap-3'><span><RiNumber2 /></span> Charging Port</li>
        <li  className='flex items-center gap-3'><span><RiNumber3 /></span>Home Button</li>
        <li  className='flex items-center gap-3'><span><RiNumber4 /></span>Side Buttons</li>
        <li  className='flex items-center gap-3'><span><RiNumber5 /></span>iSight Camera</li>
        <li  className='flex items-center gap-3' ><span><RiNumber6 /></span>Power Button</li>
        <li  className='flex items-center gap-3' ><span><RiNumber7 /></span>Screen</li>
        <li  className='flex items-center gap-3'><span><RiNumber8 /></span>Battery</li>
        <li  className='flex items-center gap-3'><span><RiNumber9 /></span>Won′t Turn On</li>
     </ol>
        </div>
    </div>

</div>
    </>
  )
}

export default weCan