import React from 'react'
import './Dashboard.css'
import {Outlet} from 'react-router-dom'
import DnavBar from '../../Eng-Components/DnavBar/DnavBar'


const Dashboard = () => {
  return (
    <>


<div className='w-full h-screen flex'>
    {/* side bar  */}
    <div className='steal  flex flex-col items-center w-72'>
<DnavBar />
    </div>


{/* the main board */}
    <div className='grey w-full  overflow-scroll scroll-smooth '>
<Outlet />
    </div>
</div>
    </>
  )
}

export default Dashboard