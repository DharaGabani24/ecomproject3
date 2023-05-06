import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import Adminfooter from '../Admin Header/Adminfooter'
import Header from '../Admin Header/Header'
import './Blog.css'
import { url} from '../../../API/api'

const Blogedit = () => {
    // const [blog_title, setblog_title] = useState();
    // const [blog_desc, setblog_desc] = useState();
    // const [blog_image, setblog_image] = useState();
    // const [blog_writername, setblog_writername] = useState();
    // const [blog_date, setblog_date] = useState();
    // const [blog_fulldesc, setblog_fulldesc] = useState();
    // const handleSubmit = (e) => {
    //     e.preventDefault()
    //     const blogData = new FormData();
    //     blogData.append('blog_title', blog_title)
    //     blogData.append('blog_desc', blog_desc)
    //     blogData.append('blog_image', blog_image)
    //     blogData.append('blog_writername', blog_writername)
    //     blogData.append('blog_date', blog_date)
    //     blogData.append('blog_fulldesc', blog_fulldesc)
    //     var config = {
    //         method: 'post',
    //         maxBodyLength: Infinity,
    //         url: '${url}/blog/create-blog',
    //         headers: {
    //             'Content-Type': 'multipart/form-data'
    //         },
    //         data: blogData,
    //     };

    //     axios(config)
    //         .then((res) => {
    //             console.log(res.data);
    //             alert("Done ")
    //             // navigate('productData')
    //         })
    //     console.log(config.data);

    // }
    const id = useParams()
    const [data, setdata] = useState({
        blog_title : "",
        blog_desc : "",
        blog_writername : "",
        blog_date : "",
        blog_fulldesc : "",
    })
    const [blog_image, setblog_image] = useState();

    const navigate = useNavigate();

    const loadata = async () => {
        const res = await axios.get(`${url}/blog/view-blog/` + id.id)
        setdata(res.data)
    }
    useEffect(() => {
        loadata();
    },[])

    const onchange = (e) => {
        setdata({...data, [e.target.name] : e.target.value })

    }
    const handleSubmit = async (e) => {
        e.preventDefault()

        const blogData = new FormData();
        blogData.append('id', id.id)
        blogData.append('blog_image', blog_image)
        blogData.append('blog_title', data.blog_title)
        blogData.append('blog_desc', data.blog_desc)
        blogData.append('blog_writername', data.blog_writername)
        blogData.append('blog_date', data.blog_date)
        blogData.append('blog_fulldesc', data.blog_fulldesc) 


        var config = {
            method: 'patch',
            url: `${url}/blog/update-blog`,
            headers: { 
              'Content-Type' : 'multipart/form-data'
            }, 
            data : blogData
          };
          await axios(config)
          .then(function (response) {
            console.log(response.data);
          })
          .catch(function (error) {
            console.log(error);
          });
        navigate('/admin/dashboard/blog')
    }
    return (
        <>
        <Header/>

            <div class="container-lg">
                <div className="row">
                    <div className="col-md-10 mx-auto">
                        <div className="contact-form">
                            <h1>Blog Edit Form</h1>
                            <form onSubmit={(e) => handleSubmit(e)}>
                                <div className="row">
                                    <div className="col-sm-4">
                                        <div className="form-group">
                                            <label htmlFor="inputName">Title</label>
                                            <input type="text" autoComplete='off' className="form-control" id="inputName" value={data.blog_title}  name='blog_title' onChange={onchange} />
                                        </div>
                                    </div>
                                    <div className="col-sm-4">
                                        <div className="form-group">
                                            <label htmlFor="inputEmail">Writename</label>
                                            <input autoComplete='off' type="text" className="form-control" id="inputEmail"  name='blog_writername' value={data.blog_writername} onChange={onchange} />
                                        </div>
                                    </div>
                                    <div className="col-sm-4">
                                        <div className="form-group">
                                            <label htmlFor="inputEmail">Date</label>
                                            <input autoComplete='off' type="date" className="form-control" id="inputEmail"  name='blog_date' value={data.blog_date} onChange={onchange}/>
                                        </div>
                                    </div>
                                </div>
                                
                                <div className="form-group">
                                    <label htmlFor="inputSubject">Image</label>
                                    <input autoComplete='off' type="file" className="form-control" id="inputSubject"  name='blog_image'  onChange={(e) => setblog_image(e.target.files[0])} />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="inputMessage">Full Description</label>
                                    <textarea className="form-control" id="inputMessage" rows={5}  name='blog_fulldesc' value={data.blog_fulldesc} onChange={onchange} />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="inputMessage">Description</label>
                                    <textarea className="form-control" id="inputMessage" rows={2}  name='blog_desc' value={data.blog_desc} onChange={onchange} />
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

export default Blogedit