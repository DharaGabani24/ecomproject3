import React from 'react'
import { Link } from "react-router-dom"
import './Footer.css'
import { FaCcVisa , FaCcMastercard , FaCcPaypal , FaMapMarkerAlt , FaPhoneAlt , FaEnvelope , FaCcAmazonPay} from 'react-icons/fa';
import { BsTwitter , BsFacebook , BsLinkedin , BsGithub} from 'react-icons/bs';

const Footer = () => {
  return (
    <>
            {/* <div class="container">
  <footer class="py-3 my-4 ">
    <ul class="nav justify-content-center border-bottom pb-3 mb-3">
    <Link to='/' className=''><li class="nav-item"><a href="#" class="nav-link px-2 ">Home</a></li></Link>
    <Link to='/shop' className=''><li class="nav-item"><a href="" class="nav-link px-2 ">Shop</a></li></Link>
    <Link to='/media' className=''><li class="nav-item"><a href="" class="nav-link px-2 ">Media</a></li></Link>
    <Link to='/blog' className=''><li class="nav-item"><a href="" class="nav-link px-2 ">Blog</a></li></Link>
    <Link to='/contact' className=''><li class="nav-item"><a href="" class="nav-link px-2 ">Contact</a></li></Link>
    </ul>
    <p class="text-center text-muted">&copy; 2022 Footflops, Inc</p>
  </footer>
            </div> */}


            <footer className="footer-distributed">
            <div class="footer-cta pt-5 pb-5">
                <div class="row">
                    <div class="col-xl-4 col-md-4 mb-30">
                        <div class="single-cta">
                            <i class="fas fa-map-marker-alt"></i>
                            <div class="cta-text">
                                <h4>Find Us</h4>
                                <span>271 Krishna Arcade, Katargam, Surat</span>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-4 col-md-4 mb-30">
                        <div class="single-cta"style={{marginLeft:"62px"}}>
                            <i class="fas fa-phone"></i>
                            <div class="cta-text" >
                                <h4>Call Us</h4>
                                <span>9876543210 </span>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-4 col-md-4 mb-30">
                        <div class="single-cta"style={{marginLeft:"68px"}}>
                            <i class="far fa-envelope-open"></i>
                            <div class="cta-text">
                                <h4>Mail Us</h4>
                                <span>trendymart@gmail.com</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <hr/>

        <div className="footer-left">
          <Link to='/'>
            {/* <img  src="./image/logo.png"/> */}
            <p className="cname" style={{fontSize:"30px", marginTop:"5px"}}>TRENDY MART</p>
            </Link>
            <p className='compdescription'>Trendy Mart is one of the unique online<br/> shopping sites in India where fashion is<br/>accessible to all. You can get your hands<br/> on the trendiest style every season in<br/> western wear.</p>
          {/* <p className="footer-links">
            <Link to='/' className=''>HOME</Link>
            <Link to='/shop' className=''>ITEMS</Link>
            <Link to='/media' className=''>Media</Link>
            <Link to='/blog' className=''>Blog</Link>
            <Link to='/contact' className=''>Contact</Link>
          </p> */}
          {/* <p class="text-muted" style={{color:"rgb(25, 25, 109);"}}>&copy; 2023 TRENDY MART, Inc</p> */}

        </div>
        <div className="footer-center" style={{marginLeft:"25px"}}>
        <p className="footer-links">
          <p className='headlink' style={{color:"black",marginBottom:"10px", marginTop:"5px", fontFamily:"'Jost',sans-serif",fontWeight:"500"}}>Useful Links</p><br/>
            <p className='linkstext' style={{color:"black"}}><Link to='/' className='' style={{color:"black",fontSize:"19px",fontWeight:"500", opacity:"0.8"}}>Home</Link></p><br/>
            <p className='linkstext' style={{color:"black"}}><Link to='/shop' className=''style={{color:"black",fontSize:"19px",fontWeight:"500", opacity:"0.8"}}>Products</Link></p><br/>
            {/* <p className='linkstext'><Link to='/media' className=''>Pictures</Link></p><br/> */}
            <p className='linkstext' style={{color:"black"}}><Link to='/blog' className=''style={{color:"black",fontSize:"19px",fontWeight:"500", opacity:"0.8"}}>Reviews</Link></p><br/>
            <p className='linkstext' style={{color:"black"}}><Link to='/contact' className=''style={{color:"black",fontSize:"19px",fontWeight:"500", opacity:"0.8"}}>Contact</Link></p>
          </p>
          {/* <div> 
            <FaMapMarkerAlt style={{color: ' rgb(25, 25, 109)' , marginRight: '8px'  , marginBottom: '20px' }} />
            <p><span>USEFUL LINKS </span></p>
          </div>
          <div>
            <FaPhoneAlt style={{color: ' rgb(25, 25, 109)' , marginRight: '8px'}} />
            <p><Link to="/" className=''>HOME</Link></p>
          </div>
          <div>
            <FaEnvelope style={{color: ' rgb(25, 25, 109)' , marginRight: '8px' }}/>
            <p><a href="mailto:dharagabani@gmail.com" style={{color: 'rgb(25, 25, 109)'}}>dharagabani@gmail.com</a></p>
          </div> */}
        </div>
        <div className="footer-right">
          {/* <div className='social-links'>
            <h2>Follow Us</h2>
          </div>
          <div className='social-icons'>
            <li><link to=""><i class="fa-brands fa-facebook-f"></i>Facebook</link></li>
          </div> */}
          <p style={{color:"black",marginBottom:"10px", fontSize:"25px",marginTop:"5px", fontFamily:"'Jost',sans-serif",fontWeight:"400"}} className="footer-company-about">
            <p style={{fontSize:"25px",fontFamily:"'Jost',sans-serif", fontWeight:"500",marginTop:"13px",marginBottom:"28px"}}>Follow Us</p>
            <div style={{display:"flex",marginBottom:"3px"}}>
            <i class="fa-brands fa-square-facebook" style={{color:"rgb(10, 103, 190)",fontSize:"38px"}}></i>
            <p style={{fontFamily:"'Jost',sans-serif",marginTop:'8px', fontFamily:"'Jost',sans-serif",fontSize:"19px",fontWeight:"500", opacity:"0.8"}}>&nbsp;Facebook</p>
           
            </div>
            <div style={{display:"flex", marginBottom:"3px"}}>
            <i class="fa-brands fa-linkedin" style={{color:"rgb(10, 103, 190)",fontSize:"38px",marginBottom:"3px" }}></i>
            <p style={{fontFamily:"'Jost',sans-serif",fontSize:"19px",marginTop:'8px',fontWeight:"500", opacity:"0.8",fontFamily:"'Jost',sans-serif"}}>&nbsp;Linked In</p>
           
            </div>
            <div style={{display:"flex",marginBottom:"3px"}}>
            <i class="fa-brands fa-square-twitter" style={{color:"rgb(10, 103, 190)",fontSize:"38px"}}></i>
            <p style={{fontFamily:"'Jost',sans-serif",fontSize:"20px",marginTop:'8px',fontWeight:"500", opacity:"0.8", fontFamily:"'Jost',sans-serif"}}>&nbsp;Twitter</p>
           
            </div>
            {/* E-commerce  is the buying and selling of goods and services, or the transmitting of funds or data, over an shoes network, primarily the internet. */}
          </p>
        </div>
<hr/>
        <div class="copyright-text" style={{marginRight:"35px",color:"black",opacity:"0.9",fontSize:"20px",fontWeight:"500",fontFamily:"'Jost', sans-serif"}}>
            <p>Copyright &copy; 2023, All Rights Reserved</p>
        </div>
      </footer>

      
    </>
  )
}

export default Footer