import axios from 'axios';
import React, { useEffect } from 'react'
import './Featureproduct.css'
import { useState } from 'react';
import { AiFillStar, AiOutlineShoppingCart } from "react-icons/ai";
import { BsStarHalf, BsStarFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import Star from '../Shop Pages/Star';
import { useCart } from '../../../context/cart'
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Currency from '../Helper/Currency';
import {url} from '../../../API/api'
 

const Featureproduct = () => {

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
      const oldcart = JSON.parse(localStorage.getItem('Cart')) || [];
      oldcart.push(id);
      localStorage.setItem('Cart', JSON.stringify(oldcart));
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

  const [data, setdata] = useState([]);
  const [cart, setCart] = useCart();

  const view_feature_product = async () => {
    const result = await axios.get(`${url}/product/view-product`)
    setdata(result.data.slice(0, 3))
  }

  useEffect(() => {
    view_feature_product();
  }, [])
  // console.log(data);
  return (
    <>
      <ToastContainer />

      {/* <div className="container shop-title"> */}
      <h2 className="text-center my-5 proText" >PRODUCTS</h2>
      {/* <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3"> */}
      {/* <div class="album py-5 ">
        <div class="container">
          <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
            {data.map((product) => {
              return (
                <>
                  <div class="album py-3 m-0 ">
                    <div class="container p-0">
                      <div class="col">
                        <div class="card product-img-s">
                          <Link to={`/product/${product._id}`}>
                            <img
                              src={`/images/product/${product.product_image}`}
                              class="bd-placeholder-img card-img-top"
                              width="100%"
                              height="225"
                              alt=""
                            />
                          </Link>
                          <div class="card-body product-body">
                            <Link to={`/product/${product._id}`}>
                              <p
                                style={{ color: "black" }}
                                class="card-text product-title"
                              >
                                {product.product_name.slice(0, 20)}
                              </p>
                            </Link>
                            <div class="d-flex justify-content-between align-items-center">
                              <div className="btn-group product-sub-body">
                                <Star product_reviews={product.product_reviews} />
                              </div>
                              <small class="product-price">
                                <p class="card-text">
                                  <Currency product_price={product.product_price} /> */}
      {/* ₹ {product.product_price} */}
      {/* </p>
                              </small>
                            </div>
                            <div class="d-flex justify-content-between align-items-center">
                              <div class="btn-group btn-shop">
                                <Link to={`/product/${product._id}`}>
                                  <button
                                    type="button"
                                    class="btn btn-sm btn-outline product-btn"
                                  >
                                    View Details
                                  </button>
                                </Link>
                                <button
                                  type="button"
                                  class="btn btn-sm btn-outline product-btn"
                                  // onClick={() => { setCart([...cart,product._id]) 
                                  //   localStorage.setItem('cart', JSON.stringify([...cart,product._id]))
                                  // }}
                                  onClick={() => Add_to_cart(product._id)}
                                >
                                  <i>
                                    <AiOutlineShoppingCart />
                                  </i>
                                  Add To Cart
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              );
            })}
          </div>
        </div>
      </div> */}
      <div class="container text-center">
        <div class="row">

          {
            data.map((product) => {
              return (
                <>
                
                  {/* <div class="col-12 col-lg-4 col-md-6 my-3 producttext " style={{ boxShadow: 'rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;' }}>
                    <img width='700px' height='700px' style={{ objectFit: 'cover'}} src={`/images/product/${product.product_image}`} alt="" />
                    <div>
                      <p>{product.product_name.slice(0, 20)}</p>
                      <div className='d-flex justify-content-between mx-5'>
                        <Star product_reviews={product.product_reviews} />
                        <p className='mt-2'> <Currency product_price={product.product_price} className='text-center' /> </p>

                      </div>
                      <div>
                        <Link to={`/product/${product._id}`}>
                          <button className='p-0 btn-products-vd'>View Detail</button>
                        </Link>
                        <button className='p-0 btn-products'
                          onClick={() => Add_to_cart(product._id)}
                        >Add to Cart</button>
                      </div>
                    </div>
                  </div> */}
                </>
              )
            })
          }


        </div>
      </div>

    </>
  )
}

export default Featureproduct