import React from 'react'
import { FaFacebook, FaHome, FaInstagram, FaLinkedin, FaMailBulk, FaPhone, FaTwitter, FaYoutube } from 'react-icons/fa'
import './Footer.css'

const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="footer-container">
            <div className="left">
              <h2>Contact Information</h2>
                <div className="location" style={{display:'flex'}}>
                    <FaHome style={{color:'#fff', fontSize:'18px', marginRight:'1rem'}}/>
                        <p>411021 &nbsp; pashan, pune, India.</p>
                </div>
                <div className="phone" style={{display:'flex'}}>
                    <FaPhone style={{color:'#fff', fontSize:'15px', marginRight:'2rem'}}/>
                    <p>+91-9876512340</p>
                </div>
                <div className="mail" style={{display:'flex'}}>
                    <FaMailBulk style={{color:'#fff', fontSize:'15px', marginRight:'2rem'}}/>
                    <p>myportfolio1@gmail.com</p>
                </div>
            </div>

            <div className="right">
                <h3  style={{borderBottom:'2px solid white', width:'15%', marginBottom:'5px'}}>About Me.</h3>
               
                <p>Hi.. This is Mudavath Raju a curious React Developer, i'am exploring react to create & develop amazing react applications</p>
                <div style={{marginTop:'10px'}}>
                    <h4  style={{borderBottom:'2px solid white', width:'36%', marginBottom:'5px'}}>Connect with me at below links:</h4>
                   
                    <FaInstagram style={{color:'#fff', fontSize:'25px'}}/> &nbsp;
                    <FaFacebook  style={{color:'#fff', fontSize:'25px'}}/> &nbsp;
                    <FaTwitter  style={{color:'#fff', fontSize:'25px'}}/> &nbsp;
                    <FaLinkedin  style={{color:'#fff', fontSize:'25px'}}/> &nbsp;
                    <FaYoutube  style={{color:'#fff', fontSize:'25px'}}/> &nbsp;
                </div>
            </div>
        </div>
      </div>
    </>
  )
}

export default Footer
