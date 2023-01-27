import './WhyUs.css'
const WhyUs = () => {
    return (
        <div className='why-us px-3'>
            <div className="choose-image mt-10">
                <img src="https://img.freepik.com/free-photo/pink-headphones-wireless-digital-device_53876-96804.jpg?w=996&t=st=1674823481~exp=1674824081~hmac=72b481929251ca5716ded26c013b2661df3db58ff57ebd47de3d51b37a316dfb" alt='earpic' />
            </div>

            <div className="choose-area">
                <h1 className='title'>Why Choose Us?</h1>
                <div className="link-area">

                    <div className='card'>
                        <h4 className='head'>Same Day Repair</h4>
                        <p>When one breaks, you don’t want it fixed tomorrow—you need it fixed today</p>
                    </div>

                    <div className='card'>
                        <img src="" alt="" />
                        <h4 className='head'>Low Prices Garuntee</h4>
                        <p>Repairing beats replacing, and FixTeam beats all other phone repair companies</p>
                    </div>
                    <div className='card'>

                        <img src="" alt="" />
                        <h4 className='head'>Supiror Warranty</h4>
                        <p>Stronger than any phone case, FixTeam offers the most reliable warranty on the market.</p>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default WhyUs