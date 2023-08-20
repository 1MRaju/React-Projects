// import React from 'react'
// import Navbar from '../components/Navbar'
// import Footer from '../components/Footer'
// import HeroImgNew from '../components/HeroImgNew'

// const Contact = () => {
//      let heading = 'CONTACT.'
//      let  text = "Let's collaborate"
  
//   return (
//     <>
//     <Navbar/>
//     <HeroImgNew heading={heading} text={text}/>
//     <Footer/>
//   </>
//   )
// }

// export default Contact


import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import HeroImgNew from '../components/HeroImgNew';
import '../components/Contact.css'

const Contact = () => {
  const heading = 'CONTACT.';
  const text = "Let's collaborate";

  return (
    <>
      <Navbar />
      <HeroImgNew heading={heading} text={text} />
      <div className="contact-container">
        <div className="contact-form">
          <h2>Contact Me</h2>
          <form>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input type="text" id="name" name="name" />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" name="email" />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea id="message" name="message"></textarea>
            </div>
            <button className="btn">Send</button>
          </form>
        </div>
        {/* <div className="contact-info">
          <h2>Contact Information</h2>
          <p>Email: example@example.com</p>
          <p>Phone: +1234567890</p>
          <p>Address: 123 Main Street, City</p>
        </div> */}
      </div>
      <Footer />
    </>
  );
};

export default Contact;

