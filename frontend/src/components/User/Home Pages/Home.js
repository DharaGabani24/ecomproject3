import React from 'react'
import Welcomepage from './Welcomepage'
import b1 from './b1'
import Services from './Services'
import Slider from './Slider'
import Slidernew from './Slidernew'
import Landingpage from './Landingpage'
import './Home.css'
import Collection from './Collection'
import BrandLogo from './BrandLogo'
import Contactwith from './Contactwith'
import Scroll from './Scroll'
import ProductSlider from './ProductSlider'
import Navbar from '../Header & Footer/Navbar'
import Footer from '../Header & Footer/Footer'
import Loading from '../Loader/Loading'
import Featureproduct from '../Home Pages/Featureproduct'
import { useState } from 'react'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Bloghome from './Bloghome'
import Banner2 from './Banner2'

const Home = () => {
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
        isloading ?
          <Loading /> :
          <div>
            <Navbar />
            <Slider/>
            <Welcomepage/>
            {/* <Banner2/> */}
            <ProductSlider />
            {/* <Landingpage/> */}
            {/* <Slidernew/> */}
            {/* <Collection /> */}
            {/* <BrandLogo /> */}
            {/* <Contactwith /> */}
            <Services/>
            <Featureproduct />
            <Bloghome />
            <Footer />
            <Scroll />
          </div>

      }
    </>
  )
}

export default Home
