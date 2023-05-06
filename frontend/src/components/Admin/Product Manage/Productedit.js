import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import './Product.css'
import Header from '../Admin Header/Header'
import Adminfooter from '../Admin Header/Adminfooter'
import { url} from '../../../API/api'

const Productedit = () => {
    const [up_data,setup_data] = useState({
        product_name : '',
        product_price : '',
        product_description : '',
        product_discount : '',
        product_reviews : '',
        product_image : '',
        id : ''
    })
    const [product_image, setproduct_image] = useState();

    const loadata = async  () =>{
        const res =  await axios.get(`${url}/product/view-single-product/`+update_id.id)
        setup_data(res.data)
    }
      useEffect(()=>{
          loadata();
      },[])
    const navigate = useNavigate();
    const update_id = useParams()
    const onchange = (e) => {
        setup_data({...up_data, [e.target.name] : e.target.value })

    }
    const handleSubmit = async (e) => {
        e.preventDefault();

        const productData = new FormData();
        productData.append('id', update_id.id)
        productData.append('product_name', up_data.product_name)
        productData.append('product_price', up_data.product_price)
        productData.append('product_image', product_image)
        productData.append('product_reviews', up_data.product_reviews)
        productData.append('product_discount', up_data.product_discount) 
        productData.append('product_description', up_data.product_description)

        console.log(productData);
        var config = {
            method: 'patch',
            url: `${url}/product/update-product`,
            headers: { 
              'Content-Type' : 'multipart/form-data'
            }, 
            data : productData
          };
          axios(config)
          .then(function (response) {
          })
          .catch(function (error) {
            console.log(error);
          });
      
    }

    return (
        <>
        <Header/>
            <div class="container-lg">
                <div className="row">
                    <div className="col-md-10 mx-auto">
                        <div className="contact-form">
                            <h1>Product Edit Form</h1>
                            <form onSubmit={(e) => handleSubmit(e)}>
                                <div className="row">
                                    <div className="col-sm-6">
                                        <div className="form-group">
                                            <label htmlFor="inputName">Name</label>
                                            <input type="text" autoComplete='off' className="form-control" id="inputName"  name='product_name' value={up_data.product_name} onChange={onchange} />
                                        </div>
                                    </div>
                                    <div className="col-sm-6">
                                        <div className="form-group">
                                            <label htmlFor="inputEmail">Reviews Star</label> <label htmlFor="inputEmail">min - 0 , max - 5 </label>
                                            <input autoComplete='off' min='0' max='5' type="text" className="form-control" id="inputEmail"  name='product_reviews' value={up_data.product_reviews}  onChange={onchange} />
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-sm-6">
                                        <div className="form-group">
                                            <label htmlFor="inputName">Price</label>
                                            <input type="text" autoComplete='off' className="form-control" id="inputName"  name='product_price' value={up_data.product_price} onChange={onchange} />
                                        </div>
                                    </div>

                                    <div className="col-sm-6">                                                               
                                        <div className="form-group">
                                            <label htmlFor="inputPhone">Discount</label>
                                            <input autoComplete='off' type="text" className="form-control" id="inputPhone"  name='product_discount' value={up_data.product_discount} onChange={onchange} />
                                        </div>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="inputSubject">Image</label>
                                    <input autoComplete='off' type="file" className="form-control" id="inputSubject" name='product_image' onChange={(e) => setproduct_image(e.target.files[0])} />
                                    {/* <p>{product_image}</p> */}
                                </div>
                                <div className="form-group">
                                    <label htmlFor="inputMessage">Description</label>
                                    <textarea className="form-control" id="inputMessage" rows={5}  name='product_description' value={up_data.product_description} onChange={onchange} />
                                </div>
                                <button type="submit" className="btn btn-primary my-2">Submit</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <Adminfooter/>

        </>
    )
}

export default Productedit