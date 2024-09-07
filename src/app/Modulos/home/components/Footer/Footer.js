"use client";
import React from 'react';


const Footer = () => {
  return (
    <footer className="footer" >
      <div className="footer-container">
        <div className="footer-top">
          <div className="brand">
            <h2>Fruitables</h2>
            <p>Fresh products</p>
          </div>
          <div className="newsletter">
            <input type="email" placeholder="Your Email" />
            <button>Subscribe Now</button>
          </div>
          <div className="social-icons">
            <a href="#"><i className="fab fa-twitter"></i></a>
            <a href="#"><i className="fab fa-facebook"></i></a>
            <a href="#"><i className="fab fa-instagram"></i></a>
            <a href="#"><i className="fab fa-linkedin"></i></a>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-section">
            <h4>Why People Like Us!</h4>
            <p>
              Typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets including Lorem Ipsum.
            </p>
            <button>Read More</button>
          </div>
          <div className="footer-section">
            <h4>Shop Info</h4>
            <ul>
              <li>About Us</li>
              <li>Contact Us</li>
              <li>Privacy Policy</li>
              <li>Terms & Conditions</li>
              <li>Return Policy</li>
              <li>FAQ & Help</li>
            </ul>
          </div>
          <div className="footer-section">
            <h4>Account</h4>
            <ul>
              <li>My Account</li>
              <li>Shop Details</li>
              <li>Shopping Cart</li>
              <li>Wishlist</li>
              <li>Order History</li>
              <li>International Orders</li>
            </ul>
          </div>
          <div className="footer-section">
            <h4>Contact</h4>
            <p>Address: 1402 Nexus Blvd, NY 40247</p>
            <p>Email: example@mail.com</p>
            <p>Phone: +123-4567-8910</p>
            <p>Payment Accepted:</p>
          </div>
        </div>

        <div className="footer-credits">
          <p>© Your Site Name. All rights reserved.</p>
          <p>Designed by HTML Codex. Distributed by ThemeWagon.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
