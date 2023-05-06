import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Footer from '../Header & Footer/Footer'
import Navbar from '../Header & Footer/Navbar'
import Scroll from '../Home Pages/Scroll'
import Loading from '../Loader/Loading'
import {url} from '../../../API/api'

const Media = () => {

        const [data, setdata] = useState([]);

        useEffect(() => {
                loaddata();
        }, [])


        const loaddata = async () => {
                const result = await axios.get(`${url}/media/view-media`)
                setdata(result.data)
        }

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

                                                <h2 className="text-center my-4" style={{ fontFamily: 'Playfair Display', fontWeight: 'bold' }}>Media</h2>

                                                <div className="container">
                                                        <div className="row m-0">


                                                                {
                                                                        data.map((item, i) => {
                                                                                return (
                                                                                        <>
                                                                                                <div class="col-12 col-lg-4 col-md-6 my-1 px-1 ">
                                                                                                        <img width='100%' height='300px' style={{ objectFit: 'cover' }} src={`/images/media/${item.media_image}`} alt="" />
                                                                                                </div>
                                                                                        </>
                                                                                )

                                                                        })
                                                                }
                                                        </div>
                                                </div>


                                                <Scroll />

                                                <Footer />

                                        </div>
                        }

                </>
        )
}

export default Media
