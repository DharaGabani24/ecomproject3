import React from 'react'
import './ProductSlider.css'
import {Link} from 'react-router-dom';
const ProductSlider = () => {
  
    
    return (
    

    <>
            <div className="container1">
            <div className='textlatest'>        
                LATEST PRODUCTS
            </div>
                <div className="grid grid-four-coloum-discount">
                    <div className=' discount-box text-1'>
                        <Link to='/shop'>
                        
                        <img src="./image/cms_banner_01.jpg" alt="" />
                        </Link>
                        <p>Men's watches combo</p>
                    </div>
                    <div className='discount-box text-2'>
                    <Link to='/shop'>

                        <img className="image1" src="./image/cms_banner_02.jpg" alt="" />
                        <p style={{textAlign:"center"}}>Cotton Checkered <br/>Slim fit Casual Shirt<br/> for Men</p>
                        <span></span>
                    </Link>
                    </div>
                    <div className='discount-box text-1'>
                    <Link to='/shop'>

                        <img src="https://images.pexels.com/photos/691046/pexels-photo-691046.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="" />
                        <p style={{textAlign:"center"}}>Real Diamond Like <br/> RINGS </p>
                        <span></span>
                    </Link>
                    </div>
                    <div className='discount-box text-1'>
                       <Link to ='/shop'>
                       
                        <img className="image2"src="./image/cms_banner_03.jpg" alt="" />
                        <p>Makeup Kits</p>
                       </Link>
                        {/* <span>Women's Classic Shoes</span> */}
                    </div>
                </div>
                <div className='showmore'>
                    <Link to='/shop'>
                    
                        <button className='showmorebtn'><span>SHOW MORE</span></button>
                    </Link>


                </div>
            </div>
    
           

            	
    </>
  )
}

export default ProductSlider
