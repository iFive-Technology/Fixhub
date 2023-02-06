import React from 'react'
import {AiOutlineCamera } from 'react-icons/ai'
import { Input } from 'antd';

const ProfileSetting = () => {
  return (
    <>
      <div>
      <div className='w-full h-72  relative flex flex-col items-center'>

{/* background image box */}
<div className='w-full h-52' style={{ 
backgroundImage: `url("https://img.freepik.com/free-psd/laptop-psd-mockup-with-gradient-led-light_53876-138283.jpg?size=626&ext=jpg&ga=GA1.2.1708022284.1666880048&semt=sph")`,
backgroundRepeat: "no-repeat",
backgroundSize: "cover",
backgroundPosition: "center",
boxShadow: "inset 0 0 0 2000px rgba(24, 43, 59, 0.869)",

}}>   </div>


<div className='w-11/12 flex absolute top-40  '>
 
<div className='w-5/12 flex flex-col px-2 items-center '>
            {/* profile picture setting section */}
            <div className='w-10/12 bg-white flex flex-col items-center rounded py-2 pr-2  '>
                {/*//////////////////// profile picture //////////////////// */}

            <div className='relative'>
            <div className='w-32 h-32 bg-white border-4 border-gray-300 mt-3' style={{ 
    backgroundImage: `url("https://img.freepik.com/free-psd/laptop-psd-mockup-with-gradient-led-light_53876-138283.jpg?size=626&ext=jpg&ga=GA1.2.1708022284.1666880048&semt=sph")`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center",
    borderRadius: 100
   
    }}></div>   
    <span className='absolute right-3 bg-gray-300 p-2 rounded-2xl overflow-hidden  top-28 '><input type="file" className='w-10 h-14 absolute left-0 top-0 opacity-0 cursor-pointer'/> <AiOutlineCamera /></span> 
    </div>
{/* ///////////profile picture */}
            <div className='text-center leading-1'>
            <h6 className='mt-3 text-xl'>Seyi johnson</h6>
            <p className='text-gray-500'>seyi vibes</p>
            </div>

            </div>
            {/* profile picture section ends here  */}


        </div>
{/* ////////////right section with about the profile////////////////// */}
        <div className='w-full flex flex-col items-center '>
            {/* about section */}
            <div className='w-full bg-white rounded '>
                <h4 className='border-b w-full ml-4 p-2'>About</h4>
                <div className='p-3 text-gray-500 gap-3 flex flex-col'>
                    
                <div className=' gap-2 flex w-full'>
                    <label className='w-1/2'> 
                        FirstName
                <Input type='text' placeholder="Basic usage" />
                    </label>
                    <label className='w-1/2'> 
                        SurName
                <Input type='text' placeholder="Basic usage" />
                    </label>
                </div>

                <div className=' gap-2 flex w-full'>
                    <label className='w-1/2'> 
                        Phone Number
                <Input type='tel' placeholder="Basic usage" />
                    </label>
                    <label className='w-1/2'> 
                        E-mail
                <Input type='email' placeholder="Basic usage" />
                    </label>
                </div>
                <label className='w-full'> 
                        Location
                <Input type='text' placeholder="Basic usage" />
                    </label>

                    <div className='flex gap-2'>
                        <button className='bg-green-500 px-3 rounded h-8 text-white'>Updates</button>
                        <button className='bg-red-300 px-3 h-8 rounded text-white'>Cancel</button>
                    </div>
                </div>
            </div>
            {/* about end */}

                
        </div>

</div>

</div>
        </div>  
    </>
  )
}

export default ProfileSetting