import React from 'react'
import './Shop.css'
const Shop = () => {
  return (
    <>
<div className=''>
    <div className='Shop mt-32  md:mt-52 text-white md:flex  ' >


        <div className='pb-10  flex flex-col items-center justify-center md:basis-1/2' >
            <div className='w-9/12' >
            <h1 className='text-start text-4xl mt-10 md:mt-0 md:text-5xl font-bold'>Shop Parts & Accessories</h1><br/>
            <p className='text-start'>We do fast phone repair. In most cases, technicians will be able to repair your device in just minutes, we’ll normally get your phone in and out in 45 minutes or less.</p>
            <button className='md:mt-10  md:w-40 w-32 p-2 bg-white text-black h-14 rounded-xl'>Shop now</button>
            </div>
        </div>
<div className='w-full h-56 md:mb-5 imgg' style={{ 
    backgroundImage: `url("https://img.freepik.com/free-psd/laptop-psd-mockup-with-gradient-led-light_53876-138283.jpg?size=626&ext=jpg&ga=GA1.2.1708022284.1666880048&semt=sph")`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center",
    boxShadow: "inset 0 0 0 2000px rgba(0, 0, 0, 0.234)",
    zIndex: '-1'
    }}>

</div>

    </div>
</div>
    </>
  )
}

export default Shop