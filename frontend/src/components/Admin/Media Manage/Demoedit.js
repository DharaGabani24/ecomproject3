import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import Header from '../Admin Header/Header'
import Adminfooter from '../Admin Header/Adminfooter'
import {url} from '../../../API/api'

const Demoedit = () => {
    const [up_data, setup_data] = useState({
        media_name: ''
    })
    const [media_image, setmediaimg] = useState();
    const update_id = useParams()

    const loadata = async () => {
        const res = await axios.get(`${url}/media/view-media/` + update_id.id)
        setup_data(res.data)
    }
    useEffect(() => {
        loadata();
    }, [])

    const handleSubmit = async (e) => {
        e.preventDefault();

        const productsData = new FormData();
        productsData.append('media_image', media_image)

        var config = {
            method: 'patch',
            url: `${url}/media/update-media`,
            headers: {
                'Content-Type': 'multipart/form-data',
                // 'Accept': 'application/json, text/plain, */*'
            },
            data: productsData
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
            <Header />
            <div class="container-lg">
                <div className="row">
                    <div className="col-md-10 mx-auto">
                        <div className="contact-form">
                            <h1>Media Edit Form</h1>
                            <form onSubmit={handleSubmit}>
                                <div className="row">
                                    <div className="form-group">
                                        <label htmlFor="inputSubject">Image</label>
                                        <input autoComplete='off' type="file" className="form-control" id="inputSubject" name='media_image' onChange={(e) => setmediaimg(e.target.files[0])} />
                                    </div>
                                </div>
                                <button type="submit" className="btn btn-primary my-2">Submit</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <Adminfooter />

        </>
    )
}

export default Demoedit