import React, { useState } from "react";
import NavBar from "../NavBar/NavBar";
import "./Hero.css";
import enginner from "../Assets/icons/engineer.png";
import customer from "../Assets/icons/customer.png";
import CustomerImg from "../Assets/images/CUSTOMER.png";
import engineer from "../Assets/images/background.jfif";

import { Steps } from "antd";

const Hero = () => {
  const [switchUSer, setSwitchUser] = useState(true);
  const [brand, setBrand] = useState("");
  const [model, setModel] = useState("");

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
            <button className="bg-green-400 text-1xl p-3 mb-5 rounded cursor-pointer text-white ">
              Sign up to repair
            </button>
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
          <h1 className="md:text-5xl sm:text-4xl text-3xl">Order for a repair now</h1>
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
          <button className="bg-green-400 p-3 rounded text-white text-1xl w-36">
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
    </>
  );
};

export default Hero;
