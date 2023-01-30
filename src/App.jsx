import './App.css'
import Footer from './Components/Footer/Footer'
import About from './Components/About/About'
import WhyUs from './Components/Us/WhyUs'
import Hero from './Components/Hero/Hero'
import DeviceSlide from './Components/device-icon-slide/DeviceSlide'
import WeCan from './Components/we-can/WeCan'
import ShopNow from './Components/shop-now/ShopNow'


function App() {


  return (
    <div className="App">
  <Hero />
  <DeviceSlide />
      <About />
      <WhyUs /> 
      <WeCan />
      <ShopNow/>
      <Footer />
    </div>
  )
}

export default App
