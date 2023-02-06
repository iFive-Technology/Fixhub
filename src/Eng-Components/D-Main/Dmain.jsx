import React from 'react'
import Chart from './Dmain-compaonentes/chart/Chart'
import AmountCard from './Dmain-compaonentes/AmountCard/AmountCard'
import Nav from './Dmain-compaonentes/NavBar/Nav'
import './Dmain.css'
import OdersTabl from './Dmain-compaonentes/recent-oders/OdersTabl'

const Dmain = () => {
  return (
    <div>
      <div className='w-full'>
        <Nav />      
      </div>

        <div className='px-3'>
        <AmountCard />
        <Chart /> 
        <OdersTabl />
        </div>

        <div></div>
    </div>
  )
}

export default Dmain