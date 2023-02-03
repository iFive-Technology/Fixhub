import React from 'react'
import Hero from '../../Components/Hero/Hero'
import About from '../../Components/About/About'
import WhyUs from '../../Components/Us/WhyUs'
import WeCan from '../../Components/we-can/WeCan'
import Shop from '../../Components/shop/Shop'
import FQA from '../../Components/FAQ/FQA'
import News from '../../Components/LatestNews/News'
import ShopNow from '../../Components/Banner/ShopNow'
import DeviceSlide from '../../Components/device-icon-slide/DeviceSlide'

const Home = () => {
  return (
    <>
       <div>
      <Hero />
      <DeviceSlide />
      <About />
      <WhyUs /> 
      <WeCan />
      <Shop />
      <FQA/>
      <News />
      <ShopNow/>
        
        </div> 
    </>
  )
}

export default Home