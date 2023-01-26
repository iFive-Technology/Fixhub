import React, { useState } from 'react'
import './NavBar.css'
import logo from '../Assets/logos/fixlogo.png'
import { FaBars } from 'react-icons/fa'
import { FiX, FiChevronDown } from 'react-icons/fi'



const NavBar = () => {
const [showBar, setShowBar] = useState(false);

const handleNavBar = () =>{
  setShowBar(!showBar)
}




  return (
    <>
    <div className='hidden md:block '>
<div className='bg-black h-14 text-white flex items-center px-3 justify-between'>
    <div className=''><img src={logo} alt="" className='logo' /></div>

<div className=' lg:w-5/12 md:w-7/12 mr-5'>
    <ul className='flex justify-around w-full items-center text-1xl '>
        <li className='cursor-pointer list-none' onClick={handleNavBar}>Service</li>
        <li className='cursor-pointer list-none'> 
        
        <div className="dropdown" style={{ float: 'left'}}>
  <button className="text-1xl cursor-pointer flex items-center ">Products<span><FiChevronDown/></span></button>
  <div className="dropdown-content text-xl" style={{left: 0}}>
  <a href="#" onClick={handleNavBar}>Device repair</a>
  <a href="#" onClick={handleNavBar}>Tech shop</a>
  <a href="#" onClick={handleNavBar}>Smart delivery</a>
  </div>
</div></li>
        <li className='cursor-pointer list-none' onClick={handleNavBar}>About us</li>

        <div className='flex gap-5 items-center '>
        <li className='text-white w-20 list-none  flex justify-center p-2 rounded-lg cursor-pointer'>Login</li>
        <li className='bg-white text-black w-20 list-none  flex justify-center p-2 rounded-lg cursor-pointer'>Sign up</li>
        </div>

    </ul>
</div>
</div>
</div>



{/* mobile nav bar */}
<div  className=' relative bg-black h-14 w-full md:hidden p-0 m-0 flex justify-between items-center'>
<div className=' flex items-center h-14'><img src={logo} alt="" className='mobile-logo' /></div>

<div className='flex  items-center  gap-5 mr-5'>
  <div className='flex gap-3 ml-5'>
  <li className=' text-white w-20 list-none flex justify-center p-1 rounded-lg cursor-pointer'>Login</li>
        <li className='bg-white text-black w-20 list-none flex justify-center p-1 rounded-lg cursor-pointer'>Sign up</li>
  </div> 
    <span className='text-xl text-white'> {showBar ? <FiX onClick={handleNavBar}/> : <FaBars onClick={handleNavBar}/> }</span>
        </div>
        
        <div className={showBar ? 'bg-white  w-full h-screen z-10 absolute top-14' : 'hidden'}>
          <div className='w-full  '>
            <ul className='text-3xl text-black font-medium ml-10 flex flex-col gap-10 mt-10'>
            <li className='cursor-pointer list-none w-36' onClick={handleNavBar}>Service</li>
        <li className='cursor-pointer list-none w-36' onClick={handleNavBar}>About us</li>
        <li className='cursor-pointer list-none w-36 outline-none'>

        <div className="dropdown" style={{ float: 'left'}}>
        <button className="text-1xl cursor-pointer dropdown-btn text-3xl text-black font-medium flex items-center ">Products <span><FiChevronDown/></span></button>
  <div className="dropdown-content w-44 text-xl " style={{left: 0}}>
  <a href="#" onClick={handleNavBar}>Device repair</a>
  <a href="#" onClick={handleNavBar}>Tech shop</a>
  <a href="#" onClick={handleNavBar}>Smart delivery</a>
  </div>
</div>

</li>
            </ul>
          </div>
        </div>
</div>
    </>
  )
}

export default NavBar
