import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";
const Footer = () => {
  return (
    <footer className="footer-distributed bg-gray-900 text-2xl">
      <div className="footer-right  items-center text-gray-400 hover:text-gray-200">
        <Link to="/">Team</Link>
      </div>
      <div className="footer-left text-gray-400 hover:text-gray-200">
        <p>Mansi &copy; 2022</p>
      </div>
    </footer>
  );
};

export default Footer;
