import React, { useRef, useState } from "react";
import NavBar from "../NavBar/NavBar";
import "./Hero.css";
import enginner from "../Assets/icons/engineer.png";
import customer from "../Assets/icons/customer.png";
import CustomerImg from "../Assets/images/CUSTOMER.png";
import engineer from "../Assets/images/background.jfif";

import { Steps } from "antd";
import { Link } from "react-router-dom";
import {BsArrowLeft, BsArrowRight, BsCreditCard} from 'react-icons/bs'
import {GiCheckMark, GiConfirmed} from 'react-icons/gi'
import {BiDevices } from 'react-icons/bi'

import Modal from "react-bootstrap/Modal";
import {
  LoadingOutlined,
  SmileOutlined,
  SolutionOutlined,
  UserOutlined,
} from "@ant-design/icons";


const Hero = () => {
  const [switchUSer, setSwitchUser] = useState(true);
  const [brand, setBrand] = useState("");
  const [model, setModel] = useState("");
  // index of each form stored here
  const [index, setIndex] = useState(1);

  const [show, setShow] = useState(false);

  const handleSwitch = () => {
    setSwitchUser(true);
  };
  const Enginner = () => {
    setSwitchUser(false);
  };

  const Enginer = (
    <>
      <div className=" h-full w-full flex flex-col items-center ">
        <div className="h-64 flex flex-col w-10/12 text-center items-center ">
          <h1 className="md:text-5xl text-2xl font-bold mt-3 md:w-10/12 md:px-0  px-2">
            Get in the Enginner seat and get paid
          </h1>
          <p className="md:text-1xl mt-3 px-2 md:px-0">
            Drive on the platform with the largest network of active riders.
          </p>
        </div>
        {/* text wrapper */}
        <div className="w-10/12 h-32 mb-32 flex flex-col justify-between">
          <div>
            <Link to="enginner" className="link">
              <button className="bg-green-400 text-1xl p-3 mb-5 rounded cursor-pointer text-white ">
                Sign up to repair
              </button>
            </Link>
          </div>
          <div>
            <p className="text-lg underline">
              Learn more about being our enginner
            </p>
          </div>
        </div>
      </div>
    </>
  );

  const Customer = (
    <>
      <div className="  w-full flex flex-col items-center ">
        <div className=" w-10/12 flex justify-center text-center  font-bold mt-3 ">
          <h1 className="md:text-5xl sm:text-4xl text-3xl">
            Order for a repair now
          </h1>
        </div>

        <div className="w-10/12 mt-2   ">
          <Steps
            direction="vertical"
            size="small"
            current={2}
            items={[
              {
                title: "Phone Brand",
                description: (
                  <div className="flex items-center pl-1 w-full bg-blue-100 h-12">
                    <input
                      type="text"
                      placeholder="e.g Apple"
                      className="h-10 w-full outline-none p-1 text-lg bg-transparent"
                      value={brand}
                      onChange={(e) => setBrand(e.target.value)}
                    />
                  </div>
                ),
              },
              {
                title: "Phone Model",
                description: (
                  <div className=" flex items-center pl-1 w-full bg-blue-100 h-12">
                    <input
                      type="text"
                      placeholder="e.g IPhone 12 pro max"
                      className="h-10 w-full outline-none p-1 text-lg bg-transparent"
                      value={model}
                      onChange={(e) => setModel(e.target.value)}
                    />
                  </div>
                ),
              },
            ]}
          />
        </div>
        <div className="w-10/12 mt-3">
          <button
            className="bg-green-400 p-3 rounded text-white text-1xl w-36"
            onClick={() => setShow(true)}
          >
            Order now
          </button>
        </div>
      </div>
    </>
  );

  const customerStyle = {
    backgroundImage: `url(${CustomerImg})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "",
    boxShadow: "inset 0 0 0 2000px rgba(0, 0, 0, 0.219)",
    transition: "0.7s",
  };
  const engineerStyle = {
    backgroundImage: `url(${engineer})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center",
    boxShadow: "inset 0 0 0 2000px rgba(0, 0, 0, 0.219)",
    transition: "0.7s",
  };

  // modal form componentes for conditional redering

  // fauli form
  const FaultForm = () => {
    return (
      <>
      <div className="w-full pl-20">
        <p className="mt-2 text-lg font-medium">Apple iphone 6s</p>
      </div>
      
        <form action="" className="w-10/12">
<div className=" w-full flex flex-col items-center gap-3   ">
          <label htmlFor="" className="w-full flex flex-col  text-1xl ">
            Device fault* 
            <input type="text" className="w-full h-8 rounded-sm outline-none text-sm px-2 bg-white"/>
          </label>

          <label htmlFor="" className="w-full flex flex-col  text-1xl ">
            Device IMEI* 
            <input type="text" className="w-full h-8 rounded-sm outline-none text-sm  px-2 bg-white"/>
          </label>

          <label htmlFor="" className="w-full flex  flex-col text-1xl ">
            Device color* 
            <input type="text" className="w-full h-8 rounded-sm outline-none text-sm  px-2 bg-white"/>
          </label>

          </div>
    
        </form>
      </>
    );
  };

  // delivery and pickup address
   const Address = () =>{
    return(
    <>
  <div className="w-10/12 mt-3">
    <div>
      <h4>Add new address</h4>
    </div>
    <form action="" className="w-full flex flex-col gap-3 mt-4">
      <div className=" w-full gap-3 flex">
      <label htmlFor="" className="w-full flex flex-col ">
        Name*
        <input type="text" className="px-2 bg-white outline-none  rounded-sm w-full h-8"/>
      </label>

      <label htmlFor="" className="w-full flex flex-col ">
        Surname*
        <input type="text" className="px-2 bg-white outline-none  rounded-sm w-full h-8"/>
      </label>

      </div>

      <label htmlFor="" className="w-full flex flex-col ">
        Phone number*
        <input type="text" className="px-2 bg-white outline-none  rounded-sm w-full h-8"/>
      </label>

      <div className=" w-full gap-3 flex">
      <label htmlFor="" className="w-full flex flex-col ">
        Country*
        <input type="text" className="px-2 bg-white outline-none  rounded-sm w-full h-8"/>
      </label>

      <label htmlFor="" className="w-full flex flex-col ">
        City*
        <input type="text" className="px-2 bg-white outline-none  rounded-sm w-full h-8"/>
      </label>

      </div>

      
      <label htmlFor="" className="w-full flex flex-col ">
        Pickup and Delivery Address*
        <textarea name="" id="" cols="30" rows="10" className="px-2 bg-white outline-none  rounded-sm w-full h-32 resize-none"/>
      </label>

     
    </form>
  </div>
    </>
    );
   }

  //  payment Form
  const Summary = () =>{
      return(
        <>
        <div className="w-full flex">

<div className="w-full flex justify-center items-center">
<div className="w-8/12  place-items-center bg-white rounded p-3 mt-10">
<div className="mb-3"><h5>Faulty device info</h5></div>
<label className="flex justify-between font-medium">
        Device Brand
        <p className="text-1xl text-gray-500 font-normal">Apple</p>
</label>

<label className="flex justify-between  font-medium">
        Device Model
        <p className="text-1xl text-gray-500 font-normal">iPhone 6s</p>
</label>

<label className="flex justify-between  font-medium">
        Device Fault
        <p className="text-1xl text-gray-500 font-normal">Broken Screen</p>
</label>

<label className="flex justify-between  font-medium">
        Device Imei
        <p className="text-1xl text-gray-500 font-normal">357873978309933</p>
</label>


</div>
</div>


<div className="w-full flex flex-col gap-5 items-center  pb-5">
  
  <div className="bg-white w-9/12 mt-10 p-3 rounded">
  <div className="mb-3"><h5>Address info</h5></div>
  <label className="flex justify-between  font-medium">
        Fullname
        <p className="text-1xl text-gray-500 font-normal">Chidera igboka</p>
</label>
  <label className="flex justify-between  font-medium">
        Phone number
        <p className="text-1xl text-gray-500 font-normal">+234 9052405422</p>
</label>
  <label className="flex justify-between  font-medium">
        Address
        <p className="text-1xl text-gray-500 font-normal w-52">No 27 elesin street obalende, lagos state</p>
</label>
  </div>

  <div className="w-9/12 h-20 bg-white flex items-center justify-between px-3 rounded">
    <span className="text-5xl"><BsCreditCard /></span> <h3>Payment on delivery</h3>
  </div>

{/* <button className="w-7/12 py-2 rounded text-white bg-green-500">Confirm order</button> */}
</div>
      

        </div>
        
        </>
      );

  }

  // thank you page after other is confirmed
  const Thanks = () =>{
    return(
      <>
      <div className="w-full flex justify-center">
    
    <div className="mt-10 w-7/12 flex flex-col items-center gap-5">
      <h3 className="uppercase font-bold">Thanks for choosing us!</h3>
      <div className="w-40 h-40 bg-green-400 flex justify-center items-center text-6xl text-white" style={{borderRadius: 100}}><GiCheckMark/></div>

      <p className="text-center w-full">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Est officia aut qui, repellendus recusandae totam minima.</p>
    </div>

      </div>
      
      </>

    );
  }

// next and previous button function implemented here
const PrevBtn = () =>{
  if(index > 1){
    setIndex(PrevIndex => PrevIndex - 1);
  }

}
const NextBtn = () =>{
  if(index <= 3){
    setIndex(NextIndex => NextIndex + 1);
  }
 // validation from the modal form value///////////


}


 

  
  // the render start here
  return (
    <>
      <div
        className=" w-full Hero"
        style={switchUSer ? customerStyle : engineerStyle}
      >
        <NavBar />

        <div className="h-full flex items-center justify-center md:justify-start">
          <>
            {/* small cont inside the hero section */}
            <div className="bg-white lg:w-4/12 md:w-7/12 sm:w-7/12 w-11/12 cus-triger md:ml-10 lg:ml-40">
              {/* small nav  start */}
              <div className="w-full flex justify-between   items-center h-20 Small-nav">
                <div
                  className="flex justify-center w-full h-full items-center flex-col customer"
                  onClick={handleSwitch}
                >
                  <img src={customer} alt="" className="md:w-8 w-7" />{" "}
                  <p>Book Repair</p>
                </div>
                <div
                  className="w-full h-full flex justify-center items-center flex-col enginner"
                  onClick={Enginner}
                >
                  <img src={enginner} alt="" className="md:w-8 w-7" />{" "}
                  <p>Join Enginner Team</p>
                </div>
              </div>
              {/* small nav end */}

              {/* //////////////customer switch////////////////////// */}
              {switchUSer ? Customer : Enginer}
              {/* /////////////////////////////////////// */}
            </div>
            {/*  small cont inside the hero section ends here */}
          </>
        </div>
      </div>

      <Modal
        show={show}
        onHide={() => setShow(false)}
        fullscreen={true}
        aria-labelledby="example-custom-modal-styling-title"
        scrollable={true}
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-custom-modal-styling-title">
            Custom Modal Styling
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="w-full  h-auto p-2 pb-5 flex flex-col items-center">
            <div className="w-full mt-8  h-14 px-2 flex items-center justify-center ">
              <h5 className="text-black text-4xl">
                Few more steps to get you device repaired
              </h5>
            </div>

            <div className=" flex items-center h-auto flex-col pb-10 mt-20 modalgrey border-b-8 border-green-400 rounded overflow-hidden drop-shadow-lg w-8/12">
              <div className="w-full  h-14 items-center flex px-3 bg-green-200">
                <Steps
                  items={[
                    {
                      title: "Device Fault",
                      status: index === 1 ? 'proccess' :"finish",
                      icon: <BiDevices className="cursor-pointer mt-2" />,
                    },
                    {
                      title: "Pick up and devivery address",
                      status: index === 2 ? 'proccess' : index <= 2 ? "wait" : 'finish',
                      icon: <SolutionOutlined className="cursor-pointer" />,
                    },
                    {
                      title: "Confirm Order",
                      status: index === 3 ? 'proccess' :index <= 3 ? "wait" : 'finish',
                      icon: <GiConfirmed  className="cursor-pointer mt-2" />,
                    },
                    {
                      title: "Done",
                      status: index === 4 ? 'finish' :"wait",
                      icon: <SmileOutlined className="cursor-pointer" />,
                    },
                  ]}
                />
              </div>

              <div className="w-full  flex flex-col items-center">

                {index === 1 &&   <FaultForm />}
                {index === 2 && <Address /> }
                {index === 3 &&  <Summary /> }
                {index === 4 &&  <Thanks /> }

                <div className=" flex  w-10/12 justify-between ">
                  {/* previous form button */}
                <button className={index === 1 ? " bg-gray-400  w-28 h-8 text-white flex items-center rounded-sm gap-2 justify-center mt-10" : index === 4 ? 'hidden' : "w-28 h-8 bg-green-500 text-white flex items-center rounded-sm gap-2 justify-center mt-10" }  onClick={PrevBtn} style={index === 1 ? {cursor: 'not-allowed'} : {cursor: 'pointer'} }> <span><BsArrowLeft /></span>Previous</button>

                  {/* next form button  */}
                <button className={index === 4 ? 'hidden' : "w-auto px-3 h-8 bg-green-500 text-white flex items-center rounded-sm gap-2 justify-center mt-10"}  onClick={NextBtn}>{index === 3 ? 'Confirm order' : 'Next'} <span><BsArrowRight /></span></button>

                </div>
              </div>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default Hero;
