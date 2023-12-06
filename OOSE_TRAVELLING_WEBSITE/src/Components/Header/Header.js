import "./Header.css";
import React from "react";
import { FaPhoneAlt, FaFacebook, FaYoutube, FaTwitter } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";
import { FiLogIn } from "react-icons/fi";
import { BiUser } from "react-icons/bi";
import Logo from "../../Assets/Logo/travel-logo.png";
// import Container from "react-bootstrap/Container";
// import Nav from "react-bootstrap/Nav";
// import Navbar from "react-bootstrap/Navbar";
// import NavDropdown from "react-bootstrap/NavDropdown";
import { NavLink } from "react-router-dom";
import UserProfile from './UserProfile ';

const Header = () => {
  return (
    <>
      <div className="header-component">
        <div className="contact-component">
          <div className="content-left">
            <div className="phone">
              <FaPhoneAlt /> 1.820.3345.33
            </div>
            <div className="email">
              <AiOutlineMail /> Contact@TravelTourWP.com
            </div>
          </div>
          <div className="content-middle">
            <div className="icon-content-middle">
              <FaFacebook />
            </div>
            <div className="icon-content-middle">
              <FaYoutube />
            </div>
            <div className="icon-content-middle">
              <FaTwitter />
            </div>
          </div>
          <div className="content-right">
            <div className="login">
              <FiLogIn /> <NavLink to="/login" className="active-link">
                Login
              </NavLink>
            </div>
            <div className="sign-up">
              <BiUser /> <NavLink to="/sign-up" className="active-link">
                Sign Up
              </NavLink>
            </div>
          </div>
        </div>
        <div className="navbar-component">
          <div className="logo">
            <img
              src={Logo}
              alt="Logo"
              style={{ width: "120px", height: "100px" }}
            />
            TravelTour
          </div>
          <div className="navbar-menu">
            <NavLink to="/" activeClassName="active-link">
              Home
            </NavLink>
            <NavLink to="/all-tours" activeClassName="active-link">
              All Tours
            </NavLink>
            <NavLink to="/destination" activeClassName="active-link">
              Destination
            </NavLink>
            <NavLink to="/blog" activeClassName="active-link">
              Blog
            </NavLink>
            <NavLink to="/contact" activeClassName="active-link">
              Contact
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
