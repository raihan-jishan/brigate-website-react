/*
    title: Nav.js file,
    desc: navbar file for application, all jsx  codes , 
    date: 29 - 6 - 2023.
*/
import React, { useState } from "react";
import Brand from "./Brand";
import "../../css/Nav.css";
import { HashLink } from "react-router-hash-link";
import { Link, NavLink } from "react-router-dom";
// useState hooks
const Nav = () => {
  const [click, setClick] = useState(false);
  // handleOpen
  const handleOpen = () => {
    setClick(!click);
  };
  // handleClose
  const handleClose = () => {
    setClick(false);
  };
  return (
    <>
      <header id="header">
        <Brand />
        <div class="hamburger" onClick={handleOpen}>
          <div class="line"></div>
          <div class="line"></div>
          <div class="line"></div>
        </div>
        <nav class={click ? "navbar active" : "navbar"}>
          <ul>
            <li onClick={handleClose}>
              <NavLink
                to={"/"}
                className={(navInfo) => (navInfo.isActive ? "active" : "")}
              >
                Home <i class="fa-solid fa-home"></i>
              </NavLink>
            </li>
            <li onClick={handleClose}>
              <NavLink
                to={"/pages"}
                className={(navInfo) => (navInfo.isActive ? "active" : "")}
              >
                pages <i class="fa-regular fa-paper-plane"></i>
              </NavLink>
            </li>
            <li onClick={handleClose}>
              <HashLink to={"#service"}>
                Service <i class="fa-solid fa-file-contract"></i>
              </HashLink>
            </li>
            <li onClick={handleClose}>
              <HashLink to={"#bestProejects"}>
                Projects <i class="fa-solid fa-person-digging"></i>
              </HashLink>
            </li>
            <li onClick={handleClose}>
              <a href="">
                Account <i class="fa-solid fa-user"></i>
              </a>
            </li>
            <li onClick={handleClose}>
              <Link to={"/contact"}>
                contact <i class="fa-regular fa-address-book"></i>
              </Link>
            </li>
            <li onClick={handleClose}>
              <a href="">
                <i class="fa-solid fa-search"></i>
              </a>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Nav;
