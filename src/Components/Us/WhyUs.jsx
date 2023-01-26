import './WhyUs.css'
const WhyUs = () => {
    return (
        <div className='why-us'>
            <div className="choose-image">
                <img src="https://scontent.facc5-2.fna.fbcdn.net/v/t39.30808-6/246809751_244803487666953_3603758423465981508_n.png?_nc_cat=101&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeEKbytd6ruNMVUQ1rphyqXOlKUXlrlTblyUpReWuVNuXI6e5Uwnw-APnFy9ttLDWVmqQP7NbYNH2TLo3suCA97U&_nc_ohc=3jNhP_kcS98AX_3GE4X&_nc_zt=23&_nc_ht=scontent.facc5-2.fna&oh=00_AfBkfPZF8QW9nr9Pve57YrHBdRkWGA6ZwtnUi6jG_-fMYg&oe=63D1B8CF" />
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