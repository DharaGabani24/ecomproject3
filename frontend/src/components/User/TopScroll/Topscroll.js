import React, { useLayoutEffect } from 'react'
import { useLocation } from 'react-router-dom'

const Topscroll = () => {
    const {pathname} = useLocation()

    useLayoutEffect(()=>{
      window.scrollTo({top: 0 , behavior: 'smooth'})
    },[pathname])

  return null;
}

export default Topscroll