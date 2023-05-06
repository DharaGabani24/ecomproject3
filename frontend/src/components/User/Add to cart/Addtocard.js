import React, { useEffect, useState } from 'react'
import Footer from '../Header & Footer/Footer'
import Navbar from '../Header & Footer/Navbar'
import { useAuth } from '../../../context/auth'
import { useCart } from '../../../context/cart'
import img from './logo1.jpeg'
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AiOutlineClose } from 'react-icons/ai';
import './Cart.css'
import Currency from '../Helper/Currency'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import Register from '../Login & Registor/Register'
import Pay from '../Payments/Pay'
import {url} from '../../../API/api'

const Addtocard = () => {
  const [auth, setauth] = useAuth();

  const user_id = localStorage.getItem('userId')
  const navigate = useNavigate();

  let Ttotal = 0;
  const PriceTotal = () => {
    try {
      Ttotal = parseInt(Shippingtotal) + parseInt(subTotal)
      return Ttotal.toLocaleString("en-IN", {
        style: "currency",
        currency: 'INR'
      });
    } catch (err) {
      console.log(err);
    }
  }
  let Shippingtotal = 0;
  const ShippingTotal = () => {
    try {
      data?.map((item) => {
        Shippingtotal = parseInt(Shippingtotal) + parseInt(item.product_price) / 100 * 0;
      })
      return Shippingtotal.toLocaleString("en-IN", {
        style: "currency",
        currency: 'INR'
      });
    } catch (err) {
      console.log(err);
    }
  }


  let subTotal = 0;
  const subtotal = () => {
    try {
      data?.map((item) => {
        subTotal = parseInt(subTotal) + parseInt(item.product_price)
      })
      return subTotal.toLocaleString("en-IN", {
        style: "currency",
        currency: 'INR'
      });
    } catch (err) {
      console.log(err);
    }
  }

  const [data, setdata] = useState([]);
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
  const deleteData = async (id) => {
    deleteDatas(id);
    const objData = {
      id: id,
      user_id: user_id
    }
    await axios.post(`${url}/auth/delete-cart`, { objData: objData })
  }
  const deleteDatas = (id) => {
    const array = JSON.parse(localStorage.getItem('Cart'))
    const index = array.findIndex((item) => item === id);
    array.splice(index, 1)

    localStorage.setItem('Cart', JSON.stringify(array));
    setTimeout(() => {
      window.location.reload()
    }, 1500);
    toast.success("Cart Item Remove Sucessfully", {
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

  return (
    <>
      <ToastContainer />
      <Navbar />



      {/* {`Hello ${auth?.token && auth?.user?.name}`} */}
      <div className="container">

        <div className="row">
          <div className="col-md-12">
            <h1 className="text-center bg-light p-2 mb-1">
            </h1>
            <h6 className="text-center">
              {data?.length
                ? `Total ${data.length} items in your cart ${auth?.token ? "" : "please login to checkout"
                }`
                : " Your Cart Is Empty"}
            </h6>
          </div>
        </div>
      </div>

      <div className="container">

        {data?.length
          ?
          <div className='container mt-5'>
        {/* <h1>Shopping Cart</h1> */}
        <div className="shopping-cart">
          <div className="column-labels">
            <label className="product-image">Image</label>
            <label className="product-details">Product</label>
            <label className="product-price">Price</label>
            <label className="product-removal">Remove</label>
            <label className="product-line-price">Total</label>
          </div>

          {
            data.map((product) => {
              return (
                <>
                  <div className="product">
                    <div className="product-image">
                      <img src={`/images/product/${product.product_image}`} />
                    </div>
                    <div className="product-details">
                      <div className="product-title">{product.product_name.slice(0, 23)}</div>
                      <p className="product-description">{product.product_description}</p>
                    </div>
                    <div className="product-price">
                      <Currency product_price={product.product_price} />
                    </div>
                    <div className="product-removal">
                      <button className="remove-product" onClick={(e) => deleteData(product._id)}>
                        Remove
                      </button>
                    </div>
                    <div className="product-line-price">
                      <Currency product_price={product.product_price} />
                    </div>
                  </div>
                </>
              )
            })
          }

          <div className="totals">
            <div className="totals-item totals-item-total">
              <label>Subtotal</label>
              <div className="totals-value" id="cart-subtotal">{subtotal()}</div>
            </div>
            <div className="totals-item totals-item-total">
              <label>Shipping charges</label>
              <div className="totals-value" id="cart-shipping">{ShippingTotal()}</div>
            </div>
            <div className="totals-item totals-item-total">
              <label> Total</label>
              <div className="totals-value" id="cart-total">{PriceTotal()}</div>
            </div>
          </div>
          <div className=''>
          <Pay />
          </div>
           {/* <Link to='/buynow'><button className="checkout">Checkout</button></Link> */}
        </div>
      </div>
          :
          (
            <>
              {/* d-flex justify-content-center   */}
              <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '60vh' }}>
                <Link style={{ padding: '3px 25px', color: '#fff', backgroundColor: '#000' }} to='/shop '>Shopping Now</Link>
                <div>
                </div>
              </div>
            </>
          )}
      </div>
    </>
  )
}

export default Addtocard