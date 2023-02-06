import React from 'react'
import { MdVerified } from 'react-icons/md'
import ProfileInfo from './Profile-component/ProfileInfo'

const Profile = () => {
  return (
    <>
        <div className='w-full h-96  relative flex flex-col items-center'>

            {/* background image box */}
            <div className='w-full h-72' style={{ 
    backgroundImage: `url("https://img.freepik.com/free-psd/laptop-psd-mockup-with-gradient-led-light_53876-138283.jpg?size=626&ext=jpg&ga=GA1.2.1708022284.1666880048&semt=sph")`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center",
    boxShadow: "inset 0 0 0 2000px rgba(24, 43, 59, 0.869)",
   
    }}>   </div>

    {/* profile content box start here */}
            <div className='absolute top-5 w-11/12 '>
            <div className=' w-full h-32 flex items-center justify-between px-5'>
                {/* profile section with the details */}
<div className='flex items-center gap-4 text-white'>
    {/* profile picture */}
    <div className='w-20 h-20 bg-white border-2' style={{ 
    backgroundImage: `url("https://img.freepik.com/free-psd/laptop-psd-mockup-with-gradient-led-light_53876-138283.jpg?size=626&ext=jpg&ga=GA1.2.1708022284.1666880048&semt=sph")`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center",
    borderRadius: 50
   
    }}></div>

{/* profile details */}
    <div>
<h4 className='flex items-center gap-1'>Seyi Johnson <span className='text-sm text-green-400'><MdVerified /></span></h4>
<p>Silver subscriber</p>
    </div>
</div>

{/* works and rank */}
<div className='flex gap-5 text-white'>
<div className='text-center'>
    <h3>1,236</h3>
    <p>Device repaird</p>
</div>

<div className='text-center flex flex-col items-center'>
    <img src="https://cdn-icons-png.flaticon.com/512/340/340336.png" alt="" className='w-10' />
    <p>Rank</p>
</div>

</div>
            </div>
{/* ////////////  profile info section start from here  /////////////////// */}

<div >
<ProfileInfo />

</div>
            </div>
            {/* //////////////////////////// */}
        </div>
    </>
  )
}

export default Profile