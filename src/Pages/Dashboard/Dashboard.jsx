import React from 'react'
import './Dashboard.css'
import {Outlet} from 'react-router-dom'
import DnavBar from '../../Eng-Components/D-Main/Dmain-compaonentes/DnavBar/DnavBar'
import Nav from '../../Eng-Components/D-Main/Dmain-compaonentes/NavBar/Nav'


const Dashboard = () => {
  return (
    <>


<div className='w-full h-screen flex'>
    {/* side bar  */}
    <div className='steal  flex flex-col items-center w-72'>
<DnavBar />
    </div>


{/* the main board */}
    <div className='grey w-full   overflow-scroll scroll-smooth '>
    <div className='w-full'>
        <Nav />      
      </div>

  <div className='mt-16'>
  <Outlet />
    </div>    
    </div>
</div>
    </>
  )
}

export default Dashboard