import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Adminfooter from '../Admin Header/Adminfooter';
import Header from '../Admin Header/Header';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Product.css'
import { url} from '../../../API/api'

const Productadd = () => {
    const navigate = useNavigate();
    const [product_name, setproduct_name] = useState();
    const [product_price, setproduct_price] = useState();
    const [product_image, setproduct_image] = useState();
    const [product_reviews, setproduct_reviews] = useState();
    const [product_discount, setproduct_discount] = useState();
    const [product_description, setproduct_description] = useState();
    const handleSubmit = (e) => {
        e.preventDefault();
        const productData = new FormData();
        productData.append('product_name', product_name)
        productData.append('product_price', product_price)
        productData.append('product_image', product_image)
        productData.append('product_reviews', product_reviews)
        productData.append('product_discount', product_discount)
        productData.append('product_description', product_description)
        var config = {
            method: 'post',
            maxBodyLength: Infinity,
            url: `${url}/product/create-product`,
            headers: {
                'Content-Type': 'multipart/form-data'
            },
            data: productData,
        };

        console.log(config.data);
            axios(config)
            .then((res) => {
                if (res.data.sucess) {
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
                    //   navigate('/login')
                      navigate('/admin/dashboard/product')    
                    }, 1800);
                  }

            })
            


    }
    return (
        <>
        <ToastContainer/>
        <Header/>
            <div class="container-lg">
                <div className="row">
                    <div className="col-md-10 mx-auto">
                        <div className="contact-form">
                            <h1>Product Form</h1>
                            <form onSubmit={(e) => handleSubmit(e)}>
                                <div className="row">
                                    <div className="col-sm-6">
                                        <div className="form-group">
                                            <label htmlFor="inputName">Name</label>
                                            <input type="text" autoComplete='off' className="form-control" id="inputName"  name='setproduct_name' onChange={(e) => setproduct_name(e.target.value)} />
                                        </div>
                                    </div>
                                    <div className="col-sm-6">
                                        <div className="form-group">
                                            <label htmlFor="inputEmail">Reviews Star</label>
                                            <input autoComplete='off' type="text" className="form-control" id="inputEmail"  name='setproduct_reviews' onChange={(e) => setproduct_reviews(e.target.value)} />
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-sm-6">
                                        <div className="form-group">
                                            <label htmlFor="inputName">Price</label>
                                            <input type="text" autoComplete='off' className="form-control" id="inputName"  name='setproduct_price' onChange={(e) => setproduct_price(e.target.value)} />
                                        </div>
                                    </div>

                                    <div className="col-sm-6">
                                        <div className="form-group">
                                            <label htmlFor="inputPhone">Discount</label>
                                            <input autoComplete='off' type="text" className="form-control" id="inputPhone"  name='setproduct_discount' onChange={(e) => setproduct_discount(e.target.value)} />
                                        </div>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="inputSubject">Image</label>
                                    <input autoComplete='off' type="file" className="form-control" id="inputSubject"  name='setproduct_image' onChange={(e) => setproduct_image(e.target.files[0])} />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="inputMessage">Description</label>
                                    <textarea className="form-control" id="inputMessage" rows={5}  name='setproduct_description' onChange={(e) => setproduct_description(e.target.value)} />
                                </div>
                                <input type="submit" className="btn btn-primary my-2" value="Submit"/>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <Adminfooter/>

        </>
    )
}

export default Productadd