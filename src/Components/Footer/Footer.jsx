import React from 'react'
import logo from '../Assets/logos/fixlogo.png'
import './Footer.css'
import {FiTwitter, FiInstagram, FiFacebook} from 'react-icons/fi'

const Footer = () => {
  return (
    <div className='flex justify-center   flex-col items-center footer text-white '>
       <div className='grid grid-cols-1  md:grid-cols-2 lg:grid-cols-4 md:w-11/12  lg:w-11/12 w-11/12 pl-10 mt-28 sub-footer'>

<div className='place-self-start  lg:place-self-center mb-10 lg:mr-3 '>
<div className='h-20 w-52  ' style={{ 
    backgroundImage: `url(${logo})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center",
    }}></div>
 <h5>Store Hours :</h5>
 <p>Monday - Friday: 9:00 a.m. to 8:00 p.m.</p> 
 <p>Saturday & Sunday: 10:00 a.m. to 6:00 p.m</p>
<div className='flex justify-around w-full  mt-5'>
  <span className='bg-white p-3 rounded-3xl text-black cursor-pointer'><FiTwitter /></span>
  <span className='bg-white p-3 rounded-3xl text-black cursor-pointer'><FiInstagram /></span>
  <span className='bg-white p-3 rounded-3xl text-black cursor-pointer'><FiFacebook /></span>
</div>
</div>



<div className='place-self-start lg:place-self-center mb-10'>
  <h4>Quick Links</h4>

  <p>Repairs</p>
  <p>Locations</p>
  <p>Added Services</p>
  <p>Contacts</p>
  <p>Blog</p>
  <p>About Us</p>
</div>



<div className='place-self-start lg:place-self-center mb-10'>
  <h4>Repair Services</h4>

  <p>Smartphone</p>
  <p>Tablet</p>
  <p>Laptop</p>
  <p>Computer</p>
  <p>Watch</p>
  <p>Game Console</p>
</div>



<div className='place-self-start lg:place-self-center mb-10'>
  <h4>Information</h4>

  <p>Blog</p>
  <p>Find A Store</p>
  <p>Franchise Information</p>
  <p>Locations</p>
  <p>CPR for Business</p>

</div>

       </div>

       <div className='w-10/12 mt-28 '>

<p className='ml-5'>© 2023. All Rights Reserved.</p>
       </div>
    </div>
  )
}

export default Footer