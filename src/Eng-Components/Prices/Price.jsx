import React from 'react'
import './Price.css'
import {TbCheck, TbX } from 'react-icons/tb'

const Price = () => {
  return (
    <>
    <div className='w-full h-full flex flex-col justify-center'>
        <h1 className='text-center text-5xl mt-40'>The service subscription</h1>
        <div className='grid grid-cols-3 w-9/12 place-self-center place-items-center mt-20'>
           
           <div className='rounded price-card flex flex-col items-center mt-14 w-72'>
<div className='w-11/12 bg-green-400 mt-2 h-10 text-center '><h6 className='text-2xl'>Free</h6></div>
<div className='flex flex-col items-center mt-10'>

    <span className='flex'><sup className='text-2xl'>$</sup><h2 className='text-5xl'>0<sub className='text-sm'>/wk</sub></h2></span>
    <h6 className='mt-2'>GREAT FOR START</h6>
    <p>Enjoy the great service we offer</p>
</div>
<div className='mt-2'>
    <button className='text-xl p-2 w-52 border-black border-2'>Subscribe Now</button>
    <div className='mt-4 in-list'>
        <p className='flex items-center gap-2 '><span className='text-green-400 text-xl'><TbCheck /></span>hgeagheg</p>
        <p  className='flex items-center gap-2 '><span className='text-green-400 text-xl'><TbCheck /></span>hehetghb</p>
        <p  className='flex items-center gap-2'><span className='text-red-400 text-xl'><TbX /></span>ethebtdfgbeftbh</p>
        <p  className='flex items-center gap-2 '><span className='text-green-400 text-xl'><TbCheck /></span>ethetgfhbegtfbh</p>
    </div>
</div>
  </div>
  {/* price card */}
           <div className='rounded price-card flex flex-col items-center mt-0 w-72'>
<div className='w-11/12 bg-yellow-400 mt-2 h-10 text-center '><h6 className='text-2xl'>Free</h6></div>
<div className='flex flex-col items-center mt-10'>

    <span className='flex'><sup className='text-2xl'>$</sup><h2 className='text-5xl'>13<sub className='text-sm'>/mo</sub></h2></span>
    <h6 className='mt-2'>GREAT FOR START</h6>
    <p>Enjoy the great service we offer</p>
</div>
<div className='mt-2'>
    <button className='text-xl p-2 w-52 border-black border-2'>Subscribe Now</button>
    <div className='mt-4 in-list'>
        <p className='flex items-center gap-2 '><span className='text-green-400 text-xl'><TbCheck /></span>hgeagheg</p>
        <p  className='flex items-center gap-2 '><span className='text-green-400 text-xl'><TbCheck /></span>hehetghb</p>
        <p  className='flex items-center gap-2'><span className='text-red-400 text-xl'><TbX /></span>ethebtdfgbeftbh</p>
        <p  className='flex items-center gap-2 '><span className='text-green-400 text-xl'><TbCheck /></span>ethetgfhbegtfbh</p>
        <p  className='flex items-center gap-2 '><span className='text-green-400 text-xl'><TbCheck /></span>ethetgfhbegtfbh</p>
    </div>
</div>
  </div>
  {/* price card */}
           <div className='rounded price-card flex flex-col items-center mt-14 w-72'>
<div className='w-11/12 silver mt-2 h-10 text-center '><h6 className='text-2xl'>Free</h6></div>
<div className='flex flex-col items-center mt-10'>

    <span className='flex'><sup className='text-2xl'>$</sup><h2 className='text-5xl'>32<sub className='text-sm  '>/yr</sub></h2></span>
    <h6 className='mt-2'>GREAT FOR START</h6>
    <p>Enjoy the great service we offer</p>
</div>
<div className='mt-2'>
    <button className='text-xl p-2 w-52 border-black border-2'>Subscribe Now</button>
    <div className='mt-4 in-list'>
        <p className='flex items-center gap-2 '><span className='text-green-400 text-xl'><TbCheck /></span>hgeagheg</p>
        <p  className='flex items-center gap-2 '><span className='text-green-400 text-xl'><TbCheck /></span>hehetghb</p>
        <p  className='flex items-center gap-2'><span className='text-green-400 text-xl'><TbCheck /></span>ethebtdfgbeftbh</p>
        <p  className='flex items-center gap-2 '><span className='text-green-400 text-xl'><TbCheck /></span>ethetgfhbegtfbh</p>
        <p  className='flex items-center gap-2 '><span className='text-green-400 text-xl'><TbCheck /></span>ethetgfhbegtfbh</p>
    </div>
</div>
  </div>
  {/* price card */}

        </div>
    </div>
    </>
  )
}

export default Price