
import React from 'react'
import {TbEdit} from 'react-icons/tb'
import { Link } from 'react-router-dom'
  
const ProfileInfo = () => {
  return (
    <>
    <div className='mt-3'>
      <Link to='profile-setting'> <span className='mb-3 mr-10 float-right bg-green-500 flex items-center rounded gap-1 h-8 px-2 text-white cursor-pointer'><span><TbEdit /></span> Edit Profile</span>   </Link> 
    <div className='w-full flex '>
{/* ////////////left section with info/////////////////// */}
        <div className='w-6/12 flex flex-col px-2 items-center'>
            {/* profile info section */}
            <div className='w-11/12 bg-white rounded py-2 pr-2  '>
                <h4 className='border-b w-full p-2'>Info</h4>
                <div className='mt-4 ml-7'>
                    <table>
                        <tr className='h-14'>
                        <td className='w-28'><h6>Full Name:</h6></td>
                        <td className='text-gray-500'>Seyi johnson</td>
                        </tr>
                        <tr className='h-14'>
                        <td className='w-28'><h6>Mobile:</h6></td>
                        <td className='text-gray-500'>(+234) 8479075893</td>
                        </tr>
                        <tr className='h-14'>
                        <td className='w-28'><h6>E-mail:</h6></td>
                        <td className='text-gray-500'>seyijohnson@gmail.com</td>
                        </tr>
                        <tr className='h-14'>
                        <td className='w-28'><h6>Location:</h6></td>
                        <td className='text-gray-500'>27 johnson Eve Street, Lagos state, Nigeria</td>
                        </tr>
                        <tr className='h-14'>
                        <td className='w-28'><h6>Joining date:</h6></td>
                        <td className='text-gray-500'>1 / 05 / 2022</td>
                        </tr>
                            
                      
                    </table>
                </div>
            </div>
            {/* profile info section  */}


        </div>
{/* ////////////right section with about the profile////////////////// */}
        <div className='w-full flex flex-col items-center'>
            {/* about section */}
            <div className='w-11/12 bg-white rounded '>
                <h4 className='border-b w-full p-2'>About</h4>
                <div className='p-3 text-gray-500'>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, odit quaerat totam perspiciatis tempore quo reiciendis commodi blanditiis nostrum voluptas amet sunt, harum, minus a cum aliquid qui accusamus temporibus?
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam itaque, delectus nostrum assumenda sapiente animi tempora rerum consequuntur quae aspernatur accusantium voluptatem aperiam, veritatis placeat officia, in qui atque quam?
                    </p>
                </p>
                
                </div>
            </div>
            {/* about end */}


        </div>
      
    </div>
    </div>
    </>
  )
}

export default ProfileInfo
