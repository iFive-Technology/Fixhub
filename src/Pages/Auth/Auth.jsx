import React, { useState } from 'react'
import './Auth.css'
import logo from '../../Components/Assets/logos/fixlogBlack.png'
import google from '../../Components/Assets/icons/google.png'
import {  UserOutlined } from '@ant-design/icons';
import { Input} from 'antd';

const Auth = () => {
const [switchAuth, setSwitchAuth] = useState(true);
const [passwordVisible, setPasswordVisible] = useState(false);

const handleAuthSwitch = () => setSwitchAuth(!switchAuth)


const Login = () =>{
  return(
<>
<div className='mt-10 flex flex-col items-center w-10/12 md:w-full'>
  <h3>login</h3>
<div className='mt-10 flex flex-col  gap-3 w-80 md:w-96'>
<Input 
    size="large" 
    placeholder="email" 
    prefix={<UserOutlined />} 
    className='w-11/12 place-self-center'
/>

<Input.Password
      size="large"
      placeholder="password"
      visibilityToggle={{
      visible: passwordVisible,
      onVisibleChange: setPasswordVisible,
          }}
        className='w-11/12 place-self-center' />

<div className='flex items-center gap-3 w-11/12 place-self-center'>
<input type="checkbox" name="stay-Loged" id="" />
<p className='mt-3'>Stay loged in</p>
</div>

<button className='bg-green-500 w-11/12 place-self-center h-12 rounded'> Login</button>
{/* or with strip line   */}
<div className='flex items-center w-11/12 place-self-center flex-col relative'><hr className='w-full '/> <p className='absolute top-0.5 z-10 bg-white w-10 text-center text-xl'>Or</p></div>

{/* google button */}
<div className=' w-11/12 place-self-center h-12 rounded flex justify-center gap-7 items-center border-2 cursor-pointer'><span className='w-5 h-5 ' style={{ 
    backgroundImage: `url(${google})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center"
    }}></span>Continue with Google </div>
    {/* ////////////////////////////// */}

      <p className='text-center'>Don’t you have an account? <span className='text-green-500 font-medium cursor-pointer' onClick={handleAuthSwitch}>Sign up</span> </p>
</div>
</div>

</>

  );
}
// login section ends here
///////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

const Register = () =>{
  return(
<>
<div className='mt-10 flex flex-col items-center w-10/12'>
  <h3>Register</h3>
<div className='mt-10 flex flex-col gap-3 w-96  '>
<Input 
    size="large" 
    placeholder="email" 
    prefix={<UserOutlined />} 
/>

<Input.Password
      size="large"
      placeholder="password"
      visibilityToggle={{
      visible: passwordVisible,
      onVisibleChange: setPasswordVisible,
          }}
        />

<div className='flex items-center gap-3 '>
<input type="checkbox" name="stay-Loged" id="" />
<p className='mt-3'>I do not wish to receive news and promotions from Freepik Company by email.</p>
</div>

<button className='bg-green-500 w-full h-12 rounded'>Register</button>

<div className='flex items-center flex-col relative'><hr className='w-full '/> <p className='absolute top-0.5 z-10 bg-white w-10 text-center text-xl'>Or</p></div>

{/* google button */}
<div className=' w-full h-12 rounded flex justify-center gap-7 items-center border-2 cursor-pointer'><span className='w-5 h-5 ' style={{ 
    backgroundImage: `url(${google})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center",
    }}></span>Continue with Google </div>
    {/* ///////////////////////////////// */}

    <p className='text-center'>Already have an account? <span className='text-green-500 font-medium cursor-pointer' onClick={handleAuthSwitch}>Log in</span> </p>
</div>
</div>

</>
    
  );
}



  return (
    <>
<div className='w-full h-full py-20 md:py-0 md:h-screen flex justify-center'>

<div className='w-full hidden md:block ' style={{ 
    backgroundImage: `url("https://img.freepik.com/free-psd/laptop-psd-mockup-with-gradient-led-light_53876-138283.jpg?size=626&ext=jpg&ga=GA1.2.1708022284.1666880048&semt=sph")`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center",
    boxShadow: "inset 0 0 0 2000px rgba(0, 0, 0, 0.434)",
   
    }}></div>

<div className='md:w-6/12  flex flex-col items-center '>
<div className='h-20 w-52 flex flex-col  md:mt-20' style={{ 
    backgroundImage: `url(${logo})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center",
    zIndex: '-1'
    }}></div>
<div className='flex justify-center '>
  {switchAuth ? <Login /> : <Register />}
</div>

</div>

</div>
    </>
  )
}

export default Auth