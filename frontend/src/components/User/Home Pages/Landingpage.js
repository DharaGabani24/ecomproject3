import React from 'react'
import './Landingpage.css'
const Landingpage = () => {
  return (
    <>
      <div className="landing__container">
            <div className="landing__header__container">
                <div className="landing__header">
                    <h1 className="landing__header__discount">UP TO 15% DISCOUNT</h1>
                    <h1 className="landing__header__main">Checkout The Best Fashion Style</h1>
                    {/* <Link to="/shop"> */}
                        {/* <Button variant='outlined' sx={[ {width: '190px', height: '50px', borderRadius: '20px' , fontWeight: '700', backgroundColor: 'none', borderColor: 'black', color: 'black' }, {'but:hover': {  backgroundColor: "black" , color: "#FFE26E", borderColor: 'black'}}]}>SHOP NOW</Button> */}
                    {/* </Link> */}
                    {/* <input type="button" class="button" value="Input Button"/> */}
                    <br/><button className='button'>Shop Now</button>
                </div>
            </div>
            <div className="landing__image__container">
                {/* <img className="landing__image" src={"https://www.shutterstock.com/image-photo/happy-beautiful-asian-shopaholic-woman-260nw-1278669220.jpg"} alt=""/> */}



<div class="boxbig" style={{paddingTop:"18px"}}>
  
  <div class="flex-boxbig1">
    <div class="collage-boxbig">
      <div class="collage">
        <img src="https://images.meesho.com/images/products/161344179/uo6eu_400.webp"  class="collage-image1" alt="thor"/>
        <img src="./image/landingpagemakeup.jpg" class="collage-image2" alt="wanda"/>
        <img src="./image/landingpagewatch.jpg" class="collage-image3" alt="natasha"/>
      </div>
    </div>
  </div>
  
</div>
            </div>
        </div>
    </>
  )
}

export default Landingpage
