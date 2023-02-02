import React, { useState } from 'react'
import './FAQ.css'



// Demo styles, see 'Styles' section below for some notes on use.
import 'react-accessible-accordion/dist/fancy-example.css';

const FQA = () => {
    const [show1, setShow1] = useState(false);
    const [show2, setShow2] = useState(false);
    const [show3, setShow3] = useState(false);
    const [show4, setShow4] = useState(false);

    const handleOpen1 = () => {
      setShow1(!show1); // Toggle accordion
    };
    const handleOpen2 = () => {
      setShow2(!show2); // Toggle accordion
    };
    const handleOpen3 = () => {
      setShow3(!show3); // Toggle accordion
    };
    const handleOpen4 = () => {
      setShow4(!show4); // Toggle accordion
    };

  return (
    <>
<div className='w-full flex md:mt-40 mt-20 items-center flex-col '>
    <h1 className='text-center md:text-5xl text-4xl'>Frequenry Asked Question's</h1>
<div className='md:w-11/12 lg:w-8/12 grid md:grid-cols-2 mt-28  place-content-center '>

<div className="accordian lg:w-96 w-72 md:w-80 lg:w-96 mb-10">
        <div className="accordian-header" onClick={handleOpen1}>
          <div>Accordion Header1</div>
          <div className="sign">{show1 ? '-' : '+'}</div>
        </div>
        {show1 && (
          <div className="accordian-body">
            Lorem Ipsum is simply dummy text of the printing and type setting
            industry. Lorem Ipsum has been the industry's ever since the 1500s,
            when an unknown printer took a galley of type standard dummy text
            and scrambled it to make a type specimen book.
          </div>
        )}
      </div>
      
 <div className="accordian mb-10 md:w-80 w-72 lg:w-96 md:mb-0">
        <div className="accordian-header" onClick={handleOpen2}>
          <div>Accordion Header</div>
          <div className="sign">{show2 ? '-' : '+'}</div>
        </div>
        {show2 && (
          <div className="accordian-body">
            Lorem Ipsum is simply dummy text of the printing and type setting
            industry. Lorem Ipsum has been the industry's ever since the 1500s,
            when an unknown printer took a galley of type standard dummy text
            and scrambled it to make a type specimen book.
          </div>
        )}
      </div>

 <div className="accordian mb-10 md:w-80 w-72 lg:w-96 md:mb-0">
        <div className="accordian-header" onClick={handleOpen3}>
          <div>Accordion Header1</div>
          <div className="sign">{show3 ? '-' : '+'}</div>
        </div>
        {show3 && (
          <div className="accordian-body">
            Lorem Ipsum is simply dummy text of the printing and type setting
            industry. Lorem Ipsum has been the industry's ever since the 1500s,
            when an unknown printer took a galley of type standard dummy text
            and scrambled it to make a type specimen book.
          </div>
        )}
      </div>

 <div className="accordian mb-10 md:w-80 w-72 lg:w-96 md:mb-0">
        <div className="accordian-header" onClick={handleOpen4}>
          <div>Accordion Header</div>
          <div className="sign">{show4 ? '-' : '+'}</div>
        </div>
        {show4 && (
          <div className="accordian-body">
            Lorem Ipsum is simply dummy text of the printing and type setting
            industry. Lorem Ipsum has been the industry's ever since the 1500s,
            when an unknown printer took a galley of type standard dummy text
            and scrambled it to make a type specimen book.
          </div>
        )}
      </div>
</div>
 
</div>
    </>
  )
}

export default FQA