import React, { useState } from 'react';
import Navbar from '../navbar/Navbar';
import Footer from '../footer/Footer';
import './wishlist.css';
import { cartData } from '../../constant/data/data';
import WishlistCards from '../../constant/wishlistcards/WishlistCards';

import useFetch from '../../hooks/useFetch';


const Wishlist = () => {
  const [quantity, setQuantity] = useState(cartData.map(() => 1));

  const {loading, data, error} = useFetch("http://localhost:1337/api/wishlists?populate=*")

  if (loading) return <p>Loading....</p>
if (error) return <p>ERROR....</p>

if (!data || data === null) {
  return <p>No data available.</p>;
}



const wishlistData = data.data;



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
   
      <div className='wishlistThemain'>
      {
        wishlistData.length === 0 ? (
        <div className="cart-empty-container">
            <h1>SHOPPING CART</h1>
            <p>You have no items in your Wishlist.</p>
            <p>Click <span>here</span> to continue shopping. </p>
        </div>
        ) : (
          <div className="wishlistcards">
            <h1>WISHLIST</h1>
            <div className="wishlistcardscontainer">
          {
              wishlistData.map((wishlist) => {
                const imageURL = `http://localhost:1337${wishlist.attributes.img.data[0].attributes.formats.thumbnail.url}`

                console.log(imageURL)
                return (
                  <div key={wishlist.attributes.id}>
                    <WishlistCards 
                    img={imageURL}
                    title={wishlist.attributes.title}
                    ratings={wishlist.attributes.ratings}
                    discountedPrice={wishlist.attributes.discountedPrice}
                    quantity={wishlist.attributes.quantity}
                    
                    />
               </div>
              )
            })
          }
               </div>
          </div>
        )
      }
     </div> 
      <Footer />
    </div>
  );
};

export default Wishlist;
