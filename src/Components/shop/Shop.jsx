import React from 'react'
import './Shop.css'
const Shop = () => {
  return (
    <>
<div>
    <div className='Shop  md:mt-52 text-white md:flex ' style={{ border: '2px solid red'}}>


        <div className='pb-10 flex flex-col items-center justify-center md:basis-1/2'>
            <div className='w-9/12  '>
            <h1 className='text-start text-4xl mt-10 md:mt-0 md:text-5xl font-bold'>Shop Parts & Accessories</h1><br/>
            <p className='text-start'>We do fast phone repair. In most cases, technicians will be able to repair your device in just minutes, we’ll normally get your phone in and out in 45 minutes or less.</p>
            <button className='md:mt-10  md:w-40 w-32 p-2 bg-white text-black h-14 rounded-xl'>Shop now</button>
            </div>
        </div>


        <div className='md:w-7/12 w-full h-50 md:basis-1/4   ' style={{ 
    backgroundImage: `url("https://img.freepik.com/free-photo/phone-screen-with-abstract-marble-aesthetic_53876-145553.jpg?w=826&t=st=1675153504~exp=1675154104~hmac=da348f255ba35c0d504af282862a36cbeed579e3363b8c39bc8541091854bb36")`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center",
    boxShadow: "inset 0 0 0 2000px rgba(0, 0, 0, 0.219)",
    zIndex: '-1'
   
    }}> </div>

    </div>
</div>
    </>
  )
}

export default Shop