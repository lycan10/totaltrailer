import React, { useState } from 'react';
import { FiShoppingBag } from 'react-icons/fi';
import './wishlistcards.css';

const WishlistCards = ({ img, title, ratings, discountedPrice, quantity}) => {
  const [qty, setQty] = useState(quantity);

  const handleChange = (newValue) => {
    setQty(newValue);
    console.log(newValue)
  };


const  handleQuantityChange  = () => {
  console.log("quantity changed")
}

  // const subTotal = () => {
  //   return (parseFloat(discountedPrice.slice(1)) * qty).toFixed(2);
  // };

  return (
    <div className="card-data">
      <div className="card-data-container">
        <div className="card-data-image">
          <img src={img} alt="" />
        </div>
        <div className="card-data-details">
          <p>{title}</p>
          <p style={{ color: 'gold' }}>{ratings}</p>
          <div className="card-data-amount">
            <p>
              {/* ${subTotal()} */}
              {discountedPrice}
            </p>
          </div>
        </div>
        <div className="wishlist-qty">
          <p>QTY</p>
          <div className="cart-counter1">
            <input
              type="text"
              value={qty}
              onChange={(e) => handleChange(e.target.value)}
            />
          </div>
        </div>
        <div className="edit-wishlist">
          <p onClick={() => handleQuantityChange(qty)}>Update</p>
          <p>Remove Item</p>
        </div>
        <div className="card-data-cta">
          <div className="cart">
            <FiShoppingBag className="card-icon" />
            <p>ADD TO CART</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WishlistCards;
