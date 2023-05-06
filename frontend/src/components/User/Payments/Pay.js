import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useSelector } from 'react-redux'
import {url} from '../../../API/api'


const Pay = () => {
    const user_id = localStorage.getItem('userId')

    const [Data, setData] = useState([]);
    const dataload = async () => {
        await axios.get(`${url}/auth/get-add-to-cart/` + user_id)
            .then((res) => {
                setData(res.data.cart_data)
            })
            .catch((err) => {
                console.log(err);
            })
    }
    useEffect(() => {
        dataload();
    }, [])


    const handleCheckout = () => {
        axios.post(`${url}/payout/create-checkout-session`, {
            Data,
            user_id
        }).then((res)=>{
            if (res.data.url) {
                window.location.href = res.data.url
            }
        }).catch((err)=>{
            console.log(err.message);
        })
    }

    return (
        <>
            <button class='checkout'   onClick={() => handleCheckout()}>Checkout</button>
        </>
    )
}

export default Pay