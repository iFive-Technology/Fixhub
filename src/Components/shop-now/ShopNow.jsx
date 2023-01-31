import React from "react";
import "./ShopNow.css";
import product from "./b-headphone.png";

const ShopNow = () => {
  return (
    <div className="w-full shop-now bg-blue-400 md:flex items-center justify-center overflow-hidden relative md:mt-52 mt-32">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="637.032"
        height="773.597"
        viewBox="175.989 168.483 637.032 773.597"
        className="w-80 absolute md:top-72 md:left-5 bottom-80 right-44 blob1"
      >
        <defs>
          <clipPath id="a">
            <path
              fill="currentColor"
              d="M767 610q-47 110-157 248t-269.5 49.5q-159.5-88.5-147-248t-14-333Q153 153 326.5 170T656 187.5Q812 188 813 344t-46 266Z"
            />
          </clipPath>
        </defs>
        <g clip-path="url(#a)">
          <path
            fill="#fff"
            d="M767 610q-47 110-157 248t-269.5 49.5q-159.5-88.5-147-248t-14-333Q153 153 326.5 170T656 187.5Q812 188 813 344t-46 266Z"
          />
        </g>
      </svg>

      <div className="w-full flex flex-col items-center mt-20 ">
        <h1 className="md:text-5xl text-4xl font-bold z-10 text-center">
          Buy AirPods Today with 20% Discount
        </h1>

        <button className="w-44 mt-14 p-4 rounded-md bg-yellow-300 z-10 ">
          Get promocode
        </button>
      </div>
      <div className="w-full  flex justify-center relative ">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="637.032"
          height="773.597"
          viewBox="175.989 168.483 637.032 773.597"
          className="w-80 absolute md:bottom-28 blob2 md:left-2/3 "
        >
          <defs>
            <clipPath id="a">
              <path
                fill="currentColor"
                d="M767 610q-47 110-157 248t-269.5 49.5q-159.5-88.5-147-248t-14-333Q153 153 326.5 170T656 187.5Q812 188 813 344t-46 266Z"
              />
            </clipPath>
          </defs>
          <g clip-path="url(#a)">
            <path
              fill="#fff"
              d="M767 610q-47 110-157 248t-269.5 49.5q-159.5-88.5-147-248t-14-333Q153 153 326.5 170T656 187.5Q812 188 813 344t-46 266Z"
            />
          </g>
        </svg>

        <img
          src={product}
          alt="product-image"
          className="z-10 w-10/12 h-7/12 mt-20"
        />
      </div>
    </div>
  );
};

export default ShopNow;
