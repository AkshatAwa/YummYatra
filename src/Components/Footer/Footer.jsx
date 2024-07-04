// Footer.js
import React from 'react';
import './Footer.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import img1 from './foot1.jpg';
import img2 from './foot2.jpg';
import img3 from './foot3.jpg';
import img4 from './foot4.jpg';


function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section footer-brand">
          <h2>Yumm Yatra</h2>
          <p>In the new era of technology, we look to the future with certainty and pride for our company and work.</p>
          <div className="social-icons">
            <a href="#"><i className="fab fa-twitter"></i></a>
            <a href="#"><i className="fab fa-facebook-f"></i></a>
            <a href="https://www.instagram.com/yummyatra?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="><i className="fab fa-instagram"></i></a>
            <a href="#"><i className="fab fa-pinterest-p"></i></a>
          </div>
        </div>
        <div className="footer-section footer-links">
          <h3>Pages</h3>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Menu</a></li>
            <li><a href="#">Pricing</a></li>
            <li><a href="#">Blog</a></li>
            <li><a href="#">Contact</a></li>
            <li><a href="#">Delivery</a></li>
          </ul>
        </div>
        <div className="footer-section footer-utility">
          <h3>Utility Pages</h3>
          <ul>
            <li><a href="#">Start Here</a></li>
            <li><a href="#">Styleguide</a></li>
            <li><a href="#">Password Protected</a></li>
            <li><a href="#">404 Not Found</a></li>
            <li><a href="#">Licenses</a></li>
            <li><a href="#">Changelog</a></li>
            <li><a href="#">View More</a></li>
          </ul>
        </div>
        <div className="footer-section footer-instagram">
          <h3>Follow Us On Instagram</h3>
          <div className="instagram-images">
            <img src={img1} alt="Instagram 1" href="https://www.instagram.com/yummyatra?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="/>
            <img src={img2} alt="Instagram 2" />
            <img src={img3} alt="Instagram 3" />
            <img src={img4} alt="Instagram 4" />
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>Copyright &copy; 2024 YummYatra. All Rights Reserved</p>
      </div>
    </footer>
  );
}

export default Footer;
