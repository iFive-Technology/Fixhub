import React, { useState } from "react";
import "./Auth.css";
import logo from "../../Components/Assets/logos/fixlogBlack.png";
import google from "../../Components/Assets/icons/google.png";
import { BsArrowLeft } from "react-icons/bs";
import { UserOutlined } from "@ant-design/icons";
import { Input, Result } from "antd";
import { Link } from "react-router-dom";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";

import { collection, doc, setDoc } from "firebase/firestore";
import {auth, db} from "./Firebase";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Auth = () => {
  const [switchAuth, setSwitchAuth] = useState(true);
  const [passwordVisible, setPasswordVisible] = useState(false);

  // current date that will be use to know when user join us
  let currentDate = new Date().toJSON().slice(0, 10);

  // const {createUser} = UserAuth();

  // function that handle signupm and login page switch
  const handleAuthSwitch = () => setSwitchAuth(!switchAuth);

  // firebase email and password auth

  // sign up with google instead
  const provide = new GoogleAuthProvider();

  const googleSign = () => {
    signInWithPopup(auth, provide)
      .then((result) => {
        setDoc(doc(db, "users", result.user.uid), {
          name:  result.user.displayName,
          email: result.user.email,
          profile:  result.user.photoURL,
          joinDate: currentDate
              });
        console.log(result);
      })
      .catch((err) => {
        // console.log(err);
      });
  };

  const Login = () => {
    // get user ifo
    const [logEmail, setLogEmail] = useState("");
    const [Logpassword, setLogPassword] = useState("");

    // handle login auth
    const handleLog = async (e) => {
      e.preventDefault();

      // clear field when submit
      setLogEmail("");
      setLogPassword("");

      // checking the user value ans send to firebase
      try {
        await signInWithEmailAndPassword(auth, logEmail, Logpassword).then(
          (userCredential) => {

  // Signed in
  const user = userCredential.user;
 
            // sussess toast message
            toast.success("🦄Login Successful!", {
              position: "top-center",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "dark",
            });
          
          }
        );
      } catch (e) {
        toast.error(`🦄${e.message}`, {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
          });
      }
    };
    return (
      <>
        <div className="mt-10 flex flex-col items-center w-10/12 md:w-full">
          <h3>login</h3>
          <div>
            <form
              className="mt-10 flex flex-col  gap-3 w-80 md:w-96"
              onSubmit={handleLog}
            >
              <Input
                size="large"
                placeholder="email"
                prefix={<UserOutlined />}
                className="w-11/12 place-self-center"
                value={logEmail}
                onChange={(e) => setLogEmail(e.target.value)}
              />

              <Input.Password
                size="large"
                placeholder="password"
                visibilityToggle={{
                  visible: passwordVisible,
                  onVisibleChange: setPasswordVisible,
                }}
                className="w-11/12 place-self-center"
                value={Logpassword}
                onChange={(e) => setLogPassword(e.target.value)}
              />

              <div className="flex items-center gap-3 w-11/12 place-self-center">
                <input type="checkbox" name="stay-Loged" id="" />
                <p className="mt-3">Stay loged in</p>
              </div>

              <button className="bg-green-500 w-11/12 place-self-center h-12 rounded">
                {" "}
                Login
              </button>
              {/* or with strip line   */}
              <div className="flex items-center w-11/12 place-self-center flex-col relative">
                <hr className="w-full " />{" "}
                <p className="absolute top-0.5 z-10 bg-white w-10 text-center text-xl">
                  Or
                </p>
              </div>

              {/* google button */}
              <div
                className=" w-11/12 place-self-center h-12 rounded flex justify-center gap-7 items-center border-2 cursor-pointer"
                onClick={googleSign}
              >
                <span
                  className="w-5 h-5 "
                  style={{
                    backgroundImage: `url(${google})`,
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                ></span>
                Continue with Google{" "}
              </div>
              {/* ////////////////////////////// */}
            </form>
            <p className="text-center">
              Don’t you have an account?{" "}
              <span
                className="text-green-500 font-medium cursor-pointer"
                onClick={handleAuthSwitch}
              >
                Sign up
              </span>{" "}
            </p>
          </div>
        </div>
      </>
    );
  };
  // login section ends here
  ///////////////////////////////////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////

  const Register = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleReg = async (e) => {
      e.preventDefault();
      setEmail("");
      setPassword("");
      try {
        await createUserWithEmailAndPassword(auth, email, password).then(
          (userCredential) => {

       // Signed in
       const user = userCredential.user;

        setDoc(doc(db, "users", user.uid), {
        email: email,
        password: password,
        joinDate: currentDate
            });

            // sussess toast message
            toast.success("🦄Sign-up Successful!", {
              position: "top-right",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "dark",
            });
     
          }
        );
      } catch (e) {
        toast.error(`🦄${e.message}`, {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
          });
     
      }
    };

    return (
      <>
        <div className="mt-10 flex flex-col items-center w-10/12 md:w-full">
          <h3>Register</h3>
          <div>
            <form
              className="mt-10 flex flex-col  gap-3 w-80 md:w-96 "
              onSubmit={handleReg}
            >
              <Input
                size="large"
                placeholder="email"
                prefix={<UserOutlined />}
                className="w-11/12 place-self-center"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />

              <Input.Password
                size="large"
                placeholder="password"
                visibilityToggle={{
                  visible: passwordVisible,
                  onVisibleChange: setPasswordVisible,
                }}
                className="w-11/12 place-self-center"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />

              <div className="flex items-center gap-3 w-11/12 place-self-center">
                <input type="checkbox" name="stay-Loged" id="" />
                <p className="mt-3 text-sm">
                  I do not wish to receive news and promotions from Freepik
                  Company by email.
                </p>
              </div>

              <button className=" bg-green-500 w-11/12 place-self-center h-12 rounded">
                Register
              </button>

              <div className="flex items-center w-11/12 place-self-center flex-col relative">
                <hr className="w-full " />{" "}
                <p className="absolute top-0.5 z-10 bg-white w-10 text-center text-xl">
                  Or
                </p>
              </div>

              {/* google button */}
              <div
                className=" w-11/12 place-self-center h-12 rounded flex justify-center gap-7 items-center border-2 cursor-pointer"
                onClick={googleSign}
              >
                <span
                  className="w-5 h-5 "
                  style={{
                    backgroundImage: `url(${google})`,
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                ></span>
                Continue with Google{" "}
              </div>
              {/* ///////////////////////////////// */}
            </form>
            <p className="text-center">
              Already have an account?{" "}
              <span
                className="text-green-500 font-medium cursor-pointer"
                onClick={handleAuthSwitch}
              >
                Log in
              </span>{" "}
            </p>
          </div>
        </div>
      </>
    );
  };

  return (
    <>
    {/* error toast that will display if the user input the wron cred */}
      <ToastContainer
              position="top-center"
              autoClose={5000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick
              rtl={false}   
              pauseOnFocusLoss
              draggable
              pauseOnHover
              theme="dark"
            />

                {/* successful toast that will display if the user input the right cred */}
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />

      <div className="w-full h-full py-3 md:py-0 md:h-screen flex justify-center">
        <div
          className="w-full hidden md:block "
          style={{
            backgroundImage: `url("https://i.pinimg.com/564x/6f/d6/f4/6fd6f432c99d07e098ab9c1533756894.jpg")`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center",
            boxShadow: "inset 0 0 0 2000px rgba(0, 0, 0, 0.634)",
          }}
        ></div>
        <div className="md:w-6/12 ">
          {/* go back to home button here */}
          <Link to="/" className="link">
            <p className="text-lg gap-2 cursor-pointer  text-green-500 flex items-center ml-5 md:mt-2">
              <span>
                <BsArrowLeft />
              </span>{" "}
              Home
            </p>
          </Link>
          {/* //////////////////////////////////////////////////// */}
          <div className=" flex flex-col items-center ">
            <div
              className="h-20 w-52 flex flex-col  md:mt-10"
              style={{
                backgroundImage: `url(${logo})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                backgroundPosition: "center",
                zIndex: "-1",
              }}
            ></div>
            <div className="flex justify-center ">
              {switchAuth ? <Login /> : <Register />}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Auth;
