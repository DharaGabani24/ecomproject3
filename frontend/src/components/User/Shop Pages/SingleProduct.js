import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./Shop.css";
import Footer from "../Header & Footer/Footer";
import Navbar from "../Header & Footer/Navbar";
import "../Header & Footer/Navbar.css";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { FiShoppingCart } from "react-icons/fi";
import { ImCross } from "react-icons/im";
import axios from "axios";
import Featureproduct from "../Home Pages/Featureproduct";
import Logo from './logo.png'
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
import Star from "./Star";
import Currency from "../Helper/Currency";
import Scroll from "../Home Pages/Scroll";
import {url} from '../../../API/api'
import { RiRestartLine, RiSecurePaymentLine, RiExchangeDollarLine, RiPriceTag3Line } from 'react-icons/ri'
import { FaShippingFast } from 'react-icons/fa'


const SingleProduct = ({ products }) => {

  const [data, setdata] = useState([]);
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

  const Add_to_cart = (id) => {

    let user_id = localStorage.getItem('userId');

    if (!user_id) {
      toast.error("Pls Login Account", {
        position: "top-center",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    } else {
      const oldcart = JSON.parse(localStorage.getItem('cart old id')) || [];
      oldcart.push(id);
      localStorage.setItem('cart old id', JSON.stringify(oldcart));
      toast.success("Add Item", {
        position: "top-center",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      const Newdata = {
        user_id: user_id,
        Data: oldcart,
      }
      axios.post(`${url}/auth/add-to-cart`, { Newdata: Newdata })
    }
  }



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
    product_name: '',
    product_price: '',
    product_description: '',
    product_discount: '',
    product_reviews: '',
    product_image: '',
    id: ''
  });

  const viewSingleproduct = async () => {
    const result = await axios.get(`${url}/product/view-single-product/` + id);
    // console.log(result.data);
    setData(result.data);
  };
  useEffect(() => {
    viewSingleproduct();
  }, []);

  return (
    <>
      {/*  Start Navbar */}

      <ToastContainer />
      {/* <nav className="navbar"> */}
        {/* <h3 className="logo"> */}
          {/* <img src="./logo.png" /> */}
          {/* <img src={Logo} /> */}
        {/* </h3> */}
        <nav className="navbar" style={{ zIndex: '1' }} >
        <h3 className="logo">
          <Link to='/'>
            {/* <img src="./image/logo.png" /> */}<p>TRENDY MART</p>
          </Link>
          {/* <img src={logo}/> */}
        </h3>
        <ul
          className={Mobile ? "nav-links-mobile" : "nav-links"}
          onClick={() => setMobile(false)}
        >
         <Link to="/" className="home">
            <li className="text">Home</li>
          </Link>
          <Link to="/shop" className="home">
            <li className="text">Items</li>
          </Link>
          <Link to="/media" className="about">
            <li className="text">Pictures</li>
          </Link>
          <Link to="/blog" className="about">
            <li className="text">Reviews</li>
          </Link>
          <Link to="/contact" className="services">
            <li className="text">Contact</li>
          </Link>

          {!auth?.user ? (
            <>
              <Link to="/login" className="services">
                <li className="text" >Login</li>
              </Link>
              <Link to="/register" className="services">
                <li className="text">Register</li>
              </Link>
            </>
          ) : (
            <>
              <Link>
                <li>
                  <Box sx={{ flexGrow: 0 }}>
                    <Tooltip title="Profile">
                      <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                        <i style={{ color: '#000', fontSize: '30px' }}><FiUser /></i>

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
                        <Link style={{ color: "#000" }} to='/order'>
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
            <li className="text">
           
              <Box sx={{ flexGrow: 0 }}>
                <Badge className="cartcounter"style={{fontFamily:"Jost", marginRight: '-45px',color:"rgb(25, 25, 109)", backgroundColor:"#d4cbf0", minWidth: '14px', height: '14px', fontSize: '12px', lineHeight: '13px', marginTop: '-5px' }} status="success" count={data?.length} showZero>
                  <IconButton sx={{ p: 0 }}>
                  {/* <i class="fa-sharp fa-solid fa-cart-shopping icon2 "></i> */}
                    {/* <i style={{ color: '#fff', fontSize: '30px' }}><AiOutlineShoppingCart /></i> */}
                  </IconButton>
                </Badge>
              Cart
              </Box>
            </li>
          </Link>
        </ul>
        {/* 
        whenever we click on button = setMobile(!Mobile) ==  is mobile oppsite to setMobile 
        */}
        <button className="mobile-menu-icon" onClick={() => setMobile(!Mobile)}>
          {Mobile ? <ImCross /> : <FaBars />}
        </button>
      </nav>

      <div className="container" style={{marginTop:"20px"}}>
        <div className="row">
          <div className="col-5 product-single-img">
            {/* <img src={Data.product_image} alt="" /> */}
            <img src={`/images/product/${Data.product_image}`} alt="" />
          </div>
          <div className="col-7 product-single-body">
            <h2>{Data.product_name}</h2>
            <p style={{fontSize:"20px"}}>{Data.product_description}</p>              
              <Star product_reviews={Data.product_reviews} />
            {/* <p> {Data.product_reviews}</p> */}

            <hr />

            <p className="pricedata" style={{fontSize:"19px"}}>
              <Currency product_price={Data.product_price} /><br/><p className="mrp">M.R.P:&nbsp;<s><Currency product_price={Data.product_discount}></Currency></s></p>
               {/* <del>{Data.product_discount}</del> */}
            </p>
            {/* <br /> */}
            {/* <p>{Data.product_description}</p> */}
            <p style={{fontSize:"20px"}}>Inclusive of all taxes</p>
            <hr />
            <div class="shop-info" >
              <ul >
                <div style={{display:"flex"}}>

                <li style={{display:"flex",marginBottom:"20px", marginRight:"70px"}}>
                <FaShippingFast style={{fontSize:"60px",padding:"10px",borderRadius:"50%", boxShadow: "0px 3px 8px rgba(0, 0, 0, 0.24)"}}/>
                
                  <p style={{marginTop:"13px", fontSize:"20px",fontFamily:"Jost"}}>&nbsp;Free Shipping </p>
                </li>
                <li style={{display:"flex", marginBottom:"10px"}}>
                <RiRestartLine style={{ fontSize:"60px",padding:"10px",borderRadius:"50%", boxShadow: "0px 3px 8px rgba(0, 0, 0, 0.24)"}}/>
                  
                  <p style={{marginTop:"13px", fontSize:"20px"}}>&nbsp;Easy Return</p>
                </li>
                </div>
                <div style={{display:"flex"}} >
                <li style={{display:"flex",marginBottom:"10px",marginRight:"56px"}}>
                <RiSecurePaymentLine style={{ fontSize:"60px",padding:"10px",borderRadius:"50%", boxShadow: "0px 3px 8px rgba(0, 0, 0, 0.24)"}}/>
                <p style={{marginTop:"13px", fontSize:"20px"}}>&nbsp;Secure Payment</p>

                
                </li>
                <li style={{display:"flex", marginBottom:"10px"}}>
                <RiPriceTag3Line style={{ fontSize:"60px",padding:"10px",borderRadius:"50%", boxShadow: "0px 3px 8px rgba(0, 0, 0, 0.24)"}}/>
                <p style={{marginTop:"13px", fontSize:"20px"}}>&nbsp;Brand Guarantee</p>
                </li>
                </div>
              </ul>
            </div>
            <hr />
            <div class="d-flex justify-content-between align-items-center">
              <div class="btn-group">
                {/* <Link style={{ color: '#fff' }} to='/buynow'>
                  <button type="button" class="product-single-btn">
                    shop Now
                  </button>
                </Link> */}
                <button type="button" class="addcartbtn"

                  onClick={() => { Add_to_cart(Data._id) }}>
                  Add To Cart
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Scroll />
      <Featureproduct />
      <Footer />
    </>
  );
};

export default SingleProduct;
