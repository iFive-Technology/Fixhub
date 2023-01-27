import './WhyUs.css'
import {items} from './CardData'
const WhyUs = () => {
    return (
        <div className='why-us py-5 mt-10 px-3'>
            

            <div className="lg:px-32 flex flex-col items-center">
                <h1 className='md:text-5xl text-4xl mt-10 font-bold mb-10 '>Why Choose Us?</h1>
                <div className="w-full mt-10 grid grid-cols-1 place-items-center md:grid-cols-3 lg:grid-cols-4">
{items.map(item =>(
    <>
        <div className='w-80 md:w-60 lg:w-72 flex flex-col items-center card pb-4' key={item.id}>
                    <div className="w-80 md:w-60 lg:w-72">
                <img src="https://img.freepik.com/free-photo/pink-headphones-wireless-digital-device_53876-96804.jpg?w=996&t=st=1674823481~exp=1674824081~hmac=72b481929251ca5716ded26c013b2661df3db58ff57ebd47de3d51b37a316dfb" alt='earpic' />
            </div>
                        <h4 className='font-bold text-2xl md:text-xl mt-2'>{item.title}</h4>
                        <p className='text-center px-2'>{item.slug}</p>
                    </div>
    </>
))}
     
                </div>
            </div>
        </div>
    )
}

export default WhyUs