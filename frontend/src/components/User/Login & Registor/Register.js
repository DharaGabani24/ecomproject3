import React from "react";
import { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link, useNavigate } from 'react-router-dom'
import { FiEye, FiEyeOff } from "react-icons/fi";
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'
import PasswordChecklist from "react-password-checklist"
import { url} from '../../../API/api'

import "./Login.css";
import Navbar from "../Header & Footer/Navbar";
const Register = () => {
  const navigate = useNavigate();

  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [value, setValue] = useState()

  const [password, setpassword] = useState("");
  const [phone, setphone] = useState();
   
  const pattern = /^\d{10}$/;

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(`${url}/auth/register`, {
        name,
        email,
        password,
        phone,
      });


      if (!/^([a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$)/.test(email)) {
        toast.error("Enter valid Email", {
          position: "top-center",
          autoClose: 1000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      } else if (phone.match(pattern)) {
        toast.error("Enter valid Phone Number", {
          position: "top-center",
          autoClose: 1000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      } else if (res.data.sucess) {
        toast.success(res.data.message, {
          position: "top-center",
          autoClose: 1000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
        setTimeout(() => {
          navigate('/login')
        }, 1800);
      } else {
        toast.error(res.data.message, {
          position: "top-center",
          autoClose: 1000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
        toast.error()
      }

    } catch (err) {
      console.log(err);
      toast.error("Something went wrong", {
        position: "top-center",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  };
  // const [value, setValue] = useState()/
  // var mailformat = /^w+([.-]?w+)*@w+([.-]?w+)*(.w{2,3})+$/;
  // if (!/^([a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$)/.test(email)) {
  //   toast.error("Enter valid Email", {
  //     position: "top-center",
  //     autoClose: 1000,
  //     hideProgressBar: false,
  //     closeOnClick: true,
  //     pauseOnHover: true,
  //     draggable: true,
  //     progress: undefined,
  //     theme: "light",
  //   });
  // }
  const [show, setshow] = useState(false)
  const handleShow = () => {
    setshow(!show)
  }

  return (
    <>
      <ToastContainer />
      {/* <Navbar/> */}
      <div className="login-box" style={{marginTop: '50px'}}>
        <h2>Sign Up</h2>
        <form onSubmit={handleSubmit}>
          <div className="user-box">
            <input type="text" name="name" autoComplete="off" onChange={(e) => setname(e.target.value)} />
            <label>Name</label>
          </div>
          <div className="user-box">
            {/* {Error?<p style={{color:"red" , position: 'absolute' , top: '60%' , fontSize: '14px'}}>Enter valid Email</p>:''} */}
            <input type="text" name="email" autoComplete="off" onChange={(e) => setemail(e.target.value)} />
            <label>Email</label>

          </div>
          <div className="user-box">
            <input type={show ? "text" : "password"} autoComplete="off" name="passowrd" onChange={(e) => setpassword(e.target.value)} />
            <label>Password</label>
            {
              show ?
                (
                  <FiEyeOff style={{ position: 'absolute', cursor: 'pointer', color: '#fff', fontSize: '16px', top: '27%', right: '3%' }} onClick={handleShow} />
                ) :
                (
                  <FiEye style={{ position: 'absolute', cursor: 'pointer', color: '#fff', fontSize: '16px', top: '27%', right: '3%' }} onClick={handleShow} />
                )
            }
          </div>

          <div className="user-box">
            <PhoneInput
              international
              defaultCountry="IN"
              name="phone"
              onChange={setphone}
              value={phone}
              autoComplete="off"
            />
          </div>
          <div className='login-btn'>
            <a style={{ position: 'relative', color: 'white' }}>
              {/* <span />
              <span />
              <span />
              <span /> */}
              <input type="submit" style={{ opacity: 0, width: '100%', height: '100%', position: 'absolute', top: 0, left: 0 }} />
              Sign Up
            </a>
          </div>
          <div className="login-registor">
            <h6>Have an account?</h6><Link to="/login"> <p> Sign In </p> </Link>
          </div>
        </form>
      </div>
    </>
  );
};

export default Register;
