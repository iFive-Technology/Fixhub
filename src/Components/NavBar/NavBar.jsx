import React, { useState } from 'react'
import './NavBar.css'
import logo from '../Assets/logos/fixlogo.png'
import { FaBars } from 'react-icons/fa'
import { FiX } from 'react-icons/fi'
import { Link } from 'react-router-dom'



const NavBar = () => {
const [showBar, setShowBar] = useState(false);

const handleNavBar = () =>{
  setShowBar(!showBar)
}




  return (
    <>
    <div className='hidden md:block '>
<div className='bg-black h-14 text-white flex items-center px-3 justify-between'>
    <div className=''><img src={logo} alt="" className='logo mb-2' /></div>

<div className=' lg:w-5/12 md:w-7/12 mr-0 '>
    <ul className='flex justify-around w-full items-center text-1xl mt-2 '>
        <li className='cursor-pointer list-none' onClick={handleNavBar}>Service</li>

        <li className='cursor-pointer list-none'> 
        <div className="dropdown" style={{ float: 'left'}}>
  <button className="text-1xl cursor-pointer flex items-center ">Products</button>
  <div className="dropdown-content text-xl" style={{left: 0}}>
  <a href="#" onClick={handleNavBar}>Device repair</a>
  <a href="#" onClick={handleNavBar}>Tech shop</a>
  <a href="#" onClick={handleNavBar}>Smart delivery</a>
  </div>
</div>
</li>

        <li className='cursor-pointer list-none' onClick={handleNavBar}>About us</li>

        <div className='flex gap-5 items-center '>
        <Link to='Authentication' className='link'> <li className='text-black w-20 list-none bg-white flex justify-center p-1 rounded-lg cursor-pointer'>Login</li> </Link>
        </div>

    </ul>
</div>
</div>
</div>



{/* mobile nav bar */}
<div  className=' relative bg-black h-14 w-full md:hidden p-0 m-0 flex justify-between items-center'>
<div className=' flex items-center h-14'><img src={logo} alt="" className='mobile-logo' /></div>

<div className='flex  items-center '>
 
  <span className='text-xl text-white mr-2'> {showBar ? <FiX onClick={handleNavBar}/> : <FaBars onClick={handleNavBar}/> }</span>
        </div>
        
        <div className={showBar ? 'bg-white  w-full h-screen z-10 absolute top-14' : 'hidden'}>

          {/* login button on mobile size */}
        <div className='flex justify-center w-full items-center px-2 h-14  '>  
        <Link to='Authentication' className='link'>   <li className='  w-80 p-2 text-center list-none  rounded-md bg-green-500'>Login</li></Link> 
  </div>
  {/* ////////////////////////////////////////////////////////////// */}

          <div className='w-full  '>
            <ul className='text-3xl text-black font-medium ml-10 flex flex-col  gap-10 mt-10'>
            <li className='cursor-pointer list-none w-36' onClick={handleNavBar}>Service</li>
        <li className='cursor-pointer list-none w-36' onClick={handleNavBar}>About us</li>
        <li className='cursor-pointer list-none w-36 outline-none'>

        <div className="dropdown" style={{ float: 'left'}}>
           

        <button className="text-1xl cursor-pointer dropdown-btn text-3xl text-black font-medium flex items-center ">Products </button>
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
