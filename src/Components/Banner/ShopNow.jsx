import React from "react";
import "./ShopNow.css";
import product from "./b-headphone.png";

const ShopNow = () => {
  return (
    <div className="w-full shop-now  flex items-center md:mt-52 mt-32"style={{ 
      backgroundImage: `url(${product})`,
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
      backgroundPosition: "center",
     
      }}>
    
      <div className="w-full flex flex-col items-start md:ml-32 ml-5 text-white  ">
        <h1 className="lg:text-7xl md:text-4xl text-4xl font-bold z-10 ">
          Buy AirPods Today <br  className="hidden md:block"/> with 20% Discount
        </h1>

        <button className="w-44 mt-14 lg:p-4 p-3 rounded-md bg-yellow-300 z-10 ">
          Get promocode
        </button>
      </div>
     
    </div>
  );
};

export default ShopNow;
