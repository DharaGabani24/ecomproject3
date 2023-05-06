import React, { useEffect, useState } from 'react'
import './Scroll.css'
import { FaAngleUp } from "react-icons/fa";

const Scroll = () => {
    const [showTopBtn, setShowTopBtn] = useState(false);
    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 250) {
                setShowTopBtn(true);
            } else {
                setShowTopBtn(false);
            }
        });
    }, []);
    const goToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
            
        });
    };
  
  return (
    <>
    <div className='topbtn'>
        {showTopBtn && (
            <FaAngleUp className='icon-pos icon-style1'  onClick={goToTop}/>
            )}

        </div>
        </>
  )
}

export default Scroll