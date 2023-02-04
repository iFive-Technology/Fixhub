import React from 'react'
import Chart from './Dmain-compaonentes/chart/Chart'
import AmountCard from './Dmain-compaonentes/AmountCard/AmountCard'
import Nav from './Dmain-compaonentes/NavBar/Nav'
import './Dmain.css'

const Dmain = () => {
  return (
    <div>
      <div>
        <Nav />      
      </div>

        <div className='px-3'>
        <AmountCard />
        <Chart /> 
        </div>

        <div></div>
    </div>
  )
}

export default Dmain