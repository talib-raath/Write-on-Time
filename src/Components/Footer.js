import React from 'react';
import { Link } from 'react-router-dom';
import Image from '../Images/logo.png'
function Footer() {
  return (
    <footer className='footer'>
      <div className="container">
        <div className='wrapper'>
          <div className='col-lg-3'>
            <img className="img2" src={Image} alt="Loading" />
          </div>
          <div className="col-lg-4">
            <h3>Navigation</h3>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/generate-letter">Generate Letter</Link></li>
              <li><Link to="/about-us">About Us</Link></li>
              <li><Link to="/contact-us">Contact Us</Link></li>
              <li><Link to="/donate">Donate</Link></li>
              <li><Link to="/disclaimer">Disclaimer</Link></li>
              <li><Link to="/privacy-policy">Privacy Policy</Link></li>
            </ul>
          </div>
          <div className="col-lg-4">
            <h3>Follow Us</h3>
            <ul>
              <li><a href="https://www.facebook.com/">Facebook</a></li>
              <li><a href="https://twitter.com/">Twitter</a></li>
              <li><a href="https://www.instagram.com/">Instagram</a></li>
              <li><a href="https://www.linkedin.com/">LinkedIn</a></li>
            </ul>
          </div>
          <div className="col-lg-4">
            <h3>Contact Us</h3>
            <p style={{ color: 'hsl(210deg 8% 60%)' }}>Email: support@writeontimenonprofit.org</p>
          </div>
        </div>
      </div>
      <div className="bottom-bar">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <p>&copy; Write On Time is a registered 501(c)(3) non-profit organization. All Rights Reserved.</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
