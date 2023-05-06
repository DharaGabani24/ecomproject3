import Footer from "../Header & Footer/Footer";
import Navbar from "../Header & Footer/Navbar";
import "./Shop.css";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { AiFillStar, AiOutlineShoppingCart } from "react-icons/ai";
import Loading from "../Loader/Loading";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Star from "./Star";
import Currency from "../Helper/Currency";
import Scroll from '../Home Pages/Scroll'
import ReactPaginate from "react-paginate";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md';
import {url} from '../../../API/api'

const Shop = () => {

  const [data, setdata] = useState([]);

  const viewProduct = async () => {
    const result = await axios.get(
      `${url}/product/view-product`
    );
    setdata(result.data);
  };

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

  const [pageNumber, setPageNumber] = useState(0);
  const usersPerPage = 9;
  const pagesVisited = pageNumber * usersPerPage;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pageNumber]);

  const pageCount = Math.ceil(data.length / usersPerPage);
  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };


  useEffect(() => {
    viewProduct();
  }, []);

  const [isloading, setisloading] = useState(false);
  useEffect(() => {
    setisloading(true);
    setTimeout(() => {
      setisloading(false);
    }, 1000);
  }, []);

  return (
    <>

      <ToastContainer />
      {isloading ? (
        <Loading />
      ) : (
        <>
        <Navbar />

        <div className="containercolor">

          <h2 className="text-center my-4 headingtext" style={{ fontFamily:'Jost', fontWeight: '450', marginTop:"10px" }}>PRODUCTS</h2>

          <div class="container text-center ">
            <div class="row">

              {
                data.slice(pagesVisited, pagesVisited + usersPerPage).map((product) => {
                  return (
                    <>
                    
                      <figure className="snip1423" style={{marginBottom:"50px"}}>
                        <img className="productimages"src={`/images/product/${product.product_image}`} alt="" />
                        <figcaption>
                        <p className="productName" style={{fontSize:"25px",fontWeight:"450"}}>{product.product_name.slice(0, 20)}</p>
                        <Star product_reviews={product.product_reviews} />

                          {/* <p style={{fontSize:"20px"}}>{product.product_description}</p> */}
                          {/* <Link to={`/product/${product._id}`}>View Detail</Link> */}
                          <Link to={`/product/${product._id}`}>
                            <br/><button className='moreinfo'><span>More Info...</span></button>
                            </Link>
                          <div className="price">
                            <br/>
                            <Currency product_price={product.product_price} className='text-center' />
                           <br/>M.R.P:<s><Currency product_price={product.product_discount}></Currency></s><br/>
                          </div>
                          
                        </figcaption> 
                      
                        <button className='newbutton'  onClick={() => Add_to_cart(product._id)} ><i className="ion-android-cart cartcolor"></i></button>
                     
                      </figure>
                      {/* <div class="col-12 col-lg-4 col-md-6 my-3 " style={{ boxShadow: 'rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;' }}>
                        <img width='300px' height='300px' style={{ objectFit: 'cover', height:'250px', width:"250px"}} src={`/images/product/${product.product_image}`} alt="" />
                        <div>
                          <p style={{fontSize:"25px", marginTop:"10px"}}>{product.product_name.slice(0, 20)}</p>
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
          <ReactPaginate
        previousLabel={<MdKeyboardArrowLeft size={25}/>}
        nextLabel={<MdKeyboardArrowRight size={25}/>}
        pageCount={pageCount}
        onPageChange={changePage}
        containerClassName={"paginationBttns"}
        previousLinkClassName={"previousBttn"}
        nextLinkClassName={"nextBttn"}
        disabledClassName={"paginationDisabled"}
        activeClassName={"paginationActive"}
        />
          <Scroll />
          
          <Footer style={{width:"100%"}} />
        </div>
        </>
      )}
    </>
  );
};

export default Shop;
