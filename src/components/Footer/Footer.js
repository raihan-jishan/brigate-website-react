import React from "react";
import "../../css/Footer.css";
const Footer = () => {
  return (
    <div>
      <footer>
        <div class="content">
          <div class="top">
            <div class="logo-details">
              <span>
                <i class="fa-solid fa-paint-roller"></i> briagte
              </span>
            </div>
            <div class="media-icons">
              <a href="#">
                <i class="fab fa-facebook-f"></i>
              </a>
              <a href="#">
                <i class="fa-brands fa-square-twitter"></i>
              </a>
              <a href="#">
                <i class="fab fa-instagram"></i>
              </a>
              <a href="#">
                <i class="fab fa-linkedin-in"></i>
              </a>
              <a href="#">
                <i class="fab fa-youtube"></i>
              </a>
            </div>
          </div>
          <div class="link-boxes">
            <ul class="box">
              <li class="link_name">LINKS</li>
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">Contact us</a>
              </li>
              <li>
                <a href="#">About us</a>
              </li>
              <li>
                <a href="#">Get started</a>
              </li>
            </ul>
            <ul class="box">
              <li class="link_name">ABOUT US</li>
              <li>
                <a href="">
                  Mauris mattis auctor cursus. Phasellus tellus tellus,
                  imperdiet ut imperdiet eu, iaculis a sem. Donec vehicula
                  luctus nunc in laoreet.
                </a>
              </li>
            </ul>
            <ul class="box">
              <li class="link_name">Account</li>
              <li>
                <a href="#">Profile</a>
              </li>
              <li>
                <a href="#">My account</a>
              </li>
              <li>
                <a href="#">Prefrences</a>
              </li>
              <li>
                <a href="#">Purchase</a>
              </li>
            </ul>
            <ul class="box">
              <li class="link_name">Contact Us</li>
              <li>
                <a href="">Raffles Avenue, Singapore Flyer, Singapore</a>
              </li>
              <li>
                <a href="">+(98) 888 7777 +(12) 999 22333</a>
              </li>
            </ul>
            <ul class="box input-box">
              <li class="link_name">Subscribe</li>
              <li>
                <input type="text" placeholder="Enter your email" />
              </li>
              <li>
                <input type="button" value="Subscribe" />
              </li>
            </ul>
          </div>
        </div>
        <div class="bottom-details">
          <div class="bottom_text">
            <span class="copyright_text">
              {" "}
              2023 <a href="#">brigate.</a>All rights reserved
            </span>
            <span class="policy_terms">
              <a href="#">Privacy policy</a>
              <a href="#">Terms & condition</a>
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
