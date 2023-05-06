import React, { useEffect } from 'react'
import { useState } from 'react';
import './Media.css'
import Header from '../Admin Header/Header'
import axios from 'axios'
import { Link, useNavigate, useLocation, useParams } from 'react-router-dom'
import { ToastContainer, toast } from "react-toastify";
import Adminfooter from '../Admin Header/Adminfooter';
import { url} from '../../../API/api'

const Mediaedit = () => {
    const [Getmedia_image, setGetmediaimg] = useState();
    const [media_image, setmediaimg] = useState();
    
    const navigate = useNavigate();
    const id = useParams()


    const loadata = async  () =>{
        const res =  await axios.get(`${url}/media/view-media/`+id.id)
        setGetmediaimg(res.data)
      }
      useEffect(()=>{
          loadata();
      },[])
      const handleSubmit = (e) => {
          e.preventDefault()
          const formData = new FormData();
          formData.append('media_image', media_image);
          
        // const mediaData = new FormData();
        // mediaData.append('media_image', media_image)

        var config = {
            method: 'patch',
            url: `${url}/media/update-media`,
            headers: { 
              'Content-Type' : 'multipart/form-data'
            }, 
            data : formData
          };
          axios(config)
          .then(function (response) {
            console.log(response.data);
          })
          .catch(function (error) {
            console.log(error);
          });
       

    }
    return (
        <>
            <Header />

            
            <div class="container-lg">
                <div className="row">
                    <div className="col-md-10 mx-auto">
                        <div className="contact-form">
                            <h1>Media Edit Form</h1>
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

export default Mediaedit