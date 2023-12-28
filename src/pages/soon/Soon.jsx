import React from 'react'
import "./soon.css"
import {BsFillTelephoneFill} from "react-icons/bs";
import {BiLogoGmail} from "react-icons/bi";
import {MdLocationOn} from "react-icons/md";
import {AiFillFacebook, AiFillInstagram} from "react-icons/ai"
import { RiTwitterXLine } from "react-icons/ri";
import {FaSnapchatSquare} from "react-icons/fa"
import logo from "../../assets/2.png"
import {Link} from "react-router-dom"

const Soon = () => {
  return (
    <div className='soon'> 
        <div className="soon-container">
            <div className="soon-logo">
                <img src={logo} alt="" />
            </div>
            <div className="soon-text">
                <h1>COMING SOON...</h1>
            </div>
           
            <div className="soon-contact-container">
                <div className="soon-contact">
                    <BsFillTelephoneFill className='soon-icons'  />
                    <p>+1(248) 853-0033</p>
                </div>
                <div className="soon-contact s-margin">
                    <BiLogoGmail className='soon-icons'  />
                    <p>totaltrailerparts@gmail.com</p>
                </div>
                <div className="soon-contact">
                    <MdLocationOn className='soon-icons'  />
                    <p>1747 E Auburn Rd Rochester Hills, MI</p>
                </div>
            </div>
            <div className="soon-socials">
                <Link to="https://www.facebook.com/TotalTrailer"><AiFillFacebook className='soon-icons1' /> </Link>
                <Link to="https://twitter.com/totaltrailer"><RiTwitterXLine className='soon-icons1' /> </Link>
                <Link to="https://www.instagram.com/total_trailerpart/"><AiFillInstagram className='soon-icons1' /></Link>

            </div>
        </div>
    </div>
  )
}

export default Soon