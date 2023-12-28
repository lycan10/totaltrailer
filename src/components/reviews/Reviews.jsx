import React from 'react'
import { reviewData } from '../../constant/data/data'
import Slider from "react-slick";
import {IoIosArrowForward, IoIosArrowBack } from "react-icons/io"
import "./reviews.css"


const Reviews = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: <IoIosArrowBack className='arrow-size' /> ,
        nextArrow: <IoIosArrowForward className='arrow-size'  />
      };
  return (
    <div className='reviews'>
        <div className="reviews-container">
            <div className="reviews-title">
                <h1>REVIEWS</h1>
                <div className="reviews-button"></div>
            </div>
            <div className="reviews-slides">
                <Slider {...settings}>
                    {
                        reviewData.map((item)=>{
                            return(
                                <div key={item.id} className="review-details-container">
                                    <div className="review-details">
                                        <p>{item.text}</p>
                                    </div>
                                    <div className="reviews-user-container">
                                        <div className="reviews-user-image">
                                            <img src={item.img} alt="" />
                                        </div>
                                        <div className="reviews-user-author">
                                            <p>{item.author}</p>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </Slider>
            </div>
        </div>
    </div>
  )
}

export default Reviews