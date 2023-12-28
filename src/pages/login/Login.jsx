import React, {useState} from 'react'
import Navbar from '../../components/navbar/Navbar'
import Footer from '../../components/footer/Footer'
import axios from 'axios'
import "./login.css"
import { storeUser } from '../helpers'
import { ToastContainer, toast } from "react-toastify";

import 'react-toastify/dist/ReactToastify.css';

const initialUser = {password:"", identifier:""}

const Login= () => {

    const [showPassword, setShowPassword] = useState(false);
    
    const [user, setUser] = useState(initialUser);
  

    const handleChange = ({ target }) => {
        const { name, value } = target;
        setUser((currentUser) => ({
          ...currentUser,
          [name]: value,
        }));
      };

    const handleLogin = async () => {
        const url = `http://localhost:1337/api/auth/local`;
        try {
          if (user.identifier && user.password) {
            const { data } = await axios.post(url, user);
            if (data.jwt) {
              storeUser(data);
              toast.success("Logged in successfully!", {
                hideProgressBar: true,
                position: toast.POSITION.TOP_RIGHT,
              });
              setUser(initialUser);
              const newUrl = '/';
        
              if (window.location.pathname === newUrl) {
                // If the user is already on the target page, perform a full page reload
                window.location.reload();
              } else {
                // Navigate to the new page
                window.location.href = newUrl;
              }
            }
          }
        } catch (error) {
          toast.error("Wrong Username or Password!", {
            hideProgressBar: true,
            position: toast.POSITION.TOP_RIGHT,
          });
        }
      };
  
    const handleTogglePassword = () => {
      setShowPassword(!showPassword);
    };

    const navigateToRegister = () => {
        // Use the URL of the page you want to navigate to
        const newUrl = '/register';
        
        if (window.location.pathname === newUrl) {
          // If the user is already on the target page, perform a full page reload
          window.location.reload();
        } else {
          // Navigate to the new page
          window.location.href = newUrl;
        }
      };
  return (
    <div className="register">
        <Navbar />
        <div className='register-container'>
            <div className="register-title">
                <h1>CUSTOMER LOGIN</h1>
            </div>
            <div className="register-form-main">
                <div className="register-form-container">
                    <div className="register-form-1">
                        <div className="form-title">
                            <h1>REGISTERED CUSTOMERS</h1>
                        </div>
                        <div className="form-new">
                            <p>If you have an account, sign in with your email address.</p>
                        </div>
                        <div className="form-input-container">
                            <label>Email <span>*</span></label>
                            <input 
                            type="email" 
                            name="identifier" 
                            value={user.identifier}
                            onChange={handleChange}
                            />
                        </div>
                        <div className="form-input-container">
                            <label>Password <span>*</span></label>
                            <input 
                            type={showPassword ? 'text' : 'password'}
                            name="password"
                            value={user.password}
                            onChange={handleChange}
                            />
                        </div>
                        <div className="form-show-password">
                            <input 
                                type="checkbox"  
                                checked={showPassword}
                                onChange={handleTogglePassword}
                            />
                            <p>Show Password</p>
                        </div>
                        <div className="form-button-container">
                        <div className="register-form-button-login" style={{marginLeft: "0rem"}} onClick={handleLogin}>
                            <p>Login</p>
                            <ToastContainer />
                        </div>
                        <div className="forgot-password">
                            <p>Forgot password?</p>
                        </div>
                        </div>
                    </div>
                    <div className="register-form-2">
                    <div className="form-title">
                            <h1>NEW CUSTOMERS</h1>
                        </div>
                        <div className="form-new">
                            <p>New here? Tap the button to set up your account and explore a wide range of quality products! </p>
                        </div>
                        <div className="register-form-button" style={{marginLeft: "0rem"}} onClick={navigateToRegister}>
                            <p>Register</p>
                        </div>
                    </div>
                </div>
           
            </div>
        </div>
        <Footer />
    </div>
  )
}

export default Login