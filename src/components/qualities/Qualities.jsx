import React from 'react'
import icon1 from "../../assets/icon1.png"
import icon2 from "../../assets/pay.png"
import icon3 from "../../assets/cyber.png"
import icon4 from "../../assets/agent.png"
import "./qualities.css"

const Qualities = () => {
  return (
    <div className='qualities'>
        <div className="qualities-container">
            <div className="quality1">
                <img src={icon1} alt="" />
                <p>ON-TIME DELIVERY ON ALL ORDERS</p>
            </div>
            <div className="quality1">
                <img src={icon2} alt="" />
                <p>30 DAYS MONEY BACK GUARANTEE</p>
            </div>
            <div className="quality1">
                <img src={icon3} alt="" />
                <p>SAFE SHOPPING GUARANTEE</p>
            </div>
            <div className="quality1">
                <img src={icon4} alt="" />
                <p>24/7 ONLINE SUPPORT </p>
            </div>
        </div>
    </div>
  )
}

export default Qualities