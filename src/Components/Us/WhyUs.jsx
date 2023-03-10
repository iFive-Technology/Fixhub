import './WhyUs.css'
import {items} from './CardData'
const WhyUs = () => {
    return (
        <div className='why-us py-5 md:mt-52 mt-20 px-3'>
            

            <div className="lg:px-32 flex flex-col items-center">
                <h1 className='md:text-5xl text-4xl mt-10 font-bold mb-10 '>Why Choose Us?</h1>
                <div className="w-full mt-10 grid grid-cols-2 gap-2 place-items-center md:grid-cols-3 lg:grid-cols-4">
{items.map(item =>(
    <>
        <div className='w-36 overflow-hidden  md:w-60 lg:w-72 flex flex-col items-center border-none outline-none justify-center rounded card ' key={item.id}>
                    <div className="w-52 md:w-60 lg:w-72 flex justify-center">
                <img src={item.image} alt='earpic' className='w-16'/>
            </div>
                        <h4 className='font-medium text-center text-1xl md:text-xl mt-2'>{item.title}</h4>
                        <p className='text-center hidden md:block px-2'>{item.slug}</p>
                    </div>
    </>
))}
     
                </div>
            </div>
        </div>
    )
}

export default WhyUs