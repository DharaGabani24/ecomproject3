import React from 'react'
import { HiOutlineCurrencyDollar } from "react-icons/hi";
// import { BsBox2Heart } from "react-icons/bs";
import { BiSupport } from "react-icons/bi";
import { TbTruckDelivery ,TbTruckReturn } from "react-icons/tb";
import Service1 from './service1.png'
import Service2 from './service2.png'
import Service3 from './service3.png'

const Contactwith = () => {
    return (
        <>
            <div class=" py-5">
                <div class="container">
                    <h4 className='text-center' style={{fontFamily: 'Jost', fontSize:'24px' , fontWeight: 'bold'}}>OUR ADVANTAGES</h4>
                    <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
                        <div class="col">
                            <div class="text-center">
                                <div class="card-body">
                                    <p style={{fontSize:'42px'}} > <TbTruckDelivery/></p>
                                    <p class="card-text">Worldwide Shipping </p>
                                    <p class="card-text">  Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
                                      </p>
                                </div>
                            </div>
                        </div>
                        <div class="col">
                            <div class="text-center">
                                <div class="card-body">
                                    <p style={{fontSize:'42px'}} > <TbTruckReturn/></p>
                                    <p class="card-text">Return  Product</p>
                                    <p class="card-text">  Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
                                      </p>
                                </div>
                            </div>
                        </div>
                        <div class="col">
                            <div class="text-center">
                                <div class="card-body">
                                    <p style={{fontSize:'42px'}} > <BiSupport/></p>
                                    <p class="card-text">Support 24/7</p>
                                    <p class="card-text">  Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
                                      </p>
                                </div>
                            </div>
                        </div>


                    </div>
                </div>
            </div>
        </>
    )
}

export default Contactwith