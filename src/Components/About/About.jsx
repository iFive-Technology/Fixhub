import './About.css'
import float from '../Assets/images/flot.png'
import background from '../Assets/images/backgrondimg.jpg'

const About = () => {
    return (
        <div className='about'  style={{
            backgroundImage: `url(${background})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center",
        
          }}>
            <div className="text-area">
                <h2 className="title">We Can Fix It Almost
                    As Fast As You Can
                    Break It.</h2>

                <p className="about-text">We do fast phone repair. In most cases, technicians will be able to repair your device in just minutes, we’ll normally get your phone in and out in 40 minutes or less.</p>
                <button className='btn-learn bg-green-500'>About Us</button>
            </div>
            <div className="image">
                <img src={float}/>
            </div>
        </div>
    )
}

export default About