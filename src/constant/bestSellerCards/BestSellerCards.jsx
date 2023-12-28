import React from 'react'
import { AiOutlineHeart } from "react-icons/ai";
import{FiShoppingBag} from "react-icons/fi";


const BestSellerCards = ({ img, title, ratings, discountedPrice, originalPrice, onClick}) => {

    const handleClick = async () => {
        // Prepare the data to be sent to the Strapi API

        // let imageURL  = `http://localhost:1337${img.attributes.img.data[0].attributes.formats.thumbnail.img}`

        const wishlistItemData = {
          "data": {
            "title": title,
            // "img": imageURL,
            "ratings": ratings,
            "originalPrice": originalPrice,
            "discountedPrice": discountedPrice,
            "quantity": 10
    }
          
        };

        console.log(img)
        console.log(wishlistItemData);

        try {
          const response = await fetch("http://localhost:1337/api/wishlists", {
            method: 'POST',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(wishlistItemData),
            
          });
    
          if (response.ok) {
            // Wishlist item created successfully
            console.log('Wishlist item added successfully!');
          } else {
            // Handle the case where the request was not successful
            console.error('Failed to add wishlist item. Status:', response.status);
            // You can also log the response body to get more details
            const responseBody = await response.json();
            console.log('Response body:', responseBody);
            console.error('Response body:', responseBody);
          }
        } catch (error) {
          // Handle any network or other errors
          console.error('Error adding wishlist item:', error);
          
        }
      };


  return (
    <div className='card-data'>
        <div className="card-data-container">
            <div className="card-data-image"> 
                <img src={img} alt="" />
            </div>
            <div className="card-data-preview" onClick={onClick}>
                <h1>QUICK VIEW</h1>
            </div>
            <div className="card-data-details">
                <h1>{title}</h1>
                <p style={{color:"gold"}}>{ratings} </p>
                <div className="card-data-amount">
                <p> ${originalPrice}</p>
                </div>
            </div>
            <div className="card-data-cta">
                <div className="wishlist" onClick={handleClick}>  
                <AiOutlineHeart className='card-icon' /> 
                </div>
                <div className="cart">
                    <FiShoppingBag className='card-icon' />
                    <p>ADD TO CART</p>
                </div>
            </div>
        </div>
      
    </div>
  )
}

export default BestSellerCards