import React from 'react'
import './Dashboard.css'
import DnavBar from '../../Eng-Components/DnavBar/DnavBar'
import Dmain from '../../Eng-Components/D-Main/Dmain'

const Dashboard = () => {
  return (
    <>
<div className='w-full h-screen flex'>
    {/* side bar  */}
    <div className='steal  flex flex-col items-center w-72'>
<DnavBar />
    </div>

{/* the main board */}
    <div className='grey w-full  overflow-y-scroll'>
<Dmain />
    </div>
</div>
    </>
  )
}

export default Dashboard