import React from 'react'
import { FaStarHalfAlt, FaStar } from 'react-icons/fa';
import { AiOutlineStar } from 'react-icons/ai';
import { MdOutlineStarHalf , MdOutlineStarOutline , MdOutlineStarPurple500 } from 'react-icons/md';


const Star = ({ product_reviews }) => {

    const reviewStar = Array.from({ length: 5 }, (elem, index) => {

        let number = index + 0.5;

        return <span key={index}>
            {
                product_reviews >= index + 1 ? <MdOutlineStarPurple500 className='icon'/> 
                : product_reviews >= number 
                ? <MdOutlineStarHalf className='icon'/>
                : <MdOutlineStarOutline className='icon'/>
            }
        </span>
    })
    return (
        <>
            <div style={{color: '#ffb700' , fontSize: '20px'}}>
            {reviewStar}
            </div>
        </>
    )
}

export default Star