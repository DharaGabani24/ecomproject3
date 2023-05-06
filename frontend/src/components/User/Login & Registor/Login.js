import React from "react";
import { useState } from "react";
import axios from "axios";
import { Link , useNavigate , useLocation} from 'react-router-dom'
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FiEye , FiEyeOff } from "react-icons/fi";

import { useAuth } from '../../../context/auth'
import './Login.css'
import Navbar from "../Header & Footer/Navbar";
import {url} from '../../../API/api'

const Login = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [auth, setauth] = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(`${url}/auth/login`, {
        email,
        password,
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
          setauth({
            ...auth,
            user: res.data.user,
            token:res.data.token,
            userId:res.data._id,
            cartId:res.data.cart
          })
          localStorage.setItem('auth',JSON.stringify(res.data))
          localStorage.setItem('userId',res.data.userId)
          localStorage.setItem('Cart',JSON.stringify(res.data.cartId))
        setTimeout(() => {
          navigate( location.state || '/')
        }, 1800);
      }else{
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
  const [show,setshow] = useState(false)
  const handleShow = () =>{
      setshow(!show)
  }
  return (
    <>
    <ToastContainer/>
    {/* <Navbar className="navcss"/> */}
           <div className="login-box">
  <h2>Sign In</h2>
  <form onSubmit={handleSubmit}>
    <div className="user-box">
    {/* {Error?<p style={{color:"red" , position: 'absolute' , top: '60%' , fontSize: '14px'}}>Enter valid Email</p>:''} */}
      <input autoComplete="off" type="text" name='email' onChange={(e)=>setemail(e.target.value)} />
      <label>Email</label>
    </div>
    <div className="user-box">
      <input type={show?"text":"password"} name='password' onChange={(e)=>setpassword(e.target.value)} />
      <label>Password</label>
      {
        show?
        (
          <FiEyeOff  style={{position: 'absolute' , cursor: 'pointer' , color: '#fff' , fontSize:'16px' , top:'27%' , right: '3%'}} onClick={handleShow}/>
        ) :
        (
          <FiEye  style={{position: 'absolute' , cursor: 'pointer' , color: '#fff' , fontSize:'16px' , top:'27%' , right: '3%'}} onClick={handleShow}/>
        )
      }
    </div>
    <div className='login-btn'>
    <a style={{position : 'relative',color : 'white'}}>
      {/* <span />
      <span />
      <span />
      <span /> */}
      <input type="submit" style={{opacity : 0,width :'100%',height : '100%', position : 'absolute',top : 0,left : 0}} />
          Sign In
    </a>
    </div>
    <div className="login-registor">
    <h6>Don't have an account?</h6><Link to="/register"> <p> Sign Up </p> </Link>
    </div>
  </form>
</div>

    </>
  )
}

export default Login