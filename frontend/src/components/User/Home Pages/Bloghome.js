import axios from 'axios';
import React, { useEffect } from 'react'
import './Featureproduct.css'
import { useState } from 'react';
import "react-toastify/dist/ReactToastify.css";
import { Link } from 'react-router-dom';
import {url} from '../../../API/api'

const Bloghome = () => {
  const [data, setdata] = useState([]);


  const view_feature_product = async () => {
    const result = await axios.get(`${url}/blog/view-blog`)
    setdata(result.data.slice(0, 3))
  }

  useEffect(() => {
    view_feature_product();
  }, [])
  return (
    <>
      <h3 className='text-center' style={{ marginTop:"15px",fontFamily:" Jost", fontWeight:500 , fontSize:"32px"}}>REVIEWS</h3>
      <div class="album mt-4">
        <div class="container">

          <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
            {
              data.map((item) => {
                return (
                  <>
                    <div class="col">
                      <div class="card shadow-sm">
                        <img style={{objectFit: 'cover'}} class="bd-placeholder-img card-img-top" width="100%" height="225" src={`/images/blog/${item.blog_image}`} alt="" />
                        <div class="card-body">
                          <p>{item.blog_title}</p>
                          <p class="card-text">{item.blog_desc}</p>
                          <div class="d-flex justify-content-between align-items-center">
                            <div class="btn-group">
                              <Link style={{color: '#fff'}} to={`/blogsingles/${item._id}`}> <button type="button" class="btn btn-sm  btn-read">Read More</button></Link>
                            </div>
                            <small class="text-muted">By {item.blog_writername}</small>
                            <small class="text-muted">{item.blog_date}</small>
                          </div>
                        </div>
                      </div>
                    </div>
                  </>
                )
              })
            }
          </div>
        </div>
      </div>
      <div className='p-3'></div>
    </>
  )
}

export default Bloghome