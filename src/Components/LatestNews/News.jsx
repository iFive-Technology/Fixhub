import React from 'react'
import './News.css'

const News = () => {
  return (
    <>
      <div className='w-full md:mt-44 mt-20 flex flex-col  items-center'>
        <h1 className='mb-32 text-5xl '>Latest News</h1>
<div className='grid lg:grid-cols-3 gap-5 md:grid-cols-2 w-11/12 place-items-center'>

        <div className='lg:w-96 w-10/12 md:w-80 news-card '>
<div className='h-72 rounded-md' style={{ 
    backgroundImage: `url("https://img.freepik.com/free-psd/laptop-psd-mockup-with-gradient-led-light_53876-138283.jpg?size=626&ext=jpg&ga=GA1.2.1708022284.1666880048&semt=sph")`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center",
   
    }}></div>

<div >
  <h3 className='mt-2 '>New MacBook is out</h3>

  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, sit? Provident aliquam blanditiis repellendus totam, enim id mollitia vitae suscipit! Ab, molestiae atque nesciunt natus mollitia dignissimos? Commodi, blanditiis molestiae!</p>
</div>

<div className='flex w-full justify-between items-center  '>
  <button className='w-32 bg-red-400 p-2 rounded-md'>Read more</button>
  <p className='font-medium text-xl'>2023/02/01</p>
</div>
        </div>
        {/* card */}
        <div className='lg:w-96 w-10/12  md:w-80  '>
<div className='h-72 rounded-md' style={{ 
    backgroundImage: `url("https://img.freepik.com/free-photo/male-technician-examining-mother-board-with-digital-multimeter_23-2147922353.jpg?size=626&ext=jpg&ga=GA1.2.1708022284.1666880048&semt=sph")`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center",
   
    }}></div>

<div>
  <h3 className='mt-2 '>Laptop and Phone repairs training by Fixhub </h3>

  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, sit? Provident aliquam blanditiis repellendus totam, enim id mollitia vitae suscipit! Ab, molestiae atque nesciunt natus mollitia dignissimos? Commodi, blanditiis molestiae!</p>
</div>
<div className='flex w-full justify-between items-center '>
  <button className='w-32 bg-red-400 p-2 rounded-md'>Read more</button>
  <p className='font-medium text-xl'>2023/02/01</p>
</div>

        </div>
        {/* card */}
        <div className='lg:w-96 w-10/12 md:w-80 '>
<div className='h-72 rounded-md' style={{ 
    backgroundImage: `url("https://img.freepik.com/free-photo/aerial-view-private-houses-with-solar-panels-roofs_181624-14567.jpg?size=626&ext=jpg&ga=GA1.2.1708022284.1666880048&semt=sph")`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center",
   
    }}></div>

<div  className=''>
  <h3 className='mt-2 '>Do you know that Fixhub do pick up and delivery</h3>

  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, sit? Provident aliquam blanditiis repellendus totam, enim id mollitia vitae suscipit! Ab, molestiae atque nesciunt natus mollitia dignissimos? Commodi, blanditiis molestiae!</p>
</div>
<div className='flex w-full justify-between items-center'>
  <button className='w-32 bg-red-400 p-2 rounded-md'>Read more</button>
  <p className='font-medium text-xl'>2023/02/01</p>
</div>

        </div>
        {/* card */}
        </div>
      </div>
    </>
  )
}

export default News