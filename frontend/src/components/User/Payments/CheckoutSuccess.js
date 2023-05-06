import React from 'react'
import './Success.css'
import { MdDone } from 'react-icons/md';
import { Link } from 'react-router-dom';
const CheckoutSuccess = () => {
  return (
    <>
      <div class="container sucess-box">
        <div class="row">
          <div class="col-md-6 mx-auto mt-5">
            <div class="payment">
              <div class="payment_header">
                <div class="check"><MdDone size={45}/></div>
              </div>
              <div class="content">
                <h1>Payment Success !</h1>
                <p>Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. </p>
                <Link to='/cart' >Back</Link>
              </div>

            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default CheckoutSuccess