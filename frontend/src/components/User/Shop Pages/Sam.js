import React from 'react'
import { Link } from 'react-router-dom';
import "./Shop.css";

const Sam = ({product}) => {
  return (
    <div>
        <Link to={`/product/${product._id}`}>View Detail</Link>

    </div>
  )
}

export default Sam
