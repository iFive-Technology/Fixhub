import './About.css'
import float from '../Assets/images/flot.png'
import background from '../Assets/images/backgrondimg.jpg'

const About = () => {
    return (
        <div className='about flex flex-col md:flex-row items-center relative '  style={{
            backgroundImage: `url(${background})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center",
        
          }}>
            <div className="md:w-6/12 md:pl-10 text-center md:absolute px-3 md:left-0 mt-10">
                <h2 className="md:text-5xl text-3xl font-bold">We Can Fix It Almost
                    As Fast As You Can
                    Break It.</h2>

                <p className="mdtext-1xl text-sm mt-5">We do fast phone repair. In most cases, technicians will be able to repair your device in just minutes, we’ll normally get your phone in and out in 40 minutes or less.</p>
                <button className='w-32 p-2 md:p-3 md:w-36 rounded bg-green-500 md:mt-10 mt-5'>About Us</button>
            </div>
            <div className=" absolute md:right-32 top-80  md:top-36 z-10 w-72 md:w-4/12 ">
                <img src={float} className='img'/>
            </div>
        </div>
    )
}

export default About