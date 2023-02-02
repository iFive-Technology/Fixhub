import React from "react";
import {
  RiNumber1,
  RiNumber2,
  RiNumber3,
  RiNumber4,
  RiNumber5,
  RiNumber6,
  RiNumber7,
  RiNumber8,
  RiNumber9,
} from "react-icons/ri";
import "./WeCan.css";

const weCan = () => {
  return (
    <>
      <div className="w-full md:mt-52 mt-32 md:flex-row flex-col flex py-5 we-can">
        <div className="w-full flex justify-center   text-white">
          <div className="w-64 md:w-auto relative ">
            <span className="bg-green-500 rounded-xl md:w-7 w-5 md:h-7 h-5 flex justify-center items-center absolute md:bottom-2 md:right-24  bottom-2 right-16">
              <RiNumber1 />
            </span>
            <span className="bg-green-500 rounded-xl md:w-7 w-5 md:h-7 h-5  flex justify-center items-center absolute md:bottom-6 md:right-12 bottom-3 right-8">
              <RiNumber2 />
            </span>
            <span className="bg-green-500 rounded-xl md:w-7 w-5 md:h-7 h-5  flex justify-center items-center absolute md:bottom-16 md:right-16 bottom-9 right-10">
              <RiNumber3 />
            </span>
            <span className="bg-green-500 rounded-xl md:w-7 w-5 md:h-7 h-5  flex justify-center items-center absolute md:top-40 md:left-10 top-28 left-8">
              <RiNumber4 />
            </span>
            <span className="bg-green-500 rounded-xl md:w-7 w-5 md:h-7 h-5  flex justify-center items-center absolute md:top-9 md:left-14 left-10 top-4">
              <RiNumber5 />
            </span>
            <span className="bg-green-500 rounded-xl md:w-7 w-5 md:h-7 h-5  flex justify-center items-center absolute md:top-28 md:right-32 top-20 right-20">
              <RiNumber6 />
            </span>
            <span className="bg-green-500 rounded-xl md:w-7 w-5 md:h-7 h-5  flex justify-center items-center absolute md:top-32 md:left-24 top-36 left-28">
              <RiNumber7 />
            </span>
            <span className="bg-green-500 rounded-xl md:w-7 w-5 md:h-7 h-5  flex justify-center items-center absolute md:bottom-32 md:right-40 right-20 top-56">
              <RiNumber8 />
            </span>
            <span className="bg-green-500 rounded-xl md:w-7 w-5 md:h-7 h-5  flex justify-center items-center absolute md:bottom-44 md:right-20 right-20 bottom-14">
              <RiNumber9 />
            </span>
            <img
              src="https://fixteam.ancorathemes.com/wp-content/uploads/2017/08/phone_2.png"
              alt="iphone-with-numbers"
              className="w-96"
            />
          </div>
        </div>

        <div className="w-full flex  justify-center">
          <div className="w-full">
            <div className="w-full text-center">
              <h3 className="md:text-5xl text-4xl   mt-10 md:mt-0  w-full font-bold">
                We Can Fix It!
              </h3>
              <p className="mt-10 text-center ml-8 md:ml-0 w-10/12 ">
                Our prices for iPhone repairs are competitive with anyone in the
                city. We repair cracked screens for all models of iPhones and
                repair broken buttons, speakers and cameras as well. Cracked
                screen on your new iPhone? We fix that.
              </p>
            </div>
            <div className="flex w-full flex-col items-center ">
              <ol
                type=""
                className="grid grid-cols-2  leading-9 mt-10 w-full text-sm  md:text-lg "
              >
                <li className="flex items-center gap-2">
                  <span className="bg-yellow-400 p-1 rounded-xl">
                    <RiNumber1 />
                  </span>{" "}
                  Headphones Plug
                </li>
                <li className="flex items-center gap-2">
                  <span className="bg-yellow-400 p-1 rounded-xl" >
                    <RiNumber2 />
                  </span>{" "}
                  Charging Port
                </li>
                <li className="flex items-center gap-2">
                  <span className="bg-yellow-400 p-1 rounded-xl">
                    <RiNumber3 />
                  </span>
                  Home Button
                </li>
                <li className="flex items-center gap-2">
                  <span  className="bg-yellow-400 p-1 rounded-xl">
                    <RiNumber4 />
                  </span>
                  Side Buttons
                </li>
                <li className="flex items-center gap-2">
                  <span className="bg-yellow-400 p-1 rounded-xl">
                    <RiNumber5 />
                  </span>
                  iSight Camera
                </li>
                <li className="flex items-center gap-2">
                  <span className="bg-yellow-400 p-1 rounded-xl">
                    <RiNumber6 />
                  </span>
                  Power Button
                </li>
                <li className="flex items-center gap-2">
                  <span className="bg-yellow-400 p-1 rounded-xl">
                    <RiNumber7 />
                  </span>
                  Screen
                </li>
                <li className="flex items-center gap-2">
                  <span className="bg-yellow-400 p-1 rounded-xl">
                    <RiNumber8 />
                  </span>
                  Battery
                </li>
                <li className="flex items-center gap-2">
                  <span className="bg-yellow-400 p-1 rounded-xl">
                    <RiNumber9 />
                  </span>
                  Won′t Turn On
                </li>
              </ol>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default weCan;
