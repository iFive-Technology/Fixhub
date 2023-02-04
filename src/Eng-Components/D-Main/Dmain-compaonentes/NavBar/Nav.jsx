import React from 'react'
import './Nav.css'
import { AudioOutlined } from '@ant-design/icons';
import { Input,Avatar, Badge } from 'antd';
import { AiOutlineBell} from 'react-icons/ai'

const Nav = () => {


    const { Search } = Input;
const suffix = (
  <AudioOutlined
    style={{
      fontSize: 16,
      color: '#1890ff',
    }}
  />
);
const onSearch = (value) => console.log(value);
  return (
    <>
       <div className='flex bg-white justify-between items-center px-5 h-14 sticky top-0'>
        <div>
        <Search
      placeholder=" search "
      allowClear
      onSearch={onSearch}
      style={{
        width: 200,
      }}
    />
        </div>


        <div className='flex items-center h-full '>
           <div className='flex items-center mr-10 mt-2'>
            <span> <Badge count={5}>
      <AiOutlineBell className='text-2xl'/>
    </Badge></span>
           </div>

            {/* ////////  profile  ///////// */}
            <div className='flex items-center  gap-4'>
                <div className='w-10 h-10 rounded-3xl ' style={{ 
    backgroundImage: `url("https://img.freepik.com/free-psd/laptop-psd-mockup-with-gradient-led-light_53876-138283.jpg?size=626&ext=jpg&ga=GA1.2.1708022284.1666880048&semt=sph")`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center",
  }}></div>


<div className='mt-2 leading-3'>
    <h6 className='text-medium '>Dami oma</h6>
    <p >Silver </p>
</div>
            </div>
            {/* /////////////////// */}
        </div>
        </div> 
    </>
  )
}

export default Nav