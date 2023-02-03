import React from 'react'
import NavBar from '../../Components/NavBar/NavBar'
import './EngHero.css'

const EngHero = () => {
  return (
    <>
       <div>
       <div className='eng-hero w-full'>
 <NavBar />
 <div className='flex w-full h-full'>
{/* text section */}
    <div className='w-full flex  h-full justify-center items-center'>
        <div className='w-8/12 '>
<h1 className='text-6xl font-bold'>Repair from Home and earn income</h1>
<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur ipsam  Labore ad tenetur nam odit culpa eius dolorum quidem, molestiae iste?</p>
<button className=' p-3 px-4 bg-green-500 text-white rounded mt-3'>Get started for free</button>
        </div>
        </div>

{/* image sectiom */}
    <div className='w-full gap-2 flex'>
<div className='w-9/12 eng-img bg-green-500 rounded-b-full'  style={{ 
    backgroundImage: `url("https://img.freepik.com/free-photo/master-holds-new-screen-replacement-disassembled-smartphone-his-laboratory-tool-kit-with-instruments-laptop-front-him-white-table-space-your-text-right_346278-1201.jpg?w=996&t=st=1675433632~exp=1675434232~hmac=e76e3022cba3b99f7ffdbba47101f759d90f6960e786333a1534d6eda26e353a")`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "left",
    boxShadow: "inset 0 0 0 2000px rgba(0, 0, 0, 0.434)",
   
    }}></div>
<div className='w-9/12 eng-img bg-red-500 rounded-t-full mr-2   ' style={{ 
    backgroundImage: `url("https://img.freepik.com/free-photo/master-holds-new-screen-replacement-disassembled-smartphone-his-laboratory-tool-kit-with-instruments-laptop-front-him-white-table-space-your-text-right_346278-1201.jpg?w=996&t=st=1675433632~exp=1675434232~hmac=e76e3022cba3b99f7ffdbba47101f759d90f6960e786333a1534d6eda26e353a")`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "-388px",
    boxShadow: "inset 0 0 0 2000px rgba(0, 0, 0, 0.434)",
   
    }}></div>

    </div>
 </div>
       </div>
        </div>    
    </>
  )
}

export default EngHero