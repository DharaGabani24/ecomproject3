import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Footer from '../Header & Footer/Footer'
import Navbar from '../Header & Footer/Navbar'
import Loading from '../Loader/Loading';
import './Blog.css'
import { useAuth } from '../../../context/auth'
import { Link } from 'react-router-dom';
import Scroll from '../Home Pages/Scroll';
import {url} from '../../../API/api'
const Blog = () => {

  const [auth, setauth] = useAuth();

  const [Data, setData] = useState([]);
  const [data, setdata] = useState([]);

  const viewBlog = async () => {
    const result = await axios.get(`${url}/blog/view-blog`)
    setdata(result.data);
  }
  
  const viewuserBlog = async () => {
    const results = await axios.get(`${url}/userblog/view-user-blog`)
    setData(results.data);
  }
  
  useEffect(() => {
    viewuserBlog();
  }, [])
  
  useEffect(() => {
    viewBlog();
  }, [])


  const [isloading, setisloading] = useState(false)
  useEffect(() => {
    setisloading(true)
    setTimeout(() => {
      setisloading(false)
    }, 1000);
  }, [])
  return (
    <>
      {
        isloading ? <Loading /> :
          <div>
            <Navbar />
            {
              !auth?.user ? (
                <Link to='/login' style={{color: '#fff'}}><button type="submit"  className=" my-2 btn btn-primary buy-now"><i className="fa fa-paper-plane" /></button></Link>
              ) :
                (
                  <button type="submit" className="my-2 btn btn-primary bu" ><i className="fa fa-paper-plane" /> <Link to='/blogadd' style={{color: '#fff'}}></Link> </button>
                )
            }

            {
              !auth?.user ? (
                <div class="album py-5  mt-4">
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
                                   <Link to={`/blogsingles/${item._id}`}> <button type="button" class="btn btn-sm btn-outline-secondary btn-read">Read More</button></Link>
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
              ) : (
               
             <div class="album py-5 mt-4">
             <div class="container">

               <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
                 {
                   Data.map((item) => {
                     return (
                       <>
                         <div class="col">
                           <div class="card shadow-sm">

                             <img class="bd-placeholder-img card-img-top" width="100%" height="225" src={`/images/usersblogs/${item.blog_image}`} alt="" />
                             <div class="card-body">
                               <p>{item.blog_title}</p>
                               <p class="card-text">{item.blog_desc}</p>
                               <div class="d-flex justify-content-between align-items-center">
                                 <div class="btn-group">
                                 <Link to={`/blogsingle/${item._id}`}> <button type="button" class="btn btn-sm btn-outline-secondary btn-read">Read More</button></Link>
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
              )
            }

            {/* <div class="album py-5 bg-light">
              <div class="container">

                <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
                  {
                    data.map((item) => {
                      return (
                        <>
                          <div class="col">
                            <div class="card shadow-sm">

                              <img class="bd-placeholder-img card-img-top" width="100%" height="225" src={`/images/blog/${item.blog_image}`} alt="" />
                              <div class="card-body">
                                <p>{item.blog_title}</p>
                                <p class="card-text">{item.blog_desc}</p>
                                <div class="d-flex justify-content-between align-items-center">
                                  <div class="btn-group">
                                    <button type="button" class="btn btn-sm btn-outline-secondary">Read More</button>
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
            </div> */}
            <Scroll/>
            <Footer />
          </div>
      }
    </>
  )
}

export default Blog