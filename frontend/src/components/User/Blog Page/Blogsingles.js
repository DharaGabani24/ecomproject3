import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Footer from "../Header & Footer/Footer";
import Navbar from "../Header & Footer/Navbar";
import "../Header & Footer/Navbar.css";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { ImCross } from "react-icons/im";
import axios from "axios";
import Menu from "@mui/material/Menu";
import Avatar from "@mui/material/Avatar";
import Tooltip from "@mui/material/Tooltip";
import IconButton from "@mui/material/IconButton";
import Box from "@mui/material/Box";
import { FiUser } from 'react-icons/fi';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { useAuth } from '../../../context/auth'
import { useCart } from '../../../context/cart'
import { Badge } from 'antd';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Scroll from "../Home Pages/Scroll";
import Logo from './logo.png'
import { url} from '../../../API/api'

const Blogsingles = () => {

  const [Datas, setdata] = useState([]);
  const user_id = localStorage.getItem('userId')

  const dataload = async () => {
    await axios.get(`${url}/auth/get-add-to-cart/` + user_id)
      .then((res) => {
        setdata(res.data.cart_data)
      })  
      .catch((err) => {
        console.log(err);
      })
  }
  useEffect(() => {
    dataload();
  }, [])

  const [Mobile, setMobile] = useState(false);

  const [auth, setauth] = useAuth();
  const [cart, setCart] = useCart();


  const handleLogout = () => {
    setauth({
      ...auth,
      user: null,
      token: "",
      userID: "",
    });
    localStorage.removeItem("auth");
    // localStorage.removeItem("auth");
    toast.success("Logout");
  };

  const [anchorElUser, setAnchorElUser] = useState();
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };
  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };


  const { id } = useParams();

  const [Data, setData] = useState({
    blog_date:'',
    blog_desc:'',
    blog_fulldesc:'',
    blog_image:'',
    blog_title:'',
    blog_writername:'',
  })

  const viewSingleblog = async () => {
    await axios.get(`${url}/blog/view-blog/`+ id)
    .then((res)=>{
        setData(res.data);
    })
    .catch((err)=>{
        console.log(err);
    })
  };
  useEffect(() => {
    viewSingleblog();
  }, []);
  return (
    <>
    <nav className="navbar">
        <h3 className="logo">
          {/* <img src="./logo.png" /> */}
          <img src={Logo} />
        </h3>

        <ul
          className={Mobile ? "nav-links-mobile" : "nav-links"}
          onClick={() => setMobile(false)}
        >
          <Link to="/" className="home">
            <li>Home</li>
          </Link>
          <Link to="/shop" className="home">
            <li>Shop</li>
          </Link>
          <Link to="/media" className="about">
            <li>Media</li>
          </Link>
          <Link to="/blog" className="about">
            <li>Blog</li>
          </Link>
          <Link to="/contact" className="services">
            <li>Contact</li>
          </Link>

          {!auth?.user ? (
            <>
              <Link to="/login" className="services">
                <li>Login</li>
              </Link>
              <Link to="/register" className="services">
                <li>Register</li>
              </Link>
            </>
          ) : (
            <>
              <Link>
                <li>
                  <Box sx={{ flexGrow: 0 }}>
                    <Tooltip title="Profile">
                      <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                        <i style={{ color: '#fff', fontSize: '30px' }}><FiUser /></i>

                        {/* <Avatar
                          alt="Remy Sharp"
                          src="/static/imagess/avatar/2.jpg"
                        /> */}
                      </IconButton>
                    </Tooltip>
                    <Menu
                      sx={{ mt: "45px" }}
                      id="menu-appbar"
                      anchorEl={anchorElUser}
                      anchorOrigin={{
                        vertical: "top",
                        horizontal: "center",
                      }}
                      keepMounted
                      transformOrigin={{
                        vertical: "top",
                        horizontal: "center",
                      }}
                      open={Boolean(anchorElUser)}
                      onClose={handleCloseUserMenu}
                    >
                      <ul style={{ padding: "2px" }}>
                        <Link style={{ color: "#000" }}>
                          <li
                            style={{
                              textAlign: "center",
                              cursor: "pointer",
                              width: "100px",
                            }}
                          >
                            {" "}
                            Profile{" "}
                          </li>
                        </Link>
                        <Link style={{ color: "#000" }}>
                          <li
                            style={{
                              textAlign: "center",
                              cursor: "pointer",
                              width: "100px",
                            }}
                          >
                            {" "}
                            My Order{" "}
                          </li>
                        </Link>

                        {auth?.user?.role === 1 ? (
                          <>

                            <Link
                              onClick={handleLogout}
                              to="/"
                              style={{ color: "#000" }}
                            >
                              <li
                                style={{
                                  textAlign: "center",
                                  cursor: "pointer",
                                  width: "100px",
                                }}
                              >
                                {" "}
                                Logout{" "}
                              </li>
                            </Link>
                          </>
                        ) : (
                          <>
                            <Link
                              onClick={handleLogout}
                              to="/"
                              style={{ color: "#000" }}
                            >
                              <li
                                style={{
                                  textAlign: "center",
                                  cursor: "pointer",
                                  width: "100px",
                                }}
                              >
                                Logout
                              </li>
                            </Link>
                          </>
                        )}
                      </ul>
                    </Menu>
                  </Box>
                </li>
              </Link>
            </>
          )}
          <Link to='/cart'>
            <Badge style={{ marginRight: '30px', minWidth: '14px', height: '14px', fontSize: '12px', lineHeight: '13px', marginTop: '15px' }} status="success" count={Datas?.length} showZero>
              <li><i style={{ color: '#fff', fontSize: '30px', padding: '0px' }}>
                <AiOutlineShoppingCart />
              </i>
              </li>
            </Badge>
          </Link>
        </ul>
        {/* 
        whenever we click on button = setMobile(!Mobile) ==  is mobile oppsite to setMobile 
        */}
        <button className="mobile-menu-icon" onClick={() => setMobile(!Mobile)}>
          {Mobile ? <ImCross /> : <FaBars />}
        </button>
      </nav>

      <div className="container">
        <div className="row">
          <div className="col-5 product-single-img">
            {/* <img src={Data.product_image} alt="" /> */}
            <img src={`/images/blog/${Data.blog_image}`} style={{objectFit: 'cover'}} width='50%' height='300px' alt="" />
            <div className='d-flex'>
            <p style={{fontSize : '18px'}} className='px-3'>Date : {Data.blog_date} </p>
            <p style={{fontSize : '18px'}} className='px-3'>By : {Data.blog_writername}</p>
            </div>
            
          </div>
          <div className="col-7 product-single-body">
            <h2>{Data.blog_title}</h2>
            <hr />
            <p>
               {Data.blog_desc}</p>
            <hr />
            <p>
               {Data.blog_fulldesc}</p>
            
          </div>
        </div>
      </div>
      <div className='p-5'></div>
      <Scroll />
      <Footer />
    </>
  )
}

export default Blogsingles
