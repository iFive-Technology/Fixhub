import React from 'react'
import EngHero from '../../Eng-Components/Eng-hero/EngHero'
import Price from '../../Eng-Components/Prices/Price'
import './Enginner.css'

const Enginer = () => {
  return (
    <>
    <div className='e-hero'>

     <EngHero />
    </div>
    <div className='e-price '>

     <Price />
    </div>
    </>
  )
}

export default Enginer