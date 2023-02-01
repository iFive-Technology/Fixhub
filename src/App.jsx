import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './Components/Footer/Footer'
import About from './Components/About/About'
import WhyUs from './Components/Us/WhyUs'
import Hero from './Components/Hero/Hero'
import DeviceSlide from './Components/device-icon-slide/DeviceSlide'
import WeCan from './Components/we-can/WeCan'
import ShopNow from './Components/Banner/ShopNow'
import Shop from './Components/shop/Shop'
import FQA from './Components/FAQ/FQA'
import News from './Components/LatestNews/News';


function App() {


  return (
    <div className="App">
  <Hero />
  <DeviceSlide />
      <About />
      <WhyUs /> 
      <WeCan />
      <Shop />
      <FQA/>
      <News />
      <ShopNow/>
      <Footer />
    </div>
  )
}

export default App
