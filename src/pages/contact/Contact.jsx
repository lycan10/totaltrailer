import React from 'react'
import "./contact.css"
import Navbar from '../../components/navbar/Navbar'
import {BsFillTelephoneFill} from "react-icons/bs";
import {BiLogoGmail} from "react-icons/bi";
import {MdLocationOn} from "react-icons/md";
import {AiFillFacebook, AiFillInstagram} from "react-icons/ai"
import { RiTwitterXLine } from "react-icons/ri";
import {FaSnapchatSquare} from "react-icons/fa"
import banner from "../../assets/cb1.png"
import image1 from "../../assets/con2.jpg"
import Footer from '../../components/footer/Footer';
import Map from '../../constant/map/Map';
import {Link} from "react-router-dom"
import { LuCalendarClock } from "react-icons/lu";

const Contact = () => {
  return (
    <div className='contact'>
      <Navbar />
      <div className="contact-container">
        <div className="contact-header-image">
          <div className="banner-opacity"></div>
          <img src={banner} alt="" />
          <div className="contact-header-text">
          <h1>Contact</h1>
        </div>
        </div>
        <div className="contact-title">
          <div className="contact-title-header">
            <div className="contact-vertical"></div>
          <h3>Get in Touch</h3>
          </div>
          <h1>We Welcome Your Feedback and Stand Ready to Assist You</h1>
        </div>
        <div className="contact-content">
          <div className="contact-details">
            <p>At Total Trailer, we are here to assist you with any questions, inquiries, or assistance you may need. Feel free to get in touch with us through the following methods:</p>

            <div className="contact-banner">
              <img src={image1} alt="" />
            </div>
          
          <div className="customer-support">
            <h1>Customer Support:</h1>
            <div className="contact-info">
              <BsFillTelephoneFill className='contact-icons' />
              <p>Phone: +1(248) 853-0033</p>
            </div>
            <div className="contact-info">
              <BiLogoGmail className='contact-icons' />
              <p>Email: totaltrailerparts@gmail.com</p>
            </div>
          </div>
          <div className="customer-support">
            <h1>Visit us: </h1>
            <div className="contact-info">
              <MdLocationOn className='contact-icons' />
              <p>1747 E Auburn Rd Rochester Hills, MI, 48307</p>
            </div>
          </div>
          <div className="customer-support">
            <h1>Working Hours: </h1>
            <div className="contact-info">
              <LuCalendarClock className='contact-icons' />
              <p>Monday - Friday: 8am - 5pm (Closed Weekends).</p>
            </div>
          </div>
          <div className="customer-support">
            <h1>Social media: </h1>
            <div className="contact-info"> 
            <Link to="https://www.facebook.com/TotalTrailer"><AiFillFacebook  className='contact-socials' /> </Link>
            <Link to="https://twitter.com/totaltrailer"><RiTwitterXLine  className='contact-socials'  /> </Link>
            <Link to="https://www.instagram.com/total_trailerpart/"><AiFillInstagram  className='contact-socials'  /></Link>
            <Link to="/"><FaSnapchatSquare  className='contact-socials'  /></Link>
            </div>
          </div>
          </div>
          <div className="contact-form">
            <div className="form-name">
              <input placeholder='Full name' type='text' name='name' value="name" />
            </div>
            <div className="form-name">
              <input placeholder='Email address' type='email' name='email' value="email" />
            </div>
            <div className="form-phone">
            <div className="form-name input2">
              <input placeholder='Phone' type='tel' name='phone' value="phone" />
            </div>
            <div className="form-name">
              <input placeholder='Subject' type='text' name='subject' value="subject" />
            </div>
            </div>
            <div className="form-name">
              <textarea placeholder='Message' type='text' name='message' value="message" />
            </div>
            <div className="footer-submit">
              <button>Submit</button>
            </div>
          </div>
        </div>
        <div className="contact-map">
          <Map />
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Contact