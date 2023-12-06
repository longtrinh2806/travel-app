import React from "react";
import { FaPhoneAlt } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";
import "./Footer.css";

const Footer = () => {
  return (
    <>
      <div className="footer-component">
        <div className="footer-content">
          <div className="footer-contact-component">
            <div className="footer-call-us">
              <h3>Call Us</h3>
              <p>
                <FaPhoneAlt /> 1.820.3345.33
              </p>
            </div>
            <div className="footer-email">
              <h3>Email</h3>
              <p>
                <AiOutlineMail /> Contact@TravelTourWP.com
              </p>
            </div>
          </div>
          <div className="footer-aboutUs-component">
            <div className="footer-aboutus-content">
              <h3>About Us</h3>
              <p>
                {" "}
                <a>
                  {" "}
                  <span>Our Story</span>{" "}
                </a>{" "}
              </p>
              <p>
                {" "}
                <a>
                  {" "}
                  <span>Travel Blog & Tips</span>{" "}
                </a>{" "}
              </p>
              <p>
                {" "}
                <a>
                  {" "}
                  <span>Working With Us</span>{" "}
                </a>{" "}
              </p>
              <p>
                {" "}
                <a>
                  {" "}
                  <span>Be Our Partner</span>{" "}
                </a>{" "}
              </p>
            </div>
          </div>
          <div className="footer-support-component">
            <div className="footer-support-content">
              <h3>Support</h3>
              <p>
                {" "}
                <a>
                  {" "}
                  <span>Customer Support</span>{" "}
                </a>{" "}
              </p>
              <p>
                {" "}
                <a>
                  {" "}
                  <span>Privacy & Policy</span>{" "}
                </a>{" "}
              </p>
              <p>
                {" "}
                <a>
                  {" "}
                  <span>Contact Channels</span>{" "}
                </a>{" "}
              </p>
            </div>
          </div>
          <div className="footer-paySafe-component">
            <div className="footer-paySafe-content">
              <h3>Pay Safely With Us</h3>
              <p>The payment is encrypted and transmitted</p>
            </div>
          </div>
        </div>
        <div className="copyright-container">
          <p>&copy; 2023 Your Company Name. All Rights Reserved.</p>
        </div>
      </div>
    </>
  );
};

export default Footer;
