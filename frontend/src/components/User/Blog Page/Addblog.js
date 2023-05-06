// import React from 'react'
import React, { useState } from 'react'
import axios from 'axios'
import Navbar from '../Header & Footer/Navbar';
import Footer from '../Header & Footer/Footer';
import { url} from '../../../API/api'


const Addblog = () => {
    const [blog_title, setblog_title] = useState();
    const [blog_desc, setblog_desc] = useState();
    const [blog_image, setblog_image] = useState();
    const [blog_writername, setblog_writername] = useState();
    const [blog_date, setblog_date] = useState();
    const [blog_fulldesc, setblog_fulldesc] = useState();
    const handleSubmit = (e) => {
        try {
            
            e.preventDefault()
            const blogData = new FormData();
            blogData.append('blog_title', blog_title)
            blogData.append('blog_desc', blog_desc)
        blogData.append('blog_image', blog_image)
        blogData.append('blog_writername', blog_writername)
        blogData.append('blog_date', blog_date)
        blogData.append('blog_fulldesc', blog_fulldesc)
        var config = {
            method: 'post',
            maxBodyLength: Infinity,
            url: `${url}/userblog/create-user-blog`,
            headers: {
                'Content-Type': 'multipart/form-data'
            },
            data: blogData,
        };

        axios(config)
            .then((res) => {
                alert("Done ")
                // navigate('productData')
            })
        } catch (err) {
            console.log(err);
        }
        // console.log(config.data);

    }
  return (
    <>
    <Navbar/>
    <div class="container-lg">
                <div className="row">
                    <div className="col-md-10 mx-auto">
                        <div className="contact-form">
                            <h1>Blog Form</h1>
                            <form onSubmit={(e) => handleSubmit(e)}>
                                <div className="row">
                                    <div className="col-sm-4">
                                        <div className="form-group">
                                            <label htmlFor="inputName">Title</label>
                                            <input type="text" autoComplete='off' className="form-control" id="inputName" required name='blog_title' onChange={(e) => setblog_title(e.target.value)} />
                                        </div>
                                    </div>
                                    <div className="col-sm-4">
                                        <div className="form-group">
                                            <label htmlFor="inputEmail">Writename</label>
                                            <input autoComplete='off' type="text" className="form-control" id="inputEmail" required name='blog_writername' onChange={(e) => setblog_writername(e.target.value)} />
                                        </div>
                                    </div>
                                    <div className="col-sm-4">
                                        <div className="form-group">
                                            <label htmlFor="inputEmail">Date</label>
                                            <input autoComplete='off' type="date" className="form-control" id="inputEmail" required name='blog_date' onChange={(e) => setblog_date(e.target.value)} />
                                        </div>
                                    </div>
                                </div>
                                
                                <div className="form-group">
                                    <label htmlFor="inputSubject">Image</label>
                                    <input autoComplete='off' type="file" className="form-control" id="inputSubject" required name='blog_image' onChange={(e) => setblog_image(e.target.files[0])} />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="inputMessage">Full Description</label>
                                    <textarea className="form-control" id="inputMessage" rows={5} required name='blog_fulldesc' onChange={(e) => setblog_fulldesc(e.target.value)} />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="inputMessage">Description</label>
                                    <textarea className="form-control" id="inputMessage" rows={2} required name='blog_desc' onChange={(e) => setblog_desc(e.target.value)} />
                                </div>
                                <button type="submit" className="btn btn-primary my-2">Submit</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

            <Footer/>
    </>
  )
}

export default Addblog