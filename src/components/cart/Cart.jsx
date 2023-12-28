import React, { useState } from 'react';
import Navbar from '../navbar/Navbar';
import Footer from '../footer/Footer';
import './cart.css';
import Table from 'react-bootstrap/Table';
import { cartData } from '../../constant/data/data';

const Cart = () => {
  const [quantity, setQuantity] = useState(cartData.map(() => 1));

  const subTotal = (itemIndex) => {
    const item = cartData[itemIndex];
    return (parseFloat(item.discountedPrice.slice(1)) * quantity[itemIndex]).toFixed(2);
  };

  const cartSubTotal = () => {
    return cartData.reduce((total, item, index) => total + parseFloat(subTotal(index)), 0).toFixed(2);
  };

  const shipping = 15.0;

  const cartTotal = () => {
    return (parseFloat(cartSubTotal()) + shipping).toFixed(2);
  };

  const handleQuantityChange = (itemIndex, newValue) => {
    const newQuantity = [...quantity];
    newQuantity[itemIndex] = newValue;
    setQuantity(newQuantity);
  };

  const navigateToCheckout = () => {
    // Redirect to the checkout page
    window.location.href = '/checkout';
  };

  return (
    <div>
      <Navbar />
      {
        cartData.length === 0 ? (
        <div className="cart-empty-container">
            <h1>SHOPPING CART</h1>
            <p>You have no items in your shopping cart.</p>
            <p>Click <span>here</span> to continue shopping. </p>
        </div>
        ) : (
            <div className="cart-full-container">
            <div className="cart-full-title">
              <h1>SHOPPING CART</h1>
              <div className="cart-full-content-container">
                <div className="cart-full-left">
                  <Table striped bordered hover>
                    <thead>
                      <tr>
                        <th>Item</th>
                        <th>Price</th>
                        <th>QTY</th>
                        <th>Subtotal</th>
                      </tr>
                    </thead>
                    <tbody>
                      {cartData.map((item, index) => (
                        <tr key={item.id} className='tr-cart'>

                          <td>
                            <div className="cart-full-left-item">
                              <div className="cart-full-left-image">
                                <img src={item.img} alt="" />
                              </div>
                              <div className="cart-full-left-title">
                                <p>{item.title}</p>
                              </div>
                            </div>
                          </td>
                          <td>
                            <div className="cart-full-left-price">
                              <p>{item.discountedPrice}</p>
                            </div>
                          </td>
                          <td>
                            <div className="cart-counter1 cart-full-left-input">
                              <input
                                type="number"
                                value={quantity[index]}
                                onChange={(e) => handleQuantityChange(index, e.target.value)}
                              />
                            </div>
                          </td>
                          <td>
                            <div className="cart-full-left-subtotal">
                              <p>${subTotal(index)}</p>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </Table>
                  <div className="cart-full-left-update">
                    <button>Update shopping cart</button>
                  </div>
                </div>
                <div className="cart-full-right">
                  <div className="cart-full-right-title">
                    <h1>SUMMARY</h1>
                  </div>
                  <div className="cart-full-subtotal">
                    <p>Subtotal</p>
                    <p>${cartSubTotal()}</p>
                  </div>
                  <div className="cart-full-subtotal cart-order">
                    <p>Shipping (Flat Rate - Fixed)</p>
                    <p>${shipping}</p>
                  </div>
                  <div className="cart-full-total">
                    <p>Order Total</p>
                    <p style={{ fontWeight: '700' }}>${cartTotal()}</p>
                  </div>
                  <div className="cart-full-button" onClick={navigateToCheckout}>
                    <p>PROCEED TO CHECKOUT</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )
      }
     
      <Footer />
    </div>
  );
};

export default Cart;
