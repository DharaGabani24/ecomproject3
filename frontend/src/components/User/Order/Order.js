import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Footer from '../Header & Footer/Footer'
import Navbar from '../Header & Footer/Navbar'
import Currency from '../Helper/Currency'
import Scroll from '../Home Pages/Scroll'
import './Order.css'
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { fontSize } from '@mui/system'
import { url} from '../../../API/api'

const Order = () => {

    const user_id = localStorage.getItem('userId')

    const [data, setdata] = useState([]);
    const dataload = async () => {
        await axios.get(`${url}/auth/get-buy-product/` + user_id)
            .then((res) => {
                setdata(res.data.buy_data)
            })
            .catch((err) => {
                console.log(err);
            })
    }
    useEffect(() => {
        dataload();
    }, [])
    
    console.log(data);
    // const user_id = localStorage.getItem('userId')
    
    const deleteData = async (id) =>{
        datadelete();
        const objBuydata = {
            id:id,
            user_id:user_id
        }
        await axios.post(`${url}/auth/delete-buy`,{objBuydata : objBuydata})
        
    }
    const datadelete = () =>{
        toast.success("Order Cancel Sucessfully", {
                position: "top-center",
            autoClose: 1000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
        dataload();
    }
    
    return (
        <>
            <Navbar />
            <div>
                <h5 style={{ fontSize: '22px', textAlign: 'center', padding: '20px' }}>Your Order</h5>
            </div>
            {
                data.length
                ?
                <div class="container">
                <div class="row ">
                    {
                        data.map((item) => {
                            return (
                                <>
                                    <div class="col-lg-3 col-md-4 order-box ">
                                        <img src={`/images/product/${item.product_image}`} width="200px" height="200px" alt="" />
                                    </div>
                                    <div class="col-lg-9 col-md-8  mt-4">
                                        <div class="align-items-center d-flex">
                                            <p class="p-4">{item.product_name.slice(0, 23)}</p>
                                            <p class="p-4"><Currency product_price={item.product_price} /></p>
                                        </div>
                                        <div class="order-btn">
                                        <Link to={`/product/${item._id}`} style={{ color: '#000' }}><button style={{ padding: '0px 20px', borderRadius: '5px' }} className='button-cancel'>View Product</button></Link>
                                                        <button style={{ padding: '0px 20px', borderRadius: '5px' , marginLeft: '10px' }} className='button-cancel' onClick={(e) => deleteData(item._id)}>Cancel Order</button>
                                        </div>
                                    </div>
                                    <hr style={{margin: '16px 0px'}} />

                                </>
                            )
                        })
                    }
                </div>
            </div>
                    :
                    (
                        <>
                          {/* d-flex justify-content-center   */}
                          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '60vh' }}>
                            <p style={{ fontWeight: 'bold' ,  fontSize: '22px' }}>Your Order List Empty</p>
                            <div>
                            </div>
                          </div>
                        </>
                      )

            }


            <div className="p-5"></div>
            <div className="p-5"></div>
            <div className="p-5"></div>
      <Scroll/>

            <Footer />
        </>
    )
}

export default Order