import React, { useState } from "react";
import "./Nav.css";
import { AudioOutlined } from "@ant-design/icons";
import { Input, Avatar, Badge } from "antd";
import { AiOutlineBell, AiOutlineLogout, AiOutlineMessage } from "react-icons/ai";
import { TbNotification } from "react-icons/tb";
import { CgProfile } from "react-icons/cg";
import { Link } from "react-router-dom";

const Nav = () => {
const [handleProfile, setHandleProfile] = useState(false)
// function to trigger the profile drop down
const triggerDropDown = () => setHandleProfile(!handleProfile)

  const { Search } = Input;
  const suffix = (
    <AudioOutlined
      style={{
        fontSize: 16,
        color: "#1890ff",
      }}
    />
  );
  const onSearch = (value) => console.log(value);
  return (
    <>
      <div className="flex bg-white z-50 justify-between items-center px-5 w-full h-16 fixed d-nav" >
        <div className="  ">
          <Search
            placeholder=" search "
            allowClear
            onSearch={onSearch}
            style={{
              width: 200,
            }}
          />
        </div>

{/* /////////////////////right side div/////////////////////// */}
        <div className="flex items-center mr-72 h-full ">
          <div className="flex items-center mr-10 mt-2">
            <span>
              {" "}
              <Badge count={5}>
                <AiOutlineBell className="text-2xl" />
              </Badge>
            </span>
          </div>

          {/* ////////  profile  ///////// */}
          <div className="flex items-center bg-gray-100 cursor-pointer px-2 gap-4 relative" onClick={triggerDropDown}>
            <div
              className="w-10 h-10 rounded-3xl "
              style={{
                backgroundImage: `url("https://img.freepik.com/free-psd/laptop-psd-mockup-with-gradient-led-light_53876-138283.jpg?size=626&ext=jpg&ga=GA1.2.1708022284.1666880048&semt=sph")`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            ></div>

            <div className="mt-2 leading-3">
              <h6 className="text-medium ">Dami oma</h6>
              <p>Silver </p>
            </div>


              {/* ////////////////////// profile drop-down/////////////////////////// */}
            <div className={handleProfile ? "bg-white border border-gray-100 w-40 rounded-md p-3 text-md h-auto drop-shadow-xl z-10 absolute top-100 right-0" : " hidden"} style={{zIndex: 100}}>
           <div className="w-full  ">
              <Link to='profile' className="no-underline">  <p className="flex items-center text-black gap-2"><span><CgProfile/></span>Profile</p> </Link>
              <p className="flex items-center text-black gap-2"><span><AiOutlineMessage /></span>Messages</p>
              <p className="flex items-center text-black gap-2"><span><TbNotification /></span>New orders</p>
              <hr className="w-full"/>
              <p className="flex items-center text-black gap-2"><span><AiOutlineLogout /></span>Logout</p>
             
           </div>
          </div>

          </div>

         
          {/* /////////////////// */}
        </div>
      </div>
    </>
  );
};

export default Nav;
