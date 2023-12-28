import React from 'react'
import { AiOutlineHeart } from "react-icons/ai";

import "./listcard.css"

const ListCard = ({ img, title, ratings, discountedPrice, description}) => {
  return (
    <div className='list-card'>
        <div className="list-card-container">
            <div className="list-card-image">
                <img src={img} alt="" />
            </div>
            <div className="list-card-content">
                <h1>{title}</h1>
                <p style={{color:"gold"}}>{ratings} </p>
                <p style={{color:"red"}}>${discountedPrice}</p>
                <p>{description}</p>
                <div className="list-card-cart-container">
                    <div className="list-card-cart">
                        <h3>ADD TO CART</h3>
                    </div>
                    <div className="list-card-wishlist">  
                <AiOutlineHeart className='wish-icon' /> 
                </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ListCard