import React from 'react'
import { useState } from 'react';
import './Media.css'
import Header from '../Admin Header/Header'
import axios from 'axios'
import { Link, useNavigate, useLocation } from 'react-router-dom'
import { ToastContainer, toast } from "react-toastify";
import Adminfooter from '../Admin Header/Adminfooter';
import { url} from '../../../API/api'

const Mediadd = () => {
    const [mediaimg, setmediaimg] = useState();
    
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        const mediaData = new FormData();
        mediaData.append('media_image',mediaimg)
        var config = {
            method: 'post',
            maxBodyLength: Infinity,
            url: `${url}/media/create-media`,
            headers: {
                'Content-Type': 'multipart/form-data'
            },
            data: mediaData,
        };

        axios(config)
            .then((res) => {
                alert();
            }).catch((err)=>
            {
                alert(err)
            })

    }
    return (
        <>
            <Header />

            
            <div class="container-lg">
                <div className="row">
                    <div className="col-md-10 mx-auto">
                        <div className="contact-form">
                            <h1>Media Form</h1>
                            {/* <p className="hint-text">We'd love to hear from you, please drop us a line if you've any query or question.</p> */}
                            <form onSubmit={(e) => handleSubmit(e)} >
                                <div className="form-group">
                                    <label htmlFor="inputSubject">Image</label>
                                    <input autoComplete='off' type="file" className="form-control" id="inputSubject" required name='media_image' onChange={(e) => setmediaimg(e.target.files[0])} />
                                </div>
                               
                                <button style={{margin: '10px 0 0 0'}} type="submit" className="btn btn-primary">Submit</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <Adminfooter/>


            


        </>
    )
}

export default Mediadd